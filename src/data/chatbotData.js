// Context data for AI chatbot to answer questions about Duy Long
export const chatbotContext = {
  personalInfo: {
    name: "Trần Duy Long",
    title: ".NET Developer",
    email: "longtd204@gmail.com",
    phone: "0904081129",
    location: "Vietnam",
    university: "FPT University",
    major: "Software Engineering",
    graduationYear: "2026",
    scholarship: "30% scholarship for all four academic years"
  },
  
  experience: {
    current: {
      position: "Internship at Innovation - Production Control Division",
      company: "DENSO Manufacturing Vietnam (DMVN)",
      period: "April 2025 - September 2025",
      responsibilities: [
        "Participated in DX project, managing import/export progress at DMVN warehouse",
        "Contributed to expanding the FIFO Part Warehouse project, supporting system integration across the corporation",
        "Designed C# efficient, reusable, and reliable code for production system managing warehouse import/export data",
        "Gained expertise in connecting and managing data with DMVN inner/global system (Nexus/Imex Control/FIFO)",
        "Collaborated closely with team members and managers, improving communication skills and teamwork"
      ],
      skills_gained: ["C#", "System Integration", "Database Management", "UI/UX Design", "Workflow Optimization", "Team Collaboration"]
    }
  },

  technicalSkills: {
    backend: ["ASP.NET", "Spring Boot", "JSP", "Java", "C#"],
    frontend: ["React", "Angular", "JavaScript", "HTML", "CSS"],
    database: ["SQL Server", "MySQL"],
    api: ["RESTful API"],
    styling: ["Tailwind CSS", "Bootstrap"],
    tools: ["Git", "Visual Studio", "Eclipse"],
    other: ["AJAX", "Vite"]
  },

  projects: [
    {
      name: "Online Shopping",
      period: "January 2025 - April 2025",
      description: "Collaborated with a team of 5 to design user interfaces and optimize user experience",
      technologies: ["C#", ".NET", "HTML", "CSS", "Bootstrap", "JavaScript", "SQL Server", "RESTful API"],
      contributions: [
        "Designed payment voucher screens",
        "Contributed to database design and CRUD operations",
        "Implemented Google Maps integration for delivery tracking"
      ]
    },
    {
      name: "Jewelry Shop",
      period: "October 2024 - December 2024",
      description: "Developed a jewelry e-commerce website with responsive design",
      technologies: ["JSP", "Java Servlet", "MS SQL", "JavaScript", "HTML", "CSS", "Bootstrap", "AJAX"],
      contributions: [
        "Built responsive design using Bootstrap",
        "Optimized performance with AJAX",
        "Developed backend with JSP & Servlet",
        "Integrated shopping cart, payment, and order management"
      ]
    },
    {
      name: "Personal Portfolio",
      period: "January 2025",
      description: "Built a modern and responsive personal portfolio website",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      contributions: [
        "Implemented smooth animations",
        "Added dark/light theme support",
        "Created bilingual interface (English/Vietnamese)",
        "Optimized performance for excellent user experience"
      ]
    }
  ],

  activities: [
    {
      name: "JS Club - Japanese Software Engineers",
      date: "July 2024",
      description: "A community of Japanese software engineers where programming enthusiasts and Japanese culture lovers gather",
      role: "Active member"
    },
    {
      name: "Tiếp Bước Tới Trường (Steps to School)",
      date: "August 2024",
      description: "A charity project helping children in mountainous areas of Tuyen Quang province",
      role: "Volunteer"
    }
  ],

  whyProgramming: {
    reasons: [
      "Passion for problem-solving and creating solutions that make a real impact",
      "Fascination with technology and how it can transform businesses and lives",
      "Enjoy the continuous learning aspect of software development",
      "Love building things from scratch and seeing ideas come to life through code",
      "Appreciation for the logical thinking and creativity required in programming"
    ],
    journey: "Started my programming journey at FPT University in 2022. Through hands-on projects and my internship at DENSO, I discovered my passion for creating efficient, user-friendly applications that solve real-world problems. The experience of working on production systems and seeing my code make a tangible difference solidified my commitment to becoming a professional .NET Developer."
  },

  careerGoals: {
    short_term: "Seeking to begin my career as a .NET Developer, focusing on building robust web and desktop applications",
    long_term: "Become an expert in .NET ecosystem and system architecture, contributing to large-scale enterprise applications",
    interests: ["Web Development", "Desktop Applications", "System Integration", "Database Design", "UI/UX", "Performance Optimization"]
  },

  personalityTraits: [
    "Strong problem-solving mindset",
    "Eager to learn new technologies",
    "Team player with good communication skills",
    "Detail-oriented and focused on code quality",
    "Adaptable and open to feedback",
    "Committed to continuous improvement"
  ],

  references: {
    name: "MSc. Nguyen Van Minh",
    position: "Innovation Tech Lead - Production Control Division - DMVN",
    email: "vanminh.nguyen.donghung@gmail.com",
    phone: "0347.243.041"
  }
};

