"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "@/shared/components/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full bg-[rgba(248,239,239,0.05)] border border-[rgba(248,239,239,0.1)] rounded-lg px-4 py-3 text-[14px] text-[rgba(248,239,239,1)] placeholder:text-[rgba(168,168,168,1)] font-[family-name:var(--font-geist)] outline-none focus:border-[rgba(248,239,239,0.3)] transition-colors";

const labelClass =
  "font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-widest text-[rgba(168,168,168,1)]";

export default function Dialog({
  isOpen,
  onClose,
  title = "Get in Touch",
  emailLabel = "Your Email",
  titleLabel = "Subject",
  descriptionLabel = "Message",
}) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setSubject("");
      setDescription("");
      setEmailError("");
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setServerError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message: description }),
      });
      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto bg-[rgba(26,26,29,1)] border border-[rgba(248,239,239,0.1)] rounded-2xl p-8 max-[600px]:p-5 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-[rgba(168,168,168,1)] hover:text-[rgba(248,239,239,1)] transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="flex flex-col gap-3 pr-8">
          <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] w-fit h-6 px-2 flex items-center">
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
              Contact Us
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-geist)] text-[32px] max-[600px]:text-[24px] font-normal text-[rgba(255,255,255,1)] leading-[1.1]">
            {title}
          </h2>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <p className="font-[family-name:var(--font-geist)] text-[18px] text-[rgba(248,239,239,1)]">
              Message sent!
            </p>
            <p className="font-[family-name:var(--font-geist)] text-[14px] text-[rgba(168,168,168,1)]">
              We've received your message and will get back to you shortly.
            </p>
            <Button variant="light" className="mt-2" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>/ {emailLabel}</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="your@email.com"
                className={`${inputClass} ${emailError ? "border-red-500/60 focus:border-red-500/60" : ""}`}
              />
              {emailError && (
                <p className="font-[family-name:var(--font-geist)] text-[12px] text-red-400">
                  {emailError}
                </p>
              )}
            </div>

            {/* Subject / Title */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>/ {titleLabel}</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>/ {descriptionLabel}</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell us about your project..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {serverError && (
              <p className="font-[family-name:var(--font-geist)] text-[12px] text-red-400">
                {serverError}
              </p>
            )}
            <Button variant="light" type="submit" className="mt-2 w-full h-[46px] p-0!" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
