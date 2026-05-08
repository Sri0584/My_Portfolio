import {
	Github,
	ExternalLink,
	Globe,
	Server,
	LayoutGrid as Layout,
	Database,
} from "lucide-react";
import { useState } from "react";

type Project = {
	title: string;
	description: string;
	tech: string[];
	category: "Full Stack" | "Frontend" | "Backend";
	github?: string;
	live?: string;
	image: string;
	highlights: string[];
};

const projects: Project[] = [
	{
		title: "E-Commerce Platform",
		description:
			"A full-featured e-commerce web application with product catalog, shopping cart, payment integration, real-time inventory, and admin dashboard.",
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"Stripe",
			"Docker",
		],
		category: "Full Stack",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"Real-time inventory updates via WebSockets",
			"Stripe payment integration",
			"Admin analytics dashboard",
			"Redis caching for performance",
		],
	},
	{
		title: "Task Management App",
		description:
			"A collaborative project management tool with drag-and-drop boards, real-time updates, team workspaces, and detailed reporting.",
		tech: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "JWT"],
		category: "Full Stack",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"Kanban drag-and-drop interface",
			"Real-time collaboration with Socket.io",
			"JWT authentication & RBAC",
			"Activity logs and reporting",
		],
	},
	{
		title: "Healthcare Patient Portal",
		description:
			"A HIPAA-compliant patient portal for scheduling appointments, viewing records, secure messaging with providers, and telehealth.",
		tech: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "AWS"],
		category: "Full Stack",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"HIPAA-compliant data handling",
			"Appointment scheduling system",
			"Secure messaging",
			"AWS deployment with auto-scaling",
		],
	},
	{
		title: "Design System & Component Library",
		description:
			"A comprehensive React UI component library with 50+ accessible components, theming support, and detailed Storybook documentation.",
		tech: ["React", "TypeScript", "Storybook", "CSS Modules", "Rollup", "Jest"],
		category: "Frontend",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"50+ accessible components",
			"Full theme customization",
			"Storybook docs",
			"Tree-shakeable NPM package",
		],
	},
	{
		title: "API Gateway & Microservices",
		description:
			"A scalable microservices architecture with an API gateway, service discovery, centralized logging, and circuit breakers.",
		tech: [
			"Node.js",
			"Java",
			"Spring Boot",
			"Docker",
			"Kubernetes",
			"Kafka",
			"Prometheus",
		],
		category: "Backend",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"API Gateway with rate limiting",
			"Service mesh with Kubernetes",
			"Kafka event streaming",
			"Prometheus + Grafana monitoring",
		],
	},
	{
		title: "Real-Time Analytics Dashboard",
		description:
			"An interactive analytics dashboard for business intelligence with live data visualization, custom reports, and drill-down capabilities.",
		tech: [
			"React",
			"D3.js",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Redis",
			"WebSockets",
		],
		category: "Full Stack",
		github: "https://github.com/srilatha",
		image:
			"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
		highlights: [
			"Live data with WebSockets",
			"D3.js custom charts",
			"Export to PDF/CSV",
			"Role-based data access",
		],
	},
];

const filterOptions = ["All", "Full Stack", "Frontend", "Backend"];

const categoryIcon = {
	"Full Stack": Globe,
	Frontend: Layout,
	Backend: Server,
};

const categoryColor = {
	"Full Stack": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
	Frontend: "text-sky-400 bg-sky-400/10 border-sky-400/20",
	Backend: "text-teal-400 bg-teal-400/10 border-teal-400/20",
};

export default function Projects() {
	const [filter, setFilter] = useState("All");

	const filtered =
		filter === "All" ? projects : projects.filter((p) => p.category === filter);

	return (
		<section id='projects' className='py-24 bg-slate-900/40'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<span className='text-cyan-400 text-sm font-semibold tracking-widest uppercase'>
						Portfolio
					</span>
					<h2 className='text-4xl font-bold text-white mt-3'>
						Featured Projects
					</h2>
					<p className='text-slate-400 mt-4 max-w-xl mx-auto'>
						A collection of projects demonstrating cross-stack expertise — from
						pixel-perfect UIs to scalable backend systems.
					</p>
				</div>

				{/* Filter */}
				<div className='flex flex-wrap justify-center gap-2 mb-12'>
					{filterOptions.map((opt) => (
						<button
							key={opt}
							onClick={() => setFilter(opt)}
							className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
								filter === opt ?
									"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
								:	"bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50"
							}`}
						>
							{opt}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filtered.map((project, i) => {
						const Icon = categoryIcon[project.category];
						return (
							<div
								key={i}
								className='group bg-slate-900/60 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/5 flex flex-col'
							>
								{/* Image */}
								<div className='relative h-44 overflow-hidden'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent' />
									<span
										className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${categoryColor[project.category]}`}
									>
										<Icon size={12} />
										{project.category}
									</span>
								</div>

								{/* Content */}
								<div className='p-6 flex-1 flex flex-col'>
									<h3 className='text-white font-semibold text-lg mb-2'>
										{project.title}
									</h3>
									<p className='text-slate-400 text-sm leading-relaxed mb-4 flex-1'>
										{project.description}
									</p>

									{/* Highlights */}
									<ul className='space-y-1 mb-5'>
										{project.highlights.slice(0, 2).map((h, j) => (
											<li key={j} className='text-slate-500 text-xs flex gap-2'>
												<Database
													size={12}
													className='text-cyan-400/60 shrink-0 mt-0.5'
												/>
												{h}
											</li>
										))}
									</ul>

									{/* Tech */}
									<div className='flex flex-wrap gap-1.5 mb-5'>
										{project.tech.slice(0, 5).map((t) => (
											<span
												key={t}
												className='px-2 py-0.5 bg-slate-800/80 border border-slate-700/50 rounded text-xs text-slate-400'
											>
												{t}
											</span>
										))}
										{project.tech.length > 5 && (
											<span className='px-2 py-0.5 bg-slate-800/80 border border-slate-700/50 rounded text-xs text-slate-500'>
												+{project.tech.length - 5}
											</span>
										)}
									</div>

									{/* Actions */}
									<div className='flex gap-3 pt-4 border-t border-slate-800/50'>
										{project.github && (
											<a
												href={project.github}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm font-medium'
											>
												<Github size={16} />
												Code
											</a>
										)}
										{project.live && (
											<a
												href={project.live}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium ml-auto'
											>
												<ExternalLink size={16} />
												Live Demo
											</a>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* GitHub CTA */}
				<div className='mt-16 text-center'>
					<div className='inline-flex flex-col items-center gap-4 bg-slate-900/60 border border-slate-800/50 rounded-2xl px-10 py-8'>
						<Github size={32} className='text-slate-400' />
						<div>
							<p className='text-white font-semibold text-lg'>More on GitHub</p>
							<p className='text-slate-400 text-sm mt-1'>
								Explore all my open-source contributions and experiments
							</p>
						</div>
						<a
							href='https://github.com/srilatha'
							target='_blank'
							rel='noopener noreferrer'
							className='px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:border-cyan-400/30'
						>
							Visit GitHub Profile →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
