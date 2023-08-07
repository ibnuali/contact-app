import { Spinner } from 'flowbite-react'

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Spinner size={"xl"} />
  </div>
  )
}
