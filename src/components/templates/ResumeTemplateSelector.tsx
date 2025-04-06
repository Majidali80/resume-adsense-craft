
import React from 'react';
import ProfessionalTemplate from './ProfessionalTemplate';
import ModernTemplate from './ModernTemplate';
import CreativeTemplate from './CreativeTemplate';
import ElegantTemplate from './ElegantTemplate';
import MinimalistTemplate from './MinimalistTemplate';
import { ResumeData } from '@/types/resume';

interface ResumeTemplateSelectorProps {
  data: ResumeData;
}

const ResumeTemplateSelector: React.FC<ResumeTemplateSelectorProps> = ({ data }) => {
  const { selectedTemplate } = data;

  switch (selectedTemplate) {
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'creative':
      return <CreativeTemplate data={data} />;
    case 'elegant':
      return <ElegantTemplate data={data} />;
    case 'minimalist':
      return <MinimalistTemplate data={data} />;
    case 'professional':
    default:
      return <ProfessionalTemplate data={data} />;
  }
};

export default ResumeTemplateSelector;
