# Module 1: Fundamental Tools (Weeks 1–7)

---

## Week 1: Where We Code

### Introduction to VS Code

- Install VS Code
- Create a file
- Create a code folder
- Open a folder as a project
- Create a README.md file
- Learn a little Markdown

### Introduction to GitHub

- Log in to GitHub
- Create a blank code repository
- Link it to your VS Code project
- Commit the README file
- Push it to GitHub
- Return to GitHub and see the file
- Edit the file again in VS Code
- Commit and push again
- See the change again on GitHub
- Review the diff

### Introduction to GitHub Copilot

- Make sure you have GitHub for Students configured
- Install the GitHub Copilot extension for VS Code
- Open the right-hand chat bar in VS Code
- Experiment with chatting
- Show an example of plan mode usage
- Show an example of how you pivot to edit mode
- Have Copilot write the commit message
- Push it to GitHub

### How to Clone an Existing Repository

- Go to a news organization's page
- Pick a repository with a good README
- Show how to find the clone button
- Use VS Code to clone the repository to your computer
- Ask GitHub Copilot to explain to you what's in it
- Ask GitHub Copilot to help you install it
- Follow those steps

### Homework Assignments

**Repository practice:**

- Create five distinct repositories with simple README.md files
- Find two repositories published by news organizations and one by a non-news group
- Use VS Code and Copilot to attempt to install them
- Write a one-page report that summarizes how it went (a couple paragraphs per repo)
- Pick the one that is most interesting—you'll present on it briefly at the next class

---

## Week 2: Building a Static Site

### Students Share Their Repository Research

- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #1

First "What are you hacking on?" guest

### Introduction to Frameworks

- Explain what frameworks are
- Show four or five examples from different news organizations
- Show the simplified version we're going to use in class
- Explain what GitHub templates are
- Walk through making a new repo based on our class template

### Introduction to Node.js

- Explain what Node.js is
- Show the website
- Show how to check if it's installed in your VS Code terminal
- Install Homebrew
- Install nvm with Homebrew
- Install Node LTS with nvm
- Check that it's installed

### The Basics of a Static-Site Framework

- Show how to start the test server
- Show how to make an edit and see it in your browser
- Show how to build the project as static files

### Introduction to GitHub Actions and Pages

- Explain briefly what they are
- Show how our repo already includes an Action file that runs the same commands we've been running locally
- Turn on Pages in the repo settings
- Uncomment the build action
- Push and watch it build
- Check the page on the web

### Homework Assignments

- Create three different repositories based on our class template
- Build each of them to different web URLs
- Pick one of the other templates I showed you from another news organization
- Try to create a new project based on it
- Talk to Copilot about how it works; try to get it to build to Pages

---

## Week 3: Svelte Components

### Introduce Svelte and Components

- Tell the creation myth of Svelte in newsrooms
- Explain what components are and why people use them (modularity, discipline, reuse, interactivity)
- Show examples of simple components from the Reuters graphics kit
- Look at the headline and image components already in our template

### Build a Blockquote Component

- Create a new component file from scratch
- Accept quote text and attribution as props
- Add scoped CSS styling
- Use it on the page

### Build a Big Number Component

- Create a component with number, label, and optional context
- Show how to handle optional props
- Style it as a standalone stat box

### Build a Row Component

- Introduce slots — how components can wrap other components
- Create a Row component that uses flexbox internally
- Place multiple big number components inside it
- Discuss how this pattern appears in real news graphics

### Homework Assignments

- Invent and build three original components that could be useful in a news story
- Write a brief explanation of what each component does and why you made the choices you did
- Use your new components on a page alongside the ones we built in class
- Deploy the page to GitHub Pages and submit the link
- Present one of your components in the next class

Some ideas to consider:

- A "before and after" image slider that compares two photos
- A timeline entry with a date, headline, and description
- An author bio box with photo, name, and social links
- A "read more" card that links out to another story
- A warning or correction box for editor's notes

---

## Week 4: Getting Interactive with Reactive Code

### Introducing Reactive Components

- Explanation of what "reactive" means in the context of web development
- Show examples of interactive features on news sites (toggles, counters, calculators)
- It's all made possible by HTML inputs picked up by JavaScript event handlers
- Explain how Svelte's reactivity model modernized this model and allows us to build these features with simple state variables and derived values

---

## Part 1: Show/Hide Toggle (~40 mins)

### Introduction to Reactivity

- The problem: Static components are nice, but real sites need to respond to users
- Show examples: "Read more" expanders, methodology toggles, correction boxes on news sites
- The Svelte solution: Reactive state with `$state()`

### Build the Toggle Component

1. Create `ReadMore.svelte` component
2. Add `let isExpanded = $state(false)`
3. Create button with `onclick={() => isExpanded = !isExpanded}`
4. Add `{#if isExpanded}` block for hidden content
5. Style it to look like a news site feature

### Use it in the Page

- Import and place in `+page.svelte`
- Try multiple instances (each maintains own state)
- Customize text for different use cases (methodology, sources, correction)

**Key concepts introduced:**

- `$state()` with boolean
- Event handlers (`onclick`)
- Conditional rendering (`{#if}`)
- State toggling pattern

---

## Part 2: Counter (~40 mins)

### Introduction to Numeric State

- Show examples: Promise trackers, days-since counters, vote tallies
- Same reactive pattern, but with numbers instead of booleans

### Build the Counter Component

