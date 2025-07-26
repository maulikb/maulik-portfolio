// Projects Data Configuration
// Created by: Maulik Beladiya
// License: MIT

export const projects = [
  {
    id: 1,
    title: "🔄 Distributed Reddit ETL Data Pipeline",
    category: "Data Engineering",
    description: "Built end-to-end distributed ETL pipeline processing Reddit data with scalable, fault-tolerant architecture using Python, Apache Airflow, AWS S3, Docker, and PostgreSQL.",
    longDescription: "Engineered a comprehensive data pipeline that extracts Reddit data, transforms it for analytics, and loads it into a distributed storage system. The pipeline handles millions of posts daily with automatic error recovery and monitoring.",
    technologies: ["Python", "Apache Airflow", "AWS S3", "Docker", "PostgreSQL", "Redis"],
    features: [
      "🏗️ Designed distributed storage and indexing system using AWS S3 and PostgreSQL for large-scale data processing",
      "⚙️ Implemented automated workflow orchestration using Apache Airflow in containerized environment", 
      "🛡️ Created robust data processing algorithms handling high-volume streaming data with error handling and recovery",
      "📊 Built monitoring and alerting system for pipeline health and performance tracking"
    ],
    githubUrl: "https://github.com/maulikb/reddit-etl-pipeline",
    liveUrl: null,
    imageUrl: "/images/reddit-pipeline.png",
    status: "✅ Completed",
    year: "2024",
    impact: "Processing 1M+ Reddit posts daily with 99.9% uptime"
  },
  {
    id: 2,
    title: "💰 Serverless Expense Sharing Platform",
    category: "Full-Stack Development",
    description: "Architected highly scalable, distributed backend system supporting real-time expense sharing using Node.js, NestJS, Firebase, TypeScript, and WebSocket integration.",
    longDescription: "Developed a comprehensive expense sharing platform that allows users to split bills, track expenses, and settle debts with real-time updates and intelligent debt optimization algorithms.",
    technologies: ["Node.js", "NestJS", "Firebase", "TypeScript", "WebSocket", "React"],
    features: [
      "🧮 Implemented complex algorithmic solutions for debt optimization and balance calculation across distributed user base",
      "🚀 Built fault-tolerant, low-cost microservices architecture using Firebase with automatic scaling capabilities",
      "📡 Designed real-time notification system with WebSocket integration for instant updates across distributed clients",
      "📱 Created responsive web application with intuitive user interface for expense management"
    ],
    githubUrl: "https://github.com/maulikb/expense-sharing-platform",
    liveUrl: "https://expense-share-demo.netlify.app",
    imageUrl: "/images/expense-sharing.png",
    status: "✅ Completed",
    year: "2024",
    impact: "Serving 500+ concurrent users with real-time updates"
  },
  {
    id: 3,
    title: "🎯 Trajectory Prediction Using LSTM",
    category: "Machine Learning",
    description: "Developed state-of-the-art machine learning algorithms for trajectory prediction using deep neural networks with Python, TensorFlow, LSTM, and NumPy.",
    longDescription: "Built a sophisticated machine learning model that predicts object trajectories using Long Short-Term Memory neural networks, achieving high accuracy in complex movement pattern recognition.",
    technologies: ["Python", "TensorFlow", "LSTM", "NumPy", "Pandas", "Matplotlib"],
    features: [
      "🔍 Implemented complex data processing pipelines for sequential data analysis and temporal pattern recognition",
      "⚡ Built scalable training infrastructure for large-scale model training with performance optimization",
      "🎛️ Created efficient algorithms for sequence prediction with configurable architecture supporting multiple use cases",
      "📈 Developed comprehensive evaluation metrics and visualization tools for model performance analysis"
    ],
    githubUrl: "https://github.com/maulikb/trajectory-prediction-lstm",
    liveUrl: null,
    imageUrl: "/images/trajectory-prediction.png",
    status: "✅ Completed", 
    year: "2024",
    impact: "95% accuracy in trajectory prediction with real-time processing"
  },
  {
    id: 4,
    title: "🗄️ Model Context Protocol SQL Server",
    category: "Database Systems",
    description: "Built distributed database interaction system implementing Model Context Protocol for scalable data access with Python, SQLite, and comprehensive CRUD operations.",
    longDescription: "Developed a robust database server that implements the Model Context Protocol, providing secure and efficient database operations with advanced query processing capabilities.",
    technologies: ["Python", "SQLite", "MCP", "FastAPI", "Pydantic"],
    features: [
      "⚙️ Designed efficient query processing engine with support for multiple database operations and schema management",
      "🔄 Implemented robust data transformation algorithms for CSV to database conversion with error handling",
      "🔐 Created secure, manageable database interface with comprehensive CRUD operations and connection management",
      "📝 Built RESTful API with comprehensive documentation and testing suite"
    ],
    githubUrl: "https://github.com/maulikb/mcp-sql-server",
    liveUrl: null,
    imageUrl: "/images/mcp-sql.png",
    status: "✅ Completed",
    year: "2024",
    impact: "Enhanced database query performance by 40% with optimized indexing"
  }
];

export const projectCategories = [
  "All",
  "Data Engineering",
  "Full-Stack Development", 
  "Machine Learning",
  "Database Systems"
];

export const projectStats = {
  totalProjects: 4,
  totalTechnologies: 15,
  totalCommits: "500+",
  yearsOfExperience: "3+"
};