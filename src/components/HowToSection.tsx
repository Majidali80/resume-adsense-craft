
import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Gauge, 
  Download, 
  ArrowRight, 
  Pencil,
  CheckCircle
} from 'lucide-react';

const HowToSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-resume-blue mb-2">How It Works</h2>
          <p className="max-w-[700px] mx-auto text-gray-500">
            Creating a professional resume is easy with our simple step-by-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center bg-resume-blue text-white rounded-full mb-4">
              <User className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Personal Details</h3>
            <p className="text-gray-600 mb-4">
              Start by entering your contact information, professional summary, and other personal details.
            </p>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Full name and professional title</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Contact information (email, phone)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Professional summary highlighting your strengths</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center bg-resume-blue text-white rounded-full mb-4">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Experience & Education</h3>
            <p className="text-gray-600 mb-4">
              List your work experience and educational background in reverse chronological order.
            </p>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Company names, positions, and dates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Key responsibilities and achievements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Degrees, institutions, and graduation dates</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center bg-resume-blue text-white rounded-full mb-4">
              <Gauge className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Skills & Customize</h3>
            <p className="text-gray-600 mb-4">
              Highlight your professional skills and choose a template that best showcases your qualifications.
            </p>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Organize skills by groups (technical, soft skills)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Rate your proficiency in each skill</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-resume-blue mr-2 mt-0.5" />
                <span>Choose a template that fits your industry</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex items-center text-resume-blue font-medium">
            <Pencil className="h-5 w-5 mr-2" />
            <span>Live preview as you type</span>
            <ArrowRight className="h-5 w-5 mx-4" />
            <Download className="h-5 w-5 mr-2" />
            <span>Download as PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
