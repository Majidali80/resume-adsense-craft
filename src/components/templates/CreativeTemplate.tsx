
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, User } from 'lucide-react';
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

const CreativeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
      <div className="flex flex-col items-center mb-8">
        {/* Profile Image */}
        <Avatar className="h-24 w-24 border-4 border-teal-500 mb-4">
          {personalInfo.profileImage ? (
            <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
          ) : (
            <AvatarFallback className="bg-teal-100 text-teal-800">
              {getInitials(personalInfo.fullName)}
            </AvatarFallback>
          )}
        </Avatar>
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-teal-800">{personalInfo.fullName}</h1>
        <h2 className="text-xl text-teal-600 mt-1">{personalInfo.title}</h2>
        
        {/* Contact Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-teal-600" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-teal-600" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-teal-600" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-teal-600" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-teal-600" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-8">
          <h3 className="flex items-center text-lg font-semibold text-teal-800 mb-2">
            <User className="h-5 w-5 mr-2" />
            About Me
          </h3>
          <p className="text-sm">{personalInfo.summary}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience */}
          {experiences.length > 0 && (
            <div className="bg-white bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-4 border-b border-teal-200 pb-2">
                Experience
              </h3>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-teal-700">{exp.position}</h4>
                      <h5 className="text-sm font-medium">{exp.company}</h5>
                    </div>
                    <div className="text-sm bg-teal-100 px-2 py-1 rounded text-teal-800">
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
            <div className="bg-white bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-4 border-b border-teal-200 pb-2">
                Education
              </h3>
              {educations.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-semibold text-teal-700">{edu.degree} in {edu.field}</h4>
                      <h5 className="text-sm font-medium">{edu.institution}</h5>
                    </div>
                    <div className="text-sm bg-teal-100 px-2 py-1 rounded text-teal-800">
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
        
        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div className="bg-white bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-4 border-b border-teal-200 pb-2">
                Skills
              </h3>
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-teal-700">{group.name}</h4>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-teal-500 h-1.5 rounded-full" 
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
    </div>
  );
};

export default CreativeTemplate;
