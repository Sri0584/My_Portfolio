import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

const stats = [
	{ value: "5+", label: "Years Experience" },
	{ value: "15+", label: "Projects Delivered" },
	{ value: "10+", label: "Technologies" },
	{ value: "3", label: "Cross-Stack Domains" },
];

export default function About() {
	return (
		<section id='about' className='py-24 bg-slate-950'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<span className='text-cyan-400 text-sm font-semibold tracking-widest uppercase'>
						About Me
					</span>
					<h2 className='text-4xl font-bold text-white mt-3'>Who I Am</h2>
				</div>

				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Left - Image & Stats */}
					<div className='space-y-8'>
						<div className='relative'>
							<div className='w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden ring-4 ring-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-sky-500/20 flex items-center justify-center'>
								<img
									src='https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400'
									alt='Professional workspace'
									className='w-full h-full object-cover opacity-80'
								/>
							</div>
							<div className='absolute -bottom-4 -right-4 lg:-right-16 bg-cyan-400 rounded-xl px-4 py-2 text-slate-950 font-bold text-sm shadow-xl'>
								Full Stack Engineer
							</div>
						</div>

						<div className='grid grid-cols-2 gap-4 pt-8'>
							{stats.map(({ value, label }) => (
								<div
									key={label}
									className='bg-slate-900/60 border border-slate-800/50 rounded-xl p-5 text-center hover:border-cyan-400/30 transition-colors'
								>
									<div className='text-3xl font-bold text-cyan-400 mb-1'>
										{value}
									</div>
									<div className='text-slate-400 text-sm'>{label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Right - Text */}
					<div className='space-y-6'>
						<p className='text-slate-300 text-lg leading-relaxed'>
							I'm a{" "}
							<span className='text-white font-medium'>
								Full Stack Software Engineer
							</span>{" "}
							with a passion for building clean, performant, and user-centric
							applications. My expertise spans frontend development with React
							and TypeScript, backend engineering with Node.js and Java Spring
							Boot, and working with both SQL and NoSQL databases.
						</p>
						<p className='text-slate-400 leading-relaxed'>
							With hands-on experience in cloud platforms (AWS, Azure),
							containerization (Docker, Kubernetes), and CI/CD pipelines, I
							bridge the gap between design and deployment — delivering
							end-to-end solutions that scale.
						</p>
						<p className='text-slate-400 leading-relaxed'>
							I thrive in agile teams, enjoy mentoring peers, and am always
							exploring new technologies to sharpen my craft and deliver
							meaningful software.
						</p>

						<div className='grid sm:grid-cols-2 gap-4 pt-2'>
							<div className='flex items-center gap-3 text-slate-400'>
								<MapPin size={18} className='text-cyan-400 shrink-0' />
								<span>United States</span>
							</div>
							<div className='flex items-center gap-3 text-slate-400'>
								<Briefcase size={18} className='text-cyan-400 shrink-0' />
								<span>Open to Remote / Hybrid</span>
							</div>
							<div className='flex items-center gap-3 text-slate-400'>
								<GraduationCap size={18} className='text-cyan-400 shrink-0' />
								<span>MS Computer Science</span>
							</div>
							<div className='flex items-center gap-3 text-slate-400'>
								<Code2 size={18} className='text-cyan-400 shrink-0' />
								<span>Frontend + Backend + Cloud</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
