import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	// const projects = data?.result;

	// if (error && !data) {
	// 	return null;
	// }

	const projects = [
		{
			_id: "1",
			title: "Garments ERP System",
			description: "A complete ERP system for managing garments production, inventory, and merchandising workflows.",
			images: [
				"assets/images/project/desk-erp1.png",
				"assets/images/project/desk-erp2.png",
				"assets/images/project/desk-erp3.png",
			],
			//liveUrl: "https://garments-erp.example.com",
			//repoUrl: "https://github.com/yourusername/garments-erp",
			stack: [".NET Desktop", "C#", "Oracle", "DevExpress"]
		},
		{
			_id: "2",
			title: "ASP.NET Core Web API for ERP",
			description: "A RESTful API for managing garments ERP workflows.",
			images: [
				"assets/images/project/web-api1.png",
				"assets/images/project/web-api2.png",
				"assets/images/project/web-api3.png",

			],
			//liveUrl: "https://yourname.dev",
			//repoUrl: "https://github.com/yourusername/portfolio",
			stack: ["ASP.NET Core", "C#", "Oracle", "Entity Framework"]
		},
		{
			_id: "3",
			title: "ERP frontend",
			description: "A responsive frontend for the ERP system using React, tailwindcss, Shadecn UI.",
			images: [
				"assets/images/project/erp-frontend1.png",
			],
			//liveUrl: "https://learnonline.example.com",
			//repoUrl: "https://github.com/yourusername/elearning-platform",
			stack: ["React", "TypeScript", "TailwindCSS", "Shadecn UI"]
		},
	];


	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
