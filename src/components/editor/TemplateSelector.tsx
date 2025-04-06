
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const templates = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'A clean, traditional layout ideal for most industries.',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'A contemporary dark layout with sidebar for skills and contact info.',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'A colorful template with profile photo for creative industries.',
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'A sophisticated dark template with gold accents, perfect for executives.',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'A clean, minimalist dark template with modern typography.',
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'A dark theme optimized for tech roles with emphasis on technical skills.',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'A premium dark template with gold accents for leadership positions.',
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Designed for researchers, professors and academic professionals.',
  },
  {
    id: 'simple',
    name: 'Simple',
    description: 'A clean, straightforward dark template for any profession.',
  },
  {
    id: 'creativeFull',
    name: 'Creative Full',
    description: 'A vibrant, colorful template for creative professionals with modern design.',
  },
  {
    id: 'compactDark',
    name: 'Compact Dark',
    description: 'A space-efficient dark template that maximizes content visibility.',
  },
];

const TemplateSelector: React.FC = () => {
  const { resumeData, updateTemplate } = useResume();
  const { selectedTemplate } = resumeData;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Resume Template</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedTemplate}
          onValueChange={updateTemplate}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {templates.map((template) => (
            <div key={template.id}>
              <RadioGroupItem
                value={template.id}
                id={`template-${template.id}`}
                className="sr-only"
              />
              <Label
                htmlFor={`template-${template.id}`}
                className={`flex flex-col items-center border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div 
                  className={`w-full h-32 mb-3 rounded flex items-center justify-center ${
                    template.id === 'professional' ? 'bg-blue-50' :
                    template.id === 'modern' ? 'bg-indigo-900 text-white' :
                    template.id === 'creative' ? 'bg-teal-100' :
                    template.id === 'elegant' ? 'bg-gray-900 text-amber-400' :
                    template.id === 'minimalist' ? 'bg-[#1A1F2C] text-white' :
                    template.id === 'technical' ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-blue-300' :
                    template.id === 'executive' ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-amber-400' :
                    template.id === 'academic' ? 'bg-blue-950 text-blue-300' :
                    template.id === 'simple' ? 'bg-gray-950 text-white' :
                    template.id === 'creativeFull' ? 'bg-gradient-to-br from-purple-800 to-indigo-900 text-white' :
                    'bg-black text-zinc-200'
                  }`}
                >
                  <span className="text-sm">{template.name}</span>
                </div>
                <div className="text-center">
                  <div className="font-medium">{template.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {template.description}
                  </p>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default TemplateSelector;
