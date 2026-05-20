"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { CONSENT_KEY, readConsent, writeConsent } from "../../../lib/consent";

function subscribe(callback) {
  window.addEventListener("ss:consent", callback);
  const onStorage = (e) => {
    if (e.key === CONSENT_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("ss:consent", callback);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * DPDP-aligned consent banner. Only renders when the visitor has not yet
 * made a choice. Storing consent triggers <Analytics /> to load the
 * configured tags. Rejecting keeps all third-party scripts off entirely.
 */
export default function ConsentBanner() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] bg-white border border-[var(--color-card-border)] rounded-2xl shadow-2xl p-5"
    >
      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
        We use cookies to understand how visitors use SURGISAATHI and to
        improve our service. Nothing is shared with advertisers. You can
        change your mind any time.{" "}
        <Link href="/privacy" className="text-[var(--color-primary)] underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => writeConsent("denied")}
          className="btn-secondary flex-1 justify-center !py-2.5 !px-4 !text-sm"
        >
          Decline
        </button>
        <button
          onClick={() => writeConsent("granted")}
          className="btn-primary flex-1 justify-center !py-2.5 !px-4 !text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
