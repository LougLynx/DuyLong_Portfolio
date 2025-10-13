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
      : "Học bổng: Được trao học bổng 30% cho tất cả bốn năm học."
  }
];

export const getActivities = (lang) => [
  {
    name: "JS Club - Japanese Software Engineers",
    date: "07/2024",
    description: lang === 'en'
      ? "Member of Japanese Software Engineers community"
      : "Thành viên cộng đồng Kỹ sư phần mềm Nhật Bản"
  },
  {
    name: "Tiếp Bước Tới Trưởng",
    date: "08/2024",
    description: lang === 'en'
      ? "Participated in student development program"
      : "Tham gia chương trình phát triển sinh viên"
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

