import { TRUST_POINTS } from "@/lib/content/trust";

export function TrustBar() {
  return (
    <section className="py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {TRUST_POINTS.slice(0, 3).map((point) => (
          <div key={point.title} className="surface-card rounded-[1.5rem] border border-slate-200/70 p-5">
            <h3 className="text-lg font-bold">{point.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
