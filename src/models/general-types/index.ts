export interface FilterProps {
  id: string;
  name: string;
}

export interface PaginationProps {
  totalDocs: number
}

export type Categories = FilterProps[] | []
export type Brands = FilterProps[] | []