export function NewsLetter() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 pt-8 pb-14 text-center">
      <h1 className="text-2xl font-medium md:text-4xl">
        Subscribe now & get 20% off
      </h1>
      <p className="pb-8 text-gray-500/80 md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex h-12 w-full max-w-2xl items-center justify-between md:h-14">
        <input
          className="h-full w-full rounded-md rounded-r-none border border-r-0 border-gray-500/30 px-3 text-gray-500 outline-none"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="h-full cursor-pointer rounded-md rounded-l-none bg-orange-600 px-8 text-white md:px-12">
          Subscribe
        </button>
      </div>
    </div>
  );
}
