"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const utmSource = searchParams.get("utm_source") || searchParams.get("ref") || document.referrer || "direct";
    const device = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";

    supabase.from("analytics").insert([{
      page_visited: pathname,
      traffic_source: utmSource,
      device_type: device,
    }]);
  }, [pathname, searchParams]);

  return null;
}
