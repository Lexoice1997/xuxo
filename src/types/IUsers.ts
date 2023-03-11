export interface IUsers {
  count: number;
  data: IUsersData[];
}

export interface IUsersData {
  id: number;
  first_name: string;
  last_name: string;
  balance: number;
  password_number: string;
  phone_number: string;
  pinfl: string;
  card_number: string;
  expiration_date: string;
  status: string;
  role: string;
  isActive: number;
  referals: any;
  created_at: string;
}

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  card_number: string;
  expiration_date: string;
}

export interface IAllUsers {
  value: number;
  label: string;
}
