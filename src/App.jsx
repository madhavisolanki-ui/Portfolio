import React, { useState } from 'react'; 
import emailjs from '@emailjs/browser'; 
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
function App(){
    const [selectedCert, setSelectedCert] = useState(null);
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_w5nacoe', 'template_0bn2cum', e.target, 'QU-C3GNxgOkFRnTP8')
            .then((result) => {
                setStatus("Message Sent! 🚀");
                e.target.reset();
            }, (error) => {
                setStatus("Failed, try again.");
            });
    };


    return(
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans scroll-smooth">
            {/*1. Navbar */}
            <nav className="fixed w-full top-0 bg-slate-950/50 backdrop-blur-lg border-b border-white/5 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#about" className="font-mono font-bold text-xl text-teal-400 hover:text-white transition-all tracking-wider">
                    <div className="font-mono font-bold text-xl">
                    <a href="#home" className="flex flex-col leading-none group transition-all duration-300">
    <span className="text-lg font-bold text-slate-100 tracking-wide group-hover:text-teal-400 transition-colors">
    MADHAVI SOLANKI
    </span>
    <span className="text-[10px] text-teal-400 uppercase tracking-[0.2em] font-mono opacity-80 group-hover:opacity-100 transition-opacity">
    Aspiring AI Engineer
    </span>
</a>
</div>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {[
                        { name: "About", href: "#about" },
                        { name: "Education", href: "#education" },
                        { name: "Skills", href: "#skills" },
                        { name: "Projects", href: "#projects" },
                        { name: "Contact", href: "#contact" }
                    ].map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-teal-400 transition-all duration-300 ease-in-out"
                        >
                            {link.name}
                        </a>
                    ))}
            
                    {/* Resume Button (Professional Touch) */}
                    <a 
                        href="/images/resume-12.pdf" 
                        target="_blank"
                        className="ml-4 px-5 py-2 text-sm font-medium border border-teal-500/30 text-teal-400 rounded-full hover:bg-teal-500/10 transition-all"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>

            {/*2. Hero Section */}
            <section
                id="about"
                className="max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32"
            >
            <div>
                {/* Open to Internship Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400 text-sm">
            🚀 Open for Internships & Collaborations
            </div>

            {/* Intro */}
<p className="text-teal-400 font-medium mb-4">
    B.Tech CSE @ GLA University | AI & ML Enthusiast
</p>

{/* Heading */}
<h1 className="text-5xl md:text-7xl font-bold mb-6">
    Hi, I'm <span className="text-teal-400">Madhavi Solanki</span>
</h1>

{/* Highlight Line */}
<p className="text-slate-500 text-sm md:text-base mb-6">
    Open Source Contributor • GSSoC'26 
</p>

{/* Description */}
<p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl">
    Passionate about Artificial Intelligence,
    Machine Learning, Generative AI, LLMs, and building real-world intelligent applications.
</p>

{/* Location */}
<div className="flex items-center gap-2 text-slate-500 mb-8">
    📍 Uttar Pradesh, India
</div>

{/* Contact Info */}
<div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-8">

    <a
    href="mailto:madhavisolanki02@gmail.com"
    className="hover:text-teal-400 transition-colors"
    >
    📧 madhavisolanki02@gmail.com
    </a>

    <a
    href="https://github.com/madhavisolanki-ui"
    target="_blank"
    rel="noreferrer"
    className="hover:text-teal-400 transition-colors"
    >
    💻 GitHub
    </a>

    <a
    href="https://leetcode.com/u/Madhavi_1912/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-teal-400 transition-colors"
    >
    🏆 LeetCode
    </a>

</div>


{/* Buttons */}
<div className="flex gap-4 flex-wrap mb-10">
    <a
    href="#projects"
    className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all"
    >
    View Projects
    </a>

    <a
    href="/images/resume-12.pdf"
    target="_blank"
    rel="noreferrer"
    className="border border-teal-500 text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-500/10 transition-all"
    >
    Resume
    </a>
</div>

{/* Stats */}
<div className="flex flex-wrap gap-10">
    <div>
    <h3 className="text-3xl font-bold text-teal-400">800+</h3>
    <p className="text-slate-500 text-sm">DSA Problems Solved</p>
    </div>

    <div>
    <h3 className="text-3xl font-bold text-teal-400">6+</h3>
    <p className="text-slate-500 text-sm">Certifications</p>
    </div>

    <div>
    <h3 className="text-3xl font-bold text-teal-400">2+</h3>
    <p className="text-slate-500 text-sm">AI Projects</p>
    </div>
