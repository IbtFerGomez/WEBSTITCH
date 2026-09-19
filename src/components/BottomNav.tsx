import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: 'dashboard' },
    { id: 'servicios', label: 'Servicios', icon: 'fact_check' },
    { id: 'auditorias', label: 'Auditorías', icon: 'biotech' },
    { id: 'contacto', label: 'Contacto', icon: 'contact_support' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#f8f9ff]/90 backdrop-blur-xl border-t border-[#c5c6cd]/30 shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              id={`nav-tab-${tab.id}`}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-all min-h-[44px] min-w-[44px] rounded-lg ${
                isActive
                  ? 'text-[#006a61] font-semibold scale-105'
                  : 'text-[#44474d] hover:text-[#0b1c30]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] transition-transform ${isActive ? 'scale-110' : ''}`}>
                {tab.icon}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
