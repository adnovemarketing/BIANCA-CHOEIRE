export function SocialProof() {
  return (
    <section id="resultados" className="py-16 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">verified_user</span>
            <span className="font-headline font-bold text-xl">Certificado AdNove</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">hub</span>
            <span className="font-headline font-bold text-xl">Meta Business</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">cloud_done</span>
            <span className="font-headline font-bold text-xl">AWS Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">monitoring</span>
            <span className="font-headline font-bold text-xl">Data-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
