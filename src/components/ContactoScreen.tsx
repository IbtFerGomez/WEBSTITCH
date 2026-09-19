import React, { useState, useEffect } from 'react';
import { PARTNERS } from '../data/consultingData';

interface ContactoScreenProps {
  initialServiceScope?: string;
  onShowToast: (msg: string) => void;
}

export const ContactoScreen: React.FC<ContactoScreenProps> = ({
  initialServiceScope,
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    orgType: 'Industria Farmacéutica',
    contactPerson: '',
    corporateEmail: '',
    phone: '',
    focusArea: 'Diagnóstico General Integral',
    details: '',
    ndaRequested: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialServiceScope) {
      setFormData((prev) => ({
        ...prev,
        focusArea: initialServiceScope,
        details: `Interés en: ${initialServiceScope}. Deseamos agendar sesión diagnóstica.`,
      }));
    }
  }, [initialServiceScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(`Solicitud recibida para ${formData.companyName || 'su empresa'}. Los socios revisarán su caso bajo NDA.`);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText('contacto@biocellconsultores.com');
    setCopiedEmail(true);
    onShowToast('Correo copiado al portapapeles: contacto@biocellconsultores.com');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Strategic Header */}
      <section className="px-5 pt-4 pb-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 self-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#006a61]/10 text-[#006a61] font-mono text-[10.5px] tracking-wider uppercase font-semibold border border-[#006a61]/20">
            <span className="material-symbols-outlined text-[14px]">handshake</span>
            Alianza Científica &amp; Confidencialidad
          </span>
        </div>

        <h1 className="font-display text-[28px] sm:text-[32px] leading-[34px] sm:leading-[38px] text-[#0b1c30] font-bold tracking-tight">
          Agendar Sesión de Diagnóstico Técnico B2B
        </h1>

        <p className="font-body text-[14px] leading-[22px] text-[#44474d]">
          Consulte directamente con nuestros tres socios directores. Sin ejecutivos comerciales ni intermediarios: atención experta in situ y remota para México y LATAM.
        </p>

        {/* Meeting Specs Card */}
        <div className="p-4 bg-[#0d1c32] text-white rounded-xl shadow-md flex flex-col gap-2 border border-white/10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#89f5e7] uppercase tracking-wider font-semibold">
              Sesión Estratégica con Maestros en Ciencias
            </span>
            <span className="px-2 py-0.5 bg-[#006a61] text-white rounded font-mono text-[10px] uppercase font-bold">
              30 Minutos
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-white/90">
              <span className="material-symbols-outlined text-[#89f5e7] text-[16px]">videocam</span>
              <span>Google Meet / In Situ</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90">
              <span className="material-symbols-outlined text-[#89f5e7] text-[16px]">lock</span>
              <span>Acuerdo NDA Previo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Council Dossier: The 3 Founders from Image 9 */}
      <section className="px-5 py-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006a61] text-[20px]">group</span>
            <span className="font-mono text-[11px] text-[#006a61] uppercase tracking-wider font-semibold">
              Consejo Científico Titular
            </span>
          </div>
          <span className="font-mono text-[10.5px] text-[#44474d]">3 Socios Directores</span>
        </div>

        <div className="flex flex-col gap-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="p-4 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/40 flex flex-col gap-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0d1c32] text-[#89f5e7] font-headline font-bold text-[14px] flex items-center justify-center shrink-0 border border-[#89f5e7]/30 shadow-sm">
                    {partner.initials}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline text-[15px] sm:text-[16px] text-[#0b1c30] font-bold leading-snug">
                      {partner.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#006a61] font-semibold">
                      {partner.credentials}
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-[#eff4ff] text-[#0b1c30] font-mono text-[10px] font-semibold uppercase rounded border border-[#c5c6cd]/30 shrink-0">
                  {partner.tag}
                </span>
              </div>

              <div className="pt-0.5">
                <p className="font-headline text-[13px] text-[#0b1c30] font-semibold leading-snug">
                  {partner.specialty}
                </p>
                <p className="font-body text-[12.5px] text-[#44474d] leading-relaxed mt-1">
                  {partner.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 p-2.5 bg-[#e5eeff] rounded-lg border border-[#c5c6cd]/30">
          <span className="material-symbols-outlined text-[#006a61] text-[18px] shrink-0">verified</span>
          <span className="font-mono text-[11px] text-[#0b1c30] font-semibold leading-tight">
            Los tres socios directores participan activamente en cada proyecto asignado.
          </span>
        </div>
      </section>

      {/* Primary Project Qualification Form */}
      <section className="px-5 py-4">
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 border border-[#c5c6cd]/40 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-mono text-[10.5px] text-[#006a61] uppercase tracking-wider font-semibold">
              Formulario de Solicitud
            </span>
            <h2 className="font-headline text-[19px] text-[#0b1c30] font-bold">
              Calificación de Proyecto B2B
            </h2>
          </div>

          {submitted ? (
            <div className="p-5 rounded-xl bg-[#eff4ff] border border-[#006a61]/30 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#86f2e4] text-[#006f66] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">check_circle</span>
              </div>
              <h3 className="font-headline text-[18px] font-bold text-[#0b1c30]">
                ¡Solicitud Registrada con Éxito!
              </h3>
              <p className="font-body text-[13.5px] text-[#44474d] leading-relaxed">
                Hemos asignado su expediente al Consejo Técnico. Uno de nuestros Maestros en Ciencias responderá a <strong className="text-[#0b1c30]">{formData.corporateEmail || 'su correo'}</strong> con la confirmación de agenda y el Acuerdo de Confidencialidad (NDA).
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-[#000000] text-white rounded-lg font-mono text-[11px] uppercase tracking-wider cursor-pointer"
              >
                Enviar Otra Solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Institution / Company */}
              <div className="flex flex-col gap-1">
                <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-company">
                  Institución o Empresa <span className="font-mono text-[11px] text-[#44474d]">[Razón Social]</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  required
                  placeholder="Ej. Laboratorios BioSistemas S.A. de C.V."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                />
              </div>

              {/* Organization Type */}
              <div className="flex flex-col gap-1">
                <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-orgtype">
                  Tipo de Organización <span className="font-mono text-[11px] text-[#44474d]">[Giro Técnico]</span>
                </label>
                <div className="relative">
                  <select
                    id="contact-orgtype"
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                    className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-lg font-body text-[14px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                  >
                    <option value="Industria Farmacéutica">Industria Farmacéutica</option>
                    <option value="Biotecnología / Start-up">Biotecnología / Start-up</option>
                    <option value="Hospital / Centro de Terapia Avanzada">Hospital / Centro de Terapia Celular</option>
                    <option value="Universidad / Centro de Investigación">Universidad / Centro de Investigación</option>
                    <option value="Laboratorio Analítico / Tercero Autorizado">Laboratorio Analítico / Tercero Autorizado</option>
                  </select>
                  <span className="material-symbols-outlined text-[20px] text-[#44474d] absolute right-3 top-3 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Contact Person */}
              <div className="flex flex-col gap-1">
                <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-person">
                  Nombre y Cargo <span className="font-mono text-[11px] text-[#44474d]">[Responsable de Proyecto]</span>
                </label>
                <input
                  id="contact-person"
                  type="text"
                  required
                  placeholder="Ej. Dr. Carlos Medina - Gerente de Calidad"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                />
              </div>

              {/* Corporate Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-email">
                    Correo Corporativo <span className="font-mono text-[11px] text-[#44474d]">[Dominio Oficial]</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="carlos.medina@biosistemas.com"
                    value={formData.corporateEmail}
                    onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                    className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-phone">
                    Teléfono / WhatsApp <span className="font-mono text-[11px] text-[#44474d]">[Línea Directa]</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+52 55 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                  />
                </div>
              </div>

              {/* Area of Focus Radios */}
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-body text-[13px] font-medium text-[#0b1c30]">
                  Área de Enfoque o Reto Principal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Puesta en Marcha / Sala Limpia',
                    'Sistemas de Calidad & POEs',
                    'Optimización de Cultivo Celular',
                    'Auditoría Mock Preventiva',
                    'Diagnóstico General Integral',
                  ].map((area) => (
                    <label
                      key={area}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        formData.focusArea === area
                          ? 'bg-[#e5eeff] border-[#006a61] text-[#0b1c30] font-medium'
                          : 'bg-[#eff4ff] border-[#c5c6cd]/40 text-[#44474d]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="focusArea"
                        value={area}
                        checked={formData.focusArea === area}
                        onChange={() => setFormData({ ...formData, focusArea: area })}
                        className="accent-[#006a61]"
                      />
                      <span className="font-body text-[12.5px] leading-tight">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Details Textarea */}
              <div className="flex flex-col gap-1">
                <label className="font-body text-[13px] font-medium text-[#0b1c30]" htmlFor="contact-details">
                  Detalles Específicos o Requerimientos <span className="font-mono text-[11px] text-[#44474d]">[Opcional]</span>
                </label>
                <textarea
                  id="contact-details"
                  rows={3}
                  placeholder="Describa brevemente el tipo de célula (ej. CHO, MSC, células madre), tipo de instalación o fecha prevista para auditoría..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full p-3 bg-[#eff4ff] text-[#0b1c30] placeholder:text-[#75777e] rounded-lg font-body text-[13px] focus:outline-none focus:ring-2 focus:ring-[#006a61] border border-[#c5c6cd]/40"
                />
              </div>

              {/* NDA Checkbox */}
              <label className="flex items-start gap-2.5 p-3 bg-[#eff4ff] rounded-lg border border-[#c5c6cd]/40 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.ndaRequested}
                  onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                  className="w-4 h-4 mt-0.5 accent-[#006a61] rounded"
                />
                <div className="flex flex-col">
                  <span className="font-headline text-[13px] font-semibold text-[#0b1c30]">
                    Solicito envío previo de Acuerdo de Confidencialidad (NDA mutuo)
                  </span>
                  <span className="font-body text-[11.5px] text-[#44474d]">
                    Protección estricta de propiedad intelectual, líneas celulares y secretos comerciales.
                  </span>
                </div>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="h-12 w-full bg-[#000000] text-white hover:bg-[#213145] rounded-xl flex items-center justify-center gap-2 font-headline font-semibold text-[15px] shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Confirmar Solicitud de Diagnóstico</span>
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Direct Communication Channels */}
      <section className="px-5 py-3 flex flex-col gap-3">
        <span className="font-mono text-[11px] text-[#44474d] uppercase tracking-wider font-semibold">
          Canales de Atención Directa
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Email button with copy */}
          <button
            onClick={copyEmail}
            className="p-3 bg-white rounded-xl border border-[#c5c6cd]/40 flex items-center justify-between text-left hover:bg-[#eff4ff] transition-all cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#e5eeff] text-[#006a61] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">email</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#44474d] uppercase">Correo Oficial</span>
                <span className="font-headline text-[12.5px] text-[#0b1c30] font-semibold">
                  contacto@biocellconsultores.com
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#75777e] text-[18px]">
              {copiedEmail ? 'done' : 'content_copy'}
            </span>
          </button>

          {/* WhatsApp direct */}
          <a
            href="https://wa.me/525584219000?text=Hola%20BioCell%20Consultores,%20deseo%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20cultivo%20celular%20y%20validaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-xl border border-[#c5c6cd]/40 flex items-center justify-between text-left hover:bg-[#eff4ff] transition-all shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#44474d] uppercase">WhatsApp Ejecutivo</span>
                <span className="font-headline text-[12.5px] text-[#0b1c30] font-semibold">
                  +52 55 8421 9000
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#75777e] text-[18px]">open_in_new</span>
          </a>
        </div>

        {/* Corporate Address */}
        <div className="p-3 bg-[#eff4ff] rounded-xl border border-[#c5c6cd]/30 flex items-center gap-2.5 text-[#44474d]">
          <span className="material-symbols-outlined text-[#006a61] text-[18px] shrink-0">location_on</span>
          <span className="font-mono text-[11px] leading-snug">
            Sede Central: Av. Insurgentes Sur, Col. Del Valle, Ciudad de México, México.
          </span>
        </div>
      </section>
    </div>
  );
};
