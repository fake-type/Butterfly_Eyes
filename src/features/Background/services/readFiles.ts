import { makeDirRec } from '@/shared/utils/fileSystem/makeDirRec'

async function readFiles(path: string): Promise<FileSystemFileHandle[]> {
  const files = new Array<FileSystemFileHandle>()
  const dirHandle = await makeDirRec(
    path.split('/').filter(elm => elm !== ''),
    await navigator.storage.getDirectory()
  )

  for await (const [, handle] of dirHandle)
    if (handle.kind === 'file') files.push(handle)

  return files
}

export default readFiles
