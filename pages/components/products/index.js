const data = [
  {
    img: "product-1.png",
  },
  {
    img: "product-2.png",
  },
  {
    img: "product-1.png",
  },
  {
    img: "product-2.png",
  },
  {
    img: "product-1.png",
  },
  {
    img: "product-2.png",
  },
];

const Products = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="flex justify-center" key={index}>
            <img src={`${item.img}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
