
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye } from 'lucide-react';
import PersonalInfoForm from '@/components/editor/PersonalInfoForm';
import ExperienceForm from '@/components/editor/ExperienceForm';
import EducationForm from '@/components/editor/EducationForm';
import SkillsForm from '@/components/editor/SkillsForm';
import TemplateSelector from '@/components/editor/TemplateSelector';
import AdBanner from '@/components/AdBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EditorPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handlePreview = () => {
    navigate('/preview');
    toast({
      title: "Resume preview ready!",
      description: "You can now review your resume and export it as PDF.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Editor Sidebar */}
          <div className="md:w-full">
            <div className="sticky top-20">
              {/* Ad Banner at top of editor */}
              <AdBanner adSlot="4567890123" className="mb-6" />

              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h1 className="text-2xl font-bold mb-6">Resume Builder</h1>
                <p className="text-gray-500 mb-4">
                  Fill in the sections below to create your professional resume. Once you've completed your resume, click "Preview" to see the final result.
                </p>
                <div className="flex justify-end">
                  <Button onClick={handlePreview} className="bg-resume-blue hover:bg-blue-800">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Resume
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="personal" className="mb-6">
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="template">Template</TabsTrigger>
                </TabsList>
                <ScrollArea className="h-full">
                  <TabsContent value="personal">
                    <PersonalInfoForm />
                  </TabsContent>
                  <TabsContent value="experience">
                    <ExperienceForm />
                  </TabsContent>
                  <TabsContent value="education">
                    <EducationForm />
                  </TabsContent>
                  <TabsContent value="skills">
                    <SkillsForm />
                  </TabsContent>
                  <TabsContent value="template">
                    <TemplateSelector />
                  </TabsContent>
                </ScrollArea>
              </Tabs>
              
              {/* Ad Banner at bottom of editor */}
              <AdBanner adSlot="7890123456" className="mb-6" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EditorPage;
