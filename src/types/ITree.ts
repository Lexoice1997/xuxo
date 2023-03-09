export interface IReferralData {
  customerId: number;
  referal1_id: number;
  referal2_id: number;
  create_at: string;
  referal_1: any;
  referal_2: any;
}

export interface IResponseTree<IReferralData> {
  message: string;
  payload: IReferralData[];
}
