export const getExperience = (lang) => [
  {
    position: lang === 'en' 
      ? "Business Analyst Intern - Production Control Division"
      : "Thực tập sinh Phân tích Kinh doanh - Bộ phận Kiểm soát Sản xuất",
    company: "DENSO Manufacturing",
    period: "04/2025 - 09/2025",
    responsibilities: lang === 'en' ? [
      "Analyzed business requirements for DX transformation project, managing warehouse import/export progress tracking system at DMVN",
      "Gathered and documented stakeholder requirements for FIFO Part Warehouse expansion project, facilitating system integration across the corporation",
      "Created functional specifications, user stories, and process flow diagrams for production system managing warehouse data, with strong focus on UI/UX and business requirements",
      "Conducted data analysis and created reports using DMVN internal/global systems (Nexus/Imex Control/FIFO), identifying workflow optimization opportunities",
      "Facilitated communication between business stakeholders and technical teams, translating business needs into technical requirements and ensuring project alignment with organizational goals"
    ] : [
      "Phân tích yêu cầu kinh doanh cho dự án chuyển đổi số DX, quản lý hệ thống theo dõi tiến độ nhập/xuất kho tại DMVN",
      "Thu thập và tài liệu hóa yêu cầu của các bên liên quan cho dự án mở rộng Kho linh kiện FIFO, hỗ trợ tích hợp hệ thống trong toàn công ty",
      "Tạo đặc tả chức năng, user stories và sơ đồ quy trình cho hệ thống sản xuất quản lý dữ liệu kho, tập trung mạnh vào UI/UX và yêu cầu kinh doanh",
      "Thực hiện phân tích dữ liệu và tạo báo cáo sử dụng hệ thống nội bộ/toàn cầu DMVN (Nexus/Imex Control/FIFO), xác định cơ hội tối ưu hóa quy trình",
      "Làm cầu nối giữa các bên liên quan kinh doanh và nhóm kỹ thuật, chuyển đổi nhu cầu kinh doanh thành yêu cầu kỹ thuật và đảm bảo dự án phù hợp với mục tiêu tổ chức"
    ],
    details: lang === 'en'
      ? "My internship at Denso allowed me to experience a professional working environment where I developed strong analytical and communication skills. I learned to bridge the gap between business needs and technical solutions, working closely with cross-functional teams."
      : "Thời gian thực tập tại Denso giúp tôi trải nghiệm môi trường làm việc chuyên nghiệp, nơi tôi phát triển kỹ năng phân tích và giao tiếp mạnh mẽ. Tôi học được cách kết nối giữa nhu cầu kinh doanh và giải pháp kỹ thuật, làm việc chặt chẽ với các nhóm đa chức năng.",
    images: [
      '/Asset/Work/Denso/kiniem.jpg',
      '/Asset/Work/Denso/InnovationTeam.jpg',
      '/Asset/Work/Denso/3anhem.jpg',
      '/Asset/Work/Denso/dinhau.JPG',
      '/Asset/Work/Denso/RIG.JPG',
    ]
  }
];

export const getEducation = (lang) => [
  {
    degree: lang === 'en' 
      ? "Bachelor of Software Engineering"
      : "Kỹ thuật Phần mềm",
    institution: "FPT University",
    period: "2022 - 2026",
    details: lang === 'en' 
      ? "Scholarship: Awarded a 30% scholarship for all four academic years."
      : "Học bổng: Được trao học bổng 30% cho tất cả bốn năm học.",
    images: [
      '/Asset/Education/hocvo0.JPG',
      '/Asset/Education/lophoc.JPG',
      '/Asset/avatar.jpg'
    ]
  }
];

export const getActivities = (lang) => [
  {
    name: "JS Club - Japanese Software Engineers",
    date: "07/2024",
    link: "https://www.facebook.com/fu.jsclub",
    description: lang === 'en'
      ? "A community of Japanese software engineers where programming enthusiasts and Japanese culture lovers gather"
      : "Câu lạc bộ kỹ sư phần mềm Nhật Bản, nơi hội tụ những người đam mê lập trình và văn hóa Nhật Bản",
    images: [
      '/Asset/Activities/JSClub/CodeFest.jpg',
      '/Asset/Activities/JSClub/CodeFest1.jpg',
      '/Asset/Activities/JSClub/CodeFest2.jpg',
      '/Asset/Activities/JSClub/NIK-133.jpg',
      '/Asset/Activities/JSClub/NIK-138.jpg',
      '/Asset/Activities/JSClub/16.jpg',
      '/Asset/Activities/JSClub/pv.png',
      '/Asset/Activities/JSClub/pv1.png'
    ]
  },
  {
    name: "Tiếp Bước Tới Trường",
    date: "08/2024",
    link: "https://www.facebook.com/tiepbuoctoitruong",
    description: lang === 'en'
      ? "A charity project helping children in mountainous areas of Tuyen Quang province"
      : "Dự án thiện nguyện giúp đỡ trẻ em vùng cao của tỉnh Tuyên Quang",
    images: [
      '/Asset/Activities/TBTT/Home.jpg',
      '/Asset/Activities/TBTT/trungthu1.jpg',
      '/Asset/Activities/TBTT/activities1.jpg',
      '/Asset/Activities/TBTT/trungthu.jpg',
      '/Asset/Activities/TBTT/activities.jpg',
    ]
  }
];

export const references = [
  {
    name: "MSc. Nguyen Van Minh",
    position: "Innovation Tech Lead - Production Control Div - DMVN",
    email: "vanminh.nguyen.donghung@gmail.com",
    phone: "0347.243.041"
  }
];

