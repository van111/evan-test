export interface QueryStringParams {
  [key: string]: string | number
}

export interface Payload {
  [key: string]: string | boolean | number | Payload
}
