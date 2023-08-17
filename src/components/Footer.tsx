import { SiDiscord, SiTelegram } from "react-icons/si";
import { FaTwitter, FaMediumM } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/novablox.png";

async function addPNVXToken() {
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0x0f8C2461De96666068eAD7dC96E28107c05E6C2f",
          symbol: "pNVX",
          decimals: 18,
          image: logo,
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  } catch (error) {
    console.log(error);
  }
}
function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-lighterForeground px-2 py-4">
      <div className="flex flex-row items-center m-auto md:flex-grow">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <span className="text-white text-lg font-jumper uppercase">
          Novablox
        </span>
      </div>

      <div className="flex flex-row m-auto md:content-center">
        <Link
          to="https://medium.com/@novabl0x.team/introducing-novabl0x-1593b090a75e"
          className="rounded-full border m-2 hover:bg-darkHighlight"
        >
          <FaMediumM className="w-6 h-6 text-white m-2" />
        </Link>

        <Link
          to="https://twitter.com/novabl0x"
          className="rounded-full border m-2 hover:bg-darkHighlight"
        >
          <FaTwitter className="w-6 h-6 text-white m-2" />
        </Link>

        <Link
          to="https://t.co/FsWvzIkJZ0"
          className="rounded-full border m-2 hover:bg-darkHighlight"
        >
          <SiDiscord className="w-6 h-6 text-white m-2" />
        </Link>
        <Link
          to="https://t.me/novabloxchat"
          className="rounded-full border m-2 hover:bg-darkHighlight"
        >
          <SiTelegram className="w-6 h-6 text-white m-2" />
        </Link>
      </div>
      <button
        className=" justify-center items-center bg-transparent w-[full] hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={async () => await addPNVXToken()}
      >
        Add $pNVX
      </button>

      <div className="text-center font-robotoCond mt-2 font-semibold text-white p-2 md:flex-grow">
        © NOVABL0X {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
