
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
    description: 'A contemporary layout with sidebar for skills and contact info.',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'A colorful template with profile photo for creative industries.',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
                <div className="w-full h-32 bg-resume-gray mb-3 rounded flex items-center justify-center">
                  <span className="text-sm">{template.name} Template</span>
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
