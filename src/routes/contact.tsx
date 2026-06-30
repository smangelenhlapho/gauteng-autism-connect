import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Get in touch with Autism Connect Gauteng — list a school, volunteer, or ask a question.",
      },
      { property: "og:title", content: "Contact Autism Connect Gauteng" },
      {
        property: "og:description",
        content: "We aim to respond within two working days.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  topic: z.string().min(1),
  message: z.string().trim().min(10, "Please share a few more details").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[issue.path.join(".")] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>We’d love to hear from you</>}
        intro="Reach out to add a school, volunteer, suggest a resource or ask a question. We aim to respond within two working days."
      />

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 pt-8 pb-24">
        <aside className="space-y-8 lg:col-span-1">
          <Info label="Email" value="hello@autismconnectgp.org.za" href="mailto:hello@autismconnectgp.org.za" />
          <Info label="WhatsApp" value="+27 71 555 0123" href="https://wa.me/27715550123" />
          <Info label="Office" value="Cnr Empire & Stiemens, Braamfontein, Johannesburg" />
          <Info label="Hours" value="Mon–Fri, 09:00–16:00" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-navy/40 font-semibold mb-2">
              Social
            </p>
            <div className="flex gap-3 text-[11px] uppercase tracking-widest font-semibold">
              <a href="#" className="border-b border-navy hover:text-teal hover:border-teal pb-0.5">Facebook</a>
              <a href="#" className="border-b border-navy hover:text-teal hover:border-teal pb-0.5">Instagram</a>
              <a href="#" className="border-b border-navy hover:text-teal hover:border-teal pb-0.5">LinkedIn</a>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-2 border border-navy/10 p-8 bg-white">
          {submitted ? (
            <div className="text-center py-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-3">
                Message received
              </p>
              <h2 className="font-display text-2xl font-extrabold mb-3">Thank you</h2>
              <p className="text-navy/70 max-w-md mx-auto leading-relaxed">
                We have received your message and will respond as soon as we can.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <Field id="name" label="Your name" error={errors.name}>
                <input id="name" name="name" type="text" required className={inputCls} />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <input id="email" name="email" type="email" required className={inputCls} />
              </Field>
              <Field id="topic" label="Topic" error={errors.topic}>
                <select id="topic" name="topic" required defaultValue="General enquiry" className={inputCls}>
                  <option>General enquiry</option>
                  <option>List or update a school</option>
                  <option>Volunteer with us</option>
                  <option>Press &amp; partnerships</option>
                </select>
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" required rows={6} className={inputCls} />
              </Field>
              <button
                type="submit"
                className="bg-navy text-white text-[11px] uppercase tracking-widest font-semibold py-4 px-10 hover:bg-ocean transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full bg-transparent border border-navy/15 px-3 py-2.5 text-sm focus:border-teal outline-none font-body";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-widest text-navy/50 font-semibold mb-2"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-navy/40 font-semibold mb-1">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-sm text-navy/85 hover:text-teal break-words"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-navy/85">{value}</p>
      )}
    </div>
  );
}
