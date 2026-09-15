type Segment = { text: string; color?: 'terracotta' | 'sage' };

const en = {
  header: {
    bookButton: 'Book a Consultation',
    bookButtonShort: 'Book Now',
  },
  tabs: {
    about: 'About',
    services: 'Services',
    whoIHelp: 'Who I Help',
    insurance: 'Insurance',
    faq: 'FAQ',
    contact: 'Get in Touch',
  },
  hero: {
    titleBefore: 'Empowering ',
    titleEmphasis: 'change',
    titleAfter: ', one session at a time.',
    subtitle:
      'Bilingual, compassionate therapy for individuals, couples, and families — virtual sessions across New Jersey, in a space where you feel safe, heard, and respected.',
    bookNow: 'Book Now',
    bookNowNote: "Free consultation — you'll pick your exact time on Headway's secure booking page.",
    quickLinksLabel: 'Looking for a specific kind of support?',
    quickLinks: {
      individual: 'Individual Therapy',
      couples: 'Couples Therapy',
      family: 'Family Therapy',
      adolescent: 'Adolescent Therapy',
    },
    badges: {
      bilingual: 'Bilingual EN/ES',
      licensed: 'Licensed in NJ',
      virtual: '100% Virtual',
    },
  },
  trustStrip: {
    licensed: 'Licensed in New Jersey (LCSW)',
    virtual: 'Virtual sessions statewide',
    therapy: 'Individual, couples & family therapy',
    sessions: 'Sessions in English & Español',
  },
  about: {
    heading: 'About Diana',
    quote: '“My approach is evidence-based, compassionate, and collaborative.”',
    paragraph1:
      "I'm a bilingual Licensed Clinical Social Worker with over 7 years of clinical experience supporting adolescents, adults, couples, and families through anxiety, stress, and complex life challenges. I've worked closely with diverse clients, helping reduce barriers to care so they feel understood, respected, and supported.",
    paragraph2:
      "If you're feeling stuck, overwhelmed, or navigating a difficult transition, you don't have to do it alone. Clients often describe my presence as calm, my communication as clear, and the space we build together as one where growth can happen at a comfortable pace.",
    training: { label: 'Training', value: 'MSW, Seton Hall University' },
    license: { label: 'License', value: 'LCSW · New Jersey' },
    experience: { label: 'Experience', value: '9 years in the field' },
    languages: { label: 'Languages', value: 'English & Español' },
  },
  approach: {
    heading: 'How I can help',
    intro:
      'I help clients manage anxiety and stress through a calm, compassionate, and grounded approach. My work blends evidence-based practice with a whole-person perspective — supporting emotional, mental, and personal growth in a space where you feel safe, heard, and respected.',
    topSpecialties: ['Anxiety', 'Family issues', 'Stress management', 'Relationship issues'],
    moreSpecialties: [
      'Depression',
      'Cultural & ethnic issues',
      'Grief or loss',
      'Maternal mental health',
      "Men's issues",
      "Women's issues",
      'Identity issues',
      'Infertility',
    ],
    modalitiesHeading: 'Approaches I draw from',
    modalitiesIntro: 'Every plan is personalized — these are some of the evidence-based methods I integrate along the way.',
    modalities: [
      'Internal Family Systems (IFS)',
      'Narrative Therapy',
      'Solution Focused Brief Therapy',
      'Cognitive Behavioral Therapy (CBT)',
      'Acceptance & Commitment Therapy (ACT)',
      'Motivational Interviewing',
      'Attachment-Based',
      'Gottman Method',
      'Mindfulness-Based Cognitive Therapy',
      'Structural Family Therapy',
      'Positive Psychology',
      'Strength-Based',
    ],
  },
  whoIHelp: {
    sentence: [
      { text: 'I work with ' },
      { text: 'individuals', color: 'terracotta' },
      { text: ', ' },
      { text: 'couples', color: 'terracotta' },
      { text: ', and ' },
      { text: 'families', color: 'terracotta' },
      { text: ' — from adolescents to seniors — in ' },
      { text: 'English', color: 'sage' },
      { text: ' and ' },
      { text: 'Español', color: 'sage' },
      { text: '.' },
    ] satisfies Segment[],
    modes: { individual: 'Individual', couples: 'Couples', family: 'Family' },
  },
  insurance: {
    heading: 'Insurance accepted',
    intro: "In-network with the plans below. Don't see yours? Let's talk during your free consultation.",
  },
  faq: {
    heading: 'Frequently Asked Questions',
    intro: 'Still have a question? Ask during your free consultation.',
    items: [
      {
        q: 'Do you accept insurance?',
        a: 'Yes — I’m in-network with Aetna, Cigna, United Healthcare, Oxford, Oscar, Horizon Blue Cross Blue Shield of NJ, Carelon Behavioral Health, and Quest Behavioral Health. Don’t see your plan listed? Let’s talk about it during your free consultation.',
      },
      {
        q: 'Are sessions really 100% virtual?',
        a: 'Yes. All sessions are held virtually, so you can meet from wherever feels most comfortable — no commute, no waiting room. I’m licensed to practice in New Jersey.',
      },
      {
        q: 'Who do you work with?',
        a: 'I work with adolescents, adults, and seniors — individually, as couples, or as families — navigating anxiety, stress, relationship issues, grief, identity, and more.',
      },
      {
        q: 'Do you offer sessions in Spanish?',
        a: '¡Sí! I’m bilingual, and sessions are available in both English and Español.',
      },
      {
        q: 'What happens in a free consultation?',
        a: 'It’s a low-pressure, no-obligation conversation where we get to know each other, talk through what’s bringing you to therapy, and see if we’re a good fit — no commitment required.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'Click “Book Now” at the top of this page. You’ll be taken to Headway’s secure booking page to pick a day and time that works for you.',
      },
      {
        q: 'What therapy approaches do you use?',
        a: 'Every plan is personalized. I draw from evidence-based approaches like CBT, ACT, Internal Family Systems, and mindfulness-based methods, tailored to what you need.',
      },
      {
        q: 'Is what I share in session confidential?',
        a: 'Yes. Confidentiality is a cornerstone of therapy — what you share is protected, with the limited exceptions required by law, such as risk of harm to yourself or others.',
      },
    ],
  },
  bookingCta: {
    heading: 'Ready when you are.',
    body: 'A free, no-pressure consultation is the first step — virtual, bilingual, and built around what you need right now.',
    button: 'Book a Free Consultation',
  },
  contact: {
    heading: 'Get in Touch',
    intro: "Have a question before booking? Send a message and I'll get back to you within 72 hours.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: "What would you like to share?",
    sendButton: 'Send Message',
    emailSubject: (name: string) => `Message from ${name}`,
    emailBody: (name: string, email: string, message: string) => `${message}\n\n— ${name} (${email})`,
  },
  footer: {
    name: 'Diana Montero, LCSW',
    license: 'Licensed Clinical Social Worker · State of New Jersey',
    tagline1: 'Bilingual therapist · Virtual sessions across New Jersey',
    tagline2: 'Individual, couples & family therapy',
    emergencyBefore: 'If you are experiencing a mental health emergency, call or text ',
    emergencyBold: '988',
    emergencyAfter: ' (Suicide & Crisis Lifeline) or go to your nearest emergency room. This website is not a substitute for emergency care.',
    copyright: (year: number) => `© ${year} Diana Montero, LCSW. All rights reserved. ·`,
    terms: 'Terms & Conditions',
  },
  terms: {
    backHome: '← Back to home',
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: August 2026',
    intro:
      'This website is offered to you conditioned on your acceptance, without modification, of the terms, conditions, and notices contained here. Your use of this website constitutes your agreement to all of the following.',
    sections: [
      {
        heading: 'Modification of These Terms of Use',
        body: `Diana Montero, LCSW ("the Practice") reserves the right to change the terms, conditions, and notices under which this website is offered, at any time.`,
      },
      {
        heading: 'Links to Third-Party Sites',
        body: `This website may contain links to other websites ("Linked Sites"), including scheduling platforms such as Headway. Linked Sites are not under the control of the Practice, and the Practice is not responsible for the content of any Linked Site or any changes to it. Links are provided as a convenience, and their inclusion does not imply endorsement by the Practice.`,
      },
      {
        heading: 'No Unlawful or Prohibited Use',
        body: `As a condition of using this website, you agree not to use it for any purpose that is unlawful or prohibited by these terms. You may not use this website in any manner that could damage, disable, overburden, or impair it, or interfere with any other party's use of it. You may not attempt to obtain any materials or information through means not intentionally made available through this website.`,
      },
      {
        heading: 'Not a Substitute for Emergency or Clinical Care',
        body: `This website is for general information only and does not establish a client relationship, provide a clinical assessment, or substitute for professional care. If you are experiencing a mental health emergency, call or text 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Information on this site should not be relied on for medical, legal, or financial decisions.`,
      },
      {
        heading: 'SMS Communications',
        body: `If you opt in to SMS communication from a web form or other medium, you agree to receive text messages related to appointment scheduling, appointment reminders, and related updates. Message and data rates may apply, and frequency varies. Reply STOP at any time to opt out, or HELP for assistance. Details on how your information is handled are provided in the Practice's Notice of Privacy Practices, available at intake.`,
      },
      {
        heading: 'Liability Disclaimer',
        body: `This website and its content are provided "as is," without warranties of any kind, express or implied. The Practice makes no representations about the completeness, reliability, or availability of the information on this site for any particular purpose. To the maximum extent permitted by law, the Practice is not liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website.`,
      },
      {
        heading: 'Governing Law',
        body: `These terms are governed by the laws of the State of New Jersey, without regard to its conflict-of-law principles. Any dispute arising from the use of this website will be subject to the jurisdiction of the courts of New Jersey.`,
      },
      {
        heading: 'Contact',
        body: `Questions about these terms can be directed through the booking link on this website.`,
      },
    ],
  },
  languageToggle: {
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Switch to Spanish',
  },
};

