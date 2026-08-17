"use client";

import Image from "next/image";
import { useState } from "react";

type Highlight = {
  title: string;
  text: string;
  alt: string;
  src: string;
  /** Fraction-width sprite crop (e.g. "-left-full"); omit for a plai */
  crop?: { position: string; widthClass: string };
};

const highlights: Highlight[] = [
  {
    title: "3 to 6 Month AVG Course",
    text: "ADHD care may require consistent follow-up over time. The duration can vary depending on the child’s needs, symptoms and response to treatment.",
    alt: "Doctor discussing ADHD care duration with a parent and child",
    src: "/adhd-faq-doctor-child.png",
  },
  {
    title: "98% Success Rate",
    text: "B Homeo highlights a 98% success rate across its treatment approach, reflecting its experience in providing personalised homeopathic care.",
    alt: "Smiling student writing beside an open book",
    src: "/learning-discovery-strip.png",
    crop: { position: "-left-full", widthClass: "w-[200%]" },
  },
  {
    title: "No Hidden Charges",
    text: "The first online consultation fee is fixed. Medicine charges, if applicable, are communicated by the doctor after consultation.",
    alt: "Children in a classroom",
    src: "/home_2_banner.png",
  },
  {
    title: "Advanced Homeopathy Kit",
    text: "A structured homeopathic medicine approach designed to provide personalised support based on the child’s symptoms and overall assessment.",
    alt: "Prescribed homeopathic medicines delivered to a home",
    src: "/treatment-process-strip.png",
    crop: { position: "-left-[200%]", widthClass: "w-[300%]" },
  },
];

function HighlightImage({ h }: { h: Highlight }) {
  return (
    <div className="relative h-[270px] w-full overflow-hidden rounded-[16px] bg-[#eef2ff]">
      {h.crop ? (
        <Image
          src={h.src}
          alt={h.alt}
          width={2560}
          height={1024}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          quality={95}
          className={`absolute top-0 h-full max-w-none object-cover ${h.crop.widthClass} ${h.crop.position}`}
        />
      ) : (
        <Image src={h.src} alt={h.alt} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw" className="object-cover" />
      )}
    </div>
  );
}

function HighlightCard({ h }: { h: Highlight }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] bg-[#000d44]" />
      <div className="relative rounded-[20px] border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,.04)]">
        <HighlightImage h={h} />
        <h3 className="mt-5 text-[20px] leading-[1.35] font-extrabold text-[#000d44]">{h.title}</h3>
        <p className="mt-2 text-[14.5px] leading-7 text-black/60">{h.text}</p>
      </div>
    </div>
  );
}

export default function NewsArticles() {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  const goNext = () => setActive((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white py-20 font-sans">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[14px] font-bold tracking-[1px] text-[#1f5fff]">ABOUT THE ADHD CARE PROGRAMME</p>
          <h2 className="mt-3 text-[26px] leading-tight font-extrabold text-[#000d44] sm:text-[30px]">What You Can Expect from B Homeo ADHD Care</h2>
        </div>

        {/* Tablet / desktop grid */}
        <div className="mt-14 hidden gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <HighlightCard key={h.title} h={h} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-14 sm:hidden">
          <div className="relative flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f5fff] text-white shadow-md active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="min-w-0 flex-1">
              <HighlightCard h={highlights[active]} />
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f5fff] text-white shadow-md active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {highlights.map((h, i) => (
              <button
                key={h.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#1f5fff]" : "w-2 bg-[#1f5fff]/30"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#contact" className="group relative inline-flex rounded-[10px] bg-[#1f5fff] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-black/10 transition-opacity hover:opacity-90">
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true"><rect x="7" y="7" rx="7" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 7" className="button-running-dash" style={{width:"calc(100% - 14px)",height:"calc(100% - 14px)"}}/></svg>
            <span className="relative z-10">Book a Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
