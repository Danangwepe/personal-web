"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ----------------------------------
   Rotating Typewriter
----------------------------------- */
const RotatingTypewriter = ({
    texts,
    typingSpeed = 75,
    deletingSpeed = 50,
    pauseTime = 1200,
}: {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText.length < currentText.length) {
            timeout = setTimeout(
                () => setDisplayText(currentText.slice(0, displayText.length + 1)),
                typingSpeed
            );
        } else if (!isDeleting && displayText.length === currentText.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(
                () => setDisplayText(currentText.slice(0, displayText.length - 1)),
                deletingSpeed
            );
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="inline-flex items-center">
            <span className="text-foreground font-medium">{displayText}</span>
            <span className="ml-1 animate-pulse text-primary font-bold">|</span>
        </span>
    );
};

/* ----------------------------------
   Hero Section
----------------------------------- */
export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">

            {/* 🌌 Animated Background Grid */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15] dark:opacity-[0.08]"
            />

            {/* ✨ Floating Gradient Orbs */}
            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-primary/25 blur-[140px] rounded-full"
            />

            <motion.div
                animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-1/4 w-[360px] h-[360px] bg-cyan-400/20 blur-[140px] rounded-full"
            />

            {/* 🌠 Particle dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{
                            duration: 4 + Math.random() * 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* 🌟 Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="space-y-4"
                >
                    <h2 className="text-sm md:text-base text-primary tracking-widest uppercase font-semibold">
                        Hello, I am
                    </h2>

                    <h1 className="text-3xl md:text-7xl font-bold tracking-tight leading-tight">
                        DANANG WAHYU <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground to-foreground/50">
                            PRASEKTIYO
                        </span>
                    </h1>

                    <div className="h-12 md:h-16 text-xl md:text-3xl text-muted-foreground font-medium">
                        <span className="mr-2">Interested in</span>
                        <RotatingTypewriter
                            texts={[
                                "Artificial Intelligence",
                                "Machine Learning",
                                "Data Science",
                            ]}
                        />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1 }}
                    className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed"
                >
                    Learning by analyzing data, building models, and exploring Machine Learning, Data Science, and Artificial Intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        href="#projects"
                        className="group px-8 py-3 bg-foreground text-background font-semibold rounded-full flex items-center gap-2 hover:bg-foreground/90 transition"
                    >
                        View My Work
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>

                    <Link
                        href="/profile/resume.pdf"
                        className="group px-8 py-3 border border-border rounded-full font-semibold flex items-center gap-2 hover:bg-foreground/5 transition"
                    >
                        Download Resume
                        <Download className="group-hover:translate-y-1 transition-transform" size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
