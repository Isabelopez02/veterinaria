// ts/servicio.ts

export interface Tratamiento {
  title: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Servicio {
  id: string; // ID único para la URL (slug)
  title: string;
  desc: string;
  img: string;
  longDesc: string;
  tratamientos: Tratamiento[];
  faqs: FAQ[];
}

export const services: Servicio[] = [
  {
    id: "oncologia",
    title: "ONCOLOGIA VETERINARIA",
    desc: "Estudio, diagnóstico y tratamiento del cáncer",
    img: "/servicios/ONCOLOGIA.png",
    longDesc: "Diagnóstico avanzado y tratamientos especializados para combatir tumores, priorizando siempre la calidad de vida y el bienestar emocional de tu mascota.",
    tratamientos: [
      { title: "Quimioterapia Adaptada", content: "Protocolos personalizados según el tipo de tumor y la salud general del paciente, minimizando efectos secundarios." },
      { title: "Cirugía Oncológica", content: "Extirpación de tumores con márgenes de seguridad amplios y técnicas de reconstrucción para una recuperación óptima." },
      { title: "Inmunoterapia", content: "Uso de biológicos que estimulan el sistema inmune para reconocer y atacar específicamente las células cancerosas." },
      { title: "Manejo del Dolor", content: "Terapias paliativas y protocolos de analgesia avanzada para pacientes en etapas críticas." }
    ],
    faqs: [
      { question: "¿La quimioterapia hace que se les caiga el pelo?", answer: "A diferencia de los humanos, la mayoría de las mascotas no pierden su pelaje, aunque razas de pelo continuo pueden notar un adelgazamiento leve." },
      { question: "¿Cuál es la expectativa de vida?", answer: "Depende del estadiaje del cáncer; nuestro objetivo es siempre ganar tiempo de calidad." }
    ]
  },
  {
    id: "consulta-especializada",
    title: "CONSULTA ESPECIALIZADA",
    desc: "Diagnóstico experto y preciso.",
    img: "/servicios/consulta_per.png",
    longDesc: "Atención profunda por especialistas en diversas ramas de la medicina veterinaria (Cardiología, Dermatología, Neurología) para casos complejos.",
    tratamientos: [
      { title: "Evaluación Cardíaca", content: "Ecocardiografía y monitoreo de presión arterial para pacientes con soplos o insuficiencias." },
      { title: "Dermatología Avanzada", content: "Pruebas de alergia y control de piodermas crónicas o problemas hormonales en piel." },
      { title: "Neurología Clínica", content: "Evaluación de reflejos y coordinación para diagnósticos de hernias discales o epilepsia." }
    ],
    faqs: [
      { question: "¿Debo traer a mi mascota en ayunas?", answer: "Generalmente no, a menos que se prevea la necesidad de sedación para exámenes específicos." }
    ]
  },
  {
    id: "medicina-felina",
    title: "MEDICINA FELINA",
    desc: "Cuidado especializado para gatos",
    img: "/servicios/consulta.png",
    longDesc: "Entendemos que los gatos no son perros pequeños. Contamos con un entorno libre de estrés diseñado exclusivamente para las necesidades biológicas del felino.",
    tratamientos: [
      { title: "Clínica Cat-Friendly", content: "Manejo amable y técnicas de restricción mínima para reducir el cortisol durante la consulta." },
      { title: "Control Renal Felino", content: "Monitoreo preventivo de la función renal, la patología más común en gatos senior." },
      { title: "Medicina del Comportamiento", content: "Asesoría para problemas de eliminación inadecuada, agresividad o ansiedad felina." }
    ],
    faqs: [
      { question: "¿Mi gato se estresa mucho al salir, qué hago?", answer: "Recomendamos el uso de feromonas sintéticas en el transportín 15 minutos antes de salir de casa." }
    ]
  },
  {
    id: "hemografia",
    title: "HEMOGRAFIA COMPLETA",
    desc: "Análisis sanguíneo completo.",
    img: "/servicios/hemografia.png",
    longDesc: "Contamos con laboratorio automatizado para obtener resultados precisos en minutos sobre la salud celular de tu mascota.",
    tratamientos: [
      { title: "Conteo de Serie Roja", content: "Detección inmediata de anemias o policitemias (exceso de glóbulos rojos)." },
      { title: "Perfil Leucocitario", content: "Evaluación del sistema inmune para detectar infecciones bacterianas, virales o inflamaciones." },
      { title: "Detección de Hemoparásitos", content: "Búsqueda directa de parásitos en sangre transmitidos por garrapatas." }
    ],
    faqs: [
      { question: "¿Cuánto tardan los resultados?", answer: "Gracias a nuestro laboratorio in-house, los resultados están listos en menos de 20 minutos." }
    ]
  },
  {
    id: "laboratorio-idexx",
    title: "LABORATORIO IDEXX",
    desc: "Diagnósticos con tecnología de punta.",
    img: "/servicios/laboratorio.png",
    longDesc: "Alianza estratégica con la tecnología líder a nivel mundial, permitiendo diagnósticos moleculares y químicos de máxima fidelidad.",
    tratamientos: [
      { title: "Bioquímica Clínica", content: "Medición exacta de enzimas hepáticas, renales y niveles de glucosa en sangre." },
      { title: "Urianálisis Pro", content: "Evaluación química y de sedimento urinario para detectar cristales o cistitis." },
      { title: "Pruebas SNAP", content: "Detección rápida de enfermedades como Parvovirus, Distemper, Leucemia y Sida felino." }
    ],
    faqs: [
      { question: "¿Por qué IDEXX?", answer: "Es el estándar de oro en veterinaria global, ofreciendo rangos de referencia más precisos por especie y edad." }
    ]
  },
  {
    id: "ecografia",
    title: "ECOGRAFIA DOPPLER",
    desc: "Diagnóstico experto y preciso.",
    img: "/servicios/ecografia.png",
    longDesc: "Visualización no invasiva de los órganos internos en tiempo real para detectar anomalías antes de que se vuelvan críticas.",
    tratamientos: [
      { title: "Ecografía Abdominal", content: "Revisión de hígado, bazo, páncreas, estómago y vejiga en busca de inflamaciones o masas." },
      { title: "Ecocardiografía Doppler", content: "Evaluación del flujo sanguíneo del corazón y el funcionamiento de las válvulas cardíacas." },
      { title: "Seguimiento Gestacional", content: "Monitoreo del bienestar fetal en mascotas gestantes sin riesgo de radiación." }
    ],
    faqs: [
      { question: "¿Es necesario depilar a mi mascota?", answer: "Sí, para que el ultrasonido penetre correctamente, debemos realizar una pequeña ventana de depilación en la zona a evaluar." }
    ]
  },
  {
    id: "sdma",
    title: "MARCADOR SDMA",
    desc: "Detección temprana de enfermedad renal.",
    img: "/servicios/sdma.png",
    longDesc: "La prueba revolucionaria que detecta problemas renales meses o años antes que las pruebas tradicionales de creatinina.",
    tratamientos: [
      { title: "Detección Precoz", content: "Identifica la pérdida de función renal cuando solo se ha afectado el 25%, permitiendo tratar a tiempo." },
      { title: "Monitoreo Senior", content: "Prueba obligatoria en chequeos preventivos para mascotas mayores de 7 años." },
      { title: "Plan de Dieta Renal", content: "Basado en los niveles de SDMA, diseñamos una dieta que protege los riñones del daño progresivo." }
    ],
    faqs: [
      { question: "¿Qué diferencia hay con la Creatinina?", answer: "La creatinina solo sube cuando el 75% del riñón ya está dañado; el SDMA avisa mucho antes." }
    ]
  }
];