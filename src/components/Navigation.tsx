import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

export default function Navigation({
	activeSection,
}: {
	activeSection: string;
}) {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ?
					"bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/50 shadow-xl"
				:	"bg-transparent"
			}`}
		>
			<nav className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
				<button
					onClick={() => scrollTo("home")}
					className='flex items-center gap-2 text-cyan-400 font-bold text-xl tracking-tight hover:text-cyan-300 transition-colors'
				>
					<Code2 size={24} />
					<span>Srilatha</span>
				</button>

				<ul className='hidden md:flex items-center gap-1'>
					{navLinks.map(({ id, label }) => (
						<li key={id}>
							<button
								onClick={() => scrollTo(id)}
								className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
									activeSection === id ?
										"text-cyan-400 bg-cyan-400/10"
									:	"text-slate-400 hover:text-white hover:bg-slate-800/50"
								}`}
							>
								{label}
							</button>
						</li>
					))}
				</ul>

				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className='md:hidden text-slate-400 hover:text-white transition-colors p-2'
				>
					{menuOpen ?
						<X size={22} />
					:	<Menu size={22} />}
				</button>
			</nav>

			{menuOpen && (
				<div className='md:hidden bg-slate-950/98 border-b border-slate-800/50 px-6 pb-4'>
					<ul className='flex flex-col gap-1'>
						{navLinks.map(({ id, label }) => (
							<li key={id}>
								<button
									onClick={() => scrollTo(id)}
									className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
										activeSection === id ?
											"text-cyan-400 bg-cyan-400/10"
										:	"text-slate-400 hover:text-white hover:bg-slate-800/50"
									}`}
								>
									{label}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}
