import Display from "./Display"
import Form from "./Form"

const Card = () => {
  return (
    <div className="bg-light-cyan dark:bg-dark-cyan dark:text-white md:w-[65%] md:flex md:gap-5 rounded-3xl p-[1.5rem] w-full my-[1.5rem]">
      <Form />
      <Display />
    </div>
  )
}

export default Card