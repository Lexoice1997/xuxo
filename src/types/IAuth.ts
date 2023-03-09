export interface ILogin {
  token: string;
  user: ILoginData;
}

export interface ILoginData {
  id: number;
  first_name: string;
  last_name: string;
  balance: number;
  passport_number: string;
  phone_number: string;
  pinfl: string;
  card_number: string;
  expiration_date: string;
  status: string;
  role: string;
  isActive: number;
  created_at: string;
}
