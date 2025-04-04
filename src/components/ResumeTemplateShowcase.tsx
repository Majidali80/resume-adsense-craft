
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, MapPin, Globe, Linkedin, ChevronRight } from 'lucide-react';

const ResumeTemplateShowcase: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter text-resume-blue mb-2">Choose Your Perfect Resume Template</h2>
          <p className="max-w-[700px] mx-auto text-gray-500">
            Our professional templates make it easy to create a stunning resume in minutes.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Professional Template */}
              <CarouselItem>
                <div className="flex flex-col gap-4">
                  <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden">
                    <div className="border-b border-resume-blue pb-4 mb-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 border-2 border-resume-blue">
                          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Professional photo" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div>
                          <h1 className="text-2xl font-bold text-resume-blue">John Peterson</h1>
                          <h2 className="text-lg text-resume-darkGray">Marketing Director</h2>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-resume-blue" />
                          <span>john.peterson@example.com</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1 text-resume-blue" />
                          <span>(555) 123-7890</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <h3 className="text-base font-semibold mb-1">10+ years of experience in digital marketing</h3>
                      <p className="text-gray-600 line-clamp-2">Accomplished marketing professional with expertise in brand development, digital advertising, and team leadership.</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center">Professional Template</h3>
                  <p className="text-center text-gray-500">Classic, elegant design perfect for traditional industries</p>
                </div>
              </CarouselItem>

              {/* Modern Template */}
              <CarouselItem>
                <div className="flex flex-col gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-lg p-6 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 bg-indigo-100 p-5 rounded-lg">
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=4&w=300&h=300&q=80" alt="Professional photo" />
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <h1 className="text-xl font-bold text-center text-indigo-700 mb-4">Sarah Anderson</h1>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-indigo-600" />
                            <span>sarah@example.com</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-indigo-600" />
                            <span>(555) 987-6543</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-xl font-semibold mb-2 text-indigo-700">UX/UI Designer</h2>
                        <p className="text-sm line-clamp-3">Creative designer with a passion for crafting intuitive user experiences and visually appealing interfaces. Strong portfolio of web and mobile applications.</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center">Modern Template</h3>
                  <p className="text-center text-gray-500">Contemporary layout with sidebar, ideal for creative roles</p>
                </div>
              </CarouselItem>

              {/* Creative Template */}
              <CarouselItem>
                <div className="flex flex-col gap-4">
                  <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 shadow-lg rounded-lg p-6 overflow-hidden">
                    <div className="flex flex-col items-center mb-6">
                      <Avatar className="h-20 w-20 border-4 border-emerald-400 mb-3">
                        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2.25&w=300&h=300&q=80" alt="Professional photo" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <h1 className="text-2xl font-bold text-teal-700">Michael Johnson</h1>
                      <h2 className="text-teal-600">Software Engineer</h2>
                    </div>
                    <div className="border-t border-teal-200 pt-4">
                      <div className="flex justify-center gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-teal-600" />
                          <span>michael@example.com</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-1 text-teal-600" />
                          <span>michaelj.dev</span>
                        </div>
                      </div>
                      <div className="bg-teal-100 p-3 rounded-lg">
                        <p className="text-sm text-center">Full-stack developer specializing in React, Node.js, and cloud architecture solutions.</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center">Creative Template</h3>
                  <p className="text-center text-gray-500">Modern design with custom colors for tech and creative fields</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Navigation controls - both desktop and mobile within the Carousel context */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
            
            <div className="md:hidden flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 mx-0" />
              <CarouselNext className="static translate-y-0 mx-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={() => navigate('/editor')}
            size="lg" 
            className="bg-resume-blue hover:bg-blue-800 transition-colors"
          >
            Create Your Resume Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplateShowcase;
