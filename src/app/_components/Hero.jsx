import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Budget.
            <strong className="font-extrabold text-primary sm:block">
              Control Your Own Way.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your Budget and save ton of Money.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/sign-in"
            >
              Create An Account
            </a>
          </div>
        </div>
      </div>
      <Image
        src=""
        alt="dashboard image"
        width={1000}
        height={700}
        className="-mt-9 rounded-xl border-2 "
      />
    </section>
  );
};

export default Hero;
