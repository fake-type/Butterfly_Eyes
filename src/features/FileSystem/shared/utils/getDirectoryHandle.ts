export const getDirectory = async (
  rootDir: FileSystemDirectoryHandle,
  name: string
): Promise<FileSystemHandle | undefined> => {
  if (navigator.storage !== undefined && (await navigator.storage.persist())) {
    for await (const [, handle] of rootDir)
      if (handle.name === name) return handle
  }
}
