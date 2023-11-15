import { FileInput } from '../ui/inputs/file'

export const FileInputUsage = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <FileInput.Root className="max-w-[500px] mx-auto aspect-square relative">
        <FileInput.Input
          className="w-full- h-full"
          name="img"
        >
          <FileInput.Placeholder />
        </FileInput.Input>

        <FileInput.Preview
          renderItem={(file, { url, remove }) => (
            <div
              key={file.name}
              className="absolute inset-0 object-cover"
            >
              <button
                className="absolute -right-3 -top-3 bg-red-100 hover:bg-red-300 ring-offset-0 "
                onClick={remove}
              >
                x
              </button>

              <img
                className="w-full h-full object-cover rounded-md"
                src={url}
              />
            </div>
          )}
        />
      </FileInput.Root>
    </div>
  )
}
