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
  role: string | null;
  isActive: string | null;
  created_at: string;
}
