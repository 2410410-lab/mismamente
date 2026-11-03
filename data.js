/**
 * mismamente/js/data.js
 * Base de datos local: Perfiles de las 8 Familias Animales, Preguntas del Test,
 * Comunidades Escolares, Retos Semanales y Perfiles de Demostración.
 */

// 1. ILUSTRACIONES VECTORIALES SVG PARA LOS 8 ANIMALES DEL BOCETO
const ANIMAL_SVGS = {
  gallina: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#fef9c3"/>
    <path d="M45 25C45 20 50 18 55 22C60 18 65 20 65 25" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="52" r="22" fill="#fde047"/>
    <circle cx="43" cy="48" r="3" fill="#1e293b"/><circle cx="57" cy="48" r="3" fill="#1e293b"/>
    <polygon points="50,53 45,60 55,60" fill="#f97316"/>
    <path d="M30 65 Q50 80 70 65" stroke="#eab308" stroke-width="3" fill="none"/>
  </svg>`,
  mapache: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#e2e8f0"/>
    <path d="M25 35 L35 20 L45 35 Z M55 35 L65 20 L75 35 Z" fill="#64748b"/>
    <circle cx="50" cy="55" r="25" fill="#cbd5e1"/>
    <path d="M30 48 Q50 40 70 48 Q70 60 50 60 Q30 60 30 48 Z" fill="#334155"/>
    <circle cx="42" cy="52" r="3" fill="#ffffff"/><circle cx="58" cy="52" r="3" fill="#ffffff"/>
    <circle cx="50" cy="57" r="3" fill="#0f172a"/>
  </svg>`,
  gato_naranja: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#ffedd5"/>
    <path d="M25 35 L35 15 L48 32 Z M52 32 L65 15 L75 35 Z" fill="#f97316"/>
    <circle cx="50" cy="55" r="23" fill="#fdba74"/>
    <circle cx="41" cy="50" r="4" fill="#1e293b"/><circle cx="59" cy="50" r="4" fill="#1e293b"/>
    <polygon points="50,56 46,61 54,61" fill="#ea580c"/>
    <path d="M30 58 L15 55 M30 62 L15 65 M70 58 L85 55 M70 62 L85 65" stroke="#c2410c" stroke-width="2"/>
  </svg>`,
  unicornio: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f3e8ff"/>
    <polygon points="50,10 44,32 56,32" fill="#facc15"/>
    <circle cx="50" cy="56" r="22" fill="#e9d5ff"/>
    <path d="M30 35 Q50 25 70 35" stroke="#ec4899" stroke-width="5" fill="none"/>
    <circle cx="42" cy="52" r="3" fill="#4c1d95"/><circle cx="58" cy="52" r="3" fill="#4c1d95"/>
    <path d="M45 62 Q50 67 55 62" stroke="#8b5cf6" stroke-width="2" fill="none"/>
  </svg>`,
  rana: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#dcfce7"/>
    <circle cx="35" cy="32" r="12" fill="#86efac"/><circle cx="65" cy="32" r="12" fill="#86efac"/>
    <circle cx="35" cy="32" r="4" fill="#14532d"/><circle cx="65" cy="32" r="4" fill="#14532d"/>
    <ellipse cx="50" cy="58" rx="26" ry="20" fill="#4ade80"/>
    <path d="M36 62 Q50 75 64 62" stroke="#15803d" stroke-width="3" fill="none"/>
  </svg>`,
  pinguino: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#e0f2fe"/>
    <ellipse cx="50" cy="54" rx="24" ry="26" fill="#0284c7"/>
    <ellipse cx="50" cy="56" rx="16" ry="20" fill="#ffffff"/>
    <circle cx="43" cy="46" r="3" fill="#0f172a"/><circle cx="57" cy="46" r="3" fill="#0f172a"/>
    <polygon points="50,50 44,56 56,56" fill="#f97316"/>
  </svg>`,
  gato_rosa: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#fce7f3"/>
    <path d="M25 35 L35 15 L48 32 Z M52 32 L65 15 L75 35 Z" fill="#f472b6"/>
    <circle cx="50" cy="55" r="23" fill="#fbcfe8"/>
    <circle cx="41" cy="50" r="4" fill="#831843"/><circle cx="59" cy="50" r="4" fill="#831843"/>
    <polygon points="50,56 46,60 54,60" fill="#db2777"/>
    <path d="M44 63 Q50 67 56 63" stroke="#9d174d" stroke-width="2" fill="none"/>
  </svg>`,
  panda: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f1f5f9"/>
    <circle cx="28" cy="30" r="10" fill="#1e293b"/><circle cx="72" cy="30" r="10" fill="#1e293b"/>
    <circle cx="50" cy="56" r="24" fill="#ffffff"/>
    <ellipse cx="40" cy="52" rx="6" ry="8" fill="#1e293b"/><ellipse cx="60" cy="52" rx="6" ry="8" fill="#1e293b"/>
    <circle cx="40" cy="52" r="2" fill="#ffffff"/><circle cx="60" cy="52" r="2" fill="#ffffff"/>
    <ellipse cx="50" cy="60" rx="4" ry="3" fill="#0f172a"/>
  </svg>`
};

