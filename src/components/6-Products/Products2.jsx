import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/olivers2.png";
import Img2 from "../../assets/product/vert1.png";
import Img3 from "../../assets/product/noires1.png";
import Img4 from "../../assets/product/oliv04.jpeg";
import Img5 from "../../assets/product/noires2.png";
import Img6 from "../../assets/product/oliv1.png";
import Img7 from "../../assets/product/OliverVert6.jpeg";
import Img8 from "../../assets/product/olivers1.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Olive spices",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Green Olive",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Black Olive",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Oliver ",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Black Olive",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Oliver",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Green Olive",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Olive spices",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
