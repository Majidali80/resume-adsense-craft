import React, { createContext, useContext, useState } from 'react';
import { ResumeData, initialResumeData } from '@/types/resume';
import { v4 as uuidv4 } from 'uuid';

interface ResumeContextType {
  resumeData: ResumeData;
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<ResumeData['experiences'][0]>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<ResumeData['educations'][0]>) => void;
  removeEducation: (id: string) => void;
  addSkillGroup: () => void;
  updateSkillGroup: (id: string, data: Partial<Omit<ResumeData['skillGroups'][0], 'skills'>>) => void;
  removeSkillGroup: (id: string) => void;
  addSkill: (groupId: string) => void;
  updateSkill: (groupId: string, skillId: string, data: Partial<ResumeData['skillGroups'][0]['skills'][0]>) => void;
  removeSkill: (groupId: string, skillId: string) => void;
  updateTemplate: (templateId: string) => void;
  resetToDemo: () => void;
  uploadProfileImage: (imageUrl: string) => void;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : initialResumeData;
  });

  const saveToLocalStorage = (data: ResumeData) => {
    localStorage.setItem('resumeData', JSON.stringify(data));
  };

  const updatePersonalInfo = (info: Partial<ResumeData['personalInfo']>) => {
    const updated = {
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, ...info }
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const uploadProfileImage = (imageUrl: string) => {
    updatePersonalInfo({ profileImage: imageUrl });
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: 'New Company',
      position: 'Position Title',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      description: '',
      achievements: ['']
    };
    
    const updated = {
      ...resumeData,
      experiences: [newExperience, ...resumeData.experiences]
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const updateExperience = (id: string, data: Partial<ResumeData['experiences'][0]>) => {
    const updated = {
      ...resumeData,
      experiences: resumeData.experiences.map(exp => 
        exp.id === id ? { ...exp, ...data } : exp
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const removeExperience = (id: string) => {
    const updated = {
      ...resumeData,
      experiences: resumeData.experiences.filter(exp => exp.id !== id)
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: 'New Institution',
      degree: 'Degree',
      field: 'Field of Study',
      startDate: '',
      endDate: '',
      currentlyStudying: false,
      gpa: '',
      achievements: ['']
    };
    
    const updated = {
      ...resumeData,
      educations: [newEducation, ...resumeData.educations]
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const updateEducation = (id: string, data: Partial<ResumeData['educations'][0]>) => {
    const updated = {
      ...resumeData,
      educations: resumeData.educations.map(edu => 
        edu.id === id ? { ...edu, ...data } : edu
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const removeEducation = (id: string) => {
    const updated = {
      ...resumeData,
      educations: resumeData.educations.filter(edu => edu.id !== id)
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const addSkillGroup = () => {
    const newSkillGroup = {
      id: uuidv4(),
      name: 'New Skill Group',
      skills: [{ id: uuidv4(), name: 'New Skill', level: 3 }]
    };
    
    const updated = {
      ...resumeData,
      skillGroups: [...resumeData.skillGroups, newSkillGroup]
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const updateSkillGroup = (id: string, data: Partial<Omit<ResumeData['skillGroups'][0], 'skills'>>) => {
    const updated = {
      ...resumeData,
      skillGroups: resumeData.skillGroups.map(group => 
        group.id === id ? { ...group, ...data } : group
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const removeSkillGroup = (id: string) => {
    const updated = {
      ...resumeData,
      skillGroups: resumeData.skillGroups.filter(group => group.id !== id)
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const addSkill = (groupId: string) => {
    const newSkill = { id: uuidv4(), name: 'New Skill', level: 3 };
    
    const updated = {
      ...resumeData,
      skillGroups: resumeData.skillGroups.map(group => 
        group.id === groupId 
          ? { ...group, skills: [...group.skills, newSkill] } 
          : group
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const updateSkill = (groupId: string, skillId: string, data: Partial<ResumeData['skillGroups'][0]['skills'][0]>) => {
    const updated = {
      ...resumeData,
      skillGroups: resumeData.skillGroups.map(group => 
        group.id === groupId 
          ? { 
              ...group, 
              skills: group.skills.map(skill => 
                skill.id === skillId ? { ...skill, ...data } : skill
              ) 
            } 
          : group
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const removeSkill = (groupId: string, skillId: string) => {
    const updated = {
      ...resumeData,
      skillGroups: resumeData.skillGroups.map(group => 
        group.id === groupId 
          ? { ...group, skills: group.skills.filter(skill => skill.id !== skillId) } 
          : group
      )
    };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const updateTemplate = (templateId: string) => {
    const updated = { ...resumeData, selectedTemplate: templateId };
    setResumeData(updated);
    saveToLocalStorage(updated);
  };

  const resetToDemo = () => {
    setResumeData(initialResumeData);
    saveToLocalStorage(initialResumeData);
  };

  const value = {
    resumeData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkillGroup,
    updateSkillGroup,
    removeSkillGroup,
    addSkill,
    updateSkill,
    removeSkill,
    updateTemplate,
    resetToDemo,
    uploadProfileImage,
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === null) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
