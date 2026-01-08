"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
        alert("Message sent! (Demo)");
    };

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 backdrop-blur"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Let&apos;s Connect
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or just want to discuss AI? Send me a message.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* NAME */}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="
                                        peer w-full
                                        bg-background/40
                                        border border-border
                                        rounded-lg
                                        px-4 py-3
                                        text-foreground
                                        placeholder-transparent
                                        focus:outline-none
                                        focus:border-primary
                                        focus:ring-1 focus:ring-ring
                                        transition-all
                                    "
                                    placeholder="Name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="
                                        absolute left-4 top-2
                                        text-xs text-muted-foreground
                                        transition-all
                                        peer-placeholder-shown:text-base
                                        peer-placeholder-shown:top-3.5
                                        peer-focus:-top-2
                                        peer-focus:text-xs
                                        peer-focus:text-primary
                                        bg-background
                                        px-1
                                        rounded
                                    "
                                >
                                    Name
                                </label>
                            </div>

                            {/* EMAIL */}
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="
                                        peer w-full
                                        bg-background/40
                                        border border-border
                                        rounded-lg
                                        px-4 py-3
                                        text-foreground
                                        placeholder-transparent
                                        focus:outline-none
                                        focus:border-primary
                                        focus:ring-1 focus:ring-ring
                                        transition-all
                                    "
                                    placeholder="Email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="
                                        absolute left-4 top-2
                                        text-xs text-muted-foreground
                                        transition-all
                                        peer-placeholder-shown:text-base
                                        peer-placeholder-shown:top-3.5
                                        peer-focus:-top-2
                                        peer-focus:text-xs
                                        peer-focus:text-primary
                                        bg-background
                                        px-1
                                        rounded
                                    "
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={5}
                                className="
                                    peer w-full
                                    bg-background/40
                                    border border-border
                                    rounded-lg
                                    px-4 py-3
                                    text-foreground
                                    placeholder-transparent
                                    focus:outline-none
                                    focus:border-primary
                                    focus:ring-1 focus:ring-ring
                                    transition-all
                                    resize-none
                                "
                                placeholder="Message"
                                required
                            />
                            <label
                                htmlFor="message"
                                className="
                                    absolute left-4 top-2
                                    text-xs text-muted-foreground
                                    transition-all
                                    peer-placeholder-shown:text-base
                                    peer-placeholder-shown:top-3.5
                                    peer-focus:-top-2
                                    peer-focus:text-xs
                                    peer-focus:text-primary
                                    bg-background
                                    px-1
                                    rounded
                                "
                            >
                                Message
                            </label>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="
                                w-full
                                bg-primary
                                text-primary-foreground
                                font-semibold
                                py-4
                                rounded-lg
                                flex items-center justify-center gap-2
                                hover:opacity-90
                                transition-all
                            "
                        >
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
