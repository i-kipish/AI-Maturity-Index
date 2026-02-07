
import React, { useState, useMemo, useCallback } from 'react';
import { I18N } from './constants';
import { Language, MaturityLevel } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('RU');
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(30).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationTriggered, setValidationTriggered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = I18N[lang];

  const answeredCount = useMemo(() => answers.filter(a => a !== null).length, [answers]);
  const progressPercent = Math.round((answeredCount / 30) * 100);

  const calculateResults = useCallback(() => {
    const firstMissingIdx = answers.findIndex(a => a === null);
    if (firstMissingIdx !== -1) {
      setValidationTriggered(true);
      setError(t.incompleteWarning);
      
      const blockId = Math.floor(firstMissingIdx / 5) + 1;
      const blockElement = document.getElementById(`block-${blockId}`);
      if (blockElement) {
        blockElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    setError(null);
    setValidationTriggered(false);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [answers, t.incompleteWarning]);

  const reset = useCallback(() => {
    setAnswers(new Array(30).fill(null));
    setShowResult(false);
    setError(null);
    setValidationTriggered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const totalScore = useMemo(() => {
    return answers.reduce((acc, curr) => acc + (curr || 0), 0);
  }, [answers]);

  const maturityLevel: MaturityLevel = useMemo(() => {
    if (totalScore <= 20) return 'low';
    if (totalScore <= 40) return 'limited';
    if (totalScore <= 60) return 'pilots';
    if (totalScore <= 75) return 'high';
    return 'ai_model';
  }, [totalScore]);

  const blockScores = useMemo(() => {
    const scores: number[] = [];
    for (let i = 0; i < 6; i++) {
      const blockAnswers = answers.slice(i * 5, (i + 1) * 5);
      scores.push(blockAnswers.reduce((acc, curr) => acc + (curr || 0), 0));
    }
    return scores;
  }, [answers]);

  const shareToClipboard = useCallback(() => {
    const message = t.shareMessage + window.location.href;
    navigator.clipboard.writeText(message);
    alert(lang === 'RU' ? 'Сообщение скопировано в буфер обмена!' : 'Message copied to clipboard!');
  }, [t.shareMessage, lang]);

  const handleStartOrReset = () => {
    if (showResult) {
      reset();
    } else {
      document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 relative">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 no-print">
        <div className="max-w-4xl mx-auto flex justify-between items-center glass-card rounded-full px-4 md:px-6 py-2">
          <div className="font-bold text-lg md:text-xl tracking-tight">
             <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
               {lang === 'RU' ? 'рейтИИнг' : 'rAIting'}
             </span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <a 
                href="https://t.me/startup_gsb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs font-bold text-blue-400 flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.86-1.68 6.44-2.78 7.72-3.31 3.67-1.53 4.44-1.8 4.93-1.8.11 0 .35.02.5.15.13.11.17.26.19.37.02.1.02.26 0 .42z"/>
              </svg>
              {t.telegramLabel}
            </a>
            <button 
                onClick={() => setLang(l => l === 'RU' ? 'EN' : 'RU')}
                className="text-xs font-bold hover:text-blue-400 transition-colors px-3 py-1.5 glass-pill rounded-full border border-white/5"
            >
              {lang === 'RU' ? 'EN' : 'RU'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero / Header Section */}
      <header className="mt-20 md:mt-16 mb-12 text-center no-print text-left md:text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4">
          {t.subtitle}
        </p>
        <div className="mb-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold opacity-60">
           {t.developedBy}
        </div>
        <button 
          onClick={handleStartOrReset}
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all transform hover:scale-105 shadow-xl"
        >
          {showResult ? (lang === 'RU' ? 'Пройти опрос заново' : 'Retake survey') : t.ctaStart}
        </button>
      </header>

      {/* Questionnaire */}
      {!showResult && (
        <>
        <div className="sticky top-20 z-40 mb-8 no-print">
          <div className="glass-pill rounded-full h-2 overflow-hidden w-full mb-2 border border-white/5">
            <div 
              className="bg-blue-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-500 font-bold">
             <span>{progressPercent}% {lang === 'RU' ? 'заполнено' : 'completed'}</span>
             <span>30 {lang === 'RU' ? 'утверждений' : 'statements'}</span>
          </div>
        </div>
        <main id="assessment" className="space-y-12 mb-16 no-print">
          {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center sticky top-28 z-30 backdrop-blur-md">
                  {error}
              </div>
          )}

          {t.blocks.map((block, bIndex) => (
            <section key={block.id} id={`block-${block.id}`} className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-blue-500/10" />
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-left">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                  {block.id}
                </span>
                {block.title}
              </h2>
              
              <div className="space-y-8">
                {block.questions.map((q, qIndex) => {
                  const globalIndex = bIndex * 5 + qIndex;
                  const isMissing = validationTriggered && answers[globalIndex] === null;
                  return (
                    <div key={q.id} className={`space-y-4 transition-all duration-300 p-2 rounded-xl text-left ${isMissing ? 'bg-red-500/5 ring-1 ring-red-500/20' : ''}`}>
                      <p className={`text-slate-200 leading-relaxed font-medium ${isMissing ? 'text-red-300' : ''}`}>
                        {q.text}
                        {isMissing && <span className="ml-2 text-red-500">*</span>}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {t.scale.map((label, val) => (
                          <button
                            key={val}
                            onClick={() => {
                              const newAnswers = [...answers];
                              newAnswers[globalIndex] = val;
                              setAnswers(newAnswers);
                              if (validationTriggered && newAnswers.every((a, idx) => idx > globalIndex || a !== null)) {
                                  setError(null);
                              }
                            }}
                            className={`
                              px-3 py-3 rounded-xl text-xs font-medium transition-all border text-left
                              ${answers[globalIndex] === val 
                                ? 'bg-blue-500 text-white border-blue-400 shadow-lg shadow-blue-500/20' 
                                : isMissing 
                                  ? 'bg-white/5 border-red-500/30 text-slate-400 hover:border-red-500/50 hover:text-white'
                                  : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                              }
                            `}
                          >
                            <span className="block text-lg mb-1 opacity-50">{val}</span>
                            <span className="leading-tight">{label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-8">
            <button 
              onClick={calculateResults}
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
            >
              {t.ctaCalc}
            </button>
            <button 
              onClick={reset}
              className="w-full md:w-auto glass-pill px-8 py-4 rounded-full font-medium text-slate-400 hover:text-white transition-all"
            >
              {t.ctaReset}
            </button>
          </div>
        </main>
        </>
      )}

      {/* Results Section */}
      {showResult && (
        <main id="result-section" className="space-y-12 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 no-print">
          {/* Main Score Header */}
          <div className="glass-card rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
             <div className="relative z-10">
               <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6">
                 {t.levelLabel}
               </span>
               <h2 className="text-5xl md:text-7xl font-black mb-4">
                 {totalScore}<span className="text-3xl opacity-30">/90</span>
               </h2>
               <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                 {t.levels[maturityLevel].title}
               </h3>
               <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                 {t.levels[maturityLevel].comment}
               </p>
             </div>
          </div>

          {/* ROADMAP SECTION */}
          <div className="pt-12 text-left">
            <h3 className="text-3xl font-bold mb-16 uppercase tracking-tight">{t.roadmapLabel}</h3>
            <div className="space-y-12">
                {t.levels[maturityLevel].roadmap.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-8 items-start animate-roadmap" style={{ animationDelay: `${idx * 0.15}s` }}>
                        <div className="w-full md:w-1/3 text-left">
                            <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2 leading-none">
                                {step.period}
                            </div>
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                                {step.title}
                            </h4>
                        </div>
                        <div className="w-full md:w-2/3 text-left border-l border-white/10 pl-6 md:pl-10">
                            <ul className="space-y-4">
                                {step.actions.map((action, aIdx) => (
                                    <li key={aIdx} className="text-slate-300 flex gap-4 text-left font-medium leading-relaxed">
                                        <span className="text-blue-500 text-xl font-bold">•</span>
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-8">
             <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-left">
               <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
               {t.nextActionsLabel}
             </h3>
             <div className="grid md:grid-cols-3 gap-6">
                {t.levels[maturityLevel].nextBestActions.map((action, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-left transition-all hover:bg-white/10">
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Шаг {idx + 1}</div>
                    <p className="text-slate-200 font-medium leading-relaxed">{action}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8">
             <a 
                href="https://t.me/startup_gsb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg"
             >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
               {t.ctaPdf}
             </a>
             <button 
                onClick={shareToClipboard} 
                className="w-full md:w-auto glass-pill px-12 py-4 rounded-full font-bold hover:text-blue-400 transition-all flex items-center justify-center gap-2"
             >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
               </svg>
               {t.ctaShare}
             </button>
          </div>

          {/* RESEARCH CTA BLOCK */}
          <div className="pt-8 flex justify-center">
            <div className="animated-border-container max-w-4xl shadow-2xl">
              <div className="animated-border-inner h-full bg-[#050b18]">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full rounded-3xl p-6 md:p-10 text-left transition-all group overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                        <h4 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors uppercase tracking-tight">
                            {t.researchTitle}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                            {t.researchDesc}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold shadow-lg group-hover:shadow-pink-500/40 transition-all scale-100 group-hover:scale-105">
                            {t.researchCta}
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* MODAL FOR RESEARCH */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 no-print overflow-y-auto">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          <div className="relative glass-card rounded-3xl w-full max-w-lg p-8 md:p-10 animate-in zoom-in-95 duration-200 shadow-2xl">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-[101] p-2" 
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!formSubmitted ? (
                <>
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-left text-white pr-8 leading-tight">
                  {t.researchTitle}
                </h3>
                <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-widest">{t.form.name} *</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ваше имя" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-widest">{t.form.email} *</label>
                        <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-widest">{t.form.company}</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Название компании" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-widest">{t.form.industry}</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Сфера деятельности" />
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-white/5">
                        <label className="flex gap-4 items-start cursor-pointer group">
                            <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-pink-600 focus:ring-pink-500" />
                            <span className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors leading-snug font-medium">{t.form.consent} *</span>
                        </label>
                        <label className="flex gap-4 items-start cursor-pointer group">
                            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-pink-600 focus:ring-pink-500" />
                            <span className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors leading-snug font-medium">{t.form.newsletter}</span>
                        </label>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-600 to-violet-600 text-white py-4 rounded-xl font-bold mt-4 hover:shadow-pink-500/20 transition-all shadow-xl text-md"
                    >
                        {t.form.submit}
                    </button>
                </form>
                </>
            ) : (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Готово!</h3>
                    <p className="text-slate-400 text-md leading-relaxed">Мы отправим исследование на вашу почту в ближайшее время. Спасибо за интерес!</p>
                    <button 
                        onClick={() => {setIsModalOpen(false); setFormSubmitted(false);}}
                        className="mt-8 bg-white/10 px-8 py-3 rounded-full text-blue-400 font-bold hover:bg-white/20 transition-all"
                    >
                        Вернуться назад
                    </button>
                </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-white/10 text-center space-y-4 no-print">
        <div className="text-xl font-bold opacity-40">рейтИИнг</div>
        <p className="text-sm font-medium text-blue-400/60 uppercase tracking-[0.3em] mb-4">
          {t.developedBy}
        </p>
        <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
          {t.disclaimer}
        </p>
        <div className="pt-4 pb-12">
            <a 
                href="https://t.me/startup_gsb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-blue-400 font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.86-1.68 6.44-2.78 7.72-3.31 3.67-1.53 4.44-1.8 4.93-1.8.11 0 .35.02.5.15.13.11.17.26.19.37.02.1.02.26 0 .42z"/>
              </svg>
              Telegram: @startup_gsb
            </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
