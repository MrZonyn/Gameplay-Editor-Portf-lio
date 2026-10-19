function Showreel() {
  return (
    <section id="showreel" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">SHOWREEL</h2>
        <p className="mt-4 text-gray-400">
          A selection of my latest editing work.
        </p>
        <div className="mt-10 aspect-video w-full overflow-hidden rounded-lg border-gray-800 bg-gray-900">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-gray-500">SHOWREEL PREVIEW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showreel;
