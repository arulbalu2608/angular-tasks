export interface Contact {
  name: string;
  age: number;
}

export interface Todo {
  id: string;
  content: string;
}
export interface FakeProduct {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}