import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const IMAGES = [
  { src: g1, alt: "Пресотерапія у кабінеті салону SLIM", span: "sm:row-span-2" },
  { src: g2, alt: "Апарат для корекції фігури у салоні SLIM", span: "" },
  { src: g3, alt: "Процедура RF-ліфтингу в салоні SLIM", span: "sm:row-span-2" },
  { src: g4, alt: "Вимірювання об'ємів після курсу процедур", span: "" },
  { src: g5, alt: "Аналіз складу тіла та консультація", span: "sm:row-span-2" },
  { src: g6, alt: "Зона очікування салону SLIM у Дніпрі", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-3 sm:gap-4">
        {IMAGES.map((img, i) => (
          <button
            key={img.alt}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl bg-secondary ${img.span} ${
              img.span ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <button
            aria-label="Закрити"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={IMAGES[active]!.src}
            alt={IMAGES[active]!.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}
