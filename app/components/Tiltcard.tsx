"use client";
import React, { useRef } from "react";

export default function Tiltcard({ children }: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const nx = (x - centerX) / centerX;
        const ny = (y - centerY) / centerY;
        const maxTilt = 10; // degrees
        const rx = -ny * maxTilt;
        const ry = nx * maxTilt;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };
    return (
        <div style={{ perspective: "900px" }}>
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="transition-transform duration-300 ease-out"  
            >
                {children}
            </div>
        </div>
    );
}