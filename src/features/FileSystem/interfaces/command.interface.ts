export interface ICommand {
  readonly type: string
  payload: {
    fullPath: string
  }
}
