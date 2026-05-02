import React, { ElementType } from 'react';
import { Compass, Settings, Zap, Briefcase, Map, Target, CheckCircle, Scale, PenTool, Wrench } from 'lucide-react';

export type SectionData = {
  id: string;
  title: string;
  icon: ElementType;
};

export const SECTION_IDS = {
  OVERVIEW: 'overview',
  FRAME: 'frame',
  EXPERIENCE: 'experience',
  COMPONENTS: 'components',
  PRACTICAL: 'practical',
  USECASES: 'usecases',
  UPGRADES: 'upgrades',
  PROS_CONS: 'pros_cons',
  DECISION: 'decision',
  VERDICT: 'verdict',
  TABLE: 'table',
};

export const sections: SectionData[] = [
  { id: SECTION_IDS.OVERVIEW, title: '1. Overview & Purpose', icon: Compass },
  { id: SECTION_IDS.FRAME, title: '2. Frame & Design', icon: PenTool },
  { id: SECTION_IDS.EXPERIENCE, title: '3. Ride Experience', icon: Zap },
  { id: SECTION_IDS.COMPONENTS, title: '4. Components & Performance', icon: Settings },
  { id: SECTION_IDS.PRACTICAL, title: '5. Practical Features', icon: Briefcase },
  { id: SECTION_IDS.USECASES, title: '6. Real-World Use Cases', icon: Map },
  { id: SECTION_IDS.UPGRADES, title: '7. Upgrade Options', icon: Wrench },
  { id: SECTION_IDS.PROS_CONS, title: '8. Pros and Cons', icon: Scale },
  { id: SECTION_IDS.DECISION, title: '9. Decision Guide', icon: Target },
  { id: SECTION_IDS.VERDICT, title: '10. Final Verdict', icon: CheckCircle },
  { id: SECTION_IDS.TABLE, title: '11. Comparison Table', icon: Settings },
];
