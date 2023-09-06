import Hero from "@/components/sectionsHome/Hero";
import PopularProducts from "@/components/sectionsHome/PopularProducts";
import SuperQuality from "@/components/sectionsHome/SuperQuality";
import Services from "@/components/sectionsHome/Services";
import CustomerReviews from "@/components/sectionsHome/CustomerReviews";
import Subscribe from "@/components/sectionsHome/Subscribe";

export default function Home() {
  return (
    <main className="relative">
      <section className="xl:padding-x">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py:16 w-full">
        <Subscribe />
      </section>
    </main>
  );
}
