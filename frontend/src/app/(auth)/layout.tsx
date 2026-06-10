import type { ReactNode } from "react";
import { Providers } from "~/components/providers";
import { Mic } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen bg-stone-50">
        {/* Left Side — Brand Panel */}
        <div className="relative hidden flex-col justify-between border-r border-stone-200 bg-white px-12 py-12 lg:flex lg:w-5/12 xl:px-16">
          {/* Logo */}
          <Link href="/" className="flex cursor-pointer items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-stone-900">
              <Mic className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-stone-900">
              Vokl
            </span>
          </Link>

          {/* Tagline */}
          <div className="max-w-sm">
            <h1 className="mb-4 text-3xl font-bold leading-snug text-stone-900 xl:text-4xl">
              Your words,{" "}
              <span className="text-stone-400">your voice.</span>
            </h1>
            <p className="text-base leading-relaxed text-stone-500">
              Generate natural-sounding speech in over 20 languages. Upload your
              voice, type your content, and get studio-quality audio in seconds.
            </p>

            {/* Capability list */}
            <ul className="mt-8 space-y-3">
              {[
                "Voice cloning from your own recordings",
                "23 supported languages",
                "Fast serverless audio processing",
                "Project history & cloud storage",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-stone-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer note */}
          <p className="text-xs text-stone-400">
            Built by{" "}
            <a
              href="https://github.com/GauravSingh0001"
              className="hover:text-stone-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gaurav Singh
            </a>
          </p>
        </div>

        {/* Right Side — Auth Form */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link
                href="/"
                className="inline-flex cursor-pointer items-center gap-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-stone-900">
                  <Mic className="h-4.5 w-4.5 text-white" />
                </div>
                <span className="text-lg font-semibold text-stone-900">
                  Vokl
                </span>
              </Link>
            </div>

            {/* Auth form */}
            <div>{children}</div>

            {/* Back link */}
            <p className="mt-6 text-center text-sm text-stone-500">
              Back to{" "}
              <Link
                href="/"
                className="font-medium text-stone-700 transition-colors hover:text-stone-900"
              >
                homepage
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}
