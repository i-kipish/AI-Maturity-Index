
import { I18nContent, MaturityLevel } from './types';

export const I18N: Record<'RU' | 'EN', I18nContent> = {
  RU: {
    title: "рейтИИнг — готовность компании к внедрению ИИ",
    subtitle: "Быстрая управленческая диагностика: процессы, данные, IT, команда и контроль.",
    ctaStart: "Начать оценку",
    ctaCalc: "Рассчитать результат",
    ctaReset: "Сбросить",
    ctaPdf: "Больше полезных инструментов",
    ctaShare: "Поделиться",
    shareMessage: "Теперь я знаю о том, как использовать ИИ в своем бизнесе. Пройди простой опрос чтобы узнать по ссылке: ",
    researchTitle: "Исследование: Как применять ИИ в малом и среднем бизнесе",
    researchDesc: "Узнайте о том как малый и средний бизнес эффективно использует ИИ в процессах и повышает свою эффективность, исследование центра предпринимательства ВШЭ",
    researchCta: "Получить исследование",
    aboutMethod: "О методике",
    microcopy: "Оцените фактическое состояние — это повысит точность рекомендаций.",
    disclaimer: "Результаты носят рекомендательный характер и не являются финансовой или юридической консультацией.",
    footerContact: "@startup_gsb",
    blockTip: "Оцените текущую практику, а не желаемое состояние.",
    scoreLabel: "Общий балл",
    levelLabel: "Уровень зрелости",
    breakdownLabel: "Разбивка по блокам",
    roadmapLabel: "Дорожная карта развития",
    nextActionsLabel: "Первые шаги (на 2 недели)",
    incompleteWarning: "Пожалуйста, ответьте на все утверждения для точного расчета.",
    developedBy: "разработано в центре предпринимательства ВШЭ",
    telegramLabel: "Мы в Telegram",
    scale: ["Отсутствует", "Фрагментарно", "Не системно", "Постоянно"],
    form: {
      name: "Имя",
      email: "Email",
      company: "Ваша компания / где вы работаете (необязательно)",
      industry: "Сфера деятельности (необязательно)",
      consent: "Согласен на обработку персональных данных",
      newsletter: "Хочу получать анонсы о мероприятиях и новостях центра предпринимательства",
      submit: "Получить исследование"
    },
    levels: {
      low: {
        title: "Низкая готовность",
        comment: "Сейчас потенциал ИИ может быть ограничен организационными и данными факторами. Если начать внедрение без подготовки, эффект, как правило, получается ниже ожидаемого.",
        roadmap: [
          { title: "Управленческая ясность", period: "1–4 недели", actions: ["зафиксировать 3–5 бизнес-целей и метрики результата", "выбрать 2 процесса-кандидата (где есть понятный эффект)"] },
          { title: "Базовая формализация", period: "1–2 месяца", actions: ["описать «как есть» ключевые процессы", "определить источники данных и ответственных"] },
          { title: "Цифровая основа", period: "2–4 месяца", actions: ["убрать ручную консолидацию критичных данных", "настроить регулярную отчётность"] },
          { title: "Первый безопасный пилот", period: "4–6 месяцев", actions: ["выбрать кейс с низкими рисками", "измерить эффект перед масштабированием"] }
        ],
        nextBestActions: ["Определить владельца инициативы и согласовать метрики.", "Выбрать один процесс и описать цикл «как есть».", "Проверить доступность данных для выбранного процесса."]
      },
      limited: {
        title: "Ограниченная готовность",
        comment: "Компания уже может получить пользу от ИИ в поддерживающих функциях. Наилучший результат даёт параллельная работа: пилоты + повышение качества данных.",
        roadmap: [
          { title: "Выбор кейсов", period: "2–4 недели", actions: ["выбор 1-2 кейсов с быстрым эффектом", "критерии: измеримость, низкие риски"] },
          { title: "Подготовка данных", period: "1–2 месяца", actions: ["минимальные требования к качеству данных под кейсы", "настройка прав доступа"] },
          { title: "Пилот и контроль", period: "2–3 месяца", actions: ["внедрение и обучение", "метрики «до/после»"] },
          { title: "Стандартизация", period: "3–6 месяцев", actions: ["регламенты и роли", "расширение на соседние процессы"] }
        ],
        nextBestActions: ["Составить шорт-лист из 3 гипотез для автоматизации.", "Провести аудит данных для наиболее перспективной гипотезы.", "Назначить ответственного за сбор обратной связи."]
      },
      pilots: {
        title: "Готовность к системным пилотам",
        comment: "Есть достаточная основа для запуска проектов с измеримым эффектом. Рекомендуется вести портфель из 3–5 кейсов с приоритизацией по ROI.",
        roadmap: [
          { title: "Портфель инициатив", period: "2–4 недели", actions: ["матрица «эффект/сложность»", "назначение владельцев и KPI"] },
          { title: "Техническая подготовка", period: "1–2 месяца", actions: ["интеграции и доступы", "автоматизированный контроль качества данных"] },
          { title: "Запуск пилотов", period: "2–4 месяца", actions: ["обучение пользователей", "управление изменениями"] },
          { title: "Масштабирование", period: "4–6 месяцев", actions: ["закрепление в процессах", "SLA и мониторинг"] }
        ],
        nextBestActions: ["Ранжировать текущие идеи по матрице ROI/Сложность.", "Сформировать кросс-функциональную рабочую группу.", "Запустить сбор очищенного датасета для первого пилота."]
      },
      high: {
        title: "Высокая готовность",
        comment: "Компания может встроить ИИ в ключевые процессы. Следующий шаг — создать управляемую «систему внедрения»: стандарты, безопасность и масштабирование.",
        roadmap: [
          { title: "Операционная модель", period: "1 месяц", actions: ["роли, правила и стандарты безопасности", "требования к архитектуре"] },
          { title: "ИИ в core-процессах", period: "2–3 месяца", actions: ["продажи, маркетинг или операции: измеримые кейсы"] },
          { title: "Корпоративные ассистенты", period: "3–6 месяцев", actions: ["единые шаблоны и база знаний компании", "контроль доступов"] },
          { title: "Предиктив и оптимизация", period: "6–12 месяцев", actions: ["прогноз спроса и оттока", "оптимизация ресурсов"] }
        ],
        nextBestActions: ["Утвердить политику безопасного использования ИИ.", "Выделить бюджет на масштабирование успешного пилота.", "Провести воркшоп для руководителей по поиску ИИ-кейсов."]
      },
      ai_model: {
        title: "ИИ как элемент бизнес-модели",
        comment: "Компания готова использовать ИИ как стратегический актив. Важно сохранить управляемость: безопасность, экономическая дисциплина и качество данных.",
        roadmap: [
          { title: "ИИ-архитектура", period: "1–2 месяца", actions: ["единая платформа и политики аудита", "автоматизация ML-цикла"] },
          { title: "Продуктовый контур", period: "2–4 месяца", actions: ["упаковка внутренних решений", "создание каталога кейсов"] },
          { title: "Специфичные модели", period: "4–8 месяцев", actions: ["тонкая настройка на доменных данных", "контроль качества ответов"] },
          { title: "Монетизация", period: "8–12 месяцев", actions: ["новые продукты и сервисы на базе ИИ", "выход на внешний рынок"] }
        ],
        nextBestActions: ["Оценить возможность внешнего запуска внутреннего продукта.", "Создать центр компетенций AI/ML.", "Внедрить систему мониторинга дрейфа моделей."]
      }
    },
    blocks: [
      {
        id: 1, title: "Стратегия и бизнес-цели",
        questions: [
          { id: 1, text: "Приоритетные бизнес-цели на горизонте 1–3 лет сформулированы и зафиксированы." },
          { id: 2, text: "Понятно, какие цели может поддержать автоматизация/аналитика." },
          { id: 3, text: "ИИ рассматривается как инструмент эффективности, а не эксперимент." },
          { id: 4, text: "Есть оценка ожидаемого эффекта (выручка/затраты/скорость/качество)." },
          { id: 5, text: "Руководство готово опираться на данные при принятии решений." }
        ]
      },
      {
        id: 2, title: "Бизнес-процессы",
        questions: [
          { id: 6, text: "Ключевые процессы описаны и понятны." },
          { id: 7, text: "Назначены владельцы процессов с ответственностью." },
          { id: 8, text: "Процессы стандартизированы и повторяемы." },
          { id: 9, text: "Есть практика улучшения процессов (регулярно, не разово)." },
          { id: 10, text: "Изменения внедряются управляемо." }
        ]
      },
      {
        id: 3, title: "Данные и аналитика",
        questions: [
          { id: 11, text: "Данные для управления собираются системно." },
          { id: 12, text: "Источники данных определены и единообразны." },
          { id: 13, text: "Данные доступны без ручной консолидации." },
          { id: 14, text: "Есть регулярная управленческая отчётность." },
          { id: 15, text: "Решения подтверждаются метриками." }
        ]
      },
      {
        id: 4, title: "IT и инфраструктура",
        questions: [
          { id: 16, text: "Используются современные системы (учёт, CRM, BI и т.п.)." },
          { id: 17, text: "Интеграции возможны и не являются блокером." },
          { id: 18, text: "Инфраструктура масштабируется под рост." },
          { id: 19, text: "Есть ресурсы для внедрения (внутри или подрядчики)." },
          { id: 20, text: "IT поддерживает развитие, а не ограничивает." }
        ]
      },
      {
        id: 5, title: "Организация и команда",
        questions: [
          { id: 21, text: "Сотрудники готовы работать с цифровыми инструментами." },
          { id: 22, text: "Руководители подразделений поддерживают автоматизацию." },
          { id: 23, text: "Есть базовые компетенции в аналитике/данных." },
          { id: 24, text: "Обучение и развитие компетенций — регулярная практика." },
          { id: 25, text: "Изменения проходят без критического сопротивления." }
        ]
      },
      {
        id: 6, title: "Контроль и риски",
        questions: [
          { id: 26, text: "Есть правила работы с корпоративными данными." },
          { id: 27, text: "Доступы разграничены и контролируются." },
          { id: 28, text: "Информационная безопасность учитывается в проектах." },
          { id: 29, text: "Юридические аспекты данных находятся под контролем." },
          { id: 30, text: "Компания готова внедрять ИИ поэтапно с контролем рисков." }
        ]
      }
    ]
  },
  EN: {
    title: "rAIting — AI Readiness Index",
    subtitle: "A management-grade diagnostic: processes, data, IT, people, and governance.",
    ctaStart: "Start assessment",
    ctaCalc: "Calculate",
    ctaReset: "Reset",
    ctaPdf: "More useful tools",
    ctaShare: "Share",
    shareMessage: "I now know how to use AI in my business. Take this simple survey to find out: ",
    researchTitle: "Research: How to apply AI in SMEs",
    researchDesc: "Discover how small and medium businesses effectively use AI in their processes to boost efficiency, an HSE Center for Entrepreneurship research.",
    researchCta: "Get the research",
    aboutMethod: "Methodology",
    microcopy: "Assess the current reality — it improves the quality of recommendations.",
    disclaimer: "Results are for guidance only and do not constitute financial or legal advice.",
    footerContact: "@startup_gsb",
    blockTip: "Assess current practice, not the desired state.",
    scoreLabel: "Total Score",
    levelLabel: "Maturity Level",
    breakdownLabel: "Block Breakdown",
    roadmapLabel: "Development Roadmap",
    nextActionsLabel: "Quick Wins (Next 2 Weeks)",
    incompleteWarning: "Please answer all statements for an accurate calculation.",
    developedBy: "developed at the HSE Center for Entrepreneurship",
    telegramLabel: "We're on Telegram",
    scale: ["None", "Fragmentary", "Non-systemic", "Systematic"],
    form: {
      name: "Name",
      email: "Email",
      company: "Your company / job title (optional)",
      industry: "Industry (optional)",
      consent: "I agree to the processing of personal data",
      newsletter: "I want to receive announcements and news from the HSE Center",
      submit: "Get Research"
    },
    levels: {
      low: {
        title: "Low Readiness",
        comment: "AI potential may currently be limited by organizational and data factors. Starting without preparation often yields lower results than expected.",
        roadmap: [
          { title: "Management Clarity", period: "1–4 weeks", actions: ["Define 3–5 business goals and KPIs", "Select 2 candidate processes with clear impact"] },
          { title: "Basic Formalization", period: "1–2 months", actions: ["Document 'as-is' core processes", "Identify data sources and owners"] },
          { title: "Digital Foundation", period: "2–4 months", actions: ["Remove manual consolidation of critical data", "Set up regular reporting"] },
          { title: "First Safe Pilot", period: "4–6 months", actions: ["Choose a low-risk use case", "Measure impact before scaling"] }
        ],
        nextBestActions: ["Assign an initiative owner and agree on metrics.", "Select one process and map its 'as-is' cycle.", "Verify data availability for the selected process."]
      },
      limited: {
        title: "Limited Readiness",
        comment: "The company can already benefit from AI in support functions. Parallel work on pilots and data quality typically yields the best result.",
        roadmap: [
          { title: "Case Selection", period: "2–4 weeks", actions: ["Pick 1-2 quick-win cases", "Criteria: measurability, low risk"] },
          { title: "Data Preparation", period: "1–2 months", actions: ["Meet minimum data quality requirements for cases", "Configure access rights"] },
          { title: "Pilot & Control", period: "2–3 months", actions: ["Implementation and training", "Track 'before/after' metrics"] },
          { title: "Standardization", period: "3–6 months", actions: ["Define regulations and roles", "Expand to adjacent processes"] }
        ],
        nextBestActions: ["Shortlist 3 automation hypotheses.", "Audit data for the most promising hypothesis.", "Assign a person to collect user feedback."]
      },
      pilots: {
        title: "Systematic Pilot Readiness",
        comment: "A sufficient foundation exists to launch projects with measurable impact. Maintain a portfolio of 3–5 cases prioritized by ROI.",
        roadmap: [
          { title: "Initiative Portfolio", period: "2–4 weeks", actions: ["Impact/Complexity matrix", "Assign owners and KPIs"] },
          { title: "Tech Preparation", period: "1–2 months", actions: ["Integrations and access setup", "Automated data quality monitoring"] },
          { title: "Launch Pilots", period: "2–4 months", actions: ["User training", "Change management"] },
          { title: "Scaling", period: "4–6 months", actions: ["Embed in processes", "SLA and monitoring"] }
        ],
        nextBestActions: ["Rank current ideas using a ROI/Complexity matrix.", "Form a cross-functional workgroup.", "Start collecting a cleaned dataset for the first pilot."]
      },
      high: {
        title: "High Readiness",
        comment: "The company can embed AI into core processes. The next step is creating a manageable 'deployment system': standards and scaling.",
        roadmap: [
          { title: "Operating Model", period: "1 month", actions: ["Define roles, rules, and security standards", "Architecture requirements"] },
          { title: "AI in Core Processes", period: "2–3 months", actions: ["Sales, marketing, or ops: measurable use cases"] },
          { title: "Corporate Assistants", period: "3–6 months", actions: ["Unified templates and knowledge base", "Access control"] },
          { title: "Predictive & Opti", period: "6–12 months", actions: ["Demand and churn forecasting", "Resource optimization"] }
        ],
        nextBestActions: ["Approve an AI usage security policy.", "Allocate budget for scaling a successful pilot.", "Run an executive workshop to identify AI opportunities."]
      },
      ai_model: {
        title: "AI as Business Model",
        comment: "The company is ready to use AI as a strategic asset. Focus on maintaining control: security, economic discipline, and data quality.",
        roadmap: [
          { title: "AI Architecture", period: "1–2 months", actions: ["Unified platform and audit policies", "ML cycle automation"] },
          { title: "Product Perimeter", period: "2–4 months", actions: ["Package internal solutions", "Create a case catalog"] },
          { title: "Custom Models", period: "4–8 months", actions: ["Fine-tuning on domain data", "Response quality control"] },
          { title: "Monetization", period: "8–12 months", actions: ["New AI-powered products/services", "Market entry"] }
        ],
        nextBestActions: ["Assess the feasibility of launching an internal product externally.", "Establish an AI/ML center of excellence.", "Implement model drift monitoring."]
      }
    },
    blocks: [
      {
        id: 1, title: "Strategy & Business Goals",
        questions: [
          { id: 1, text: "1–3 year business priorities are defined and documented." },
          { id: 2, text: "We know which goals can be supported by automation/analytics." },
          { id: 3, text: "AI is treated as an efficiency lever, not a side experiment." },
          { id: 4, text: "Expected impact is estimated (revenue/cost/speed/quality)." },
          { id: 5, text: "Leadership is ready to make data-informed decisions." }
        ]
      },
      {
        id: 2, title: "Business Processes",
        questions: [
          { id: 6, text: "Core processes are documented and understood." },
          { id: 7, text: "Process owners and accountability are assigned." },
          { id: 8, text: "Processes are standardized and repeatable." },
          { id: 9, text: "Continuous improvement is practiced (not one-off)." },
          { id: 10, text: "Process changes are implemented in a controlled manner." }
        ]
      },
      {
        id: 3, title: "Data & Analytics",
        questions: [
          { id: 11, text: "Management data is collected systematically." },
          { id: 12, text: "Data sources are defined and consistent." },
          { id: 13, text: "Data is accessible without manual consolidation." },
          { id: 14, text: "Regular management reporting is in place." },
          { id: 15, text: "Decisions are backed by metrics." }
        ]
      },
      {
        id: 4, title: "IT & Infrastructure",
        questions: [
          { id: 16, text: "Modern systems are used (ERP/CRM/BI, etc.)." },
          { id: 17, text: "Integrations are feasible and not a blocker." },
          { id: 18, text: "Infrastructure can scale with growth." },
          { id: 19, text: "Implementation capacity exists (in-house or vendors)." },
          { id: 20, text: "IT enables business growth rather than constraining it." }
        ]
      },
      {
        id: 5, title: "Organization & Team",
        questions: [
          { id: 21, text: "Employees are comfortable with digital tools." },
          { id: 22, text: "Functional leaders support automation." },
          { id: 23, text: "Basic data/analytics skills exist." },
          { id: 24, text: "Upskilling is a regular practice." },
          { id: 25, text: "Change adoption is manageable (no critical resistance)." }
        ]
      },
      {
        id: 6, title: "Governance & Risks",
        questions: [
          { id: 26, text: "Rules for handling corporate data are defined." },
          { id: 27, text: "Access control is in place and enforced." },
          { id: 28, text: "Security is built into initiatives." },
          { id: 29, text: "Legal considerations around data are managed." },
          { id: 30, text: "AI can be introduced step-by-step with risk controls." }
        ]
      }
    ]
  }
};