</div>
    </div>
</section>

<div className="max-w-5xl mx-auto px-6 py-4">
  <div className="h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
</div>

            {/* 3. About Me */}
<section id="about-me" className="max-w-4xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-teal-400 mr-2">01.</span> About Me
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
                Hello! I'm Madhavi, a B.Tech Computer Science student with a passion for 
                turning complex data into meaningful, intelligent solutions. My journey 
                started with core Java, but I quickly fell in love with the world of AI.
            </p>
            <p>
                I specialize in building <span className="text-teal-400">RAG-based applications</span> and 
                fine-tuning LLMs to solve real-world problems. Whether it's optimizing 
                algorithms or architecting full-stack web apps, I enjoy the challenge of 
                writing clean, efficient, and scalable code.
            </p>
            <p>
                Beyond the screen, I’m an active competitive programmer and a tech enthusiast 
                always looking to collaborate on projects that push the boundaries of 
                automation and machine learning.
            </p>
        </div>

        {/* Visual Element: Optional photo or skill highlight */}
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <h4 className="text-teal-400 font-mono mb-4 text-sm tracking-widest uppercase">Current Focus</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span>🚀</span> AI & Machine Learning</li>
                    <li className="flex items-center gap-2"><span>🌐</span> Full-Stack Web Development</li>
                    <li className="flex items-center gap-2"><span>🧠</span> LLM & RAG Architectures</li>
                    <li className="flex items-center gap-2"><span>💻</span> Java Core & Data Structures</li>
                </ul>
            </div>
        </div>
    </div>
</section>

            {/* 4. Education */}
<section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-teal-400 mr-2">02.</span> Education
    </h2>

    <div className="space-y-12">
        {/* Timeline Item */}
        <div className="relative pl-8 border-l border-slate-800 group">
            {/* Dot indicator */}
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-800 group-hover:bg-teal-400 transition-colors duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-lg font-bold text-slate-200">B.Tech in Computer Science</h4>
                <span className="text-teal-400 font-mono text-sm">2024 - Present</span>
            </div>
            <p className="text-slate-400 font-medium mb-2">GLA University</p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                Currently pursuing B.Tech with a strong focus on Data Structures, Algorithms, 
                and Artificial Intelligence. Engaging in technical projects and core software engineering concepts.
            </p>
        </div>

        {/* Aap yahan ek aur item add kar sakti hain, jaise 12th ki schooling */}
        {
        <div className="relative pl-8 border-l border-slate-800 group">
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-800 group-hover:bg-teal-400 transition-colors duration-300"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-lg font-bold text-slate-200">Senior Secondary (Class XII)</h4>
                <span className="text-teal-400 font-mono text-sm">2022 - 2024</span>
            </div>
            <p className="text-slate-400 font-medium">City Convent School</p>
        </div>
        }
    </div>
</section>

            {/* 5. Skills */}
<section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-teal-400 mr-2">03.</span> Skills
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
    {
    "title": "Core AI & Machine Learning",
    "skills": ["Generative AI", "LLMs", "RAG (Retrieval-Augmented Generation)", "Data Science", "Scikit-learn", "Pandas & NumPy"]
    },
    {
    "title": "AI Engineering & Deployment",
    "skills": ["Streamlit", "REST APIs", "Docker", "Node.js (Backend)", "React.js (Frontend)"]
    },
    {
    "title": "Programming & Data Logic",
    "skills": ["Python", "Java", "C", "Data Structures & Algorithms (DSA)", "SQL", "MongoDB"]
    },
    {"title": "Tools & Platforms",
    "skills": ["Git","GitHub","VS Code","Power BI","Linux","Postman"]
    }
].map((category, idx) => (
            <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-all group">
                <h4 className="text-teal-400 font-bold mb-4 text-sm uppercase tracking-wider">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300 group-hover:text-teal-400 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ))}
    </div>
</section>

