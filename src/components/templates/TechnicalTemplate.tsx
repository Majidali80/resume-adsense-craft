
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, Code, GitBranch, Database } from 'lucide-react';
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

const TechnicalTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 mb-6 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24 border-2 border-blue-400 shadow-lg shadow-blue-500/30">
            {personalInfo.profileImage ? (
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
            ) : (
              <AvatarFallback className="bg-blue-900 text-blue-100 text-xl">
                {getInitials(personalInfo.fullName)}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-blue-300">{personalInfo.fullName}</h1>
            <h2 className="text-xl text-blue-100">{personalInfo.title}</h2>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-3 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
              <Globe className="h-4 w-4 text-blue-400" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
              <Linkedin className="h-4 w-4 text-blue-400" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Technical Skills */}
          {skillGroups.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300">Technical Skills</span>
              </h3>
              
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-4 last:mb-0">
                  <h4 className="text-base font-medium mb-2 text-gray-300">{group.name}</h4>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-blue-300">{skill.level}/5</span>
                          )}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div 
                              className="bg-blue-500 h-1.5 rounded-full" 
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
          
          {/* Education */}
          {educations.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300">Education</span>
              </h3>
              
              {educations.map((edu) => (
                <div key={edu.id} className="mb-4 last:mb-0">
                  <h4 className="text-base font-medium">{edu.degree}</h4>
                  <h5 className="text-sm text-gray-400">{edu.institution}</h5>
                  <div className="text-xs text-gray-500 mt-1">
                    {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                  </div>
                  {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Main content - right side */}
        <div className="md:col-span-2 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Professional Summary</h3>
              <p className="text-sm">{personalInfo.summary}</p>
            </div>
          )}
          
          {/* Experience */}
          {experiences.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <GitBranch className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300">Work Experience</span>
              </h3>
              
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-5 pb-5 border-b border-gray-700 last:border-0 last:pb-0">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-base font-semibold">{exp.position}</h4>
                      <h5 className="text-sm font-medium text-gray-400">{exp.company}</h5>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 md:mt-0 bg-gray-700 px-2 py-0.5 rounded w-fit">
                      {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  
                  {exp.description && <p className="text-sm mt-2">{exp.description}</p>}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1 space-y-1">
                      {exp.achievements.filter(Boolean).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-70 text-xs text-blue-300">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default TechnicalTemplate;
