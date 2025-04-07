const author = "Md. Aburayhan";
const description =
	"Software engineer from Bangladesh, specializing in building robust ERP systems and backend solutions using ASP.NET Core and C#. Passionate about developing enterprise applications, automating workflows, and crafting clean, scalable code for real-world business needs.";
const url = "https://github.com/raihan50017";
export const AppMetadata = {
	metadataBase: new URL("https://github.com/raihan50017"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		//icon: "/favicon.png"
	},
	keywords: [
		"Md. Aburayhan",
		"Md. Aburayhan - software engineer",
		".net developer",
		"software engineer",
		"c# developer",
		"javascript developer",
		"Portfolio website",
		"Software engineer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://github.com/raihan50017",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://github.com/raihan50017",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