const es: typeof en = {
  header: {
    bookButton: 'Agendar una Consulta',
    bookButtonShort: 'Reservar Ahora',
  },
  tabs: {
    about: 'Sobre mí',
    services: 'Servicios',
    whoIHelp: 'A Quién Ayudo',
    insurance: 'Seguro',
    faq: 'Preguntas',
    contact: 'Contacto',
  },
  hero: {
    titleBefore: 'Impulsando el ',
    titleEmphasis: 'cambio',
    titleAfter: ', una sesión a la vez.',
    subtitle:
      'Terapia bilingüe y compasiva para individuos, parejas y familias — sesiones virtuales en todo Nueva Jersey, en un espacio donde te sientas seguro, escuchado y respetado.',
    bookNow: 'Reservar Ahora',
    bookNowNote: 'Consulta gratuita — elegirás tu horario exacto en la página segura de reservas de Headway.',
    quickLinksLabel: '¿Buscas un tipo de apoyo específico?',
    quickLinks: {
      individual: 'Terapia Individual',
      couples: 'Terapia de Pareja',
      family: 'Terapia Familiar',
      adolescent: 'Terapia para Adolescentes',
    },
    badges: {
      bilingual: 'Bilingüe EN/ES',
      licensed: 'Licenciada en NJ',
      virtual: '100% Virtual',
    },
  },
  trustStrip: {
    licensed: 'Licenciada en Nueva Jersey (LCSW)',
    virtual: 'Sesiones virtuales en todo el estado',
    therapy: 'Terapia individual, de pareja y familiar',
    sessions: 'Sesiones en inglés y español',
  },
  about: {
    heading: 'Sobre Diana',
    quote: '“Mi enfoque se basa en evidencia, es compasivo y colaborativo.”',
    paragraph1:
      'Soy trabajadora social clínica licenciada (LCSW) y bilingüe, con más de 7 años de experiencia clínica ayudando a adolescentes, adultos, parejas y familias a superar la ansiedad, el estrés y desafíos de vida complejos. He trabajado de cerca con clientes de diversos orígenes, ayudando a reducir las barreras de acceso a la atención para que se sientan comprendidos, respetados y apoyados.',
    paragraph2:
      'Si te sientes estancado, abrumado o estás atravesando una transición difícil, no tienes que hacerlo solo. Mis clientes suelen describir mi presencia como calmada, mi comunicación como clara, y el espacio que construimos juntos como uno donde el crecimiento puede darse a un ritmo cómodo.',
    training: { label: 'Formación', value: 'MSW, Seton Hall University' },
    license: { label: 'Licencia', value: 'LCSW · Nueva Jersey' },
    experience: { label: 'Experiencia', value: '9 años en el campo' },
    languages: { label: 'Idiomas', value: 'Inglés y español' },
  },
  approach: {
    heading: 'Cómo puedo ayudar',
    intro:
      'Ayudo a mis clientes a manejar la ansiedad y el estrés con un enfoque tranquilo, compasivo y centrado. Mi trabajo combina prácticas basadas en evidencia con una perspectiva integral de la persona, apoyando el crecimiento emocional, mental y personal en un espacio donde te sientas seguro, escuchado y respetado.',
    topSpecialties: ['Ansiedad', 'Problemas familiares', 'Manejo del estrés', 'Problemas de relación'],
    moreSpecialties: [
      'Depresión',
      'Temas culturales y étnicos',
      'Duelo o pérdida',
      'Salud mental materna',
      'Temas masculinos',
      'Temas femeninos',
      'Temas de identidad',
      'Infertilidad',
    ],
    modalitiesHeading: 'Enfoques que utilizo',
    modalitiesIntro: 'Cada plan es personalizado — estos son algunos de los métodos basados en evidencia que integro en el camino.',
    modalities: [
      'Sistema Familiar Interno (IFS)',
      'Terapia Narrativa',
      'Terapia Breve Centrada en Soluciones',
      'Terapia Cognitivo-Conductual (TCC)',
      'Terapia de Aceptación y Compromiso (ACT)',
      'Entrevista Motivacional',
      'Basada en el Apego',
      'Método Gottman',
      'Terapia Cognitiva Basada en Mindfulness',
      'Terapia Familiar Estructural',
      'Psicología Positiva',
      'Basada en Fortalezas',
    ],
  },
  whoIHelp: {
    sentence: [
      { text: 'Trabajo con ' },
      { text: 'individuos', color: 'terracotta' },
      { text: ', ' },
      { text: 'parejas', color: 'terracotta' },
      { text: ' y ' },
      { text: 'familias', color: 'terracotta' },
      { text: ' — desde adolescentes hasta adultos mayores — en ' },
      { text: 'inglés', color: 'sage' },
      { text: ' y ' },
      { text: 'español', color: 'sage' },
      { text: '.' },
    ] satisfies Segment[],
    modes: { individual: 'Individual', couples: 'Pareja', family: 'Familia' },
  },
  insurance: {
    heading: 'Seguros aceptados',
    intro: 'Dentro de la red con los siguientes planes. ¿No ves el tuyo? Hablemos durante tu consulta gratuita.',
  },
  faq: {
    heading: 'Preguntas Frecuentes',
    intro: '¿Todavía tienes una pregunta? Pregúntame durante tu consulta gratuita.',
    items: [
      {
        q: '¿Aceptas seguro médico?',
        a: 'Sí — estoy dentro de la red de Aetna, Cigna, United Healthcare, Oxford, Oscar, Horizon Blue Cross Blue Shield de NJ, Carelon Behavioral Health y Quest Behavioral Health. ¿No ves tu plan en la lista? Hablemos de ello durante tu consulta gratuita.',
      },
      {
        q: '¿Las sesiones son realmente 100% virtuales?',
        a: 'Sí. Todas las sesiones se realizan de forma virtual, así que puedes conectarte desde donde te sientas más cómodo — sin traslados, sin sala de espera. Estoy licenciada para ejercer en Nueva Jersey.',
      },
      {
        q: '¿Con quién trabajas?',
        a: 'Trabajo con adolescentes, adultos y adultos mayores — de forma individual, en pareja o en familia — que atraviesan ansiedad, estrés, problemas de relación, duelo, temas de identidad y más.',
      },
      {
        q: '¿Ofreces sesiones en español?',
        a: '¡Sí! Soy bilingüe, y las sesiones están disponibles tanto en inglés como en español.',
      },
      {
        q: '¿Qué sucede en una consulta gratuita?',
        a: 'Es una conversación relajada y sin compromiso en la que nos conocemos, hablamos sobre lo que te trae a terapia y vemos si somos una buena combinación — sin ningún compromiso.',
      },
      {
        q: '¿Cómo reservo una cita?',
        a: 'Haz clic en “Reservar Ahora” en la parte superior de esta página. Serás dirigido a la página segura de reservas de Headway para elegir el día y la hora que mejor te convenga.',
      },
      {
        q: '¿Qué enfoques terapéuticos utilizas?',
        a: 'Cada plan es personalizado. Utilizo enfoques basados en evidencia como TCC, ACT, Sistema Familiar Interno y métodos basados en mindfulness, adaptados a lo que necesitas.',
      },
      {
        q: '¿Es confidencial lo que comparto en las sesiones?',
        a: 'Sí. La confidencialidad es un pilar fundamental de la terapia — lo que compartes está protegido, con las excepciones limitadas que exige la ley, como el riesgo de daño hacia ti mismo u otras personas.',
      },
    ],
  },
  bookingCta: {
    heading: 'Lista cuando tú lo estés.',
    body: 'Una consulta gratuita y sin presión es el primer paso — virtual, bilingüe y adaptada a lo que necesitas ahora mismo.',
    button: 'Reservar una Consulta Gratuita',
  },
  contact: {
    heading: 'Ponte en Contacto',
    intro: '¿Tienes una pregunta antes de reservar? Envía un mensaje y te responderé dentro de 72 horas.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tucorreo@ejemplo.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿Qué te gustaría compartir?',
    sendButton: 'Enviar Mensaje',
    emailSubject: (name: string) => `Mensaje de ${name}`,
    emailBody: (name: string, email: string, message: string) => `${message}\n\n— ${name} (${email})`,
  },
  footer: {
    name: 'Diana Montero, LCSW',
    license: 'Trabajadora Social Clínica Licenciada · Estado de Nueva Jersey',
    tagline1: 'Terapeuta bilingüe · Sesiones virtuales en todo Nueva Jersey',
    tagline2: 'Terapia individual, de pareja y familiar',
    emergencyBefore: 'Si estás atravesando una emergencia de salud mental, llama o envía un mensaje de texto al ',
    emergencyBold: '988',
    emergencyAfter: ' (Línea de Crisis y Suicidio) o acude a la sala de emergencias más cercana. Este sitio web no sustituye la atención de emergencia.',
    copyright: (year: number) => `© ${year} Diana Montero, LCSW. Todos los derechos reservados. ·`,
    terms: 'Términos y Condiciones',
  },
  terms: {
    backHome: '← Volver al inicio',
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización: agosto de 2026',
    intro:
      'Este sitio web se le ofrece condicionado a su aceptación, sin modificaciones, de los términos, condiciones y avisos aquí contenidos. El uso de este sitio web constituye su acuerdo con todo lo siguiente.',
    sections: [
      {
        heading: 'Modificación de Estos Términos de Uso',
        body: `Diana Montero, LCSW ("la Práctica") se reserva el derecho de cambiar, en cualquier momento, los términos, condiciones y avisos bajo los cuales se ofrece este sitio web.`,
      },
      {
        heading: 'Enlaces a Sitios de Terceros',
        body: `Este sitio web puede contener enlaces a otros sitios web ("Sitios Enlazados"), incluyendo plataformas de programación de citas como Headway. Los Sitios Enlazados no están bajo el control de la Práctica, y la Práctica no es responsable del contenido de ningún Sitio Enlazado ni de sus cambios. Los enlaces se proporcionan por conveniencia, y su inclusión no implica el respaldo de la Práctica.`,
      },
      {
        heading: 'Uso No Ilícito o Prohibido',
        body: `Como condición para usar este sitio web, usted acepta no utilizarlo para ningún propósito que sea ilícito o esté prohibido por estos términos. No puede utilizar este sitio web de manera que pueda dañarlo, deshabilitarlo, sobrecargarlo o perjudicarlo, ni interferir con el uso del mismo por parte de terceros. No puede intentar obtener ningún material o información por medios que no hayan sido puestos a disposición intencionalmente a través de este sitio web.`,
      },
      {
        heading: 'No Sustituye la Atención de Emergencia o Clínica',
        body: `Este sitio web es solo para información general y no establece una relación con el cliente, no proporciona una evaluación clínica ni sustituye la atención profesional. Si está atravesando una emergencia de salud mental, llame o envíe un mensaje de texto al 988 (Línea de Crisis y Suicidio) o acuda a la sala de emergencias más cercana. La información de este sitio no debe utilizarse para tomar decisiones médicas, legales o financieras.`,
      },
      {
        heading: 'Comunicaciones por SMS',
        body: `Si opta por recibir comunicación por SMS a través de un formulario web u otro medio, usted acepta recibir mensajes de texto relacionados con la programación de citas, recordatorios de citas y actualizaciones relacionadas. Pueden aplicarse tarifas de mensajes y datos, y la frecuencia varía. Responda STOP en cualquier momento para cancelar su suscripción, o HELP para obtener ayuda. Los detalles sobre cómo se maneja su información se proporcionan en el Aviso de Prácticas de Privacidad de la Práctica, disponible durante la admisión.`,
      },
      {
        heading: 'Descargo de Responsabilidad',
        body: `Este sitio web y su contenido se proporcionan "tal cual", sin garantías de ningún tipo, expresas o implícitas. La Práctica no hace representaciones sobre la integridad, confiabilidad o disponibilidad de la información en este sitio para ningún propósito en particular. En la máxima medida permitida por la ley, la Práctica no es responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar este sitio web.`,
      },
      {
        heading: 'Ley Aplicable',
        body: `Estos términos se rigen por las leyes del Estado de Nueva Jersey, sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa que surja del uso de este sitio web estará sujeta a la jurisdicción de los tribunales de Nueva Jersey.`,
      },
      {
        heading: 'Contacto',
        body: `Las preguntas sobre estos términos pueden dirigirse a través del enlace de reservas en este sitio web.`,
      },
    ],
  },
  languageToggle: {
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Cambiar a español',
  },
};

export const content = { en, es };
