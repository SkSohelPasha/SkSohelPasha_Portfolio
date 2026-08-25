import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Developer Support Assistant',
    category: 'RAG SAAS PLATFORM',
    description:
      'A production-style RAG-based developer support platform that allows users to upload and query technical documentation using natural language. The system recursively chunks documents, generates semantic vector embeddings with the Gemini API, stores them in ChromaDB, and retrieves relevant context through LangChain before generating grounded AI responses. Built with FastAPI REST APIs, React.js, Supabase, authentication, and deployed using Vercel and Render.',
    githubUrl: 'https://github.com/SkSohelPasha/Aura-Ai',
    liveUrl: 'https://aura-ai-7gnh-git-main-sksohelpashas-projects.vercel.app/',
    tech: [
      'Python',
      'FastAPI',
      'React.js',
      'LangChain',
      'RAG',
      'ChromaDB',
      'Supabase',
      'Gemini API',
      'REST APIs',
    ],
    metrics: [
      { label: 'ENGINE', value: 'LangChain + Gemini' },
      { label: 'RETRIEVAL', value: 'ChromaDB Vectors' },
      { label: 'DEPLOYMENT', value: 'Vercel + Render' },
    ],
  },

{
    number: '02',
    title: 'Customer Churn Prediction',
    category: 'MACHINE LEARNING / DATA ANALYSIS',
    description:
      'A machine-learning and data-analysis project that processes customer datasets to identify patterns associated with customer churn and generate predictive insights. The workflow includes data ingestion, preprocessing, exploratory analysis, feature preparation, model development, and churn prediction using Python, Pandas, NumPy, and scikit-learn, with Matplotlib and Seaborn used for data visualization and analysis. The project demonstrates an end-to-end machine-learning pipeline focused on supporting customer-retention decisions.',
    githubUrl: 'https://github.com/SkSohelPasha/Customer-Churn-Prediction-Using-ML-Model',
    tech: [
      'Machine Learning',
      'Data Analysis',
      'Data Ingestion',
      'Prediction',
      'Algorithms',
      'Python',
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'Seaborn',
    ],
    metrics: [
      { label: 'WORKFLOW', value: 'Data to Prediction' },
      { label: 'FOCUS', value: 'Customer Retention' },
      { label: 'STACK', value: 'Python ML' },
    ],
  },

  {
    number: '03',
    title: 'Student Portal',
    category: 'PYTHON FULL STACK PROJECT',
    description:
      'A Python-based full-stack student management application designed to centralize common student-facing workflows and information within a structured web platform. The application combines HTML, CSS, JavaScript, Python, Flask, and SQL to provide a complete frontend-to-backend workflow, demonstrating backend development, database integration, request handling, and full-stack application architecture.',
    githubUrl: 'https://github.com/SkSohelPasha/student-portal',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'Python',
      'Flask',
      'Full Stack Development',
      'Student Management',
      'Web Application',
    ],
    metrics: [
      { label: 'TYPE', value: 'Full Stack' },
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'DOMAIN', value: 'Education' },
    ],
  },

  {
    number: '04',
    title: 'Alex - Career Assistance AI Chatbot',
    category: 'AI WORKFLOW AUTOMATION',
    description:
      'An AI-powered career assistance platform designed to support users throughout their job-search journey, including resume creation, ATS optimization, interview preparation, and career guidance. The chatbot uses automated AI workflows to understand user requests and provide contextual recommendations, resume-generation assistance, and actionable career support through a conversational interface. Built using Relevance AI with prompt engineering and workflow automation.',
    githubUrl: 'https://github.com/SkSohelPasha/Career-Assistance-AI-Chatbot',
    liveUrl: 'https://app.relevanceai.com/agents/f1db6c/c9fe8a35-1ec3-4ef5-ab5f-98ffa98366ab/14e8dd1c-dc6b-409d-bcf7-d994bad1ad3b/embed-chat?starting_message_prompts=Hello!+How+can+I+Assist+you+today?&hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd/chat&input_placeholder_text=Check+Job+openings&hide_logo=false&hide_description=false&conversationId=new',
    tech: [
      'Relevance AI',
      'AI Workflow Automation',
      'Prompt Engineering',
      'Resume Generation',
      'ATS Optimization',
    ],
    metrics: [
      { label: 'FOCUS', value: 'Career Guidance' },
      { label: 'WORKFLOW', value: 'AI Automation' },
      { label: 'OUTPUT', value: 'ATS-Ready Resumes' },
    ],
  },
  {
    number: '05',
    title: 'WellHaven - Online Health Appointment System',
    category: 'HEALTHCARE WEB PLATFORM',
    description:
      'A full-stack healthcare appointment platform designed to streamline interactions between patients and administrators through a secure web application. The system provides role-based patient and admin workflows, JWT-based authentication, PostgreSQL-backed appointment management, responsive React and TypeScript interfaces, REST APIs, and an integrated AI knowledge-base chatbot for answering healthcare-related platform queries. The application is deployed as a production-ready web experience.',
    githubUrl: 'https://github.com/SkSohelPasha/HealthCare-Services',
    liveUrl: 'https://sksohelpasha.github.io/HealthCare-Services/',
    tech: [
      'PostgreSQL',
      'React.js',
      'TypeScript',
      'JWT',
      'REST APIs',
      'AI Chatbot',
    ],
    metrics: [
      { label: 'ROLES', value: 'Patient + Admin' },
      { label: 'SECURITY', value: 'JWT Authentication' },
      { label: 'DATABASE', value: 'PostgreSQL' },
    ],
  },
  {
    number: '06',
    title: 'AI Support Assistant',
    category: 'AGENTX WORKFLOW AUTOMATION',
    description:
      'A conversational AI assistant designed to provide students with quick, natural-language support through an automated chatbot workflow. Built using AgentX and Google APIs, the assistant processes user questions and generates contextual responses through a focused conversational interface. The project demonstrates practical implementation of AI workflow automation for education and student-support use cases.',
    liveUrl: 'https://app.agentx.so/shared-chat/688b07465ec85578f8b87708',
    tech: [
      'AgentX',
      'Workflow Automation',
      'Google API',
      'Conversational AI',
      'Student Support',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'AgentX' },
      { label: 'INTERFACE', value: 'Conversational Chat' },
      { label: 'FOCUS', value: 'Student Support' },
    ],
  },
  
  
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.012}
  itemStackDistance={40}
  stackPosition="10%"
  scaleEndPosition="4%"
  baseScale={0.96}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-5 sm:p-8 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 border-t border-[#8C6D4F]/25 pt-6 lg:border-t-0 lg:pt-0">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 px-5 sm:px-6 py-3.5 border border-[#D4AF37] bg-[#D4AF37] hover:border-[#F7E7C4] hover:bg-[#F7E7C4] text-black text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>VIEW LIVE</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full sm:w-auto items-center justify-center space-x-3 px-5 sm:px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>VIEW ON GITHUB</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
