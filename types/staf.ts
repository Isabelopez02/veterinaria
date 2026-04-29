// ts/staf.ts
export interface Staff {
  id: string;
  name: string;
  specialty: string;
  img: string;
  serviceIds: string[]; // <--- AQUÍ VINCULAMOS: IDs de ts/servicio.ts
  schedule: { day: string; hours: string }[];
}

export const staff: Staff[] = [
  { 
    id: "jose-alvarez",
    name: "DTR. jose-alvarez", 
    specialty: "Oncología Veterinaria", 
    img: "/doctor/doc1.png",
    serviceIds: ["oncologia", "consulta-especializada"], // Ella atiende estos servicios
    schedule: [
      { day: "Lunes", hours: "09:00 AM - 05:00 PM" },
      { day: "Miércoles", hours: "09:00 AM - 05:00 PM" }
    ]
  },
  { 
    id: "maria-angeles",
    name: "DTR. MARIA ANGELES", 
    specialty: "Especialista en Diagnóstico", 
    img: "/doctor/docto2.png",
    serviceIds: ["ecografia", "hemografia", "sdma"], // Él hace los exámenes
    schedule: [
      { day: "Martes", hours: "10:00 AM - 07:00 PM" },
      { day: "Sábado", hours: "09:00 AM - 01:00 PM" }
    ]
  },
  { 
    id: "Carlos-Garcia",
    name: "DTR. CARLOS GARCIA", 
    specialty: "Especialista en Diagnóstico", 
    img: "/doctor/doc3.png",
    serviceIds: ["ecografia", "hemografia", "sdma"], // Él hace los exámenes
    schedule: [
      { day: "Martes", hours: "10:00 AM - 07:00 PM" },
      { day: "Sábado", hours: "09:00 AM - 01:00 PM" }
    ]
  },
  { 
    id: "mirian-fuentes",
    name: "DTRA. MIRIAN FUENTES", 
    specialty: "Especialista en Diagnóstico", 
    img: "/doctor/doc4.png",
    serviceIds: ["ecografia", "hemografia", "sdma"], // Él hace los exámenes
    schedule: [
      { day: "Martes", hours: "10:00 AM - 07:00 PM" },
      { day: "Sábado", hours: "09:00 AM - 01:00 PM" }
    ]
  }
];