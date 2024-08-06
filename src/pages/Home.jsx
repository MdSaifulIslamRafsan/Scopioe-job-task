import { useState } from "react";
import Banner from "../component/Banner";
import FeaturedTestimonial from "../component/FeaturedTestimonial";
import PopularCities from "../component/PopularCities";
import Therapist from "../component/Therapist";




const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
        <section>
             <Banner onSearch={handleSearch} />
             <Therapist searchTerm={searchTerm} />
           <div className="grid lg:grid-cols-2 gap-5  m-5">
            <FeaturedTestimonial></FeaturedTestimonial>
            <PopularCities></PopularCities>
           </div>
        </section>
    );
};

export default Home;