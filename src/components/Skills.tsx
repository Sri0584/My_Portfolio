import { useState } from "react";

type SkillCategory = {
	label: string;
	skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
	{
		label: "Frontend",
		skills: [
			{ name: "React / React Native", level: 95 },
			{ name: "TypeScript", level: 90 },
			{ name: "JavaScript (ES6+)", level: 95 },
			{ name: "HTML5 / CSS3", level: 92 },
			{ name: "Redux / Zustand", level: 85 },
			{ name: "Tailwind CSS", level: 88 },
			{ name: "Angular", level: 75 },
		],
	},
	{
		label: "Backend",
		skills: [
			{ name: "Node.js / Express", level: 92 },
			{ name: "Java / Spring Boot", level: 85 },
			{ name: "Python / Django", level: 78 },
			{ name: "REST APIs", level: 95 },
			{ name: "GraphQL", level: 80 },
			{ name: "Microservices", level: 82 },
			{ name: "WebSockets", level: 75 },
		],
	},
	{
		label: "Database",
		skills: [
			{ name: "PostgreSQL", level: 88 },
			{ name: "MySQL", level: 85 },
			{ name: "MongoDB", level: 82 },
			{ name: "Redis", level: 78 },
			{ name: "Elasticsearch", level: 72 },
			{ name: "Firebase", level: 80 },
		],
	},
	{
		label: "Cloud & DevOps",
		skills: [
			{ name: "AWS (EC2, S3, Lambda)", level: 82 },
			{ name: "Azure", level: 75 },
			{ name: "Docker", level: 85 },
			{ name: "Kubernetes", level: 72 },
			{ name: "CI/CD (Jenkins, GitHub Actions)", level: 80 },
			{ name: "Git / GitHub", level: 95 },
		],
	},
];

const techBadges = [
	"React",
	"TypeScript",
	"Node.js",
	"Java",
	"Spring Boot",
	"Python",
	"PostgreSQL",
	"MongoDB",
	"Redis",
	"Docker",
	"Kubernetes",
	"AWS",
	"Azure",
	"GraphQL",
	"REST API",
	"Microservices",
	"Redux",
	"Tailwind",
	"Jest",
	"Webpack",
	"Vite",
	"Git",
];

export default function Skills() {
	const [active, setActive] = useState("Frontend");

	const current = categories.find((c) => c.label === active)!;

	return (
		<section id='skills' className='py-24 bg-slate-900/40'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<span className='text-cyan-400 text-sm font-semibold tracking-widest uppercase'>
						Technical Expertise
					</span>
					<h2 className='text-4xl font-bold text-white mt-3'>
						Skills & Technologies
					</h2>
					<p className='text-slate-400 mt-4 max-w-xl mx-auto'>
						Cross-stack expertise spanning modern frontend frameworks, robust
						backend systems, and cloud infrastructure.
					</p>
				</div>

				{/* Category Tabs */}
				<div className='flex flex-wrap justify-center gap-2 mb-12'>
					{categories.map(({ label }) => (
						<button
							key={label}
							onClick={() => setActive(label)}
							className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
								active === label ?
									"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
								:	"bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50"
							}`}
						>
							{label}
						</button>
					))}
				</div>

				{/* Skill Bars */}
				<div className='bg-slate-900/60 border border-slate-800/50 rounded-2xl p-8 mb-16'>
					<div className='grid sm:grid-cols-2 gap-6'>
						{current.skills.map(({ name, level }) => (
							<div key={name}>
								<div className='flex justify-between mb-2'>
									<span className='text-slate-300 text-sm font-medium'>
										{name}
									</span>
									<span className='text-cyan-400 text-sm font-semibold'>
										{level}%
									</span>
								</div>
								<div className='h-2 bg-slate-800 rounded-full overflow-hidden'>
									<div
										className='h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-700'
										style={{ width: `${level}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Tech Badges */}
				<div>
					<h3 className='text-center text-slate-400 text-sm font-medium tracking-widest uppercase mb-6'>
						All Technologies
					</h3>
					<div className='flex flex-wrap justify-center gap-3'>
						{techBadges.map((tech) => (
							<span
								key={tech}
								className='px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium hover:border-cyan-400/40 hover:text-white hover:bg-slate-700/60 transition-all duration-200 cursor-default'
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
