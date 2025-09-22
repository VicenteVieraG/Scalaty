import type { Brand } from "@components/Marquee.astro";
import type { SoftwareSolution } from "@components/Card.astro";
import type { Highlights } from "@components/FeatureHighlights.astro";
import type { FeatureInfo } from "@components/FeatureCard.astro";

type Solutions = [SoftwareSolution, SoftwareSolution, SoftwareSolution];

export interface FeatureSection {
	readonly highlights: Highlights;
	readonly features: Array<FeatureInfo>;
};

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
