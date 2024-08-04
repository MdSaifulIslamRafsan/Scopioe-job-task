import { Link } from "react-router-dom";

const PopularCities = () => {
  const cities = [
    "Atlanta, GA",
    "Indianapolis, IN",
    "Philadelphia, PA",
    "Boston, MA",
    "Jacksonville, FL",
    "Queens, NY",
    "Chicago, IL",
    "Kansas City, MO",
    "Raleigh, NC",
    "Chicago, IL",
    "Los Angeles, CA",
    "San Antonio, TX",
    "El Paso, TX",
    "Miami, FL",
    "Tucson, AZ",
    "Fresno, CA",
    "Nashville, TN",
    "Upland, CA",
    "Houston, TX",
    "Oklahoma City, OK",
    "Washington, D.C.",
  ];

  return (
    <div className="">
        <h4 className="text-lg font-semibold">Popular Cities</h4>
        <div className="grid mt-4 bg-white shadow-lg p-5 rounded-xl grid-cols-3">
          {cities.map((city, index) => (
            <Link to={'/'} key={index} className="border-b text-[#156BCA] text-[10px] md:text-sm underline py-3">
              {city}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default PopularCities;
