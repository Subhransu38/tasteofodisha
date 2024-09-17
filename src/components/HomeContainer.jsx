export default function HomeContainer() {
  return (
    <section
      className="flex flex-col  items-start min-h-screen md:flex-row w-full bg-[url('/src/assets/bg.png')] bg-cover bg-no-repeat bg-center p-4 rounded"
      id="home"
    >
      <div className="flex flex-col items-start justify-start gap-6 py-2 md:w-1/2 ">
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Experience the Authentic Flavors of{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Odisha
          </span>
        </p>
        <p className="text-base text-white bg-black/50 p-3 rounded-lg md:text-left md:w-4/5">
          Discover a rich culinary journey with our curated selection of
          traditional Odia dishes. Indulge in the true taste of Odisha,
          delivered right to your doorstep.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
        >
          Order Now
        </button>
      </div>
    </section>
  );
}
