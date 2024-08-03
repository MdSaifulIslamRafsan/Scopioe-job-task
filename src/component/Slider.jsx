const Slider = ({ Slider_img, link, text }) => {
  return (
    <div className="relative">
      <img className="w-full h-full" src={Slider_img} alt="" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#152A16] text-white text-center py-4 rounded-lg opacity-70">
        <p className="font-Poppins font-semibold">
          <span className="text-[#156BCA]">{link}</span> {text}
        </p>
      </div>
    </div>
  );
};

export default Slider;
