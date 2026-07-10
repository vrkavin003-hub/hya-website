"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { careerRoles } from "@/data/site";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

async function submitForm(
  endpoint: string,
  form: HTMLFormElement,
): Promise<{ mailto: string; message: string }> {
  const formData = new FormData(form);
  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message ?? "Please review the form and try again.");
  }
  return result;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ status: "submitting", message: "" });
    try {
      const result = await submitForm("/api/contact", form);
      setState({ status: "success", message: result.message });
      window.location.href = result.mailto;
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error ? error.message : "Unable to prepare your enquiry.",
      });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Full name</span>
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="company" autoComplete="organization" required minLength={2} />
        </label>
        <label className="field">
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="field mt-5">
        <span>Capability you are interested in</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a capability
          </option>
          <option>Design & engineering</option>
          <option>Precision manufacturing</option>
          <option>Fixtures & tooling</option>
          <option>Automation & turnkey systems</option>
          <option>Intelligent equipment</option>
          <option>Industrial spares & support</option>
          <option>Other</option>
        </select>
      </label>
      <label className="field mt-5">
        <span>Project details</span>
        <textarea
          name="message"
          rows={6}
          minLength={20}
          required
          placeholder="Tell us about the application, production need, timeline, and any known constraints."
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted">
          Submitting validates your enquiry and opens a prepared email in your
          device’s email app. No information is stored by this website.
        </p>
        <button className="button button-primary" type="submit" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? (
            <LoaderCircle className="animate-spin" aria-hidden="true" size={17} />
          ) : (
            <Send aria-hidden="true" size={17} />
          )}
          Prepare enquiry
        </button>
      </div>
      <FormMessage state={state} />
    </form>
  );
}

export function CareerApplication() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ status: "submitting", message: "" });
    try {
      const result = await submitForm("/api/careers", form);
      setState({ status: "success", message: result.message });
      window.location.href = result.mailto;
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error ? error.message : "Unable to prepare your application.",
      });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} encType="multipart/form-data">
      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>First name</span>
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label className="field">
          <span>Last name</span>
          <input name="name" autoComplete="name" required minLength={2} />
        </label>

      </div>
      <label className="field mt-5">
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field mt-5">
        <span>Position of interest</span>
        <select name="role" defaultValue="" required>
          <option value="" disabled>
            Select a position
          </option>
          {careerRoles.map((role) => (
            <option key={role.title}>{role.title}</option>
          ))}
          <option>General application</option>
        </select>
      </label>
      <label className="field mt-5">
        <span>Designation</span>
        <input name="designation" autoComplete="job-title" required minLength={2} />
      </label>
      <label className="field mt-5">
        <span>Introduction</span>
        <textarea
          name="message"
          rows={6}
          minLength={20}
          required
          placeholder="Share a concise introduction, your experience, and the kind of work you want to contribute to."
        />
      </label>
      <label className="field mt-5">
        <span>Upload Resume</span>
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
        />
        <small className="mt-2 block text-xs leading-5 text-muted">
          PDF, DOC, or DOCX. Maximum file size: 5 MB.
        </small>
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted">
          Your résumé will be validated here. Attach the same file when your
          prepared email opens.
        </p>
        <button className="button button-primary" type="submit" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? (
            <LoaderCircle className="animate-spin" aria-hidden="true" size={17} />
          ) : (
            <Send aria-hidden="true" size={17} />
          )}
          Prepare application
        </button>
      </div>
      <FormMessage state={state} />
    </form>
  );
}

function FormMessage({ state }: { state: FormState }) {
  if (!state.message) return null;
  return (
    <p
      className={`mt-5 rounded-xl px-4 py-3 text-sm ${
        state.status === "error"
          ? "bg-red-50 text-red-700"
          : "bg-emerald-50 text-emerald-700"
      }`}
      role={state.status === "error" ? "alert" : "status"}
    >
      {state.message}
    </p>
  );
}
