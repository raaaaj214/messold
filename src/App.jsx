import BannerMessage from './components/BannerMessage'
import Header from './components/Header'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import InfoBox from './components/InfoBox'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import List from './components/List'

function App() {
  return (
    <main className='overflow-x-hidden'>
      <BannerMessage/>
      <Header/>
      <Banner/>
      <CategoryList/>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Ganesh Chaturthi"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Ganpati Decorations"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Janmashtami"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Pooja Essentials"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Healing Crystals"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <List title={"Limited Edition"}/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <Testimonials/>
      </section>
      <section className='w-full flex justify-center pb-8'>
        <InfoBox/>
      </section>
      <Benefits/>
      <section className='bg-[#FFAFB6] w-full flex justify-center'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
