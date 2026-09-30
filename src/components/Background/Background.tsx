// Background.tsx
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import "./Background.scss";

const modules = import.meta.glob(
  "../../assets/photos/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true, import: "default" }
) as Record<string, string>;

type BgItem = {
  id: number;
  src: string;
  x: number;
  y: number;
  rot: number;
  scale: number;
  delay: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function Background() {
  const photos = useMemo(() => Object.values(modules), []);
  const [count, setCount] = useState(30);
  const [items, setItems] = useState<BgItem[]>([]);
  let nextId = 0;

  const makeItem = (src: string): BgItem => ({
    id: ++nextId + Math.random(),
    src,
    x: rand(5, 95),
    y: rand(5, 95),
    rot: rand(-12, 12),
    scale: rand(0.85, 1.25),
    delay: rand(0, 6),
  });

  // адаптивное количество
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setCount(8);
      else if (w < 768) setCount(14);
      else if (w < 1200) setCount(24);
      else setCount(36);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // инициализация
  useEffect(() => {
    if (!photos.length) return;
    const shuffled = [...photos].sort(() => Math.random() - 0.5).slice(0, count);
    setItems(shuffled.map(makeItem));
  }, [photos, count]);

  // плавная замена по одному
  useEffect(() => {
    if (!photos.length || !items.length) return;
    const id = setInterval(() => {
      setItems(prev => {
        const pool = photos.filter(p => !prev.some(x => x.src === p));
        if (!pool.length) return prev;
        const idx = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        next[idx] = makeItem(pool[Math.floor(Math.random() * pool.length)]);
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, [photos, items.length]);

  return (
    <div className="bg-layer" aria-hidden="true">
      {items.map(p => (
        <img
          key={p.id}
          src={p.src}
          className="bg-photo"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            "--rot": `${p.rot}deg`,
            "--scale": p.scale,
            animationDelay: `${p.delay}s`,
          } as CSSProperties}
          loading="lazy"
          alt=""
        />
      ))}
      <div className="bg-overlay" />
    </div>
  );
}