

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const FeaturedTestimonial = () => {
  

    return (
        <div className="mt-10 hidden sm:block lg:mt-0">
             <h4 className="text-lg mb-5 font-semibold">Popular Cities</h4>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='space-y-6'>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/YBcRcSB/image-116.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/BzJk6mT/image-117.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='space-y-6'>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/YBcRcSB/image-116.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/BzJk6mT/image-117.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='space-y-6'>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/YBcRcSB/image-116.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
               <div className="flex border-2 rounded-lg p-4 gap-4">
                <img className='rounded-lg' src="https://i.ibb.co/BzJk6mT/image-117.png" alt="" />
                <div className="space-y-2">
                    <p className='text-sm'>123 Elm Street, New York</p>
                    <h4 className='font-semibold'>Healing Bodywork <span className='text-[#156BCA]'>by Cort</span></h4>
                    <p className='text-sm'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-[#156BCA]'>Read More</span></p>
                </div>
               </div>
              </div>
            </SwiperSlide>
          
           
              
          </Swiper>
        </div>
    );
};

export default FeaturedTestimonial;