
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
                    'bg-[#1A1F2C] text-white'
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
