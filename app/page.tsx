import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold">Hi, I'm Bokai Cheng</h1>
        <p className="mt-4 text-lg">
          CS @ UW–Madison · Aspiring Quant Developer / FinTech Engineer.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="rounded-xl border px-4 py-2" href="/resume.pdf" target="_blank">Download Résumé</a>
          <a className="rounded-xl border px-4 py-2" href="https://github.com/M0nesy121" target="_blank">GitHub</a>
          <a className="rounded-xl border px-4 py-2" href="https://www.linkedin.com/in/bokai-cheng-a4740532a/" target="_blank">LinkedIn</a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <ul className="mt-6 grid gap-4">
          <li className="rounded-2xl border p-4">
            <h3 className="font-semibold">Intraday Scanner (Java/Python)</h3>
            <p className="text-sm text-gray-600">
              Real-time filters: gap, float, VWAP, EMA(100/200). Backtest module & risk control.
            </p>
            <div className="mt-2 text-sm">
              <a className="underline" href="https://github.com/M0nesy121/intraday-scanner" target="_blank">Code</a>
            </div>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm text-gray-600">
          Email: chengbokai96@gmail.com · Open to remote/onsite internships.
        </p>
      </section>
    </main>
  );
}

