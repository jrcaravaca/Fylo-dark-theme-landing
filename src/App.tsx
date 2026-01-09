
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Features } from "./components/Features/Features"
import { MoreInfo } from "./components/MoreInfo/MoreInfo"
import { Testimonials } from "./components/Testimonials/Testimonials"
import Form from "./components/Form/Form"
import { Footer } from "./components/Footer/Footer"
function App() {

  return (
    <main className='w-93.75 m-auto'>

      <section className='bg-navy-850 p-6 h-105 relative'>
        <Header />
        <img 
          className="z-10 relative mt-12"
          src="/images/illustration-intro.png" 
          alt="intro illustration" 
        />

        <img 
          className="absolute bottom-0 left-0"
          src="/images/bg-curvy-mobile.svg" 
          alt="bg curvy mobile" 
        />

      </section>

      <section className="bg-navy-900 p-6 pb-75">
        <Hero />
        <Features />
        <MoreInfo />
        <Testimonials />
      </section>

      <section className="bg-navy-950 relative">
          <Form />
          <Footer />
      </section>

    </main>
  )
}

export default App
