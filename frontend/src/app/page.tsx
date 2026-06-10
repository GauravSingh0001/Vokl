import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Mic,
  Zap,
  Globe,
  Download,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import DemoSection from "~/components/demo-section";

export default function HomePage() {
  const features = [
    {
      icon: <Mic className="h-5 w-5" />,
      title: "Voice Cloning",
      description:
        "Upload a short audio sample and generate speech that sounds like you — or any voice you choose.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "23 Languages",
      description:
        "Generate natural-sounding speech in English, Hindi, Spanish, French, Japanese, and 18 more languages.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Generation",
      description:
        "Powered by Chatterbox TTS on serverless infrastructure — your audio is ready in seconds, not minutes.",
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Download & Use",
      description:
        "Get high-quality WAV files ready for podcasts, videos, accessibility tools, or any project.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Write your text",
      description:
        "Paste or type any content — short captions, long-form narration, or anything in between.",
    },
    {
      number: "02",
      title: "Pick a voice",
      description:
        "Choose from built-in voices or upload a personal voice sample for cloning.",
    },
    {
      number: "03",
      title: "Generate & download",
      description:
        "Receive your audio file instantly. Save it to your project library or download directly.",
    },
  ];

  const planFeatures = [
    "Voice Cloning from your own samples",
    "23 language support",
    "High-quality WAV downloads",
    "Project history & management",
    "Cloud audio storage",
    "Fast serverless processing",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-15 items-center justify-between py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-900">
                <Mic className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-stone-900">
                Vokl
              </span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#features"
                className="text-sm text-stone-500 transition-colors hover:text-stone-900"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-stone-500 transition-colors hover:text-stone-900"
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-stone-500 transition-colors hover:text-stone-900"
              >
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/auth/sign-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer text-stone-600 hover:text-stone-900"
                >
                  Sign in
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="cursor-pointer gap-1.5 bg-stone-900 text-white hover:bg-stone-800"
                >
                  Get started
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-stone-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Powered by Chatterbox TTS
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">
              Turn text into{" "}
              <span className="text-slate-500">natural speech</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-500">
              Vokl is a text-to-speech platform with voice cloning and
              multilingual support. Write your content, pick a voice, and
              receive a high-quality audio file — ready to use anywhere.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="cursor-pointer gap-2 bg-stone-900 px-8 text-white hover:bg-stone-800"
                >
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer gap-2 border-stone-300 px-8 text-stone-700 hover:bg-stone-50"
                >
                  Hear examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <div id="demo">
        <DemoSection />
      </div>

      {/* Features */}
      <section id="features" className="border-b border-stone-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
              Everything you need
            </h2>
            <p className="text-stone-500">
              A focused set of capabilities — no bloat, no unnecessary
              complexity.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-stone-200 bg-stone-50 shadow-none"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-700 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b border-stone-200 bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
              How it works
            </h2>
            <p className="text-stone-500">Three steps from text to audio.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-4 text-4xl font-bold text-stone-200">
                  {item.number}
                </div>
                <h3 className="mb-2 text-base font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-stone-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
              Free to start
            </h2>
            <p className="text-stone-500">
              Get started with free credits. No credit card required.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <Card className="border-stone-200 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-8">
                  <p className="mb-1 text-sm font-medium text-stone-500">
                    Free plan
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-stone-900">$0</span>
                    <span className="text-stone-400">/ month</span>
                  </div>
                  <p className="mt-2 text-sm text-stone-500">
                    Includes 10 free generation credits
                  </p>
                </div>
                <ul className="mb-8 space-y-3">
                  {planFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-sm text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard">
                  <Button
                    className="w-full cursor-pointer bg-stone-900 text-white hover:bg-stone-800"
                    size="lg"
                  >
                    Create a free account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to hear your words?
            </h2>
            <p className="mb-8 text-stone-400">
              Create an account and start generating speech in under a minute.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="cursor-pointer gap-2 bg-white px-8 text-stone-900 hover:bg-stone-100"
              >
                Get started — it&apos;s free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-900">
                    <Mic className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base font-semibold text-stone-900">
                    Vokl
                  </span>
                </div>
                <p className="max-w-xs text-sm text-stone-500">
                  AI-powered text-to-speech with voice cloning. Built for
                  creators, developers, and anyone who works with audio.
                </p>
              </div>
              <div className="flex gap-16">
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Product
                  </h3>
                  <ul className="space-y-2 text-sm text-stone-500">
                    <li>
                      <Link
                        href="#features"
                        className="transition-colors hover:text-stone-900"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#pricing"
                        className="transition-colors hover:text-stone-900"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard"
                        className="transition-colors hover:text-stone-900"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Support
                  </h3>
                  <ul className="space-y-2 text-sm text-stone-500">
                    <li>
                      <Link
                        href="mailto:support@vokl.com"
                        className="transition-colors hover:text-stone-900"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/settings"
                        className="transition-colors hover:text-stone-900"
                      >
                        Account settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-stone-100 pt-8 text-center text-xs text-stone-400">
              <p>
                &copy; {new Date().getFullYear()} Vokl. Built by{" "}
                <a
                  href="https://github.com/GauravSingh0001"
                  className="hover:text-stone-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gaurav Singh
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
