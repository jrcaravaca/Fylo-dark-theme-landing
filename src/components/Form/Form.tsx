import { useState, type FormEvent } from "react"
import { Button } from "../Button"

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const isValid = mailRegExp.test(inputValue); 

    if (isValid) {
      console.log('Correo Enviado')
      setError(false)
    } else {
      setError(true); 
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value)
  }

  return (
    <div className="absolute left-0 right-0 -top-50 text-center py-10 px-6 bg-navy-850 rounded-[9px] w-84 mx-auto md:w-120 xl:w-180">
        <h2 className="font-bold mb-4 text-center text-[1.25rem]">Get early access today</h2>
        <p className="text-sm mb-8">It only takes a minute to sign up and our free stater tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form action="" className="flex flex-col gap-6 xl:flex-row " onSubmit={handleSubmit}>
            <div className="xl:flex xl:flex-col xl:flex-1">
              <input
                onChange={handleChange}
                className="bg-white text-black rounded-3xl placeholder:text-gray-400 text-center h-12 xl:flex-1"
                type="email"
                placeholder="email@example.com"
                required
                value={inputValue}
                />
              {
                error && (<p className="text-red-500 text-sm -mt-3 xl:mt-1">Please provide an valid email</p>)
              }
            </div>

            <Button styles='xl:w-[200px]' text="Get Started For Free"/>
        </form>
    </div>
  )
}

export default Form
