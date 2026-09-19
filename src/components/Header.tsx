import React from 'react';
import { TabType } from '../types';
import { LOGO_URL } from '../data/consultingData';

interface HeaderProps {
  activeTab: TabType;
  onNavigate: (tab: TabType) => void;
  onOpenProfileModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenProfileModal }) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#f8f9ff]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#c5c6cd]/30">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-2.5 min-w-0 text-left cursor-pointer group"
          id="header-brand-btn"
        >
          <img
            src={LOGO_URL}
            alt="BioCell Consultores Logo"
            className="h-8 w-8 object-contain shrink-0 rounded-full transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline font-semibold text-[15px] tracking-tight text-[#0b1c30] truncate leading-none">
              BioCell Consultores
            </span>
            <span className="font-mono text-[10px] text-[#006a61] font-semibold uppercase tracking-widest mt-0.5">
              LATAM Compliance
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('contacto')}
            className="h-10 px-3.5 bg-[#000000] text-white rounded-lg flex items-center justify-center font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-[#213145] active:scale-95 transition-all shadow-sm"
            id="header-agendar-btn"
          >
            Agendar
          </button>
          
          <button
            onClick={onOpenProfileModal}
            className="w-8 h-8 rounded-full bg-[#0d1c32] text-white flex items-center justify-center shrink-0 hover:bg-[#213145] active:scale-95 transition-all cursor-pointer shadow-sm"
            title="Consejo Científico & Credenciales"
            id="header-profile-btn"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
