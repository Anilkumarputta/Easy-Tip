import Display from "./Display"
import Form from "./Form"

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 gap-4 w-full items-center justify-center">
      <Form />
      <Display />
    </div>
  )
}

export default Card