"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ----------------------------------
   Rotating Typewriter Component
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
            // Typing
            timeout = setTimeout(() => {
                setDisplayText(
                    currentText.slice(0, displayText.length + 1)
                );
            }, typingSpeed);
        } else if (!isDeleting && displayText.length === currentText.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && displayText.length > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayText(
                    currentText.slice(0, displayText.length - 1)
                );
            }, deletingSpeed);
        } else if (isDeleting && displayText.length === 0) {
            // Next word
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [
        displayText,
        isDeleting,
        textIndex,
        texts,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);

    return (
        <span className="inline-flex items-center">
            <span className="text-white font-medium">
                {displayText}
            </span>
            <span className="ml-1 animate-pulse text-primary font-bold">
                |
            </span>
        </span>
    );
};

/* ----------------------------------
   Hero Section
----------------------------------- */
export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20 z-10">
            {/* Background ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto text-center z-10 space-y-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h2 className="text-sm md:text-base text-primary tracking-widest uppercase font-semibold">
                        Hello, I am
                    </h2>

                    <h1 className="text-3xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        DANANG WAHYU <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            PRASEKTIYO
                        </span>
                    </h1>

                    {/* Rotating Typewriter */}
                    <div className="h-12 md:h-16 text-xl md:text-3xl lg:text-4xl text-gray-400 font-medium overflow-hidden">
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

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed"
                >
                    Learning by analyzing data, building models, and exploring Machine Learning, Data Science, and Artificial Intelligence.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
                    >
                        View My Work
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>

                    <Link
                        href="/resume.pdf"
                        className="group px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
                    >
                        Download Resume
                        <Download
                            size={18}
                            className="group-hover:translate-y-1 transition-transform"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
