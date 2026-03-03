# Specification

## Summary
**Goal:** Build the "GO GO!" comic strip website with a bold pop-art/comic-book aesthetic, a PG-13 age disclaimer, a comic library catalog, and an embedded Google Slides comic reader.

**Planned changes:**
- Create a global comic-book visual theme: bold outlines, halftone textures, bright red/yellow/black pop-art colors, comic-panel grid layout, and punchy typography applied consistently across all pages
- Add a PG-13 splash/disclaimer screen shown on first visit; user must click "Enter" or "I Understand" to proceed; dismissed state is stored in session so it does not re-appear
- Build a homepage displaying the "GO GO!" hero header with logo and hero banner
- Build a comic library/catalog page listing comics as styled cards (title, cover art, "Read" button); initially populated with "Legends of the Hidden Butt"
- Build a comic reader page for each comic that displays the title, embeds the Google Slides presentation via iframe using the embed URL format, and includes a "Back to Library" link
- Store comic strip records (title, slideId, description) in the backend with initial entry: title="Legends of the Hidden Butt", slideId="1lWnWT1t5nKmRcQhQdWLtfLf4ew7CCjRie_eVSU363a4"; expose a query for the frontend to fetch the list dynamically

**User-visible outcome:** Visitors land on a splash disclaimer, acknowledge the PG-13 notice, then browse the "GO GO!" comic library and read "Legends of the Hidden Butt" embedded directly from Google Slides.
