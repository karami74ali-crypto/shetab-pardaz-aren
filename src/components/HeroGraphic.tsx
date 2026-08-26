import fs from "node:fs";
import path from "node:path";

let cachedSvg: string | null = null;

function loadHeroSvg(): string {
  if (cachedSvg) return cachedSvg;
  const filePath = path.join(process.cwd(), "public", "images", "hero-graphic.svg");
  cachedSvg = fs.readFileSync(filePath, "utf8");
  return cachedSvg;
}

export default function HeroGraphic() {
  const svgMarkup = loadHeroSvg();
  return (
    <div
      className="hero-graphic-wrap w-full max-w-[620px]"
      // The inline SVG must live in the DOM (not <img>) so the
      // .hero-graphic-wrap:hover child selectors in globals.css can
      // animate the network lines / nodes on hover.
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
