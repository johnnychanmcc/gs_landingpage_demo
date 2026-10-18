"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BUSINESS_TYPES,
  COUNTRIES,
  OFFICIAL_REGISTER_URL,
  SHOW,
} from "@/lib/show";

type FormState = {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  company: string
  country: string
  phone: string
  businessType: string
  phases: string[]
};

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  company: "",
  country: "",
  phone: "",
  businessType: "",
  phases: [],
};

type FieldError = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FieldError {
  const errors: FieldError = {};
  if (!form.firstName.trim()) errors.firstName = "Required";
  if (!form.lastName.trim()) errors.lastName = "Required";
  if (!form.email.trim()) errors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a work email";
  }
  if (!form.company.trim()) errors.company = "Required";
  if (!form.country) errors.country = "Required";
  if (!form.businessType) errors.businessType = "Required";
  if (form.phases.length === 0) errors.phases = "Pick at least one phase";
  return errors;
}

const selectClass =
  "h-10 w-full rounded-[2px] border border-neutral-300 bg-white px-3 text-sm outline-none focus-visible:border-[#E30613] focus-visible:ring-2 focus-visible:ring-[#E30613]/25";

export function RegisterForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "error" | "handoff">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function togglePhase(phaseId: string, checked: boolean) {
    setForm((current) => ({
      ...current,
      phases: checked
        ? [...current.phases, phaseId]
        : current.phases.filter((id) => id !== phaseId),
    }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("handoff");
    window.open(OFFICIAL_REGISTER_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName}>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={form.firstName}
            aria-invalid={Boolean(errors.firstName)}
            className="h-10 rounded-[2px]"
            onChange={(event) => update("firstName", event.target.value)}
          />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={form.lastName}
            aria-invalid={Boolean(errors.lastName)}
            className="h-10 rounded-[2px]"
            onChange={(event) => update("lastName", event.target.value)}
          />
        </Field>
      </div>

      <Field id="email" label="Work email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          aria-invalid={Boolean(errors.email)}
          className="h-10 rounded-[2px]"
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="jobTitle" label="Job title" optional>
          <Input
            id="jobTitle"
            name="jobTitle"
            autoComplete="organization-title"
            value={form.jobTitle}
            className="h-10 rounded-[2px]"
            onChange={(event) => update("jobTitle", event.target.value)}
          />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            value={form.company}
            aria-invalid={Boolean(errors.company)}
            className="h-10 rounded-[2px]"
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="country" label="Country / region" error={errors.country}>
          <select
            id="country"
            name="country"
            value={form.country}
            aria-invalid={Boolean(errors.country)}
            onChange={(event) => update("country", event.target.value)}
            className={selectClass}
          >
            <option value="">Select</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Field>
        <Field id="phone" label="Mobile / WhatsApp" optional>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            className="h-10 rounded-[2px]"
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>

      <Field
        id="businessType"
        label="Business type"
        error={errors.businessType}
      >
        <select
          id="businessType"
          name="businessType"
          value={form.businessType}
          aria-invalid={Boolean(errors.businessType)}
          onChange={(event) => update("businessType", event.target.value)}
          className={selectClass}
        >
          <option value="">Select</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold">
          Which phase will you visit?
        </legend>
        {SHOW.phases.map((phase) => (
          <label
            key={phase.id}
            className="flex items-start gap-2.5 border border-neutral-200 bg-white px-3 py-2.5"
          >
            <Checkbox
              checked={form.phases.includes(phase.id)}
              onCheckedChange={(checked) =>
                togglePhase(phase.id, checked === true)
              }
              className="mt-0.5 rounded-[2px]"
            />
            <span className="text-sm leading-snug">
              <span className="font-medium">
                {phase.label} ({phase.dates}) — {phase.showNames.join(", ")}
              </span>
            </span>
          </label>
        ))}
        {errors.phases ? (
          <p className="text-xs text-[#E30613]">{errors.phases}</p>
        ) : null}
      </fieldset>

      {status === "error" ? (
        <p
          role="alert"
          className="border border-[#E30613]/30 bg-[#E30613]/5 px-3 py-2 text-sm text-[#E30613]"
        >
          Complete the required fields, then continue to the official Global
          Sources form.
        </p>
      ) : null}

      {status === "handoff" ? (
        <p
          role="status"
          className="border border-neutral-300 bg-white px-3 py-2 text-sm"
        >
          The official registration page should now be open. If it was blocked,
          use the link below.
        </p>
      ) : (
        <p className="text-xs text-[#888]">
          This page does not store buyer data. Submit opens{" "}
          <span className="whitespace-nowrap">globalsources.com</span>.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="h-11 rounded-[2px] bg-[#E30613] px-5 text-white hover:bg-[#c20510]"
        >
          Register now
        </Button>
        <a
          href={OFFICIAL_REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#E30613] underline-offset-4 hover:underline"
        >
          Open official form
        </a>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="font-semibold">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-[#888]">optional</span>
        ) : (
          <span className="ml-0.5 text-[#E30613]">*</span>
        )}
      </Label>
      {children}
      {error ? <p className="text-xs text-[#E30613]">{error}</p> : null}
    </div>
  );
}
