import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ctaLink = "https://wa.me/551931405902?text=Olá!%20Quero%20um%20agente%20de%20IA%20no%20meu%20WhatsApp";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e1322]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,212,255,0.04)]">
      <nav className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="z-50 relative flex items-center">
          <img 
            src="https://i.postimg.cc/m2MK5k8F/Logo_para_site.png" 
            alt="AdNove Logo" 
            className="h-8 md:h-10 w-auto" 
            referrerPolicy="no-referrer" 
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <a className="text-slate-400 hover:text-white transition-colors" href="#solucoes">Soluções</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#problema">O Problema</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#resultados">Resultados</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#precos">Preços</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#faq">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 font-bold hover:text-white transition-all">Demo WhatsApp</a>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold font-headline transition-all hover:opacity-90 active:scale-95">Começar Agora</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 relative text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0e1322] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a className="text-2xl font-bold text-white" href="#solucoes" onClick={() => setIsMobileMenuOpen(false)}>Soluções</a>
          <a className="text-2xl font-bold text-white" href="#problema" onClick={() => setIsMobileMenuOpen(false)}>O Problema</a>
          <a className="text-2xl font-bold text-white" href="#resultados" onClick={() => setIsMobileMenuOpen(false)}>Resultados</a>
          <a className="text-2xl font-bold text-white" href="#precos" onClick={() => setIsMobileMenuOpen(false)}>Preços</a>
          <a className="text-2xl font-bold text-white" href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg">Demo WhatsApp</a>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold font-headline text-lg text-center">Começar Agora</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
