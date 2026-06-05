"use client";
import { useEffect, useRef } from "react";

const FISH_COUNT = 10;
const BUBBLE_COUNT = 18;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// Fish SVG path (simple silhouette)
const FishPath = ({ size, opacity, color }: { size: number; opacity: number; color: string }) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 60 30"
    fill={color}
    style={{ opacity }}
  >
    <path d="M55 15 Q45 5 20 8 Q5 10 2 15 Q5 20 20 22 Q45 25 55 15Z" />
    <path d="M55 15 L62 8 L65 15 L62 22 Z" />
    <circle cx="18" cy="14" r="1.5" fill="rgba(0,0,0,0.3)" />
  </svg>
);

export default function OceanEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- FISH ---
    const fishElements: HTMLDivElement[] = [];
    for (let i = 0; i < FISH_COUNT; i++) {
      const wrapper = document.createElement("div");
      const size = randomBetween(28, 72);
      const top = randomBetween(3, 95);
      const duration = randomBetween(18, 42);
      const delay = randomBetween(0, 30);
      const goingRight = Math.random() > 0.5;
      const opacity = randomBetween(0.18, 0.38);
      const color = `hsl(${randomBetween(190, 220)}, 40%, 25%)`;

      // 向右游：从左边出发，鱼头翻转朝右（scaleX(-1) 在 SVG 上）
      // 向左游：从右边出发，鱼头自然朝左
      wrapper.style.cssText = `
        position: fixed;
        top: ${top}vh;
        left: ${goingRight ? "-120px" : "110vw"};
        z-index: 2;
        pointer-events: none;
        animation: fish-swim-${goingRight ? "r" : "l"} ${duration}s ${delay}s linear infinite;
      `;

      wrapper.innerHTML = `
        <svg width="${size}" height="${size * 0.6}" viewBox="0 0 72 36"
          fill="${color}"
          style="opacity:${opacity}; transform: scaleX(${goingRight ? -1 : 1}); display:block;">
          <path d="M54 18 Q44 2 20 5 Q3 8 0 18 Q3 28 20 31 Q44 34 54 18Z"/>
          <path d="M54 18 L66 5 L71 18 L66 31 Z"/>
          <circle cx="17" cy="16" r="2.2" fill="rgba(0,0,0,0.25)"/>
        </svg>
      `;

      container.appendChild(wrapper);
      fishElements.push(wrapper);
    }

    // --- BUBBLES ---
    const bubbleElements: HTMLDivElement[] = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const bubble = document.createElement("div");
      const size = randomBetween(4, 14);
      const left = randomBetween(0, 100);
      const duration = randomBetween(12, 30);
      const delay = randomBetween(0, 25);
      const opacity = randomBetween(0.04, 0.12);

      bubble.style.cssText = `
        position: fixed;
        bottom: -30px;
        left: ${left}vw;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 1px solid rgba(100,180,220,${opacity * 2});
        background: rgba(150,210,240,${opacity});
        z-index: 2;
        pointer-events: none;
        animation: bubble-rise ${duration}s ${delay}s ease-in infinite;
      `;

      container.appendChild(bubble);
      bubbleElements.push(bubble);
    }

    return () => {
      [...fishElements, ...bubbleElements].forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fish-swim-r {
          0%   { transform: translateX(0);       }
          100% { transform: translateX(120vw);   }
        }
        @keyframes fish-swim-l {
          0%   { transform: translateX(0);       }
          100% { transform: translateX(-120vw);  }
        }
        @keyframes bubble-rise {
          0%   { transform: translateY(0)      scale(1);    opacity: 0;   }
          10%  { opacity: 1; }
          80%  { opacity: 0.6; }
          100% { transform: translateY(-105vh) scale(1.3); opacity: 0;   }
        }
      `}</style>
      <div ref={containerRef} aria-hidden="true" />
    </>
  );
}
