import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-200 mb-6">
          <span className="text-3xl font-bold text-slate-400">404</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Go to Home
            </Button>
          </Link>
          <Link href="/photobooks">
            <Button variant="outline">
              Browse Albums
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
