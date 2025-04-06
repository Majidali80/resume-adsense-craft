
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

const SimpleTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Header - Simple and clean */}
      <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-800">
        <Avatar className="h-24 w-24 mb-4">
          {personalInfo.profileImage ? (
            <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
          ) : (
            <AvatarFallback className="bg-gray-800 text-gray-300 text-xl">
              {getInitials(personalInfo.fullName)}
            </AvatarFallback>
          )}
        </Avatar>
        
        <h1 className="text-2xl font-bold text-white tracking-tight">{personalInfo.fullName}</h1>
        <h2 className="text-lg text-gray-400 mt-1">{personalInfo.title}</h2>
        
        {/* Simple Contact Row */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-400">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-gray-500" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-gray-500" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-gray-500" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-400">
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-gray-500" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-gray-500" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h3 className="text-base uppercase tracking-wider text-gray-400 mb-2">About</h3>
          <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}
      
      <div className="space-y-8">
        {/* Experience */}
        {experiences.length > 0 && (
          <div>
            <h3 className="text-base uppercase tracking-wider text-gray-400 mb-4">Experience</h3>
            
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-5 last:mb-0">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div>
                    <h4 className="text-base font-medium text-white">{exp.position}</h4>
                    <h5 className="text-sm text-gray-400">{exp.company}</h5>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                
                {exp.description && <p className="text-sm mt-2">{exp.description}</p>}
                
                {exp.achievements.length > 0 && exp.achievements[0] && (
                  <ul className="list-disc list-inside text-sm mt-2 pl-1 space-y-1">
                    {exp.achievements.filter(Boolean).map((achievement, index) => (
                      <li key={index} className="text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {educations.length > 0 && (
          <div>
            <h3 className="text-base uppercase tracking-wider text-gray-400 mb-4">Education</h3>
            
            {educations.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div>
                    <h4 className="text-base font-medium text-white">{edu.degree} in {edu.field}</h4>
                    <h5 className="text-sm text-gray-400">{edu.institution}</h5>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                  </div>
                </div>
                
                {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                
                {edu.achievements.length > 0 && edu.achievements[0] && (
                  <ul className="list-disc list-inside text-sm mt-2 pl-1">
                    {edu.achievements.filter(Boolean).map((achievement, index) => (
                      <li key={index} className="text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Skills */}
        {skillGroups.length > 0 && (
          <div>
            <h3 className="text-base uppercase tracking-wider text-gray-400 mb-4">Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div key={group.id}>
                  <h4 className="text-sm font-medium text-white mb-2">{group.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.id} 
                        className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                      >
                        {skill.name}
                        {skill.level && (
                          <span className="ml-1 text-gray-500">
                            {Array.from({ length: skill.level }).map((_, i) => "•").join("")}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-70 text-xs text-gray-400">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default SimpleTemplate;
