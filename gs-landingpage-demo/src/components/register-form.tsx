"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BUSINESS_TYPES,
  COUNTRIES,
  NAME_TITLES,
  OFFICIAL_REGISTER_URL,
  PRIVACY_LINKS,
  SHOW,
  SOURCING_AMOUNTS,
} from "@/lib/show";

type FormState = {
  shows: string[]
  email: string
  title: string
  firstName: string
  lastName: string
  country: string
  company: string
  businessType: string
  sourcingAmount: string
  phoneCountry: string
  phone: string
  website: string
  notice: boolean
};

const emptyForm: FormState = {
  shows: [],
  email: "",
  title: "",
  firstName: "",
  lastName: "",
  country: "",
  company: "",
  businessType: "",
  sourcingAmount: "",
  phoneCountry: "",
  phone: "",
  website: "",
  notice: false,
};

type FieldError = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FieldError {
  const errors: FieldError = {};
  if (form.shows.length === 0) {
    errors.shows = "Select at least one show";
  }
  if (!form.email.trim()) errors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a business email";
  }
  if (!form.title) errors.title = "Required";
  if (!form.firstName.trim()) errors.firstName = "Required";
  if (!form.lastName.trim()) errors.lastName = "Required";
  if (!form.country) errors.country = "Required";
  if (!form.company.trim()) errors.company = "Required";
  if (!form.businessType) errors.businessType = "Required";
  if (!form.sourcingAmount) errors.sourcingAmount = "Required";
  if (!form.phoneCountry) errors.phoneCountry = "Required";
  if (!form.phone.trim()) errors.phone = "Required";
  if (!form.notice) errors.notice = "Please review the notices";
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

  function toggleShow(name: string, checked: boolean) {
    setForm((current) => ({
      ...current,
      shows: checked
        ? [...current.shows, name]
        : current.shows.filter((item) => item !== name),
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
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <fieldset>
        <legend className="text-base font-bold">
          Which shows would you like to register for?
          <span className="ml-0.5 text-[#E30613]">*</span>
        </legend>
        <div className="mt-4 space-y-6">
          {SHOW.phases.map((phase) => (
            <div key={phase.id} className="border border-neutral-200 bg-white p-4">
              <p className="text-sm font-bold">
                {phase.label}{" "}
                <span className="font-semibold text-[#E30613]">{phase.dates}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#555]">
                {phase.description}
              </p>
              <div className="mt-3 grid gap-2">
                {phase.showNames.map((name) => (
                  <label key={name} className="flex items-start gap-2.5 text-sm">
                    <Checkbox
                      checked={form.shows.includes(name)}
                      onCheckedChange={(checked) =>
                        toggleShow(name, checked === true)
                      }
                      className="mt-0.5 rounded-[2px]"
                    />
                    <span>{name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        {errors.shows ? (
          <p className="mt-2 text-xs text-[#E30613]">{errors.shows}</p>
        ) : null}
      </fieldset>

      <div>
        <h3 className="text-base font-bold">Your Details</h3>
        <div className="mt-4 space-y-4">
          <Field id="email" label="Business Email" error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              maxLength={100}
              placeholder="Business Email*"
              autoComplete="email"
              value={form.email}
              aria-invalid={Boolean(errors.email)}
              className="h-10 rounded-[2px]"
              onChange={(event) => update("email", event.target.value)}
            />
          </Field>

          <div>
            <p className="mb-1.5 text-sm font-semibold">
              Name<span className="ml-0.5 text-[#E30613]">*</span>
            </p>
            <div className="grid gap-3 sm:grid-cols-[7.5rem_1fr_1fr]">
              <div>
                <select
                  id="title"
                  name="title"
                  value={form.title}
                  aria-label="Title"
                  aria-invalid={Boolean(errors.title)}
                  onChange={(event) => update("title", event.target.value)}
                  className={selectClass}
                >
                  <option value="">Please Select One</option>
                  {NAME_TITLES.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
                {errors.title ? (
                  <p className="mt-1 text-xs text-[#E30613]">{errors.title}</p>
                ) : null}
              </div>
              <Field
                id="firstName"
                label="First/Given Name"
                hideLabel
                error={errors.firstName}
              >
                <Input
                  id="firstName"
                  name="firstName"
                  maxLength={35}
                  placeholder="First/Given Name*"
                  autoComplete="given-name"
                  value={form.firstName}
                  aria-invalid={Boolean(errors.firstName)}
                  className="h-10 rounded-[2px]"
                  onChange={(event) => update("firstName", event.target.value)}
                />
              </Field>
              <Field
                id="lastName"
                label="Last/Family Name"
                hideLabel
                error={errors.lastName}
              >
                <Input
                  id="lastName"
                  name="lastName"
                  maxLength={35}
                  placeholder="Last/Family Name*"
                  autoComplete="family-name"
                  value={form.lastName}
                  aria-invalid={Boolean(errors.lastName)}
                  className="h-10 rounded-[2px]"
                  onChange={(event) => update("lastName", event.target.value)}
                />
              </Field>
            </div>
          </div>

          <Field id="country" label="Country/Region" error={errors.country}>
            <select
              id="country"
              name="country"
              value={form.country}
              aria-invalid={Boolean(errors.country)}
              onChange={(event) => update("country", event.target.value)}
              className={selectClass}
            >
              <option value="">Please Select One</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </Field>

          <Field id="company" label="Company Name" error={errors.company}>
            <Input
              id="company"
              name="company"
              maxLength={100}
              placeholder="Company Name*"
              autoComplete="organization"
              value={form.company}
              aria-invalid={Boolean(errors.company)}
              className="h-10 rounded-[2px]"
              onChange={(event) => update("company", event.target.value)}
            />
          </Field>

          <Field
            id="businessType"
            label="What is your company's core business type? (Choose the most applicable)"
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
              <option value="">Please Select One</option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field
            id="sourcingAmount"
            label="What is the annual sourcing amount of your company? (USD)"
            error={errors.sourcingAmount}
          >
            <select
              id="sourcingAmount"
              name="sourcingAmount"
              value={form.sourcingAmount}
              aria-invalid={Boolean(errors.sourcingAmount)}
              onChange={(event) => update("sourcingAmount", event.target.value)}
              className={selectClass}
            >
              <option value="">Please Select One</option>
              {SOURCING_AMOUNTS.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}
                </option>
              ))}
            </select>
          </Field>

          <div>
            <p className="mb-1.5 text-sm font-semibold">
              Mobile Phone Number
              <span className="ml-0.5 text-[#E30613]">*</span>
            </p>
            <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
              <div>
                <select
                  id="phoneCountry"
                  name="phoneCountry"
                  value={form.phoneCountry}
                  aria-label="Phone country/region"
                  aria-invalid={Boolean(errors.phoneCountry)}
                  onChange={(event) => update("phoneCountry", event.target.value)}
                  className={selectClass}
                >
                  <option value="">Country/Region*</option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.phoneCountry ? (
                  <p className="mt-1 text-xs text-[#E30613]">
                    {errors.phoneCountry}
                  </p>
                ) : null}
              </div>
              <Field
                id="phone"
                label="Mobile Phone Number"
                hideLabel
                error={errors.phone}
              >
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={20}
                  placeholder="Mobile Phone Number*"
                  autoComplete="tel"
                  value={form.phone}
                  aria-invalid={Boolean(errors.phone)}
                  className="h-10 rounded-[2px]"
                  onChange={(event) => update("phone", event.target.value)}
                />
              </Field>
            </div>
          </div>

          <Field id="website" label="Company Website URL" optional>
            <Input
              id="website"
              name="website"
              type="url"
              maxLength={60}
              placeholder="Company Website URL"
              autoComplete="url"
              value={form.website}
              className="h-10 rounded-[2px]"
              onChange={(event) => update("website", event.target.value)}
            />
          </Field>
        </div>
      </div>

      <div className="space-y-3 border-t border-neutral-200 pt-5">
        <label className="flex items-start gap-2.5 text-sm leading-relaxed text-[#444]">
          <Checkbox
            checked={form.notice}
            onCheckedChange={(checked) => update("notice", checked === true)}
            className="mt-0.5 rounded-[2px]"
            aria-invalid={Boolean(errors.notice)}
          />
          <span>
            Please see our{" "}
            <a
              href={PRIVACY_LINKS.collectionNotice}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[#E30613] underline-offset-2 hover:underline"
            >
              Personal Information Collection Notice
            </a>{" "}
            and{" "}
            <a
              href={PRIVACY_LINKS.cookiePolicy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[#E30613] underline-offset-2 hover:underline"
            >
              Cookie Policy
            </a>{" "}
            for information regarding the processing of your data.
          </span>
        </label>
        {errors.notice ? (
          <p className="text-xs text-[#E30613]">{errors.notice}</p>
        ) : null}

        <div className="space-y-2 text-xs leading-relaxed text-[#666]">
          <p>
            Trade only – No one under 18 years old will be admitted at any time
            during the event. No children or babies are allowed to enter the
            event at any time.
          </p>
          <p>A free GlobalSources.com account will be created for new users.</p>
          <p>
            By clicking “Submit,” you agree that we may use your personal data
            to send your admission credentials. You also consent to receive
            newsletters, offers, and other marketing e-mails with updates on
            our products, services, and upcoming events. You may un-subscribe
            at any time.
          </p>
          <p>
            By clicking &apos;Submit&apos; you agree that you have read our{" "}
            <a
              href={PRIVACY_LINKS.privacyPolicy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[#E30613] underline-offset-2 hover:underline"
            >
              Privacy
            </a>{" "}
            and{" "}
            <a
              href={PRIVACY_LINKS.cookiePolicy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[#E30613] underline-offset-2 hover:underline"
            >
              Cookie Policy
            </a>{" "}
            and accepted our{" "}
            <a
              href={PRIVACY_LINKS.termsOfUse}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-[#E30613] underline-offset-2 hover:underline"
            >
              Terms of Use
            </a>
            .
          </p>
          <p>
            To avoid sending multiple registrations, please click the Submit
            button only once.
          </p>
          <p>
            This page does not store buyer data. Submit opens the official
            Global Sources form to finish registration.
          </p>
        </div>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="border border-[#E30613]/30 bg-[#E30613]/5 px-3 py-2 text-sm text-[#E30613]"
        >
          Complete the required fields, then continue to the official form.
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
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="h-11 rounded-[2px] bg-[#E30613] px-8 text-white hover:bg-[#c20510]"
        >
          Submit
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
  hideLabel,
  error,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  hideLabel?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div className="space-y-1.5">
      {hideLabel ? (
        <Label htmlFor={id} className="sr-only">
          {label}
        </Label>
      ) : (
        <Label htmlFor={id} className="font-semibold">
          {label}
          {optional ? (
            <span className="ml-1 font-normal text-[#888]">optional</span>
          ) : (
            <span className="ml-0.5 text-[#E30613]">*</span>
          )}
        </Label>
      )}
      {children}
      {error ? <p className="text-xs text-[#E30613]">{error}</p> : null}
    </div>
  );
}
