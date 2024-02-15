const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-between gap-5">
        <span className="text-3xl text-white font-bold tracking-tight">
          FoodApp
        </span>
        <span className="text-white font-semibold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms And Conditions</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
