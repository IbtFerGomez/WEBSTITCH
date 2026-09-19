import { PartnerProfile, ServiceItem, AuditFactor, AuditModule } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1UBHtKyYOPwY0hsXe6K3jY-KR3H77TunYxQN6aZ9U6McUe9BL1kxVQ75Yd7w1lxCQuTBaORDp-jAiDAYN5qmvuwYqljyJNCSeYPBDLwIgLj41OCFHk7zYyNPxqdhI_EhnNhEruURSyjzyw9XbjYwJ95hUP4qvP4s3HWgMIFr2CqNfd4O_RHUeFsmPKX4Fr6Uj8fajdPLYV1HMCFbbwYV84D8qbEvRlmgRGKDSRrDPIb1bqcObN161YSdwY';

export const IMAGES = {
  heroCleanroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGK8ONWG_YucKEJRlNmkq_L3yADchT-bI3Ep8M-qLDBsXQcmFSM3ZRrmM1piCSi7iM1l4HZj9W0k2McZjKz5DahJj9uIf7E-JDK-1k37h-SfoI-sKxcOABx_usOKSta-peWnAvdCCDT3tdjnsBqHiwKCgQa3rL-T6II4ltITMcZCSeQLJj0wPUuEyGvYpBqnYGthRtxN2tVJhvmHH3SoejY654nvA5PNcvesDTJ97WLnOx2G2hIMe3pg',
  auditoriasHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuLSyPcFq7dilv-haLdZgFNmcgjbK6wewt9ezehcR6CwBc8a644wV_2el_awlYV8lqb4o_lIN4c_qAzGummHxkZRC_mp9z0s5UerrDkU98sF_YpEEt446GShJ5_Zgj4HePqQw1UUlAFgXOWHu7Fr2ZnyLOLjhf9FwU8wAFBb38h7Akz-F-l_j1udOzWFX12oQFpPO4_wkpZFIXkOdChc_EJ9kwBfAw-apYHgcxS1w4QVJFLwMeXSH1MQ',
  auditoriaMock: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIA_vK2EiWAgvh_TDMHU1dbFO3jeIIxtLDk0ewQgn9629Aov6hahRP8JLS6WlanXHrDpgS3fMeNQpMMdF2336zDL0u35TYdntizjQFuykGxEYVpzPE7Thw9nZw8BLORqgkK0xpGHhePsr2E7rGmM85jNhI9lu0MuA0Rzp2UmpTIPFVnyQhsmnlSc9Qca_5N1caygO37xWaVbDUP3q2X3J7aJEes725j1xKyUn9ou7WCfBv7ERQ6yszVQ',
  serviceInfra: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwl2h8hwQV9_J87U1Td74pkozWMZNll6Qy0hMWOW7P89-37SPFyv6GKirvud5_Aqou-pRcrj_bPtIG1goeZX6Ew9-LREOX5E0c_p77xDhMGje1EMIcyCs87aqRlR8RvcSO7tdn2AdSDdz6CgdOkFdZYLxoR6DeQYh4SzrvVTo59leVK4LtAGHibvzWzpGr4aAPa6GVA1vZ6dOzBKdvjwRhfSVSV503JF9IooSJjArCQSM3fPm4v4sFlw',
  serviceCalidad: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgplCsqXZLNdBJYlbxeK1ZlkAh155nZtQPKLyvc7RxaGBR4La7LUghBHevuZZ79gr06tzUU9JhLO8UvUkSYhOsQX4PB40Ka8GyTAB8bGUp7n54qeGSRBkO54jOXBjfiF-Gp1X58hBMRqY-SqDu8yV8H4Ro8d_N9yHErkxzYj0Zb5SE8tQzvwAhgb8gpSYQaKkjph5C4SD2GbxxtokrZXpnxUj1pujwXJSEjc62jdZ9uWPPRia1GBEiPQ',
  serviceBioprocesos: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYY6ZMKYXK7klrIzU3v4TBbDnSxE2PH5DGEjPH_XHqjjhbc8b8eEuqqqkzZzPnQX9OnmHSpLQajGVv0mSJvff0dxUq3DCygkKREpORVSx3EiA6tR1ZYD6XdKMwqpfRqmq9pO5qeaFlGT3JGB_rvtIbTAeMpi3nL4F6m5gvmLjYn-Z8SGrwtM_kd_PeNRmmPA5xsrfFd5nnZYmghh6OVSiAC07lzzToqGfd4u6Q4nwl2OBIeayaeh7LA',
};

