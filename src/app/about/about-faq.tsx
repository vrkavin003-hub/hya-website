"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: "What does HyaTech Pvt Ltd specialize in?",
    answer: (
      <p>
        HyaTech Pvt Ltd is a precision engineering and manufacturing company
        specializing in CNC machining, VMC machining, custom fixture
        development, jigs, tooling, and line-production consumables. We partner
        with EMS (Electronics Manufacturing Services) companies and industrial
        manufacturers to deliver high-precision components that enhance
        productivity, quality, and manufacturing efficiency. Our focus is on
        helping industries localize critical components that were traditionally
        sourced from overseas suppliers.
      </p>
    ),
  },
  {
    question: "What machining accuracy can HyaTech achieve?",
    answer: (
      <p>
        At HyaTech, we manufacture critical components with tolerances of up to
        ±5 microns (0.005 mm), depending on the material, geometry, and
        application requirements. Our advanced machining processes, stringent
        quality controls, and skilled engineering team ensure consistent
        dimensional accuracy, repeatability, and reliability even for highly
        demanding industrial applications.
      </p>
    ),
  },
  {
    question: "Which industries does HyaTech serve?",
    answer: (
      <>
        <AnswerList
          items={[
            "Electronics Manufacturing Services (EMS)",
            "Consumer Electronics",
            "Automotive & EV Manufacturing",
            "Aerospace Support Industries",
            "Industrial Automation",
            "Medical Device Manufacturing",
            "Semiconductor and Electronics Assembly",
          ]}
        />
        <p>
          Our solutions are designed to support production lines requiring
          precise and durable fixtures, jigs, tooling, and custom-machined
          components.
        </p>
      </>
    ),
  },
  {
    question: "What types of products does HyaTech manufacture?",
    answer: (
      <>
        <AnswerList
          items={[
            "Production Fixtures",
            "Assembly Jigs",
            "Functional Test Fixtures",
            "Precision Consumables",
            "Custom CNC Components",
            "VMC Machined Parts",
            "Tooling Components",
            "Machine Spares",
            "Prototype Components",
            "Automation Parts",
          ]}
        />
        <p>
          Every component is engineered to maximize production efficiency,
          reduce downtime, and improve overall manufacturing quality.
        </p>
      </>
    ),
  },
  {
    question: "How does HyaTech support localization and import substitution?",
    answer: (
      <>
        <p>
          Many manufacturers continue to depend on overseas suppliers for
          critical production-line components.
        </p>
        <p>
          HyaTech works closely with customers to reverse-engineer, redesign,
          and locally manufacture these parts.
        </p>
        <p>Benefits include:</p>
        <AnswerList
          items={[
            "Faster lead times",
            "Lower procurement costs",
            "Improved supply chain stability",
            "Easier engineering support",
            "Better inventory management",
          ]}
        />
        <p>
          This enables businesses to build a stronger manufacturing ecosystem
          within India.
        </p>
      </>
    ),
  },
  {
    question: "What materials can HyaTech machine?",
    answer: (
      <>
        <AnswerList
          items={[
            "Aluminum",
            "Stainless Steel",
            "Mild Steel",
            "Tool Steel",
            "Brass",
            "Copper",
            "Titanium (application-specific)",
            "Engineering Plastics",
            "Delrin",
            "PEEK",
            "Nylon",
            "PTFE",
          ]}
        />
        <p>
          Material selection is optimized based on durability, precision,
          application requirements and production environments.
        </p>
      </>
    ),
  },
  {
    question: "Can HyaTech handle both prototypes and production volumes?",
    answer: (
      <>
        <p>Yes.</p>
        <p>
          We support the complete product lifecycle—from rapid prototyping and
          proof-of-concept development to low-volume and high-volume production
          manufacturing.
        </p>
        <p>
          Whether the requirement is a single prototype fixture or recurring
          production batches, our engineering and manufacturing teams ensure
          consistent quality and timely delivery.
        </p>
      </>
    ),
  },
  {
    question: "What makes HyaTech different from other machining companies?",
    answer: (
      <>
        <p>HyaTech goes beyond machining by combining:</p>
        <AnswerList
          items={[
            "Up to 5-micron precision capability",
            "CNC & VMC expertise",
            "Fixture and jig design",
            "Reverse engineering",
            "Fast turnaround",
            "Localization-focused manufacturing",
            "Strong EMS industry knowledge",
          ]}
        />
        <p>
          This holistic approach improves operational efficiency while reducing
          costs and supply-chain risks.
        </p>
      </>
    ),
  },
];

function AnswerList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-blue">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      aria-labelledby="about-faq-title"
      className="mx-auto max-w-5xl rounded-[16px] border border-border bg-white p-5 shadow-[0_12px_35px_rgba(11,31,58,0.045)] sm:p-6"
    >
      <span className="eyebrow">FAQ</span>
      <h2
        id="about-faq-title"
        className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-navy sm:text-4xl"
      >
        Frequently Asked Questions
      </h2>

      <div className="mt-8 border-y border-border">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `about-faq-answer-${index}`;
          const questionId = `about-faq-question-${index}`;

          return (
            <article
              key={item.question}
              className="border-b border-border last:border-b-0"
            >
              <div className="flex items-start justify-between gap-4 py-4">
                <h3
                  id={questionId}
                  className="min-w-0 text-base font-semibold leading-7 text-navy sm:text-[1.02rem]"
                >
                  {item.question}
                </h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  aria-label={`${isOpen ? "Hide" : "Show"} answer for ${item.question}`}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-blue/35 px-3 py-1.5 text-xs font-semibold text-blue transition-colors duration-200 ease-out hover:bg-blue/10"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>Answer</span>
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <div className="space-y-4 pb-5 pr-1 text-[0.95rem] font-normal leading-7 text-muted">
                    {item.answer}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 rounded-[14px] border border-blue/15 bg-lightblue p-5">
        <h3 className="text-xl font-semibold text-navy">
          Still have questions?
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          HyaTech Pvt Ltd is committed to delivering world-class precision
          manufacturing solutions with up to 5-micron accuracy, helping
          organizations localize critical components, optimize production lines,
          and build resilient supply chains.
        </p>
        <ButtonLink href="/contact" className="mt-5">
          Contact our Industry Experts Today
        </ButtonLink>
      </div>
    </div>
  );
}
