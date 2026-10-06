function Hero() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen mx-auto px-6 py-6 items-center">
        <div className="max-w-xl">
          <span className="text-sm text-green-700 inline-block mb-4">
            CREATIVE EDITING
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            VIDEO EDITOR <br />
            FOR GAMING CONTENT
          </h1>
          <p className="mt-6 text-gray-400">
            Transforming raw gameplay <br /> into content worth watching.
          </p>
          <a
            href="#showreel"
            className="inline-block rounded-md mt-8 transition-colors bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-600"
          >
            WATCH SHOWREEL
          </a>
        </div>

        <div className="relative aspect-video rounded-lg border border-gray-800 bg-gray-900">
          <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white text-black transition-colors hover:bg-gray-400">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
