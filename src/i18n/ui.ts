export const languages = {
	en: {
		code: "en",
		name: "English",
	},
	
	de: {
		code: "de",
		name: "Deutsch",
	},
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = {
	en: {
		"layout.title": "Noureddine's Portfolio - Software Engineer",
		"layout.description":
			"Software engineer with a passion for clean architecture, modern technologies, and elegant solutions.",
		"navbar.experience": "Experience",
		"navbar.projects": "Projects",
		"navbar.techstack": "Techstack",
		"navbar.about-me": "About me",
		"hero.badge": "Dual Student at Deutsche Telekom",
		"hero.greet": "Hi, I'm",
		"hero.rol": "Software Engineer",
		"hero.description":
			"Software engineer with a passion for clean architecture, modern technologies, and elegant solutions.",
		"hero.contact": "",
		"hero.resume": "Download CV",
		"index.experience": "Work Experience",
		"index.projects": "Projects",
		"index.about": "About me",
		"index.techstack": "Teckstack",
		"techstack.ka": "Hover to pause",

		exp: [
			{
				date: "June 2025 - Present",
				title: "Software Engineer",
				company: "Deutsche Telekom ",
				description:
					"Build and deploy microservice-based automation platforms with <strong>FastAPI, Vue.js, and Docker,</strong>  including CI/CD and real-time monitoring.",
				latest: true,
			},
			{
				date: "January 2025 - April 2025",
				title: "Data & AI Analyst intern",
				company: "T-Systems Singapore",
				description:
					"Developed automated data pipelines and Python-based visualization tools using Pandas, NumPy, and Scikit-learn, leveraging Azure Cloud and AI integration to improve decision-making efficiency.",
			},
			{ 
				date: "September 2023 - January 2025",
				title: "DevOps Engineer",
				company: "Deutsche Telekom",
				description:
					"Supported the DevOps of a cloud-native 5G SA network, integrating EPC and IMS components, and using Kubernetes, Docker, Wireshark, Grafana, and automated testing tools to ensure scalability, reliability, and efficiency.",
				},
	
		],
		"exp.latest": "Latest",
		projects: [
			{
				title: "TaskManager",
				description:
					"Modern task manager with secure authentication and intuitive UI. Developed using FastAPI, Vue.js, and PostgreSQL to streamline personal workflow and project organization.",
				github: "https://github.com/Nordinda/TM.git",
				image: "/images/projects/TM.webp",
				tags: ["PYTHON", "VUE", "POSTGRE"],
			},
			{
				title: "Telekom Customer Churn Prediction",
				description:
					"ML-powered churn prediction system achieving 84% accuracy on telecom customer data. Implemented complete pipeline from data analysis to model deployment using Random Forest and Python.",
				github: "https://github.com/Nordinda/TC-churn-prediction.git",
				image: "/images/projects/TC.webp",
				tags: ["PYTHON"],
			},
		],
		"about.bio": `<p>
						My name is Noureddine, I'm studying Business Informatics at FOM University while 
						working as a dual student at Deutsche Telekom. What started as curiosity about 
						automating everyday tasks turned into a passion for <strong>building scalable, 
						production-grade systems</strong>.
					</p>
					<p>
						I've had the opportunity to work across different tech stacks and environments—from 
						developing microservice platforms that reduced manual work by 85%, to building 
						data pipelines in Azure Cloud during my time in Singapore. I'm particularly drawn 
						to <strong>the intersection of DevOps, automation, and intelligent systems</strong>, 
						where code meets real-world impact.
					</p>
					<p>
						When I'm not coding, you'll find me on the soccer field coaching, 
						at the gym, or experimenting with new ML models. <strong>For me, software engineering 
						isn't just a career, it's a craft I'm constantly refining</strong>.
					</p>`,
		"about.notice": "Available for opportunities",
		"footer.about": "About me",
		"footer.contact": "Contact",
	},
	
	de: {
		"layout.title": "Noureddine's Portfolio - Software-Ingenieur",
		"layout.description":
			"Software Engineer mit Leidenschaft für klare Architektur, moderne Technologien und elegante Lösungen.",
		"navbar.experience": "Erfahrung",
		"navbar.projects": "Projekte",
		"navbar.techstack": "Techstack",
		"navbar.about-me": "Über mich",
		"hero.badge": "Dualer Student bei Deutsche Telekom",
		"hero.greet": "Hi, ich bin",
		"hero.rol": "Software-Ingenieur",
		"hero.description":
			"Software Engineer mit Leidenschaft für klare Architektur, moderne Technologien und elegante Lösungen.",
		"hero.contact": " ",
		"hero.resume": "CV herunterladen",
		"index.experience": "Berufserfahrung",
		"index.projects": "Projekte",
		"index.about": "Über mich",
		"index.techstack":"Techstack",
		"techstack.ka": "Hover um zu stoppen",
		exp: [
			{
				date: "Juni 2025 - Heute",
				title: "Software-Ingenieur",
				company: "Deutsche Telekom",
				description:
					"Entwicklung und Deployment von Microservice-basierten Automatisierungsplattformen mit FastAPI, Vue.js und Docker, inklusive CI/CD und Echtzeit-Monitoring.",
				latest: true,
			},
			{
				date: "Januar 2025 - April 2025",
				title: "Data & KI Analyst Praktikant",
				company: "T-Systems Singapur",
				description:
					"Entwickelte automatisierte Datenpipelines und Python-basierte Visualisierungstools mit Pandas, NumPy und Scikit-learn, nutzte Azure Cloud und KI-Integration, um die Effizienz bei der Entscheidungsfindung zu verbessern."			},
			{
				date: "September 2023 - Januar 2025",
				title: "DevOps Engineer",
				company: "Deutsche Telekom",
				description:
					"Unterstützte die DevOps-Entwicklung eines cloud-nativen 5G Standalone-Netzwerks, integrierte EPC- und IMS-Komponenten und nutzte Kubernetes, Docker, Wireshark, Grafana sowie automatisierte Testing-Tools, um Skalierbarkeit, Zuverlässigkeit und Effizienz sicherzustellen.",
			},
			
		],
		"exp.latest": "Neueste",
		projects: [
			{
				title: "TaskManager",
				description:	
					"Moderner Aufgabenmanager mit sicherer Authentifizierung und intuitiver Benutzeroberfläche. Entwickelt mit FastAPI, Vue.js und PostgreSQL, um den persönlichen Workflow und die Projektorganisation zu optimieren",
				github: "https://github.com/Nordinda/TM.git",
				image: "/images/projects/TM.webp",
				tags: ["PYTHON", "VUE", "POSTGRE"],
			},
			{
				title: "Telekom-Kundenabwanderungs­vorhersage",
				description:
					"ML-gestütztes Churn-Prediction-System mit einer Genauigkeit von 84 % auf Telekom-Kundendaten. Komplette Pipeline von der Datenanalyse bis zum Model-Deployment umgesetzt – basierend auf Random Forest und Python.",
				github: "https://github.com/Nordinda/TC-churn-prediction.git",
				image: "/images/projects/TC.webp",
				tags: ["PYTHON"],
			},
		],
		"about.bio": `<p>
				Mein Name ist Noureddine, ich studiere Wirtschaftsinformatik an der FOM Hochschule und 
				arbeite als dualer Student bei der Deutschen Telekom. Was als Neugier begann, alltägliche 
				Aufgaben zu automatisieren, wurde zur Leidenschaft für <strong>den Aufbau skalierbarer, 
				produktionsreifer Systeme</strong>.
			</p>
			<p>
				Ich hatte die Möglichkeit, mit verschiedenen Tech-Stacks und Umgebungen zu arbeiten—von 
				der Entwicklung von Microservice-Plattformen, die manuelle Arbeit um 85% reduzierten, 
				bis hin zum Aufbau von Data Pipelines in Azure Cloud während meiner Zeit in Singapur. 
				Besonders fasziniert mich <strong>die Schnittstelle zwischen DevOps, Automatisierung und 
				intelligenten Systemen</strong>, wo Code auf echte Wirkung trifft.
			</p>
			<p>
				Wenn ich nicht gerade code, findest du mich auf dem Fußballplatz als Trainer, 
				im Fitnessstudio oder beim Experimentieren mit neuen ML-Modellen. <strong>Für mich ist 
				Software Engineering nicht nur ein Beruf, sondern ein Handwerk, das ich ständig 
				verfeinere</strong>.
			</p>`,
		"about.notice": "Offen für neue Möglichkeiten",
		"footer.about": "Über mich",
		"footer.contact": "Kontakt",
	},
} as const;
