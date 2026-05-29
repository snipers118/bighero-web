// lib/fpixel.ts
// Facebook Pixel helper — ใช้ร่วมกับ Next.js App Router

export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FB_PIXEL_ID || "2040468492860402";

// ประกาศ type ให้ TypeScript รู้จัก fbq
declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

/** โหลด Pixel script — เรียกครั้งเดียวใน layout */
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/** ยิง Lead event — เรียกตอนกดส่งฟอร์มหรือกดปุ่ม LINE */
export const trackLead = (params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: params?.content_name ?? "promo_lead",
      value: params?.value ?? 0,
      currency: params?.currency ?? "THB",
    });
  }
};

/** ยิง custom event อื่นๆ ถ้าต้องการในอนาคต */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};
