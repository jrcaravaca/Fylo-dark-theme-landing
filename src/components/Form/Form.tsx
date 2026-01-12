import { Button } from "../Button"

export const Form = () => {
  return (
    <div className="absolute left-0 right-0 -top-50 text-center py-10 px-6 bg-navy-850 rounded-[9px] w-84 mx-auto md:w-120 xl:w-180">
        <h2 className="font-bold mb-4 text-center text-[1.25rem]">Get early access today</h2>
        <p className="text-sm mb-8">It only takes a minute to sign up and our free stater tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form action="" className="flex flex-col gap-6 xl:flex-row">
            <input className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 xl:flex-1" 
            type="text" 
            placeholder="email@example.com"/>

            <Button styles='xl:w-[200px]' text="Get Started For Free"/>
        </form>
    </div>
  )
}

export default Form
