'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig, whatsappLink } from '@/config/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  city: string;
  sites: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  type: '',
  city: '',
  sites: '1',
  message: '',
  consent: false,
};

const fieldClass =
  'min-h-[48px] w-full rounded-xl border border-input bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-accent';

export default function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (key: keyof FormState, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    const req = t.contact.errors.required;
    if (!values.name.trim()) e.name = req;
    if (!values.email.trim()) e.email = req;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = t.contact.errors.email;
    if (!values.phone.trim()) e.phone = req;
    else if (!/^[0-9 ()-]{6,}$/.test(values.phone)) e.phone = t.contact.errors.phone;
    if (!values.company.trim()) e.company = req;
    if (!values.type) e.type = req;
    if (!values.city.trim()) e.city = req;
    if (!values.consent) e.consent = t.contact.errors.consent;
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch(siteConfig.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, phone: `+212 ${values.phone}` }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  };

  const err = (key: keyof FormState) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1 text-sm font-medium text-destructive">
        {errors[key]}
      </p>
    ) : null;

  const labelClass = 'mb-2 block text-sm font-semibold text-foreground';

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <form onSubmit={onSubmit} noValidate className="rounded-[2.5rem] border border-border bg-card p-6 shadow-xl sm:p-10">
        {status === 'success' && (
          <div role="status" className="mb-6 flex items-start gap-3 rounded-2xl bg-success p-4 text-success-foreground">
            <Icon name="CheckCircleIcon" size={22} className="shrink-0" />
            <p className="text-[15px] font-medium">{t.contact.success}</p>
          </div>
        )}
        {status === 'error' && (
          <div role="alert" className="mb-6 flex items-start gap-3 rounded-2xl bg-destructive p-4 text-destructive-foreground">
            <Icon name="ExclamationTriangleIcon" size={22} className="shrink-0" />
            <p className="text-[15px] font-medium">{t.contact.failure}</p>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>{t.contact.name}</label>
            <input id="name" className={fieldClass} value={values.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" />
            {err('name')}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>{t.contact.email}</label>
            <input id="email" type="email" className={fieldClass} value={values.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" />
            {err('email')}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>{t.contact.phone}</label>
            <div className="flex gap-2" dir="ltr">
              <span className="inline-flex min-h-[48px] items-center rounded-xl border border-input bg-secondary px-4 text-base font-semibold text-foreground">
                +212
              </span>
              <input id="phone" type="tel" inputMode="tel" className={fieldClass} value={values.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} autoComplete="tel-national" placeholder="6 00 00 00 00" />
            </div>
            {err('phone')}
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>{t.contact.company}</label>
            <input id="company" className={fieldClass} value={values.company} onChange={(e) => update('company', e.target.value)} aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-error' : undefined} autoComplete="organization" />
            {err('company')}
          </div>
          <div>
            <label htmlFor="type" className={labelClass}>{t.contact.type}</label>
            <select id="type" className={fieldClass} value={values.type} onChange={(e) => update('type', e.target.value)} aria-invalid={!!errors.type} aria-describedby={errors.type ? 'type-error' : undefined}>
              <option value="" />
              {t.contact.types.map((ty) => (
                <option key={ty} value={ty}>{ty}</option>
              ))}
            </select>
            {err('type')}
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>{t.contact.city}</label>
            <input id="city" className={fieldClass} value={values.city} onChange={(e) => update('city', e.target.value)} aria-invalid={!!errors.city} aria-describedby={errors.city ? 'city-error' : undefined} placeholder="Marrakech, Casablanca, Tanger…" autoComplete="address-level2" />
            {err('city')}
          </div>
          <div>
            <label htmlFor="sites" className={labelClass}>{t.contact.sites}</label>
            <input id="sites" type="number" min={1} className={fieldClass} value={values.sites} onChange={(e) => update('sites', e.target.value)} />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className={labelClass}>{t.contact.message}</label>
          <textarea id="message" rows={4} className={`${fieldClass} py-3`} value={values.message} onChange={(e) => update('message', e.target.value)} />
        </div>

        <div className="mt-5">
          <label className="flex min-h-[44px] cursor-pointer items-start gap-3 text-[15px] text-foreground">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update('consent', e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className="mt-1 h-5 w-5 accent-[var(--accent)]"
            />
            <span>{t.contact.consent}</span>
          </label>
          {err('consent')}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === 'sending' && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
          )}
          {status === 'sending' ? t.contact.sending : t.contact.submit}
        </button>
      </form>

      <aside className="flex flex-col gap-5">
        <div className="rounded-[2.5rem] bg-primary p-8 text-primary-foreground">
          <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-accent" />
          <h2 className="mt-4 font-serif-accent text-2xl font-medium">{t.contact.whatsapp}</h2>
          <p className="mt-2 text-[15px] opacity-85">{siteConfig.contactEmail}</p>
          <a
            href={whatsappLink(t.contact.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            {t.contact.whatsapp}
          </a>
        </div>
        <div className="rounded-[2.5rem] border border-border bg-secondary p-8">
          <p className="text-[15px] leading-relaxed text-foreground">{t.limits.dont}</p>
        </div>
      </aside>
    </div>
  );
}