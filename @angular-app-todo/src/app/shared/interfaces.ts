export interface IUser {
  email: string,
  password: number | string,
  returnSecureToken?: boolean
}

export interface ITask {
  id?: string,
  title?: string,
  text?: string,
  status?: boolean,
  order?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface IContactForm {
  email: string,
  text: string
}