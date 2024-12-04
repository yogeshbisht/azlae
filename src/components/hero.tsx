import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[720px] relative bg-neutral-900">
      <div className="h-full grid grid-cols-2 items-center justify-between px-4 sm:px-6 xl:px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal capitalize leading-normal font-bold max-w-2xl">
            Welcome to the future of AI
          </h1>
          <p className="text-base font-medium text-muted-foreground mt-3 capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="relative h-[660px] w-[320px] rounded-[40px] mb-[-200px] flex justify-center items-center bg-neutral-200 z-10">
          <div className="relative h-[640px] w-[300px] rounded-[40px] overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/29102417/pexels-photo-29102417/free-photo-of-nighttime-aerial-view-of-brooklyn-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-neutral-900 hero-clip-path" />
    </section>
  );
};

export default HeroSection;
