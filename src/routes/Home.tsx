import { Link } from "react-router-dom";
import dotted_background from "../assets/images/dottedBackground.png";
import grid from "../assets/images/grids.png";
import worm from "../assets/images/wormhole.png";
import circle from "../assets/images/circle.png";
import paid from "../assets/images/paid.png";
import slinky from "../assets/images/slinky.png";
import rightHome from "../assets/images/uncle_pepe.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

type HomeProps = {
  network: number;
};

const team = [
  {
    name: "Friedrich Cuck",
    role: "Captain",
    img: "/images/team/image1.png",
    description: "Ruler of the seven seas. Part-time cuck, full-time Captain.",
  },
  {
    name: "Ted",
    role: "First mate",
    img: "/images/team/Ted2.jpg",
    description:
      "Cuck's right-hand man, is said to be able to speak the language of Orcas. A skill he was gifted by Captain Cuck himself because he held his $SEAGEN through an 112x run and didn't sell a single penny.",
  },

  {
    name: "Dave",
    role: "Second mate",
    img: "/images/team/Dave2.jpg",
    description:
      "A man of action and pure resiliance. Rumour has it that he once fed an entire crew of 100 people for weeks with just 5 loaves of bread and 2 fish.",
  },
  {
    name: "Crisps",
    role: "Navigator",
    img: "/images/team/crispsdox.png",
    description:
      "Without crisps our crew would be lost at sea forever. They say he made his own compass from his vast astrological knowledge, that compass is now known as Google Maps.",
  },
];
const Home = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className="xl:w-full flex flex-col items-center w-full">
      {showBanner && (
        <div className="sticky isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-[url('/src/assets/images/water.jpg')] w-full">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900	font-sourceSansSemi text-lg	">
              <strong className="text-2xl	font-sourceSansSemi text-[800]">
                NFT GIVEAWAY
              </strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true" />
              Win a mermaid gf NFT over on X/Twitter:
            </p>
            <img src="images/mermaidgf.jpg" className="w-24 h30"/>
            <a
              target="_target"
              href="https://twitter.com/captaincucketh/status/1692474024369025311?s=20"
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 font-jumper"
            >
              HOP ABOARD<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={(value) => setShowBanner(!value)}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5 text-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <section className="relative w-full flex justify-center items-center bg-[url('/src/assets/images/bgvest.jpg')]">
        <div className=" mt-[10%] lg:mt-[3%] flex flex-col xl:flex-row z-[10] w-[85%] lg:w-[75%] max-w-[1920px]">
          <div className="flex flex-col text-left justify-center">
            <h2 className="text-headerText font-jumper pt-[6%] xl:pt-0 tracking-[1px] xl:w-[900px]  text-[50px] lg:text-[80px] w-full max-w-[100%] xl:max-w-[600px]">
              Join our crew of <span className="text-highlight"> Seagens</span>{" "}
              today.
            </h2>
            <div className="flex items-left ">
              <Link
                target="_target"
                to="https://t.me/captaincuck"
                className="shadow-xl flex no-underline cursor-pointer w-[160px] h-[50px] rounded-lg justify-center bg-highlight
                  items-center text-background font-[200] font-jumper mt-[40px] mb-[70px] hover:text-black"
              >
                BOARD THE SHIP
              </Link>
            </div>
          </div>
          <Player
            src="https://lottie.host/02e17c51-a703-4b16-8bc0-2f3e6f851b8a/bhLFXLDTTx.json"
            className="xl:ml-auto mb-[40px] lg:mb-0 ml-0 mr-auto xl:mr-0 relative xl:flex-none w-[250px] sm:w-[400px] xl:w-[420px] 2xl:w-[800px] xl:pt-[20px]"
            loop
            autoplay
          />
        </div>
      </section>

      <section className="relative bg-background w-full flex justify-center items-center">
        <div className="mt-[10%] lg:mt-[3%] flex flex-col  xl:flex-row-reverse z-[10] w-[85%] lg:w-[75%] max-w-[1920px]">
          <div className="flex flex-col mb-[60px] lg:mb-0">
            <h1 className="text-headerText font-jumper pt-[6%] xl:pt-0 tracking-[1px] xl:w-[900px]  text-[50px] lg:text-[80px] w-full max-w-[100%] xl:max-w-[600px]">
              SeaFarer AI Brings <span className="text-highlight">NFTs</span> to
              you.
            </h1>
            <h2 className="text-paragraphText font-sourceSans pt-[0.1%]  xl:w-[900px] text-base max-w-[600px]">
              Captain Cuck is offering you a chance to sail the OpenSea with
              navigation like never before
              <br />
              <br />
              SeaFarer Finds the best NFT trades and holds that are suited to
              you and your collection.
              <br />
              <br />
              It was created by a team of passionate developers, based in
              Ireland that have been working together for several years.
            </h2>
          </div>
          <div className="mr-auto mb-[40px] lg:mb-0">
            <Player
              src="lottie/ballsphere.json"
              className="xl:ml-auto mb-[40px] lg:mb-0 ml-0 mr-auto xl:mr-0 relative xl:flex-none w-[300px] sm:w-[400px] xl:w-[420px] 2xl:w-[500px] xl:pt-[20px]"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row relative max-w-[1920px] bg-[url('/src/assets/images/bgvest.jpg')] w-full justify-center items-center pb-[2%]">
        <div className="mt-[4%] lg:mt-[3%] z-[10] p-5">
          <div className="flex flex-col mb-[60px] lg:mb-0">
            <h1 className="text-headerText font-jumper pt-[6%] xl:pt-0 tracking-[1px] xl:w-[900px] text-[50px] lg:text-[80px] w-full max-w-[100%] xl:max-w-[600px]">
              About <span className="text-highlight">$SEAGEN</span>.
            </h1>
            <h2 className="text-paragraphText font-sourceSans pt-[0.1%]  xl:w-[900px] text-base max-w-[600px]">
              $SEAGEN is the gold that Captain Cuck has plundered during his
              reign as king of the seas.
              <br />
              <br />
              Any sailor who holds enough $SEAGEN gets lifetime access to the
              SeaFarer AI.
              <br />
              <br />
              Only those with the strongest hands may guide the ship to glory
            </h2>
          </div>
        </div>
        <Player
          src="lottie/pirateship.json"
          className="xl:ml-auto mb-[40px] lg:mb-0 ml-0 mr-auto xl:mr-0 relative xl:flex-none w-[400px] sm:w-[400px] xl:w-[420px] 2xl:w-[600px] xl:pt-[20px]"
          loop
          autoplay
        />
      </section>

      <section className=" pt-10 relative bg-background w-full flex justify-center items-center">
        <div className="mt-[1%] z-[10] w-[85%] lg:w-[75%] max-w-[1920px]">
          <div className="w-full flex flex-col justify-center">
            <h1 className=" text-headerText font-jumper xl:pt-0 pb-[70px] lg:pb-[20px] tracking-[1px] xl:w-[900px] text-[50px] lg:text-[80px] w-full max-w-[100%] xl:max-w-[600px]">
              Meet the <span className="text-highlight">team</span>.
            </h1>

            <div
              className="lg:mt-10 md:grid lg:grid-cols-4 md:grid-cols-3 flex 
      flex-col pointer-events-auto md:gap-6 h-full "
            >
              {team.map((member, i) => (
                <div
                  key={i}
                  className="mb-[130px] lg:mt-0 lg:mb-0 flex flex-col w-full max-w-[280px]"
                >
                  <div className="flex justify-left">
                    <div className="rounded-2xl h-[310px] w-full max-w-[240px] overflow-hidden group-hover:scale-[1.05] transition-all duration-1000">
                      <img
                        src={member.img}
                        className={
                          i < 2
                            ? `object-cover w-full opacity-100 brightness-75`
                            : `object-cover h-full w-full opacity-100 brightness-75`
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-left mt-6">
                    <h1 className="text-highlight font-jumper tracking-[2px] text-4xl">
                      {member.name}
                    </h1>
                  </div>
                  <h2 className="text-headerText font-jumper text-lg w-[80%]">
                    {member.role}
                  </h2>

                  <div className="w-full flex justify-center">
                    <h2 className="flex text-paragraphText text-sourceSans text-sm ">
                      {member.description}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
{
  /*           
          <img
            src={rightHome}
            className="xl:ml-auto mb-[40px] lg:mb-0 ml-0 mr-auto xl:mr-0 relative xl:flex-none w-[300px] sm:w-[400px] xl:w-[420px] 2xl:w-[500px] xl:pt-[20px]"
          /> */
}
