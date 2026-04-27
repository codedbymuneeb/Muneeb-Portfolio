"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

export default function Skills() {
    const skillCategories = [
        {
            title: "ML / Artificial Intelligence",
            skills: ["Deep Learning", "Neural Networks", "NLP", "Agentic AI", "Supervised Learning", "Unsupervised Learning", "LangChain"],
            color: "from-blue-500/20 to-blue-500/0",
            border: "border-blue-500/30"
        },
        {
            title: "Data Libraries & Frameworks",
            skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV"],
            color: "from-purple-500/20 to-purple-500/0",
            border: "border-purple-500/30"
        },
        {
            title: "Programming Languages",
            skills: ["Python", "C++", "SQL", "R", "OOP", "Data Structures"],
            color: "from-primary/20 to-primary/0",
            border: "border-primary/30"
        },
        {
            title: "Tools & Platforms",
            skills: ["Jupyter Notebook", "Docker", "AWS Cloud Computing", "Git & GitHub", "VS Code", "Data Pipelines"],
            color: "from-emerald-500/20 to-emerald-500/0",
            border: "border-emerald-500/30"
        },
        {
            title: "Data Intelligence & Automation",
            skills: ["n8n Automation", "Microsoft Power Apps", "Power Platform", "Zapier", "Workflow Automation"],
            color: "from-orange-500/20 to-orange-500/0",
            border: "border-orange-500/30"
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-24 relative overflow-hidden w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <DNAScrambleText text="Technical Arsenal" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 font-heading uppercase text-foreground" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A comprehensive toolkit designed for building intelligent vision systems, deep learning models, predictive data pipelines, and agentic AI.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card border border-border p-5 md:p-8 relative group hover:border-primary transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase font-heading text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <Badge
                                        key={i}
                                        variant="outline"
                                        className="bg-background border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-2 rounded-none transition-all duration-300"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
