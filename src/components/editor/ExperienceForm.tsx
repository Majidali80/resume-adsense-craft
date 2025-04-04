
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ExperienceForm: React.FC = () => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const { experiences } = resumeData;

  const handleChange = (id: string, field: string, value: string | boolean | string[]) => {
    updateExperience(id, { [field]: value });
  };

  const handleAchievementChange = (id: string, index: number, value: string) => {
    const experience = experiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const achievements = [...experience.achievements];
    achievements[index] = value;
    
    // Clean up empty achievements at the end
    while (achievements.length > 1 && !achievements[achievements.length - 1]) {
      achievements.pop();
    }
    
    updateExperience(id, { achievements });
  };

  const handleAddAchievement = (id: string) => {
    const experience = experiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const achievements = [...experience.achievements, ''];
    updateExperience(id, { achievements });
  };

  const handleRemoveAchievement = (id: string, index: number) => {
    const experience = experiences.find(exp => exp.id === id);
    if (!experience) return;
    
    const achievements = [...experience.achievements];
    achievements.splice(index, 1);
    
    // Ensure there's at least one achievement field
    if (achievements.length === 0) {
      achievements.push('');
    }
    
    updateExperience(id, { achievements });
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Work Experience</CardTitle>
        <Button onClick={addExperience} size="sm" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </CardHeader>
      <CardContent>
        {experiences.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No work experience added yet. Click "Add Experience" to get started.
          </div>
        ) : (
          <Accordion type="multiple" className="space-y-4">
            {experiences.map((experience, expIndex) => (
              <AccordionItem key={experience.id} value={experience.id} className="border rounded-md p-2">
                <AccordionTrigger className="py-2 px-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">{experience.position || 'New Position'}</span>
                    <span className="text-sm text-muted-foreground">{experience.company || 'Company'}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 px-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`position-${experience.id}`}>Position</Label>
                      <Input
                        id={`position-${experience.id}`}
                        value={experience.position}
                        onChange={(e) => handleChange(experience.id, 'position', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`company-${experience.id}`}>Company</Label>
                      <Input
                        id={`company-${experience.id}`}
                        value={experience.company}
                        onChange={(e) => handleChange(experience.id, 'company', e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`startDate-${experience.id}`}>Start Date</Label>
                      <Input
                        id={`startDate-${experience.id}`}
                        type="month"
                        value={experience.startDate}
                        onChange={(e) => handleChange(experience.id, 'startDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`endDate-${experience.id}`}>End Date</Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`currentlyWorking-${experience.id}`}
                            checked={experience.currentlyWorking}
                            onCheckedChange={(checked) => {
                              handleChange(experience.id, 'currentlyWorking', !!checked);
                              if (checked) {
                                handleChange(experience.id, 'endDate', '');
                              }
                            }}
                          />
                          <Label htmlFor={`currentlyWorking-${experience.id}`} className="text-sm">
                            Current Position
                          </Label>
                        </div>
                      </div>
                      <Input
                        id={`endDate-${experience.id}`}
                        type="month"
                        value={experience.endDate}
                        onChange={(e) => handleChange(experience.id, 'endDate', e.target.value)}
                        disabled={experience.currentlyWorking}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`description-${experience.id}`}>Job Description</Label>
                    <Textarea
                      id={`description-${experience.id}`}
                      value={experience.description}
                      onChange={(e) => handleChange(experience.id, 'description', e.target.value)}
                      placeholder="Brief description of your role and responsibilities..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Key Achievements</Label>
                      <Button onClick={() => handleAddAchievement(experience.id)} size="sm" variant="outline">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                    
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={achievement}
                          onChange={(e) => handleAchievementChange(experience.id, index, e.target.value)}
                          placeholder="Describe a key achievement..."
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleRemoveAchievement(experience.id, index)}
                          disabled={experience.achievements.length === 1 && !experience.achievements[0]}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2 flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(experience.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove Experience
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceForm;
