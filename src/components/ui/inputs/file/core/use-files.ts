import { useState } from 'react'
import { base64ToFile } from './file-to-base64'

export type UseFilesProps = {
  defaultValue?: Array<File | string | undefined>
}

const getInitialState = (state: UseFilesProps['defaultValue']): File[] => {
  const base64 = (state?.filter((i) => typeof i === 'string' && !!i.length) || []) as string[]
  const files = (state?.filter((i) => i instanceof File && i) || []) as File[]

  return [...files, ...base64.map((i) => base64ToFile(i))]
}

export const useFiles = (props: UseFilesProps) => {
  const [files, setFiles] = useState<File[]>(() => getInitialState(props.defaultValue))

  const addFiles = (files: File[]) => {
    setFiles(files)
  }

  const removeFile = (file: File) => setFiles((state) => state.filter((i) => i !== file))

  return {
    files,

    addFiles,
    removeFile,
  }
}
