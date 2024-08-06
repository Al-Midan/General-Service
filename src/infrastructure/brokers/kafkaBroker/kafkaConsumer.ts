import { KafkaModule } from "../../../utils/kafka/kafkaModule";
import { KafkaMessage } from "kafkajs";

class KafkaConsumer extends KafkaModule {
  private responseHandlers: Map<string, (courses: any) => void> = new Map();

  constructor() {
    //super('general-service-consumer', ['localhost:9092']);
    super("user-service-producer", ["kafka:29092"]);
  }

  async init() {
    await this.connect();
    await this.subscribeToTopic("enrolled-courses-response");
    this.startConsuming();
  }

  private async startConsuming() {
    await this.runConsumer(async (message: KafkaMessage) => {
      const messageData = JSON.parse(message.value!.toString());
      const handler = this.responseHandlers.get(messageData.userId);
      if (handler) {
        handler(messageData.courses);
        this.responseHandlers.delete(messageData.userId);
      }
    });
  }

  waitForEnrolledCoursesResponse(userId: string): Promise<any> {
    return new Promise((resolve) => {
      this.responseHandlers.set(userId, resolve);
    });
  }
}

export const kafkaConsumer = new KafkaConsumer();
