"use client";

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { submitRsvp, type Attendance } from "@/content/wedding";

type Status = "idle" | "submitting" | "success";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !attendance) {
      setError("Please add your name and attendance.");
      return;
    }

    setStatus("submitting");
    await submitRsvp({ name: name.trim(), attendance });
    setStatus("success");
  }

  return (
    <form
      className="rsvp-form"
      onSubmit={handleSubmit}
      aria-describedby="rsvp-status"
      data-reveal-group
    >
      <label className="field-line" data-reveal-child>
        <span>Your name</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
        />
      </label>

      <fieldset className="attendance-field" data-reveal-child>
        <legend>Will you attend?</legend>
        <label>
          <input
            type="radio"
            name="attendance"
            value="yes"
            checked={attendance === "yes"}
            onChange={() => setAttendance("yes")}
          />
          <span>Yes, we wouldn&apos;t miss it</span>
        </label>
        <label>
          <input
            type="radio"
            name="attendance"
            value="no"
            checked={attendance === "no"}
            onChange={() => setAttendance("no")}
          />
          <span>No, sadly can&apos;t make it</span>
        </label>
      </fieldset>

      <button
        className="wine-button rsvp-submit"
        data-reveal-child
        disabled={status === "submitting"}
        type="submit"
      >
        <span>{status === "submitting" ? "Sending" : "Send response"}</span>
        <ArrowRight aria-hidden size={18} strokeWidth={1.4} />
      </button>

      <p className="form-status" id="rsvp-status" aria-live="polite">
        {error}
        {status === "success" ? "Thank you. Your response is noted." : ""}
      </p>
    </form>
  );
}
