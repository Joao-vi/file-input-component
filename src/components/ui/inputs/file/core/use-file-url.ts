import { useEffect, useRef } from 'react'

export const useFileUrl = () => {
  const urlRef = useRef<Map<File, string>>(new Map())

  const deleteUrl = (url: string) => URL.revokeObjectURL(url)
  const createUrl = (file: File) => URL.createObjectURL(file)
  const getUrl = (file: File) => {
    createFileUrl(file)
    return urlRef.current.get(file)
  }

  const createFileUrl = (file: File) =>
    !urlRef.current.has(file) && urlRef.current.set(file, createUrl(file))

  const deleteFileUrl = (file: File) => {
    const _url = urlRef.current.get(file)
    if (!_url) return

    deleteUrl(_url)
  }

  useEffect(() => {
    return () => {
      // Note: There's a bug regarding to unmounting
      // For some reason clean-up function is been called two times
      // That way creating a URL (just once) and then deleting
      // urlRef.current.forEach((_, file) => deleteFileUrl(file))
      urlRef.current.clear()
    }
  }, [])

  return {
    getUrl,
  }
}
