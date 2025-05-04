const settings = {
  isSplash: false,
};

const seo = {
  title: "Prajwal's Portfolio",
  description:
    "A passionate developer focused on building scalable and impactful web applications.",
  og: {
    title: "Prajwal Perugu Portfolio",
    type: "website",
    url: "https://your-portfolio-url.com/", // Leave for now, we will update after deployment
  },
};

const greeting = {
  title: "Prajwal Perugu",
  logo_name: "PRajwal Perugu",
  nickname: "Prajwal_the_builder",
  subTitle:
    "Full Stack Developer 🚀 passionate about developing scalable, efficient, and user-focused web applications with React.js, Java, and modern tech.",
  resumeLink: "https://karthikreddy-portfolio.vercel.app/karthikreddy.pdf",
  portfolio_repository: "https://github.com/karthikreddymarla",
  githubProfile: "https://github.com/prajwalpvs",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/prajwalpvs",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prajwalperugu/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:prajwalperugu1@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using React.js, Redux, and Context API",
        "⚡ Developing secure and scalable backend APIs with Java Spring Boot",
        "⚡ Integrating and managing databases with MySQL, PostgreSQL",
        "⚡ Styling with Tailwind CSS, Styled Components, and CSS3 for modern UI/UX",
        "⚡ Creating RESTful APIs and integrating third-party services",
        "⚡ Ensuring code quality with unit testing (Jest, Mocha) and version control (Git)",
        "⚡ Deploying applications using CI/CD pipelines and basic AWS services",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#007396",
          },
        },

        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "simple-icons:styledcomponents",
          style: {
            color: "#DB7093",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Wilmington University",
      subtitle: "Masters in Information Systems and Technologies",
      logo_path: "wilmu.png",
      alt_name: "wilmu",
      duration: "Aug 2023 -  May 2025",

      descriptions: [
        "⚡ Master's in advanced concepts of Web Design, Frontend & Backend Development, and UI/UX principles.",
        "⚡ Coursework includes Responsive Web Development, Database Design, Cloud Integration, API Development, and User Experience Research.",
        "⚡ Focused on building full-stack web applications using React.js, Java Spring Boot, MySQL, and deploying with AWS.",
      ],
      website_link: "https://www.wilmu.edu/",
    },

    {
      title: "Pace Institute of technology and sciences",
      subtitle: "Bachelor's in Computer Science Engineering",
      logo_path: "jntu.png",
      alt_name: "jntu",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied core subjects of Electronics, Communication Systems, Signal Processing, and Embedded Systems.",
        "⚡ Gained foundational knowledge in Computer Science concepts including Programming, Data Structures, and Database Systems.",
        "⚡ Worked on projects integrating both software and hardware technologies, building a strong interdisciplinary skillset.",
      ],
      website_link: "https://pace.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Development",
      subtitle: "- NXT Wave",
      logo_path: "nxtwave.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "AWS Certified Developer – Associate",
      subtitle: "- Amazon",
      logo_path: "amazon.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      subtitle: "- META",
      logo_path: "meta.png",
      // certificate_link:
      //   "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience and Teaching Assistantship",

  // subtitle: "Professional Experience and Teaching Assistantship",
  description:
    "💼 I have 3+ years of diverse experience spanning front-end development, full-stack engineering, and academic mentorship. At Movate, I developed and optimized scalable web applications using React.js, Java Spring Boot, and modern web technologies, improving performance and user engagement. As a Product Intern, I collaborated with cross-functional teams to design user-centered features, contributing to product roadmaps and delivery. Additionally, I served as a Teaching Assistant, mentoring students in web development, coding best practices, and supporting course management.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "JP Morgan Chase",
          company_url: "https://www.jpmorganchase.com/",
          logo_path: "JP.png",
          duration: "May 2024 - Nov 2024",
          location: "Wilmington, DE",
          description:
            "Worked on the development of internal banking applications, contributing to both frontend and backend components using React.js, Spring Boot, and MySQL. Participated in designing RESTful APIs, implementing JWT-based authentication, and optimizing database performance. Supported cloud deployment on AWS (EC2, RDS) and automated CI/CD pipelines with GitHub Actions and Jenkins, ensuring secure, scalable, and reliable releases.",
          color: "#000000",
        },
        {
          title: "Lead Software Engineer",
          company: "Movate",
          company_url: "https://www.movate.com/",
          logo_path: "movate.png",
          duration: "Sep 2022 - Jun 2023",
          location: "Hyderabad, INDIA",
          description:
            "Progressed into a Full Stack Developer role, taking ownership of both frontend and backend development for enterprise projects. Designed and implemented RESTful APIs with Spring Boot, developed secure authentication systems using JWT and Spring Security, and led cloud deployment using AWS (EC2, RDS). Played a key role in automating CI/CD pipelines with GitHub Actions, optimizing performance, and mentoring junior developers, ensuring high-quality, scalable solutions within Agile development cycles.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Movate",
          company_url: "https://www.movate.com/",
          logo_path: "movate.png",
          duration: "Feb 2021 - Aug 2022",
          location: "Hyderabad, INDIA",
          description:
            "Joined MOVATE Technologies as a graduate trainee and focused on developing responsive, user-centric web applications using React.js, Tailwind CSS, and Redux Toolkit. Collaborated with backend teams to integrate APIs, worked in Agile sprint cycles, and contributed to delivering high-quality UI components that enhanced user experience and engagement. Gained experience in testing with Jest and React Testing Library while adhering to code review best practices.",
          color: "#000000",
        },
      ],
    },

    {
      title: "Assistantships",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "Wilmington University",
          company_url: "https://www.wilmu.edu/",
          logo_path: "wilmu.png",
          duration: "Jan 2025 - Apr 2025",
          location: "Wilmington, DE",
          description:
            "Served as an Academic Assistant, supporting faculty in teaching web development and programming courses by assisting students with coding assignments, clarifying technical concepts (React.js, Java, SQL), grading projects, and facilitating lab sessions to enhance learning outcomes.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are a few selected projects that highlight my full-stack development skills and focus on building responsive, scalable, and user-friendly web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "karthikreddy.png",
    description:
      "I am active on major social platforms. Feel free to reach out to me[📞 Phone or 📧 Email] — I usually respond within 24 hours. I can help with Web Development, React.js, Java (Spring Boot), Frontend/Backend projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Phone (445) 260-7659",
    subtitle: "",
  },
  emailSection: {
    title: "Mail to : ",
    subtitle: "",
    email: "prajwalperugu1@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