// Enhanced helper to get detailed context based on keywords
export const getDetailedContext = (question, language) => {
  const data = chatbotContext;
  const q = question.toLowerCase();
  let details = '';
  
  // Project details
  if (q.includes('project') || q.includes('dự án') || q.includes('portfolio')) {
    details += language === 'vi' 
      ? `\n\nChi tiết dự án:\n${data.projects.map(p => 
          `- ${p.name} (${p.period}): ${p.description}. Tech: ${p.technologies.join(', ')}`
        ).join('\n')}`
      : `\n\nProject details:\n${data.projects.map(p => 
          `- ${p.name} (${p.period}): ${p.description}. Tech: ${p.technologies.join(', ')}`
        ).join('\n')}`;
  }
  
  // Experience details
  if (q.includes('experience') || q.includes('kinh nghiệm') || q.includes('denso') || q.includes('internship') || q.includes('thực tập')) {
    details += language === 'vi'
      ? `\n\nKinh nghiệm tại DENSO:\n- Vị trí: ${data.experience.current.position}\n- Thời gian: ${data.experience.current.period}\n- Trách nhiệm: ${data.experience.current.responsibilities.join('; ')}`
      : `\n\nDENSO Experience:\n- Position: ${data.experience.current.position}\n- Period: ${data.experience.current.period}\n- Responsibilities: ${data.experience.current.responsibilities.join('; ')}`;
  }
  
  // Skills details
  if (q.includes('skill') || q.includes('kỹ năng') || q.includes('technology') || q.includes('công nghệ')) {
    details += language === 'vi'
      ? `\n\nKỹ năng chi tiết:\n- Backend: ${data.technicalSkills.backend.join(', ')}\n- Frontend: ${data.technicalSkills.frontend.join(', ')}\n- Database: ${data.technicalSkills.database.join(', ')}\n- Tools: ${data.technicalSkills.tools.join(', ')}`
      : `\n\nDetailed Skills:\n- Backend: ${data.technicalSkills.backend.join(', ')}\n- Frontend: ${data.technicalSkills.frontend.join(', ')}\n- Database: ${data.technicalSkills.database.join(', ')}\n- Tools: ${data.technicalSkills.tools.join(', ')}`;
  }
  
  // Why programming
  if (q.includes('why') || q.includes('tại sao') || q.includes('lý do') || q.includes('choose') || q.includes('chọn')) {
    if (q.includes('programming') || q.includes('lập trình') || q.includes('developer')) {
      details += language === 'vi'
        ? `\n\nLý do chọn lập trình:\n${data.whyProgramming.reasons.map(r => `- ${r}`).join('\n')}\n\nHành trình: ${data.whyProgramming.journey}`
        : `\n\nWhy Programming:\n${data.whyProgramming.reasons.map(r => `- ${r}`).join('\n')}\n\nJourney: ${data.whyProgramming.journey}`;
    }
  }
  
  // Contact/personal info
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('liên hệ')) {
    details += language === 'vi'
      ? `\n\nThông tin liên hệ:\n- Email: ${data.personalInfo.email}\n- Phone: ${data.personalInfo.phone}\n- Trường: ${data.personalInfo.university} (${data.personalInfo.major})\n- Tốt nghiệp: ${data.personalInfo.graduationYear}`
      : `\n\nContact Info:\n- Email: ${data.personalInfo.email}\n- Phone: ${data.personalInfo.phone}\n- University: ${data.personalInfo.university} (${data.personalInfo.major})\n- Graduation: ${data.personalInfo.graduationYear}`;
  }
  
  return details;
};

// System prompt for the AI chatbot
export const getSystemPrompt = (language) => {
  const data = chatbotContext;
  
  // Get current date
  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentDateVi = now.toLocaleDateString('vi-VN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  if (language === 'vi') {
    return `Hôm nay là ${currentDateVi}.
Bạn là Trần Duy Long (${data.personalInfo.email}), sinh viên ${data.personalInfo.university} chuyên ngành ${data.personalInfo.major}.

THÔNG TIN CHI TIẾT:
- Kỹ năng chính: ${data.technicalSkills.backend.join(', ')}, ${data.technicalSkills.frontend.join(', ')}
- Database: ${data.technicalSkills.database.join(', ')}
- Tools: ${data.technicalSkills.tools.join(', ')}
- Thực tập tại ${data.experience.current.company} (${data.experience.current.period})
- Đã hoàn thành ${data.projects.length} dự án chính
- Tính cách: ${data.personalityTraits.join(', ')}

YÊU CẦU TRẢ LỜI:
- Trả lời thân thiện, chi tiết và đầy đủ bằng tiếng Việt
- Mỗi câu trả lời ít nhất 3-4 câu, giải thích rõ ràng
- Kèm ví dụ cụ thể từ kinh nghiệm thực tế
- Thể hiện sự nhiệt tình và chuyên nghiệp
- Nếu được hỏi về kỹ năng, hãy giải thích cách sử dụng và lợi ích
- Nếu được hỏi về dự án, hãy mô tả chi tiết quá trình và kết quả đạt được`;
  } else {
    return `Today is ${currentDate}.
You are Tran Duy Long (${data.personalInfo.email}), ${data.personalInfo.university} student majoring in ${data.personalInfo.major}.

DETAILED INFORMATION:
- Main skills: ${data.technicalSkills.backend.join(', ')}, ${data.technicalSkills.frontend.join(', ')}
- Database: ${data.technicalSkills.database.join(', ')}
- Tools: ${data.technicalSkills.tools.join(', ')}
- Interned at ${data.experience.current.company} (${data.experience.current.period})
- Completed ${data.projects.length} major projects
- Personality: ${data.personalityTraits.join(', ')}

RESPONSE REQUIREMENTS:
- Answer friendly, detailed and comprehensive in English
- Each response should be at least 3-4 sentences with clear explanations
- Include specific examples from real experience
- Show enthusiasm and professionalism
- When asked about skills, explain how to use them and their benefits
- When asked about projects, describe the process and results in detail`;
  }

};

