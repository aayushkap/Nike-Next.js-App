import { products } from "../constants/index.js";
import PopularProductCard from "../sectionsHome/cards/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-2xl mt-2 font-montserrat text-slate-gray">
          Step into the world of Nike shoes, where each pair tells a unique
          story of craftsmanship and excellence.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-28 max-xl:gap-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
