"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Google Analytics 4. The initial page_view is sent by the config below;
 * client-side route changes fire an additional page_view via the effect.
 */
export function Analytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (!gaId) return;
    if (first.current) {
      first.current = false;
      return;
    }
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname, gaId]);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
