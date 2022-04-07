interface Header {
  'Content-Type': string,
  Accept: string
}

export interface RequestConfig {
  method: string,
  url: string,
  headers: Header,
}