export interface IUser {
  email: string,
  password: number | string,
  returnSecureToken?: boolean
}

export interface IFbAuthResponse {
  idToken: string,
  expiresIn: string
}

export interface IPost {
  id?: string,
  title: string,
  text: number | string,
  author: string,
  date: Date
}

export interface IFbCreateResponse {
  name?: string
}