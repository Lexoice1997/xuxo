import { IUsersData } from './IUsers';

export interface IPayments {
  count: number;
  data: IPaymentsData[];
}

export interface IPaymentsData {
  id: 1;
  customerId: 1;
  amoute: 100000;
  status: string;
  created_at: null;
  customer: IUsersData;
}

export interface IPaymentOneUser {
  id: number;
  customerId: 1;
  amoute: 100000;
  status: string;
  created_at: null;
}
