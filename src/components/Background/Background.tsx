import { useMemo, useEffect, useState } from "react";
import "./Background.scss";

const modules = import.meta.glob(
  "../../assets/photos/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true, import: "default" }
) as Record<string, string>;

export default function Background() {
  const photos = useMemo(() => Object.values(modules), []);

  // периодически перемешиваем, чтобы фон «жил»
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeed(s => s + 1), 15000);
    return () => clearInterval(id);
  }, []);

  const visible = useMemo(() => {
    const shuffled = [...photos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 40);
  }, [photos, seed]);

  return (
    <div className="bg-layer" aria-hidden="true">
      {visible.map((src, i) => (
        <img
          key={`${seed}-${i}`}
          src={src}
          className="bg-photo"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 10) * 0.7}s`,
            animationDuration: `${18 + (i % 7) * 3}s`,
          }}
          loading="lazy"
          alt=""
        />
      ))}
      <div className="bg-overlay" />
    </div>
  );
}