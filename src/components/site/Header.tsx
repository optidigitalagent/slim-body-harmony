import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, PHONE_MAIN } from "@/lib/slim-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:flex lg:justify-between">
        <a href="#top" className="flex min-w-0 items-baseline gap-2">
          <span className="font-display text-2xl tracking-[0.28em] text-foreground">SLIM</span>
          <span className="hidden truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase sm:inline">
            Дніпро
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PHONE_MAIN.href}
            aria-label="Зателефонувати"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#booking"
            className="hidden min-h-11 items-center rounded-full bg-primary px-6 text-sm text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Записатися
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="my-4 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-base text-primary-foreground"
            >
              Записатися
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
