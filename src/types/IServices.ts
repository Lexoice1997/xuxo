export interface IService {
  id: number;
  image: string;
  title: string;
  phone: string;
}

export interface ICreateService {
  image?: string;
  title: string;
  phone: string;
}
