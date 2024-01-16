import { getOptStorage } from '../shared/utils/opt-storage.ts'

export const getFile = async (fullPath: string): Promise<File | Error> => {
  const optStorageValue = await getOptStorage()
  if (optStorageValue instanceof Error) throw optStorageValue

  try {
    const fileHandle = await optStorageValue.getFileHandle('')

    return await fileHandle.getFile()
  } catch (err) {
    return new Error()
  }
}
