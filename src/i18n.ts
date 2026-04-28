export type Language = 'es' | 'en'

export type NavItem = {
  id: string
  label: string
}

export type ProjectText = {
  id: string
  title: string
  description: string
  github: string
  extraRepo?: string
}

export type SiteText = {
  nav: {
    brandSubtitle: string
    homeAria: string
    openNavAria: string
    closeNavAria: string
    langLabelEs: string
    langLabelEn: string
    items: NavItem[]
  }
  hero: {
    pill: string
    title: string
    highlight: string
    subtitle: string
    copy: string
    startProject: string
    viewWork: string
    email: string
    avatarAlt: string
  }
  about: {
    kicker: string
    title: string
    copy: string
    profileKicker: string
    profileSubtitle: string
    terminalLabel: string
    terminalLines: string[]
    skills: {
      frontend: string
      backend: string
      devops: string
    }
    stats: {
      years: string
      projects: string
      curiosity: string
    }
    features: {
      product: { title: string; description: string }
      fullstack: { title: string; description: string }
      support: { title: string; description: string }
      execution: { title: string; description: string }
    }
    cta: {
      accent: string
      text: string
      button: string
    }
  }
  curriculum: {
    kicker: string
    title: string
    subtitle: string
    profile: {
      name: string
      role: string
      summary: string
    }
    contact: {
      label: string
      items: {
        label: string
        value: string
        href?: string
        icon: 'phone' | 'email' | 'link'
      }[]
    }
    highlights: {
      label: string
      items: string[]
    }
    availability: {
      label: string
      items: string[]
    }
    languages: {
      label: string
      items: string[]
    }
    stack: {
      label: string
      groups: {
        label: string
        items: string[]
      }[]
    }
    experience: {
      label: string
      items: {
        role: string
        company: string
        location: string
        period: string
        bullets: string[]
      }[]
    }
    education: {
      label: string
      items: {
        title: string
        institution: string
        period: string
        note?: string
      }[]
    }
  }
  skills: {
    kicker: string
    title: string
    copy: string
    filters: {
      all: string
      frontend: string
      backend: string
      tools: string
    }
    footnote: string
  }
  projects: {
    kicker: string
    title: string
    barLabel: string
    previewLabel: string
    previewCopy: string
    clientCode: string
    backendCode: string
    stack: string
    viewClientCode: string
    viewBackendCode: string
    stackCopy: string
    arrows: {
      left: string
      right: string
    }
    items: ProjectText[]
  }
  contact: {
    kicker: string
    title: string
    copy: string
    panelTitle: string
    panelCopy: string
    name: string
    email: string
    message: string
    send: string
    noEmailAlert: string
    mailSubjectPrefix: string
  }
  modal: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    cancel: string
    send: string
    sending: string
    sentAlert: string
    failedAlert: string
    noEmailAlert: string
    mailSubjectPrefix: string
  }
  chatbot: {
    initialMessage: string
    title: string
    status: string
    close: string
    open: string
    options: {
      about: { label: string; reply: string }
      skills: { label: string; reply: string }
      projects: { label: string; reply: string }
      contact: { label: string; reply: string }
    }
  }
}

