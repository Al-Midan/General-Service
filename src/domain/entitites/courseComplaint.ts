export interface courseComplaint {
    serviceName?: string;
    orderNumber?: string;
    courseName: string;
    instructorName: string;
    subject?: string;
    description: string;
    type: 'courses';
    complaintPhoto?: FileDetails;
  }
  
  interface FileDetails {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
  }