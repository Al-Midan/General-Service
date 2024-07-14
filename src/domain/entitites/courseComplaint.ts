export interface courseComplaint {
    serviceName?: string;
    ServicerName?: string;
    courseName?: string;
    instructorName?: string;
    subject?: string;
    description?: string;
    type?: 'courses' | 'services' | 'general';
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