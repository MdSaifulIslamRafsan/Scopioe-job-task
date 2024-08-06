import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';

const Therapist = ({ searchTerm }) => {
    const [therapists, setTherapists] = useState([]);
    const [filteredTherapists, setFilteredTherapists] = useState([]);

    useEffect(() => {
        fetch("FeaturedTherapist.json")
            .then(response => response.json())
            .then(data => {
                setTherapists(data);
                setFilteredTherapists(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        const filtered = therapists.filter(therapist =>
            therapist.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTherapists(filtered);
    }, [searchTerm, therapists]);

    return (
        <div className='m-5'>
            <h4 className='text-lg font-semibold'>Featured Therapist</h4>
            <div className="bg-white p-5 rounded-xl shadow-xl">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper"
                >
                    {filteredTherapists.map((therapist, index) => (
                        <SwiperSlide key={index}>
                            <div className="border rounded-lg">
                                <div className='p-3'>
                                    <img
                                        src={therapist.image}
                                        alt={therapist.name}
                                        className="mb-3 w-full h-48 object-cover"
                                    />
                                    <h2 className="font-semibold">{therapist.name}</h2>
                                    <p className='text-sm flex items-center gap-2'>
                                        <FaLocationDot /> {therapist.address}
                                    </p>
                                    <p className='text-sm'>{therapist.location}</p>
                                </div>
                                <Link to={`/`} className="bg-[#D4E9FF] hover:bg-[#156BCA] hover:text-white underline w-full block py-2 text-center rounded-b-lg">
                                    See Details
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Therapist;
