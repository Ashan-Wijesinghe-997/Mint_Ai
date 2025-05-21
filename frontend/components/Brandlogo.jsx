export default function BrandLogos() {
  const brands = ['SONY', 'Spotify', 'Canon', 'Walmart', 'Shopify'];

  return (
    <section className="py-10 bg-black rounded-3xl mx-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-white font-bold text-xl md:text-2xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
