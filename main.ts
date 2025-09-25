import type { Brand } from "@components/Marquee.astro";
import type { SoftwareSolution } from "@components/Card.astro";
import type { Highlights } from "@components/FeatureHighlights.astro";
import type { FeatureInfo } from "@components/FeatureCard.astro";
import type { TestimonialCard } from "@components/TestimonialCard.astro";

type SectionLink = 
	| "#solutions"
	| "#features"
	| "#testimonials"
	| "#footer"
	| "" // <- Missing section declaration: Nuestra Historia.
	;
interface MenuItem {
	title: string;
	sectionLink: SectionLink;
};
type Menu = [MenuItem, MenuItem, MenuItem, MenuItem];

type Solutions = [SoftwareSolution, SoftwareSolution, SoftwareSolution];

export interface FeatureSection {
	readonly highlights: Highlights;
	readonly features: Array<FeatureInfo>;
};

export const stagger: Readonly<number> = 300;

export const menuItems: Readonly<Menu> = [
	{ title: "Productos", sectionLink: "#solutions" },
	{ title: "Clientes", sectionLink: "#testimonials" },
	{ title: "Nosotros", sectionLink: "" },
	{ title: "Contáctanos", sectionLink: "#footer" }
];

export const brands: ReadonlyArray<Brand> = [
	{ name: "IMPORTACIONES GUTIÉRREZ", logo: "/svg/scalatyLogo.svg" },
	{ name: "Astro", logo: "/svg/scalatyLogo.svg" },
	{ name: "Minecraft", logo: "/svg/scalatyLogo.svg" },
	{ name: "GitHub", logo: "/svg/scalatyLogo.svg" },
	{ name: "Mozilla", logo: "/svg/scalatyLogo.svg" },
	{ name: "marimari_en", logo: "/svg/scalatyLogo.svg" }
];

export const softwareSolutions: Readonly<Solutions> = [
	{
		title: "Facturación electrónica",
		description: "Este es un texto de prueba.",
		icon: "Receipt"
	},
	{
		title: "Inteligencia artificial empresarial",
		description: "Este es un texto de prueba.",
		icon: "Brain"
	},
	{
		title: "Bases de datos y automatizaciones",
		description: "Este es un texto de prueba.",
		icon: "DatabaseZap"
	}
];

export const featureSections: ReadonlyArray<FeatureSection> = [
	{
		highlights: {
			feature: "Data Insights",
			title: { first: "Improved", highlight: "Decision-Making" },
			description: "By leveraging real-time insights and comprehensive data analysis, you can make informed decisions with confidence, reducing uncertainty.",
			imageSrc: ""
		},
		features: [
			{
				title: "Comprehensive Data Visualization",
				description: "With our advanced visualization tools, turn complex datasets into easy-to-understand charts, graphs, and dashboards",
				icon: "HandMetal"
			},
			{
				title: "Predictive Modeling",
				description: "Leverage cutting-edge predictive analytics to forecast future trends and outcomes.",
				icon: "HandMetal"
			}
		]
	},
	{
		highlights: {
			feature: "Automate Tasks",
			title: { first: "Increased", highlight: " Operational Efficiency" },
			description: "With a clear view of your data, you can identify inefficiencies and streamline operations.",
			imageSrc: ""
		},
		features: [
			{
				title: "Automated Data Collection",
				description: "Eliminate manual data entry and reduce human error with automated data collection.",
				icon: "HandMetal"
			},
			{
				title: "Workflow Optimization",
				description: "Analyze and optimize your workflows by identifying bottlenecks and inefficiencies.",
				icon: "HandMetal"
			}
		]
	},
	{
		highlights: {
			feature: "Customer Insights",
			title: { first: "Enhanced", highlight: "Customer Satisfaction" },
			description: "Use customer behavior data to tailor your products and services to meet user needs more effectively.",	
			imageSrc: ""
		},
		features: [
			{
				title: "Personalized Customer Insights",
				description: "Gain a detailed view of individual customer behavior, preferences, and interactions.",
				icon: "HandMetal"
			},
			{
				title: "Sentiment Analysis",
				description: "Use sentiment analysis to track and interpret customer feedback in real-time.",
				icon: "HandMetal"
			}
		]
	}
];

export const testimonials: ReadonlyArray<TestimonialCard> = [
	{
		testimonial: {
			cite: "Scalaty unlocked a reliable experimentation workflow for our product teams.",
			source: "https://github.com/addyosmani"
		},
		author: {
			name: "Addy Osmani",
			social: {
				link: "https://github.com/addyosmani",
				userName: "addyosmani",
				profilePicture: "https://avatars.githubusercontent.com/u/110953?v=4"
			},
			company: {
				name: "scalaty",
				logo: "/svg/scalatyLogo.svg"
			}
		}
	},
	{
		testimonial: {
			cite: "The observability playbooks they shipped keep our alerts calm and actionable.",
			source: "https://github.com/mipsytipsy"
		},
		author: {
			name: "Charity Majors",
			social: {
				link: "https://github.com/mipsytipsy",
				userName: "mipsytipsy",
				profilePicture: "https://avatars.githubusercontent.com/u/93396?v=4"
			}
		}
	},
	{
		testimonial: {
			cite: "We iterated on onboarding flows in days instead of months thanks to their staging automation.",
			source: "https://github.com/kentcdodds"
		},
		author: {
			name: "Kent C. Dodds",
			social: {
				link: "https://github.com/kentcdodds",
				userName: "kentcdodds",
				profilePicture: "https://avatars.githubusercontent.com/u/1500684?v=4"
			}
		}
	},
	{
		testimonial: {
			cite: "Their team understood our edge caching challenges and solved them with zero drama.",
			source: "https://github.com/rauchg"
		},
		author: {
			name: "Guillermo Rauch",
			social: {
				link: "https://github.com/rauchg",
				userName: "rauchg",
				profilePicture: "https://avatars.githubusercontent.com/u/13041?v=4"
			}
		}
	},
	{
		testimonial: {
			cite: "Scalaty delivered a developer experience our community actually enjoys using.",
			source: "https://github.com/cassidoo"
		},
		author: {
			name: "Cassidy Williams",
			social: {
				link: "https://github.com/cassidoo",
				userName: "cassidoo",
				profilePicture: "https://avatars.githubusercontent.com/u/1121701?v=4"
			}
		}
	},
	{
		testimonial: {
			cite: "They translated messy product requirements into a crisp component system overnight.",
			source: "https://github.com/sdras"
		},
		author: {
			name: "Sarah Drasner",
			social: {
				link: "https://github.com/sdras",
				userName: "sdras",
				profilePicture: "https://avatars.githubusercontent.com/u/2281088?v=4"
			}
		}
	},
	{
		testimonial: {
			cite: "Performance budgets stayed green after their audits and the wins keep compounding.",
			source: "https://github.com/paulirish"
		},
		author: {
			name: "Paul Irish",
			social: {
				link: "https://github.com/paulirish",
				userName: "paulirish",
				profilePicture: "https://avatars.githubusercontent.com/u/39191?v=4"
			}
		}
	}
];
