
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Award, Laptop } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2 text-resume-blue">About ResumeCraft</h1>
            <p className="text-lg text-center text-gray-600 mb-10">Your gateway to professional resume creation</p>
            
            <AdBanner adSlot="2468013578" className="mb-10" />
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At ResumeCraft, we believe that everyone deserves access to professional-quality resume tools that help them stand out in today's competitive job market. 
                Our mission is to empower job seekers by providing intuitive, elegant resume templates and tools that showcase their skills and experience in the best possible light.
              </p>
              <p className="text-gray-700">
                Founded by Majid Ali in 2023, ResumeCraft has helped thousands of professionals across various industries create compelling resumes that get noticed by employers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-resume-blue/10 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-resume-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Professional Templates</h3>
                      <p className="text-gray-600">
                        Carefully designed resume templates that follow industry best practices and ATS-friendly formatting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-resume-blue/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-resume-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">For Everyone</h3>
                      <p className="text-gray-600">
                        Whether you're a recent graduate or a seasoned professional, we have templates suited for all career stages.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-resume-blue/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-resume-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Quality First</h3>
                      <p className="text-gray-600">
                        We prioritize quality in every aspect of our service, from design to user experience and customer support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-resume-blue/10 p-3 rounded-lg">
                      <Laptop className="h-6 w-6 text-resume-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Easy to Use</h3>
                      <p className="text-gray-600">
                        Our intuitive interface makes it simple to create, edit, and download your professional resume.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">How ResumeCraft Helps You</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  In today's digital-first job application process, having a well-designed, ATS-friendly resume is more important than ever. 
                  ResumeCraft helps you create resumes that not only look professional but are also optimized to pass through Applicant Tracking Systems.
                </p>
                <p className="text-gray-700">
                  Our templates are designed by HR professionals and career coaches who understand what employers are looking for in different industries.
                  Whether you're in technology, finance, healthcare, creative fields, or any other sector, we have templates that will help you present your 
                  qualifications effectively.
                </p>
              </div>
            </div>
            
            <AdBanner adSlot="1357924680" className="mb-10" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
