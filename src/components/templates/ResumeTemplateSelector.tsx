
import React from 'react';
import ProfessionalTemplate from './ProfessionalTemplate';
import ModernTemplate from './ModernTemplate';
import CreativeTemplate from './CreativeTemplate';
import ElegantTemplate from './ElegantTemplate';
import MinimalistTemplate from './MinimalistTemplate';
import TechnicalTemplate from './TechnicalTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import AcademicTemplate from './AcademicTemplate';
import SimpleTemplate from './SimpleTemplate';
import CreativeFullTemplate from './CreativeFullTemplate';
import CompactDarkTemplate from './CompactDarkTemplate';
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
    case 'technical':
      return <TechnicalTemplate data={data} />;
    case 'executive':
      return <ExecutiveTemplate data={data} />;
    case 'academic':
      return <AcademicTemplate data={data} />;
    case 'simple':
      return <SimpleTemplate data={data} />;
    case 'creativeFull':
      return <CreativeFullTemplate data={data} />;
    case 'compactDark':
      return <CompactDarkTemplate data={data} />;
    case 'professional':
    default:
      return <ProfessionalTemplate data={data} />;
  }
};

export default ResumeTemplateSelector;