{/* 6. Projects */}
<section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-teal-400 mr-2">04.</span> Featured Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
        {[
            {
                title:"AI-Resume-Analyzer",
                desc:"Built an AI-powered Resume Analyzer using Python, NLP and Streamlit that automatically extracts skills, analyzes resume content and provides ATS-based feedback to improve resume quality.",
                tech:["Python","NLP","Machine Learning","AI","PDF-Processing","Streamlit","Text-Processing"],
                github:"https://github.com/madhavisolanki-ui/AI-Resume-Analyzer",
                live:"#"
            },
            {
                title:"Student-Performance-Analyzer",
                desc:"Developed an end-to-end Machine Learning application using Scikit-learn and Streamlit to predict student performance through data analysis and real-time forecasting.",
                tech:["Python","Machine Learning","Data-Analysis","Streamlit","Scikit-learn"],
                github:"https://github.com/madhavisolanki-ui/Student-Performance-Analyzer",
                live:"#"
            }
        ].map((project, i) => (
            <div key={i} className="group bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-3">
                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                        <a href={project.live} className="text-slate-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                    </div>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2 py-1 rounded">{t}</span>
                    ))}
                </div>
            </div>
        ))}
    </div>
</section>

{/* 7. Experience / Internships */}
<section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-teal-400 mr-2">05.</span> Experience & Research
    </h2>

    <div className="space-y-12">

        {/* Open Source Contribution (Already discussed) */}
        <div className="relative pl-8 border-l border-slate-800 group">
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-800 group-hover:bg-teal-400 transition-colors duration-300"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-lg font-bold text-slate-200">Open Source Contributor</h4>
                <span className="text-teal-400 font-mono text-sm">May 2026 - Present</span>
            </div>
            <p className="text-slate-400 font-medium mb-4">GitHub | Global Community</p>
            <ul className="list-disc list-outside text-slate-500 text-sm leading-relaxed max-w-xl ml-4 space-y-2">
                <li>Contributed to open-source projects by resolving bugs and improving documentation.</li>
                <li>Active member of developer communities, focusing on collaborative coding and peer reviews.</li>
            </ul>
        </div>
    </div>
</section>

