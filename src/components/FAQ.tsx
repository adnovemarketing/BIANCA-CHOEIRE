import { useState } from 'react';

const faqs = [
  {
    question: "A IA vai parecer um robô conversando com meus clientes?",
    answer: "Não. Nossa IA é treinada com o tom de voz da sua marca e histórico de conversas, garantindo um atendimento humanizado, empático e natural que muitas vezes é indistinguível de um humano."
  },
  {
    question: "É difícil de configurar e integrar com meu CRM?",
    answer: "A configuração é 100% feita pela nossa equipe. Entregamos o agente pronto e integrado ao seu CRM (HubSpot, RD Station, ActiveCampaign, etc) em poucos dias, sem que você precise se preocupar com a parte técnica."
  },
  {
    question: "O que acontece se a IA não souber responder uma pergunta?",
    answer: "O agente é programado para reconhecer seus próprios limites. Quando uma dúvida foge do escopo ou exige uma negociação complexa, ele transfere o atendimento perfeitamente para um humano da sua equipe, com todo o contexto da conversa."
  },
  {
    question: "Isso realmente aumenta as vendas?",
    answer: "Sim. Ao responder leads em menos de 1 minuto, 24 horas por dia, a taxa de conversão aumenta drasticamente. Você para de perder vendas por demora no atendimento ou por leads que esfriam fora do horário comercial."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-8 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold font-headline tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-on-surface-variant text-xl">
            Tudo o que você precisa saber antes de escalar suas vendas.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden transition-all"
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 text-primary ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-on-surface-variant px-6 pb-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
