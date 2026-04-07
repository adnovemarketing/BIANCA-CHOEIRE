export function Solution() {
  return (
    <section id="solucoes" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              className="rounded-2xl shadow-2xl border border-outline-variant/10 w-full aspect-square object-cover" 
              alt="Agente de IA no WhatsApp" 
              src="https://i.postimg.cc/V6RvLgf7/agente-ia-whatsapp-comunicacao-2.png"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded bg-primary-container/10 text-primary-container text-xs font-bold mb-4">A SOLUÇÃO</div>
            <h2 className="text-4xl lg:text-6xl font-extrabold font-headline leading-tight mb-8">
              A AdNove apresenta: <br/>O Agente de IA para WhatsApp.
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Qualificação automática de leads</h4>
                  <p className="text-on-surface-variant text-sm">A IA faz as perguntas certas e filtra apenas quem está pronto para comprar.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Atendimento 24h sem interrupção</h4>
                  <p className="text-on-surface-variant text-sm">Seu negócio nunca fecha. Vendas acontecem enquanto você dorme.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Integração Total com CRM</h4>
                  <p className="text-on-surface-variant text-sm">Sincronize todos os dados automaticamente com seu funil de vendas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Voz da Marca Personalizada</h4>
                  <p className="text-on-surface-variant text-sm">A IA aprende seu tom de voz e responde exatamente como você faria.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
