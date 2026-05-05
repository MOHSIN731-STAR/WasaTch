
import Teamspartnar from './Teamspartnar'
import ImpactInvest from './ImpactInvest'
import PartnarSlider from '../home/PartnarSlider'

const Teams = () => {
  return (
    <>
      <div className="relative bg-[url('/our_team/hero_section.png')] min-h-screen bg-cover  bg-blend-overlay md:-mt-16 pt-16 -mt-16 bg-no-repeat">

        {/* Overlay */}
   {/* <div className="absolute inset-0 bg-[#1B3650] opacity-100 z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-r from-[#1B3650] via-[#00000080] to-transparent z-0"></div>
        {/* Content */}
        <div className='relative z-10 text-white m-10 md:pt-56 pt-40'>
          <h1 className='font-normal text-2xl font-Libre Baskerville'>Our Team</h1>

          <p className='font-semibold md:text-4xl text-2xl font-playfair leading-tight mt-4'>
      Driving Operational <br/> Excellence
          </p>

          <span className='font-thin md:text-lg text-sm font-kantum block mt-4'>
      The Wasatch Health team brings unparalleled operational advantages to our portfolio <br /> companies, drawing from decades of experience in scaling healthcare businesses.
          </span>
        </div>

       
       
      </div>
          <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
         {/* RIGHT IMAGE */}
        <div className=" md:w-[95%]  w-full md:h-96  h-full">
          <img
            src="/our_team/image1.png"
            alt="Healthcare"
            className="rounded-2xl shadow-md w-full h-full  object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="">
        <h1 className=' md:text-3xl text-2xl lg:text-4xl font-extrabold py-5'>Building <br /> Enduring Value <br /> in Healthcare</h1>
          

          <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
     The Wasatch Health team brings unparalleled operational advantages to our portfolio companies, drawing from decades of experience in scaling healthcare businesses. We provide hands-on support in financial management, M&A execution, regulatory navigation, and strategic growth planning—helping partners overcome complexities and realize their full potential. Our generational mindset ensures long-term partnerships focused on sustainable value creation, shared prosperity, and community impact.
          </p>
        </div>

       
      </div>

    
    </section>
    <div>
<Teamspartnar/>

    </div>
    <div>
      <ImpactInvest/>
    </div>
    <div>
      <PartnarSlider/>
    </div>
    </>
    
  )
}

export default Teams