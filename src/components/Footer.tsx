import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-5 py-8 mt-10 bg-[#eff4ff] border-t border-[#c5c6cd]/30 text-center">
      <div className="max-w-md mx-auto flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#006a61] text-[18px]">verified</span>
          <span className="font-mono text-[12px] text-[#0b1c30] font-semibold tracking-wider">
            COFEPRIS • ANVISA • INVIMA • FDA
          </span>
        </div>
        <p className="font-body text-[13px] text-[#44474d]">
          Operaciones Estratégicas: CDMX • São Paulo • Bogotá
        </p>
        <p className="font-mono text-[11px] text-[#76849f] uppercase tracking-wider">
          GMP &amp; ISO 17025 Regulated Practice
        </p>
      </div>
    </footer>
  );
};
