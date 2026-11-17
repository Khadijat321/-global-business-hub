
const categories = [
  { icon: "💻", name: "Technology", count: "2,450+ businesses" },
  { icon: "🏗️", name: "Construction", count: "1,820+ businesses" },
  { icon: "👗", name: "Fashion & Beauty", count: "3,100+ businesses" },
  { icon: "🍽️", name: "Food & Hospitality", count: "2,760+ businesses" },
  { icon: "🚚", name: "Logistics", count: "1,340+ businesses" },
  { icon: "📚", name: "Education", count: "980+ businesses" },
];

const businesses = [
  {
    initials: "TC",
    name: "TechCore Solutions",
    category: "Technology & Software",
    location: "Lagos, Nigeria",
    color: "bg-blue-100 text-blue-700",
  },
  {
    initials: "GM",
    name: "Global Mart",
    category: "Retail & E-commerce",
    location: "London, United Kingdom",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "AP",
    name: "Apex Properties",
    category: "Real Estate",
    location: "Dubai, UAE",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
              G
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Global<span className="text-blue-700">Business</span>Hub
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#explore" className="hover:text-blue-700">Explore</a>
            <a href="#categories" className="hover:text-blue-700">Categories</a>
            <a href="#businesses" className="hover:text-blue-700">Businesses</a>
            <a href="#about" className="hover:text-blue-700">About us</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/login" className="hidden text-sm font-semibold text-slate-700 hover:text-blue-700 sm:block">
              Log in
            </a>
            <a
              href="/register"
              className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="explore" className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.35),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <span>🌍</span>
              Discover opportunities without borders
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where businesses meet
              <span className="text-blue-400"> global opportunities.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Discover companies, explore products and services, and connect
              with businesses from around the world—all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#businesses"
                className="rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Explore businesses →
              </a>
              <a
                href="/register"
                className="rounded-lg border border-slate-500 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                List your business
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-700 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">Global</p>
                <p className="mt-1 text-sm text-slate-400">Business discovery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Multiple</p>
                <p className="mt-1 text-sm text-slate-400">Industry categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">One hub</p>
                <p className="mt-1 text-sm text-slate-400">Endless possibilities</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Global Business Hub</p>
                  <p className="mt-1 text-lg font-bold text-white">Explore the world</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Worldwide
                </span>
              </div>

              <div className="my-6 grid grid-cols-2 gap-3">
                {[
                  ["🇳🇬", "Nigeria", "Africa"],
                  ["🇬🇧", "United Kingdom", "Europe"],
                  ["🇦🇪", "UAE", "Middle East"],
                  ["🇺🇸", "United States", "North America"],
                ].map(([flag, country, region]) => (
                  <div key={country} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="text-3xl">{flag}</span>
                    <p className="mt-3 font-semibold text-white">{country}</p>
                    <p className="mt-1 text-xs text-slate-400">{region}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-blue-600 p-5">
                <p className="text-sm text-blue-100">Your next opportunity starts here</p>
                <p className="mt-2 text-xl font-bold text-white">
                  Think global. Connect local.
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -top-5 rounded-xl bg-white px-4 py-3 shadow-xl">
              <p className="text-sm font-bold text-slate-900">🌐 One platform</p>
              <p className="text-xs text-slate-500">A world of businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:p-7">
          <h2 className="mb-4 text-lg font-bold">What are you looking for?</h2>
          <form action="/businesses" method="GET" className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="search"
              name="q"
              placeholder="Business, product or service..."
              className="min-w-0 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="text"
              name="location"
              placeholder="City or country..."
              className="min-w-0 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Explore industries</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Discover businesses by category
            </h2>
            <p className="mt-3 text-slate-500">
              Find businesses across different industries and sectors.
            </p>
          </div>
          <a href="/categories" className="font-semibold text-blue-700 hover:text-blue-900">
            View all categories →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/categories?name=${encodeURIComponent(category.name)}`}
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-3xl">{category.icon}</span>
              <h3 className="mt-5 font-bold group-hover:text-blue-700">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{category.count}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Featured businesses */}
      <section id="businesses" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Discover companies</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Explore the business world
              </h2>
              <p className="mt-3 text-slate-500">
                A preview of how company profiles will appear on the platform.
              </p>
            </div>
            <a href="/businesses" className="font-semibold text-blue-700 hover:text-blue-900">
              Explore directory →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {businesses.map((business) => (
              <article key={business.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-950 to-blue-700">
                  <span className="text-5xl font-extrabold text-white/90">
                    {business.initials}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {business.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{business.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">📍 {business.location}</p>
                  <a href="/businesses" className="mt-6 inline-block font-semibold text-blue-700 hover:text-blue-900">
                    View business profile →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            The businesses shown above are sample entries for the homepage design.
          </p>
        </div>
      </section>

      {/* About / CTA */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl bg-blue-700 px-7 py-14 text-center sm:px-14">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Your business deserves global visibility
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
            Put your business on the global map.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Create your business presence, showcase what you offer, and make it
            easier for potential customers and partners to discover you.
          </p>
          <a
            href="/register"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Register your business →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">G</div>
              <span className="text-xl font-extrabold text-white">
                GlobalBusinessHub
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Connecting businesses, customers and opportunities across the world.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#categories" className="hover:text-white">Categories</a>
              <a href="/businesses" className="hover:text-white">Businesses</a>
              <a href="#about" className="hover:text-white">About us</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Get started</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href="/register" className="hover:text-white">Create an account</a>
              <a href="/login" className="hover:text-white">Log in</a>
              <a href="/register" className="hover:text-white">List your business</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-6 text-center text-xs text-slate-500">
          © 2026 Global Business Hub. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
