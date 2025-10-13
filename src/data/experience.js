export const getExperience = (lang) => [
  {
    position: lang === 'en' 
      ? "Internship at Innovation - Production Control Div"
      : "Thực tập sinh tại Bộ phận Kiểm soát Sản xuất - Đổi mới",
    company: "DENSO Manufacturing",
    period: "04/2025 - 09/2025",
    responsibilities: lang === 'en' ? [
      "Participated in DX project, Managing import/export progress at DMVN warehouse",
      "Contributed to expanding the FIFO Part Warehouse project, supporting system integration across the corporation",
      "Designed C# efficient, reusable, and reliable code for a production system managing warehouse import/export data, with a strong focus on UI/UX/function requirement and maintainability",
      "Gained expertise in connecting and managing data with DMVN inner/global system (Nexus/Imex Control/FIFO), and workflow optimization",
      "Collaborated closely with team members and managers, improving communication skills and teamwork while delivering real project outcomes"
    ] : [
      "Tham gia dự án DX, Quản lý tiến độ nhập/xuất tại kho DMVN",
      "Đóng góp vào việc mở rộng dự án Kho linh kiện FIFO, hỗ trợ tích hợp hệ thống trong toàn công ty",
      "Thiết kế code C# hiệu quả, có thể tái sử dụng và đáng tin cậy cho hệ thống sản xuất quản lý dữ liệu nhập/xuất kho, tập trung mạnh vào yêu cầu UI/UX/chức năng và khả năng bảo trì",
      "Đạt được chuyên môn trong việc kết nối và quản lý dữ liệu với hệ thống nội bộ/toàn cầu DMVN (Nexus/Imex Control/FIFO), và tối ưu hóa quy trình làm việc",
      "Hợp tác chặt chẽ với các thành viên nhóm và quản lý, cải thiện kỹ năng giao tiếp và làm việc nhóm trong khi đạt được kết quả dự án thực tế"
    ],
    details: lang === 'en'
      ? "My internship at Denso allowed me to experience a professional working environment where everyone was always ready to help each other. I learned many new things, not only in work but also in life."
      : "Thời gian thực tập tại Denso giúp tôi trải nghiệm môi trường làm việc chuyên nghiệp, nơi mọi người luôn sẵn sàng hỗ trợ nhau. Tôi học được nhiều điều mới mẻ, không chỉ trong công việc mà còn trong cuộc sống.",
    images: [
      '/Asset/Work/Denso/kiniem.jpg',
      '/Asset/Work/Denso/InnovationTeam.jpg',
      '/Asset/Work/Denso/3anhem.jpg',
      '/Asset/Work/Denso/dinhau.jpg',
      '/Asset/Work/Denso/RIG.jpg',
    ]
  }
];

export const getEducation = (lang) => [
  {
    degree: "Bachelor of Software Engineering",
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

