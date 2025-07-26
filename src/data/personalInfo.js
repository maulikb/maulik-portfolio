// Personal Information Configuration
// Created by: Maulik Beladiya
// License: MIT

export const personalInfo = {
  name: "Maulik Beladiya",
  title: "Data & AI Engineer",
  subtitle: "Software Development Engineer | Full-Stack Developer",
  location: "Greater Sudbury, Ontario, Canada", 
  phone: "+1-647-937-6483",
  email: "maulikbeladiya@gmail.com",
  
  // Professional Summary
  bio: "Software Development Engineer with 3+ years of experience building scalable, distributed systems and data solutions. Proven expertise in Java, C++, Python, and cloud infrastructure with hands-on experience in large distributed computing environments. Demonstrated ability to design and implement innovative technologies, reduce database complexity by 20%, and improve system performance by 15%. Strong foundation in object-oriented design, data structures, and algorithm design with experience building fault-tolerant, scalable systems for millions of users. HackerRank 5⭐ in SQL with expertise in distributed storage, indexing, and query systems.",
  
  // Detailed About Information
  aboutMe: {
    intro: "👋 Hi, I'm Maulik! A passionate Data & AI Engineer who loves transforming raw data into valuable insights and building intelligent systems that solve real-world problems.",
    focus: "🎯 I specialize in designing and implementing state-of-the-art distributed algorithms for large-scale data processing, with expertise in building scalable, fault-tolerant systems that serve millions of users.",
    passion: "🚀 My passion lies in Data & AI Engineering, Distributed Systems, and Full-Stack Development. I enjoy working with cutting-edge technologies to create innovative solutions that make a real impact.",
    currentStatus: "💼 Currently seeking full-time Data Engineering and Software Development opportunities where I can contribute to building the next generation of data-driven applications."
  },
  
  // Social Links
  social: {
    github: "https://github.com/maulikb",
    linkedin: "https://www.linkedin.com/in/maulikbeladiya/",
    email: "maulikbeladiya@gmail.com"
  },
  
  // Resume
  resumeUrl: "/resume/Maulik_Beladiya_Resume.pdf",
  
  // Availability
  isAvailable: true,
  availabilityText: "✅ Available for opportunities"
};

export const skills = {
  technical: {
    "💻 Programming Languages": [
      "Java", "C++", "Python", "JavaScript", "TypeScript", "SQL", "C#"
    ],
    "☁️ Distributed Systems & Cloud": [
      "AWS (S3, RDS, Glue, Athena)", "Azure", "Docker", "Kubernetes", "Apache Airflow"
    ],
    "🗄️ Databases & Storage": [
      "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Firebase Firestore", "Amazon RDS"
    ],
    "⚡ Data & Performance Engineering": [
      "ETL/ELT Pipelines", "Data Modeling", "Stream Processing", "Query Optimization"
    ],
    "🛠️ Frameworks & Tools": [
      "NestJS", "Node.js", "React", "TensorFlow", "Apache Kafka", "WebSocket", "RESTful APIs"
    ],
    "🏗️ Software Engineering": [
      "Object-Oriented Design", "Data Structures", "Algorithm Design", "Distributed Systems", "CI/CD"
    ],
    "📈 Development Practices": [
      "Agile", "Test-Driven Development", "Code Review", "Performance Engineering", "System Design"
    ]
  },
  
  proficiencyLevels: [
    { skill: "Data Engineering & Distributed Systems", level: 95, icon: "📊" },
    { skill: "Backend Development & Cloud Infrastructure", level: 90, icon: "☁️" },
    { skill: "Machine Learning & AI", level: 85, icon: "🤖" },
    { skill: "Frontend Development", level: 75, icon: "🎨" }
  ]
};

export const education = [
  {
    institution: "Laurentian University",
    degree: "Master of Science in Computational Science",
    duration: "July 2024",
    location: "Sudbury, ON",
    description: "Focus: Distributed systems, machine learning algorithms, and performance engineering. Advanced coursework in parallel computing, optimization, and scalable system design.",
    highlights: [
      "Specialized in distributed computing and large-scale system architecture",
      "Research in machine learning algorithms and performance optimization"
    ]
  },
  {
    institution: "Birla Vishvakarma Mahavidyalaya",
    degree: "Bachelor of Engineering in Web/Multimedia Management",
    duration: "2021",
    location: "Gujarat, India",
    description: "Strong foundation in software engineering principles and web technologies.",
    highlights: [
      "Comprehensive study of software development methodologies",
      "Hands-on experience with web technologies and multimedia systems"
    ]
  }
];

export const experience = [
  {
    company: "Upwork",
    role: "Freelance AI Trainer & Software Engineer",
    duration: "Sep 2024 – Present",
    location: "Remote",
    type: "Freelance",
    description: "Design and implement state-of-the-art distributed algorithms for AI training pipelines. Build scalable data processing solutions for machine learning workflows using cloud infrastructure.",
    achievements: [
      "Design distributed algorithms for AI training pipelines serving large-scale datasets",
      "Build scalable data processing solutions using cloud infrastructure and modern frameworks"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"]
  },
  {
    company: "WeeTech Solution Pvt Ltd",
    role: "Software Development Engineer / Web Developer",
    duration: "Jan 2021 – Mar 2023",
    location: "Gujarat, India",
    type: "Full-time",
    description: "Built distributed, high-performance data processing systems and implemented scalable, fault-tolerant storage solutions. Reduced database complexity by 20% and improved query performance by 15%.",
    achievements: [
      "Designed distributed data processing systems serving 500+ concurrent users using PostgreSQL and Amazon RDS",
      "Built real-time analytics dashboard using distributed computing with Power BI, processing large datasets",
      "Deployed features in highly available, fault-tolerant systems using CI/CD pipelines",
      "Reduced deployment failures by 5% through automated testing and monitoring"
    ],
    technologies: ["Java", "Python", "PostgreSQL", "AWS", "Power BI", "Docker"]
  }
];

export const certifications = [
  {
    title: "HackerRank 5⭐ in SQL",
    issuer: "HackerRank",
    date: "2024",
    description: "Achieved top-tier certification in SQL with expertise in distributed storage, indexing, and query systems optimization.",
    credentialUrl: "https://www.hackerrank.com/certificates/your-certificate-id"
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Certified in AWS cloud services with hands-on experience in building scalable, distributed applications on Amazon Web Services.",
    credentialUrl: "https://aws.amazon.com/certification/certified-developer-associate/"
  },
  {
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "2024",
    description: "Certified in advanced data engineering practices using Databricks platform for large-scale data processing and analytics.",
    credentialUrl: "https://databricks.com/learn/certification"
  },
  {
    title: "AI Agents Fundamentals Certified",
    issuer: "AI Certification Body",
    date: "2024",
    description: "Completed comprehensive certification in AI agent development and implementation of intelligent automation systems.",
    credentialUrl: "#"
  },
  {
    title: "Digital Marketing Foundations",
    issuer: "Digital Marketing Institute",
    date: "2023",
    description: "Comprehensive understanding of digital marketing strategies and implementation.",
    credentialUrl: "#"
  }
];