// 2. PERFILES COMPLETOS DE LAS 8 FAMILIAS ANIMALES
const ANIMAL_FAMILIES = {
  gallina: {
    id: "gallina",
    name: "Familia Gallina",
    tagline: "Alegre, madrugadora y entusiasta",
    svg: ANIMAL_SVGS.gallina,
    description: "Eres una persona llena de energía positiva, siempre lista para animar el grupo y organizar actividades donde todos se sientan incluidos.",
    strengths: ["Entusiasmo contagioso", "Capacidad de organización", "Lealtad con tus amigos"],
    interests: ["Eventos escolares", "Música alegre", "Deportes en equipo"],
    suggestedActivities: ["Organizar convivencias", "Participar en porras deportivas"],
    weeklyChallengeIdeas: ["Llevar un accesorio amarillo brillante", "Saludar alegremente a tres compañeros nuevos"]
  },
  mapache: {
    id: "mapache",
    name: "Familia Mapache",
    tagline: "Curioso, astuto y resolutivo",
    svg: ANIMAL_SVGS.mapache,
    description: "Te encanta investigar cómo funcionan las cosas, resolver acertijos y encontrar soluciones creativas e e innovadoras a problemas complejos.",
    strengths: ["Pensamiento analítico", "Curiosidad insaciable", "Ingenio práctico"],
    interests: ["Videojuegos de estrategia", "Ciencia y tecnología", "Acertijos y juegos de mesa"],
    suggestedActivities: ["Club de robótica o programación", "Torneos de ajedrez"],
    weeklyChallengeIdeas: ["Llevar una libreta o sticker de temática tecnológica", "Resolver un reto lógico en el descanso"]
  },
  gato_naranja: {
    id: "gato_naranja",
    name: "Familia Gato Naranja",
    tagline: "Relajado, observador y leal",
    svg: ANIMAL_SVGS.gato_naranja,
    description: "Disfrutas de la tranquilidad, aprecias las pláticas sinceras sin prisas y transmites una calma que reconforta a quienes te rodean.",
    strengths: ["Escucha activa", "Serenidad ante el estrés", "Gran sentido del humor sarcástico pero amable"],
    interests: ["Cine y series", "Música lo-fi/acústica", "Pláticas en grupos pequeños"],
    suggestedActivities: ["Club de debate o cineforo", "Espacios de lectura en la biblioteca"],
    weeklyChallengeIdeas: ["Usar un detalle de color naranja", "Compartir una recomendación de canción o película"]
  },
  unicornio: {
    id: "unicornio",
    name: "Familia Unicornio",
    tagline: "Soñador, artístico y empático",
    svg: ANIMAL_SVGS.unicornio,
    description: "Tu imaginación no tiene límites. Ves el mundo con sensibilidad estética y siempre buscas formas originales de expresarte.",
    strengths: ["Creatividad desbordante", "Empatía profunda", "Originalidad"],
    interests: ["Dibujo y pintura", "Escritura creativa", "Diseño y moda"],
    suggestedActivities: ["Talleres de artes plásticas", "Periódico o revista escolar"],
    weeklyChallengeIdeas: ["Llevar un dibujo o boceto visible en tu carpeta", "Usar alguna prenda de tono pastel"]
  },
  rana: {
    id: "rana",
    name: "Familia Rana",
    tagline: "Adaptable, dinámica y sociable",
    svg: ANIMAL_SVGS.rana,
    description: "Te mueves con soltura en diferentes ambientes. Te gusta estar en constante movimiento, probar pasatiempos nuevos y conectar grupos diversos.",
    strengths: ["Versatilidad", "Facilidad para hacer amigos", "Energía contagiosa"],
    interests: ["Deportes al aire libre", "Bailes y ritmos", "Viajes y excursiones"],
    suggestedActivities: ["Equipos deportivos", "Comités de eventos sociales"],
    weeklyChallengeIdeas: ["Usar una pulsera verde", "Unirte a un juego rápido en la cancha durante el receso"]
  },
  pinguino: {
    id: "pinguino",
    name: "Familia Pingüino",
    tagline: "Colaborativo, estructurado y solidario",
    svg: ANIMAL_SVGS.pinguino,
    description: "Crees firmemente en el trabajo en equipo y en la importancia de apoyarse mutuamente. Eres una persona confiable con quien siempre se puede contar.",
    strengths: ["Trabajo colaborativo", "Responsabilidad", "Espíritu comunitario"],
    interests: ["Proyectos comunitarios", "Juegos multijugador cooperativos", "Estudio en grupo"],
    suggestedActivities: ["Voluntariado ambiental o social", "Tutorías entre pares"],
    weeklyChallengeIdeas: ["Usar un accesorio azul marino", "Ofrecer ayuda a un compañero de clase en un proyecto"]
  },
  gato_rosa: {
    id: "gato_rosa",
    name: "Familia Gato Rosa",
    tagline: "Expresivo, elegante y afectuoso",
    svg: ANIMAL_SVGS.gato_rosa,
    description: "Cuidas los detalles, valoras la estética y disfrutas expresar tu afecto hacia tus amigos cercanos mediante pequeños gestos significativos.",
    strengths: ["Atención a los detalles", "Sensibilidad interpersonal", "Estilo personal único"],
    interests: ["Fotografía", "Música Pop / K-Pop", "Manualidades y papelería bonita"],
    suggestedActivities: ["Anuario escolar", "Club de fotografía o redes estudiantiles"],
    weeklyChallengeIdeas: ["Traer un llavero o pin de color rosa", "Escribir una nota de ánimo a una amistad"]
  },
  panda: {
    id: "panda",
    name: "Familia Panda",
    tagline: "Pacífico, reflexivo y acogedor",
    svg: ANIMAL_SVGS.panda,
    description: "Prefieres ambientes cálidos y sin conflicto. Eres un pilar de paz para tus amigos y sabes disfrutar los placeres sencillos de la vida escolar.",
    strengths: ["Mediación de conflictos", "Naturaleza pacífica", "Capacidad de escucha profunda"],
    interests: ["Gastronomía y repostería", "Naturaleza y botánica", "Música suave"],
    suggestedActivities: ["Club de huerto escolar", "Proyectos de bienestar estudiantil"],
    weeklyChallengeIdeas: ["Llevar prendas en blanco y negro", "Disfrutar el almuerzo en una zona verde de la escuela"]
  }
};

