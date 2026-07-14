const translations = {
  hub: {
    en: {
      nav: { projects: 'Projects', about: 'About', stack: 'Stack', github: 'GitHub ↗' },
      hero: {
        badge: 'Fullstack Developer',
        title1: 'Renato',
        title2: 'Frassa',
        subtitle: 'Building digital experiences with clean code and thoughtful design. This is my landing page portfolio.',
        cta1: 'View Projects',
        cta2: 'GitHub Profile ↗'
      },
      projects: {
        badge: 'Portfolio',
        title: 'Featured Projects',
        subtitle: 'Each project showcases a different design approach and industry. Built with React and Tailwind CSS.',
        items: {
          agency: { subtitle: 'Agency Software', description: 'Dark-themed agency site with client logos, process timeline, and project showcase.', tags: ['React', 'Tailwind', 'Dark Mode'] },
          crm: { subtitle: 'SaaS Product', description: 'Clean SaaS landing with dashboard mockup, pricing tiers, and customer testimonials.', tags: ['React', 'Tailwind', 'Responsive'] },
          restaurant: { subtitle: 'Restaurant', description: 'Editorial restaurant page with chef story, seasonal menu, and reservation system.', tags: ['React', 'Tailwind', 'Typography'] },
          clothing: { subtitle: 'Fashion Store', description: 'Minimalist fashion e-commerce with lookbook gallery, sale section, and newsletter.', tags: ['React', 'Tailwind', 'E-commerce'] },
          education: { subtitle: 'Education', description: 'Outcome-focused bootcamp page with program cards, stats, and admission flow.', tags: ['React', 'Tailwind', 'Education'] }
        }
      },
      about: {
        badge: 'About Me',
        title: 'Developer who cares about the details.',
        p1: "I'm Renato Frassa, a fullstack developer focused on building clean, performant web applications. I believe great software is equal parts engineering and design.",
        p2: 'This portfolio showcases landing pages built with React, Vite, and Tailwind CSS — each one demonstrating a different industry, style, and approach to digital experiences.',
        p3: "Currently open to opportunities and collaborations. If you're building something interesting, let's talk.",
        github: 'GitHub',
        email: 'Email Me',
        role: 'Fullstack Developer'
      },
      stack: {
        badge: 'Tech Stack',
        title: 'Tools I work with.'
      },
      contact: {
        title: "Let's build something.",
        subtitle: "Got a project idea or just want to connect? I'm always open to new opportunities and interesting conversations.",
        email: 'renatofrassa09@gmail.com'
      },
      footer: { copyright: 'All rights reserved.', github: 'GitHub', email: 'Email' }
    },
    pt: {
      nav: { projects: 'Projetos', about: 'Sobre', stack: 'Stack', github: 'GitHub ↗' },
      hero: {
        badge: 'Desenvolvedor Fullstack',
        title1: 'Renato',
        title2: 'Frassa',
        subtitle: 'Construindo experiências digitais com código limpo e design pensado. Este é o meu portfólio de landing pages.',
        cta1: 'Ver Projetos',
        cta2: 'Perfil no GitHub ↗'
      },
      projects: {
        badge: 'Portfólio',
        title: 'Projetos em Destaque',
        subtitle: 'Cada projeto demonstra uma abordagem de design e indústria diferente. Construído com React e Tailwind CSS.',
        items: {
          agency: { subtitle: 'Agência de Software', description: 'Site de agência dark-themed com logos de clientes, timeline de processo e showcase de projetos.', tags: ['React', 'Tailwind', 'Dark Mode'] },
          crm: { subtitle: 'Produto SaaS', description: 'Landing SaaS limpa com mockup de dashboard, tiers de preço e depoimentos de clientes.', tags: ['React', 'Tailwind', 'Responsivo'] },
          restaurant: { subtitle: 'Restaurante', description: 'Página editorial de restaurante com história do chef, menu sazonal e sistema de reservas.', tags: ['React', 'Tailwind', 'Tipografia'] },
          clothing: { subtitle: 'Loja de Roupas', description: 'E-commerce minimalista de moda com galeria lookbook, seção de promoções e newsletter.', tags: ['React', 'Tailwind', 'E-commerce'] },
          education: { subtitle: 'Educação', description: 'Página de bootcamp focada em resultados com cards de programas, stats e fluxo de admissão.', tags: ['React', 'Tailwind', 'Educação'] }
        }
      },
      about: {
        badge: 'Sobre Mim',
        title: 'Desenvolvedor que se importa com os detalhes.',
        p1: 'Sou o Renato Frassa, um desenvolvedor fullstack focado em construir aplicações web limpas e performáticas. Acredito que software excelente é engenharia e design em igual medida.',
        p2: 'Este portfólio demonstra landing pages construídas com React, Vite e Tailwind CSS — cada uma mostrando uma indústria, estilo e abordagem diferentes para experiências digitais.',
        p3: 'Aberto a oportunidades e colaborações. Se você está construindo algo interessante, vamos conversar.',
        github: 'GitHub',
        email: 'Me Envie um Email',
        role: 'Desenvolvedor Fullstack'
      },
      stack: {
        badge: 'Tech Stack',
        title: 'Ferramentas que eu uso.'
      },
      contact: {
        title: 'Vamos construir algo juntos.',
        subtitle: 'Tem uma ideia de projeto ou só quer se conectar? Estou sempre aberto a novas oportunidades e conversas interessantes.',
        email: 'renatofrassa09@gmail.com'
      },
      footer: { copyright: 'Todos os direitos reservados.', github: 'GitHub', email: 'Email' }
    }
  },
  agency: {
    en: {
      nav: { services: 'Services', work: 'Work', process: 'Process', contact: 'Contact', cta: 'Talk to Us' },
      badge: 'Currently accepting 2 new projects for Q3 2026',
      title1: "We don't build websites.",
      title2: 'We build software that makes money.',
      subtitle: 'Full-stack development agency for startups and scale-ups that need production-grade software, not PowerPoint decks.',
      cta1: 'Start a Project',
      cta2: 'See Our Work',
      trusted: 'Trusted by teams building the future',
      servicesBadge: 'What we do',
      servicesTitle: 'Services that actually move the needle.',
      services: [
        { title: 'Web Applications', desc: "Complex dashboards, real-time collaboration tools, and data-heavy platforms. We build the things that off-the-shelf software can't." },
        { title: 'Mobile Apps', desc: "React Native and Flutter apps that feel native. We've shipped apps used by millions — not prototypes that break on launch day." },
        { title: 'Cloud & DevOps', desc: "AWS, GCP, Azure. We set up infrastructure that scales automatically and costs less than what you're paying now." },
        { title: 'Security & Compliance', desc: 'SOC 2, GDPR, HIPAA. We bake compliance into your architecture so you pass audits without the last-minute panic.' }
      ],
      workBadge: 'Selected work',
      workTitle: "Projects we're proud of.",
      processBadge: 'How we work',
      processTitle: 'No mystery. No magic. Just process.',
      process: [
        { title: 'Deep Dive', desc: "We spend the first week understanding your business, not just your requirements doc." },
        { title: 'Architecture', desc: "We design systems that won't need a rewrite in 18 months." },
        { title: 'Build & Ship', desc: 'Two-week sprints with working demos every Friday. No surprises.' },
        { title: 'Launch & Iterate', desc: "We don't disappear after launch. Most clients retain us for ongoing work." }
      ],
      testiBadge: 'What they say',
      testiTitle: 'Words from people who hired us.',
      testi: [
        { text: 'They replaced our entire backend in 3 months. Our previous agency had been "almost done" for 8 months.', name: 'Ricardo Mendes', role: 'CTO, FinTech Startup' },
        { text: "First team that actually understood our constraints. Didn't over-engineer, didn't under-deliver.", name: 'Ana Paula Silva', role: 'VP Engineering, SaaS' },
        { text: 'We went from 2s load time to 200ms. Conversion went up 40%. That paid for the project in the first month.', name: 'Marcos Oliveira', role: 'Founder, E-commerce' }
      ],
      ctaTitle: 'Need a technical partner, not just a vendor?',
      ctaDesc: "We take on 2-3 projects per quarter. If you're building something real, let's talk.",
      ctaBtn: 'Get in Touch'
    },
    pt: {
      nav: { services: 'Serviços', work: 'Projetos', process: 'Processo', contact: 'Contato', cta: 'Fale Conosco' },
      badge: 'Aceitando 2 novos projetos para Q3 2026',
      title1: 'Nós não fazemos websites.',
      title2: 'Nós fazemos software que gera dinheiro.',
      subtitle: 'Agência de desenvolvimento full-stack para startups e scale-ups que precisam de software de produção, não decks de PowerPoint.',
      cta1: 'Iniciar um Projeto',
      cta2: 'Ver Nossos Projetos',
      trusted: 'Confiado por times construindo o futuro',
      servicesBadge: 'O que fazemos',
      servicesTitle: 'Serviços que realmente movem a agulha.',
      services: [
        { title: 'Aplicações Web', desc: 'Dashboards complexos, ferramentas de colaboração em tempo real e plataformas com muitos dados.' },
        { title: 'Apps Mobile', desc: 'Apps React Native e Flutter que parecem nativos. Já lançamos apps usados por milhões.' },
        { title: 'Cloud & DevOps', desc: 'AWS, GCP, Azure. Configuramos infraestrutura que escala automaticamente e custa menos.' },
        { title: 'Segurança & Compliance', desc: 'SOC 2, GDPR, HIPAA. Incorporamos compliance na sua arquitetura para passar nas auditorias.' }
      ],
      workBadge: 'Projetos selecionados',
      workTitle: 'Projetos dos quais temos orgulho.',
      processBadge: 'Como trabalhamos',
      processTitle: 'Sem mistério. Sem mágica. Só processo.',
      process: [
        { title: 'Mergulho Profundo', desc: 'Passamos a primeira semana entendendo o seu negócio, não só o documento de requisitos.' },
        { title: 'Arquitetura', desc: 'Projetamos sistemas que não vão precisar de rewrite em 18 meses.' },
        { title: 'Construir & Entregar', desc: 'Sprints de duas semanas com demos funcionais toda sexta. Sem surpresas.' },
        { title: 'Lançar & Iterar', desc: 'Não desaparecemos após o lançamento. A maioria dos clientes nos mantém para trabalho contínuo.' }
      ],
      testiBadge: 'O que dizem',
      testiTitle: 'Palavras de quem nos contratou.',
      testi: [
        { text: 'Substituíram nosso backend inteiro em 3 meses. A agência anterior estava "quase pronto" há 8 meses.', name: 'Ricardo Mendes', role: 'CTO, Startup FinTech' },
        { text: 'Primeiro time que realmente entendeu nossas restrições. Não super-engenheirou, não entregou menos.', name: 'Ana Paula Silva', role: 'VP Engenharia, SaaS' },
        { text: 'Fomos de 2s de load time para 200ms. Conversão subiu 40%. Isso pagou o projeto no primeiro mês.', name: 'Marcos Oliveira', role: 'Fundador, E-commerce' }
      ],
      ctaTitle: 'Precisa de um parceiro técnico, não só um fornecedor?',
      ctaDesc: 'Pegamos 2-3 projetos por trimestre. Se você está construindo algo real, vamos conversar.',
      ctaBtn: 'Fale Conosco'
    }
  },
  crm: {
    en: {
      nav: { features: 'Features', pricing: 'Pricing', customers: 'Customers', cta: 'Start Free Trial' },
      trial: 'Free 14-day trial · No credit card · Cancel anytime',
      title1: "Your CRM shouldn't need",
      title2: 'a user manual.',
      subtitle: "Pipeline management that your sales team will actually adopt. Built for teams who'd rather close deals than learn software.",
      cta1: 'Start Free Trial',
      cta2: 'See How It Works',
      featuresBadge: 'Features',
      featuresTitle: 'Everything your sales team needs.\nNothing they don\'t.',
      features: [
        { title: 'Pipeline You Can Actually See', desc: 'No more guessing where deals stand. Every opportunity, every stage, every owner — visible in real-time.' },
        { title: 'Contacts That Remember Everything', desc: 'Every email, call, meeting, and note — automatically linked to the right person.' },
        { title: "Follow-ups That Don't Feel Robotic", desc: 'AI-powered sequences that adapt based on prospect behavior.' },
        { title: 'Forecasts You Can Bet Your Bonus On', desc: 'Machine learning trained on your actual closed deals, not industry averages.' }
      ],
      customersBadge: 'Customers',
      customersTitle: 'Teams that switched and never looked back.',
      pricingBadge: 'Pricing',
      pricingTitle: 'Simple pricing. No surprises.',
      pricingDesc: "Start free, upgrade when you're ready.",
      plans: [
        { name: 'Starter', desc: 'For small teams getting organized', cta: 'Start Free Trial' },
        { name: 'Growth', desc: 'For teams that want to close more', badge: 'Most Popular', cta: 'Start Free Trial' },
        { name: 'Scale', desc: 'For organizations that need control', cta: 'Start Free Trial' }
      ],
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to stop losing deals?',
      ctaDesc: 'Join 2,000+ sales teams who switched to a CRM they actually enjoy using.',
      ctaBtn: 'Start Free Trial'
    },
    pt: {
      nav: { features: 'Funcionalidades', pricing: 'Preço', customers: 'Clientes', cta: 'Teste Grátis' },
      trial: 'Teste grátis por 14 dias · Sem cartão de crédito · Cancele quando quiser',
      title1: 'Seu CRM não deveria precisar',
      title2: 'de manual de instruções.',
      subtitle: 'Gestão de pipeline que seu time de vendas vai realmente adotar. Feito para times que preferem fechar deals do que aprender software.',
      cta1: 'Teste Grátis',
      cta2: 'Ver Como Funciona',
      featuresBadge: 'Funcionalidades',
      featuresTitle: 'Tudo que seu time de vendas precisa.\nNada que não precisa.',
      features: [
        { title: 'Pipeline Que Você Realmente Vê', desc: 'Não fique mais chutando onde estão os deals. Cada oportunidade, cada estágio, cada dono — visível em tempo real.' },
        { title: 'Contatos Que Lembra Tudo', desc: 'Cada email, ligação, reunião e nota — automaticamente vinculada à pessoa certa.' },
        { title: 'Follow-ups Que Não Parecem Robóticos', desc: 'Sequências com IA que se adaptam com base no comportamento do prospect.' },
        { title: 'Previsões Que Você Pode Apostar Seu Bônus', desc: 'Machine learning treinado nos seus deals reais fechados, não médias da indústria.' }
      ],
      customersBadge: 'Clientes',
      customersTitle: 'Times que mudaram e nunca olharam para trás.',
      pricingBadge: 'Preço',
      pricingTitle: 'Preço simples. Sem surpresas.',
      pricingDesc: 'Comece grátis, faça upgrade quando estiver pronto.',
      plans: [
        { name: 'Starter', desc: 'Para pequenos times se organizando', cta: 'Teste Grátis' },
        { name: 'Growth', desc: 'Para times que querem fechar mais', badge: 'Mais Popular', cta: 'Teste Grátis' },
        { name: 'Scale', desc: 'Para organizações que precisam de controle', cta: 'Teste Grátis' }
      ],
      faqTitle: 'Perguntas frequentes',
      ctaTitle: 'Pronto para parar de perder deals?',
      ctaDesc: 'Junte-se a mais de 2.000 times de vendas que mudaram para um CRM que realmente gostam de usar.',
      ctaBtn: 'Teste Grátis'
    }
  },
  restaurant: {
    en: {
      nav: { menu: 'Menu', story: 'Story', reservations: 'Reservations', cta: 'Reserve a Table' },
      heroSub: 'São Paulo, since 2018',
      title1: 'Food that makes',
      title2: 'you stop and',
      title3: 'pay attention.',
      subtitle: 'A 40-seat room in Vila Madalena where every dish is rooted in season, soil, and a chef who cares more about flavor than awards.',
      cta1: 'Reserve Your Table',
      cta2: 'View the Menu',
      menuBadge: "What we're cooking",
      menuTitle: 'The Menu',
      menuDesc: 'Changes with the seasons. This is summer.',
      sections: ['To Begin', 'The Main Event', 'To Finish'],
      menuNote: 'Menu changes weekly. Dietary requirements? Just tell us when you book.',
      storyBadge: 'Our story',
      storyTitle: 'We cook the way we live — with intention.',
      storyBody: [
        "La Maison started in 2018 as a 12-seat counter in a converted garage. Chef Camila Ferreira had just returned from three years in Copenhagen and Lyon, and she wanted to cook the food she missed — the kind that made her stop and pay attention.",
        "No white tablecloths. No sommelier theater. Just an open kitchen, ingredients from farms she knew by name, and the belief that a Tuesday night dinner should feel as considered as a Saturday celebration.",
        "Seven years later, we're still a 40-seat room. We still source from the same farms. And Camila still comes out of the kitchen every night to ask what you thought."
      ],
      quote: '"I didn\'t want to open a restaurant. I wanted to build a place where people eat well and feel something."',
      teamBadge: 'The people',
      teamTitle: 'Behind the kitchen.',
      reservTitle: 'Come eat with us.',
      reservDesc: "We're open Tuesday through Saturday, 7pm to 11pm. 40 seats. Reservations recommended.",
      ctaTitle: 'Private events & catering',
      ctaDesc: "Celebrating something? We do private dinners for up to 20 guests. Same kitchen, same heart.",
      ctaBtn: 'Inquire About Events'
    },
    pt: {
      nav: { menu: 'Menu', story: 'História', reservations: 'Reservas', cta: 'Reservar Mesa' },
      heroSub: 'São Paulo, desde 2018',
      title1: 'Comida que faz',
      title2: 'você parar e',
      title3: 'prestar atenção.',
      subtitle: 'Uma sala de 40 lugares na Vila Madalena onde cada prato é enraizado na estação, no solo, e em uma chef que se importa mais com sabor do que com prêmios.',
      cta1: 'Reserve Sua Mesa',
      cta2: 'Ver o Menu',
      menuBadge: 'O que estamos cozinhando',
      menuTitle: 'O Menu',
      menuDesc: 'Muda com as estações. Este é o verão.',
      sections: ['Para Começar', 'O Prato Principal', 'Para Finalizar'],
      menuNote: 'O menu muda semanalmente. Restrições alimentares? Só nos avise ao reservar.',
      storyBadge: 'Nossa história',
      storyTitle: 'Cozinhamos como vivemos — com intenção.',
      storyBody: [
        'La Maison começou em 2018 como um balcão de 12 lugares em uma garagem convertida. A chef Camila Ferreira havia retornado de três anos em Copenhague e Lyon, e ela queria cozinhar a comida que sentia falta — o tipo que fazia ela parar e prestar atenção.',
        'Sem toalhas brancas. Sem teatro de sommelier. Só uma cozinha aberta, ingredientes de fazendas que ela conhecia pelo nome, e a crença de que um jantar de terça à noite deveria ser tão considerado quanto uma celebração de sábado.',
        'Sete anos depois, ainda somos uma sala de 40 lugares. Ainda compramos das mesmas fazendas. E Camila ainda sai da cozinha todas as noites para perguntar o que você achou.'
      ],
      quote: '"Eu não queria abrir um restaurante. Eu queria construir um lugar onde as pessoas comem bem e sentem algo."',
      teamBadge: 'As pessoas',
      teamTitle: 'Por trás da cozinha.',
      reservTitle: 'Venha comer com a gente.',
      reservDesc: 'Estamos abertos de terça a sábado, das 19h às 23h. 40 lugares. Reservas recomendadas.',
      ctaTitle: 'Eventos privados & catering',
      ctaDesc: 'Celebrando algo? Fazemos jantares privados para até 20 convidados. Mesma cozinha, mesmo coração.',
      ctaBtn: 'Consultar Sobre Eventos'
    }
  },
  clothing: {
    en: {
      nav: { new: 'New', collections: 'Collections', about: 'About', sale: 'Sale', cta: 'Shop Now' },
      collectionBadge: 'Summer 2026 Collection',
      title1: "Clothes that don't",
      title2: 'try too hard.',
      subtitle: 'Clean lines, considered fabrics, colors that work together without thinking. The kind of wardrobe where everything matches.',
      cta1: 'Shop New Arrivals',
      cta2: 'Our Story',
      newBadge: 'Just dropped',
      newTitle: 'New Arrivals',
      viewAll: 'View All →',
      collectionsBadge: 'Lookbook',
      collectionsTitle: 'Styled by us.',
      aboutBadge: 'What we believe',
      aboutTitle: 'Slow fashion.\nFast mornings.',
      aboutP1: 'Maison started with a frustration: too many clothes, nothing to wear. Every season brought a new "essential" that was obsolete by the next.',
      aboutP2: "We build wardrobes, not collections. 30 pieces per season, each designed to work with everything else. Buy less, wear more, look better.",
      values: ['Fabric First', 'Designed to Last', 'Honest Production'],
      saleBadge: 'Limited time',
      saleTitle: 'Sale',
      newsletter: 'Join the Maison list.',
      newsletterDesc: 'Early access to new drops, exclusive sale previews, and 15% off your first order.',
      newsletterBtn: 'Subscribe',
      ctaTitle: 'Free shipping on orders over $150',
      ctaDesc: 'Easy returns within 30 days. No questions, no hassle.',
      ctaBtn: 'Shop Now'
    },
    pt: {
      nav: { new: 'Novo', collections: 'Coleções', about: 'Sobre', sale: 'Promoção', cta: 'Comprar' },
      collectionBadge: 'Coleção Verão 2026',
      title1: 'Roupas que não',
      title2: 'se esforçam demais.',
      subtitle: 'Linhas limpas, tecidos pensados, cores que funcionam juntas sem pensar. O tipo de guarda-roupa onde tudo combina.',
      cta1: 'Comprar Novidades',
      cta2: 'Nossa História',
      newBadge: 'Acabou de chegar',
      newTitle: 'Novidades',
      viewAll: 'Ver Tudo →',
      collectionsBadge: 'Lookbook',
      collectionsTitle: 'Estilizado por nós.',
      aboutBadge: 'O que acreditamos',
      aboutTitle: 'Moda lenta.\nManhãs rápidas.',
      aboutP1: 'Maison começou com uma frustração: muitas roupas, nada para vestir. Cada temporada trazia uma nova "essencial" que já era obsoleta na próxima.',
      aboutP2: 'Construímos guarda-roupas, não coleções. 30 peças por temporada, cada uma projetada para funcionar com todas as outras. Compre menos, use mais, fique mais bonito.',
      values: ['Tecido em Primeiro', 'Projetado para Durar', 'Produção Honesta'],
      saleBadge: 'Tempo limitado',
      saleTitle: 'Promoção',
      newsletter: 'Junte-se à lista Maison.',
      newsletterDesc: 'Acesso antecipado a novos drops, previews exclusivos de promoção e 15% off na sua primeira compra.',
      newsletterBtn: 'Inscrever-se',
      ctaTitle: 'Frete grátis em compras acima de R$750',
      ctaDesc: 'Devoluções fáceis em 30 dias. Sem perguntas, sem complicação.',
      ctaBtn: 'Comprar Agora'
    }
  },
  education: {
    en: {
      nav: { programs: 'Programs', outcomes: 'Outcomes', admissions: 'Admissions', campus: 'Campus', cta: 'Apply Now' },
      badge: 'Applications open for August 2026 cohort',
      title1: 'Learn skills that',
      title2: 'pay the bills.',
      subtitle: "Career-focused bootcamps designed with Brazil's top companies. No fluff — just the skills employers actually test for.",
      cta1: 'Apply Now',
      cta2: 'Explore Programs',
      programsBadge: 'Programs',
      programsTitle: "Choose your path. We'll get you there.",
      programs: [
        { title: 'Software Engineering', desc: 'Full-stack development with React, Node.js, and cloud deployment.', outcomes: ['96% employment rate', 'Average 3 offers per grad', 'Partners: Google, Nubank, iFood'] },
        { title: 'Data Science & AI', desc: 'Python, ML, deep learning, and real-world projects with industry datasets.', outcomes: ['91% employment rate', 'Salary range: $75k-$120k', 'Partners: Ambev, BTG, Stone'] },
        { title: 'UX/UI Design', desc: 'User research, prototyping, Figma mastery, and design systems.', outcomes: ['93% employment rate', 'Remote-friendly roles', 'Partners: Nubank, QuintoAndar'] },
        { title: 'Digital Marketing', desc: 'Performance marketing, SEO, analytics, and growth strategies.', outcomes: ['89% employment rate', 'Freelance-friendly', 'Partners: Mercado Livre, Amazon'] }
      ],
      outcomesBadge: 'Outcomes',
      outcomesTitle: "Don't take our word for it.",
      testimonials: [
        { text: "I was a bartender 8 months ago. Now I'm building financial products used by 90 million people.", name: 'João Pedro Silva', role: 'Software Engineer @ Nubank', program: 'Software Engineering' },
        { text: 'The curriculum is intense but honest. By week 8, I was solving real problems with real data.', name: 'Mariana Costa', role: 'Data Analyst @ Ambev', program: 'Data Science & AI' },
        { text: 'Got my offer before graduation. The career support is next level.', name: 'Lucas Fernandes', role: 'Product Designer @ QuintoAndar', program: 'UX/UI Design' }
      ],
      admissionsBadge: 'Admissions',
      admissionsTitle: 'Four steps to a new career.',
      campusBadge: 'Campus',
      campusTitle: 'A space designed for learning.',
      campusP1: 'Our campus in Pinheiros, São Paulo is built for collaboration. Open workspaces, quiet focus rooms, meeting pods, and a coffee bar.',
      campusP2: 'We also run fully remote cohorts for students outside São Paulo. Same curriculum, same outcomes, same community.',
      campusCta1: 'Schedule a Visit',
      campusCta2: 'Virtual Tour',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to invest in yourself?',
      ctaDesc: 'Applications close August 15th. Early enrollment gets priority for scholarship consideration.',
      ctaBtn: 'Start Your Application'
    },
    pt: {
      nav: { programs: 'Programas', outcomes: 'Resultados', admissions: 'Admissão', campus: 'Campus', cta: 'Inscreva-se' },
      badge: 'Inscrições abertas para o cohort de agosto de 2026',
      title1: 'Aprenda habilidades que',
      title2: 'pagam as contas.',
      subtitle: 'Bootcamps focados em carreira projetados com as melhores empresas do Brasil. Sem enrolação — só as habilidades que empregadores realmente testam.',
      cta1: 'Inscreva-se',
      cta2: 'Explorar Programas',
      programsBadge: 'Programas',
      programsTitle: 'Escolha seu caminho. Nós te levamos lá.',
      programs: [
        { title: 'Engenharia de Software', desc: 'Desenvolvimento full-stack com React, Node.js e deploy em cloud.', outcomes: ['96% de empregabilidade', 'Média de 3 ofertas por formando', 'Parceiros: Google, Nubank, iFood'] },
        { title: 'Data Science & IA', desc: 'Python, ML, deep learning e projetos reais com dados de empresas.', outcomes: ['91% de empregabilidade', 'Faixa salarial: R$35k-R$55k', 'Parceiros: Ambev, BTG, Stone'] },
        { title: 'UX/UI Design', desc: 'Pesquisa com usuários, prototipação, domínio de Figma e design systems.', outcomes: ['93% de empregabilidade', 'Cargos remote-friendly', 'Parceiros: Nubank, QuintoAndar'] },
        { title: 'Marketing Digital', desc: 'Marketing de performance, SEO, analytics e estratégias de crescimento.', outcomes: ['89% de empregabilidade', 'Freelance-friendly', 'Parceiros: Mercado Livre, Amazon'] }
      ],
      outcomesBadge: 'Resultados',
      outcomesTitle: 'Não acredite apenas na nossa palavra.',
      testimonials: [
        { text: 'Eu era bartender 8 meses atrás. Agora construo produtos financeiros usados por 90 milhões de pessoas.', name: 'João Pedro Silva', role: 'Engenheiro de Software @ Nubank', program: 'Engenharia de Software' },
        { text: 'O currículo é intenso mas honesto. Na semana 8, eu já estava resolvendo problemas reais com dados reais.', name: 'Mariana Costa', role: 'Analista de Dados @ Ambev', program: 'Data Science & IA' },
        { text: 'Recebi minha oferta antes da formatura. O suporte de carreira é outro nível.', name: 'Lucas Fernandes', role: 'Product Designer @ QuintoAndar', program: 'UX/UI Design' }
      ],
      admissionsBadge: 'Admissão',
      admissionsTitle: 'Quatro passos para uma nova carreira.',
      campusBadge: 'Campus',
      campusTitle: 'Um espaço projetado para aprender.',
      campusP1: 'Nosso campus em Pinheiros, São Paulo é feito para colaboração. Espaços abertos, salas de foco, pods de reunião e um café.',
      campusP2: 'Também temos cohorts totalmente remotos para alunos fora de São Paulo. Mesmo currículo, mesmos resultados, mesma comunidade.',
      campusCta1: 'Agendar uma Visita',
      campusCta2: 'Tour Virtual',
      faqTitle: 'Perguntas frequentes',
      ctaTitle: 'Pronto para investir em você mesmo?',
      ctaDesc: 'As inscrições fecham em 15 de agosto. Inscrição antecipada tem prioridade para bolsas de estudo.',
      ctaBtn: 'Iniciar Sua Inscrição'
    }
  }
}

export default translations
