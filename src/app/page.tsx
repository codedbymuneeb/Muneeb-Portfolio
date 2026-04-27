"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Lazy load the background to keep initial paint fast
const BackgroundParticles = dynamic(() => import("@/components/ui/BackgroundParticles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/*
        SEO CONTENT BLOCK — sr-only: visible to search engines, invisible to users.
        Real semantic HTML describing real services — not keyword stuffing.
      */}
      <section aria-label="Services and Skills overview" className="sr-only">
        <h1>M-Muneeb Tariq — AI Engineer, Deep Learning &amp; Computer Vision Specialist in Lahore, Pakistan</h1>

        <article>
          <h2>Hire an AI Engineer in Lahore, Pakistan</h2>
          <p>
            M-Muneeb Tariq is a professional AI Engineer based in Lahore, Pakistan, available for Full-Time Roles and freelance projects. 
            He builds real-time intelligent vision systems, highly optimized machine learning pipelines, and predictive deep learning models.
            Contact him to hire an expert AI developer for real-time traffic tracking, object detection, and ML optimization.
          </p>
          <h3>AI Engineering Services</h3>
          <ul>
            <li>Machine Learning Models for prediction and classification</li>
            <li>Deep Learning Architectures (LSTM, CNN)</li>
            <li>Agentic AI and conversational agents using LangChain</li>
            <li>Large-scale Data Pipelines & ETL automation</li>
            <li>TensorFlow and PyTorch based solutions</li>
          </ul>
        </article>

        <article>
          <h2>Computer Vision Specialist</h2>
          <p>
            M-Muneeb Tariq builds highly efficient real-time Computer Vision pipelines.
            His focus involves advanced convolutional neural networks (CNN), transfer learning, 
            and deploying real-time tracking systems utilizing edge models like YOLO.
          </p>
          <h3>Computer Vision Services</h3>
          <ul>
            <li>Real-time custom object detection</li>
            <li>Image Classification AI models</li>
            <li>Traffic Analytics & Smart Systems</li>
            <li>Data Augmentation and Model Optimization</li>
          </ul>
        </article>

        <article>
          <h2>Data Science &amp; Business Intelligence</h2>
          <p>
            M-Muneeb leverages massive datasets to provide deep business intelligence insights.
            He builds automated data analytics pipelines for exploratory data analysis (EDA), statistical analysis, and interactive dashboarding.
          </p>
          <h3>Data Science &amp; Analytics</h3>
          <ul>
            <li>Statistical Analysis &amp; Hypothesis Testing</li>
            <li>Business Intelligence &amp; KPI Tracking</li>
            <li>Data Visualization (Seaborn, Matplotlib)</li>
            <li>Automated SweetViz Reports</li>
          </ul>
        </article>

        <article>
          <h2>Contact M-Muneeb Tariq — Hire a Freelance AI Specialist from Lahore, Pakistan</h2>
          <p>
            Available for full-time roles, collaborative projects, and freelance AI development globally.
            Email: mianmuneeb3322@gmail.com. Phone: +92 327-0454332.
          </p>
        </article>
      </section>
    </>
  );
}
