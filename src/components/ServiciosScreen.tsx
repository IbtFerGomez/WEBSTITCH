import React, { useState } from 'react';
import { TabType } from '../types';
import { SERVICES } from '../data/consultingData';

interface ServiciosScreenProps {
  onNavigate: (tab: TabType) => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onShowToast: (msg: string) => void;
}

export const ServiciosScreen: React.FC<ServiciosScreenProps> = ({
  onNavigate,
  onSelectServiceForQuote,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'infra' | 'calidad' | 'bioprocesos'>('all');

  const filterChips: { id: 'all' | 'infra' | 'calidad' | 'bioprocesos'; label: string }[] = [
    { id: 'all', label: 'Todos (3)' },
    { id: 'infra', label: 'Infraestructura & Puesta en Marcha' },
    { id: 'calidad', label: 'Calidad & POEs' },
    { id: 'bioprocesos', label: 'Optimización Biológica' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleQuoteClick = (serviceTitle: string) => {
    onSelectServiceForQuote(serviceTitle);
    onShowToast(`Cotización preparada: ${serviceTitle}`);
    onNavigate('contacto');
  };

  return (
    <div className="flex flex-col w-full pb-6">
      {/* Header & Metrics */}
      <div className="px-5 pt-4 pb-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 self-start">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#006a61]/10 text-[#006a61] font-mono text-[10.5px] tracking-wider uppercase font-semibold">
            Catálogo de Soluciones B2B
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#44474d] font-mono text-[10.5px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006a61]" />
            LATAM Qualified
          </span>
        </div>

        <h1 className="font-display text-[28px] sm:text-[32px] leading-[34px] sm:leading-[38px] text-[#0b1c30] font-bold tracking-tight">
          Servicios de Consultoría e Implementación Especializada
        </h1>

        <p className="font-body text-[14px] leading-[22px] text-[#44474d]">
          Respaldado por maestros en ciencias con expertise integral en bioprocesos, infraestructura civil y validación regulatoria.
        </p>

        {/* 3 Metric Tiles */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="bg-[#eff4ff] p-2.5 rounded-xl border border-[#c5c6cd]/30 flex flex-col justify-between">
            <span className="font-headline text-[19px] font-bold text-[#0b1c30]">100%</span>
            <span className="font-mono text-[10px] text-[#44474d] uppercase leading-tight mt-0.5">
              M. en C. Directos
            </span>
          </div>
          <div className="bg-[#eff4ff] p-2.5 rounded-xl border border-[#c5c6cd]/30 flex flex-col justify-between">
            <span className="font-headline text-[19px] font-bold text-[#006a61]">ISO 7/8</span>
            <span className="font-mono text-[10px] text-[#44474d] uppercase leading-tight mt-0.5">
              Estándar Cleanroom
            </span>
          </div>
          <div className="bg-[#eff4ff] p-2.5 rounded-xl border border-[#c5c6cd]/30 flex flex-col justify-between">
            <span className="font-headline text-[19px] font-bold text-[#0b1c30]">PIC/S</span>
            <span className="font-mono text-[10px] text-[#44474d] uppercase leading-tight mt-0.5">
              Validación GMP
            </span>
          </div>
        </div>
      </div>

      {/* Filter Bar Chips (Horizontal Scrollable) */}
      <div className="w-full overflow-x-auto pb-3 px-5 flex items-center gap-2 scrollbar-none">
        {filterChips.map((chip) => {
          const isActive = activeCategory === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => setActiveCategory(chip.id)}
              className={`shrink-0 px-3.5 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#000000] text-white shadow-sm font-semibold'
                  : 'bg-[#eff4ff] text-[#44474d] hover:bg-[#e5eeff] border border-[#c5c6cd]/40'
              }`}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {/* Services List Grid */}
      <div className="px-5 flex flex-col gap-6">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#c5c6cd]/40 flex flex-col gap-3.5"
          >
            {/* Service Banner Image */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-inner">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/85 via-[#0d1c32]/25 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#006a61] font-mono text-[11px] uppercase font-semibold">
                  <span className="material-symbols-outlined text-[14px]">{service.badge.icon}</span>
                  {service.badge.label}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                <span className="bg-[#0d1c32]/80 px-2 py-0.5 rounded border border-white/10">
                  {service.standards.left}
                </span>
                <span className="text-[#89f5e7] font-semibold">{service.standards.right}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-[19px] sm:text-[21px] text-[#0b1c30] font-bold leading-snug">
                {service.title}
              </h2>
              <p className="font-body text-[13.5px] text-[#44474d] leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Scope Checklist Box */}
            <div className="bg-[#eff4ff] rounded-xl p-3.5 flex flex-col gap-2 border border-[#c5c6cd]/30">
              <span className="font-mono text-[11px] text-[#0b1c30] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#006a61] text-[16px]">fact_check</span>
                {service.scopeTitle}
              </span>
              <ul className="flex flex-col gap-2 mt-0.5">
                {service.scopeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#006a61] text-[17px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="font-body text-[13px] text-[#0b1c30] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Pills */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10.5px] text-[#44474d] uppercase font-medium">
                Entregables Clave Certificados
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.deliverables.map((deliv, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#e5eeff] rounded font-mono text-[11px] text-[#0b1c30] border border-[#c5c6cd]/30"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={() => handleQuoteClick(service.title)}
              className="w-full h-12 bg-[#000000] hover:bg-[#213145] text-white rounded-xl flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider transition-all shadow-sm active:scale-[0.99] cursor-pointer"
            >
              <span>{service.ctaText}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </article>
        ))}
      </div>

      {/* Trust Callout */}
      <div className="px-5 pt-6 flex flex-col gap-4">
        <div className="bg-[#0d1c32] text-white p-4 rounded-xl shadow-md flex items-start gap-3 border border-white/10">
          <div className="w-10 h-10 rounded-full bg-[#006a61]/30 flex items-center justify-center shrink-0 text-[#89f5e7]">
            <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10.5px] text-[#89f5e7] tracking-wider uppercase font-semibold">
              Garantía Técnica BioCell
            </span>
            <p className="font-headline text-[15px] font-semibold text-white leading-snug">
              Acompañamiento in situ por socios consultores con grado de Maestría en Ciencias. Sin juniors ni intermediarios.
            </p>
            <span className="font-body text-[12.5px] text-[#76849f] leading-snug">
              Supervisión directa de diseño de ingeniería, protocolos analíticos y defensa ante inspectores sanitarios.
            </span>
          </div>
        </div>

        {/* Schedule diagnostic card */}
        <div className="bg-[#eff4ff] rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 items-center text-center border border-[#c5c6cd]/40">
          <span className="material-symbols-outlined text-[#006a61] text-[30px]">calendar_today</span>
          <h3 className="font-headline text-[17px] font-bold text-[#0b1c30]">
            ¿Requiere una evaluación inicial de sus instalaciones o procesos?
          </h3>
          <p className="font-body text-[13px] text-[#44474d]">
            Analizamos sus requerimientos bajo estándares regulatorios vigentes en menos de 48 horas hábiles.
          </p>
          <button
            onClick={() => onNavigate('contacto')}
            className="w-full h-11 bg-[#006a61] hover:bg-[#005049] text-white rounded-xl flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer mt-1"
          >
            <span className="material-symbols-outlined text-[18px]">event_available</span>
            <span>Agendar Sesión de Diagnóstico</span>
          </button>
        </div>
      </div>
    </div>
  );
};
