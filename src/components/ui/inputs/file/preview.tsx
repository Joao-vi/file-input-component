import { ReactNode } from 'react'
import { useRootStore } from './root/use-root'
import { useFileUrl } from './core/use-file-url'

type Options = {
  url: string | undefined
  remove(): void
}

type PreviewProps = {
  renderItem(file: File, options: Options): ReactNode
}

export const Preview = (props: PreviewProps) => {
  const { getUrl } = useFileUrl()
  const { files, removeFile } = useRootStore()

  return (
    <>{files.map((i) => props.renderItem(i, { url: getUrl(i), remove: () => removeFile(i) }))}</>
  )
}
