
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

const ElegantTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Header with gold accents */}
      <div className="flex items-center justify-between border-b border-amber-500 pb-6 mb-6">
        <div className="flex items-center gap-6">
          <Avatar className="h-28 w-28 border-2 border-amber-500 shadow-lg shadow-amber-900/30">
            {personalInfo.profileImage ? (
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
            ) : (
              <AvatarFallback className="bg-amber-900 text-amber-100 text-2xl">
                {getInitials(personalInfo.fullName)}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-amber-300">{personalInfo.fullName}</h1>
            <h2 className="text-xl text-amber-100 mt-1">{personalInfo.title}</h2>
          </div>
        </div>
        
        {/* Contact Info - Compact */}
        <div className="text-right space-y-1 hidden md:block">
          {personalInfo.email && (
            <div className="flex items-center justify-end text-sm">
              <span className="text-gray-300">{personalInfo.email}</span>
              <Mail className="h-4 w-4 ml-1 text-amber-400" />
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center justify-end text-sm">
              <span className="text-gray-300">{personalInfo.phone}</span>
              <Phone className="h-4 w-4 ml-1 text-amber-400" />
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center justify-end text-sm">
              <span className="text-gray-300">{personalInfo.location}</span>
              <MapPin className="h-4 w-4 ml-1 text-amber-400" />
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Contact Info */}
      <div className="md:hidden flex flex-wrap gap-3 mb-6 text-sm">
        {personalInfo.email && (
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4 text-amber-400" />
            <span className="text-gray-300">{personalInfo.email}</span>
          </div>
        )}
        {personalInfo.phone && (
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-amber-400" />
            <span className="text-gray-300">{personalInfo.phone}</span>
          </div>
        )}
        {personalInfo.location && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span className="text-gray-300">{personalInfo.location}</span>
          </div>
        )}
      </div>
      
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-1 space-y-6">
          {/* Links */}
          <div className="space-y-3">
            {(personalInfo.website || personalInfo.linkedin) && (
              <div>
                <h3 className="text-base font-semibold text-amber-400 mb-2 border-b border-amber-800">LINKS</h3>
                <div className="space-y-2">
                  {personalInfo.website && (
                    <div className="flex items-center text-sm">
                      <Globe className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-gray-300">{personalInfo.website}</span>
                    </div>
                  )}
                  {personalInfo.linkedin && (
                    <div className="flex items-center text-sm">
                      <Linkedin className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-gray-300">{personalInfo.linkedin}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3 border-b border-amber-800">SKILLS</h3>
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-amber-200">{group.name}</h4>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-700 rounded-full h-1">
                            <div 
                              className="bg-amber-500 h-1 rounded-full" 
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
        
        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-2 border-b border-amber-800">PROFILE</h3>
              <p className="text-sm text-gray-300">{personalInfo.summary}</p>
            </div>
          )}
          
          {/* Experience */}
          {experiences.length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-amber-400 mb-3 border-b border-amber-800">EXPERIENCE</h3>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-amber-200">{exp.position}</h4>
                      <h5 className="text-sm font-medium text-gray-300">{exp.company}</h5>
                    </div>
                    <div className="text-sm text-amber-300 bg-gray-800 px-2 py-0.5 rounded">
                      {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  {exp.description && <p className="text-sm mt-2 text-gray-400">{exp.description}</p>}
                  {exp.achievements.length > 0 && exp.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1 text-gray-400">
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
              <h3 className="text-base font-semibold text-amber-400 mb-3 border-b border-amber-800">EDUCATION</h3>
              {educations.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-amber-200">{edu.degree} in {edu.field}</h4>
                      <h5 className="text-sm font-medium text-gray-300">{edu.institution}</h5>
                    </div>
                    <div className="text-sm text-amber-300 bg-gray-800 px-2 py-0.5 rounded">
                      {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm mt-1 text-gray-400">GPA: {edu.gpa}</p>}
                  {edu.achievements.length > 0 && edu.achievements[0] && (
                    <ul className="list-disc list-inside text-sm mt-2 pl-1 text-gray-400">
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

export default ElegantTemplate;
