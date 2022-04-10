export interface Product {
  names: string,
  category: string,
  description: string,
  details1: string,
  details2: string,
  brand: string,
  images: string[],
  dataSheet: string,
  deleted: string,
  createdAt: string,
  updatedAt: string,
  id: string,
}


export interface ProductBodyRequest {
  args: {
    brand: any,
    category: string,
    page: number,
    size: number
  }
}