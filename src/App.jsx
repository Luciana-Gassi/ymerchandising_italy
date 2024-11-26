import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import KeyNumbers from "./components/sections/KeyNumbers";
import About from "./components/sections/About";
import Solutions from "./components/sections/Solutions";
import CaseStudies from "./components/sections/CaseStudies";
import Technology from "./components/sections/Technology";
import PrintingTechniques from "./components/sections/PrintingTechniques";
import Sustainability from "./components/sections/Sustainability";
import Workflow from "./components/sections/Workflow";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-white">
				<Header />
				<Hero />
				<Features />
				<KeyNumbers />
				<About />
				<Solutions />
				<CaseStudies />
				<Technology />
				<PrintingTechniques />
				<Sustainability />
				<Workflow />
				<Contact />
				<Footer />
				{/* Altri componenti verranno aggiunti qui */}
			</div>
		</Router>
	);
}

export default App;
