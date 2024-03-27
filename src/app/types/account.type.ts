// import { ErrorType } from './error.type';

// export type accountType = {
//   id: number;
//   username: string;
//   name: string;
//   iso_3166_1: string;
//   iso_639_1: string;
// };

export type AccountResponseType = {
  active: boolean;
  created_at: string;
  dob: string;
  email: string;
  id: string;
  role: string;
};
