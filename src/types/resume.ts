
export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  currentlyWorking?: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  currentlyStudying?: boolean;
  gpa?: string;
  achievements: string[];
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // 1-5
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: Skill[];
}

export interface ResumeTemplate {
  id: string;
  name: string;
  previewImage: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  educations: Education[];
  skillGroups: SkillGroup[];
  selectedTemplate: string;
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    title: 'Senior Software Developer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexjohnson.dev',
    linkedin: 'linkedin.com/in/alexjohnson',
    summary: 'Dedicated software developer with 7+ years of experience building web and mobile applications. Passionate about creating clean, efficient code and collaborating with cross-functional teams to deliver high-quality products.',
  },
  experiences: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      startDate: '2020-01',
      endDate: '',
      currentlyWorking: true,
      description: 'Lead developer for multiple client projects focusing on web applications.',
      achievements: [
        'Architected and implemented a cloud-based solution that reduced infrastructure costs by 40%',
        'Led a team of 5 developers to deliver a major product update ahead of schedule',
        'Introduced automated testing procedures that caught 95% of regression bugs',
      ]
    },
    {
      id: '2',
      company: 'Digital Innovations',
      position: 'Software Developer',
      startDate: '2017-03',
      endDate: '2019-12',
      currentlyWorking: false,
      description: 'Developed and maintained multiple web applications for clients across industries.',
      achievements: [
        'Optimized database queries resulting in 60% faster load times',
        'Created a component library that increased development speed by 35%',
        'Mentored 3 junior developers who were promoted within a year',
      ]
    }
  ],
  educations: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2013-09',
      endDate: '2017-05',
      currentlyStudying: false,
      gpa: '3.8',
      achievements: [
        'Graduated with honors',
        'President of Computer Science Society',
        'Published research on machine learning algorithms',
      ]
    }
  ],
  skillGroups: [
    {
      id: '1',
      name: 'Programming Languages',
      skills: [
        { id: '1', name: 'JavaScript', level: 5 },
        { id: '2', name: 'TypeScript', level: 4 },
        { id: '3', name: 'Python', level: 4 },
        { id: '4', name: 'Java', level: 3 },
      ]
    },
    {
      id: '2',
      name: 'Frameworks & Libraries',
      skills: [
        { id: '5', name: 'React', level: 5 },
        { id: '6', name: 'Node.js', level: 4 },
        { id: '7', name: 'Express', level: 4 },
        { id: '8', name: 'Django', level: 3 },
      ]
    }
  ],
  selectedTemplate: 'professional'
};
