import React, { useEffect, useRef } from "react";

export default function HeroBackground({ speed = 1000 }: { speed?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let width = window.innerWidth;
        let height = window.innerHeight;
        const size = 20;
        let animationFrameId: number;

        canvas.width = width;
        canvas.height = height;

        const draw = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            for (let y = 0; y < height; y += size) {
                for (let x = 0; x < width; x += size) {
                    // Calculate diagonal offset
                    const offset = (x + y) / 50;
                    const alpha = (Math.sin((time / speed) + offset) + 1) / 2;
                    ctx.fillStyle = `rgba(255, 210, 48, ${alpha * 0.1})`;
                    ctx.fillRect(x, y, size, size);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        animationFrameId = requestAnimationFrame(draw);

        const onResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}