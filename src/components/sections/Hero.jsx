import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section className="relative min-h-screen pt-24 bg-gradient-to-br from-ym-red to-ym-blue overflow-hidden">
			{/* Background Shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
				<div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-white opacity-10"></div>
				<div className="absolute -bottom-10 right-1/4 w-80 h-80 rounded-full bg-white opacity-10"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
					<motion.h1
						className="text-4xl md:text-6xl font-bold text-white mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Trasforma il Tuo Brand con il Visual Commerce
					</motion.h1>

					<motion.p
						className="text-xl text-white/90 max-w-2xl mb-10"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Specializzati nel visual commerce, trasporto e logistica dei
						prodotti promozionali di corporate merchandising
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<button className="px-8 py-3 bg-white text-ym-red rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
							Richiedi Demo
						</button>
						<button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-ym-red transition-all duration-300">
							Scopri di Più
						</button>
					</motion.div>
				</div>
			</div>

			{/* Bottom Gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
		</section>
	);
};

export default Hero;