// 3. BANCO DE PREGUNTAS DEL TEST (12 PREGUNTAS)
const TEST_QUESTIONS = [
  {
    id: 1,
    question: "¿Cómo prefieres pasar un momento libre durante el receso escolar?",
    options: [
      { text: "Platicando tranquilamente con uno o dos amigos en una banca.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Jugando o practicando un deporte en las canchas.", scores: { rana: 3, gallina: 2 } },
      { text: "Dibujando, escuchando música o escribiendo en un cuaderno.", scores: { unicornio: 3, gato_rosa: 2 } },
      { text: "Investigando un tema curioso en el celular o jugando videojuegos.", scores: { mapache: 3, pinguino: 1 } }
    ]
  },
  {
    id: 2,
    question: "Cuando se asigna un trabajo en equipo en la clase, tu rol natural suele ser:",
    options: [
      { text: "Organizar las tareas, los tiempos y motivar a todos a participar.", scores: { gallina: 3, pinguino: 2 } },
      { text: "Aportar ideas creativas e innovadoras para la presentación.", scores: { unicornio: 3, gato_rosa: 2 } },
      { text: "Resolver la parte más técnica, analítica o compleja del proyecto.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Mantener un ambiente sin tensión y conciliar opiniones divididas.", scores: { panda: 3, gato_naranja: 2 } }
    ]
  },
  {
    id: 3,
    question: "¿Qué tipo de música o manifestación artística te conecta más?",
    options: [
      { text: "Música enérgica, bailable o pop alegre.", scores: { gato_rosa: 3, rana: 2 } },
      { text: "Lofi, acústico, indie o bandas sonoras de películas.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Música experimental, alternativa o ilustración digital.", scores: { unicornio: 3, mapache: 1 } },
      { text: "Rock, hip-hop o música para concentrarse y entrenar.", scores: { rana: 2, pinguino: 2, gallina: 1 } }
    ]
  },
  {
    id: 4,
    question: "Si tu grupo de la preparatoria decidiera organizar una actividad comunitaria, ¿cuál propondrías?",
    options: [
      { text: "Una campaña de reforestación o cuidado del huerto.", scores: { panda: 3, pinguino: 2 } },
      { text: "Un torneo relámpago de videojuegos o ajedrez.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Un festival de talento musical, baile o dibujo.", scores: { unicornio: 2, gato_rosa: 3 } },
      { text: "Una convivencia deportiva o carrera recreativa.", scores: { rana: 3, gallina: 2 } }
    ]
  },
  {
    id: 5,
    question: "¿Cómo reaccionas cuando surgen cambios de planes inesperados?",
    options: [
      { text: "Me adapto rápidamente y busco el lado divertido de la nueva situación.", scores: { rana: 3, gallina: 1 } },
      { text: "Analizo la situación con calma y propongo un plan B práctico.", scores: { mapache: 3, pinguino: 2 } },
      { text: "No me estreso; prefiero dejarme llevar y mantener la serenidad.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Aapoyo a mis compañeros para que nadie se sienta abrumado.", scores: { pinguino: 3, panda: 1 } }
    ]
  },
  {
    id: 6,
    question: "¿Qué tipo de historias, series o películas llaman más tu atención?",
    options: [
      { text: "Fantasía, mundos mágicos e historias conmovedoras.", scores: { unicornio: 3, gato_rosa: 1 } },
      { text: "Misterio, ciencia ficción y tramas policiales o de acertijos.", scores: { mapache: 3, gato_naranja: 1 } },
      { text: "Comedias de la vida cotidiana y dramas reflexivos.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Acción, aventuras de superación y competencias deportivas.", scores: { rana: 3, gallina: 2 } }
    ]
  },
  {
    id: 7,
    question: "¿Qué elemento no suele faltar en tu mochila o espacio personal?",
    options: [
      { text: "Una libreta con bocetos, plumas de colores o papelería bonita.", scores: { gato_rosa: 3, unicornio: 2 } },
      { text: "Un gadget, audífonos o un juego de bolsillo.", scores: { mapache: 3, gato_naranja: 1 } },
      { text: "Tu termo de agua, snack para compartir o algo de abrigo.", scores: { panda: 3, pinguino: 2 } },
      { text: "Accesorios deportivos o ropa cómoda para moverte.", scores: { rana: 3, gallina: 2 } }
    ]
  },
  {
    id: 8,
    question: "A la hora de expresar tu apoyo a un amigo que pasa por un momento difícil, tú:",
    options: [
      { text: "Lo escuchas pacientemente sin juzgar y le brindas calma.", scores: { panda: 3, gato_naranja: 2 } },
      { text: "Le ayudas a buscar soluciones concretas al problema.", scores: { mapache: 2, pinguino: 3 } },
      { text: "Le preparas un detalle creativo, una carta o un dibujo reconfortante.", scores: { gato_rosa: 3, unicornio: 2 } },
      { text: "Lo invitas a salir a dar una caminata o despejar la mente activamente.", scores: { rana: 2, gallina: 3 } }
    ]
  },
  {
    id: 9,
    question: "¿Cuál de estos pasatiempos recreativos te resulta más atractivo?",
    options: [
      { text: "Probar recetas de cocina, repostear o cuidar plantas.", scores: { panda: 3, pinguino: 1 } },
      { text: "Aprender edición de video, fotografía o diseño de modas.", scores: { gato_rosa: 3, unicornio: 2 } },
      { text: "Juegos multijugador en línea o de estrategia por turnos.", scores: { mapache: 3, pinguino: 2 } },
      { text: "Ver partidos de fútbol, baloncesto o practicar calistenia.", scores: { rana: 3, gallina: 2 } }
    ]
  },
  {
    id: 10,
    question: "¿Qué ambiente de estudio te resulta más productivo?",
    options: [
      { text: "Un lugar silencioso, acogedor y bien iluminado.", scores: { panda: 2, gato_naranja: 3 } },
      { text: "Estudiar en equipo donde todos pregunten y se expliquen mutuamente.", scores: { pinguino: 3, gallina: 2 } },
      { text: "Un espacio con música instrumental o ambiental de fondo.", scores: { unicornio: 2, mapache: 2 } },
      { text: "Estudio dinámico en bloques cortos con pausas de movimiento.", scores: { rana: 3, gato_rosa: 1 } }
    ]
  },
  {
    id: 11,
    question: "¿Cómo describirías tu manera de vestir o expresarte visualmente?",
    options: [
      { text: "Cómoda, práctica y sin complicaciones excesivas.", scores: { gato_naranja: 2, panda: 3 } },
      { text: "Con estilo cuidado, accesorios combinados y un toque vistoso.", scores: { gato_rosa: 3, unicornio: 1 } },
      { text: "Deportiva, ligera y funcional para el movimiento.", scores: { rana: 3, gallina: 1 } },
      { text: "Original, con prendas vintage o detalles no convencionales.", scores: { unicornio: 3, mapache: 2 } }
    ]
  },
  {
    id: 12,
    question: "¿Qué valor consideras más fundamental en una amistad duradera?",
    options: [
      { text: "La lealtad recíproca y el apoyo constante en las buenas y las malas.", scores: { pinguino: 3, gallina: 2 } },
      { text: "La autenticidad y la libertad de ser uno mismo sin máscaras.", scores: { unicornio: 3, gato_naranja: 2 } },
      { text: "La paz, el respeto mutuo y la ausencia de dramas innecesarios.", scores: { panda: 3, gato_naranja: 1 } },
      { text: "La complicidad para compartir aventuras y momentos divertidos.", scores: { rana: 3, mapache: 2 } }
    ]
  },

  {
    id: 13,
    question: "Cuando el profesor anuncia un trabajo en equipo, ¿qué haces primero?",
    options: [
      { text: "Animo a todos y propongo que nos organicemos para empezar.", scores: { gallina: 3, pinguino: 2 } },
      { text: "Analizo las instrucciones y busco la mejor manera de resolverlo.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Propongo ideas originales para que el trabajo sea diferente.", scores: { unicornio: 3, gato_rosa: 1 } },
      { text: "Espero tranquilamente a escuchar las ideas de mis compañeros.", scores: { gato_naranja: 2, panda: 3 } }
    ]
  },
  {
    id: 14,
    question: "¿Qué lugar elegirías para pasar el receso escolar?",
    options: [
      { text: "La cancha, jugando o conociendo gente nueva.", scores: { rana: 3, gallina: 1 } },
      { text: "Una banca tranquila para platicar con mis amigos cercanos.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Un lugar donde pueda dibujar, escribir o escuchar música.", scores: { unicornio: 3, gato_rosa: 1 } },
      { text: "Un espacio donde pueda reunirme con varios compañeros.", scores: { gallina: 2, pinguino: 3 } }
    ]
  },
  {
    id: 15,
    question: "Si un compañero no entiende un tema antes del examen, ¿cómo reaccionas?",
    options: [
      { text: "Le explico paso a paso hasta que comprenda.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Lo animo para que no se desespere y confíe en sí mismo.", scores: { gallina: 3, panda: 2 } },
      { text: "Busco una forma creativa de explicárselo con dibujos o ejemplos.", scores: { unicornio: 3, mapache: 1 } },
      { text: "Me siento con él y repasamos con calma, sin presionarnos.", scores: { gato_naranja: 2, panda: 3 } }
    ]
  },
  {
    id: 16,
    question: "¿Qué papel sueles tomar cuando tu salón organiza un evento?",
    options: [
      { text: "Motivo a mis compañeros y ayudo a que todos participen.", scores: { gallina: 3, rana: 2 } },
      { text: "Organizo materiales, tareas y pendientes para que todo salga bien.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Diseño carteles, decoraciones o ideas para que se vea increíble.", scores: { unicornio: 2, gato_rosa: 3 } },
      { text: "Ayudo donde haga falta y procuro que todos se lleven bien.", scores: { panda: 3, pinguino: 2 } }
    ]
  },
  {
    id: 17,
    question: "Si descubres un problema en una actividad escolar, ¿qué haces?",
    options: [
      { text: "Investigo qué pasó y pruebo distintas soluciones.", scores: { mapache: 3, gato_naranja: 1 } },
      { text: "Busco rápidamente otra actividad para mantener al grupo ocupado.", scores: { rana: 3, gallina: 1 } },
      { text: "Consulto al equipo y colaboro para encontrar una solución.", scores: { pinguino: 3, panda: 1 } },
      { text: "Propongo una idea inesperada que nadie haya considerado.", scores: { unicornio: 3, mapache: 1 } }
    ]
  },
  {
    id: 18,
    question: "¿Cómo te preparas normalmente para una exposición frente al salón?",
    options: [
      { text: "Practico varias veces y organizo la información.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Preparo diapositivas, imágenes y detalles visuales llamativos.", scores: { gato_rosa: 3, unicornio: 2 } },
      { text: "Intento hablar con energía y conectar con mis compañeros.", scores: { gallina: 3, rana: 2 } },
      { text: "Repaso tranquilamente y procuro sentirme en confianza.", scores: { gato_naranja: 3, panda: 2 } }
    ]
  },
  {
    id: 19,
    question: "Cuando llega un estudiante nuevo a tu grupo, ¿qué haces?",
    options: [
      { text: "Me acerco a saludarlo y lo invito a convivir con nosotros.", scores: { gallina: 3, rana: 2 } },
      { text: "Le explico cómo funcionan las clases y dónde encontrar las cosas.", scores: { pinguino: 3, mapache: 1 } },
      { text: "Le pregunto por sus gustos, música, juegos o pasatiempos.", scores: { gato_rosa: 2, unicornio: 2 } },
      { text: "Le doy tiempo para adaptarse y me acerco con tranquilidad.", scores: { panda: 3, gato_naranja: 2 } }
    ]
  },
  {
    id: 20,
    question: "¿Qué tipo de proyecto escolar te emociona más?",
    options: [
      { text: "Crear una aplicación, resolver acertijos o experimentar con tecnología.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Diseñar un mural, una revista o una presentación artística.", scores: { unicornio: 3, gato_rosa: 2 } },
      { text: "Organizar una convivencia, torneo o actividad para el salón.", scores: { gallina: 2, rana: 3 } },
      { text: "Realizar una campaña de ayuda o cuidado del ambiente.", scores: { pinguino: 3, panda: 2 } }
    ]
  },
  {
    id: 21,
    question: "Si tus amigos discuten por un desacuerdo en clase, ¿qué haces?",
    options: [
      { text: "Escucho ambas versiones e intento que lleguen a un acuerdo.", scores: { panda: 3, gato_naranja: 2 } },
      { text: "Propongo una solución práctica para que el trabajo continúe.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Intento cambiar el ambiente con humor y buena energía.", scores: { gallina: 3, rana: 1 } },
      { text: "Ayudo a que todos expresen sus sentimientos con respeto.", scores: { unicornio: 2, gato_rosa: 2 } }
    ]
  },
  {
    id: 22,
    question: "¿Qué sueles hacer cuando terminas una actividad antes que los demás?",
    options: [
      { text: "Reviso mis respuestas y busco posibles errores.", scores: { mapache: 3, pinguino: 2 } },
      { text: "Ayudo a mis compañeros que todavía están trabajando.", scores: { pinguino: 3, gallina: 2 } },
      { text: "Dibujo, escribo o imagino algo para aprovechar el tiempo.", scores: { unicornio: 3, gato_naranja: 1 } },
      { text: "Descanso un poco y disfruto la tranquilidad.", scores: { panda: 3, gato_naranja: 2 } }
    ]
  },
  {
    id: 23,
    question: "¿Qué tipo de actividad preferirías durante una semana cultural?",
    options: [
      { text: "Un concurso de baile, deporte o juegos por equipos.", scores: { rana: 3, gallina: 2 } },
      { text: "Un taller de pintura, fotografía, música o diseño.", scores: { unicornio: 2, gato_rosa: 3 } },
      { text: "Un reto de ciencia, programación o preguntas de lógica.", scores: { mapache: 3, pinguino: 1 } },
      { text: "Una actividad de convivencia donde todos puedan participar.", scores: { gallina: 3, panda: 2 } }
    ]
  },
  {
    id: 24,
    question: "¿Cómo reaccionas cuando el profesor cambia los planes de último momento?",
    options: [
      { text: "Me adapto rápido y busco otra manera de aprovechar la clase.", scores: { rana: 3, mapache: 1 } },
      { text: "Reorganizo mis pendientes para no perder el control de las tareas.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Lo tomo con calma y espero a conocer las nuevas indicaciones.", scores: { panda: 3, gato_naranja: 2 } },
      { text: "Pienso en una alternativa creativa para la nueva actividad.", scores: { unicornio: 3, rana: 1 } }
    ]
  },
  {
    id: 25,
    question: "Si pudieras personalizar tu mochila o tus útiles escolares, ¿qué elegirías?",
    options: [
      { text: "Accesorios originales, dibujos y detalles que reflejen mi imaginación.", scores: { unicornio: 3, gato_rosa: 2 } },
      { text: "Todo práctico y organizado para encontrar fácilmente lo que necesito.", scores: { pinguino: 2, mapache: 3 } },
      { text: "Colores alegres, pines divertidos y objetos que llamen la atención.", scores: { gallina: 2, gato_rosa: 3 } },
      { text: "Diseños sencillos, cómodos y sin demasiadas complicaciones.", scores: { gato_naranja: 3, panda: 2 } }
    ]
  },
  {
    id: 26,
    question: "¿Qué haces cuando tienes varios exámenes y tareas en la misma semana?",
    options: [
      { text: "Hago una lista de pendientes y establezco prioridades.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Busco estudiar con compañeros para apoyarnos mutuamente.", scores: { pinguino: 2, gallina: 3 } },
      { text: "Me organizo a mi manera y hago pausas para mantener la calma.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Busco métodos visuales, esquemas o recursos creativos para estudiar.", scores: { unicornio: 2, mapache: 3 } }
    ]
  },
  {
    id: 27,
    question: "Durante una práctica de laboratorio, ¿qué actividad te gustaría realizar?",
    options: [
      { text: "Observar los resultados, analizar datos y descubrir qué ocurre.", scores: { mapache: 3, gato_naranja: 1 } },
      { text: "Coordinar al equipo y asegurarme de que sigamos las indicaciones.", scores: { pinguino: 3, gallina: 1 } },
      { text: "Buscar una forma original de presentar los resultados.", scores: { unicornio: 3, gato_rosa: 1 } },
      { text: "Participar directamente, moverme entre las actividades y probar cosas nuevas.", scores: { rana: 3, mapache: 1 } }
    ]
  },
  {
    id: 28,
    question: "Si tu salón organiza una campaña para mejorar la escuela, ¿qué harías?",
    options: [
      { text: "Invitaría a más estudiantes y animaría a todos a colaborar.", scores: { gallina: 3, rana: 2 } },
      { text: "Planearía los pasos, los recursos y la distribución de tareas.", scores: { pinguino: 3, mapache: 2 } },
      { text: "Diseñaría carteles o mensajes que llamen la atención.", scores: { gato_rosa: 3, unicornio: 2 } },
      { text: "Me enfocaría en acciones tranquilas y útiles que beneficien a todos.", scores: { panda: 3, pinguino: 1 } }
    ]
  },
  {
    id: 29,
    question: "¿Qué es lo que más valoras de tus amistades en la preparatoria?",
    options: [
      { text: "Que siempre podamos reír, salir y vivir experiencias nuevas.", scores: { rana: 3, gallina: 2 } },
      { text: "Que sean leales y podamos hablar sinceramente sin presión.", scores: { gato_naranja: 3, panda: 2 } },
      { text: "Que respeten mi forma de ser y compartan ideas interesantes.", scores: { unicornio: 2, mapache: 3 } },
      { text: "Que tengan detalles conmigo y recuerden las cosas que me gustan.", scores: { gato_rosa: 3, gallina: 1 } }
    ]
  },
  {
    id: 30,
    question: "Al terminar el semestre, ¿qué logro escolar te haría sentir más satisfecho?",
    options: [
      { text: "Haber unido al grupo y creado recuerdos divertidos con todos.", scores: { gallina: 3, rana: 2 } },
      { text: "Haber resuelto un reto difícil y aprendido algo nuevo.", scores: { mapache: 3, unicornio: 1 } },
      { text: "Haber creado un proyecto original que refleje mis ideas.", scores: { unicornio: 3, gato_rosa: 2 } },
      { text: "Haber apoyado a mis compañeros y cumplido mis responsabilidades.", scores: { pinguino: 3, panda: 2 } }
    ]
  }

];

