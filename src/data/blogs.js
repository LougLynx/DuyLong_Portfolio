export const getBlogs = (language) => {
  const blogs = [
    {
      id: 1,
      title: {
        en: "First Days in the City",
        vi: "Những ngày đầu tiên ở thành phố"
      },
      excerpt: {
        en: "My journey from a small town to the bustling city life. New experiences, challenges, and the excitement of starting fresh.",
        vi: "Hành trình từ một thị trấn nhỏ đến cuộc sống nhộn nhịp của thành phố. Những trải nghiệm mới, thử thách và sự phấn khích của một khởi đầu mới."
      },
      content: {
        en: "Moving to the city was both exciting and terrifying. Everything felt so fast-paced compared to my hometown. The tall buildings, the constant noise, and the sea of unfamiliar faces – it was overwhelming at first.\n\nBut with each passing day, I discovered small joys: a cozy coffee shop on the corner, a peaceful park hidden between skyscrapers, and friendly neighbors who became like family.\n\nThe city taught me resilience and opened my eyes to endless possibilities. Looking back, those uncertain first days were the beginning of an incredible journey of growth and self-discovery.",
        vi: "Chuyển đến thành phố vừa thú vị vừa đáng sợ. Mọi thứ diễn ra quá nhanh so với quê hương của tôi. Những tòa nhà cao tầng, tiếng ồn liên tục và biển người xa lạ – lúc đầu thật choáng ngợp.\n\nNhưng mỗi ngày trôi qua, tôi khám phá những niềm vui nhỏ: một quán cà phê ấm cúng ở góc phố, một công viên yên bình ẩn mình giữa các tòa nhà chọc trời, và những người hàng xóm thân thiện trở thành như gia đình.\n\nThành phố dạy tôi sự kiên cường và mở mang tầm mắt về vô vàn khả năng. Nhìn lại, những ngày đầu đầy bất định đó là khởi đầu của một hành trình tuyệt vời về sự phát triển và khám phá bản thân."
      },
      coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=450&fit=crop"
      ],
      date: "2024-01-15",
      tags: {
        en: ["Life", "New Beginnings", "City Life", "Personal Growth"],
        vi: ["Cuộc sống", "Khởi đầu mới", "Thành phố", "Phát triển bản thân"]
      }
    },
    {
      id: 2,
      title: {
        en: "Coffee and Conversations",
        vi: "Cà phê và những cuộc trò chuyện"
      },
      excerpt: {
        en: "The art of slowing down in a fast-paced world. How simple coffee meetings became moments of meaningful connection.",
        vi: "Nghệ thuật chậm lại trong một thế giới nhanh chóng. Những buổi cà phê giản dị trở thành khoảnh khắc kết nối ý nghĩa."
      },
      content: {
        en: "There's something magical about sitting across from someone over a cup of coffee, sharing stories and dreams. In our rush to achieve and succeed, we often forget the power of genuine human connection.\n\nI've made it a habit to have at least one coffee meeting a week with friends, old and new. These conversations have taught me more about life than any book or course.\n\nWe laugh about silly things, share our worries, dream about the future, and support each other through challenges. It's in these simple moments, surrounded by the aroma of fresh coffee, that I've found some of life's most valuable lessons.",
        vi: "Có điều gì đó kỳ diệu khi ngồi đối diện ai đó với một tách cà phê, chia sẻ những câu chuyện và ước mơ. Trong vội vã để đạt được và thành công, chúng ta thường quên đi sức mạnh của sự kết nối con người chân thành.\n\nTôi đã biến việc gặp gỡ uống cà phê với bạn bè, cũ và mới, ít nhất một lần mỗi tuần thành thói quen. Những cuộc trò chuyện này đã dạy tôi nhiều về cuộc sống hơn bất kỳ cuốn sách hay khóa học nào.\n\nChúng tôi cười về những điều ngớ ngẩn, chia sẻ nỗi lo lắng, mơ ước về tương lai, và hỗ trợ nhau vượt qua thử thách. Chính trong những khoảnh khắc giản dị này, được bao quanh bởi hương thơm của cà phê tươi, tôi đã tìm thấy những bài học quý giá nhất của cuộc sống."
      },
      coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=450&fit=crop"
      ],
      date: "2024-02-20",
      tags: {
        en: ["Coffee", "Friendship", "Life Lessons", "Mindfulness"],
        vi: ["Cà phê", "Tình bạn", "Bài học cuộc sống", "Chánh niệm"]
      }
    },
    {
      id: 3,
      title: {
        en: "Weekend Adventures",
        vi: "Những chuyến phiêu lưu cuối tuần"
      },
      excerpt: {
        en: "Exploring hidden gems around the city and finding joy in spontaneous weekend trips that refresh the soul.",
        vi: "Khám phá những viên ngọc ẩn quanh thành phố và tìm thấy niềm vui trong những chuyến đi cuối tuần tự phát làm sảng khoái tâm hồn."
      },
      content: {
        en: "Work can be draining, which is why I've made weekend adventures my sacred ritual. Whether it's hiking a nearby trail, visiting a new neighborhood, or simply taking a different route home, these small explorations remind me that life is full of surprises.\n\nLast weekend, I stumbled upon a beautiful lake just an hour from the city. The tranquility of the water, the fresh air, and the absence of city noise was exactly what I needed.\n\nThese adventures don't have to be expensive or far away – sometimes the best discoveries are right in your backyard. They've taught me to stay curious and to never stop exploring.",
        vi: "Công việc có thể làm kiệt sức, đó là lý do tại sao tôi biến những chuyến phiêu lưu cuối tuần thành nghi lễ thiêng liêng của mình. Dù là đi bộ đường mòn gần đó, ghé thăm một khu phố mới, hay chỉ đơn giản là đi một lộ trình khác về nhà, những khám phá nhỏ này nhắc nhở tôi rằng cuộc sống đầy bất ngờ.\n\nCuối tuần trước, tôi tình cờ phát hiện một hồ nước đẹp chỉ cách thành phố một giờ. Sự thanh bình của mặt nước, không khí trong lành, và sự vắng bóng của tiếng ồn thành phố chính xác là điều tôi cần.\n\nNhững cuộc phiêu lưu này không cần phải tốn kém hay xa xôi – đôi khi những khám phá tuyệt vời nhất lại ngay trong sân nhà bạn. Chúng đã dạy tôi luôn tò mò và không bao giờ ngừng khám phá."
      },
      coverImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=450&fit=crop"
      ],
      date: "2024-03-10",
      tags: {
        en: ["Travel", "Nature", "Adventure", "Weekend", "Self-care"],
        vi: ["Du lịch", "Thiên nhiên", "Phiêu lưu", "Cuối tuần", "Tự chăm sóc"]
      }
    }
  ];

  return blogs.map(blog => ({
    id: blog.id,
    title: blog.title[language],
    excerpt: blog.excerpt[language],
    content: blog.content[language],
    coverImage: blog.coverImage,
    images: blog.images || [],
    date: blog.date,
    tags: blog.tags[language]
  }));
};
