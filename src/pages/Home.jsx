import Banner from "../component/Banner";
import FeaturedTestimonial from "../component/FeaturedTestimonial";
import PopularCities from "../component/PopularCities";




const Home = () => {
    return (
        <section>
           <Banner></Banner>
          
           <div className="grid lg:grid-cols-2 gap-5  m-5">
            <FeaturedTestimonial></FeaturedTestimonial>
            <PopularCities></PopularCities>
           </div>
        </section>
    );
};

export default Home;