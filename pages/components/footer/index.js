const data = [
  {
    img: "instagram.svg",
  },
  {
    img: "facebook.svg",
  },
  {
    img: "youtube.svg",
  },
];

const Brand = () => {
  return (
    <div className="flex flex-col gap-3 text-center py-10 bg-[#F8F8F8] mt-5">
      <div className="flex justify-center gap-5">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={`${item.img}`} />
            </div>
          );
        })}
      </div>
      <p>2023 EttoPark Tüm Hakları Saklıdır.</p>
    </div>
  );
};

export default Brand;
