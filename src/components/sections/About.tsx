"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative py-20 bg-background/50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
                >
                    {/* Text Section (Now on the left) */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tighter mb-8">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <div className="text-lg md:text-xl text-muted-foreground space-y-6 font-mono leading-relaxed">
                            <p>
                                I am a passionate <span className="text-foreground font-semibold">AI Engineer</span> specializing in Deep Learning and Computer Vision. I build real-time traffic analytics and intelligent vision systems to solve complex real-world problems.
                            </p>
                            <p>
                                With a strong foundation in scalable architectures and machine learning models, I strive to push the boundaries of what is possible with AI. I transform data into actionable insights and build robust solutions that make an impact.
                            </p>
                        </div>
                    </div>

                    {/* Image Section (Now on the right) */}
                    <div className="w-full md:w-1/3 flex justify-center relative">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.1)] group"
                        >
                            <Image
                                src="/profile.jpg"
                                alt="M-Muneeb Tariq"
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 group-active:grayscale-0"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                        </motion.div>
                        
                        {/* Decorative background elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}