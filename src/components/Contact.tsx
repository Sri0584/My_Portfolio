import {
	Mail,
	Linkedin,
	Github,
	MapPin,
	Send,
	MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 4000);
		setForm({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section id='contact' className='py-24 bg-slate-950'>
			<div className='max-w-5xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<span className='text-cyan-400 text-sm font-semibold tracking-widest uppercase'>
						Get In Touch
					</span>
					<h2 className='text-4xl font-bold text-white mt-3'>
						Let's Work Together
					</h2>
					<p className='text-slate-400 mt-4 max-w-xl mx-auto'>
						I'm currently open to new opportunities. Whether you have a project,
						a question, or just want to say hi — my inbox is always open.
					</p>
				</div>

				<div className='grid lg:grid-cols-5 gap-10'>
					{/* Left Info */}
					<div className='lg:col-span-2 space-y-6'>
						<div>
							<h3 className='text-white font-semibold text-lg mb-4'>
								Contact Info
							</h3>
							<div className='space-y-4'>
								<a
									href='mailto:srilatha@example.com'
									className='flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800/50 rounded-xl hover:border-cyan-400/30 transition-all group'
								>
									<div className='w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0'>
										<Mail size={18} className='text-cyan-400' />
									</div>
									<div>
										<p className='text-slate-500 text-xs'>Email</p>
										<p className='text-slate-300 text-sm group-hover:text-white transition-colors'>
											srilatha@example.com
										</p>
									</div>
								</a>

								<a
									href='https://linkedin.com/in/srilatha'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800/50 rounded-xl hover:border-sky-400/30 transition-all group'
								>
									<div className='w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center shrink-0'>
										<Linkedin size={18} className='text-sky-400' />
									</div>
									<div>
										<p className='text-slate-500 text-xs'>LinkedIn</p>
										<p className='text-slate-300 text-sm group-hover:text-white transition-colors'>
											linkedin.com/in/srilatha
										</p>
									</div>
								</a>

								<a
									href='https://github.com/srilatha'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800/50 rounded-xl hover:border-slate-600/60 transition-all group'
								>
									<div className='w-10 h-10 rounded-lg bg-slate-700/40 flex items-center justify-center shrink-0'>
										<Github size={18} className='text-slate-400' />
									</div>
									<div>
										<p className='text-slate-500 text-xs'>GitHub</p>
										<p className='text-slate-300 text-sm group-hover:text-white transition-colors'>
											github.com/srilatha
										</p>
									</div>
								</a>

								<div className='flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800/50 rounded-xl'>
									<div className='w-10 h-10 rounded-lg bg-slate-700/40 flex items-center justify-center shrink-0'>
										<MapPin size={18} className='text-slate-400' />
									</div>
									<div>
										<p className='text-slate-500 text-xs'>Location</p>
										<p className='text-slate-300 text-sm'>
											United States (Open to Remote)
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-400/20 rounded-xl p-5'>
							<div className='flex items-center gap-2 mb-2'>
								<div className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' />
								<span className='text-cyan-400 text-sm font-medium'>
									Available for hire
								</span>
							</div>
							<p className='text-slate-400 text-sm'>
								Currently seeking full-time or contract opportunities in
								software engineering.
							</p>
						</div>
					</div>

					{/* Right Form */}
					<div className='lg:col-span-3'>
						<div className='bg-slate-900/60 border border-slate-800/50 rounded-2xl p-8'>
							<div className='flex items-center gap-3 mb-6'>
								<MessageSquare size={20} className='text-cyan-400' />
								<h3 className='text-white font-semibold'>Send a Message</h3>
							</div>

							{submitted ?
								<div className='flex flex-col items-center justify-center py-12 text-center'>
									<div className='w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4'>
										<Send size={28} className='text-cyan-400' />
									</div>
									<h4 className='text-white font-semibold text-lg mb-2'>
										Message Sent!
									</h4>
									<p className='text-slate-400 text-sm'>
										Thanks for reaching out. I'll get back to you soon.
									</p>
								</div>
							:	<form onSubmit={handleSubmit} className='space-y-5'>
									<div className='grid sm:grid-cols-2 gap-4'>
										<div>
											<label className='block text-slate-400 text-sm mb-1.5'>
												Name
											</label>
											<input
												type='text'
												name='name'
												value={form.name}
												onChange={handleChange}
												required
												placeholder='Your name'
												className='w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all'
											/>
										</div>
										<div>
											<label className='block text-slate-400 text-sm mb-1.5'>
												Email
											</label>
											<input
												type='email'
												name='email'
												value={form.email}
												onChange={handleChange}
												required
												placeholder='your@email.com'
												className='w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all'
											/>
										</div>
									</div>
									<div>
										<label className='block text-slate-400 text-sm mb-1.5'>
											Subject
										</label>
										<input
											type='text'
											name='subject'
											value={form.subject}
											onChange={handleChange}
											required
											placeholder='Job opportunity / Collaboration'
											className='w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all'
										/>
									</div>
									<div>
										<label className='block text-slate-400 text-sm mb-1.5'>
											Message
										</label>
										<textarea
											name='message'
											value={form.message}
											onChange={handleChange}
											required
											rows={5}
											placeholder='Tell me about the role or project...'
											className='w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none'
										/>
									</div>
									<button
										type='submit'
										className='w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center justify-center gap-2'
									>
										<Send size={18} />
										Send Message
									</button>
								</form>
							}
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='mt-20 pt-8 border-t border-slate-800/50 text-center'>
					<p className='text-slate-600 text-sm'>
						Built with React + TypeScript + Tailwind CSS &nbsp;·&nbsp; &copy;{" "}
						{new Date().getFullYear()} Srilatha
					</p>
				</div>
			</div>
		</section>
	);
}
