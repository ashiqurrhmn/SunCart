import Image from "next/image";
import Banner from "./components/Banner";
import PopularProducts from "./components/PopularProducts";
import SummerTip from "./components/SummerTip";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts />
      <SummerTip />
    </div>
  );
}
