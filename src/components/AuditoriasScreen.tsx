import React, { useState } from 'react';
import { TabType, AuditFactor } from '../types';
import { IMAGES, INITIAL_AUDIT_FACTORS, AUDIT_PROGRAMS } from '../data/consultingData';

interface AuditoriasScreenProps {
  onNavigate: (tab: TabType) => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onShowToast: (msg: string) => void;
}

export const AuditoriasScreen: React.FC<AuditoriasScreenProps> = ({
  onNavigate,
  onSelectServiceForQuote,
  onShowToast,
}) => {
  // Jurisdictions toggle state
  const [activeNorms, setActiveNorms] = useState<Record<string, boolean>>({
    cofepris: true,
    fda: true,
    pics: true,
    iso: true,
  });

  const toggleNorm = (normKey: string) => {
    setActiveNorms((prev) => ({
      ...prev,
      [normKey]: !prev[normKey],
    }));
  };

  // Readiness Factors state
  const [factors, setFactors] = useState<AuditFactor[]>(INITIAL_AUDIT_FACTORS);

  const toggleFactor = (id: number) => {
    setFactors((prev) =>
      prev.map((f) => (f.id === id ? { ...f, compliant: !f.compliant } : f))
    );
  };

  const compliesCount = factors.filter((f) => f.compliant).length;
  const score = Math.round((compliesCount / factors.length) * 100);

  const handleRequestAudit = () => {
    onSelectServiceForQuote('Auditoría Mock Preventiva y Calificación');
    onShowToast('Módulo de auditoría mock seleccionado');
    onNavigate('contacto');
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Section 1: Hero & Strategic Introduction */}
      <section className="px-5 pt-4 pb-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 self-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#86f2e4]/30 text-[#006a61] font-mono text-[10.5px] tracking-wider uppercase font-semibold border border-[#86f2e4]/50">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            Blindaje Regulatorio &amp; Inspecciones
          </span>
        </div>

        <h1 className="font-display text-[28px] sm:text-[32px] leading-[34px] sm:leading-[38px] text-[#0b1c30] font-bold tracking-tight">
          Auditorías Mock &amp; Calificación de Conformidad
        </h1>

        <p className="font-body text-[14px] leading-[22px] text-[#44474d]">
          Evaluamos metodologías críticas, detectamos no conformidades mayores y preparamos sus instalaciones biofarmacéuticas para certificaciones sanitarias ante COFEPRIS, FDA y agencias de alta vigilancia en LATAM.
        </p>

        {/* Lab Hero Visual */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md mt-1 border border-[#c5c6cd]/40">
          <img
            src={IMAGES.auditoriasHero}
            alt="Auditor regulatorio en sala limpia inspeccionando biorreactor de acero inoxidable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/85 via-transparent to-transparent flex items-end p-3">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-[#89f5e7] text-[18px]">biotech</span>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-white">
                Protocolo Estándar PIC/S &amp; NOM-059
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Framework Badges Selector */}
      <section className="px-5 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#44474d] uppercase tracking-wider font-semibold">
            Jurisdicciones y Marcos Activos
          </span>
          <span className="font-mono text-[11px] text-[#006a61] font-bold">
            {Object.values(activeNorms).filter(Boolean).length} Protocolos
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-0.5">
          <button
            onClick={() => toggleNorm('cofepris')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[10.5px] uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeNorms.cofepris
                ? 'bg-[#000000] text-white'
                : 'bg-[#eff4ff] text-[#44474d] border border-[#c5c6cd]/40'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {activeNorms.cofepris ? 'check_circle' : 'radio_button_unchecked'}
            </span>
            COFEPRIS (NOM-059-SSA1-2015)
          </button>

          <button
            onClick={() => toggleNorm('fda')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[10.5px] uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeNorms.fda
                ? 'bg-[#000000] text-white'
                : 'bg-[#eff4ff] text-[#44474d] border border-[#c5c6cd]/40'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {activeNorms.fda ? 'check_circle' : 'radio_button_unchecked'}
            </span>
            FDA 21 CFR Part 211 &amp; Part 11
          </button>

          <button
            onClick={() => toggleNorm('pics')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[10.5px] uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeNorms.pics
                ? 'bg-[#000000] text-white'
                : 'bg-[#eff4ff] text-[#44474d] border border-[#c5c6cd]/40'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {activeNorms.pics ? 'check_circle' : 'radio_button_unchecked'}
            </span>
            PIC/S PE 009-16 (GMP)
          </button>

          <button
            onClick={() => toggleNorm('iso')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[10.5px] uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeNorms.iso
                ? 'bg-[#000000] text-white'
                : 'bg-[#eff4ff] text-[#44474d] border border-[#c5c6cd]/40'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {activeNorms.iso ? 'check_circle' : 'radio_button_unchecked'}
            </span>
            ISO 14644 (Salas Limpias)
          </button>
        </div>
      </section>

      {/* Section 3: Interactive Audit Simulator & Readiness Score */}
      <section className="px-5 py-4">
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 flex flex-col gap-4 border border-[#c5c6cd]/40">
          {/* Simulator Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-mono text-[10.5px] text-[#006a61] uppercase tracking-wider font-semibold">
                Simulador de Diagnóstico
              </span>
              <h2 className="font-headline text-[18px] text-[#0b1c30] font-bold tracking-tight">
                Readiness Score Estimado
              </h2>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#0b1c30]">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
          </div>

          {/* Readiness Meter Gauge Area */}
          <div className="bg-[#eff4ff] rounded-xl p-3.5 flex flex-col gap-2.5 border border-[#c5c6cd]/30">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[32px] text-[#0b1c30] font-bold leading-none">
                  {score}%
                </span>
                <span className={`font-mono text-[11px] font-bold uppercase ${score >= 75 ? 'text-[#006a61]' : 'text-[#ba1a1a]'}`}>
                  {score >= 75 ? 'PREPARADO' : 'EN RIESGO'}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#44474d]">
                {compliesCount} de {factors.length} factores validados
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-[#d3e4fe] rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#006a61] h-full rounded-full transition-all duration-300"
                style={{ width: `${score}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[#44474d] font-mono text-[10px] pt-0.5">
              <span>0% NO APTO</span>
              <span>70% UMBRAL AUDITABLE</span>
              <span>100% CONFORME</span>
            </div>
          </div>

          {/* Interactive Assessment Criteria */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[10.5px] text-[#44474d] uppercase tracking-wider font-semibold">
              Factores Críticos de Inspección (Toque para alternar):
            </span>

            {factors.map((factor) => (
              <div
                key={factor.id}
                onClick={() => toggleFactor(factor.id)}
                className="p-3 bg-[#eff4ff] hover:bg-[#e5eeff] rounded-xl cursor-pointer transition-all flex items-center justify-between gap-2.5 border border-[#c5c6cd]/30 active:scale-[0.99]"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <span
                    className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${
                      factor.compliant ? 'text-[#006a61]' : 'text-[#75777e]'
                    }`}
                  >
                    {factor.compliant ? 'check_box' : 'hourglass_top'}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline text-[13.5px] text-[#0b1c30] font-semibold leading-snug">
                      {factor.title}
                    </span>
                    <span className="font-mono text-[10.5px] text-[#44474d] leading-snug">
                      {factor.subtitle}
                    </span>
                  </div>
                </div>

                <span
                  className={`font-mono text-[10.5px] px-2 py-0.5 rounded tracking-wider uppercase font-semibold shrink-0 ${
                    factor.compliant
                      ? 'bg-[#86f2e4] text-[#006f66]'
                      : 'bg-[#d3e4fe] text-[#44474d]'
                  }`}
                >
                  {factor.compliant ? 'CUMPLE' : 'EN REVISIÓN'}
                </span>
              </div>
            ))}
          </div>

          {/* Simulation Summary Note */}
          <div className="p-3 rounded-xl bg-[#86f2e4]/20 border border-[#86f2e4]/50 flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#006a61] text-[20px] shrink-0 mt-0.5">
              task_alt
            </span>
            <div className="flex flex-col">
              <span className="font-headline text-[13px] text-[#0b1c30] font-semibold">
                Riesgo Crítico Mitigado
              </span>
              <span className="font-mono text-[11px] text-[#44474d] leading-snug">
                0 hallazgos mayores potenciales identificados en simulación previa. Su instalación se encuentra en el rango superior del 15% regional.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Specialized Audit Services Portfolio */}
      <section className="px-5 py-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-[10.5px] text-[#006a61] uppercase tracking-widest font-semibold">
            Servicios de Calificación
          </span>
          <h2 className="font-display text-[22px] text-[#0b1c30] font-bold tracking-tight">
            Programas de Auditoría Especializada
          </h2>
        </div>

        {/* Service Cards */}
        {AUDIT_PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#c5c6cd]/40 flex flex-col gap-2.5"
          >
            {prog.imageUrl && (
              <div className="relative w-full h-36 rounded-lg overflow-hidden mb-1">
                <img
                  src={prog.imageUrl}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                />
                {prog.badge && (
                  <div className="absolute top-2 right-2 bg-[#000000] text-white font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                    {prog.badge}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[10.5px] text-[#006a61] uppercase tracking-wider font-semibold">
                  {prog.number}
                </span>
                <h3 className="font-headline text-[16px] text-[#0b1c30] font-bold">
                  {prog.title}
                </h3>
              </div>
              {!prog.imageUrl && (
                <div className="w-8 h-8 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">{prog.icon}</span>
                </div>
              )}
            </div>

            <p className="font-body text-[13px] text-[#44474d] leading-relaxed">
              {prog.description}
            </p>

            {prog.metadata?.duration && prog.metadata?.deliverable && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-[#eff4ff] p-2 rounded-lg flex flex-col border border-[#c5c6cd]/30">
                  <span className="font-mono text-[10px] text-[#44474d] uppercase">Tiempo Estimado</span>
                  <span className="font-headline text-[12.5px] text-[#0b1c30] font-semibold">
                    {prog.metadata.duration}
                  </span>
                </div>
                <div className="bg-[#eff4ff] p-2 rounded-lg flex flex-col border border-[#c5c6cd]/30">
                  <span className="font-mono text-[10px] text-[#44474d] uppercase">Entregable Clave</span>
                  <span className="font-headline text-[12.5px] text-[#0b1c30] font-semibold">
                    {prog.metadata.deliverable}
                  </span>
                </div>
              </div>
            )}

            {prog.metadata?.alignedStandards && (
              <div className="flex items-center gap-2 text-[#44474d] font-mono text-[11px] bg-[#eff4ff] p-2 rounded-lg border border-[#c5c6cd]/30">
                <span className="material-symbols-outlined text-[#006a61] text-[16px]">
                  {prog.icon === 'school' ? 'group' : 'description'}
                </span>
                <span>{prog.metadata.alignedStandards}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Section 5: Trust Metric & Footprint */}
      <section className="px-5 py-3">
        <div className="bg-[#000000] text-white rounded-2xl p-5 shadow-lg flex flex-col gap-3 relative overflow-hidden border border-white/10">
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-[#006a61] opacity-25 blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#89f5e7] text-[24px]">workspace_premium</span>
            <span className="font-mono text-[11px] tracking-wider text-[#89f5e7] uppercase font-semibold">
              Historial de Aprobaciones
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-display text-[32px] font-bold tracking-tight text-white leading-tight">
              100% Aprobación
            </span>
            <p className="font-body text-[13.5px] text-[#dce9ff] leading-relaxed">
              En auditorías de clientes atendidos en México, Colombia y Brasil. Cero observaciones críticas no subsanables registradas ante la autoridad sanitaria.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-1 text-[#d3e4fe] font-mono text-[11px] border-t border-white/10">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#89f5e7]">flag</span>
              <span>CDMX / GDL</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#89f5e7]">flag</span>
              <span>BOGOTÁ</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#89f5e7]">flag</span>
              <span>SÃO PAULO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Primary Conversion CTA */}
      <section className="px-5 pt-4 flex flex-col gap-3">
        <button
          onClick={handleRequestAudit}
          className="w-full h-12 bg-[#000000] text-white hover:bg-[#213145] rounded-xl flex items-center justify-center gap-2 font-headline font-semibold text-[15px] tracking-wide shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
          <span>Solicitar Auditoría Mock Preventiva</span>
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[#44474d] font-mono text-[10.5px] text-center">
          <span className="material-symbols-outlined text-[#006a61] text-[15px]">lock</span>
          <span>Garantía de Confidencialidad Estricta con NDA Mutuo Inmediato</span>
        </div>

        {/* Quick Help Drawer / Micro Pill */}
        <div className="bg-[#eff4ff] rounded-xl p-3 flex items-center justify-between shadow-sm mt-2 border border-[#c5c6cd]/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#86f2e4] text-[#006f66] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-[13px] text-[#0b1c30] font-semibold leading-tight">
                ¿Inspección programada próxima?
              </span>
              <span className="font-mono text-[10.5px] text-[#44474d]">
                Atención prioritaria en menos de 4 horas
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contacto')}
            className="px-3 py-1.5 rounded-lg bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-mono text-[10.5px] uppercase tracking-wider font-semibold border border-[#c5c6cd]/30 cursor-pointer"
          >
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
};