1. Create `PromiseTracker.svelte` component
2. Add `let kept = $state(0)` and `let broken = $state(0)`
3. Create buttons that increment each counter
4. Introduce `$derived()`: `let total = $derived(kept + broken)`
5. Display all three values
6. Style it like a news dashboard using a BigNumber like the one we built last week

### Use it in the Page

- Import and place in `+page.svelte`
- Show how `$derived()` automatically updates when state changes
- Discuss: Why use `$derived()` instead of just `kept + broken` in the template?

**Key concepts introduced:**

- `$state()` with numbers
- Incrementing state
- `$derived()` for computed values
- Multiple state variables in one component

---

## Part 3: Tip Calculator (~60 mins)

### Introduction to Form Inputs

- Show examples: Calculators, budget tools, "how much would you save?" widgets
- The new concept: `bind:value` for two-way data binding
- Explain: Button clicks vs. form inputs (one-way vs. two-way)

### Build the Calculator Component (Step by Step)

**Version 1: Basic bill input**

1. Create `TipCalculator.svelte`
2. Add `let billAmount = $state(0)`
3. Create `<input type="number" bind:value={billAmount}>`
4. Add `let tip = $derived(billAmount * 0.20)`
5. Display: "20% tip: ${tip.toFixed(2)}"

**Version 2: Add custom tip percentage**

1. Add `let tipPercent = $state(18)`
2. Update derived: `let tip = $derived(billAmount * (tipPercent / 100))`
3. Add range slider: `<input type="range" bind:value={tipPercent} min="10" max="30">`
4. Display tip percentage label

**Version 3: Add total calculation**

1. Add `let total = $derived(billAmount + tip)`
2. Style the results nicely

**Optional Version 4: Split the bill**

1. Add `let numPeople = $state(1)`
2. Add `let perPerson = $derived(total / numPeople)`
3. Add number input for splitting

### Use it in the Page

- Import and place in `+page.svelte`
- Experiment with the inputs
- Notice how everything updates automatically

**Key concepts introduced:**

- `bind:value` with number inputs
- `bind:value` with range inputs
- Multiple `$state()` variables working together
- Multiple `$derived()` calculations
- Number formatting (`.toFixed()`)
- Two-way data binding concept

---

## Homework Assignments

### Task 1: Build three interactive components from scratch

Pick three from this list (or invent your own):

- A "Time until election" countdown (with date input)
- A "Split the rent" calculator (bill amount ÷ number of roommates)
- A reading time estimator (paste text, see estimated minutes)
- A multiple choice quiz question with instant feedback
- A units converter (miles to kilometers, dollars to euros, etc.)

### Task 2: Prepare to present

Pick your favorite interactive component to show the class. Be ready to explain:

- What state does it track?
- What user actions trigger state changes?
- How does the DOM update in response?
- If you used AI to help, what worked and what didn't?

---

## Week 5: Templating with Data

### Importing Data

- Drop in a data file
- Show how to import it in your child template
- Console log it

### Show How to Template It with Pure HTML and JavaScript

- Loop and print a table
- Use Observable Plot to make a simple chart

### Homework Assignments

- Pick a dataset from the NYC Open Data Portal
- Import it into a new project
- Use Observable Plot to make a chart
- Create a headline, byline, and dateline above it
- Write a lead summarizing your findings

---

## Week 6: Layout and Design

### The Basics of Web Design

- Demonstrate the grid behind every website using the browser inspector and famous pages
- Add a simple grid system to a Svelte project that is reusable
- Show how hierarchy works using h1 tags
- Demonstrate how to create a simple em-based sizing system and apply it to a page using SCSS variables
- Show how padding and margin work
- Demonstrate how to have a reusable set of values for padding and margin
- Demonstrate how pages resize at different device widths
- Show how you can use media queries and flexbox to size down fonts and flip from columns to rows at smaller devices

### Homework Assignments

- Start a blank project with SvelteKit and use a code assistant to create a fake news organization's website with a masthead, headline style, and the rest—have fun with it!

---

# Module 2: Simple Applications

## Week 7: Layout a longform story

We start with a folder of assets, text, images, captions, a video and Datawrapper graphics.
We gradually put a page together from these elements.

## Week 8: Design a stacked standalone data story

We start with a folder of graphics from our teammates and text written by the newsroom. Our job is to put it together into a cohesive story, and then make one graphic ourselves, which can be the homework assignment for the next week.

## Week 9: Make an interactive quiz

We start with a folder of questions, answers, and images. Our job is to put it together into an interactive quiz, where users can select answers and receive feedback.

The assignment is to make a quiz about a topic of your choice.

## Week 10: Make a map with MapLibre

We start with a folder of geographic data and map assets. Our job is to put it together into an interactive map using MapLibre, where users can explore different locations and data points.

The assignment is to create a map about a topic of your choice.

---

# Module 3: Capstone Challenge

## Week 11 onward ...

Students will begin their capstone projects, applying the skills and techniques learned throughout the course to create a comprehensive, interactive, data-driven story. If they don't have an idea of their own, they will choose one of the "challenge" projects provided by the instructor.

They will:

- Brainstorm and propose a capstone project idea
- Begin gathering data and assets for the project
- Create a project plan outlining the layout and goals for completing the capstone project
- Start building the capstone project, implementing the planned layout and interactive elements
- Get feedback from peers and the instructor on the progress of the capstone project
- Make a final presentation of the completed capstone project
