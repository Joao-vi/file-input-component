import { ComponentProps, ForwardedRef, forwardRef, useEffect } from 'react'

import { useRootStore } from './root/use-root'
import { cn } from '../../../../utils/tailwind-css'

export type InputProps = {
  onChange?: (data: File[]) => void
} & Omit<ComponentProps<'input'>, 'onChange'>

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement | null>) => {
  const { className, children, ...rest } = props
  const { files, handleDropFile, handleFileSelect } = useRootStore()

  useEffect(() => {
    // Not the best way to implement controlled Components
    // I need to work more on it

    // I think this FileInput must work only on controlled way
    // I've tried to work with native events, just worked on add File
    // To set defaultValue and delete the native onChange event is not triggered

    rest.onChange && rest.onChange(files)
  }, [files])

  return (
    <label
      onDrop={handleDropFile}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => {
        e.preventDefault()
        e.currentTarget.setAttribute('data-focus', 'true')
      }}
      onDragLeave={(e) => e.currentTarget.setAttribute('data-focus', 'false')}
      className={cn([
        'flex items-center justify-center',
        'group relative p-5 cursor-pointer border border-zinc-200 border-dashed rounded-md transition-all',
        'hover:border-blue-500 hover:border-solid hover:bg-blue-50 data-[focus=true]:bg-blue-50 data-[focus=true]:border-blue-500 data-[focus=true]:border-solid',
        className,
      ])}
    >
      <input
        {...rest}
        type="file"
        onChange={handleFileSelect}
        className="absolute invisible"
        ref={ref}
        tabIndex={-1}
      />
      {children}
    </label>
  )
})

Input.displayName = 'Input'