// 4. DATOS DE COMUNIDADES ESCOLARES
const COMMUNITIES_DATA = [
  {
    id: "comm-1",
    name: "Colectivo de Artes Plásticas y Banners",
    category: "Arte",
    description: "Espacio para amantes del dibujo, pintura digital, graffiti responsable y diseño de murales escolares.",
    interests: ["Dibujo", "Ilustración", "Muralismo", "Diseño gráfico"],
    families: ["Familia Unicornio", "Familia Gato Rosa"],
    activityLevel: "Alta"
  },
  {
    id: "comm-2",
    name: "Club de Videojuegos & Gaming Responsable",
    category: "Videojuegos",
    description: "Comunidad dedicada a torneos de esports inter-clases, juegos cooperativos y análisis de diseño de videojuegos.",
    interests: ["Gaming", "Esports", "Estrategia", "Desarrollo indie"],
    families: ["Familia Mapache", "Familia Pingüino"],
    activityLevel: "Muy Alta"
  },
  {
    id: "comm-3",
    name: "Ensamble Musical y Jam Sessions",
    category: "Música",
    description: "Espacio de encuentro para músicos, cantantes y aficionados al ritmo que buscan ensayar y compartir playlists.",
    interests: ["Instrumentos", "Canto", "Producción musical", "Conciertos"],
    families: ["Familia Gallina", "Familia Gato Naranja", "Familia Gato Rosa"],
    activityLevel: "Media"
  },
  {
    id: "comm-4",
    name: "Liga Deportiva Convivencial",
    category: "Deportes",
    description: "Organización de cascaritas recreativas de fútbol, voleibol y básquetbol orientadas a la convivencia e inclusión.",
    interests: ["Fútbol", "Voleibol", "Acondicionamiento físico", "Trabajo en equipo"],
    families: ["Familia Rana", "Familia Gallina"],
    activityLevel: "Muy Alta"
  },
  {
    id: "comm-5",
    name: "Cineforo y Análisis Cinematográfico",
    category: "Cine",
    description: "Proyección semanal de películas cortas, debate sobre dirección, guion y desarrollo de cortometrajes escolares.",
    interests: ["Cine", "Guionismo", "Fotografía cinematográfica", "Debate"],
    families: ["Familia Gato Naranja", "Familia Mapache", "Familia Unicornio"],
    activityLevel: "Media"
  },
  {
    id: "comm-6",
    name: "Huerto Escolar y Bienestar Panda",
    category: "Arte",
    description: "Iniciativa dedicada al cuidado de áreas verdes en la escuela, jardinería y talleres de meditación.",
    interests: ["Ecología", "Botánica", "Sostenibilidad", "Paz"],
    families: ["Familia Panda", "Familia Pingüino"],
    activityLevel: "Media"
  }
];

