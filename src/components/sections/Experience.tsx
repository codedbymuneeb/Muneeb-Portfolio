"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const experiences = [
        {
            period: "Aug 2024 – Present",
            role: "AI Engineer & Developer",
            company: "Freelance",
            description: "Pioneering Machine Learning and Deep Learning solutions with a focus on Agentic AI workflows using LangChain.",
            highlights: [
                "Engineered end-to-end ML and DL models to analyze datasets and provide actionable insights.",
                "Developed advanced Agentic AI workflows using LangChain to enable autonomous decision-making.",
                "Built an intelligent AI customer assistant capable of contextual reasoning and automated support.",
                "Streamlined AI integration pipelines for robust and scalable application deployments."
            ]
        },
        {
            period: "Jun 2024 – Present",
            role: "Data Science Automation Specialist",
            company: "Remote",
            description: "Implementing sophisticated data science automations to optimize business intelligence and operational workflows.",
            highlights: [
                "Developed robust data science automations to minimize manual intervention in data processing pipelines.",
                "Designed scalable architectural pipelines integrating data analytics with automated reporting frameworks.",
                "Leveraged advanced Python ecosystems to orchestrate and automate analytical workflows.",
                "Enhanced overall operational efficiency through continuous optimization of data models."
            ]
        },
        {
            period: "Jan 2024 – Jun 2024",
            role: "Operations & Virtual Assistant",
            company: "Dara Warehouse & Remote",
            description: "Managed warehouse logistics, productivity optimization, and automated workflow solutions for clients.",
            highlights: [
                "Leveraged Microsoft Power Platform and Power Apps to streamline daily operations and reporting.",
                "Built automated business workflows utilizing n8n and Zapier to reduce manual tasks.",
                "Managed scalable cloud workflows via AWS and provided remote technical support.",
                "Developed customized digital collaboration environments and managed client communications."
            ]
        }
    ];

    return (
        <section id="experience" ref={containerRef} className="py-16 md:py-24 relative w-full border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <DNAScrambleText text="Professional Journey" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground" />
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-primary"
                        ></motion.div>
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Timeline Node */}
                                <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-none bg-background border-2 border-primary md:-translate-x-1/2 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="absolute inset-[2px] bg-primary"
                                    ></motion.div>
                                </div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full md:w-5/12 ml-6 md:ml-0 mt-4 md:mt-0"
                                >
                                    <div className="bg-card p-8 rounded-none border border-border hover:border-primary transition-colors group">
                                        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-1 block">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1 transition-colors font-heading uppercase text-foreground">{exp.role}</h3>
                                        <h4 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-widest">{exp.company}</h4>
                                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-mono text-muted-foreground/80 leading-relaxed">
                                                    <span className="text-primary font-bold mt-1">&gt;</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
