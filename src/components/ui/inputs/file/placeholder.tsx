import { FileArrowUp } from '@phosphor-icons/react'

export const Placeholder = (props: { supportedFiles?: string }) => (
  <div className='flex flex-col gap-2 items-center pointer-events-none'>
    <div className='p-3 rounded-full bg-zinc-100 w-fit aspect-square transition-all group-hover:bg-blue-100 group-hover:text-blue-500'>
      <FileArrowUp className='text-xl' weight='bold' />
    </div>

    <h2>
      Arraste e solte ou <span className='text-blue-500'>clique</span> para selecionar
    </h2>

    <span className='text-zinc-400 text-sm'>
      {props.supportedFiles || 'Apenas arquivos .png e .jpeg'}
    </span>
  </div>
)
