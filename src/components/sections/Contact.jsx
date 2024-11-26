import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		eventType: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simuliamo l'invio del form
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({
				name: "",
				company: "",
				email: "",
				eventType: "",
				message: "",
			});
		}, 1500);
	};

	const contactInfo = [
		{
			title: "Telefono",
			value: "+33 (0)6 06 68 67 46",
			subtext: "Lun-Ven, 9am-6pm",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			),
		},
		{
			title: "Email",
			value: "contact@yminternational.pro",
			subtext: "Risposta entro 24h",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
		},
		{
			title: "Sede",
			value: "Sophia Antipolis, France",
			subtext: "Ufficio principale",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
		},
	];

	return (
		<section id="contact" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold text-ym-gray-dark mb-4">
						Parliamo del Tuo Progetto
					</h2>
					<p className="text-ym-gray-text max-w-2xl mx-auto">
						Compila il form per ricevere una consulenza personalizzata e un
						preventivo dettagliato
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Form Column */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl shadow-lg p-8"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-ym-gray-dark mb-2">
										Nome *
									</label>
									<input
										type="text"
										name="name"
										required
										value={formData.name}
										onChange={handleInputChange}
										className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ym-red focus:border-transparent"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-ym-gray-dark mb-2">
										Azienda
									</label>
									<input
										type="text"
										name="company"
										value={formData.company}
										onChange={handleInputChange}
										className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ym-red focus:border-transparent"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-ym-gray-dark mb-2">
									Email *
								</label>
								<input
									type="email"
									name="email"
									required
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ym-red focus:border-transparent"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-ym-gray-dark mb-2">
									Tipo di Evento
								</label>
								<select
									name="eventType"
									value={formData.eventType}
									onChange={handleInputChange}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ym-red focus:border-transparent"
								>
									<option value="">Seleziona il tipo di evento</option>
									<option value="conference">Conferenza Tech</option>
									<option value="exhibition">Fiera Professionale</option>
									<option value="hackathon">Hackathon</option>
									<option value="other">Altro</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-ym-gray-dark mb-2">
									Messaggio *
								</label>
								<textarea
									name="message"
									required
									value={formData.message}
									onChange={handleInputChange}
									rows={4}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ym-red focus:border-transparent resize-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={`w-full px-8 py-3 bg-ym-red text-white rounded-full hover:bg-opacity-90 transition-colors ${
									isSubmitting ? "opacity-75 cursor-not-allowed" : ""
								}`}
							>
								{isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
							</button>

							{submitStatus === "success" && (
								<p className="text-green-600 text-center">
									Messaggio inviato con successo!
								</p>
							)}
						</form>
					</motion.div>

					{/* Contact Info Column */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-start gap-4"
								>
									<div className="w-12 h-12 rounded-lg bg-ym-red/10 flex items-center justify-center flex-shrink-0">
										<span className="text-ym-red">{info.icon}</span>
									</div>
									<div>
										<h4 className="font-semibold text-ym-gray-dark">
											{info.title}
										</h4>
										<p className="text-ym-gray-text">{info.value}</p>
										<p className="text-sm text-ym-gray-text/80">
											{info.subtext}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* FAQ Section */}
						<div className="mt-12 bg-gray-50 rounded-xl p-6">
							<h3 className="text-xl font-bold text-ym-blue mb-6">
								Domande Frequenti
							</h3>
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold text-ym-gray-dark mb-2">
										Qual è il tempo di consegna?
									</h4>
									<p className="text-ym-gray-text">
										Consegniamo in 24-48h in tutta la Francia metropolitana.
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-ym-gray-dark mb-2">
										C'è un ordine minimo?
									</h4>
									<p className="text-ym-gray-text">
										No, ci adattiamo alle tue esigenze, indipendentemente dalla
										dimensione dell'ordine.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
