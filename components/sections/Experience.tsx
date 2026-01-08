"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ExperienceItem = {
    title: string;
    company: string;
    year: string;
    points: string[];
};

const workExperience: ExperienceItem[] = [
    {
        title: "Laboratory Assistant",
        company: "Diponegoro University",
        year: "Aug 2024 – Dec 2025",
        points: [
            "Entrusted as a Teaching Assistant for 5 practicum periods across 3 semesters, instructing a massive cohort of over 150 students per session.",
            "Demonstrated technical reliability by being re-appointed to lead Basic Electronics and Digital Systems labs twice, mentoring students in logic circuits and hardware troubleshooting.",
            "Facilitated Multimedia sessions focused on Video Editing software and creative workflows, guiding students in producing high-quality digital content.",
            "Managed administrative responsibilities for concurrent classes, including grading and providing personalized feedback, while maintaining high academic performance."
        ]
    },
    {
        title: "Frontend Developer Intern",
        company: "Diskominfo Kota Semarang",
        year: "Jul 2024 – Aug 2024",
        points: [
            "Engineered responsive user interfaces using React.js and Tailwind CSS, ensuring high performance across devices.",
            "Integrated RESTful APIs to connect frontend modules with backend services, optimizing data retrieval and state management.",
            "Collaborated with backend engineers and UI/UX designers to translate Figma prototypes into scalable, reusable code components."
        ]
    }
];

const organizationalExperience: ExperienceItem[] = [
    {
        title: "Member, Multimedia Division",
        company: "Computer Engineering Research Club",
        year: "Oct 2024 – Dec 2025",
        points: [
            "Conducting mentoring sessions and workshops on Figma features and optimal design workflows.",
            "Providing technical guidance and creative solutions in game development using Unity, helping the team overcome technical challenges."
        ]
    },
    {
        title: "Vice Chairperson, Information and Communication Unit",
        company: "HIMASKOM",
        year: "Sep 2024 – May 2025",
        points: [
            "Spearheading strategic planning and unit management, acting as a key decision-maker to ensure seamless communication between internal and external stakeholders.",
            "Previously achieved a 90% success rate in program execution during tenure as Junior Staff."
        ]
    }
];

export function Experience() {
    const [activeTab, setActiveTab] = useState<"work" | "org">("work");

    const data =
        activeTab === "work" ? workExperience : organizationalExperience;

    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">
                    Experience
                </h2>

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-muted/20 border border-border rounded-full p-1 flex gap-1">
                        {[
                            { key: "work", label: "Work Experience" },
                            { key: "org", label: "Organizational Experience" }
                        ].map(tab => {
                            const isActive = activeTab === tab.key;

                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key as "work" | "org")}
                                    className="relative px-5 py-2 text-sm font-medium rounded-full"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeTab"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30
                                            }}
                                            className="absolute inset-0 bg-primary rounded-full"
                                        />
                                    )}
                                    <span
                                        className={`relative z-10 transition-colors ${isActive
                                                ? "text-black"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="relative border-l border-primary/30 ml-4 md:ml-8 space-y-12"
                    >
                        {data.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Dot */}
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        {exp.title}
                                    </h3>
                                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                        {exp.year}
                                    </span>
                                </div>

                                <h4 className="text-lg text-muted-foreground mb-4">
                                    {exp.company}
                                </h4>

                                <ul className="space-y-2 max-w-2xl">
                                    {exp.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-3 text-muted-foreground leading-relaxed"
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
