
import Highlights from '../Market/Key'
import InvestmentCards from './ImpactInvest'
import PartnarSlider from '../home/PartnarSlider'

const Market = () => {
  return (
    <>
     <div className="relative bg-[url('/marketfoucs/hero_section.png')] min-h-screen bg-cover  bg-blend-overlay md:-mt-16 pt-16 -mt-16 bg-no-repeat">

        {/* Overlay */}
   {/* <div className="absolute inset-0 bg-[#1B3650] opacity-100 z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-r from-[#1B3650]  to-transparent-50 z-0"></div>
        {/* Content */}
        <div className='relative z-10 text-white m-10 md:pt-56 pt-40'>
          <h1 className='font-normal text-2xl font-Libre Baskerville'>Market Focus</h1>

          <p className='font-semibold md:text-4xl text-2xl font-playfair leading-tight mt-4'>
        Why We Invest in  <br /> Healthcare
          </p>

          <span className='font-thin md:text-lg text-sm font-kantum block mt-4'>
       Healthcare represents a resilient and high-growth sector, driven by <br/> sustained demand and structural tailwinds.
          </span>
        </div>

       
       
      </div>
          <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
         {/* RIGHT IMAGE */}
        <div className="w-full  ">
          <img
            src="/marketfoucs/images.png"
            alt="Healthcare"
            className="rounded-2xl shadow-md w-full md:h-[400px] h-full  object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div>
        
          

          <p className=" text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
        Global healthcare spending continues to rise, fueled by aging populations, the increasing prevalence of chronic diseases, and rapid technological innovations. Businesses in medtech and life sciences benefit from inelastic demand and high customer stickiness, stemming from regulatory complexities, significant switching costs, and the critical nature of their functions—ensuring stability even in economic downturns.
          </p>

          <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
          However, the market remains inefficient and underserved. Many growth- and established-stage companies in medtech are misunderstood or overlooked, leading to financing gaps where traditional debt is too restrictive and equity excessively dilutive. This creates compelling opportunities for structured capital solutions that provide flexible, tailored support without compromising control or alignment.
          </p>
             <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
         The COVID-19 pandemic highlighted vulnerabilities in healthcare supply chains, accelerating trends toward optimization, consolidation, outsourcing, and onshoring. These shifts have heightened capital needs across manufacturing, services, and specialized vendors—often falling outside conventional financing scopes due to their complexity and niche focus.
          </p>
        </div>

       
      </div>

    
    </section>
    <Highlights />
    <div>
      <InvestmentCards />
    </div>
    <div>
      <PartnarSlider />
    </div>
    </>
    
  )
}

export default Market