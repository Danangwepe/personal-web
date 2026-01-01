import { useEffect } from "react";

const useCanvasCursor = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let lines: Line[] = [];
        const gap = 40;
        const conf = {
            lineLength: 70,
            speed: 0.1,
            color: "0, 240, 255", // Electric Blue
            size: 1.5,
        };

        class Line {
            x: number;
            y: number;
            width: number;
            height: number;
            angle: number;
            speed: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.width = conf.size;
                this.height = Math.random() * conf.lineLength;
                this.angle = Math.random() * 360;
                this.speed = Math.random() * conf.speed * (Math.random() < 0.5 ? -1 : 1);
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.angle * Math.PI) / 180);
                ctx.fillStyle = `rgba(${conf.color}, ${(this.height / conf.lineLength) * 0.5})`;
                // Draw a simple glowing line
                ctx.fillRect(0, 0, this.width, this.height);
                ctx.restore();
            }

            update() {
                this.angle += this.speed;
            }
        }

        // Instead of lines, let's do a trail effect on mouse move.
        // The above was for background rain/matrix.
        // Let's switch to a cursor trail.

        // Reset canvas for trail

        let pointer = { x: width / 2, y: height / 2 };

        const handleMove = (e: MouseEvent) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
            // Add particle
            particles.push(new Particle(pointer.x, pointer.y));
        };

        class Particle {
            x: number;
            y: number;
            color: string;
            size: number;
            vx: number;
            vy: number;
            life: number;
            maxLife: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.color = `rgba(0, 240, 255, 1)`;
                this.size = Math.random() * 3 + 1;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.life = 0;
                this.maxLife = 50;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life++;
                this.size -= 0.05;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(0, 240, 255, ${1 - this.life / this.maxLife})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles: Particle[] = [];

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();
                if (p.life > p.maxLife || p.size <= 0) {
                    particles.splice(index, 1);
                }
            });

            requestAnimationFrame(render);
        };

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        window.addEventListener("mousemove", handleMove);

        render();

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return null;
};

export default useCanvasCursor;
