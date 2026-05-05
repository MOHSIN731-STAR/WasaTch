
import Highlights from './Hightlight'
import Slider from '../home/PartnarSlider'
const FlexAble = () => {

  return (
   <>
         <div className=" relative bg-[url('/flexable/hero.png')] min-h-screen bg-cover  bg-blend-overlay md:-mt-16 pt-16 -mt-16 bg-no-repeat">

        {/* Overlay */}
   {/* <div className="absolute inset-0 bg-[#1B3650] opacity-100 z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-r blur-lg from-[#1B3650] via-[#00000080] to-transparent z-0"></div>
        {/* Content */}
        <div className='relative z-10 text-white m-10 md:pt-56 pt-40'>
          <h1 className='font-normal text-2xl font-Libre Baskerville'>Flexible Capital</h1>

          <p className='font-semibold md:text-4xl text-2xl font-playfair leading-tight mt-4'>
      Our Approach to <br /> Flexible Capital
          </p>

          <span className='font-thin md:text-md text-sm font-kantum block mt-4'>
   At Wasatch Health, we recognize that every healthcare business is unique. <br /> That's why we offer flexible capital solutions tailored to the specific needs and stage of each company.
          </span>
        </div>

       
       
      </div>
          <section className=" py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
         {/* RIGHT IMAGE */}
        <div className="w-[95%]  h-96 ">
          <img
            src="/flexable/image.png"
            alt="Healthcare"
            className="rounded-2xl shadow-md w-full h-full  object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className=" ">
     
          

          <p className="mt-6 text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
    At Wasatch Health, we recognize that every healthcare business is unique. That's why we offer flexible capital solutions tailored to the specific needs and stage of each company. Our investments span the entire capital structure, including equity, debt, and hybrid instruments, ensuring strategic alignment and optimal support for growth. This approach allows us to provide non-dilutive or minimally dilutive financing, bridging gaps where traditional funding falls short, and enabling visionary teams to scale innovations that improve and extend human life.
          </p>
          <button
  className="mt-20"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <span className="px-8 py-2 rounded-full font-kantum transition text-lg bg-[#1B3650] text-white hover:bg-[#1B3650]/95">
    Investment Inquiries
  </span>
</button>
        </div>

       
      </div>

    
    </section>
       <section className="bg-[#1B3650] py-16 px-6 md:px-16 m-2 rounded-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div  className='flex flex-col'>
          <h1 className="text-2xl md:text-3xl font-semibold  md:font-bold text-white leading-tighth jmnm ">
        Operational <br /> Involvement:  More <br /> Than Just Capital
          </h1>
</div>
          <p className="mt-4 md:mt-2 text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
           We go beyond funding by leveraging decades of operational expertise in building, scaling, and supporting healthcare platforms. Our team combines strategic insight, operational discipline, and a true partnership model to help businesses navigate regulatory complexities, optimize supply chains, and achieve sustainable growth. Through hands-on support in areas like M&A, financial management, and market positioning, we unlock potential in overlooked or transition-stage opportunities, fostering long-term value creation.
            Our goal: to empower founders and operators with flexible capital and
            hands-on strategic support.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full ">
          <img
            src="/flexable/operation.png"
            alt="Healthcare"
            className="rounded-xl shadow-md w-full object-cover h-full  md:h-[400px]"
          />
        </div>
      </div>

    
    </section>
    <div>
      <Highlights />
    </div>
    <div>
      <Slider />
    </div>
   </>
  )
}

export default FlexAble