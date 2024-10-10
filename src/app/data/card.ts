import { Card } from "../core/models/card.model";

export const cards: Card[] = [
    {
        title: 'Terapia física',
        content: 'Ofrecemos terapia física personalizada para aliviar el dolor, mejorar la movilidad y fortalecer los músculos. Nuestro equipo profesional te acompaña en tu camino hacia una mejor calidad de vida. ¡Transforma tu salud con nosotros!',
        icon: "fitness_center",
        route: "physical-therapy"
    },
    {
        title: 'Neurorehabilitación',
        content: 'Nuestro servicio de neurorehabilitación está diseñado para ayudar a los pacientes con lesiones o enfermedades del sistema nervioso a recuperar su función cognitiva, motora y emocional. Con programas específicos y personalizados  trabajando en estrecha colaboración con los pacientes y sus familias.',
        icon: "psychology",
        route: "neurorehabilitation"
    },
    {
        title: 'Estimulación temprana',
        content: 'La estimulación temprana está diseñada para apoyar el desarrollo integral de los niños en sus primeros años de vida. A través de actividades lúdicas y terapias personalizadas, ayudamos a potenciar habilidades motoras, cognitivas y sociales, favoreciendo un crecimiento saludable y un desarrollo óptimo. ¡Contáctanos para más información!',
        icon: "child_care",
        route: "early-stimulation"
    },
    {
        title: 'Fisioterapia geriátrica',
        content: 'Nuestra fisioterapia geriátrica se centra en mejorar la movilidad, la fuerza y la calidad de vida de los adultos mayores. A través de un enfoque personalizado y terapias adaptadas, ayudamos a prevenir caídas, aliviar el dolor y promover la independencia en las actividades diarias. ¡Consulta con nosotros para más detalles!',
        icon: "elderly",
        route: "geriatric-physiotherapy"
    }
];