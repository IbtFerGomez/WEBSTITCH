import React, { useState } from 'react';
import { TabType } from '../types';
import { IMAGES, SERVICES } from '../data/consultingData';

interface InicioScreenProps {
  onNavigate: (tab: TabType) => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onShowToast: (msg: string) => void;
}

export const InicioScreen: React.FC<InicioScreenProps> = ({
  onNavigate,
  onSelectServiceForQuote,
  onShowToast,
}) => {
  // Interactive audit matrix items state
  const [auditItems, setAuditItems] = useState([
    {
      id: 1,
      title: 'POEs de Esterilización y Mantenimiento de Gabinetes BSC',
      status: 'VALIDADO',
      loading: false,
    },
    {
      id: 2,
      title: 'Curva de Calificación Térmica y CO₂ en Incubadoras',
      status: 'VALIDADO',
      loading: false,
    },
    {
      id: 3,
      title: 'Trazabilidad de Bancos Celulares Maestros (MCB/WCB)',
      status: 'VALIDADO',
      loading: false,
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    institutionType: '',
    fullName: '',
    workEmail: '',
    projectScope: 'Implementación integral y Validación de Laboratorio',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleAuditItem = (id: number) => {
    setAuditItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.status === 'VALIDADO') {
            return { ...item, status: 'AUDITANDO...', loading: true };
          } else {
            return { ...item, status: 'VALIDADO', loading: false };
          }
        }
        return item;
      })
    );

    // Simulate audit verification completion after 900ms
    setTimeout(() => {
      setAuditItems((prev) =>
        prev.map((item) => {
          if (item.id === id && item.status === 'AUDITANDO...') {
            return { ...item, status: 'APROBADO 100%', loading: false };
          }
          return item;
        })
      );
    }, 900);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const firstName = formData.fullName.split(' ')[0] || 'Estimado colega';
    onShowToast(`¡Gracias, ${firstName}! Un socio director se comunicará en menos de 24h.`);
    setTimeout(() => {
      setFormData({
        institutionType: '',
        fullName: '',
        workEmail: '',
        projectScope: 'Implementación integral y Validación de Laboratorio',
      });
      setFormSubmitted(false);
    }, 4000);
  };

  const handleServiceClick = (serviceTitle: string) => {
    onSelectServiceForQuote(serviceTitle);
    setFormData((prev) => ({ ...prev, projectScope: serviceTitle }));
    const formEl = document.getElementById('inicio-formulario-inquiry');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section: Clinical Life Sciences Precision */}
      <section className="relative px-5 pt-4 pb-10 overflow-hidden">
        {/* Subtle grid pattern & glow */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#006a61_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#89f5e7]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative flex flex-col gap-4">
          {/* Clinical Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e5eeff] rounded-full w-max shadow-sm border border-[#c5c6cd]/40">
            <span className="w-2 h-2 rounded-full bg-[#006a61] animate-pulse" />
            <span className="font-mono text-[10.5px] text-[#006a61] font-semibold uppercase tracking-wider">
              Consultoría Especializada en Cultivo Celular y BPF | México y LATAM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-[32px] sm:text-[38px] leading-[40px] sm:leading-[46px] text-[#0b1c30] font-bold tracking-tight">
            De la Visión Científica a la Operación Certificada:{' '}
            <span className="text-[#006a61]">Instalamos y Optimizamos</span> su Laboratorio de Cultivo Celular
          </h1>

          {/* Executive Subtitle */}
          <p className="font-body text-[15px] leading-[24px] text-[#44474d]">
            Potenciamos a empresas farmacéuticas, biotecnológicas, hospitales y universidades para alcanzar estándares internacionales con rigor técnico, documentación regulatoria integral y ejecución llave en mano.
          </p>

          {/* Key Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={() => onNavigate('contacto')}
              id="hero-agendar-cta"
              className="h-12 w-full px-4 bg-[#000000] text-white rounded-lg flex items-center justify-center gap-2 font-headline font-semibold text-[15px] shadow-md hover:bg-[#213145] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Agendar Diagnóstico Técnico Gratuito</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate('servicios')}
              id="hero-servicios-cta"
              className="h-12 w-full px-4 bg-[#e5eeff] text-[#0b1c30] border border-[#c5c6cd]/40 rounded-lg flex items-center justify-center gap-2 font-headline font-semibold text-[15px] hover:bg-[#dce9ff] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Explorar Servicios Especializados</span>
              <span className="material-symbols-outlined text-[20px] text-[#006a61]">science</span>
            </button>
          </div>

          {/* Trust Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 pt-4">
            <div className="flex flex-col p-3 bg-white rounded-lg shadow-sm border border-[#c5c6cd]/30">
              <div className="flex items-center gap-1 text-[#006a61] mb-1">
                <span className="material-symbols-outlined text-[18px]">school</span>
              </div>
              <span className="font-headline text-[20px] font-bold text-[#0b1c30] leading-tight">3 Socios</span>
              <span className="font-mono text-[10px] text-[#44474d] uppercase mt-1 leading-snug">
                Con Maestría Científica
              </span>
            </div>

            <div className="flex flex-col p-3 bg-white rounded-lg shadow-sm border border-[#c5c6cd]/30">
              <div className="flex items-center gap-1 text-[#006a61] mb-1">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
              </div>
              <span className="font-headline text-[20px] font-bold text-[#0b1c30] leading-tight">100%</span>
              <span className="font-mono text-[10px] text-[#44474d] uppercase mt-1 leading-snug">
                COFEPRIS / FDA / BPF
              </span>
            </div>

            <div className="flex flex-col p-3 bg-white rounded-lg shadow-sm border border-[#c5c6cd]/30">
              <div className="flex items-center gap-1 text-[#006a61] mb-1">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </div>
              <span className="font-headline text-[20px] font-bold text-[#0b1c30] leading-tight">+40</span>
              <span className="font-mono text-[10px] text-[#44474d] uppercase mt-1 leading-snug">
                Protocolos Validados
              </span>
            </div>
          </div>

          {/* Live Laboratory Imagery Banner */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md mt-2 border border-[#c5c6cd]/40">
            <img
              src={IMAGES.heroCleanroom}
              alt="Área limpia de cultivo celular grado farmacéutico con flujo laminar y biorreactores de acero inoxidable"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-[#0d1c32]/90 backdrop-blur-md px-3 py-2 rounded-lg flex items-center justify-between text-white border border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#89f5e7] animate-ping" />
                <span className="font-mono text-[11px] text-white tracking-wide">
                  Área Limpia Clase ISO 7 | Protocolo Activo
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#89f5e7] font-semibold uppercase tracking-wider">
                Monitoreo 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros: Converging Disciplines */}
      <section className="px-5 py-8 bg-[#eff4ff] border-y border-[#c5c6cd]/30 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#006a61] text-[20px]">hub</span>
            <span className="font-mono text-[11px] text-[#006a61] uppercase font-semibold tracking-wider">
              Autoridad Técnica y Estratégica
            </span>
          </div>
          <h2 className="font-display text-[26px] sm:text-[30px] leading-[32px] sm:leading-[38px] text-[#0b1c30] font-semibold tracking-tight">
            Tres disciplinas convergentes. Una transición sin fisuras hacia la excelencia biotecnológica.
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#44474d] mt-1">
            Fundada por tres maestros en ciencias con amplia trayectoria en biofarma y academia, nuestra consultoría resuelve el mayor reto del sector en Latinoamérica: la desconexión entre la destreza biológica experimental y la rigurosidad regulatoria. Fusionamos alta pericia en bioprocesos de cultivo celular, maestría en documentación y sistemas de calidad (BPF/GMP), y experiencia comprobada en la ingeniería física y validación de laboratorios. No somos teóricos: diseñamos, montamos, capacitamos y llevamos sus instalaciones al nivel de certificación requerido para escalar con seguridad clínica e industrial.
          </p>
        </div>

        {/* 3 Pillar Interactive Bento Cards */}
        <div className="flex flex-col gap-3">
          {/* Pillar 1 */}
          <div className="p-4 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/30 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#006a61]">
              <span className="material-symbols-outlined text-[24px]">biotech</span>
            </div>
            <h3 className="font-headline text-[17px] text-[#0b1c30] font-semibold">
              1. Expertise Técnico de Élite
            </h3>
            <p className="font-body text-[13px] text-[#44474d] leading-relaxed">
              Dominio avanzado de líneas celulares primarias y continuas, operación y escalamiento en biorreactores, medios definidos y bioseguridad BSL-2/BSL-3.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                Biorreactores
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                BSL-2 / BSL-3
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                Cinética Celular
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-4 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/30 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#006a61]">
              <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
            </div>
            <h3 className="font-headline text-[17px] text-[#0b1c30] font-semibold">
              2. Blindaje Regulatorio Integral
            </h3>
            <p className="font-body text-[13px] text-[#44474d] leading-relaxed">
              Desarrollo riguroso de Procedimientos Operativos Estandarizados (POE), Calificación completa DQ, IQ, OQ y PQ, y alineación sin fisuras a NOM-059 y FDA 21 CFR.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                NOM-059-SSA1
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                DQ/IQ/OQ/PQ
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                Data Integrity
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-4 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/30 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#006a61]">
              <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
            </div>
            <h3 className="font-headline text-[17px] text-[#0b1c30] font-semibold">
              3. Puesta en Marcha Física y Civil
            </h3>
            <p className="font-body text-[13px] text-[#44474d] leading-relaxed">
              Ingeniería de detalle para instalaciones HVAC farmacéuticas, presiones diferenciales de aire, distribución unidireccional de personal/material y áreas limpias.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                HVAC Farmacéutico
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                Flujo Unidireccional
              </span>
              <span className="px-2 py-0.5 bg-[#eff4ff] font-mono text-[10px] text-[#0b1c30] rounded border border-[#c5c6cd]/30">
                Salas Limpias ISO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scientific Dossier Showcase */}
      <section className="px-5 py-8 flex flex-col gap-4">
        <div className="p-5 bg-[#0d1c32] text-white rounded-xl shadow-lg flex flex-col gap-3 border border-white/10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#89f5e7] uppercase tracking-wider">
              Protocolo Demo Interactivo
            </span>
            <span className="px-2 py-0.5 bg-[#006a61] text-white rounded font-mono text-[10px] uppercase font-semibold">
              Fase de Auditoría
            </span>
          </div>

          <h3 className="font-headline text-[20px] font-semibold text-white">
            Simulador de Calificación y Readiness COFEPRIS / FDA
          </h3>
          <p className="font-body text-[13px] text-[#76849f] leading-relaxed">
            Toque los componentes para comprobar los índices de trazabilidad requeridos en una inspección regulatoria de cultivo celular:
          </p>

          {/* Micro Interactive Check-Matrix */}
          <div className="flex flex-col gap-2 mt-1">
            {auditItems.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleAuditItem(item.id)}
                className="p-3 bg-white/10 hover:bg-white/15 rounded-lg flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all border border-white/5"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span
                    className={`material-symbols-outlined text-[#89f5e7] text-[20px] shrink-0 ${
                      item.loading ? 'animate-spin' : ''
                    }`}
                  >
                    {item.loading ? 'sync' : item.status.includes('APROBADO') ? 'verified' : 'check_circle'}
                  </span>
                  <span className="font-mono text-[11px] text-white/90 leading-tight">
                    {item.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-[#89f5e7] shrink-0 uppercase tracking-wider">
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] text-[#76849f] text-center pt-1 border-t border-white/10">
            * Estructuración conforme a NOM-059-SSA1-2015 &amp; PIC/S PE 009-16
          </p>
        </div>
      </section>

      {/* Servicios Principales Section */}
      <section className="px-5 py-8 flex flex-col gap-6 bg-[#f8f9ff]">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006a61] text-[20px]">inventory</span>
            <span className="font-mono text-[11px] text-[#006a61] uppercase font-semibold tracking-wider">
              Portafolio Especializado B2B
            </span>
          </div>
          <h2 className="font-display text-[26px] sm:text-[30px] leading-[32px] sm:leading-[38px] text-[#0b1c30] font-semibold tracking-tight">
            Servicios Principales: Rigor Científico y Solución Llave en Mano
          </h2>
          <p className="font-body text-[14px] text-[#44474d]">
            Aceleramos el tránsito de su pipeline experimental a la manufactura con cumplimiento normativo integral en consultoría en cultivo celular e implementación de laboratorios.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-4 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/30 flex flex-col gap-3"
            >
              <div className="w-full h-40 rounded-lg overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#006a61] font-mono text-[10px] uppercase font-semibold">
                    <span className="material-symbols-outlined text-[13px]">{service.badge.icon}</span>
                    {service.badge.label}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white font-mono text-[10.5px]">
                  <span className="bg-[#0d1c32]/80 px-2 py-0.5 rounded">{service.standards.left}</span>
                  <span className="text-[#89f5e7] font-semibold">{service.standards.right}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-headline text-[18px] text-[#0b1c30] font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-[13px] text-[#44474d] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {service.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#eff4ff] font-mono text-[10.5px] text-[#0b1c30] rounded border border-[#c5c6cd]/30"
                  >
                    {deliv}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleServiceClick(service.title)}
                className="mt-1 h-11 w-full bg-[#eff4ff] text-[#0b1c30] hover:bg-[#006a61] hover:text-white rounded-lg font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#c5c6cd]/40 active:scale-95 cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Metodología de Trabajo: 4 Pasos Claros */}
      <section className="px-5 py-8 bg-[#eff4ff] border-y border-[#c5c6cd]/30 flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006a61] text-[20px]">timeline</span>
            <span className="font-mono text-[11px] text-[#006a61] uppercase font-semibold tracking-wider">
              Workflow Comprobado
            </span>
          </div>
          <h2 className="font-display text-[26px] sm:text-[30px] leading-[32px] sm:leading-[38px] text-[#0b1c30] font-semibold tracking-tight">
            Metodología de Trabajo: Del Concepto al Sellado de Cumplimiento
          </h2>
          <p className="font-body text-[14px] text-[#44474d]">
            Cuatro etapas lineales estructuradas para eliminar reprocesos, contingencias y costos imprevistos en la validación de laboratorios.
          </p>
        </div>

        {/* Stepper Container */}
        <div className="flex flex-col gap-4 relative">
          {/* Step 1 */}
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#000000] text-white font-mono text-[12px] font-bold flex items-center justify-center shadow-sm shrink-0">
                01
              </div>
              <div className="w-0.5 h-16 bg-[#c5c6cd] mt-1" />
            </div>
            <div className="flex flex-col bg-white p-3.5 rounded-xl shadow-sm border border-[#c5c6cd]/30 flex-1">
              <span className="font-mono text-[10.5px] text-[#006a61] uppercase font-bold">
                Fase 1: Diagnóstico
              </span>
              <h4 className="font-headline text-[15px] text-[#0b1c30] font-semibold mt-0.5">
                Diagnóstico Inicial y Mapeo de Requerimientos
              </h4>
              <p className="font-body text-[13px] text-[#44474d] mt-1 leading-relaxed">
                Sesión técnica de descubrimiento para auditar infraestructura actual, alcance del bioproceso y metas regulatorias.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#000000] text-white font-mono text-[12px] font-bold flex items-center justify-center shadow-sm shrink-0">
                02
              </div>
              <div className="w-0.5 h-16 bg-[#c5c6cd] mt-1" />
            </div>
            <div className="flex flex-col bg-white p-3.5 rounded-xl shadow-sm border border-[#c5c6cd]/30 flex-1">
              <span className="font-mono text-[10.5px] text-[#006a61] uppercase font-bold">
                Fase 2: Arquitectura
              </span>
              <h4 className="font-headline text-[15px] text-[#0b1c30] font-semibold mt-0.5">
                Arquitectura de Proyecto y Plan Maestro de Validación
              </h4>
              <p className="font-body text-[13px] text-[#44474d] mt-1 leading-relaxed">
                Diseño del layout, especificaciones de equipo y matriz de riesgos e hitos documentales (VMP).
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#000000] text-white font-mono text-[12px] font-bold flex items-center justify-center shadow-sm shrink-0">
                03
              </div>
              <div className="w-0.5 h-16 bg-[#c5c6cd] mt-1" />
            </div>
            <div className="flex flex-col bg-white p-3.5 rounded-xl shadow-sm border border-[#c5c6cd]/30 flex-1">
              <span className="font-mono text-[10.5px] text-[#006a61] uppercase font-bold">
                Fase 3: Estandarización
              </span>
              <h4 className="font-headline text-[15px] text-[#0b1c30] font-semibold mt-0.5">
                Ejecución Física, Estandarización y Capacitación
              </h4>
              <p className="font-body text-[13px] text-[#44474d] mt-1 leading-relaxed">
                Montaje asistido, formulación de POEs y entrenamiento in situ del personal técnico y operativo.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-3 items-start">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#006a61] text-white font-mono text-[12px] font-bold flex items-center justify-center shadow-sm shrink-0">
                04
              </div>
            </div>
            <div className="flex flex-col bg-white p-3.5 rounded-xl shadow-sm border border-[#c5c6cd]/30 flex-1">
              <span className="font-mono text-[10.5px] text-[#006a61] uppercase font-bold">
                Fase 4: Certificación
              </span>
              <h4 className="font-headline text-[15px] text-[#0b1c30] font-semibold mt-0.5">
                Calificación, Auditoría Mock y Puesta en Operación
              </h4>
              <p className="font-body text-[13px] text-[#44474d] mt-1 leading-relaxed">
                Simulacro estricto de auditoría regulatoria, cierre de hallazgos y entrega de laboratorio operativo al 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry / Contact Anchor Section */}
      <section className="px-5 py-8 bg-[#f8f9ff] flex flex-col gap-5" id="inicio-formulario-inquiry">
        <div className="flex flex-col gap-2 text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#e5eeff] rounded-full w-max border border-[#c5c6cd]/40">
            <span className="material-symbols-outlined text-[#006a61] text-[16px]">lock</span>
            <span className="font-mono text-[10.5px] text-[#0b1c30] font-semibold uppercase tracking-wider">
              Confidencialidad Garantizada bajo NDA
            </span>
          </div>
          <h2 className="font-display text-[26px] sm:text-[30px] leading-[32px] sm:leading-[38px] text-[#0b1c30] font-bold tracking-tight">
            ¿Listo para elevar sus capacidades de cultivo celular al estándar internacional?
          </h2>
          <p className="font-body text-[14px] text-[#44474d] leading-relaxed">
            Agende una llamada de descubrimiento de 30 minutos sin costo con nuestros tres socios directores. Analizaremos la viabilidad técnica y regulatoria de su proyecto en México o Latinoamérica.
          </p>
        </div>

        {/* Quick Inquiry Form Card */}
        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-lg border border-[#c5c6cd]/40 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-1 border-b border-[#c5c6cd]/20">
            <span className="font-headline text-[16px] text-[#0b1c30] font-bold">
              Diagnóstico Técnico Inicial
            </span>
            <span className="font-mono text-[10.5px] text-[#006a61] font-semibold uppercase bg-[#86f2e4]/30 px-2 py-0.5 rounded">
              Sin Costo
            </span>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
            {/* Institution Selector */}
            <div className="flex flex-col gap-1">
              <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="institutionType">
                Tipo de Institución <span className="font-mono text-[11px] text-[#44474d]">[Segmento]</span>
              </label>
              <div className="relative">
                <select
                  id="institutionType"
                  required
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-lg font-body text-[14px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                >
                  <option value="" disabled>Seleccione el perfil de su entidad</option>
                  <option value="Farmacéutica">Industria Farmacéutica</option>
                  <option value="Biotecnología">Empresa Biotecnológica / Start-up</option>
                  <option value="Hospital">Hospital / Centro de Terapia Avanzada</option>
                  <option value="Universidad">Universidad / Centro de Investigación</option>
                </select>
                <span className="material-symbols-outlined text-[20px] text-[#44474d] absolute right-3 top-3 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="flex flex-col gap-1">
              <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="fullName">
                Nombre y Cargo / Empresa <span className="font-mono text-[11px] text-[#44474d]">[Identidad]</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="Ej. Dra. Mariana Silva - Dir. de Operaciones"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
              />
            </div>

            {/* Corporate Email */}
            <div className="flex flex-col gap-1">
              <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="workEmail">
                Correo Corporativo <span className="font-mono text-[11px] text-[#44474d]">[Canal Directo]</span>
              </label>
              <input
                id="workEmail"
                type="email"
                required
                placeholder="marianasilva@laboratorio.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
              />
            </div>

            {/* Project Scope */}
            <div className="flex flex-col gap-1">
              <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="projectScope">
                Área de Enfoque Prioritaria
              </label>
              <input
                id="projectScope"
                type="text"
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formSubmitted}
              className="mt-1 h-12 w-full bg-[#000000] text-white hover:bg-[#213145] rounded-lg font-headline font-semibold text-[15px] flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>{formSubmitted ? 'Enviando Solicitud...' : 'Solicitar Diagnóstico Técnico'}</span>
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>

          {/* Reassurance Banner */}
          <div className="flex items-center gap-2 p-2.5 bg-[#e5eeff] rounded-lg border border-[#c5c6cd]/30 mt-1">
            <span className="material-symbols-outlined text-[#006a61] text-[18px] shrink-0">verified</span>
            <span className="font-mono text-[10.5px] text-[#0b1c30] font-semibold leading-tight">
              Atención directa de Maestros en Ciencias | Confidencialidad bajo NDA garantizada
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
