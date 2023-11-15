import { ComponentProps } from 'react'

import { Context, UseRootProps, useRoot } from './use-root'

export type RootProps = {
  defaultValue?: UseRootProps['defaultValue']
} & Omit<ComponentProps<'div'>, 'defaultValue'>

export const Root = ({ children, defaultValue, ...props }: RootProps) => {
  const value = useRoot({ defaultValue })

  return (
    <div {...props}>
      <Context.Provider value={value}>{children}</Context.Provider>
    </div>
  )
}
