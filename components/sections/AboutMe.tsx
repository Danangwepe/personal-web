"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
    return (
        <section className="relative py-28">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-10"
                >
                    {/* ABOUT */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            I am a Computer Engineering student driven by a passion for Artificial Intelligence and Data Science.
                            My journey involves exploring the depths of machine learning algorithms and
                            building systems that can learn, adapt, and solve complex problems.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From analyzing massive datasets to deploying predictive models, I thrive at the intersection of hardware and software.
                            My goal is to leverage technology to create meaningful impact and push the boundaries of what is possible efficiently.
                        </p>
                    </div>

                    {/* EDUCATION + AGE */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-border p-5 bg-card/60 backdrop-blur">
                            <h3 className="font-medium mb-1">Education</h3>
                            <p className="text-sm font-semibold">
                                Computer Engineering
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Diponegoro University
                            </p>
                            <span className="inline-block mt-2 text-xs font-mono text-primary">
                                2022 – 2026
                            </span>
                        </div>

                        <div className="rounded-2xl border border-border p-5 bg-card/60 backdrop-blur flex flex-col items-center justify-center">
                            <span className="text-xs text-muted-foreground mb-2">
                                Age
                            </span>
                            <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
                                <span className="text-xl font-bold">21</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center"
                >
                    {/* PHOTO */}
                    <div className="group relative w-72 h-96 rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/profile/me.jpg"
                            alt="Profile"
                            fill
                            className="
                object-cover
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-500
                ease-in-out
              "
                            priority
                        />
                    </div>

                    {/* LOCATION */}
                    <p className="mt-6 text-sm text-muted-foreground tracking-wide">
                        Semarang, Indonesia
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