export const PARTNERS: PartnerProfile[] = [
  {
    id: 'eber',
    name: 'M. en C. Eber Carrillo Martínez',
    credentials: 'M. en C. Biotecnología / ISPE Member',
    tag: 'ISPE / HVAC',
    specialty: 'Especialista en Validación, Ingeniería & Puesta en Marcha',
    bio: 'Maestro en Ciencias enfocado en diseño conceptual, comisionamiento y calificación de instalaciones limpias (ISO 5 a 8), sistemas críticos HVAC farmacéuticos, balance de presiones diferenciales, calificación de equipos (DQ/IQ/OQ/PQ) y bioseguridad para laboratorios biotecnológicos.',
    initials: 'EC',
  },
  {
    id: 'grecita',
    name: 'M. en C. Grecia Peña Cruz',
    credentials: 'M. en C. Ciencias Biofarmacéuticas',
    tag: 'CALIDAD / BPF',
    specialty: 'Especialista en Asuntos Regulatorios, Sistemas de Calidad & POEs',
    bio: 'Maestra en Ciencias con amplia experiencia en arquitectura documental para certificaciones COFEPRIS y FDA, redacción de POEs de cultivo celular, protocolos de Data Integrity según 21 CFR Part 11, trazabilidad de bancos celulares MCB/WCB y preparación para auditorías de alta vigilancia sanitaria.',
    initials: 'GP',
  },
  {
    id: 'luis',
    name: 'M. en C. Luis Gómez García',
    credentials: 'IBT · Maestro en Ciencias en Biotecnología',
    tag: 'BIOPROCESOS / CULTIVO CELULAR',
    specialty: 'Especialista en Bioprocesos, Cinética Celular & Escalamiento',
    bio: 'Ingeniero en Biotecnología y Maestro en Ciencias especializado en cultivo de líneas primarias y continuas, optimización de medios químicamente definidos y libres de suero (Serum-Free), cinéticas metabólicas, viabilidad celular crítica (>95%) y transferencia tecnológica hacia biorreactores.',
    initials: 'LG',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'infraestructura',
    category: 'infra',
    badge: {
      label: 'Infraestructura & HVAC',
      icon: 'hvac',
    },
    standards: {
      left: 'DQ · IQ · OQ · PQ',
      right: 'NOM-059-SSA1',
    },
    title: 'Implementación y Puesta en Marcha de Laboratorios de Cultivo Celular',
    description: 'Solución integral llave en mano para diseño conceptual, comisionamiento y validación de salas limpias bajo clasificaciones ISO 7 / ISO 8.',
    scopeTitle: 'Alcance Técnico Integral',
    scopeItems: [
      'Diseño de layout con flujo unidireccional de personal y materiales (evita contaminación cruzada).',
      'Especificación técnica y procura de cabinas de bioseguridad Clase II Tipo A2/B2 e incubadoras CO2.',
      'Comisionamiento y balance de presiones diferenciales (HVAC grado farmacéutico).',
      'Calificación formal DQ, IQ, OQ y PQ conforme a NOM-059 y Guías PIC/S.',
    ],
    deliverables: [
      'Plano arquitectónico validado',
      'Dossier de comisionamiento',
      'Matriz de riesgos bioseguridad',
    ],
    ctaText: 'Cotizar Implementación Llave en Mano',
    imageUrl: IMAGES.serviceInfra,
  },
  {
    id: 'calidad',
    category: 'calidad',
    badge: {
      label: 'Regulatorio COFEPRIS / FDA',
      icon: 'policy',
    },
    standards: {
      left: '21 CFR Part 11',
      right: 'BPF / GMP Ready',
    },
    title: 'Sistemas de Calidad, POEs y Blindaje Normativo',
    description: 'Arquitectura documental completa para auditorías regulatorias, cumplimiento PIC/S y Buenas Prácticas de Fabricación (BPF/GMP).',
    scopeTitle: 'Estructura de Cumplimiento',
    scopeItems: [
      'Redacción de POEs de cultivo primario, líneas celulares continuas y criopreservación.',
      'Trazabilidad estricta y cadena de custodia de Bancos Celulares Maestros y de Trabajo (MCB / WCB).',
      'Plan Maestro de Validación (PMV) y protocolos de Data Integrity según 21 CFR Part 11.',
      'Control microbiológico, pruebas de esterilidad y detección de micoplasma por PCR.',
    ],
    deliverables: [
      '+30 POEs listos para auditoría',
      'Bitácoras de mantenimiento metrológico',
      'Matriz de trazabilidad analítica',
    ],
    ctaText: 'Solicitar Asesoría Documental',
    imageUrl: IMAGES.serviceCalidad,
  },
  {
    id: 'bioprocesos',
    category: 'bioprocesos',
    badge: {
      label: 'Bioprocesos & Biología',
      icon: 'biotech',
    },
    standards: {
      left: 'Viabilidad >95%',
      right: 'Serum-Free Tech',
    },
    title: 'Optimización y Estandarización Técnica de Cultivo Celular',
    description: 'Resolución de problemas críticos (troubleshooting), cinética celular y escalamiento en biorreactores para lotes reproducibles.',
    scopeTitle: 'Especificación Bioanalítica',
    scopeItems: [
      'Optimización de curvas de crecimiento, tiempos de duplicación y viabilidad celular (>95%).',
      'Transición a medios químicamente definidos y formulaciones libres de suero (Serum-Free).',
      'Caracterización fenotípica y análisis de metabolitos (glucosa, lactato, pH, O2 disuelto).',
      'Transferencia de tecnología (Tech Transfer) desde bench-top a biorreactores piloto de suspensión.',
    ],
    deliverables: [
      'Protocolo de bioproceso estandarizado',
      'Reporte cinético & optimización de medios',
    ],
    ctaText: 'Optimizar Protocolos de Cultivo',
    imageUrl: IMAGES.serviceBioprocesos,
  },
];

