
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, User, Briefcase, GraduationCap, Layers } from 'lucide-react';
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

const CompactDarkTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-black text-zinc-200">
      {/* Accent bar - top */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-800"></div>
      
      {/* Content with padding to accommodate the accent bar */}
      <div className="pt-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-zinc-700">
              {personalInfo.profileImage ? (
                <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
              ) : (
                <AvatarFallback className="bg-zinc-900 text-zinc-400 text-xl">
                  {getInitials(personalInfo.fullName)}
                </AvatarFallback>
              )}
            </Avatar>
            
            <div>
              <h1 className="text-2xl font-bold text-white">{personalInfo.fullName}</h1>
              <h2 className="text-lg text-zinc-400">{personalInfo.title}</h2>
            </div>
          </div>
          
          {/* Contact Info - Compact */}
          <div className="space-y-2 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-zinc-500" />
                <span>{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-zinc-500" />
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Main content - Compact design */}
        <div className="space-y-6">
          {/* Profile */}
          {personalInfo.summary && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-zinc-500" />
                <h3 className="text-base font-medium text-white uppercase">Profile</h3>
              </div>
              <div className="pl-6">
                <p className="text-sm">{personalInfo.summary}</p>
              </div>
            </div>
          )}
          
          {/* Experience */}
          {experiences.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-zinc-500" />
                <h3 className="text-base font-medium text-white uppercase">Experience</h3>
              </div>
              <div className="pl-6 space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h4 className="text-base text-white">{exp.position}</h4>
                        <h5 className="text-sm text-zinc-400">{exp.company}</h5>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1 md:mt-0">
                        {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-sm mt-1">{exp.description}</p>
                    )}
                    
                    {exp.achievements.length > 0 && exp.achievements[0] && (
                      <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
                        {exp.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index} className="text-zinc-300">{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education */}
          {educations.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4 text-zinc-500" />
                <h3 className="text-base font-medium text-white uppercase">Education</h3>
              </div>
              <div className="pl-6 space-y-4">
                {educations.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h4 className="text-base text-white">{edu.degree} in {edu.field}</h4>
                        <h5 className="text-sm text-zinc-400">{edu.institution}</h5>
                      </div>
                      <div className="text-xs text-zinc-500 mt-1 md:mt-0">
                        {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                      </div>
                    </div>
                    
                    {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4 text-zinc-500" />
                <h3 className="text-base font-medium text-white uppercase">Skills</h3>
              </div>
              <div className="pl-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillGroups.map((group) => (
                    <div key={group.id}>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">{group.name}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <div 
                            key={skill.id} 
                            className="px-2 py-0.5 text-xs border border-zinc-800 rounded text-zinc-300 bg-zinc-900"
                          >
                            {skill.name}
                            {skill.level && (
                              <span className="ml-1 text-zinc-500">
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
            </div>
          )}
        </div>
      </div>
      
      {/* Accent bar - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-700"></div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-8 right-4 flex items-center gap-1 opacity-70 text-xs text-zinc-400">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default CompactDarkTemplate;
