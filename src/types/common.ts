export interface IUserRef {
  _id: string;
  email: string;
}

export interface IPagination {
  skip?: number;
  limit?: number;
}
