export const base64ToFile = (dataURL: string): File => {
  const [format, data] = dataURL.split(',')
  const type = format.replace('data:', '').replace(';base64', '')
  const blobBin = atob(data)
  const array = []

  for (let i = 0; i < blobBin.length; i++) {
    array.push(blobBin.charCodeAt(i))
  }

  const file = new File([new Uint8Array(array)], 'file', {
    type,
  })

  return file
}
