import { type Testimonial } from "../models/testimonialcard.model"
import { TestimonialCard } from "./components/TestimonialCard"
import { testimonials } from "./CONST"


export const Testimonials = () => {
    return (
        <div className="flex flex-col gap-6 items-center pt-6 relative w-[320px] mx-auto md:w-120 xl:flex-row xl:w-230">
            <img className="size-6 absolute top-0 left-8 " src="/images/bg-quotes.png" alt="bg quotes" />
            {
                testimonials.map((testimonial:Testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial }/>
                ))
          }
        </div>
    )
}