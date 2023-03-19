export interface IUsers {
  count: number;
  data: IUsersData[];
}

export interface IUsersData {
  // tree(tree: any): import("react").ReactNode;
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
  tree: number;
  isActive: number;
  referals: any;
  created_at: string;
}

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  card_number: string;
  expiration_date: string;
  password?: string | null;
}

export interface IAllUsers {
  value: number;
  label: string;
}
