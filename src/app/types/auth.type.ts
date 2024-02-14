import { ErrorType } from './error.type';

// export type authType = {
//   success: boolean;
//   status_code: number;
//   status_message: string;
// };

export interface AuthResponseType {
  success: boolean;
  status_code: number;
  status_message: string;
  error?: ErrorType;
}
