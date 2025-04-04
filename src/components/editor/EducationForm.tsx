
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EducationForm: React.FC = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const { educations } = resumeData;

  const handleChange = (id: string, field: string, value: string | boolean | string[]) => {
    updateEducation(id, { [field]: value });
  };

  const handleAchievementChange = (id: string, index: number, value: string) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const achievements = [...education.achievements];
    achievements[index] = value;
    
    // Clean up empty achievements at the end
    while (achievements.length > 1 && !achievements[achievements.length - 1]) {
      achievements.pop();
    }
    
    updateEducation(id, { achievements });
  };

  const handleAddAchievement = (id: string) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const achievements = [...education.achievements, ''];
    updateEducation(id, { achievements });
  };

  const handleRemoveAchievement = (id: string, index: number) => {
    const education = educations.find(edu => edu.id === id);
    if (!education) return;
    
    const achievements = [...education.achievements];
    achievements.splice(index, 1);
    
    // Ensure there's at least one achievement field
    if (achievements.length === 0) {
      achievements.push('');
    }
    
    updateEducation(id, { achievements });
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Education</CardTitle>
        <Button onClick={addEducation} size="sm" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </CardHeader>
      <CardContent>
        {educations.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No education added yet. Click "Add Education" to get started.
          </div>
        ) : (
          <Accordion type="multiple" className="space-y-4">
            {educations.map((education) => (
              <AccordionItem key={education.id} value={education.id} className="border rounded-md p-2">
                <AccordionTrigger className="py-2 px-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">{education.degree || 'New Degree'} in {education.field || 'Field of Study'}</span>
                    <span className="text-sm text-muted-foreground">{education.institution || 'Institution'}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 px-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${education.id}`}>Degree</Label>
                      <Input
                        id={`degree-${education.id}`}
                        value={education.degree}
                        onChange={(e) => handleChange(education.id, 'degree', e.target.value)}
                        placeholder="Bachelor of Science"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`field-${education.id}`}>Field of Study</Label>
                      <Input
                        id={`field-${education.id}`}
                        value={education.field}
                        onChange={(e) => handleChange(education.id, 'field', e.target.value)}
                        placeholder="Computer Science"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${education.id}`}>Institution</Label>
                      <Input
                        id={`institution-${education.id}`}
                        value={education.institution}
                        onChange={(e) => handleChange(education.id, 'institution', e.target.value)}
                        placeholder="University Name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`gpa-${education.id}`}>GPA (Optional)</Label>
                      <Input
                        id={`gpa-${education.id}`}
                        value={education.gpa || ''}
                        onChange={(e) => handleChange(education.id, 'gpa', e.target.value)}
                        placeholder="3.8"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`startDate-${education.id}`}>Start Date</Label>
                      <Input
                        id={`startDate-${education.id}`}
                        type="month"
                        value={education.startDate}
                        onChange={(e) => handleChange(education.id, 'startDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`endDate-${education.id}`}>End Date</Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`currentlyStudying-${education.id}`}
                            checked={education.currentlyStudying}
                            onCheckedChange={(checked) => {
                              handleChange(education.id, 'currentlyStudying', !!checked);
                              if (checked) {
                                handleChange(education.id, 'endDate', '');
                              }
                            }}
                          />
                          <Label htmlFor={`currentlyStudying-${education.id}`} className="text-sm">
                            Currently Enrolled
                          </Label>
                        </div>
                      </div>
                      <Input
                        id={`endDate-${education.id}`}
                        type="month"
                        value={education.endDate}
                        onChange={(e) => handleChange(education.id, 'endDate', e.target.value)}
                        disabled={education.currentlyStudying}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Achievements/Activities</Label>
                      <Button onClick={() => handleAddAchievement(education.id)} size="sm" variant="outline">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                    
                    {education.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={achievement}
                          onChange={(e) => handleAchievementChange(education.id, index, e.target.value)}
                          placeholder="Honor, award or relevant activity..."
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleRemoveAchievement(education.id, index)}
                          disabled={education.achievements.length === 1 && !education.achievements[0]}
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
                      onClick={() => removeEducation(education.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove Education
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

export default EducationForm;
