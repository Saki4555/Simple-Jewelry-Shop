import { Link } from "react-router-dom";
import MyContainer from "../shared/MyContainer";

const HomeSliderContent = ({ img, text }) => {
  return (
    <div>
      <div
        className="w-full h-[300px] md:h-[100vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div>
          <MyContainer>
            {" "}
            <div className="text-black">
              <h1 className="text-[30px] md:text-[50px] drop-shadow-lg p-0 m-0">
                {text?.title}
                <span className="block m-0 p-0 leading-none">
                  {text?.titleSpan}
                </span>
              </h1>
              <p className="pt-5 text-[16px] md:text-[20px] opacity-70">
                {text?.description}
              </p>
              <Link to='/blogs'>
                {" "}
                <button className="mt-8 px-8 py-3 btn-1 hover:bg-black text-white font-semibold drop-shadow-lg rounded-full transition">
                  Read More
                </button>
              </Link>
            </div>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderContent;
