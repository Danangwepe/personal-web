"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Data Science Intern",
        company: "Tech Giant Corp",
        year: "2023 - Present",
        description: "Developed predictive models for customer churn. Optimized data pipelines reducing latency by 40%."
    },
    {
        title: "AI Research Assistant",
        company: "University Lab",
        year: "2022 - 2023",
        description: "Published paper on NLP efficiency. Annotated large datasets for fine-tuning LLMs."
    },
    {
        title: "Web Developer Freelance",
        company: "Self-Employed",
        year: "2021 - 2022",
        description: "Built responsive websites for local businesses using React and modern CSS."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Experience</h2>

                <div className="relative border-l border-primary/30 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#00f0ff]" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.year}</span>
                            </div>
                            <h4 className="text-lg text-gray-400 mb-2">{exp.company}</h4>
                            <p className="text-gray-500 max-w-2xl">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
