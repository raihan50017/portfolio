"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I&rsquo;m Md. Aburayhan, a dedicated Software Engineer with a strong focus on ASP.NET Core and C# development. I currently work at Click ERP Solutions, where I contribute to building enterprise-grade ERP systems tailored for the garments manufacturing industry. My expertise lies in architecting clean, maintainable, and scalable backend solutions using industry-standard practices like Clean Architecture, OOP, and design patterns such as Repository and Factory.
						</p>
						<p>
							In my current role, I Build and maintain robust backend services using ASP.NET Core. Optimize SQL queries for performance on Oracle databases. Develop Windows Forms tools and reporting modules for production and merchandising workflows. Collaborate with cross-functional teams to gather requirements, troubleshoot bugs, and implement enhancements.
						</p>
						<p className="my-3.5">
							Previously, I worked at Coders Family, where I contributed to a learning management system using the MERN stack However, my true passion lies in backend development with .NET technologies.
						</p>
						<p className="my-3.5">
							I&rsquo;ve also led full-stack projects like an Undergraduate Admission System and a Journal Management System, applying my knowledge of system design and user management.
							&rsquo; an ITEE Level-2 Certified Engineer, placing among the top 10% globally in Japan&rsquo;s national IT examination, which reflects my strong problem-solving and software engineering skills.
						</p>
					</div>
				</div>
				<TimeLine />
			</section>
		</LazyMotion>
	);
}
