import { type ICommand } from './interfaces/command.interface'

export const execute = async (
  ...commands: Array<Promise<ICommand | ICommand[]>>
): Promise<void> => {
  await Promise.allSettled(commands.flat())
}
