
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SkillsForm: React.FC = () => {
  const { resumeData, addSkillGroup, updateSkillGroup, removeSkillGroup, addSkill, updateSkill, removeSkill } = useResume();
  const { skillGroups } = resumeData;

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Skills</CardTitle>
        <Button onClick={addSkillGroup} size="sm" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Add Skill Group
        </Button>
      </CardHeader>
      <CardContent>
        {skillGroups.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No skill groups added yet. Click "Add Skill Group" to get started.
          </div>
        ) : (
          <Accordion type="multiple" className="space-y-4">
            {skillGroups.map((group) => (
              <AccordionItem key={group.id} value={group.id} className="border rounded-md p-2">
                <AccordionTrigger className="py-2 px-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">{group.name || 'New Skill Group'}</span>
                    <span className="text-sm text-muted-foreground">
                      {group.skills.length} skill{group.skills.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 px-4 space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`groupName-${group.id}`}>Group Name</Label>
                      <Input
                        id={`groupName-${group.id}`}
                        value={group.name}
                        onChange={(e) => updateSkillGroup(group.id, { name: e.target.value })}
                        placeholder="Programming Languages"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <Label>Skills</Label>
                        <Button onClick={() => addSkill(group.id)} size="sm" variant="outline">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Skill
                        </Button>
                      </div>
                      
                      {group.skills.map((skill) => (
                        <div key={skill.id} className="space-y-2 border p-3 rounded-md">
                          <div className="flex items-center justify-between">
                            <Label htmlFor={`skillName-${skill.id}`}>Skill Name</Label>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => removeSkill(group.id, skill.id)}
                              disabled={group.skills.length === 1}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <Input
                            id={`skillName-${skill.id}`}
                            value={skill.name}
                            onChange={(e) => updateSkill(group.id, skill.id, { name: e.target.value })}
                            placeholder="JavaScript"
                          />
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Label htmlFor={`skillLevel-${skill.id}`}>Skill Level</Label>
                              <span className="text-xs text-muted-foreground">
                                {skill.level}/5
                              </span>
                            </div>
                            <Slider
                              id={`skillLevel-${skill.id}`}
                              value={[skill.level || 3]}
                              min={1}
                              max={5}
                              step={1}
                              onValueChange={(values) => updateSkill(group.id, skill.id, { level: values[0] })}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Beginner</span>
                              <span>Expert</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2 flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSkillGroup(group.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove Group
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

export default SkillsForm;
