export interface Address {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
