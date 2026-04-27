"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

const projects = [
    {
        title: "Train Segment Analysis",
        description: "K-means clustering for customer behavior analysis with comprehensive EDA and visualization dashboard.",
        tags: ["Python", "Pandas", "Scikit-learn"],
        slug: "train-segment-analysis",
        link: "https://github.com/codedbymuneeb/100-Days-of-Machine--Learning/tree/main/EDA%20Analysis"
    },
    {
        title: "Enterprise Sentiment Analysis System",
        description: "Advanced NLP system utilizing deep learning and transformer models for real-time sentiment detection and business intelligence.",
        tags: ["NLP", "Transformers", "Deep Learning"],
        slug: "enterprise-sentiment",
        link: "https://github.com/codedbymuneeb/1-100-Days-of-Deep-Learning/tree/main/Sentimental%20Analysis"
    },
    {
        title: "Cat vs Dog Classifier",
        description: "Production-ready deep learning model using advanced CNN architecture with transfer learning, data augmentation, and model optimization.",
        tags: ["TensorFlow", "Transfer Learning", "CNN"],
        slug: "cat-vs-dog",
        link: "https://github.com/codedbymuneeb/1-100-Days-of-Deep-Learning/tree/main/Cat-Vs-Dog%20Classifier"
    },
    {
        title: "Advanced Transfer Learning Framework",
        description: "Sophisticated implementation of state-of-the-art transfer learning techniques leveraging pre-trained models, fine-tuning strategies, and domain adaptation.",
        tags: ["Transfer Learning", "Fine-tuning", "Deep Learning"],
        slug: "advanced-transfer-learning",
        link: "https://github.com/codedbymuneeb/1-100-Days-of-Deep-Learning/tree/main/Transfer%20-Learning"
    },
    {
        title: "LSTM Time Series Prediction",
        description: "Long Short-Term Memory neural network implementation for sequential data analysis, time series forecasting, and pattern recognition.",
        tags: ["LSTM", "RNN", "Time Series"],
        slug: "lstm-time-series",
        link: "https://github.com/codedbymuneeb/1-100-Days-of-Deep-Learning/blob/main/LSTM%20-Project/LSTM_project.ipynb"
    },
    {
        title: "MNIST Image Classification",
        description: "Deep learning model using Keras and TensorFlow for handwritten digit recognition with CNN architecture and data augmentation.",
        tags: ["Keras", "CNN", "Computer Vision"],
        slug: "mnist-classification",
        link: "https://github.com/codedbymuneeb/1-100-Days-of-Deep-Learning/tree/main/Mnist%20Dataset"
    },
    {
        title: "n8n & Zapier Automated Workflows",
        description: "Custom enterprise data pipelines and multi-platform automation connecting various APIs using n8n and Zapier to reduce manual workload.",
        tags: ["n8n", "Zapier", "Automation", "AWS"],
        slug: "automation-workflows",
        link: "https://github.com/codedbymuneeb"
    },
    {
        title: "Customer Service Agent",
        description: "Intelligent conversational AI agent built with LangChain for automated customer support, NLP context-aware response generation with memory.",
        tags: ["LangChain", "Generative AI", "LLMs"],
        slug: "customer-service-agent",
        link: "https://github.com/codedbymuneeb/Generative-Ai-with-Langhcain/blob/main/Customer_service_agent.ipynb"
    },
    {
        title: "Data Pipeline & ETL",
        description: "Automated data processing pipeline with data cleaning, transformation, and visualization components.",
        tags: ["ETL", "SQL", "Automation"],
        slug: "data-pipeline",
        link: "https://github.com/codedbymuneeb/100-Days-of-Machine--Learning/tree/main/Pipelines"
    },
    {
        title: "Research Papers Analysis",
        description: "Text mining and topic modeling on academic papers with keyword extraction and trend analysis.",
        tags: ["Text Mining", "Topic Modeling", "NLP"],
        slug: "research-papers",
        link: "https://github.com/codedbymuneeb"
    }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group w-full h-full bg-card border border-border p-5 md:p-8 cursor-pointer flex flex-col justify-between overflow-hidden hover:border-primary transition-colors duration-300 relative"
        >
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors font-heading">{project.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 font-mono text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs px-2 py-1 bg-muted border border-border text-muted-foreground font-mono uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-border">
                <Link href={`/work/${project.slug}`} className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-white transition-colors gap-2">
                    Read Case Study <ArrowRight size={16} />
                </Link>
                <div className="flex gap-4 text-muted-foreground z-20">
                    <Link href={project.link || "https://github.com/codedbymuneeb"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github size={18} />
                    </Link>
                    <Link href={project.link || "https://github.com/codedbymuneeb"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 relative w-full overflow-visible">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="flex flex-col text-5xl md:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground">
                        <div className="overflow-hidden">
                            <DNAScrambleText text="Featured Work" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground" />
                        </div>
                    </div>
                    <p className="text-lg text-muted-foreground font-mono text-sm uppercase tracking-widest">
                        A curated selection of robust architectures, automations, and data platforms.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.slug} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