export const siteText: Record<Language, SiteText> = {
  es: {
    nav: {
      brandSubtitle: 'frontend y full stack',
      homeAria: 'Ir al inicio',
      openNavAria: 'Abrir navegación',
      closeNavAria: 'Cerrar navegación',
      langLabelEs: 'Castellano',
      langLabelEn: 'Inglés',
      items: [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'curriculum', label: 'Currículum' },
        { id: 'tech-stack', label: 'Stack' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' },
      ],
    },
    hero: {
      pill: 'Pulido visual, rendimiento y mentalidad de producto',
      title: 'Construyo productos digitales',
      highlight: 'que se ven bien y se entregan rápido.',
      subtitle: 'React | TypeScript | UI responsive | Interacciones limpias',
      copy:
        'Diseño y desarrollo interfaces modernas con React y TypeScript, enfocándome en rendimiento, claridad y una experiencia consistente en móvil y escritorio.',
      startProject: 'Empezar proyecto',
      viewWork: 'Ver proyectos',
      email: 'Correo',
      avatarAlt: 'Retrato de Mohcen',
    },
    about: {
      kicker: 'Sobre mí',
      title: 'Un perfil técnico que cuida tanto el detalle visual como la fiabilidad.',
      copy:
        'Mi experiencia combina frontend, desarrollo full stack y soporte IT. Esa mezcla me ayuda a construir interfaces bonitas, estables y pensadas para uso real.',
      profileKicker: 'Perfil',
      profileSubtitle: 'Desarrollador Web y Soporte IT',
      terminalLabel: 'terminal',
      terminalLines: [
        'mohcen@dev:~$ whoami',
        'Desarrollador frontend y especialista en soporte IT',
        'stack: React | Angular | Vue | Django | TypeScript',
      ],
      skills: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps',
      },
      stats: {
        years: 'Año de exp.',
        projects: 'Proyectos',
        curiosity: 'Curiosidad',
      },
      features: {
        product: {
          title: 'Enfoque en producto',
          description: 'Interfaces rápidas y accesibles, con buena jerarquía visual y navegación clara.',
        },
        fullstack: {
          title: 'Rango full stack',
          description: 'Trabajo práctico con React, Angular, Vue, Django y Spring Boot en entregas reales.',
        },
        support: {
          title: 'Soporte IT',
          description: 'Diagnóstico y resolución de incidencias con un enfoque tranquilo y directo.',
        },
        execution: {
          title: 'Ejecución',
          description: 'Priorizo UI consistente, código mantenible y entregas que aguantan en producción.',
        },
      },
      cta: {
        accent: 'Construyamos',
        text: 'algo limpio, rápido y útil.',
        button: 'Hablemos',
      },
    },
    curriculum: {
      kicker: 'Currículum',
      title: 'Resumen profesional',
      subtitle: 'Experiencia, formación y herramientas en una vista clara.',
      profile: {
        name: 'Mohcen Benizza',
        role: 'Desarrollador Web & Soporte IT',
        summary:
          'Soy desarrollador web y software titulado en Desarrollo de Aplicaciones Web, con sólida base en frontend y backend, además de experiencia e interés en soporte técnico e IT. Destaco por mi rápida capacidad de aprendizaje y trabajo en equipo. Estoy motivado para aplicar mis conocimientos y seguir creciendo profesionalmente en áreas técnicas y de soporte.',
      },
      contact: {
        label: 'Contacto',
        items: [
          { label: 'Teléfono', value: '+34 632 423 246', icon: 'phone' },
          { label: 'Email', value: 'mohcenben2001@gmail.com', icon: 'email' },
          {
            label: 'LinkedIn',
            value: 'linkedin.com/in/mohcenbenizza',
            href: 'https://linkedin.com/in/mohcenbenizza',
            icon: 'link',
          },
          { label: 'Portfolio', value: 'mohies.github.io', href: 'https://mohies.github.io', icon: 'link' },
        ],
      },
      highlights: {
        label: 'Aptitudes profesionales',
        items: [
          'Comunicación efectiva',
          'Coordinación de equipos multifuncionales',
          'Resolución de problemas',
          'Dominio del paquete Office',
          'Enfoque en ventas y negocios',
          'Eficacia en la consecución de objetivos',
        ],
      },
      availability: {
        label: 'Más información',
        items: ['Carné de conducir', 'Vehículo propio', 'Disponibilidad total'],
      },
      languages: {
        label: 'Idiomas',
        items: ['Castellano y árabe — Nativo', 'Inglés — Nivel alto', 'Francés — Nivel medio'],
      },
      stack: {
        label: 'Stack técnico',
        groups: [
          { label: 'Lenguajes', items: ['JavaScript', 'Java', 'HTML/CSS3', 'Python', 'PHP'] },
          { label: 'Frameworks', items: ['React', 'Angular', 'Vue.js', 'Django', 'Node.js'] },
          { label: 'Sistemas BD', items: ['MySQL', 'MariaDB', 'Oracle'] },
          { label: 'IDE', items: ['Eclipse', 'NetBeans', 'Visual Studio', 'Visual Studio Code'] },
          {
            label: 'Herramientas y contenedores',
            items: ['Docker', 'Amazon ECS', 'Git', 'GitHub', 'Microsoft Office', 'Amazon Web Services'],
          },
        ],
      },
      experience: {
        label: 'Experiencia laboral',
        items: [
          {
            role: 'Desarrollador Full Stack',
            company: 'Ayesa',
            location: 'Sevilla',
            period: '2025 - Presente',
            bullets: [
              'Desarrollo de interfaces web con React + TypeScript e integración con APIs REST.',
              'Implementación de lógica de negocio, formularios complejos, validaciones y control de acceso.',
              'Diseño y mantenimiento de servicios backend, modelado de entidades/DTOs e integración con base de datos.',
            ],
          },
          {
            role: 'Soporte técnico y administrativo',
            company: 'Upwork',
            location: 'Remoto',
            period: '2022',
            bullets: [
              'Desarrollo de proyectos web para clientes internacionales.',
              'Cumplimiento de plazos y entrega de trabajos de alta calidad.',
              'Gestión de correos electrónicos y calendario.',
              'Atención al cliente y soporte administrativo.',
            ],
          },
        ],
      },
      education: {
        label: 'Datos académicos',
        items: [
          {
            title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
            institution: 'Instituto Público Sevilla',
            period: '2025',
            note: 'Titulación obtenida',
          },
          {
            title: 'Grado en Ingeniería Informática',
            institution: 'Universitat Oberta de Catalunya (UOC)',
            period: '2025 - Actualidad',
          },
          {
            title: 'Estudios en Ingeniería Informática (Tecnologías Informáticas)',
            institution: 'Universidad de Sevilla',
            period: 'Sep 2019 - 2023',
            note: 'No finalizada',
          },
        ],
      },
    },
    skills: {
      kicker: 'Stack',
      title: 'Tecnologías que uso para diseñar, construir y desplegar.',
      copy:
        'No se trata de coleccionar logos. Se trata de elegir una base técnica que permita avanzar rápido sin perder calidad.',
      filters: {
        all: 'Todo',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas',
      },
      footnote: 'UI responsive, animaciones con criterio y entrega práctica.',
    },
    projects: {
      kicker: 'Proyectos',
      title: 'Trabajos seleccionados con buena presentación y usabilidad móvil.',
      barLabel: 'workbench',
      previewLabel: 'Vista previa',
      previewCopy:
        'Esta tarjeta está preparada para screenshots. Mientras tanto mantiene estructura clara, acciones visibles y buen comportamiento en móvil.',
      clientCode: 'Código cliente',
      backendCode: 'Código backend',
      stack: 'Stack',
      viewClientCode: 'Ver código cliente',
      viewBackendCode: 'Ver código backend',
      stackCopy:
        'El layout evita acciones ocultas en pantallas táctiles y mantiene todos los controles importantes accesibles.',
      arrows: {
        left: 'Desplazar proyectos a la izquierda',
        right: 'Desplazar proyectos a la derecha',
      },
      items: [
        {
          id: 'eventia',
          title: 'Eventia - Plataforma de Gestión de Eventos',
          description:
            'Aplicación full stack para gestión de eventos con autenticación, listados, notificaciones por email y panel de administración privado.',
          github: 'https://github.com/mohies/ProyectoIntegrado',
        },
        {
          id: 'angular-juego',
          title: 'RAWG Explorer - Buscador de Juegos en Angular',
          description:
            'Aplicación conectada a la API de RAWG para explorar juegos por plataforma, iniciar sesión y ver detalles, con diseño responsive en Bootstrap.',
          github: 'https://github.com/mohies/AngularJuego',
        },
        {
          id: 'vue-musica',
          title: 'Deezerfy - Streaming de Música con Vue',
          description:
            'Proyecto musical con Vue y API de Deezer para buscar canciones, escuchar previews y explorar álbumes.',
          github: 'https://github.com/mohies/vue',
        },
        {
          id: 'sesiones',
          title: 'Session Manager - Plataforma de Torneos de Videojuegos',
          description:
            'Plataforma para torneos con backend en Django y frontend personalizado: registro de jugadores, brackets, resultados y control seguro de sesión.',
          github: 'https://github.com/mohies/Cliente',
          extraRepo: 'https://github.com/mohies/Sesiones',
        },
      ],
    },
    contact: {
      kicker: 'Contacto',
      title: 'Si encaja el proyecto, hablamos.',
      copy: 'Puedes escribirme por el formulario o usar los enlaces directos de LinkedIn, GitHub y correo.',
      panelTitle: 'Canales directos',
      panelCopy:
        'Disponible para freelance, colaboraciones o puestos de producto. Respondo rápido y con foco en solución.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      noEmailAlert: 'El correo de contacto no está configurado. Añade VITE_CONTACT_EMAIL en .env.',
      mailSubjectPrefix: 'Mensaje de',
    },
    modal: {
      title: 'Contáctame',
      subtitle: 'Mensaje rápido con envío por EmailJS o fallback por correo.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      cancel: 'Cancelar',
      send: 'Enviar',
      sending: 'Enviando...',
      sentAlert: 'Mensaje enviado. Gracias.',
      failedAlert: 'No se pudo enviar el mensaje. Revisa EmailJS e inténtalo de nuevo.',
      noEmailAlert: 'El correo de contacto no está configurado. Añade VITE_CONTACT_EMAIL en .env.',
      mailSubjectPrefix: 'Mensaje de',
    },
    chatbot: {
      initialMessage: 'Hola. Soy el asistente de Mohcen. ¿Qué quieres saber?',
      title: 'Asistente virtual',
      status: 'En línea | modo demo',
      close: 'Cerrar asistente',
      open: 'Abrir asistente',
      options: {
        about: {
          label: 'Perfil',
          reply:
            'Soy Mohcen Benizza, desarrollador web con experiencia en soporte IT. Me enfoco en interfaces responsive y entregas prácticas.',
        },
        skills: {
          label: 'Tecnologías',
          reply:
            'Stack principal: React, Angular, Vue, TypeScript, TailwindCSS, Bootstrap, Django, Spring Boot, PostgreSQL, Docker, AWS y GitHub.',
        },
        projects: {
          label: 'Proyectos',
          reply:
            'Entre mis proyectos están Eventia, RAWG Explorer, Deezerfy y Session Manager. Puedes ver detalles en la sección de proyectos.',
        },
        contact: {
          label: 'Contacto',
          reply:
            'Puedes usar el formulario o mis enlaces de LinkedIn y GitHub en la sección de contacto. Estoy abierto a colaboraciones.',
        },
      },
    },
  },
  en: {
    nav: {
      brandSubtitle: 'frontend and full stack',
      homeAria: 'Go to home',
      openNavAria: 'Open navigation',
      closeNavAria: 'Close navigation',
      langLabelEs: 'Spanish',
      langLabelEn: 'English',
      items: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'curriculum', label: 'Resume' },
        { id: 'tech-stack', label: 'Tech Stack' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      pill: 'UI polish, performance and product thinking',
      title: 'Building digital products',
      highlight: 'that feel sharp and ship fast.',
      subtitle: 'React | TypeScript | Responsive UI | Clean interactions',
      copy:
        'I design and build modern interfaces with React and TypeScript, focusing on performance, clarity and a consistent experience across devices.',
      startProject: 'Start a project',
      viewWork: 'View work',
      email: 'Email',
      avatarAlt: 'Portrait of Mohcen',
    },
    about: {
      kicker: 'About',
      title: 'A builder who cares about both polish and reliability.',
      copy:
        'My background combines frontend development, full stack delivery and IT support. That mix helps me build interfaces that look great and behave well in real scenarios.',
      profileKicker: 'Profile',
      profileSubtitle: 'Web Developer and IT Support',
      terminalLabel: 'terminal',
      terminalLines: [
        'mohcen@dev:~$ whoami',
        'Frontend developer and IT support specialist',
        'stack: React | Angular | Vue | Django | TypeScript',
      ],
      skills: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps',
      },
      stats: {
        years: 'Years Exp',
        projects: 'Projects',
        curiosity: 'Curiosity',
      },
      features: {
        product: {
          title: 'Product focused',
          description: 'Fast, accessible interfaces with clear hierarchy and clean navigation flow.',
        },
        fullstack: {
          title: 'Full stack range',
          description: 'Practical delivery with React, Angular, Vue, Django and Spring Boot.',
        },
        support: {
          title: 'IT support',
          description: 'Troubleshooting and maintenance with a calm, hands-on approach.',
        },
        execution: {
          title: 'Execution',
          description: 'I care about consistency, maintainability and production-ready delivery.',
        },
      },
      cta: {
        accent: 'Lets build',
        text: 'something clean, fast and useful.',
        button: 'Get in touch',
      },
    },
    curriculum: {
      kicker: 'Curriculum',
      title: 'Resume snapshot',
      subtitle: 'Experience, education and tools in one clear view.',
      profile: {
        name: 'Mohcen Benizza',
        role: 'Web Developer & IT Support',
        summary:
          'Certified Web and Software Developer with a strong foundation in frontend and backend development, plus experience and interest in IT support. Known for quick learning and teamwork, motivated to keep growing in technical and support roles.',
      },
      contact: {
        label: 'Contact',
        items: [
          { label: 'Phone', value: '+34 632 423 246', icon: 'phone' },
          { label: 'Email', value: 'mohcenben2001@gmail.com', icon: 'email' },
          {
            label: 'LinkedIn',
            value: 'linkedin.com/in/mohcenbenizza',
            href: 'https://linkedin.com/in/mohcenbenizza',
            icon: 'link',
          },
          { label: 'Portfolio', value: 'mohies.github.io', href: 'https://mohies.github.io', icon: 'link' },
        ],
      },
      highlights: {
        label: 'Professional skills',
        items: [
          'Effective communication',
          'Coordination of multifunctional teams',
          'Problem solving',
          'Mastery of the Office suite',
          'Sales and business focus',
          'Effectiveness in achieving objectives',
        ],
      },
      availability: {
        label: 'Additional info',
        items: ["Driver's license", 'Own vehicle', 'Full availability'],
      },
      languages: {
        label: 'Languages',
        items: ['Spanish & Arabic — Native', 'English — High level', 'French — Intermediate'],
      },
      stack: {
        label: 'Technical stack',
        groups: [
          { label: 'Languages', items: ['JavaScript', 'Java', 'HTML/CSS3', 'Python', 'PHP'] },
          { label: 'Frameworks', items: ['React', 'Angular', 'Vue.js', 'Django', 'Node.js'] },
          { label: 'Databases', items: ['MySQL', 'MariaDB', 'Oracle'] },
          { label: 'IDE', items: ['Eclipse', 'NetBeans', 'Visual Studio', 'Visual Studio Code'] },
          { label: 'Tools & containers', items: ['Docker', 'Amazon ECS', 'Git', 'GitHub', 'Microsoft Office', 'Amazon Web Services'] },
        ],
      },
      experience: {
        label: 'Work experience',
        items: [
          {
            role: 'Full Stack Developer',
            company: 'Ayesa',
            location: 'Seville',
            period: '2025 - Present',
            bullets: [
              'Front-end development with React + TypeScript and REST API integration.',
              'Implementation of business logic, complex forms, validations and access control.',
              'Design and maintenance of backend services, entity/DTO modeling and database integration.',
            ],
          },
          {
            role: 'Technical & administrative support',
            company: 'Upwork',
            location: 'Remote',
            period: '2022',
            bullets: [
              'Development of web projects for international clients.',
              'Meeting deadlines and delivering high-quality work.',
              'Managing emails and calendars.',
              'Customer service and administrative support.',
            ],
          },
        ],
      },
      education: {
        label: 'Education',
        items: [
          {
            title: 'Higher Technician in Web Application Development',
            institution: 'Public Institute Seville',
            period: '2025',
            note: 'Graduated',
          },
          {
            title: 'BSc in Computer Engineering',
            institution: 'Universitat Oberta de Catalunya (UOC)',
            period: '2025 - Present',
          },
          {
            title: 'Computer Engineering Studies (Computer Technologies)',
            institution: 'University of Seville',
            period: 'Sep 2019 - 2023',
            note: 'Unfinished',
          },
        ],
      },
    },
    skills: {
      kicker: 'Stack',
      title: 'Tools that I use to design, build and ship.',
      copy:
        'The goal is not collecting logos. It is choosing a stack that keeps products maintainable, responsive and practical to deliver.',
      filters: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
      },
      footnote: 'Responsive UI, restrained animations, and practical delivery.',
    },
    projects: {
      kicker: 'Projects',
      title: 'Selected work with cleaner presentation and strong mobile behavior.',
      barLabel: 'workbench',
      previewLabel: 'Preview',
      previewCopy:
        'This card is ready for screenshots later, while keeping clear structure, visible actions and mobile-friendly behavior.',
      clientCode: 'Client Code',
      backendCode: 'Backend Code',
      stack: 'Stack',
      viewClientCode: 'View Client Code',
      viewBackendCode: 'View Backend Code',
      stackCopy:
        'The layout avoids hidden actions on touch devices and keeps important controls accessible at all widths.',
      arrows: {
        left: 'Scroll projects left',
        right: 'Scroll projects right',
      },
      items: [
        {
          id: 'eventia',
          title: 'Eventia - Event Management Platform',
          description:
            'Full stack web app for event management with authentication, event listings, email notifications and a private admin panel.',
          github: 'https://github.com/mohies/ProyectoIntegrado',
        },
        {
          id: 'angular-juego',
          title: 'RAWG Explorer - Angular Game Browser',
          description:
            'RAWG API web app built with Angular to filter games by platform, sign in and browse game details with a responsive UI.',
          github: 'https://github.com/mohies/AngularJuego',
        },
        {
          id: 'vue-musica',
          title: 'Deezerfy - Music Streaming with Vue',
          description:
            'Music app built with Vue and Deezer API integration for searching songs, listening to previews and browsing albums.',
          github: 'https://github.com/mohies/vue',
        },
        {
          id: 'sesiones',
          title: 'Session Manager - Video Game Tournament Platform',
          description:
            'Tournament management platform with Django backend and custom frontend, including player registration, brackets and session control.',
          github: 'https://github.com/mohies/Cliente',
          extraRepo: 'https://github.com/mohies/Sesiones',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'If the work fits, lets talk.',
      copy: 'Use the form or reach me directly through LinkedIn, GitHub and email.',
      panelTitle: 'Direct channels',
      panelCopy:
        'Available for freelance work, collaborations and product roles. I focus on fast and practical communication.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      noEmailAlert: 'Contact email is not configured. Add VITE_CONTACT_EMAIL to your .env file.',
      mailSubjectPrefix: 'Message from',
    },
    modal: {
      title: 'Contact me',
      subtitle: 'Quick message modal with EmailJS and email fallback.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      cancel: 'Cancel',
      send: 'Send',
      sending: 'Sending...',
      sentAlert: 'Message sent. Thanks.',
      failedAlert: 'Message could not be sent. Check EmailJS configuration and try again.',
      noEmailAlert: 'Contact email is not configured. Add VITE_CONTACT_EMAIL to your .env file.',
      mailSubjectPrefix: 'Message from',
    },
    chatbot: {
      initialMessage: 'Hi. I am Mohcens assistant. What do you want to know?',
      title: 'Virtual Assistant',
      status: 'Online | Demo mode',
      close: 'Close assistant',
      open: 'Open assistant',
      options: {
        about: {
          label: 'About',
          reply:
            'I am Mohcen Benizza, a web developer with IT support experience. I focus on responsive UI and practical delivery.',
        },
        skills: {
          label: 'Skills',
          reply:
            'Main stack: React, Angular, Vue, TypeScript, TailwindCSS, Bootstrap, Django, Spring Boot, PostgreSQL, Docker, AWS and GitHub.',
        },
        projects: {
          label: 'Projects',
          reply:
            'Featured work includes Eventia, RAWG Explorer, Deezerfy and Session Manager. Check the Projects section for details.',
        },
        contact: {
          label: 'Contact',
          reply:
            'Use the contact form or LinkedIn and GitHub links in the Contact section. I am open to collaborations.',
        },
      },
    },
  },
}
