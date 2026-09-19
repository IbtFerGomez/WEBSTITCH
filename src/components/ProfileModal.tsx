import React from 'react';
import { PARTNERS } from '../data/consultingData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleDirect: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onScheduleDirect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/70 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#c5c6cd]/50 flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#0d1c32] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#006a61] flex items-center justify-center text-[#89f5e7]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline text-[16px] font-bold text-white">
                Consejo Científico &amp; Socios Fundadores
              </h3>
              <span className="font-mono text-[10.5px] text-[#89f5e7] uppercase tracking-wider">
                BioCell Consultores · LATAM
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex flex-col gap-4">
          <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#c5c6cd]/30 flex items-start gap-2.5 text-[#0b1c30]">
            <span className="material-symbols-outlined text-[#006a61] text-[20px] shrink-0 mt-0.5">
              school
            </span>
            <div className="flex flex-col">
              <span className="font-headline text-[13px] font-bold">
                100% de Proyectos Dirigidos por Maestros en Ciencias
              </span>
              <span className="font-body text-[12px] text-[#44474d] leading-snug">
                Nuestra política de calidad garantiza que ningún proyecto sea delegado a perfiles junior o pasantes. Recibirá consultoría científica directa de principio a fin.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-3.5 rounded-xl border border-[#c5c6cd]/40 bg-[#f8f9ff] flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline text-[14.5px] font-bold text-[#0b1c30]">
                    {partner.name}
                  </span>
                  <span className="font-mono text-[9.5px] font-semibold uppercase px-2 py-0.5 rounded bg-[#e5eeff] text-[#006a61]">
                    {partner.tag}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#006a61] font-semibold">
                  {partner.credentials}
                </span>
                <p className="font-headline text-[12px] font-semibold text-[#0b1c30]">
                  {partner.specialty}
                </p>
                <p className="font-body text-[12px] text-[#44474d] leading-relaxed">
                  {partner.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Mastered Jurisdictions */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10.5px] uppercase text-[#44474d] font-semibold">
              Marcos y Estándares de Especialidad
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'COFEPRIS NOM-059-SSA1-2015',
                'FDA 21 CFR Part 211 & Part 11',
                'Guías PIC/S PE 009-16',
                'ISO 14644-1 Salas Limpias',
                'ISPE Baseline Guides',
                'Bioseguridad BSL-2 / BSL-3',
              ].map((norm, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#eff4ff] text-[#0b1c30] rounded font-mono text-[10.5px] border border-[#c5c6cd]/30"
                >
                  {norm}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#eff4ff] border-t border-[#c5c6cd]/30 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#44474d] hover:text-[#0b1c30] font-mono text-[11px] uppercase tracking-wider cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onScheduleDirect();
            }}
            className="px-4 py-2.5 bg-[#000000] hover:bg-[#213145] text-white rounded-xl font-headline font-semibold text-[13px] flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>Agendar con los Socios</span>
          </button>
        </div>
      </div>
    </div>
  );
};
