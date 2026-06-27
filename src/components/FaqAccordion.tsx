"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list" data-reveal-group>
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div className="faq-item" data-reveal-child key={item.question}>
            <button
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <Plus
                aria-hidden
                className={isOpen ? "rotate-45" : ""}
                size={24}
                strokeWidth={1.25}
              />
            </button>
            <div
              className="faq-answer"
              id={`faq-${index}`}
              hidden={!isOpen}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
