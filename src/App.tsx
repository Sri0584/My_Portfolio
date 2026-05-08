import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"home",
				"about",
				"skills",
				"experience",
				"projects",
				"contact",
			];
			const scrollY = window.scrollY + 100;

			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const { offsetTop, offsetHeight } = el;
					if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='min-h-screen bg-slate-950 text-white'>
			<Navigation activeSection={activeSection} />
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
