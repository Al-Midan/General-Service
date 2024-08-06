import { KafkaModule } from "../../../utils/kafka/kafkaModule";

class KafkaProducer extends KafkaModule {
  constructor() {
    //super('general-service-producer', ['localhost:9092']);
    super("user-service-producer", ["kafka:29092"]);
  }

  async sendEnrolledCoursesRequest(userId: string): Promise<void> {
    await this.connect();
    await this.sendMessage("enrolled-courses-request", userId, { userId });
  }
}

export const kafkaProducer = new KafkaProducer();
