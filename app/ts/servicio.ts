
export interface Servicio {
  title: string;
  desc: string;
  img: string;
}
 
export const services : Servicio[] = [
    { title: "ONCOLOGIA", desc: "Estudio, diagnóstico y tratamiento del cáncer", img: "/servicios/ONCOLOGIA.png" },
    { title: "CONSULTA ESPECIALIZADA", desc: "Diagnóstico experto y preciso.", img: "/servicios/consulta_per.png" },
    { title: "MEDICINA FELINA", desc: "Cuidado especializado para gatos", img: "/servicios/consulta.png" },
    { title: "HEMOGRAFIA", desc: "Análisis sanguíneo completo.", img: "/servicios/hemografia.png" },
    { title: "LABORATORIO IDEXX", desc: "Diagnósticos con tecnología de punta.", img: "/servicios/laboratorio.png" },
    { title: "ECOGRAFIA", desc: "Diagnóstico experto y preciso.", img: "/servicios/ecografia.png" },
    { title: "SDMA", desc: "Detección temprana de enfermedad renal.", img: "/servicios/sdma.png" },
];