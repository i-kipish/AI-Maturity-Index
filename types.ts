
export type Language = 'RU' | 'EN';

export interface Question {
  id: number;
  text: string;
}

export interface Block {
  id: number;
  title: string;
  questions: Question[];
}

export interface RoadmapStep {
  title: string;
  period: string;
  actions: string[];
}

export interface LevelResult {
  title: string;
  comment: string;
  roadmap: RoadmapStep[];
  nextBestActions: string[];
}

export type MaturityLevel = 'low' | 'limited' | 'pilots' | 'high' | 'ai_model';

export interface I18nContent {
  title: string;
  subtitle: string;
  ctaStart: string;
  ctaCalc: string;
  ctaReset: string;
  ctaPdf: string;
  ctaShare: string;
  shareMessage: string;
  researchTitle: string;
  researchDesc: string;
  researchCta: string;
  aboutMethod: string;
  microcopy: string;
  disclaimer: string;
  footerContact: string;
  blockTip: string;
  scoreLabel: string;
  levelLabel: string;
  breakdownLabel: string;
  roadmapLabel: string;
  nextActionsLabel: string;
  incompleteWarning: string;
  scale: string[];
  levels: Record<MaturityLevel, LevelResult>;
  blocks: Block[];
  developedBy: string;
  telegramLabel: string;
  form: {
    name: string;
    email: string;
    company: string;
    industry: string;
    consent: string;
    newsletter: string;
    submit: string;
  };
}
