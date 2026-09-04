import { useState } from "react";
import { z } from "zod";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/slim-data";

const schema = z.object({
  name: z.string().trim().min(2, "Вкажіть, будь ласка, ім'я").max(80),
  phone: z
    .string()
    .trim()
    .min(9, "Вкажіть коректний номер телефону")
    .max(30)
    .regex(/^[0-9+()\s-]+$/, "Номер може містити лише цифри та символи + ( ) -"),
  service: z.string().trim().max(120).optional(),
  comment: z.string().trim().max(600).optional(),
});

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      comment: String(fd.get("comment") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  if (sent) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-border bg-card px-6 py-14 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary">
          <Check className="h-6 w-6 text-primary" />
        </span>
        <h3 className="mt-6 text-2xl">Дякуємо!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Ми зв'яжемося з вами найближчим часом, щоб підтвердити зручний час візиту.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 min-h-11 rounded-full border border-border px-6 text-sm transition-colors hover:bg-secondary"
        >
          Надіслати ще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="text-2xl">Запис на консультацію</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Залиште контакти — ми передзвонимо та підберемо зручний час.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="text-sm text-foreground">
            Ім'я
          </label>
          <input id="name" name="name" maxLength={80} placeholder="Ваше ім'я" className={field} />
          {errors['name'] && <p className="mt-1.5 text-sm text-destructive">{errors['name']}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm text-foreground">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            maxLength={30}
            placeholder="+380 __ ___ __ __"
            className={field}
          />
          {errors['phone'] && <p className="mt-1.5 text-sm text-destructive">{errors['phone']}</p>}
        </div>

        <div>
          <label htmlFor="service" className="text-sm text-foreground">
            Послуга / процедура
          </label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="">Ще не визначилась(-вся)</option>
            {SERVICES.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="text-sm text-foreground">
            Коментар
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={3}
            maxLength={600}
            placeholder="Зручний час, запитання або ваш запит"
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-base text-primary-foreground transition-opacity hover:opacity-90"
      >
        Надіслати заявку
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Надсилаючи заявку, ви погоджуєтесь на обробку контактних даних.
      </p>
    </form>
  );
}
