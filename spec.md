# GO GO! Comics

## Current State
The app is a retro-styled comic strip website called "GO GO!" with:
- A backend storing a list of comic strips (currently one: "Legends of the Hidden Butt")
- A catalog page listing all available comics with cover images
- A reader page that embeds Google Slides for each comic
- An age disclaimer splash screen (must confirm you are over 12)

## Requested Changes (Diff)

### Add
- New comic strip entry: "Peehead & Butthead" — described as a brand new release, rated PG-13
- "NEW" badge on the Peehead & Butthead card in the catalog to highlight it as today's release

### Modify
- Backend comic strips list: add the new entry

### Remove
- Nothing removed

## Implementation Plan
1. Generate updated Motoko backend with two comic strips (existing + Peehead & Butthead)
2. Update frontend CatalogPage to show a "NEW TODAY" badge on the Peehead & Butthead card
3. Generate a cover image for Peehead & Butthead
