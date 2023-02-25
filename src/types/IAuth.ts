export interface ILogin {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  birthday: string;
  pinfl: number;
  phone: number;
  patronymic: string | null;
  refcode: number | null;
  refCounts: number;
  refs: number[];
  balance: number;
  isActivated: boolean;
  status: string;
  roles: string[];
  token: string;
}