{/* 8. Certifications */}
<section id="certs" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
        <span className="text-teal-400 mr-2">06.</span> Certifications
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
        {[
            { title: "What Is Generative AI?", org: "LinkedIn Learning", date: "Jun 2026", img: "/images/gen-ai-lin.png" },
            { title: "Get started building with Power BI", org: "Microsoft Learn", date: "Jun 2026", img: "/images/power-BI.png" },
            { title: "Develop a vision-enabled generative AI application", org: "Microsoft Learn", date: "Jun 2026", img: "/images/gen-ai-vision.png" },
            { title: "MongoDB Overview: Core Concepts and Architecture", org: "MongoDB", date: "Mar 2026", img: "/images/MongoDB.png" },
            { title: "GenAI Powered Data Analytics Job Simulation", org: "TATA Group", date: "Nov 2025", img: "/images/tata.png" },
            { title: "Data Science", org: "Infosys Springboard", date: "Aug 2025", img: "/images/data-science.png" }
        ].map((cert, i) => (
            <div key={i} className="group relative bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 overflow-hidden">
                
                {/* 1. Background image (Hidden by default, shows on hover) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
                </div>

                {/* 2. Hover "View" Button (Centered on card) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={cert.img} target="_blank" rel="noreferrer" className="px-5 py-2 bg-teal-500/10 border border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition-all transform scale-90 group-hover:scale-100">
                        View Certificate
                    </a>
                </div>

                {/* 3. Text Content (Always visible) */}
                <div className="relative z-0">
                    <h4 className="text-md font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
                        {cert.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">{cert.org}</p>
                    <span className="text-xs font-mono text-teal-500/70 mt-2 block">{cert.date}</span>
                </div>
            </div>
        ))}
    </div>
</section>

<section id="achievements" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
    <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center">
        <span className="text-teal-400 mr-2">07.</span> Achievements & Profiles
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
    { 
        name: "LeetCode", 
        url: "https://leetcode.com/u/Madhavi_1912/", 
        desc: "400+ Solved | 4 Badges", 
        icon: <SiLeetcode className="text-orange-500" /> 
    },
    { 
        name: "CodeChef", 
        url: "https://www.codechef.com/users/local_lions_10", 
        desc: "100+ Solved | 1 Badge", 
        icon: <SiCodechef className="text-yellow-700" /> 
    },
    { 
        name: "GeeksforGeeks", 
        url: "https://www.geeksforgeeks.org/profile/madhavisot493", 
        desc: "150+ Solved", 
        icon: <SiGeeksforgeeks className="text-green-600" /> 
    },
    { 
        name: "HackerRank", 
        url: "https://www.hackerrank.com/profile/madhavisolanki02", 
        desc: "100+ Solved | 5 Badges", 
        icon: <SiHackerrank className="text-green-500" /> 
    }
].map((platform, i) => (
            <a 
                key={i} 
                href={platform.url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 bg-slate-900/30 p-4 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-all group"
            >
                <div className="text-3xl">
                    {platform.icon}
                </div>
                <div>
                    <h4 className="font-bold text-slate-200 group-hover:text-teal-400">{platform.name}</h4>
                    <p className="text-xs text-slate-400">{platform.desc}</p>
                </div>
            </a>
        ))}
    </div>

    {/* Achievements List */}
    <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
    <h4 className="text-xl font-bold text-slate-100 mb-8">Key Achievements</h4>
    
    <div className="space-y-6">
        {/* Achievement Item 1 */}
        <div className="flex gap-4">
            <span className="text-2xl mt-1">🏆</span>
            <div>
                <h5 className="font-bold text-slate-200">Problem Solving Excellence</h5>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Solved 800+ complex DSA problems across LeetCode, CodeChef, and GeeksforGeeks, demonstrating strong algorithmic logic.
                </p>
            </div>
        </div>

        {/* Achievement Item 2 */}
        <div className="flex gap-4">
            <span className="text-2xl mt-1">✨</span>
            <div>
                <h5 className="font-bold text-slate-200">AI & Prompt Engineering</h5>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Participated in 'The Prompt Prodigy' Challenge by AI Academia; gained hands-on experience in leveraging GenAI models through advanced prompt engineering.
                </p>
            </div>
        </div>

        {/* Achievement Item 3 */}
        <div className="flex gap-4">
            <span className="text-2xl mt-1">🏅</span>
            <div>
                <h5 className="font-bold text-slate-200">Technical Competitions</h5>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Successfully participated in SheTech Coding Quest (IEEE WIE) and Devi@thon Hackathon, focusing on collaborative problem-solving and scalable software solutions.
                </p>
            </div>
        </div>
    </div>
</div>
</section>
            {/* 10. Contact Section */}
            <section id="contact" className="max-w-xl mx-auto px-6 py-24 border-t border-slate-900 text-center">
                <h3 className="text-3xl font-bold text-slate-100 mb-4">Let's Connect</h3>
                    <p className="text-slate-400 mb-8">
                        Currently exploring new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                {/* LinkedIn Button */}
                <div className="mb-12">
                    <a 
                        href="https://www.linkedin.com/in/madhavi-solanki-9a36b0337" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 text-slate-200 px-8 py-3 rounded-xl transition-all hover:border-teal-500/50 hover:text-teal-400"
                    >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                        LinkedIn Profile
                    </a>
                </div>

                {/* Form Section with Card Styling */}
                <div className="bg-slate-900/20 p-6 md:p-8 rounded-2xl border border-slate-800">
                    <form onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    name="from_name" 
                    type="text" 
                    placeholder="Your Name" required 
                    className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-sm outline-none focus:border-teal-500 transition-colors" />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Your Email" required 
                    className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-sm outline-none focus:border-teal-500 transition-colors" />
                </div>
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="4" required 
                    className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-sm outline-none focus:border-teal-500 transition-colors">
                    </textarea>
                        <button 
                            type="submit" 
                            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-teal-500/20 active:scale-95">
                            Send Message 🚀
                        </button>
                            {status && <p className="text-teal-400 text-sm mt-2 text-center">{status}</p>}
                    </form>
                </div>
            </section>


            {/*11. Footer */}
            <footer className="py-10 border-t border-slate-900 text-center">
                <p className="text-slate-500 text-sm mb-2">
                    &copy; {new Date().getFullYear()} Madhavi Solanki. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs font-mono">
                Built with React, Tailwind CSS & Passion
                </p>
            </footer>
        </div>
    );
}

export default App;
