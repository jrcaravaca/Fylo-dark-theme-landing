import { type Testimonial } from "../../models/testimonialcard.model"

export const TestimonialCard = ({name, image, quote, role}: Testimonial) => {
    return (
        <div key={name} className="bg-navy-850 rounded-sm p-6 w-70">
                        <blockquote className="text-[.75rem] mb-4">{quote}</blockquote>
                        <div className="flex gap-2 items-center">
                            <img className='size-6 rounded-full' src={image} alt={name} />
                            <div>
                                <h3 className="font-bold text-[.75rem]">{name}</h3>
                                <p className="text-[10px]">{role}</p>
                            </div>
                        </div>

                    </div>
    )
}