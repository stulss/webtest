import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// 스크롤 진입 시 떠오르는 등장 효과
export function Reveal({ children, delay = 0, y = 40, className, as = "div" }) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  if (reduced) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

// 글자 단위로 하나씩 올라오는 타이틀
export function SplitText({ text, className, delay = 0 }) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <span className="split-mask" aria-hidden="true" key={i}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", rotateX: -80 }}
            whileInView={{ y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// 마우스를 따라 기울어지는 3D 틸트 카드
export function Tilt({ children, className, max = 8 }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glow = useTransform([gx, gy], ([x, y]) =>
    `radial-gradient(360px circle at ${x}% ${y}%, rgba(159,227,195,0.16), transparent 60%)`
  );

  // 카드 섹션 제거: 기울임 효과 없이 일반 래퍼로만 사용
  return <div className={className}>{children}</div>;

  // eslint-disable-next-line no-unreachable
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const leave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} tilt`}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <motion.span className="tilt-glow" style={{ background: glow }} aria-hidden="true" />
      {children}
    </motion.div>
  );
}

// 자석처럼 커서를 끌어당기는 링크/버튼
export function Magnetic({ children }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  if (reduced) return children;
  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onPointerMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.span>
  );
}

// 상단 스크롤 진행 바
export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="scroll-bar" style={{ scaleX }} aria-hidden="true" />;
}

// 커서를 따라다니는 빛
export function CursorGlow() {
  const x = useSpring(useMotionValue(-200), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(-200), { stiffness: 120, damping: 20 });
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.div
      className="cursor-glow"
      aria-hidden="true"
      style={{ x, y }}
      ref={(el) => {
        if (!el || el._bound) return;
        el._bound = true;
        window.addEventListener("pointermove", (e) => { x.set(e.clientX - 200); y.set(e.clientY - 200); });
      }}
    />
  );
}

// 화면에 들어오면 0에서 목표값까지 올라가는 숫자
export function CountUp({ to }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(reduced ? to : 0);
  useEffect(() => {
    if (reduced || !inView) return;
    const c = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduced]);
  return <span ref={ref}>{n}</span>;
}

// 스크롤에 맞춰 선이 그려지는 타임라인 래퍼
export function DrawLine({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 22 });
  return (
    <div ref={ref} className={className}>
      <motion.span className="draw-line" style={{ scaleY }} aria-hidden="true" />
      {children}
    </div>
  );
}

// 스크롤에 따라 가로로 흐르는 큰 글자 띠
export function Marquee({ items }) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee-track" style={{ x }}>
        {row.map((t, i) => (
          <span key={i}>{t}<i>✦</i></span>
        ))}
      </motion.div>
    </div>
  );
}

// 스크롤 시 위로 천천히 올라가며 흐려지는 히어로 래퍼 (패럴랙스)
export function HeroParallax({ children }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.92]);
  return <motion.div style={{ y, opacity, scale }}>{children}</motion.div>;
}
