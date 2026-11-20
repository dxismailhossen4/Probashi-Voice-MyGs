import Link from "next/link";

const markets = [
  { name: "Thailand", currency: "THB", flag: "🇹🇭" },
  { name: "Kuwait", currency: "KWD", flag: "🇰🇼" },
  { name: "Bahrain", currency: "BHD", flag: "🇧🇭" },
];

const features = [
  {
    number: "01",
    title: "Free Preview",
    description:
      "প্রকাশিত কনটেন্টের ফ্রি প্রিভিউ দেখে তারপর আপনার প্রয়োজন অনুযায়ী সিদ্ধান্ত নিন।",
  },
  {
    number: "02",
    title: "3D & 4D Content",
    description:
      "3D ও 4D—দুই ধরনের ডিজিটাল prediction content আলাদা ক্যাটাগরিতে সাজানো থাকবে।",
  },
  {
    number: "03",
    title: "Secure Member Access",
    description:
      "সাইন ইন ও যাচাইকৃত purchase entitlement-এর ভিত্তিতে পেইড কনটেন্ট দেখা যাবে।",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d18] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[35rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#080d18]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="3UP Thailand home">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 text-lg font-black text-[#07111e] shadow-lg shadow-cyan-500/20">
              3U
            </span>
            <span>
              <span className="block text-lg font-black tracking-[.12em]">3UP</span>
              <span className="block text-[10px] font-semibold tracking-[.28em] text-cyan-300">
                THAILAND
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-300" href="#home">Home</a>
            <a className="transition hover:text-cyan-300" href="#predictions">Predictions</a>
            <a className="transition hover:text-cyan-300" href="#how-it-works">How it works</a>
            <a className="transition hover:text-cyan-300" href="#markets">Markets</a>
            <a className="transition hover:text-cyan-300" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200 sm:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-extrabold text-[#07111e] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </header>

      <section id="home" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            3D &amp; 4D DIGITAL CONTENT PLATFORM
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Your Numbers.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Your Insight.
            </span>
            <span className="block">Your Choice.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            3UP Thailand-এ 3D ও 4D prediction-related digital content, free
            preview এবং member-only content—সবকিছু এক জায়গায় সহজভাবে দেখুন।
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/predictions"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-sm font-extrabold text-[#07111e] shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Explore Predictions <span className="ml-2">→</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[.04] px-6 py-4 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[.08]"
            >
              Create Free Account
            </Link>
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Informational digital content only. No guaranteed result or winning claim.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-[#111a2b]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Member dashboard preview</p>
                <h2 className="mt-2 text-xl font-extrabold">Your content hub</h2>
              </div>
              <span className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[11px] font-bold text-emerald-200">
                SECURE ACCESS
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
                <p className="text-xs text-slate-400">CONTENT TYPE</p>
                <p className="mt-2 text-3xl font-black">3D</p>
                <p className="mt-1 text-xs text-slate-400">Market-based content</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.07] p-4">
                <p className="text-xs text-cyan-200/70">CONTENT TYPE</p>
                <p className="mt-2 text-3xl font-black text-cyan-200">4D</p>
                <p className="mt-1 text-xs text-slate-400">Digital content</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1322] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Content access</p>
                <span className="text-xs text-slate-500">Preview</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/[.04] p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/10 text-lg">◈</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">Free preview</p>
                    <p className="text-xs text-slate-500">Publicly available content</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-300">FREE</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/[.04] p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-300/10 text-lg">◆</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">Member content</p>
                    <p className="text-xs text-slate-500">Available after verified access</p>
                  </div>
                  <span className="text-xs font-bold text-violet-200">VIP</span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
              <span>Designed for Thailand &amp; selected markets</span>
              <span className="text-cyan-300">3UP / 01</span>
            </div>
          </div>
        </div>
      </section>

      <section id="markets" className="relative z-10 border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-[1fr_2fr] sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Supported market setup</p>
            <p className="mt-2 text-sm text-slate-300">Currency display follows each market configuration.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {markets.map((market) => (
              <div key={market.currency} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101a2a] px-4 py-3">
                <span className="text-2xl">{market.flag}</span>
                <div>
                  <p className="text-sm font-bold">{market.name}</p>
                  <p className="text-xs text-slate-400">{market.currency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="predictions" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Explore the platform</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A clearer way to explore content</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Published content এখানে catalogue থেকে দেখানো হবে। বর্তমানে backend starter-এ কোনো demo prediction বা ভুয়া winner data যোগ করা হয়নি।
            </p>
          </div>
          <Link href="/predictions" className="text-sm font-bold text-cyan-300 transition hover:text-cyan-200">
            View content catalogue <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="group rounded-2xl border border-white/10 bg-[#101a2a]/80 p-7 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <span className="text-sm font-black tracking-widest text-cyan-300">{feature.number}</span>
              <h3 className="mt-7 text-xl font-extrabold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/[.025] px-6 py-8 text-center">
          <p className="text-sm font-bold text-slate-200">No published content is connected yet</p>
          <p className="mt-2 text-xs leading-6 text-slate-500">
            Supabase catalogue integration সম্পন্ন হলে এখানে database থেকে published 3D/4D content আসবে।
          </p>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-y border-white/10 bg-[#0d1524]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Simple process</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">How membership works</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Create account", "আপনার account তৈরি করুন।"],
              ["02", "Explore content", "Free preview ও catalogue দেখুন।"],
              ["03", "Place an order", "পছন্দের paid digital content-এর order তৈরি করুন।"],
              ["04", "Verified access", "Payment যাচাই ও entitlement সক্রিয় হলে protected content খুলবে।"],
            ].map(([step, title, description]) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[.035] p-6">
                <p className="text-xs font-black tracking-widest text-cyan-300">{step}</p>
                <h3 className="mt-5 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Need to know</p>
            <h2 className="mt-3 text-3xl font-black">Frequently asked questions</h2>
          </div>
          <div className="space-y-5">
            <details className="group rounded-xl border border-white/10 bg-white/[.03] p-5" open>
              <summary className="cursor-pointer list-none font-bold">Is every prediction guaranteed?</summary>
              <p className="mt-3 text-sm leading-7 text-slate-400">না। কোনো prediction বা তথ্য নির্দিষ্ট ফলাফল, লাভ বা জয়ের নিশ্চয়তা দেয় না। নিজের বিবেচনায় সিদ্ধান্ত নিন।</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[.03] p-5">
              <summary className="cursor-pointer list-none font-bold">How does paid content access work?</summary>
              <p className="mt-3 text-sm leading-7 text-slate-400">Order ও payment যাচাইয়ের পর backend-এ entitlement active হলে সংশ্লিষ্ট protected content access দেওয়া হবে।</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[.03] p-5">
              <summary className="cursor-pointer list-none font-bold">Which currencies are configured?</summary>
              <p className="mt-3 text-sm leading-7 text-slate-400">বর্তমান backend seed-এ Thailand-এর THB, Kuwait-এর KWD এবং Bahrain-এর BHD market রয়েছে।</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#060a12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-black tracking-[.16em] text-white">3UP THAILAND</p>
            <p className="mt-2 text-xs">Digital information platform</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
            <Link href="/terms" className="transition hover:text-cyan-300">Terms</Link>
            <Link href="/privacy" className="transition hover:text-cyan-300">Privacy</Link>
          </div>
          <p className="max-w-md text-xs leading-6">
            Disclaimer: Content is informational only. No affiliation with lottery operators is claimed.
            Availability and lawful use depend on local rules.
          </p>
        </div>
      </footer>
    </main>
  );
}
