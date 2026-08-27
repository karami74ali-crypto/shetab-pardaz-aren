import type { Context } from "@netlify/edge-functions";

// Redirects the root URL ("/") based on the visitor's country (via Netlify's
// built-in edge geolocation — no external API, no cookies, no JS needed):
//   - Iran (IR)      -> /fa/  (Persian)
//   - everywhere else -> /en/  (English)
//
// Only applies to plain page visits (GET requests) to the bare root. If
// geolocation data isn't available, we pass through to the static
// public/index.html fallback, but tag the response with a debug header so
// we can see what (if anything) Netlify detected from DevTools.
export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (url.pathname !== "/" || request.method !== "GET") {
    return;
  }

  const countryCode = context.geo?.country?.code;

  if (countryCode === "IR") {
    return Response.redirect(`${url.origin}/fa/`, 302);
  }

  if (countryCode) {
    return Response.redirect(`${url.origin}/en/`, 302);
  }

  // No country detected - let the static fallback page handle it, but
  // attach what we know so it's visible in the browser's Network tab.
  const response = await context.next();
  response.headers.set("X-Geo-Debug", JSON.stringify(context.geo || {}));
  return response;
};

export const config = {
  path: "/",
};
