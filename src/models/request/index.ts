interface Header {
  'Content-Type': string,
  Accept: string
}

export interface RequestConfig {
  method: string,
  url: string,
  headers: Header,
  data: any
}

export interface BodyGetAllProducts {
  args: {
    brand: any,
    category: string,
    page: number,
    size: number
  }
}