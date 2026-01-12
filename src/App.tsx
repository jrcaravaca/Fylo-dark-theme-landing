
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Features } from "./components/Features/Features"
import { MoreInfo } from "./components/MoreInfo/MoreInfo"
import { Testimonials } from "./components/Testimonials/Testimonials"
import Form from "./components/Form/Form"
import { Footer } from "./components/Footer/Footer"
function App() {

  return (
    <main className='m-auto'>

      <section className='bg-navy-850 p-6 h-105 relative md:h-160'>
        <Header />
        <img 
          className="z-10 relative mt-12 w-[320px] md:w-112.5 mx-auto"
          src="/images/illustration-intro.png" 
          alt="intro illustration" 
        />

        <img 
          className="absolute bottom-0 left-0 w-full xl:hidden"
          src="/images/bg-curvy-mobile.svg" 
          alt="bg curvy mobile" 
        />
        <img 
          className="hidden absolute bottom-0 left-0 w-full xl:block"
          src="/images/bg-curvy-desktop.svg" 
          alt="bg curvy-desktop" />

      </section>

      <section className="bg-navy-900 p-6 pb-75">
        <Hero />
        <Features />
        <MoreInfo />
        <Testimonials />
      </section>

      <section className="bg-navy-950 p-6 relative">
          <Form />
          <Footer />
      </section>

    </main>
  )
}

export default App
