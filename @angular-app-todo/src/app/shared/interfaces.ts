export interface IUser {
  email: string,
  password: number | string,
  returnSecureToken?: boolean
}

export interface ITask {
  id?: string,
  title: string,
  text: string,
  status?: boolean,
  date?: any,
  order?: number,
}
