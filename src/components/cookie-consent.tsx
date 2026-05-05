"use client";

import { useEffect, useState } from "react";

const cookieConsentKey = "medephCookieConsent";

function safeGetItem(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(safeGetItem(cookieConsentKey) !== "accepted");
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function acceptCookies() {
    safeSetItem(cookieConsentKey, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cookie-consent" aria-label="Cookies">
      <div>
        <strong>Cookies</strong>
        <p>
          Táto stránka používa iba nevyhnutné technické uloženie na zapamätanie tejto voľby. Nepoužívame analytické ani
          marketingové cookies.
        </p>
      </div>
      <button type="button" className="button button-primary" onClick={acceptCookies}>
        Rozumiem
      </button>
    </aside>
  );
}
