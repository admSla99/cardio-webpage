"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";

type NoticePopupProps = {
  notices: readonly string[];
};

export function NoticePopup({ notices }: NoticePopupProps) {
  const [isOpen, setIsOpen] = useState(notices.length > 0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || notices.length === 0) {
    return null;
  }

  return (
    <div
      className="notice-popup-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <section
        className="notice-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-popup-title"
        aria-describedby="notice-popup-content"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="notice-popup-close"
          aria-label="Zavrieť oznam"
          onClick={() => setIsOpen(false)}
        >
          <Icon name="close" className="icon-md" />
        </button>

        <div className="notice-popup-icon" aria-hidden="true">
          <Icon name="calendar" className="icon-md" />
        </div>
        <p className="notice-popup-eyebrow">Dôležité informácie</p>
        <h2 id="notice-popup-title">Oznam ambulancie</h2>
        <div id="notice-popup-content" className="notice-popup-content">
          {notices.map((notice, index) => (
            <p key={`${notice}-${index}`}>{notice}</p>
          ))}
        </div>
        <button type="button" className="button button-primary notice-popup-confirm" onClick={() => setIsOpen(false)}>
          Rozumiem
        </button>
      </section>
    </div>
  );
}
