import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SITE_STYLE, SITE_BODY, SITE_SCRIPT } from "@/lib/tc-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silkroad Innovation Hub Pavilion at TechCrunch Disrupt 2026" },
      {
        name: "description",
        content:
          "An exclusive opportunity for top Central Eurasian startups to gain global visibility at TechCrunch Disrupt 2026. Apply now for a spot in our pavilion!",
      },
      { property: "og:site_name", content: "Silkroad Innovation Hub" },
      { property: "og:title", content: "Silkroad Pavilion at TechCrunch Disrupt 2026" },
      {
        property: "og:description",
        content:
          "An exclusive opportunity for top Central Eurasian startups to gain global visibility at TechCrunch Disrupt 2026. Apply now for a spot in our pavilion!",
      },
      {
        property: "og:image",
        content: "https://utfs.io/f/5lAbzPMR2hDEnJeQGRvtPH8Bl7YM4r5dJWLjwKAFfImpVoak",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://silkroadtcdisrupt.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      { src: "https://cdn.tailwindcss.com" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Configure tailwind theme extension (matches original inline config)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.tailwind) {
      w.tailwind.config = {
        theme: { extend: { colors: { accent: "#09A43E" } } },
      };
    }
    // Execute the site's original DOMContentLoaded script now that markup is mounted
    try {
      const fn = new Function(SITE_SCRIPT);
      fn();
      // Original script uses DOMContentLoaded which has already fired; re-dispatch.
      document.dispatchEvent(new Event("DOMContentLoaded"));
    } catch (e) {
      console.error("Site script error", e);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: SITE_BODY }} />
    </>
  );
}
