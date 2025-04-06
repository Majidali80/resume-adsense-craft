
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
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

const ExecutiveTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Header with gold accents */}
      <div className="border-b-4 border-amber-600 pb-6 mb-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-32 w-32 border-4 border-amber-600 shadow-lg shadow-amber-800/30 mb-4">
            {personalInfo.profileImage ? (
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
            ) : (
              <AvatarFallback className="bg-amber-900 text-amber-100 text-3xl">
                {getInitials(personalInfo.fullName)}
              </AvatarFallback>
            )}
          </Avatar>
          <h1 className="text-4xl font-bold tracking-tight text-amber-400">{personalInfo.fullName}</h1>
          <h2 className="text-xl font-medium text-amber-200 mt-2">{personalInfo.title}</h2>
          
          {/* Contact Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1 text-amber-400" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1 text-amber-400" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-amber-400" />
                <span>{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-1 text-amber-400" />
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-semibold tracking-wide text-amber-400 uppercase">Executive Profile</h3>
          </div>
          <div className="bg-gray-800/60 border-l-4 border-amber-600 pl-4 py-3 italic">
            <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
          </div>
        </div>
      )}
      
      {/* Experience */}
      {experiences.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-semibold tracking-wide text-amber-400 uppercase">Professional Experience</h3>
          </div>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-6 last:mb-0">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <div>
                  <h4 className="text-base font-semibold text-white">{exp.position}</h4>
                  <h5 className="text-sm font-medium text-amber-200">{exp.company}</h5>
                </div>
                <div className="text-xs text-amber-300 font-medium bg-gray-800 px-3 py-1 rounded-full mt-1 md:mt-0 inline-block">
                  {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              
              {exp.description && (
                <p className="text-sm mt-2 text-gray-300">{exp.description}</p>
              )}
              
              {exp.achievements.length > 0 && exp.achievements[0] && (
                <div className="mt-3">
                  <h6 className="text-xs text-amber-300 font-semibold uppercase mb-1">Key Achievements</h6>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                    {exp.achievements.filter(Boolean).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        {educations.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-semibold tracking-wide text-amber-400 uppercase">Education</h3>
            </div>
            
            {educations.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <h4 className="text-base font-semibold">{edu.degree} in {edu.field}</h4>
                <h5 className="text-sm font-medium text-amber-200">{edu.institution}</h5>
                <div className="text-xs text-amber-300 mt-1">
                  {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                </div>
                {edu.gpa && <p className="text-sm mt-1 text-gray-300">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}
        
        {/* Skills */}
        {skillGroups.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-semibold tracking-wide text-amber-400 uppercase">Core Competencies</h3>
            </div>
            
            {skillGroups.map((group) => (
              <div key={group.id} className="mb-4 last:mb-0">
                <h4 className="text-sm font-semibold text-amber-200 mb-2">{group.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-amber-100 border border-amber-700/50"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-70 text-xs text-amber-400">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
