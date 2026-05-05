
import PremiumCurve from '../animation/PremiumCurve'
import Curve from '../animation/Curve'
import Building from './Building'
import FixedDragSlider from './Slider'
import Teammeet from './Teammeet'
import PartnarSlider from './PartnarSlider'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[url('/home_1.png')] min-h-screen bg-cover bg-center md:-mt-16 pt-16 -mt-16">

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1B3650] opacity-60 z-0"></div>

        {/* Content */}
        <div className='relative z-10 text-white m-10 md:pt-56 pt-40'>
          <h1 className='font-normal text-2xl font-Libre Baskerville'>About</h1>

          <p className='font-semibold md:text-6xl text-2xl font-kantum leading-tight mt-4'>
            Building the Future <br /> of Healthcare
          </p>

          <span className='font-thin md:text-lg text-sm font-kantum block mt-4'>
            Driving growth through flexible capital, operational support, and <br />
            trusted partnerships.
          </span>
        </div>

        {/* Curve */}
        <div className="relative z-10 mt-10">
          <PremiumCurve />
        </div>
       
      </div>
       <div className="">
          <Curve />
        </div>
        <div>
          <Building />
        </div>
        <div>
          <FixedDragSlider/>
        </div>
        <div>
          <Teammeet/>
        </div>
        <div>
          <PartnarSlider/>
        </div>

      
    </>
  )
}

export default Home