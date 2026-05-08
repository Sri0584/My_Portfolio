import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type Job = {
	company: string;
	role: string;
	period: string;
	location: string;
	type: string;
	description: string[];
	tech: string[];
};

const jobs: Job[] = [
	{
		company: "Tech Corporation",
		role: "Senior Full Stack Developer",
		period: "Jan 2023 – Present",
		location: "Remote",
		type: "Full-time",
		description: [
			"Architected and developed microservices-based web applications using React, Node.js, and Java Spring Boot, reducing load times by 40%.",
			"Led migration of a legacy monolith to microservices architecture on AWS, improving system scalability and reducing deployment time.",
			"Built real-time dashboard features using WebSockets and Redis pub/sub, supporting 10k+ concurrent users.",
			"Mentored junior developers, conducted code reviews, and established frontend coding standards.",
			"Collaborated with UX/product teams to deliver pixel-perfect, accessible UI components.",
		],
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"Java",
			"AWS",
			"Redis",
			"Docker",
			"PostgreSQL",
		],
	},
	{
		company: "Digital Solutions Inc.",
		role: "Full Stack Developer",
		period: "Jun 2021 – Dec 2022",
		location: "Hybrid",
		type: "Full-time",
		description: [
			"Developed and maintained multiple React single-page applications with Redux for state management.",
			"Built RESTful and GraphQL APIs using Node.js and Express, integrating third-party services.",
			"Designed and optimized PostgreSQL database schemas, improving query performance by 35%.",
			"Implemented CI/CD pipelines using GitHub Actions and Docker, reducing release cycles from weekly to daily.",
			"Contributed to an Angular enterprise portal serving 50k+ monthly active users.",
		],
		tech: [
			"React",
			"Angular",
			"GraphQL",
			"Node.js",
			"PostgreSQL",
			"Docker",
			"GitHub Actions",
		],
	},
	{
		company: "Startup Ventures",
		role: "Frontend Developer",
		period: "Aug 2020 – May 2021",
		location: "On-site",
		type: "Full-time",
		description: [
			"Built responsive, mobile-first web applications using React and TypeScript from scratch.",
			"Integrated REST APIs and implemented robust error handling and loading states.",
			"Worked closely with designers to translate Figma mockups into pixel-perfect components.",
			"Improved application performance through code splitting, lazy loading, and memoization.",
		],
		tech: ["React", "TypeScript", "CSS3", "REST API", "Jest", "Webpack"],
	},
	{
		company: "Software Labs",
		role: "Junior Software Developer",
		period: "Jan 2019 – Jul 2020",
		location: "On-site",
		type: "Full-time",
		description: [
			"Developed and maintained Java backend services for enterprise clients using Spring Boot.",
			"Created MySQL database schemas and wrote optimized stored procedures.",
			"Built internal tools using vanilla JavaScript and jQuery to automate reporting tasks.",
			"Participated in agile ceremonies, sprint planning, and daily standups.",
		],
		tech: ["Java", "Spring Boot", "MySQL", "JavaScript", "jQuery", "Git"],
	},
];

export default function Experience() {
	const [expanded, setExpanded] = useState<number | null>(0);

	return (
		<section id='experience' className='py-24 bg-slate-950'>
			<div className='max-w-4xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<span className='text-cyan-400 text-sm font-semibold tracking-widest uppercase'>
						Career
					</span>
					<h2 className='text-4xl font-bold text-white mt-3'>
						Work Experience
					</h2>
				</div>

				<div className='relative'>
					{/* Timeline line */}
					<div className='absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-700 to-transparent hidden sm:block' />

					<div className='space-y-4'>
						{jobs.map((job, i) => (
							<div key={i} className='relative sm:pl-16'>
								{/* Timeline dot */}
								<div className='absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-950 hidden sm:flex items-center justify-center'>
									<div
										className={`w-2 h-2 rounded-full ${expanded === i ? "bg-cyan-400" : "bg-slate-600"} transition-colors`}
									/>
								</div>

								<div
									className={`bg-slate-900/60 border rounded-2xl overflow-hidden transition-all duration-200 ${
										expanded === i ?
											"border-cyan-400/30 shadow-lg shadow-cyan-400/5"
										:	"border-slate-800/50 hover:border-slate-700/50"
									}`}
								>
									<button
										className='w-full text-left p-6'
										onClick={() => setExpanded(expanded === i ? null : i)}
									>
										<div className='flex items-start justify-between gap-4'>
											<div className='flex-1'>
												<div className='flex items-center gap-2 mb-1'>
													<Briefcase
														size={16}
														className='text-cyan-400 shrink-0'
													/>
													<span className='text-cyan-400 text-sm font-medium'>
														{job.company}
													</span>
													<span className='text-slate-600 text-xs'>•</span>
													<span className='text-slate-500 text-xs'>
														{job.type}
													</span>
												</div>
												<h3 className='text-white font-semibold text-lg'>
													{job.role}
												</h3>
												<div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-slate-400 text-sm'>
													<span className='flex items-center gap-1.5'>
														<Calendar size={13} />
														{job.period}
													</span>
													<span>{job.location}</span>
												</div>
											</div>
											<div className='text-slate-500 shrink-0 mt-1'>
												{expanded === i ?
													<ChevronUp size={20} />
												:	<ChevronDown size={20} />}
											</div>
										</div>
									</button>

									{expanded === i && (
										<div className='px-6 pb-6 border-t border-slate-800/50 pt-5'>
											<ul className='space-y-2 mb-5'>
												{job.description.map((item, j) => (
													<li
														key={j}
														className='text-slate-400 text-sm leading-relaxed flex gap-3'
													>
														<span className='text-cyan-400 mt-1 shrink-0'>
															›
														</span>
														{item}
													</li>
												))}
											</ul>
											<div className='flex flex-wrap gap-2'>
												{job.tech.map((t) => (
													<span
														key={t}
														className='px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-md text-xs text-slate-300'
													>
														{t}
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Education */}
				<div className='mt-16 pt-12 border-t border-slate-800/50'>
					<h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
						<span className='text-cyan-400'>🎓</span> Education
					</h3>
					<div className='grid sm:grid-cols-2 gap-4'>
						<div className='bg-slate-900/60 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-400/20 transition-colors'>
							<div className='text-cyan-400 text-sm font-medium mb-2'>
								2017 – 2019
							</div>
							<h4 className='text-white font-semibold'>Master of Science</h4>
							<p className='text-slate-400 text-sm mt-1'>Computer Science</p>
							<p className='text-slate-500 text-sm'>University of Technology</p>
						</div>
						<div className='bg-slate-900/60 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-400/20 transition-colors'>
							<div className='text-cyan-400 text-sm font-medium mb-2'>
								2013 – 2017
							</div>
							<h4 className='text-white font-semibold'>
								Bachelor of Engineering
							</h4>
							<p className='text-slate-400 text-sm mt-1'>
								Computer Science & Engineering
							</p>
							<p className='text-slate-500 text-sm'>Engineering College</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
