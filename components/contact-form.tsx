"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";

type Language = "es" | "en";
type FormStatus = "idle" | "sending" | "success" | "error";

const labels = {
  es: {
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Tu correo",
    emailPlaceholder: "nombre@empresa.com",
    message: "Mensaje",
    messagePlaceholder: "Contame sobre el rol, equipo o proyecto…",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    protected: "Validación, límite de envíos y protección antispam.",
    success: "Mensaje enviado. Gracias por contactarme.",
    error: "No se pudo enviar el mensaje. Intentá nuevamente en unos minutos.",
    nameError: "Ingresá tu nombre.",
    emailError: "Ingresá un correo válido.",
    messageError: "Escribí al menos 20 caracteres.",
    website: "Sitio web",
  },
  en: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Your email",
    emailPlaceholder: "name@company.com",
    message: "Message",
    messagePlaceholder: "Tell me about the role, team, or project…",
    submit: "Send message",
    sending: "Sending…",
    protected: "Validation, rate limiting, and anti-spam protection.",
    success: "Message sent. Thank you for reaching out.",
    error: "The message could not be sent. Please try again in a few minutes.",
    nameError: "Enter your name.",
    emailError: "Enter a valid email address.",
    messageError: "Write at least 20 characters.",
    website: "Website",
  },
} as const;

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm({ language }: { language: Language }) {
  const text = labels[language];
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const startedAt = useRef(Date.now());
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const turnstileToken = String(formData.get("cf-turnstile-response") ?? "");
    const nextErrors: FieldErrors = {};

    if (name.length < 2) nextErrors.name = text.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = text.emailError;
    if (message.length < 20) nextErrors.message = text.messageError;

    setErrors(nextErrors);
    setStatus("idle");
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website,
          turnstileToken,
          startedAt: startedAt.current,
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
      setErrors({});
      const turnstile = (window as Window & { turnstile?: { reset: () => void } }).turnstile;
      turnstile?.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" /> : null}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-field-row">
          <label className="contact-field">
            <span>{text.name}</span>
            <input name="name" autoComplete="name" placeholder={text.namePlaceholder} aria-invalid={Boolean(errors.name)} aria-describedby="contact-name-error" />
            <small id="contact-name-error" className="contact-error">{errors.name}</small>
          </label>
          <label className="contact-field">
            <span>{text.email}</span>
            <input name="email" type="email" autoComplete="email" placeholder={text.emailPlaceholder} aria-invalid={Boolean(errors.email)} aria-describedby="contact-email-error" />
            <small id="contact-email-error" className="contact-error">{errors.email}</small>
          </label>
        </div>

        <label className="contact-field">
          <span>{text.message}</span>
          <textarea name="message" placeholder={text.messagePlaceholder} minLength={20} aria-invalid={Boolean(errors.message)} aria-describedby="contact-message-error" />
          <small id="contact-message-error" className="contact-error">{errors.message}</small>
        </label>

        <label className="contact-honeypot" aria-hidden="true">
          {text.website}
          <input name="website" autoComplete="off" tabIndex={-1} />
        </label>

        {siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} data-theme="auto" /> : null}

        {status === "success" ? <p className="contact-feedback success" role="status"><CheckCircle2 />{text.success}</p> : null}
        {status === "error" ? <p className="contact-feedback error" role="alert">{text.error}</p> : null}

        <div className="contact-form-footer">
          <p><ShieldCheck />{text.protected}</p>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? text.sending : text.submit} <Send />
          </button>
        </div>
      </form>
    </>
  );
}
