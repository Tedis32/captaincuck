import notFoundImage from "../assets/images/404.png";

import dotted_background from "../assets/images/dottedBackground.png";
const My404 = () => {
  return (
    <div className="h-screen w-full bg-background flex justify-center items-center overflow-hidden relative">
      <img src={notFoundImage} className="w-[90%] xl:w-[45%]" />
      <div className="absolute h-full w-full">
        <img
          src={dotted_background}
          alt=""
          className="ml-auto lg:ml-0 lg:h-[500px] h-[300px] 
            rotate-180 translate-x-[200px] translate-y-[-90px] lg:translate-x-[] lg:translate-y-[-120px] lg:rotate-0 opacity-[4%]"
        />
      </div>
    </div>
  );
};

export default My404;
