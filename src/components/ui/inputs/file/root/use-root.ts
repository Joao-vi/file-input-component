import { ChangeEvent, DragEvent, createContext, useContext } from 'react'

import { UseFilesProps, useFiles } from '../core/use-files'

export type UseRootProps = {
  defaultValue: UseFilesProps['defaultValue']
}

export const useRoot = ({ defaultValue }: UseRootProps) => {
  const { files, addFiles, removeFile } = useFiles({ defaultValue })

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    addFiles([...(e.target.files || [])])
  }

  const handleDropFile = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.currentTarget.setAttribute('data-focus', 'false')
    const files = e.dataTransfer.files

    addFiles([...(files || [])])
  }

  return {
    files,
    handleFileSelect,
    handleDropFile,
    removeFile,
  }
}

export const Context = createContext<ReturnType<typeof useRoot> | undefined>(undefined)

export const useRootStore = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('')

  return ctx
}
