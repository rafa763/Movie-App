import { accountType } from '../types/account.type';

export function mapAccountInfo(response: any): accountType {
  return {
    id: response.id,
    username: response.username,
    name: response.name,
    iso_3166_1: response.iso_3166_1,
    iso_639_1: response.iso_639_1,
  };
}
