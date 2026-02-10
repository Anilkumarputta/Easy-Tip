import Display from "./Display"
import Form from "./Form"

const Card = () => {
  return (
    <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:gap-8">
      <Form />
      <Display />
    </div>
  );
};

export default Card