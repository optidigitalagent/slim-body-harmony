import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Navigation, ArrowRight, Quote } from "lucide-react";

import { Header } from "@/components/site/Header";
import { BookingForm } from "@/components/site/BookingForm";
import { Gallery } from "@/components/site/Gallery";
import { CONTACTS, PHONE_MAIN, NAV, SERVICES, REVIEWS, TEAM, BENEFITS } from "@/lib/slim-data";
import hero from "@/assets/hero.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const TITLE = "Майстерня краси та здоров'я SLIM — корекція фігури у Дніпрі";
const DESCRIPTION =
  "SLIM у Дніпрі — апаратна корекція фігури, кавітація, пресотерапія, RF-ліфтинг, міостимуляція, ліполіз, аналіз складу тіла та консультація дієтолога.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: CONTACTS.name,
          description: DESCRIPTION,
          telephone: ["+380990579879", "+380683103282"],
          email: CONTACTS.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "вул. Князя Володимира Великого, 14",
            addressLocality: "Дніпро",
            addressCountry: "UA",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
});

function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="label-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Header />

      <main className="pb-24 lg:pb-0">
        {/* HERO */}
        <section className="px-5 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="label-eyebrow">Майстерня краси та здоров'я у Дніпрі</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl">
                Корекція фігури
                <span className="block italic text-primary">з турботою про результат</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Апаратні процедури, аналіз складу тіла та супровід дієтолога для тих, хто хоче
                бачити реальні зміни, а не тимчасовий ефект.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Записатися на консультацію
                </a>
                <a
                  href="#prices"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-8 text-base transition-colors hover:bg-secondary"
                >
                  Переглянути прайс
                </a>
              </div>

              <dl className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">Адреса</dt>
                    <dd className="mt-1 text-sm">{CONTACTS.address}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                      Телефони
                    </dt>
                    <dd className="mt-1 flex flex-col text-sm">
                      {CONTACTS.phones.map((p) => (
                        <a key={p.href} href={p.href} className="hover:text-primary">
                          {p.label}
                        </a>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">Графік</dt>
                    <dd className="mt-1 text-sm">
                      Пн–Пт 08:00–20:00
                      <br />
                      Сб–Нд 08:00–17:00
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-4 hidden h-40 w-40 rounded-full bg-secondary md:block" />
              <img
                src={hero}
                alt="Клієнтка під час процедури догляду за тілом у салоні SLIM"
                width={1200}
                height={1504}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="bg-card px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Чому ми"
              title="Чому клієнти обирають SLIM"
              text="Ми працюємо з тілом послідовно: спочатку розуміємо стан, потім підбираємо процедури, а далі — допомагаємо зберегти результат."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b, i) => (
                <article key={b.title} className="bg-card p-7 md:p-8">
                  <span className="font-display text-2xl text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHead
                eyebrow="Про нас"
                title="Про SLIM"
                text="SLIM — це майстерня краси та здоров'я, де корекція фігури починається не з апарата, а з розмови та розуміння, що саме відбувається з тілом."
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Ми допомагаємо працювати із зайвою вагою, целюлітом, набряками та в'ялістю шкіри
                  через поєднання апаратної корекції фігури та консультаційного супроводу. Такий
                  формат дозволяє бачити не лише зовнішні зміни, а й покращення самопочуття.
                </p>
                <p>
                  Кожна історія починається однаково: ми слухаємо, дивимось на реальні показники
                  тіла й лише потім пропонуємо рішення. Без універсальних курсів «для всіх» і без
                  обіцянок, які неможливо виконати.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Професійна консультація",
                  "Аналіз складу тіла",
                  "Розуміння свого фізичного стану",
                  "Індивідуальний підхід",
                  "Програма корекції фігури",
                  "Рекомендації щодо харчування",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 self-start">
              <img
                src={about1}
                alt="Інтер'єр кабінету салону SLIM"
                loading="lazy"
                width={1000}
                height={1200}
                className="col-span-2 aspect-[4/3] w-full rounded-[1.75rem] object-cover"
              />
              <img
                src={about2}
                alt="Спеціалістка салону готує кабінет до процедури"
                loading="lazy"
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-[1.75rem] object-cover"
              />
              <div className="flex flex-col justify-center rounded-[1.75rem] bg-secondary p-6">
                <p className="font-display text-4xl text-primary">10+</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  напрямів догляду за тілом — від діагностики до підтримки результату
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICES */}
        <section id="prices" className="bg-card px-5 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <SectionHead
              eyebrow="Прайс"
              title="Послуги та вартість"
              text="Прозорі ціни на окремі процедури та комплексні програми."
            />
            <ul className="mt-12">
              {SERVICES.map((s) => (
                <li
                  key={s.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border py-5 first:border-t"
                >
                  <div className="min-w-0">
                    <p className="text-lg leading-snug">{s.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                  </div>
                  <p className="font-display text-xl whitespace-nowrap text-primary">{s.price}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Остаточна вартість може залежати від тривалості, зони впливу та індивідуальної
              програми.
            </p>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Команда"
              title="Команда SLIM"
              text="Невелика команда, у якій кожен відповідає за свою частину шляху клієнта."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TEAM.map((m) => (
                <article
                  key={m.role}
                  className="rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary font-display text-lg text-primary">
                    S
                  </span>
                  <h3 className="mt-6 text-xl leading-snug">{m.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              З питань запису та організації візиту вас зустріне Анна — адміністраторка салону.
            </p>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" className="bg-card px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Наші роботи"
              title="Наші роботи"
              text="Атмосфера салону, обладнання та процедури, з яких складається щоденна робота SLIM."
            />
            <div className="mt-12">
              <Gallery />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="Відгуки" title="Що кажуть наші клієнти" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((r) => (
                <figure key={r.author} className="rounded-3xl border border-border bg-card p-7">
                  <Quote className="h-5 w-5 text-taupe" />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground">{r.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-secondary px-6 py-14 text-center md:px-16 md:py-20">
            <h2 className="mx-auto max-w-xl text-3xl leading-tight sm:text-4xl md:text-5xl">
              Готові почати зміни?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Запишіться на консультацію, щоб підібрати процедури та програму саме під ваш запит.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base text-primary-foreground transition-opacity hover:opacity-90"
              >
                Записатися
              </a>
              <a
                href={PHONE_MAIN.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/15 px-8 text-base transition-colors hover:bg-card"
              >
                Зателефонувати
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="bg-card px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="Контакти" title="Де нас знайти" />

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="text-lg">{CONTACTS.name}</p>
                      <p className="mt-1 text-muted-foreground">{CONTACTS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div className="flex min-w-0 flex-col">
                      {CONTACTS.phones.map((p) => (
                        <a key={p.href} href={p.href} className="text-lg hover:text-primary">
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <a
                      href={`mailto:${CONTACTS.email}`}
                      className="min-w-0 truncate text-lg hover:text-primary"
                    >
                      {CONTACTS.email}
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <p>Пн–Пт: 08:00–20:00</p>
                      <p>Сб–Нд: 08:00–17:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={CONTACTS.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm transition-colors hover:bg-secondary"
                  >
                    <Navigation className="h-4 w-4" /> Прокласти маршрут
                  </a>
                  <a
                    href={PHONE_MAIN.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm transition-colors hover:bg-secondary"
                  >
                    <Phone className="h-4 w-4" /> Зателефонувати
                  </a>
                  <a
                    href="#booking"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Записатися <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 overflow-hidden rounded-3xl border border-border">
                  <iframe
                    src={CONTACTS.mapEmbed}
                    title="Карта — салон SLIM у Дніпрі"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[300px] w-full border-0"
                  />
                </div>
              </div>

              <div id="booking" className="scroll-mt-24">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.28em]">SLIM</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Майстерня краси та здоров'я у Дніпрі. Апаратна корекція фігури, діагностика та
              супровід для довготривалого результату.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-foreground">Контакти</p>
            <p>{CONTACTS.address}</p>
            {CONTACTS.phones.map((p) => (
              <a key={p.href} href={p.href} className="block hover:text-foreground">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${CONTACTS.email}`} className="block break-all hover:text-foreground">
              {CONTACTS.email}
            </a>
            <p className="pt-2">Пн–Пт: 08:00–20:00</p>
            <p>Сб–Нд: 08:00–17:00</p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Майстерня краси та здоров'я SLIM. Усі права захищені.</p>
          <a href="#contacts" className="hover:text-foreground">
            Політика конфіденційності
          </a>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
        <a
          href={PHONE_MAIN.href}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border text-sm"
        >
          <Phone className="h-4 w-4" /> Зателефонувати
        </a>
        <a
          href="#booking"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground"
        >
          Записатися
        </a>
      </div>
    </div>
  );
}
