
import React from 'react';
import ProfessionalTemplate from './ProfessionalTemplate';
import ModernTemplate from './ModernTemplate';
import { ResumeData } from '@/types/resume';

interface ResumeTemplateSelectorProps {
  data: ResumeData;
}

const ResumeTemplateSelector: React.FC<ResumeTemplateSelectorProps> = ({ data }) => {
  const { selectedTemplate } = data;

  switch (selectedTemplate) {
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'professional':
    default:
      return <ProfessionalTemplate data={data} />;
  }
};

export default ResumeTemplateSelector;
