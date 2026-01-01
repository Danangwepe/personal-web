"use client";

import { motion } from "framer-motion";

export function AboutMe() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                            About Me
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                I am a Computer Engineering student driven by a passion for Artificial Intelligence and Data Science.
                                My journey involves exploring the depths of machine learning algorithms and building systems that
                                can learn, adapt, and solve complex problems.
                            </p>
                            <p>
                                From analyzing massive datasets to deploying predictive models, I thrive at the intersection of
                                hardware and software. My goal is to leverage technology to create meaningful impact and
                                push the boundaries of what is possible efficiently.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
                        <div className="p-1 bg-gradient-to-br from-primary via-transparent to-primary/50 rounded-2xl">
                            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Focus Areas</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Machine Learning & Deep Learning",
                                        "Data Analysis & Visualization",
                                        "Computer Vision",
                                        "Natural Language Processing",
                                        "Cloud Computing (AWS/GCP)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
