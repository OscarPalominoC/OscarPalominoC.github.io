import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    name: "OSCAR EDUARDO PALOMINO CARDENAS",
    title: "Python Developer | Data Analyst | English C1",
    location: "Barrancabermeja, Colombia",
    
    // Navigation
    summary: "Summary",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    
    // Professional Summary
    professionalSummary: "Professional Summary",
    summaryText: "Multidisciplinary professional with a background in Industrial Engineering and current studies in Software Analysis and Development. Strong foundation in Python programming, data analysis, cloud fundamentals, and agile methodologies. Experience in customer support at Amazon SDS, with solid teamwork, communication, and mentoring capabilities. Passionate about delivering impactful solutions through data and scalable technology.",
    
    // Experience
    experienceTitle: "Professional Experience",
    present: "Present",
    responsibilities: "Responsibilities",
    achievements: "Achievements",
    
    // Experience 1
    exp1_role: "Customer Service Associate",
    exp1_company: "Amazon SDS",
    exp1_date: "Oct. 2023 - Present",
    exp1_resp1: "Provided real-time technical support to delivery drivers operating in garage and private property routes.",
    exp1_resp2: "Resolved delivery exceptions and system errors using internal tools.",
    exp1_resp3: "Ensured compliance with delivery policies and escalated critical incidents.",
    exp1_ach1: "Trained a group of new hires in policies and tools alongside 3 GEMs, enhancing onboarding quality.",
    exp1_ach2: "Recognized for high performance in AHT and QA metrics.",
    
    // Experience 2
    exp2_role: "Bilingual Agent",
    exp2_company: "Teleperformance",
    exp2_date: "May 2021 - Dec. 2022",
    exp2_resp1: "Delivered bilingual customer service and technical support.",
    exp2_resp2: "Collected accurate customer feedback and escalated unresolved cases.",
    exp2_ach1: "Contributed to consistently high customer satisfaction scores.",
    exp2_ach2: "Developed quick-reference tools to reduce average resolution time.",
    
    // Projects
    projectsTitle: "Featured Projects",
    viewDemo: "Live Demo",
    viewCode: "GitHub",
    
    // Project 1
    proj1_name: "News Inc – Data Miner",
    proj1_desc: "Developed a web scraping pipeline to extract news articles from six international newspapers. The extracted data was stored in a MongoDB non-relational database.",
    proj1_ach1: "Automated extraction and classification of multilingual articles.",
    proj1_ach2: "Improved processing speed and data structure for query access.",
    
    // Project 2
    proj2_name: "Handwritten Signature Recognition",
    proj2_role: "Data Scientist",
    proj2_desc: "Designed and implemented a Siamese Convolutional Neural Network to validate user-provided signatures against stored ones. The model delivered a match result based on a 90% similarity threshold.",
    proj2_ach1: "Built a working neural network capable of distinguishing subtle variations in handwriting.",
    proj2_ach2: "Enhanced model precision through iterative testing and validation.",
    
    // Education
    educationTitle: "Education",
    
    // Education 1
    edu1_degree: "Bachelor's Degree in Industrial Engineering",
    edu1_school: "Research and Development University – UDI",
    edu1_year: "2014",
    edu1_desc: "Gained a deep understanding of system optimization, operational logistics, and process analysis. Developed critical thinking and leadership skills applicable to both engineering and IT environments.",
    
    // Education 2
    edu2_degree: "Data Analyst – Platzi Master",
    edu2_year: "2020 - 2023",
    edu2_desc: "Highly selective and intensive learning program focused on strengthening technical and soft skills for the tech industry. The curriculum was designed to develop the abilities needed for real-world data science and software engineering roles.",
    
    // Education 3
    edu3_degree: "Technologist in Software Analysis and Development (In Progress)",
    edu3_school: "Servicio Nacional de Aprendizaje – SENA",
    edu3_year: "Oct. 2023 - Oct. 2025",
    edu3_desc: "Currently in the final phase of the program and preparing for professional internship placement. This career path focuses on the full software development cycle, from requirements analysis to deployment and maintenance.",
    
    // Skills
    skillsTitle: "Technical Skills",
    languages: "Languages",
    databases: "Databases",
    tools: "Tools & Libraries",
    cloud: "Cloud",
    methodologies: "Methodologies",
    visualization: "Visualization",
  },
  es: {
    // Header
    name: "OSCAR EDUARDO PALOMINO CARDENAS",
    title: "Desarrollador Python | Analista de Datos | Inglés C1",
    location: "Barrancabermeja, Colombia",
    
    // Navigation
    summary: "Resumen",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Educación",
    skills: "Habilidades",
    
    // Professional Summary
    professionalSummary: "Resumen Profesional",
    summaryText: "Profesional multidisciplinario con formación en Ingeniería Industrial y estudios actuales en Análisis y Desarrollo de Software. Sólida base en programación Python, análisis de datos, fundamentos de nube y metodologías ágiles. Experiencia en soporte al cliente en Amazon SDS, con sólidas capacidades de trabajo en equipo, comunicación y mentoría. Apasionado por entregar soluciones impactantes a través de datos y tecnología escalable.",
    
    // Experience
    experienceTitle: "Experiencia Profesional",
    present: "Actualidad",
    responsibilities: "Responsabilidades",
    achievements: "Logros",
    
    // Experience 1
    exp1_role: "Asociado de Servicio al Cliente",
    exp1_company: "Amazon SDS",
    exp1_date: "Oct. 2023 - Actualidad",
    exp1_resp1: "Brindé soporte técnico en tiempo real a conductores de entregas que operan en rutas de garajes y propiedades privadas.",
    exp1_resp2: "Resolví excepciones de entrega y errores del sistema utilizando herramientas internas.",
    exp1_resp3: "Aseguré el cumplimiento de las políticas de entrega y escalé incidentes críticos.",
    exp1_ach1: "Entrené a un grupo de nuevos empleados en políticas y herramientas junto con 3 GEMs, mejorando la calidad de la incorporación.",
    exp1_ach2: "Reconocido por alto rendimiento en métricas de AHT y QA.",
    
    // Experience 2
    exp2_role: "Agente Bilingüe",
    exp2_company: "Teleperformance",
    exp2_date: "May. 2021 - Dic. 2022",
    exp2_resp1: "Brindé servicio al cliente bilingüe y soporte técnico.",
    exp2_resp2: "Recopilé comentarios precisos de los clientes y escalé casos no resueltos.",
    exp2_ach1: "Contribuí a puntajes consistentemente altos de satisfacción del cliente.",
    exp2_ach2: "Desarrollé herramientas de referencia rápida para reducir el tiempo promedio de resolución.",
    
    // Projects
    projectsTitle: "Proyectos Destacados",
    viewDemo: "Demo en Vivo",
    viewCode: "GitHub",
    
    // Project 1
    proj1_name: "News Inc – Extractor de Datos",
    proj1_desc: "Desarrollé un pipeline de web scraping para extraer artículos de noticias de seis periódicos internacionales. Los datos extraídos se almacenaron en una base de datos no relacional MongoDB.",
    proj1_ach1: "Automaticé la extracción y clasificación de artículos multilingües.",
    proj1_ach2: "Mejoré la velocidad de procesamiento y la estructura de datos para acceso de consultas.",
    
    // Project 2
    proj2_name: "Reconocimiento de Firmas Manuscritas",
    proj2_role: "Científico de Datos",
    proj2_desc: "Diseñé e implementé una Red Neuronal Convolucional Siamesa para validar firmas proporcionadas por usuarios contra las almacenadas. El modelo entregó un resultado de coincidencia basado en un umbral de similitud del 90%.",
    proj2_ach1: "Construí una red neuronal funcional capaz de distinguir variaciones sutiles en la escritura.",
    proj2_ach2: "Mejoré la precisión del modelo a través de pruebas iterativas y validación.",
    
    // Education
    educationTitle: "Educación",
    
    // Education 1
    edu1_degree: "Ingeniería Industrial",
    edu1_school: "Universidad de Investigación y Desarrollo – UDI",
    edu1_year: "2014",
    edu1_desc: "Adquirí una comprensión profunda de la optimización de sistemas, logística operacional y análisis de procesos. Desarrollé habilidades de pensamiento crítico y liderazgo aplicables tanto a entornos de ingeniería como de TI.",
    
    // Education 2
    edu2_degree: "Analista de Datos – Platzi Master",
    edu2_year: "2020 - 2023",
    edu2_desc: "Programa de aprendizaje altamente selectivo e intensivo enfocado en fortalecer habilidades técnicas y blandas para la industria tecnológica. El plan de estudios fue diseñado para desarrollar las capacidades necesarias para roles de ciencia de datos e ingeniería de software del mundo real.",
    
    // Education 3
    edu3_degree: "Tecnólogo en Análisis y Desarrollo de Software (En Curso)",
    edu3_school: "Servicio Nacional de Aprendizaje – SENA",
    edu3_year: "Oct. 2023 - Oct. 2025",
    edu3_desc: "Actualmente en la fase final del programa y preparándome para la colocación de prácticas profesionales. Esta carrera se centra en el ciclo completo de desarrollo de software, desde el análisis de requisitos hasta el despliegue y mantenimiento.",
    
    // Skills
    skillsTitle: "Habilidades Técnicas",
    languages: "Lenguajes",
    databases: "Bases de Datos",
    tools: "Herramientas y Librerías",
    cloud: "Nube",
    methodologies: "Metodologías",
    visualization: "Visualización",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
