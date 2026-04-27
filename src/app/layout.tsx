import type { Metadata } from "next";
import '@fontsource/syne/400.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/600.css';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Footer from "@/components/ui/Footer";

// === CANONICAL URL ===
const SITE_URL = "https://m-muneeb-tariq.vercel.app";

// === EXTREME SEO METADATA ===
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Primary title — keyword-rich, under 60 chars
  title: {
    default: "M-Muneeb Tariq | AI Engineer, Deep Learning & Computer Vision — Lahore, Pakistan",
    template: "%s | M-Muneeb Tariq",
  },

  // Meta description — 155 chars, includes top buyer keywords
  description:
    "Hire M-Muneeb Tariq — Expert AI Engineer, Computer Vision Specialist & Deep Learning Developer in Lahore, Pakistan. Building real-time intelligent systems, agentic AI, and data analytics solutions.",

  // Long-tail keyword coverage for every service
  keywords: [
    // AI & ML
    "AI Engineer Pakistan",
    "hire AI developer Lahore",
    "Computer Vision Specialist",
    "Deep Learning Engineer",
    "Machine Learning developer Pakistan",
    "Agentic AI developer",
    "LangChain developer",
    "TensorFlow expert",
    "PyTorch developer",
    "NLP engineer Pakistan",
    // Computer Vision
    "Computer Vision engineer",
    "real-time tracking systems",
    "object detection expert",
    "image classification AI",
    "YOLO developer Pakistan",
    "custom AI systems",
    // Data Science
    "Data Scientist Lahore",
    "data analyst Pakistan",
    "ETL pipeline developer",
    "predictive modeling expert",
    "statistical analysis freelancer",
    "Python data scientist",
    "SQL expert Lahore",
    // Web & General
    "freelance AI consultant",
    "AI automation developer",
    "M-Muneeb Tariq",
    "Minhaj University AI",
    "hire programmer Lahore",
  ],

  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },

  // Author
  authors: [{ name: "M-Muneeb Tariq", url: SITE_URL }],
  creator: "M-Muneeb Tariq",
  publisher: "M-Muneeb Tariq",

  // Robots — full index, follow all links
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — for Facebook, WhatsApp, LinkedIn shares
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "M-Muneeb Tariq Portfolio",
    title: "M-Muneeb Tariq | AI Engineer & Computer Vision Specialist",
    description:
      "Expert AI Engineer & Computer Vision Specialist. Hire me for deep learning models, intelligent agents, and real-time vision systems. Based in Lahore, Pakistan.",
    images: [
      {
        url: `/profile.png`,
        width: 1200,
        height: 630,
        alt: "M-Muneeb Tariq — AI Engineer and Computer Vision Specialist from Lahore, Pakistan",
        type: "image/png",
      },
    ],
  },

  // Twitter Card — for Twitter/X shares
  twitter: {
    card: "summary_large_image",
    site: "@muneebtariq",
    creator: "@muneebtariq",
    title: "M-Muneeb Tariq | AI + CV + Deep Learning",
    description:
      "Hire Muneeb — Real-time AI systems, Computer Vision, and Agentic AI. Lahore, Pakistan. Freelance worldwide.",
    images: [`${SITE_URL}/profile.png`],
  },

  // Favicon / Icons
  icons: {
    icon: [
      { url: "/profile.png", type: "image/png" },
    ],
    apple: "/profile.png",
    shortcut: "/profile.png",
  },

  // App manifest metadata
  applicationName: "M-Muneeb Tariq Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

// === SCHEMA.ORG STRUCTURED DATA (JSON-LD) ===
const jsonLd = [
  // 1. Person schema
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "M-Muneeb Tariq",
    givenName: "Muneeb",
    familyName: "Tariq",
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/profile.png`,
      width: 800,
      height: 800,
      caption: "M-Muneeb Tariq — AI Engineer & Computer Vision Specialist",
    },
    jobTitle: [
      "AI Engineer",
      "Computer Vision Specialist",
      "Deep Learning Engineer",
      "Data Scientist",
    ],
    description:
      "M-Muneeb Tariq is an AI Engineer and Computer Vision Specialist based in Lahore, Pakistan. He builds real-time intelligent vision systems, agentic AI, deep learning models, and predictive data analytics solutions.",
    email: "mianmuneeb3322@gmail.com",
    telephone: "+92-327-0454332",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
      postalCode: "54000",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Minhaj University Lahore",
      Address: "Lahore, Pakistan",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Computer Vision",
      "Deep Learning",
      "Agentic AI",
      "Machine Learning",
      "Data Analytics",
      "Python Programming",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "SQL",
      "C++",
      "Data Science",
      "NLP",
    ],
    sameAs: [
      "https://github.com/codedbymuneeb",
      "https://www.linkedin.com/in/mian-muneeb-9580a72a9/",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Engineer & Computer Vision Specialist",
      occupationLocation: {
        "@type": "City",
        name: "Lahore, Pakistan",
      },
      skills: "Deep Learning, Computer Vision, Agentic AI, NLP, TensorFlow, PyTorch",
    },
  },

  // 2. WebSite schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "M-Muneeb Tariq — AI Portfolio",
    description: "Portfolio of M-Muneeb Tariq — AI Engineer, Computer Vision and Data Science Specialist from Lahore, Pakistan.",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. ProfessionalService schema
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "M-Muneeb Tariq — Freelance AI Engineering & Data Science Services",
    url: SITE_URL,
    description:
      "Professional freelance services including custom AI model development, computer vision real-time tracking, agentic AI solutions, predictive analytics, and end-to-end data pipelines. Serving clients worldwide from Lahore, Pakistan.",
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    serviceType: [
      "AI Engineering",
      "Computer Vision Development",
      "Machine Learning Consulting",
      "Data Science",
      "Agentic AI Development",
      "Predictive Analytics",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "mianmuneeb3322@gmail.com",
      telephone: "+92-327-0454332",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
    },
  },

  // 4. BreadcrumbList 
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#about` },
      { "@type": "ListItem", position: 3, name: "Skills", item: `${SITE_URL}/#skills` },
      { "@type": "ListItem", position: 4, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 5, name: "Experience", item: `${SITE_URL}/#experience` },
      { "@type": "ListItem", position: 6, name: "Contact", item: `${SITE_URL}/#contact` },
    ],
  },
];

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={`antialiased overflow-x-hidden selection:bg-green-500/30 selection:text-green-500 font-sans`}
        style={{ "--font-heading": "'Syne', sans-serif", "--font-mono": "'Space Grotesk', monospace", "--font-sans": "'Outfit', sans-serif" } as React.CSSProperties}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {jsonLd.map((schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main className="min-h-screen relative z-10">{children}</main>
          </SmoothScroll>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
