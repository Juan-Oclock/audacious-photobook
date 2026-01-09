import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Audrey
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Create Beautiful
            <br />
            <span className="text-teal-600">Photobooks</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Transform your favorite memories into stunning photobooks.
            Choose from curated layouts and bring your stories to life
            with our simple drag-and-drop editor.
          </p>

          {/* CTA Button */}
          <Link href="/photobooks">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-medium bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all hover:shadow-lg"
            >
              Start Creating
            </Button>
          </Link>

          {/* Features preview */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Easy Upload</h3>
              <p className="text-sm text-slate-600">
                Drag and drop your photos directly into our editor
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Curated Layouts</h3>
              <p className="text-sm text-slate-600">
                Professional layouts designed for your memories
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">8 Pages</h3>
              <p className="text-sm text-slate-600">
                Create a complete photobook with 72 image slots
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
