
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

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

const ProfessionalTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  const { personalInfo, experiences, educations, skillGroups } = data;

  return (
    <div className="resume-paper text-resume-darkGray">
      {/* Header */}
      <div className="border-b border-resume-blue pb-4 mb-6">
        <h1 className="text-3xl font-bold text-resume-blue">{personalInfo.fullName}</h1>
        <h2 className="text-xl text-resume-darkGray mt-1">{personalInfo.title}</h2>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-resume-blue" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-blue mb-2">Professional Summary</h3>
          <p className="text-sm">{personalInfo.summary}</p>
        </div>
      )}
      
      {/* Experience */}
      {experiences.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-blue mb-3">Professional Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold">{exp.position}</h4>
                  <h5 className="text-sm font-medium">{exp.company}</h5>
                </div>
                <div className="text-sm text-right">
                  {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
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
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-resume-blue mb-3">Education</h3>
          {educations.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold">{edu.degree} in {edu.field}</h4>
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
      
      {/* Skills */}
      {skillGroups.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-resume-blue mb-3">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.id} className="mb-3">
                <h4 className="text-base font-medium mb-1">{group.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill.id}
                      className="px-2 py-1 text-xs rounded bg-resume-gray"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span 
                              key={i} 
                              className={`inline-block w-1 h-1 rounded-full ml-0.5 ${i < skill.level! ? 'bg-resume-blue' : 'bg-gray-300'}`}
                            />
                          ))}
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
  );
};

export default ProfessionalTemplate;
