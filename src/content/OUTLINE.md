# Module 2: Simple Applications — Weekly Outlines

## Overview

Module 2 bridges the fundamentals students learned in Module 1 with the self-directed capstone in Module 3. Each week, the instructor guides students through building a complete project in class. For homework, students build a second version of the same project type using a different topic and dataset of their own choosing.

**Lineup:**

- Week 7: Database Explorer (HPD Housing Violations in the Bronx)
- Week 8: Multimedia Story (Gordon Parks's Harlem, 1943)
- Week 9: Interactive Map (NYPD Shooting Incidents)
- Week 10: Portfolio Site (self-directed)

---

## Week 7: Database Explorer

**Title:** "Explore the Data"
**Summary:** How to build a searchable, filterable database with detail pages
**Dataset:** HPD Housing Maintenance Code Violations in the Bronx (NYC Open Data), pre-aggregated at the building level

### Data preparation (instructor, before class)

The raw HPD violations dataset contains millions of rows — too large for a static site. Before class, the instructor runs a Python script that:

1. Queries the Socrata API for all open Class C (immediately hazardous) violations where `BoroID=2` (Bronx)
2. Groups them by building, using `BuildingID` as the key
3. For each building, calculates: total open Class C violation count, most recent inspection date, list of the violation descriptions (from the `NOVDescription` field), address, and zip code
4. Joins with NYC's PLUTO dataset using the BBL (Borough-Block-Lot) to attach latitude and longitude for each building
5. Outputs a clean `bronx-buildings.json` (estimated 5,000–10,000 buildings, ~2–4 MB)

Students receive this file ready to use, just like any other data file. They don't need to understand the data pipeline — that's a skill for another day.

### What we build in class

A searchable directory of Bronx buildings with open, immediately hazardous housing violations. The main page displays a filterable, sortable list of buildings ranked by violation count. Clicking any building routes to a detail page showing its full violation record and a small locator map.

### Concepts introduced

- Loading a JSON dataset into a SvelteKit page
- Filtering data with `$state` and `$derived` (refresher from Module 1, applied to real data)
- Text search with `bind:value` on an input (refresher)
- Dropdown filter for zip code
- Sorting by violation count
- SvelteKit dynamic routes (`[slug]/+page.svelte`) for detail pages
- Loading individual records on detail pages using route parameters
- Embedding a small static locator map on the detail page using the building's lat/lng (a simple `<img>` tag pointing to a static map tile service, or a minimal MapLibre embed — foreshadows Week 9)
- Component extraction: `BuildingCard.svelte` for the list view
- Editorial framing: discussing what this data means, why Class C violations matter, and what tenants can do

### Class session structure

1. **Introduction** — Discuss housing conditions in the Bronx and why this data matters. Show the HPD violations dataset on the Open Data portal. Show real-world examples of database explorers from newsrooms (ProPublica's Nonprofit Explorer, The Marshall Project's databases, WNYC's building tools). Explain the violation classes: A (non-hazardous), B (hazardous), C (immediately hazardous). We're building a tool focused on the most dangerous conditions.

2. **Set up the project** — Create a new repo from the class template. Drop in the pre-aggregated `bronx-buildings.json` file. Import it and console.log to verify it loaded. Explore the shape of the data together — what fields do we have? How many buildings?

3. **Build the list view** — Loop through the data with `{#each}` and render a simple card for each building showing address, zip code, and violation count. Sort by violation count descending so the worst buildings appear first. Extract a `BuildingCard.svelte` component.

4. **Add search and filters** — Add a text input bound to a `$state` variable for address search. Add a zip code dropdown. Create a `$derived` filtered list that applies both. Show how multiple filters compose — the same pattern from Week 4, now applied to a real dataset.

5. **Build the detail page** — Create a `[slug]/+page.svelte` route. Load the full dataset and find the matching building by its ID. Display the building's full record: address, zip code, total Class C violations, and a list of each violation with its description and inspection date. Add a small locator map using the building's latitude and longitude.

6. **Add the locator map** — On the detail page, embed a small static map showing the building's location. This can be a simple MapLibre GL JS embed in a `LocatorMap.svelte` component that accepts `lat` and `lng` props and renders a map centered on those coordinates with a single marker. Keep it minimal — just enough to orient the reader.

7. **Editorial polish** — Add a headline, introductory text framing the data, a source credit to HPD, and a note explaining what Class C violations are and linking to HPD's website for more information.

### Homework

Find a dataset on the NYC Open Data portal (or another public data source) with enough detail per record to support a searchable list page and detail pages for individual records or groups of records. Build a database explorer for it.

Your project must have:

- A searchable or filterable list page
- Detail pages for individual records (or groups of records)
- At least two filter or search controls

Deploy it to GitHub Pages and send me the link. Include a README explaining one specific piece of your code.

**Grading:** Module 2 rubric (10 points: 7 working + 2 understanding + 1 beyond)

---

## Week 8: Multimedia Story

**Title:** "Tell It with Pictures"
**Summary:** How to lay out a photo-driven story using public domain images
**Source material:** Gordon Parks's Harlem photographs (1943), via the Library of Congress FSA/OWI collection (public domain, no known restrictions)

### About the source material

Gordon Parks (1912–2006) was the first Black photographer hired by the Farm Security Administration. In the spring and summer of 1943, he photographed daily life in Harlem for the Office of War Information — portraits of residents, newsboys, street scenes, children, families, and the neighborhood's social fabric. Because the work was produced for the federal government, it is entirely in the public domain.

The Library of Congress holds the original negatives and high-resolution digital scans, all freely downloadable. The images are captioned with titles, dates, and locations from the original caption cards.

This collection connects naturally to Week 7's focus on the Bronx. Parks was documenting housing conditions, inequality, and the human face of a New York neighborhood — the same themes students explored through violation data the week before, now told through portraiture instead of records.

### What we build in class

A photo essay about Gordon Parks's 1943 documentation of Harlem, built from his FSA/OWI photographs. The page features a curated selection of 15–20 images in a custom gallery layout with captions, contextual text about Parks and the neighborhood, and responsive design.

### Concepts introduced

- Working with pre-curated static assets (images in the `static/` folder)
- Building a photo gallery layout with CSS Grid
- Creating a `PhotoCard.svelte` component with image, caption, and credit
- Responsive image handling (different layouts at different screen widths)
- A lightbox component: click to expand a photo to full screen (uses `$state` for open/close)
- Editorial structure: headline, introduction, sections, image sequences, source credits
- Proper attribution for public domain materials

### Class session structure

1. **Introduction** — Tell the story of Gordon Parks: a self-taught photographer who called his camera "a weapon against poverty and racism." Show his Harlem photographs on the Library of Congress website. Discuss photo essay design: pacing, sequencing, the relationship between image and text. Show examples from newsrooms (NYT, Washington Post, National Geographic). Discuss what it means to present historical images of a community with care and context.

2. **Set up the project** — Create a new repo. The instructor provides a folder of pre-downloaded Parks photographs (high-res JPEGs from the Library of Congress) and a JSON metadata file with titles, dates, and original caption card text for each image.

3. **Build the editorial structure** — Write the headline, introduction, and section breaks. Establish the narrative arc: Who was Gordon Parks? What was he documenting in Harlem? What was life like in this neighborhood in 1943? What do these images tell us that data alone cannot?

4. **Create the PhotoCard component** — Build a reusable component that displays an image with its caption, date, and Library of Congress credit line. Handle loading states and aspect ratios.

5. **Build the gallery layout** — Arrange photos using CSS Grid. Show different layout patterns: full-width hero images, two-up comparisons, grid of thumbnails. Demonstrate how media queries adapt the layout for mobile. Discuss how the size and placement of a photo on the page affects its emotional weight.

6. **Add the lightbox** — Build a component that overlays a full-screen version of the photo when clicked. Use `$state` to track which photo is selected and `{#if}` to show/hide the overlay. Add keyboard navigation (Escape to close).

7. **Polish and attribution** — Add Library of Congress credit lines, source links, and a note about the FSA/OWI collection and its public domain status. Add a brief biography of Parks at the bottom of the page.

### Homework

Build a photo-driven story page using public domain images from a digital archive of your choice (Library of Congress, NYPL Digital Collections, Smithsonian Open Access, Wikimedia Commons, etc.). It must have:

- A clear editorial focus with headline and contextual text
- At least 8 images in a designed layout
- A reusable photo component
- Proper attribution for all images

Deploy it to GitHub Pages and send me the link. Include a README explaining one specific piece of your code.

**Grading:** Module 2 rubric (10 points: 7 working + 2 understanding + 1 beyond)

---

## Week 9: Interactive Map

**Title:** "Put It on the Map"
**Summary:** How to build an interactive map with MapLibre and public safety data
**Dataset:** NYPD Shooting Incident Data (Historic) — NYC Open Data (includes latitude/longitude)

### What we build in class

An interactive map of shooting incidents in New York City. Users can explore the data geographically, filter by borough or year, and click individual points for details. The class will also discuss responsible reporting with sensitive public safety data.

### Concepts introduced

- Introduction to MapLibre GL JS as a mapping library
- Loading and displaying GeoJSON point data on a map
- Map markers and popups for individual data points
- Connecting map interactions to Svelte's reactive system
- Filtering map data with `$state` and `$derived` (applying familiar patterns to a new context)
- Responsible data journalism: what to show, what to aggregate, how to avoid harm
- Wrapping a JavaScript library in a Svelte component

### Class session structure

1. **Introduction** — Discuss the role of maps in data journalism. Show examples: gun violence maps, environmental justice maps, election maps. Have an editorial conversation about the NYPD shooting data: What stories does this data tell? What are the risks of mapping individual incidents? When should you aggregate instead of showing points? How do you provide context so the map doesn't mislead?

2. **Set up the project** — Create a new repo. Download and prepare the shooting incident data from NYC Open Data as GeoJSON (the instructor provides a pre-processed version). Install MapLibre GL JS.

3. **Build a basic map** — Create a `Map.svelte` component that initializes a MapLibre map centered on New York City. Add a base map tile layer. Get comfortable with the map's viewport, zoom levels, and controls.

4. **Add the data layer** — Load the GeoJSON data as a MapLibre source. Add a circle layer that plots each incident as a point on the map. Style the points with color and size.

5. **Add interactivity** — Implement click-to-inspect: when a user clicks a point, show a popup with the date, borough, and other relevant details. Use MapLibre's event system and connect it to Svelte's reactivity.

6. **Add filters** — Add a year selector and a borough dropdown. When the user changes a filter, update the map's data layer to show only matching incidents. This connects the familiar `$state`/`$derived` pattern to MapLibre's `setFilter` method.

7. **Add context** — Build an `ArticleHeader` above the map with headline, byline, and an introductory paragraph that frames the data. Add a source line and methodology note below the map.

### Homework

Build an interactive map using a different NYC Open Data dataset that includes latitude and longitude. It must have:

- A MapLibre map with data points plotted from a real dataset
- At least one filter or interactive control
- Click-to-inspect detail for individual points
- An editorial frame: headline, intro text, and source credit

Deploy it to GitHub Pages and send me the link. Include a README explaining one specific piece of your code.

**Grading:** Module 2 rubric (10 points: 7 working + 2 understanding + 1 beyond)

---

## Week 10: Portfolio Site

**Title:** "Make It Yours"
**Summary:** How to build a personal portfolio site that showcases your work
**Source material:** The student's own work from the semester

### What we build in class

A personal portfolio site. Unlike previous weeks, this session is more workshop than walkthrough. The instructor demonstrates a basic portfolio structure, then students spend the majority of class time building their own.

### Concepts introduced

- Multi-page SvelteKit routing (a page for each project, an about page)
- Navigation components with active-page highlighting
- Responsive layout patterns for showcasing projects
- Deploying to a custom or personalized GitHub Pages URL
- Embedding or linking to previous projects
- Self-directed work with AI coding assistants

### Class session structure

1. **Introduction** — Show examples of portfolio sites from journalists and developers in the field. Discuss what makes a portfolio effective: clarity, personality, easy navigation, showing your best work first. Keep it short — this is their day to build.

2. **Demonstrate the scaffolding** — Walk through creating a multi-page SvelteKit site: a homepage, a project listing page, individual project pages, and an about page. Show how to build a `Nav.svelte` component that links between pages and highlights the current one. Show how to set up route folders for each page.

3. **Workshop time** — Students build their own portfolio sites. The instructor and coach circulate to help. Students should aim to include at least three projects (their best work from the semester). Encourage them to incorporate techniques from previous weeks.

4. **Check-ins and feedback** — Pause midway for quick voluntary screen-shares where students can show progress and get feedback from the class.

5. **Wrap up** — Deploy to GitHub Pages. Share URLs with the class.

### Homework

Complete and polish your portfolio site. It must have:

- At least three pieces of work or projects
- Clear navigation between sections
- A working deployment to GitHub Pages

Deploy it and send me the link. Include a README explaining one specific piece of your code.

**Grading:** Portfolio rubric (10 points: 7 working + 2 understanding + 1 beyond, where "beyond" means incorporating a technique from a previous Module 2 week)
