
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

const MinimalistTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-[#1A1F2C] text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-8 border-b border-gray-700 pb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Avatar className="h-24 w-24 border border-gray-600">
            {personalInfo.profileImage ? (
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
            ) : (
              <AvatarFallback className="bg-gray-800 text-gray-300 text-xl">
                {getInitials(personalInfo.fullName)}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight">{personalInfo.fullName}</h1>
            <h2 className="text-lg text-gray-400">{personalInfo.title}</h2>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded">
              <Mail className="h-3.5 w-3.5 text-gray-400" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded">
              <Phone className="h-3.5 w-3.5 text-gray-400" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <div>
              <h3 className="text-base uppercase tracking-wider text-gray-400 mb-2">About</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}
          
          {/* Experience */}
          {experiences.length > 0 && (
            <div>
              <h3 className="text-base uppercase tracking-wider text-gray-400 mb-3">Experience</h3>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-5 pb-5 border-b border-gray-700 last:border-0">
                  <div className="flex flex-col md:flex-row justify-between gap-1">
                    <div>
                      <h4 className="text-base font-medium">{exp.position}</h4>
                      <h5 className="text-sm text-gray-400">{exp.company}</h5>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded w-fit">
                      {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  {exp.description && <p className="text-sm mt-2 text-gray-300">{exp.description}</p>}
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1 text-gray-300">
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
            <div>
              <h3 className="text-base uppercase tracking-wider text-gray-400 mb-3">Education</h3>
              {educations.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex flex-col md:flex-row justify-between gap-1">
                    <div>
                      <h4 className="text-base font-medium">{edu.degree} in {edu.field}</h4>
                      <h5 className="text-sm text-gray-400">{edu.institution}</h5>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded w-fit">
                      {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm mt-1 text-gray-300">GPA: {edu.gpa}</p>}
                  {edu.achievements.length > 0 && edu.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1 text-gray-300">
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
        <div className="lg:col-span-1 space-y-6">
          {/* Links */}
          {(personalInfo.website || personalInfo.linkedin) && (
            <div>
              <h3 className="text-base uppercase tracking-wider text-gray-400 mb-2">Links</h3>
              <div className="space-y-2">
                {personalInfo.website && (
                  <div className="flex items-center text-sm">
                    <Globe className="h-3.5 w-3.5 mr-2 text-gray-400" />
                    <span className="text-gray-300">{personalInfo.website}</span>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center text-sm">
                    <Linkedin className="h-3.5 w-3.5 mr-2 text-gray-400" />
                    <span className="text-gray-300">{personalInfo.linkedin}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div>
              <h3 className="text-base uppercase tracking-wider text-gray-400 mb-3">Skills</h3>
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-300">{group.name}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.id} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
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
          )}
        </div>
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-50 text-xs text-gray-400">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default MinimalistTemplate;
