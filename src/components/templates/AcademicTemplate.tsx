
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, BookOpen, FileText, GraduationCap } from 'lucide-react';
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

const AcademicTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950 text-slate-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 mb-6 border-b border-blue-700">
        <Avatar className="h-32 w-32 border-2 border-blue-600 shadow-lg shadow-blue-900/30">
          {personalInfo.profileImage ? (
            <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
          ) : (
            <AvatarFallback className="bg-blue-900 text-blue-100 text-2xl">
              {getInitials(personalInfo.fullName)}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-serif font-bold text-blue-300">{personalInfo.fullName}</h1>
          <h2 className="text-xl font-serif text-blue-400 mt-1 italic">{personalInfo.title}</h2>
          
          {/* Contact Info in two rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
            {personalInfo.email && (
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-blue-400" />
                <span>{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-blue-400" />
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Research Summary */}
          {personalInfo.summary && (
            <div>
              <h3 className="flex items-center font-serif text-lg font-semibold text-blue-300 mb-2">
                <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                Research Summary
              </h3>
              <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}
          
          {/* Academic Experience or Research Positions */}
          {experiences.length > 0 && (
            <div>
              <h3 className="flex items-center font-serif text-lg font-semibold text-blue-300 mb-4">
                <FileText className="h-5 w-5 mr-2 text-blue-400" />
                Academic Experience
              </h3>
              
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="font-medium">{exp.position}</h4>
                      <h5 className="text-sm text-blue-400 font-serif italic">{exp.company}</h5>
                    </div>
                    <div className="text-xs text-blue-400 mt-1 md:mt-0">
                      {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  
                  {exp.description && (
                    <p className="text-sm mt-2">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-2 space-y-1">
                      {exp.achievements.filter(Boolean).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Education - More prominent in academic template */}
          {educations.length > 0 && (
            <div>
              <h3 className="flex items-center font-serif text-lg font-semibold text-blue-300 mb-4">
                <GraduationCap className="h-5 w-5 mr-2 text-blue-400" />
                Education
              </h3>
              
              {educations.map((edu) => (
                <div key={edu.id} className="mb-5 pb-5 border-b border-blue-900/50 last:border-0 last:pb-0">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="font-medium">{edu.degree} in {edu.field}</h4>
                      <h5 className="text-sm text-blue-400 font-serif italic">{edu.institution}</h5>
                    </div>
                    <div className="text-xs text-blue-400 mt-1 md:mt-0">
                      {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  
                  {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                  
                  {edu.achievements.length > 0 && edu.achievements[0] && (
                    <div className="mt-2">
                      <h6 className="text-xs text-blue-400 italic mb-1">Achievements & Activities:</h6>
                      <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                        {edu.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Skills and Expertise - right column */}
        <div className="space-y-6">
          {skillGroups.length > 0 && (
            <div className="bg-blue-950 border border-blue-900 rounded-md p-4">
              <h3 className="font-serif text-lg font-semibold text-blue-300 mb-4">Areas of Expertise</h3>
              
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-5 last:mb-0">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{group.name}</h4>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-xs text-blue-400">
                              {Array(skill.level).fill('●').join('')}
                              {Array(5 - skill.level).fill('○').join('')}
                            </span>
                          )}
                        </div>
                        {skill.level && !skill.level && (
                          <div className="w-full bg-blue-900/30 rounded-full h-1">
                            <div 
                              className="bg-blue-600 h-1 rounded-full" 
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
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-70 text-xs text-blue-400">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default AcademicTemplate;
