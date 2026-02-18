
export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

export interface Book {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  coverImage: string;
  features: string[];
}
