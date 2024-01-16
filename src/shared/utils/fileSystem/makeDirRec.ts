export const makeDirRec = async (
  path: string[],
  root: FileSystemDirectoryHandle
): Promise<FileSystemDirectoryHandle> => {
  const dir = await root.getDirectoryHandle(path[0], { create: true })

  if (path.length > 1) return await makeDirRec(path.slice(1), dir)

  return root
}

const createDirRecAdapter = async (
  path: string
): ReturnType<typeof makeDirRec> => {
  return await makeDirRec(
    path.split('/').filter(elm => elm !== ''),
    await navigator.storage.getDirectory()
  )
}

export default createDirRecAdapter
