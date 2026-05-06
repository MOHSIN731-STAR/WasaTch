
import Highlights from './Highlights'
import Investment from './Investment'
import PartnarSlider from '../home/PartnarSlider'

const Portfolio = () => {
  return (
    <>
      <div className="relative bg-[url('/portfolio/portfolio.png')] min-h-screen bg-cover  bg-blend-overlay md:-mt-16 pt-16 -mt-16 bg-no-repeat">

        {/* Overlay */}
   {/* <div className="absolute inset-0 bg-[#1B3650] opacity-100 z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-r from-[#1B3650]  to-transparent z-0"></div>
        {/* Content */}
        <div className='relative z-10 text-white m-10 md:pt-56 pt-40'>
          <h1 className='font-normal text-2xl font-Libre Baskerville'>Our Portfolio</h1>

          <p className='font-semibold md:text-4xl text-2xl font-playfair leading-tight mt-4'>
          Investing in the Future <br/> of Healthcare Innovation
          </p>

          <span className='font-thin md:text-lg text-sm font-kantum block '>
            Driving growth through flexible capital, operational support, and <br />
            trusted partnerships.
          </span>
        </div>

       
       
      </div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-2xl md:text-5xl font-semibold  md:font-bold text-gray-900 leading-tighth jmnm ">
            Smart Capital,
            <br />
            Real Impact
          </h1>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
            We partner with high-potential healthcare businesses across multiple
            segments — from digital health platforms and specialty care providers
            to medical device innovators and diagnostics companies.
          </p>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
            Our goal: to empower founders and operators with flexible capital and
            hands-on strategic support.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/portfolio/smartCapital.png"
            alt="Healthcare"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* INVESTMENT AREAS */}
      <div className="max-w-7xl mx-auto mt-16">
        <p className="text-teal-600 font-semibold text-lg mb-6">
          Investment Focus Areas
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
          {[
            "Healthcare Services & Facilities",
            "HealthTech & Digital Platforms",
            "Medical Devices & Diagnostics",
            "Behavioral Health & Wellness",
            "Specialty Care & Outpatient Networks",
          ].map((item, index) => (
            <div
              key={index}
              className="border-l border-gray-300 pl-4 hover:text-teal-600 transition cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className='mt-6  bg-[#1B3650] rounded-md m-2'>
      <Highlights/>
    </div>
    <div>
      <Investment/>
    </div>
    <div>
      <PartnarSlider/>
    </div>
      </>
  )
}

export default Portfolio