import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdClose } from "react-icons/md";

const data = [
  {
    text: "Giyim",
  },
  {
    text: "Aksesuar",
  },
  {
    text: "Kozmetik & Kişisel Bakım",
  },
  {
    text: "Çanta",
  },
  {
    text: "Ayakkabı",
  },
  {
    text: "İç Giyim",
  },
  {
    text: "Spor",
  },
  {
    text: "Outdoor",
  },
];

const toggleBodyClass = () => {
  let customBody = document.body;
  customBody.classList.toggle("customHidden");
};

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  let btnClass =
    "text-white flex gap-1 px-2 py-3 rounded-md items-center justify-center w-1/2";
  let navWidth = navOpen == true ? "left-0" : "-left-full";
  let navZ = navOpen == true ? "block" : "hidden";

  const handleOpen = () => {
    setNavOpen(!navOpen);
    toggleBodyClass();
  };

  const handleClose = () => {
    setNavOpen(!navOpen);
    toggleBodyClass();
  };

  return (
    <div className="flex items-center px-1 py-3 justify-between bg-[#F9F9F9] border-[1px] border-[#EBEBEB]">
      <div
        className={`absolute z-20 ${navWidth} top-0 h-full bg-[#F7F7F7] w-[85%] transition-all duration-200 ease-linear`}
      >
        <div className="flex items-center justify-between px-2 py-5 bg-[#e1e1e183]">
          <img src="giyiyor.svg" className="w-50" />
          <div
            className="flex flex-col items-center"
            onClick={() => {
              handleClose();
            }}
          >
            <MdClose className="text-2xl" />
            <span className="text-sm">Kapat</span>
          </div>
        </div>
        <ul className="px-2 z-20">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="border-b-[1px] flex justify-between py-4"
              >
                <span>{item.text}</span>
                <MdOutlineChevronRight className="text-2xl" />
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 justify-center p-5">
          <button className={`bg-[#F27A1A] ${btnClass}`}>
            <img src="account_circle.svg" />
            <span className="text-xs">GİRİŞ YAP / ÜYE OL</span>
          </button>
          <button className={`bg-[#26A548] ${btnClass}`}>
            <img src="local_shipping.svg" />
            <span className="text-xs">SİPARİŞLERİM</span>
          </button>
        </div>
      </div>
      <div
        className={`bg-[#00000046] fixed left-0 right-0 top-0 bottom-0 ${navZ} z-10`}
      ></div>

      <div className="flex items-center gap-5 relative">
        <div
          onClick={() => {
            handleOpen();
          }}
        >
          <RiMenu2Fill className="text-3xl" />
          <span className="absolute -bottom-3 text-sm left-0.5">menü</span>
        </div>
        <img src="giyiyor.svg" className="h-7" />
      </div>
      <div className="flex gap-2 text-3xl">
        <PiMagnifyingGlassLight />
        <IoMdHeartEmpty />
        <div className="relative">
          <MdOutlineShoppingCart />
          <span className="absolute text-xs -top-1 right-0 bg-orange-400 rounded-full h-4 w-4 text-center text-white">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
