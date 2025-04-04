
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ResumeTemplateProps {
  data: ResumeData;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return 'Present';
  try {
    return format(new Date(dateString), 'MMM yyyy');
  } catch (e) {
    return dateString;
  }
};

const ModernTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  const { personalInfo, experiences, educations, skillGroups } = data;
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="resume-paper relative bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Header - Modern version with sidebar */}
      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <div className="flex-grow">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-resume-blue">{personalInfo.fullName}</h1>
            <h2 className="text-xl text-resume-darkGray mt-1">{personalInfo.title}</h2>
          </div>
          
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 border-b-2 border-resume-lightBlue pb-1">PROFILE</h3>
              <p className="text-sm">{personalInfo.summary}</p>
            </div>
          )}
          
          {/* Experience */}
          {experiences.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-resume-lightBlue pb-1">EXPERIENCE</h3>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-resume-blue">{exp.position}</h4>
                      <h5 className="text-sm font-medium">{exp.company}</h5>
                    </div>
                    <div className="text-sm text-right">
                      {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  {exp.description && <p className="text-sm mt-2">{exp.description}</p>}
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1">
                      {exp.achievements.filter(Boolean).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Education */}
          {educations.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-resume-lightBlue pb-1">EDUCATION</h3>
              {educations.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-resume-blue">{edu.degree} in {edu.field}</h4>
                      <h5 className="text-sm font-medium">{edu.institution}</h5>
                    </div>
                    <div className="text-sm text-right">
                      {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                  {edu.achievements.length > 0 && edu.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1">
                      {edu.achievements.filter(Boolean).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="md:w-1/3 md:pl-6 md:ml-6 md:border-l border-resume-lightBlue">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
              {personalInfo.profileImage ? (
                <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
              ) : (
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {getInitials(personalInfo.fullName)}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
          
          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-resume-lightBlue pb-1">CONTACT</h3>
            <div className="space-y-2">
              {personalInfo.email && (
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-resume-blue" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-resume-blue" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-resume-blue" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2 text-resume-blue" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center text-sm">
                  <Linkedin className="h-4 w-4 mr-2 text-resume-blue" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b-2 border-resume-lightBlue pb-1">SKILLS</h3>
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-4">
                  <h4 className="text-sm font-medium mb-2">{group.name}</h4>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-resume-blue h-1.5 rounded-full" 
                              style={{ width: `${(skill.level / 5) * 100}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 opacity-50 text-xs text-resume-blue">
        Generated with ResumeCraft
      </div>
    </div>
  );
};

export default ModernTemplate;
