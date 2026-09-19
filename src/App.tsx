import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { InicioScreen } from './components/InicioScreen';
import { ServiciosScreen } from './components/ServiciosScreen';
import { AuditoriasScreen } from './components/AuditoriasScreen';
import { ContactoScreen } from './components/ContactoScreen';
import { ProfileModal } from './components/ProfileModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [selectedServiceScope, setSelectedServiceScope] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceScope(serviceTitle);
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-body selection:bg-[#86f2e4] selection:text-[#006f66] relative pb-20">
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Main Screen Container - constrained for optimal reading & mobile/tablet/desktop ergonomics */}
      <main className="flex-1 max-w-4xl mx-auto w-full pt-16 flex flex-col">
        {activeTab === 'inicio' && (
          <InicioScreen
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'servicios' && (
          <ServiciosScreen
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'auditorias' && (
          <AuditoriasScreen
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'contacto' && (
          <ContactoScreen
            initialServiceScope={selectedServiceScope}
            onShowToast={showToast}
          />
        )}

        {/* Global Regulatory Footer */}
        <Footer />
      </main>

      {/* Persistent Bottom Navigation Bar */}
      <BottomNav activeTab={activeTab} onTabChange={handleNavigate} />

      {/* Scientific Council & Credentials Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onScheduleDirect={() => handleNavigate('contacto')}
      />

      {/* Floating Action Feedback Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] bg-[#0d1c32] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-white/20 animate-fade-in">
          <span className="material-symbols-outlined text-[#89f5e7] text-[20px] shrink-0">
            check_circle
          </span>
          <span className="font-body text-[13px] text-white/95 leading-snug">
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
