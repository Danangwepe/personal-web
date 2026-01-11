"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, User } from "lucide-react"; // Pastikan install lucide-react atau ganti dengan icon lain
import Image from "next/image";

// Variabel animasi untuk Staggered Effect (muncul berurutan)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay antar elemen
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function AboutMe() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Decor (Blurry Blob) - Opsional biar ga sepi */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* LEFT SIDE: PHOTO */}
                    <motion.div
                        variants={itemVariants}
                        className="order-2 lg:order-1 flex justify-center lg:justify-start relative"
                    >
                        {/* Animasi Floating Halus pada Gambar */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform rotate-6 scale-105 blur-sm" />
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/profile/danang.jpg"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay Location Badge */}
                                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                                    <div className="p-2 bg-primary/20 rounded-full text-primary">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60">Located in</p>
                                        <p className="text-sm font-medium text-white">Semarang, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: CONTENT */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
                                About Me
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                Computer Engineering Student & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                    AI Enthusiast
                                </span>
                            </h3>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I'm a Computer Engineering student at Diponegoro University with a strong passion for emerging
                                technologies, especially Artificial Intelligence, Machine Learning, and Big Data. I enjoy building innovative
                                solutions and designing engaging user experiences through technology
                            </p>
                            <p>
                                Constantly learning and improving
                                my technical and soft skills, I aim to contribute meaningfully to impactful tech projects. Open to collaboration,
                                internships, or opportunities that align with my interests and help me grow professionally.
                            </p>
                        </motion.div>

                        {/* INFO CARDS (Bento Grid Style) */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {/* Card 1: Education */}
                            <div className="p-4 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                                        <GraduationCap size={20} />
                                    </div>
                                    <span className="font-semibold text-sm">Education</span>
                                </div>
                                <p className="text-sm font-medium">Computer Engineering</p>
                                <p className="text-xs text-muted-foreground mt-1">Diponegoro University</p>
                            </div>

                            {/* Card 2: Age / Experience */}
                            <div className="p-4 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                                        <User size={20} />
                                    </div>
                                    <span className="font-semibold text-sm">Personal Info</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-medium">22 Years Old</p>
                                        <p className="text-xs text-muted-foreground mt-1">8th Semester</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}