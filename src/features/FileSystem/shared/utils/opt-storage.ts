type getOptStorageReturnType = Promise<FileSystemDirectoryHandle | Error>

export const getOptStorage = async (): getOptStorageReturnType => {
  return (await navigator?.storage.persist())
    ? await navigator.storage.getDirectory()
    : new Error('File System Storage denied')
}
