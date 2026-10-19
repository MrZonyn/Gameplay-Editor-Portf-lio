function SelectedWork() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-sm text-green-700 font-semibold">PORTFÓLIO</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          SELECTED WORK
        </h2>
        <p className="mt-4 text-gray-400">
          A collection of my editing projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-md bg-green-700 px-5 py-2 text-sm font-semibold text-white">
            All
          </button>

          <button className="rounded-md border border-gray-800 px-5 py-2 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white">
            Youtube
          </button>

          <button className="rounded-md border border-gray-800 px-5 py-2 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white">
            Shorts
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="group overflow-hidden rounded-lg border border-gray-800">
            <div className="aspect-video bg-gray-900">
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-gray-500">VIDEO PREVIEW</span>
              </div>
            </div>

            <div className="p-5">
              <span className="text-sm text-green-700">YOUTUBE</span>

              <h3 className="mt-2 text-x1 font-semibold text-white">
                Project Title
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                A short description of this editing project.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
