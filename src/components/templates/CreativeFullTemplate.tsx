
import React from 'react';
import { ResumeData } from '@/types/resume';
import { format } from 'date-fns';
import { Mail, Phone, MapPin, Globe, Linkedin, Palette, Music, Camera, Star } from 'lucide-react';
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

const CreativeFullTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
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
    <div className="resume-paper relative bg-gradient-to-br from-purple-800 via-violet-900 to-indigo-900 text-white overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Header with creative flair */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
        {/* Profile Image with artistic border */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform -rotate-6 scale-105"></div>
          <Avatar className="h-40 w-40 relative border-4 border-white">
            {personalInfo.profileImage ? (
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
            ) : (
              <AvatarFallback className="bg-gradient-to-br from-pink-600 to-purple-700 text-3xl">
                {getInitials(personalInfo.fullName)}
              </AvatarFallback>
            )}
          </Avatar>
        </div>
        
        <div className="md:ml-4 text-center md:text-left flex-1">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-blue-300">
            {personalInfo.fullName}
          </h1>
          <h2 className="text-xl text-purple-200 mt-1">{personalInfo.title}</h2>
          
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
            {personalInfo.email && (
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                <Mail className="h-4 w-4 text-pink-300" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                <Phone className="h-4 w-4 text-pink-300" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                <MapPin className="h-4 w-4 text-pink-300" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="relative z-10 flex justify-center gap-6 mb-8">
        {personalInfo.website && (
          <a href={personalInfo.website} className="group flex flex-col items-center">
            <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
              <Globe className="h-5 w-5 text-blue-300" />
            </div>
            <span className="text-xs mt-1 text-blue-200">Portfolio</span>
          </a>
        )}
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} className="group flex flex-col items-center">
            <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
              <Linkedin className="h-5 w-5 text-blue-300" />
            </div>
            <span className="text-xs mt-1 text-blue-200">LinkedIn</span>
          </a>
        )}
        <div className="group flex flex-col items-center">
          <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
            <Palette className="h-5 w-5 text-blue-300" />
          </div>
          <span className="text-xs mt-1 text-blue-200">Design</span>
        </div>
        <div className="group flex flex-col items-center">
          <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
            <Camera className="h-5 w-5 text-blue-300" />
          </div>
          <span className="text-xs mt-1 text-blue-200">Photography</span>
        </div>
        <div className="group flex flex-col items-center">
          <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
            <Music className="h-5 w-5 text-blue-300" />
          </div>
          <span className="text-xs mt-1 text-blue-200">Music</span>
        </div>
      </div>
      
      {/* Summary */}
      {personalInfo.summary && (
        <div className="relative z-10 bg-white/5 backdrop-blur-md p-6 rounded-xl mb-8">
          <h3 className="text-lg font-semibold text-pink-300 mb-2">About Me</h3>
          <p className="text-sm leading-relaxed italic">{personalInfo.summary}</p>
        </div>
      )}
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          {/* Experience */}
          {experiences.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-white/5 backdrop-blur-md p-4 rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-semibold text-pink-200">{exp.position}</h4>
                        <h5 className="text-sm text-blue-200">{exp.company}</h5>
                      </div>
                      <div className="text-xs bg-white/10 px-2 py-1 rounded-md text-purple-200">
                        {formatDate(exp.startDate)} - {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-sm mt-2 text-gray-300">{exp.description}</p>
                    )}
                    
                    {exp.achievements.length > 0 && exp.achievements[0] && (
                      <ul className="mt-2 space-y-1">
                        {exp.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start">
                            <span className="text-pink-400 mr-2">✦</span>
                            {achievement}
                          </li>
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
              <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Education
              </h3>
              
              <div className="space-y-4">
                {educations.map((edu) => (
                  <div key={edu.id} className="bg-white/5 backdrop-blur-md p-4 rounded-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-semibold text-pink-200">{edu.degree} in {edu.field}</h4>
                        <h5 className="text-sm text-blue-200">{edu.institution}</h5>
                      </div>
                      <div className="text-xs bg-white/10 px-2 py-1 rounded-md text-purple-200">
                        {formatDate(edu.startDate)} - {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
                      </div>
                    </div>
                    
                    {edu.gpa && <p className="text-sm mt-1 text-gray-300">GPA: {edu.gpa}</p>}
                    
                    {edu.achievements.length > 0 && edu.achievements[0] && (
                      <ul className="mt-2 space-y-1">
                        {edu.achievements.filter(Boolean).map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start">
                            <span className="text-pink-400 mr-2">✦</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right column */}
        <div>
          {/* Skills */}
          {skillGroups.length > 0 && (
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Creative Skills
              </h3>
              
              {skillGroups.map((group) => (
                <div key={group.id} className="mb-6 last:mb-0">
                  <h4 className="text-base font-medium text-pink-200 mb-3">{group.name}</h4>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill.name}</span>
                          {skill.level && (
                            <span className="text-sm text-purple-300">
                              {skill.level}/5
                            </span>
                          )}
                        </div>
                        {skill.level && (
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full" 
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
          
          {/* Additional creative section */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl mt-8">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Creative Approach</h3>
            <p className="text-sm italic">
              "Creativity isn't just about making things look beautiful—it's about solving problems 
              in innovative ways. My approach combines technical expertise with artistic vision 
              to deliver results that are both functional and inspiring."
            </p>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-purple-900/50 rounded-full mb-2">
                  <Palette className="h-6 w-6 text-purple-300" />
                </div>
                <p className="text-xs text-purple-200">Design Thinking</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-pink-900/50 rounded-full mb-2">
                  <Camera className="h-6 w-6 text-pink-300" />
                </div>
                <p className="text-xs text-pink-200">Visual Storytelling</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-900/50 rounded-full mb-2">
                  <Music className="h-6 w-6 text-blue-300" />
                </div>
                <p className="text-xs text-blue-200">Creative Direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ResumeCraft Watermark */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-70 text-xs bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
        <span>Created with</span>
        <span className="font-semibold">ResumeCraft</span>
        <span>by Majid Ali</span>
      </div>
    </div>
  );
};

export default CreativeFullTemplate;
