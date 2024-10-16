import Button from "@/components/Button"
import  arrowRight  from '@/assets/icons/arrow-right.svg'
import { shoe8 } from "@/assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-20">
       <div className="flex flex-1 flex-col">
             <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We Provide You
            
            <span className='text-coral-red'> Super</span> 
            <br />
            <span className='text-coral-red'> Quality</span> Shoes 
          </h2>
          <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
            Ensuring premium comfort and style, our meticulously carfted
            footware is designed to elevate your experience, providing you withunmatched 
            quality, innovation and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">          
  
          <Button label="View details" iconUrl={arrowRight.src} />
          </div>  
        </div> 
        <div className="flex-1 flex justify-center items-center">
            <img
                src={shoe8.src}
                alt="shoe8"
                width={570}
                height={522}
                className="object-contain"
            />
        </div>
    </section>
  )
}

export default SuperQuality