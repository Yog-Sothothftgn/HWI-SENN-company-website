"use client";
import { useEffect, useRef } from "react";

function rand(a: number, b: number) { return a + Math.random() * (b - a); }

const DEPTHS = [
  { count: 10, size: [52, 92] as [number,number], opacity: [0.18, 0.34] as [number,number], color: "hsl(188,48%,52%)", speed: [13, 22] as [number,number] },
  { count:  9, size: [44, 78] as [number,number], opacity: [0.20, 0.36] as [number,number], color: "hsl(198,45%,42%)", speed: [16, 27] as [number,number] },
  { count:  7, size: [36, 66] as [number,number], opacity: [0.22, 0.38] as [number,number], color: "hsl(207,43%,33%)", speed: [20, 32] as [number,number] },
  { count:  6, size: [28, 56] as [number,number], opacity: [0.24, 0.40] as [number,number], color: "hsl(214,41%,25%)", speed: [24, 38] as [number,number] },
  { count:  5, size: [20, 46] as [number,number], opacity: [0.26, 0.43] as [number,number], color: "hsl(222,40%,18%)", speed: [28, 46] as [number,number] },
];

const BUBBLE_COUNT = 35;

// 每组鱼是一个全屏 fixed 容器，translateY 跟随滚动
function createGroup(depthIdx: number): HTMLDivElement {
  const cfg = DEPTHS[Math.min(depthIdx, DEPTHS.length - 1)];

  // 容器：固定全屏，初始偏移到对应层位置
  const group = document.createElement("div");
  group.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 2;
    overflow: visible;
    transform: translateY(${depthIdx * 100}vh);
    will-change: transform;
  `;

  for (let i = 0; i < cfg.count; i++) {
    const outer = document.createElement("div");
    const inner = document.createElement("div");
    const size    = rand(cfg.size[0], cfg.size[1]);
    const top     = rand(3, 94);       // % of container height
    const swimDur = rand(cfg.speed[0], cfg.speed[1]);
    const swimDel = rand(0, 20);
    const opacity = rand(cfg.opacity[0], cfg.opacity[1]);
    const goRight = Math.random() > 0.5;

    // outer: 在容器内定位（absolute），垂直位置锁定
    outer.style.cssText = `
      position: absolute;
      top: ${top}%;
      left: ${goRight ? "-120px" : "110vw"};
      pointer-events: none;
    `;
    // inner: 只做横向游动动画
    inner.style.cssText = `
      display: inline-block;
      animation: fish-swim-${goRight ? "r" : "l"} ${swimDur}s ${swimDel}s linear infinite;
    `;
    inner.innerHTML = `
      <svg width="${size}" height="${size * 0.6}" viewBox="0 0 72 36"
        fill="${cfg.color}" style="opacity:${opacity};display:block;transform:scaleX(${goRight ? -1 : 1})">
        <path d="M54 18 Q44 2 20 5 Q3 8 0 18 Q3 28 20 31 Q44 34 54 18Z"/>
        <path d="M54 18 L66 5 L71 18 L66 31 Z"/>
        <circle cx="17" cy="16" r="2.2" fill="rgba(0,0,0,0.25)"/>
      </svg>`;
    outer.appendChild(inner);
    group.appendChild(outer);
  }
  return group;
}

export default function OceanEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 为每个 section 建一组鱼 + 气泡，共用同一个 fixed 容器
    const groups = DEPTHS.map((_, i) => {
      const g = createGroup(i);

      // 每组附带气泡
      for (let j = 0; j < BUBBLE_COUNT; j++) {
        const size = rand(5, 18);
        const opacity = rand(0.18, 0.38);
        const b = document.createElement("div");
        b.style.cssText = `
          position:absolute;bottom:-30px;left:${rand(0,100)}%;
          width:${size}px;height:${size}px;border-radius:50%;
          border:1.5px solid rgba(160,210,235,${opacity + 0.15});
          background:rgba(190,228,248,${opacity * 0.5});
          pointer-events:none;
          animation:bubble-rise ${rand(10,24)}s ${rand(0,20)}s ease-in infinite;
        `;
        g.appendChild(b);
      }

      container.appendChild(g);
      return g;
    });

    // 找内层滚动容器
    const scrollEl = container.ownerDocument.querySelector<HTMLElement>(
      "[class*='overflow-y-scroll']"
    );
    if (!scrollEl) return () => { groups.forEach(g => g.remove()); };

    const updateY = () => {
      const scroll = scrollEl.scrollTop;
      groups.forEach((g, i) => {
        const y = i * window.innerHeight - scroll;
        g.style.transform = `translateY(${y}px)`;
      });
    };

    updateY();
    scrollEl.addEventListener("scroll", updateY, { passive: true });
    window.addEventListener("resize", updateY);

    return () => {
      scrollEl.removeEventListener("scroll", updateY);
      window.removeEventListener("resize", updateY);
      groups.forEach(g => g.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fish-swim-r {
          from { transform: translateX(0);      }
          to   { transform: translateX(122vw);  }
        }
        @keyframes fish-swim-l {
          from { transform: translateX(0);       }
          to   { transform: translateX(-122vw);  }
        }
        @keyframes bubble-rise {
          0%   { transform: translateY(0) scale(1);        opacity: 0;   }
          10%  { opacity: 1; }
          85%  { opacity: 0.5; }
          100% { transform: translateY(-106vh) scale(1.3); opacity: 0;   }
        }
      `}</style>
      <div ref={containerRef} aria-hidden="true" />
    </>
  );
}
