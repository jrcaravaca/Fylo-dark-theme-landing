import { Button } from "../Button"
export const Hero = () => {
    return (
        <section className="-mt-18 z-10 relative">
            <h1 className="text-center text-2xl font-raleway font-bold px-2" >
                All your files in one secure location, accesible anywhere.
            </h1>
            <p className="text-center text-sm mt-6 px-4">
                Fylo stores all your most important files in one secure location. Acces them wherever you need, sharem, and collaborate with friends, family and co-workers.
            </p>
            <div className="text-center mt-6 mb-10">
                <Button text='Get Started' styles="w-[240px]" /> 
            </div>
        </section>
    )
}