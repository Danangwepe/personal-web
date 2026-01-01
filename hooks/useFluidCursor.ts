import { useEffect } from "react";

const useFluidCursor = () => {
    useEffect(() => {
        const canvas = document.getElementById("fluid-canvas") as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Resize listener
        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        // Particle System
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            life: number;
            maxLife: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 5;
                this.vy = (Math.random() - 0.5) * 5;
                this.size = Math.random() * 15 + 5;
                this.life = 0;
                this.maxLife = Math.random() * 20 + 30; // Shorter life for snappier fluid feel

                // Detailed colored fluid
                const hue = Math.random() * 60 + 160; // Cyan to Blue range
                this.color = `hsla(${hue}, 100%, 50%,`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.96; // Friction
                this.vy *= 0.96;
                this.life++;
                this.size *= 0.95; // Shrink
            }

            draw(c: CanvasRenderingContext2D) {
                c.fillStyle = this.color + (1 - this.life / this.maxLife) + ")";
                c.beginPath();
                c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                c.fill();
            }
        }

        let particles: Particle[] = [];

        const onMouseMove = (e: MouseEvent) => {
            // Spawn burst of particles
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        };
        window.addEventListener("mousemove", onMouseMove);

        // Animation Loop
        const animate = () => {
            // Clear with trail effect
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(10, 10, 10, 0.2)"; // Fade effect
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = "lighter"; // Additive blending for glow

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw(ctx);
                if (particles[i].life >= particles[i].maxLife || particles[i].size <= 0.5) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);
};

export default useFluidCursor;
