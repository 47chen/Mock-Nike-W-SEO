import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffers,
  SuperQuality,
  Services,
  Subscribe,
} from "./components/index.js";

const App = () => {
  return (
    <main className="relative">
      {/* <Nav /> */}
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
        <input type="text" />
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
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
