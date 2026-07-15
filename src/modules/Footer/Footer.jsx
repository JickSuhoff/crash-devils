"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/shared/components/Button";
import Dialog from "@/shared/components/Dialog";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Newsletter Subscription",
          message: `New newsletter subscription from: ${email}`,
        }),
      });
      if (res.ok) setSubmitted(true);
      else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative w-full">
      <div className="relative flex flex-col items-center text-center gap-15 overflow-hidden py-40">
        {/* Background SVGs — desktop / mobile */}
        <Image
          src="/assets/footer-desktop.svg"
          alt=""
          fill
          className="object-cover mix-blend-screen pointer-events-none max-[1200px]:hidden"
          style={{
            filter:
              "brightness(1.5) saturate(1.3) drop-shadow(0px 0px 40px rgba(230, 147, 107, 0.6))",
          }}
          aria-hidden="true"
        />
        <Image
          src="/assets/footer-mob.svg"
          alt=""
          fill
          className="object-cover mix-blend-screen pointer-events-none hidden max-[1200px]:block"
          style={{
            /* Stacking multiple drop-shadows multiplies the opacity and feathering 
               to generate a massive, ultra-thick premium blur around the mobile graphic vector */
            filter: `
              brightness(-0.4) 
              saturate(-0.6) 
              drop-shadow(0px 0px 20px rgba(237, 84, 12, 0.8)) 
              drop-shadow(0px 0px 50px rgba(228, 111, 57, 0.6))
              drop-shadow(0px 0px 100px rgba(230, 147, 107, 0.4))
            `,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] mb-4 w-fit h-6 px-2 flex justify-center items-center mx-auto">
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
              LET’S GET STARTED
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-geist)] text-[56px] max-[1200px]:text-[48px] font-normal text-[rgba(255,255,255,1)] leading-[1.1] max-w-[600px] max-[1200px]:max-w-[550px] max-[800px]:max-w-[335px]">
            Let's Build Something Great Together
          </h2>
        </div>
        <p className="relative z-10 font-[family-name:var(--font-geist)] text-[16px] font-normal text-white max-w-[400px] max-[1200px]:max-w-[550px] max-[800px]:max-w-[330px]">
          Whether you're launching a startup, scaling an existing platform, or
          exploring AI-powered solutions, our team is ready to help bring your
          vision to life.
        </p>
        <Button
          variant="light"
          className="relative z-10 mt-2 w-[176px] h-[42px] text-[14px] p-0!"
          onClick={() => setDialogOpen(true)}
        >
          Let's Talk
        </Button>
        <Image
          src="/assets/qr-code.svg"
          alt="QR Code"
          width={72}
          height={72}
          className="relative z-10"
        />
      </div>

      <div
        id="contact"
        className="flex justify-between px-20 max-[1200px]:px-5 max-[1200px]:flex-col max-[1200px]:gap-10"
      >
        <div className="flex flex-col gap-4 max-[1200px]:flex max-[1200px]:flex-col-reverse">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/logoWithText.svg"
              alt="logo"
              width={171}
              height={30}
            />
            <h3 className="font-[family-name:var(--font-geist)] text-[48px] font-normal text-[rgba(255,255,255,1)] leading-[1.1] max-w-[400px]">
              Breaking Digital Limits
            </h3>
          </div>
          <Image
            src="/assets/logo-glass.svg"
            alt="QR Code"
            width={330}
            height={331}
          />
        </div>

        {/* Navigation */}
        <div>
          <div className="flex justify-between items-start w-[656px] max-[1200px]:w-full max-[800px]:flex-col-reverse max-[800px]:gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-widest text-[rgba(168,168,168,1)]">
                / NAVIGATION
              </span>
              <nav className="flex flex-col gap-[8px] mt-1">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Technology", id: "technology" },
                  // { label: "Projects", id: "cases" },
                  // { label: "Blog", id: "blog" },
                  { label: "Contact", id: "contact" },
                  // { label: "Privacy Policy", id: null },
                  // { label: "Terms and Condition", id: null },
                ].map(({ label, id }) => (
                  <a
                    key={label}
                    href={id ? `#${id}` : "#"}
                    onClick={(e) => {
                      if (!id) return;
                      e.preventDefault();
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(248,239,239,1)] hover:opacity-75 transition-opacity"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Contacts */}
            <div className="flex flex-col gap-20 max-[1200px]:gap-10">
              <div className="flex flex-col gap-6">
                {/* Socials */}
                <div className="flex flex-col gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-widest text-[rgba(168,168,168,1)]">
                    / SOCIALS
                  </span>
                  <div className="flex flex-row gap-3 mt-1">
                    <a
                      href="https://www.linkedin.com/company/crashdevil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[rgba(26,26,29,1)] border border-[rgba(255,255,255,0.1)] rounded-[8px] hover:opacity-75 transition-opacity"
                    >
                      <Image
                        src="/assets/linkedin.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-widest text-[rgba(168,168,168,1)]">
                    / EMAIL
                  </span>
                  <p className="font-[family-name:var(--font-geist)] text-[32px] font-normal text-[rgba(248,239,239,1)]">
                    info@crashdevils.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[12px] uppercase tracking-widest text-[rgba(168,168,168,1)]">
                    / PHONE
                  </span>
                  <a
                    href="tel:+40747307534"
                    className="font-[family-name:var(--font-geist)] text-[18px] font-normal text-[rgba(248,239,239,1)]"
                  >
                    +40 (747) 307 534
                  </a>
                </div>
              </div>
              {/* Newsletter */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-widest text-[rgba(168,168,168,1)]">
                  SUBSCRIBE TO OUR NEWSLETTER
                </span>
                {submitted ? (
                  <p className="font-[family-name:var(--font-geist)] text-[14px] text-[rgba(168,168,168,1)]">
                    You're subscribed!
                  </p>
                ) : (
                  <>
                    <div className="flex flex-row items-center bg-[rgba(26,26,29,1)] border border-[rgba(248,239,239,0.1)] rounded-xl p-[5px] gap-2 w-[316px]">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        placeholder="Email address"
                        className="flex-1 bg-transparent text-[14px] text-[rgba(248,239,239,1)] placeholder:text-[rgba(168,168,168,1)] font-[family-name:var(--font-geist)] outline-none pl-3"
                      />
                      <Button
                        variant="light"
                        size="sm"
                        type="submit"
                        className="shrink-0 w-[80px] h-[38px]"
                        disabled={loading}
                      >
                        {loading ? "..." : "Submit"}
                      </Button>
                    </div>
                    {error && (
                      <p className="font-[family-name:var(--font-geist)] text-[12px] text-red-400">
                        {error}
                      </p>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="max-[1200px]:px-5 mt-10 pt-5 border-t-2 border-[rgba(248,239,239,0.1)]">
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[rgba(168,168,168,1)] uppercase tracking-wider">
              © 2026 CRASHDEVILS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>

      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Let's Build Something Powerful"
        emailLabel="Your Email"
        titleLabel="Subject"
        descriptionLabel="Message"
      />
    </footer>
  );
}
