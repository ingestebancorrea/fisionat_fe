import { Service } from "../core/models/services.model";

export const physicalsTherapy:Service[] = [
    {
        id: 1,
        icon: "health_and_safety",
        description: "Prevención de lesiones"
    },
    {
        id: 2,
        icon: "local_florist",
        description: "Masaje relajante"
    },
    {
        id: 3,
        icon: "water_drop",
        description: "Drenajes linfáticos"
    },
    {
        id: 4,
        icon: "flash_on",
        description: "Descargas musculares"
    },
    {
        id: 5,
        icon: "clean_hands",
        description: "Masajes descontracturantes"
    },
    {
        id: 6,
        icon: "compost",
        description: "Terapias alternativas"
    }
];

export const neuro:Service[] = [
    {
        id: 1,
        description: "Terapia manual",
        icon: "handshake"
    },
    {
        id: 2,
        description: "Técnicas neurosensoriales",
        icon: "psychology"
    },
    {
        id: 3,
        description: "Asesoria y telerehabilitación",
        icon: "call"
    },
    {
        id: 4,
        description: "Neurodesarrollo con enfoque ABA",
        icon: "child_care"
    }
];

export const stimulation:Service[] = [
    {
        id: 1,
        description: "Desarrollo psicomotor",
        icon: "directions_run"
    },
    {
        id: 2,
        description: "Desarrollo cognitivo",
        icon: "lightbulb"
    },
    {
        id: 3,
        description: "Actividades sensoriales",
        icon: "touch_app"
    },
    {
        id: 4,
        description: "Escuela para padres y cuidados",
        icon: "family_restroom"
    }
];

export const geriatricPhysiotherapy:Service[] = [
    {
        id: 1,
        description: "Rehabilitación funcional",
        icon: "accessibility"
    },
    {
        id: 2,
        description: "Prevensión de caidas",
        icon: "warning"
    },
    {
        id: 3,
        description: "Manejo del dolor",
        icon: "healing"
    },
    {
        id: 4,
        description: "Terapia ocupacional",
        icon: "work"
    }
];