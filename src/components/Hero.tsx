export function Hero() {
  const ctaLink = "https://wa.me/551931405902?text=Olá!%20Quero%20um%20agente%20de%20IA%20no%20meu%20WhatsApp";

  return (
    <section className="relative pt-32 pb-20 px-8 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-outline-variant/20">
            BIANCA CHOEIRE Exclusive
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter mb-6">
            Escala Real no WhatsApp com Agentes de <span className="text-primary-container">IA 24/7.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            O atendimento que qualifica leads e fecha vendas enquanto você foca no estratégico. Sem folgas, sem atrasos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-extrabold text-lg shadow-lg shadow-primary-container/20 hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Ativar meu Agente agora
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href="#solucoes" className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all text-center">
              Ver como funciona
            </a>
          </div>
        </div>
        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="glass-effect rounded-2xl w-full max-w-md p-6 shadow-2xl relative z-10 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/20 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <div>
                <p className="font-bold text-sm">AdNove AI Agent</p>
                <p className="text-[10px] text-primary">online agora</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-high rounded-xl rounded-tl-none p-3 max-w-[80%] text-sm">
                Olá! Sou o assistente da Bianca. Como posso ajudar a escalar seu negócio hoje?
              </div>
              <div className="bg-primary-container/10 border border-primary-container/20 text-on-surface rounded-xl rounded-tr-none p-3 max-w-[80%] ml-auto text-sm">
                Gostaria de saber mais sobre a automação de vendas.
              </div>
              <div className="bg-surface-container-high rounded-xl rounded-tl-none p-3 max-w-[85%] text-sm">
                Excelente escolha. Nossa IA qualifica 100% dos seus leads em tempo real e já agenda reuniões. Quer ver uma demo personalizada?
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center gap-2">
              <div className="flex-1 h-8 bg-surface-container-lowest rounded-full px-4 text-[10px] flex items-center text-slate-500">Escreva uma mensagem...</div>
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-container/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
