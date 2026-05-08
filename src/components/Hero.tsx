import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const roles = [
	"Full Stack Developer",
	"Frontend Engineer",
	"Backend Developer",
	"React Developer",
	"Node.js Developer",
];

export default function Hero() {
	const [roleIndex, setRoleIndex] = useState(0);
	const [displayed, setDisplayed] = useState("");
	const [typing, setTyping] = useState(true);

	useEffect(() => {
		const currentRole = roles[roleIndex];
		let timeout: ReturnType<typeof setTimeout>;

		if (typing) {
			if (displayed.length < currentRole.length) {
				timeout = setTimeout(
					() => setDisplayed(currentRole.slice(0, displayed.length + 1)),
					80,
				);
			} else {
				timeout = setTimeout(() => setTyping(false), 2000);
			}
		} else {
			if (displayed.length > 0) {
				timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
			} else {
				setRoleIndex((i) => (i + 1) % roles.length);
				setTyping(true);
			}
		}

		return () => clearTimeout(timeout);
	}, [displayed, typing, roleIndex]);

	const scrollDown = () =>
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id='home'
			className='relative min-h-screen flex items-center justify-center overflow-hidden'
		>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' />
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.08)_0%,transparent_60%)]' />
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(14,165,233,0.06)_0%,transparent_60%)]' />

			{/* Grid pattern */}
			<div
				className='absolute inset-0 opacity-[0.02]'
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			<div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
				<div className='inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8 text-cyan-400 text-sm font-medium'>
					<span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' />
					Available for new opportunities
				</div>

				<h1 className='text-5xl md:text-7xl font-bold mb-4 tracking-tight'>
					<span className='text-white'>Hi, I'm </span>
					<span className='bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent'>
						Srilatha
					</span>
				</h1>

				<div className='h-14 mb-6 flex items-center justify-center'>
					<span className='text-2xl md:text-3xl text-slate-300 font-light'>
						{displayed}
						<span className='inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse' />
					</span>
				</div>

				<p className='text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
					Passionate software engineer with expertise across the full stack —
					from crafting responsive UIs with React to building scalable APIs and
					microservices with Node.js and Java.
				</p>

				<div className='flex flex-wrap items-center justify-center gap-4 mb-16'>
					<a
						href='#projects'
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className='px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5'
					>
						View My Work
					</a>
					<a
						href='mailto:srilatha@example.com'
						className='px-8 py-3.5 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/50 flex items-center gap-2'
					>
						<Download size={18} />
						Get In Touch
					</a>
				</div>

				<div className='flex items-center justify-center gap-6'>
					<a
						href='https://github.com/srilatha'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-500 hover:text-white transition-all duration-200 hover:-translate-y-1 p-2'
					>
						<Github size={22} />
					</a>
					<a
						href='https://linkedin.com/in/srilatha'
						target='_blank'
						rel='noopener noreferrer'
						className='text-slate-500 hover:text-sky-400 transition-all duration-200 hover:-translate-y-1 p-2'
					>
						<Linkedin size={22} />
					</a>
					<a
						href='mailto:srilatha@example.com'
						className='text-slate-500 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-1 p-2'
					>
						<Mail size={22} />
					</a>
				</div>
			</div>

			<button
				onClick={scrollDown}
				className='absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce'
			>
				<ArrowDown size={24} />
			</button>
		</section>
	);
}
