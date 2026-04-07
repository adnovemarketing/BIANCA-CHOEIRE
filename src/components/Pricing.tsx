export function Pricing() {
  const ctaLink = "https://wa.me/551931405902?text=Olá!%20Quero%20um%20agente%20de%20IA%20no%20meu%20WhatsApp";

  return (
    <section id="precos" className="py-24 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold font-headline mb-4">Invista na sua escala.</h2>
        <p className="text-on-surface-variant mb-12">O fim do gargalo no seu atendimento comercial começa aqui.</p>
        <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-primary-container text-on-primary text-[10px] font-black px-3 py-1 rounded-full">OFERTA DE LANÇAMENTO</span>
          </div>
          <div className="mb-8">
            <p className="text-slate-400 text-sm mb-2">Por apenas</p>
            <h3 className="text-6xl font-black font-headline text-white tracking-tighter">R$ 1.497</h3>
            <p className="text-primary font-bold mt-2 text-xl">à vista ou em até 12x</p>
          </div>
          <div className="flex flex-col gap-6 mb-12 max-w-sm mx-auto text-left">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              <span className="text-sm">Configuração completa inclusa</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              <span className="text-sm">Treinamento de IA personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              <span className="text-sm">Suporte prioritário AdNove</span>
            </div>
          </div>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-xl font-extrabold text-2xl shadow-xl shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all mb-6">
            Quero meu Agente agora
          </a>
          <div className="flex items-center justify-center gap-6 opacity-60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">security</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Garantia 7 dias</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
}
