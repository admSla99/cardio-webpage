"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";

type NoticePopupProps = {
  notices: readonly string[];
  /** Redaktor môže oznam ponechať len v sekcii Ordinačné hodiny a okno nezobraziť. */
  enabled?: boolean;
};

export function NoticePopup({ notices, enabled = true }: NoticePopupProps) {
  const [isOpen, setIsOpen] = useState(enabled && notices.length > 0);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (!firstFocusableElement || !lastFocusableElement) {
        event.preventDefault();
        dialogRef.current.focus();
      } else if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastFocusableElement : firstFocusableElement).focus();
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
        ref={dialogRef}
        className="notice-popup"
        role="dialog"
        tabIndex={-1}
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
