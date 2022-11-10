export interface ILogin {
  firstname: string;
  lastname: string;
  address: string;
  pinfl: number;
  phone: number;
  patronymic: string | null;
  refcode: number | null;
  id: number;
  refCounts: number;
  refs: number[];
  balance: number;
  isActivated: boolean;
  status: string;
  role: string;
  token: string;
}
