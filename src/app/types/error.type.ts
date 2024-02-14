export interface errorType {
  error: {
    success: boolean;
    status_code: number;
    status_message: string;
  };
}

export interface ET {
  success: boolean;
  status_code: number;
  status_message: string;
}

export const defaultErrorType = {
  error: {
    success: true,
    status_code: 0,
    status_message: '',
  },
};
