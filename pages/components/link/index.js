import { MdOutlineChevronRight } from "react-icons/md";

const data = [
  {
    text: "Yeni Sezon",
  },
  {
    text: "Kış Fırsatları",
  },
  {
    text: "Kombin",
  },
  {
    text: "Abiye",
  },
  {
    text: "Dış Giyim",
  },
  {
    text: "Üst Giyim",
  },
  {
    text: "Ayakkabı",
  },
  {
    text: "Çanta",
  },
];

const Link = () => {
  return (
    <div className="flex w-full flex-wrap">
      {data.map((item, index) => {
        return (
          <div
            className="w-1/2 flex items-center justify-between py-[17px] pl-[19px] border-r-[1px] border-b-[1px] bg-[#F1F1F1]"
            key={index}
          >
            <span>{item.text}</span>
            <MdOutlineChevronRight className="text-2xl" />
          </div>
        );
      })}
      <img src="sub.png" className="flex justify-center w-max mx-auto" />
    </div>
  );
};

export default Link;