// 5. DATOS DE RETOS SEMANALES ANÓNIMOS
const WEEKLY_CHALLENGES = [
  {
    id: "reto-1",
    title: "El detalle de color de tu Familia",
    status: "Vigente",
    period: "Semana del 19 al 25 de Octubre",
    participatingFamilies: ["Familia Pingüino", "Familia Rana"],
    instructions: "Si perteneces a la Familia Pingüino o Rana, lleva esta semana un accesorio o sticker de color verde o azul en tu mochila o cuaderno. ¡Observa cuántos compañeros comparten tu coincidencia!",
    coexistenceTip: "Si ves a alguien con el accesorio, puedes sonreír o dar un saludo amable. No presiones a nadie a identificarse."
  },
  {
    id: "reto-2",
    title: "Música en el Descanso",
    status: "Vigente",
    period: "Semana Actual",
    participatingFamilies: ["Todas las familias"],
    instructions: "Lleva tus audífonos al receso y mantén visible en tu carátula o libreta el nombre de tu grupo o género musical favorito.",
    coexistenceTip: "Un gran punto de inicio para entablar conversación es preguntar sobre gustos musicales."
  },
  {
    id: "reto-3",
    title: "Intercambio de Recomendaciones de Cine",
    status: "Finalizado",
    period: "Semana Anterior",
    participatingFamilies: ["Familia Gato Naranja", "Familia Mapache"],
    instructions: "Pega una nota adhesiva anónima en el periódico mural con el título de tu película favorita.",
    coexistenceTip: "Mantén siempre recomendaciones respetuosas y aptas para toda la comunidad."
  }
];

// 6. PERFILES DE DEMOSTRACIÓN DE AFINIDAD
const DEMO_PROFILES = [
  {
    id: "p1",
    alias: "Estudiante de 3er Semestre (Demo)",
    family: "Familia Mapache",
    sharedInterests: ["Videojuegos de estrategia", "Programación", "Cine de Ciencia Ficción"],
    suggestedCommunity: "Club de Videojuegos & Gaming Responsable"
  },
  {
    id: "p2",
    alias: "Estudiante de 1er Semestre (Demo)",
    family: "Familia Unicornio",
    sharedInterests: ["Ilustración digital", "Acuarela", "Música Indie"],
    suggestedCommunity: "Colectivo de Artes Plásticas"
  },
  {
    id: "p3",
    alias: "Estudiante de 5to Semestre (Demo)",
    family: "Familia Rana",
    sharedInterests: ["Voleibol recreativo", "Música bailable", "Senderismo"],
    suggestedCommunity: "Liga Deportiva Convivencial"
  }
];