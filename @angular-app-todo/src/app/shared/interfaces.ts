export interface IUser {
  email: string,
  password: number | string,
  returnSecureToken?: boolean
}

export interface ITask {
  id?: string | number,
  title?: string,
  text: string,
  status: boolean,
  date: Date,
  order: number,
}
