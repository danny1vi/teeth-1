# Antigravity — Frontend Website Rules & Design Skill

## 1. Always Do First (Agent Mindset)
- **Invoke the `frontend-design` context:** You already have the advanced frontend-design skill embedded. You must completely avoid generic, "on distribution" outputs that create the "AI slop" aesthetic. 
- Make creative, distinctive frontends that surprise and delight. Implement real working code with exceptional attention to aesthetic details and creative choices.

## 2. Frontend Aesthetics & Anti-Generic Guardrails
Focus strictly on the following dimensions to ensure high craft:
- **Typography:** Choose fonts that are beautiful, unique, and interesting. NEVER use generic fonts like Arial, Roboto, or standard Inter. Opt for distinctive, characterful choices. Pair a distinctive display/serif font with a refined sans-serif body font. Apply tight tracking (`-0.03em`) on large headings, and generous line-height (`1.7`) on body text.
- **Color & Theme:** Commit to a cohesive aesthetic. NEVER use default Tailwind palettes (e.g., indigo-500, blue-600). Pick a custom brand color and derive a palette from it. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Shadows & Depth:** Surfaces should have a layering system (base → elevated → floating). Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity to create realistic depth.
- **Backgrounds & Visual Details:** Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects like multiple layered radial gradients, gradient meshes, SVG noise textures/grain overlays, geometric patterns, layered transparencies, and dramatic shadows.
- **Motion & Interactive States:** Only animate `transform` and `opacity`. NEVER use `transition-all`. Use spring-style easing. Prioritize CSS-only solutions. One well-orchestrated page load with staggered reveals (`animation-delay`) creates more delight than scattered micro-interactions. Every clickable element MUST have `hover`, `focus-visible`, and `active` states.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply` where appropriate to blend images into the theme.
- **Spatial Composition:** Employ unexpected layouts. Use asymmetry, overlap, diagonal flow, and grid-breaking elements. Maintain generous negative space or deliberate, controlled density using intentional, consistent spacing tokens (not random Tailwind steps).

## 3. Visual Validation Loop (Built-in Browser Workflow)
- **Reference Images:** If provided, match layout, spacing, typography, and color exactly. Swap in placeholder content. Do not "improve" or add to the design. If no reference is provided, design from scratch using the aesthetic rules above.
- **Self-Correction:** Use your built-in Browser Agent to navigate to `http://localhost:3000`. Generate a Screenshot Artifact of the rendered page.
- **Analyze & Iterate:** Visually inspect your own screenshot. Compare specific details (e.g., "heading is 32px but should be 24px", "card gap is 16px but should be 24px"). Check padding, font weights, hex colors, border-radius, and alignment.
- **Stop Condition:** Do at least 2 comparison rounds. Stop only when no visible differences remain or the user explicitly says so.

## 4. Local Server & Output Defaults
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server in the Antigravity terminal: `node serve.mjs` (serves the project root at `http://localhost:3000`). If already running, do not start a second instance.
- **Output:** Single `index.html` file, all styles inline (unless specified otherwise).
- **Framework:** Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- **Placeholders:** Use `https://placehold.co/WIDTHxHEIGHT` for missing images.
- **Responsiveness:** Always design mobile-first.

## 5. Brand Assets
- Always check the `brand_assets/` folder before designing. 
- If logos, color guides, style guides, or specific images exist there, use them exclusively. 
- Do not use placeholders where real assets are available. Do not invent brand colors if a palette is provided.

## 6. Hard Rules
- DO NOT add sections, features, or content not present in the reference.
- DO NOT "improve" a reference design — match it exactly.
- DO NOT stop after one screenshot pass; autonomous self-correction is mandatory.
- DO NOT use `transition-all`.
- DO NOT use default Tailwind blue/indigo as a primary color.