export const INITIAL_AUDIT_FACTORS: AuditFactor[] = [
  {
    id: 1,
    title: 'Procedimientos de Esterilización y BSC',
    subtitle: 'SOPs validados y certificación anual al corriente',
    compliant: true,
  },
  {
    id: 2,
    title: 'Calificación Térmica y CO2 Incubadoras',
    subtitle: 'Protocolos IQ/OQ ejecutados con sensores calibrados',
    compliant: true,
  },
  {
    id: 3,
    title: 'Trazabilidad Micoplasma en Bancos Celulares',
    subtitle: 'Kits qPCR validados & certificados de origen MCB/WCB',
    compliant: true,
  },
  {
    id: 4,
    title: 'Presiones Diferenciales en Cascada (HVAC)',
    subtitle: 'Calibración manómetros Magnehelic & registro continuo',
    compliant: false,
  },
];

export const AUDIT_PROGRAMS: AuditModule[] = [
  {
    id: 'mock',
    number: 'Módulo Operativo 01',
    title: 'Auditoría Mock (Simulacro de Inspección)',
    description: 'Simulacro exhaustivo idéntico a una inspección oficial de COFEPRIS o FDA en sitio. Entrevistamos a los analistas de control de calidad, auditamos bitácoras vivas y examinamos condiciones físicas de manufactura.',
    badge: 'Alta Demanda',
    icon: 'assignment_turned_in',
    metadata: {
      duration: '2 a 3 días hábiles',
      deliverable: 'Matriz CAPA Priorizada',
    },
    imageUrl: IMAGES.auditoriaMock,
  },
  {
    id: 'dossier',
    number: 'Módulo Documental 02',
    title: 'Dossier Regulatorio & Plan Maestro (PMV)',
    description: 'Elaboración y actualización del compendio documental técnico exigido por las autoridades sanitarias para apertura, reactivación o recertificación de licencias en laboratorios de biológicos y hemoderivados.',
    icon: 'folder_special',
    metadata: {
      alignedStandards: 'Alineado a Guía ICH Q10 & ANVISA RDC 301',
    },
  },
  {
    id: 'capacitacion',
    number: 'Módulo Formativo 03',
    title: 'Capacitación y Entrenamiento de Personal',
    description: 'Entrenamiento técnico en BPF (Buenas Prácticas de Fabricación), técnica aséptica estricta en áreas clasificadas, documentación íntegra en tiempo real (ALCOA+) y protocolos de contención biológica BSL-2 / BSL-3.',
    icon: 'school',
    metadata: {
      alignedStandards: 'Simulacros de Interrogatorio Inspector-Analista',
    },
  },
];
