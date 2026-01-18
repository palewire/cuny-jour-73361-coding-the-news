# Module 1: Fundamental Tools (Weeks 1–7)

---

## Week 1 (Jan. 26): Where We Code

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

## Week 2 (Feb. 2): Building a Static Site

### Students Share Their Repository Research
- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #1
First "What are you hacking on?" guest

### Introduction to Node.js
- Explain what Node.js is
- Show the website
- Show how to check if it's installed in your VS Code terminal
- Install Homebrew
- Install nvm with Homebrew
- Install Node LTS with nvm
- Check that it's installed

### Introduction to Frameworks
- Explain what frameworks are
- Show four or five examples from different news organizations
- Show the simplified version we're going to use in class
- Explain what GitHub templates are
- Walk through making a new repo based on our class template

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

## Week 3 (Feb. 9): Templating with Data

### Students Share Their Framework Experiments
- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #2
Second "What are you hacking on?" guest

### SvelteKit Project Structure
- Walk through all the pieces of the SvelteKit system
- Show where the parent template is
- Show where the page you're building is
- Explain how template inheritance works
- Make a change to the parent template
- Make a change to the child template

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

## Week 4 (Feb. 23): Svelte Components

### Students Share Their Data Portal Experiments
- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #3
Third "What are you hacking on?" guest

### Introduce Svelte and Components
- Tell the creation myth of Svelte in newsrooms
- Explain what components are and why people use them (modularity, discipline, reuse, interactivity)
- Show examples of simple components from the Reuters graphics kit
- Make our own headline component from scratch
- Emphasize how it has imports, variable inputs, and its own packaged JS and CSS

### Demonstrate Reusability
- Write a component that creates an image tag
- Demonstrate an example of how we can reuse the same component more than once in our layout with different inputs

### Introduce Data
- Write a component that accepts a data list and prints a generic bar chart on the page with Plot
- Make more than one with different datasets

### Homework Assignments
- Rewrite your previous data portal page to use as many components as possible
- Create a fork of your repository and then create and publish a second demo page with a different dataset and different charts

---

## Week 5 (March 2): Getting Interactive with Reactive Code

### Students Share Their Component Experiments
- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #4
Fourth "What are you hacking on?" guest

### Introducing Reactive Components
- Make the simple counter example from the Svelte documentation
- Replace that with a card component that highlights a random record from the dataset each time you push a button

### Live Filters
- Start with a simple bar or line chart that displays a full dataset
- Add a filter with all of the distinct categories in one of the columns
- Have the chart automatically update each time we change what's in the filter
- Create a table with that same data
- Add a search component that will automatically filter the table

### Homework Assignments
- Revise your data portal page to include more than one interactive element

---

## Week 6 (March 9): Layout and Design

### Students Share Their Component Experiments
- What did you get stuck on?
- How did you solve the problem?
- What new trick did you learn?

### Outside Guest #5
Fifth "What are you hacking on?" guest

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

## Week 7 (March 16): Module 1 Review and Consolidation

TK ...