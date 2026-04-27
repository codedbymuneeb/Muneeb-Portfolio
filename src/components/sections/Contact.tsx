"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

// ── EmailJS config ──────────────────────────────────────────────────────────
// Replace these three values with your own from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "YOUR_PUBLIC_KEY";
// ───────────────────────────────────────────────────────────────────────────

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus]   = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        // Guard: show a helpful message if EmailJS is not configured yet
        if (
            EMAILJS_SERVICE_ID  === "YOUR_SERVICE_ID" ||
            EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
            EMAILJS_PUBLIC_KEY  === "YOUR_PUBLIC_KEY"
        ) {
            setStatus("error");
            setErrorMsg(
                "EmailJS is not configured yet. Add your Service ID, Template ID and Public Key to .env.local"
            );
            return;
        }

        try {
            if (!formRef.current) return;

            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            setStatus("success");
            formRef.current.reset();
            // Auto-reset success state after 6 seconds
            setTimeout(() => setStatus("idle"), 6000);
        } catch (err: unknown) {
            console.error("[EmailJS Error]:", err);
            setStatus("error");

            // Provide a meaningful error message
            if (err && typeof err === "object" && "text" in err) {
                setErrorMsg(`Failed to send: ${(err as { text: string }).text}`);
            } else {
                setErrorMsg("Failed to send message. Please try emailing me directly at mianmuneeb3322@gmail.com");
            }
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 relative w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-10 md:gap-16">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12"
                >
                    <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 md:mb-6 font-heading uppercase text-foreground">
                        Let&apos;s Create The <span className="text-primary italic">Future</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Whether you need scalable AI systems, deep-learning vision models, or robust agentic infrastructure, I&apos;m ready to build it.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-none bg-card flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                                <Mail className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                                <a href="mailto:mianmuneeb3322@gmail.com" className="text-sm sm:text-base md:text-lg font-bold hover:text-primary transition-colors break-all">mianmuneeb3322@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-none bg-card flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                                <MessageSquare className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</div>
                                <a href="https://wa.me/923270454332" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">+92 327-0454332</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-7/12"
                >
                    <div className="bg-card p-8 md:p-12 rounded-none border border-border relative overflow-hidden">
                        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">

                            {/* Success State */}
                            {status === "success" ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <CheckCircle2 size={64} className="text-primary mb-4" />
                                    <h3 className="text-2xl font-black mb-2 font-heading uppercase text-foreground">Message Sent!</h3>
                                    <p className="text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="user_name" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Name</label>
                                            {/* name="user_name" matches EmailJS template variable {{user_name}} */}
                                            <Input id="user_name" name="user_name" placeholder="John Doe" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="user_email" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Email</label>
                                            {/* name="user_email" matches EmailJS template variable {{user_email}} */}
                                            <Input id="user_email" name="user_email" type="email" placeholder="john@company.com" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Subject</label>
                                        {/* name="subject" matches EmailJS template variable {{subject}} */}
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Message</label>
                                        {/* name="message" matches EmailJS template variable {{message}} */}
                                        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary resize-none" />
                                    </div>

                                    {/* Error banner */}
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-start gap-3 p-4 border border-destructive/50 bg-destructive/10 text-destructive text-sm font-mono"
                                        >
                                            <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                            <span>{errorMsg}</span>
                                        </motion.div>
                                    )}

                                    <Button
                                        disabled={status === "loading"}
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary border-2 border-primary gap-2 h-14 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-none hover:bg-transparent hover:text-primary"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 size={16} className="animate-spin" /> Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message <Send size={18} />
                                            </span>
                                        )}
                                    </Button>
                                </>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
