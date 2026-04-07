export function Problem() {
  return (
    <section id="problema" className="py-24 bg-surface-container-lowest px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold font-headline tracking-tight mb-4">
            Não deixe nenhum lead escapar.
          </h2>
          <p className="text-on-surface-variant text-xl">
            A cada minuto de espera, sua conversão cai <span className="text-primary font-bold">400%</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all group">
            <span className="material-symbols-outlined text-4xl text-error mb-6">timer_off</span>
            <h3 className="text-xl font-bold mb-3">Demora no atendimento</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              O lead de hoje não espera. Se você não responde em 5 minutos, seu concorrente responde.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all group">
            <span className="material-symbols-outlined text-4xl text-error mb-6">ac_unit</span>
            <h3 className="text-xl font-bold mb-3">Lead esfriando</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              O investimento em tráfego é desperdiçado quando o contato não é qualificado imediatamente após o clique.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all group">
            <span className="material-symbols-outlined text-4xl text-error mb-6">nights_stay</span>
            <h3 className="text-xl font-bold mb-3">Vendas perdidas 24/7</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Sua empresa para às 18h, mas os seus clientes continuam navegando e querendo comprar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
