import { arrowRight } from "@/assets/icons"
import { offer } from "@/assets/images"
import  Button  from "@/components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container p-20">
        <div className="flex-1">
            <img src={offer.src} width={773} height={687} className="object-contain w-full" />
        </div>
        <div className="flex flex-1 flex-col">
             <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            
            
            <span className='text-coral-red'> Special</span> Offer
             
          </h2>
          <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
            Ensuring premium comfort and style, our meticulously carfted
            footware is designed to elevate your experience, providing you withunmatched 
            quality, innovation and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11 flex flex-wrap gap-4">          
  
          <Button label="Shop now" iconUrl={arrowRight.src} />
          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray" />
          </div>  
        </div> 
    </section>
  )
}

export default SpecialOffer