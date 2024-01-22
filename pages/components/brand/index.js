const data = [
  {
    img: "app-store.svg",
  },
  {
    img: "google-play.svg",
  },
  {
    img: "huawei.svg",
  },
];

const Brand = () => {
  return (
    <div className="flex w-full justify-center">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={`${item.img}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Brand;
