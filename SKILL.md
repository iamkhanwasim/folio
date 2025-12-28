# Portfolio Article Creation Guide

## Quick Reference

### Workflow 1: Direct Article Creation (Recommended)

**Trigger Format:**
```
Create article:
- Folder: articles/{{category}}
- Topic: {{Article Topic Name}}
- Date: {{Month Year}}
- Notes: Notes/{{notes-image-filename}}
```

**Example:**
```
Create article:
- Folder: articles/statistics
- Topic: Descriptive and Inferential Statistics
- Date: Sep 2020
- Notes: Notes/desc_vs_infer_stat_notes.jpeg
```

**What Claude Code Does:**
1. Read the prompt template from `templates/ARTICLE_PROMPT.md`
2. Read the notes image from `Notes/` folder (if applicable)
3. Generate article content following the template guidelines
4. Create diagram XML if needed → save to `diagrams/{{category}}/`
5. Create final HTML → save to `articles/{{category}}/`
6. **ALWAYS update category index page** (e.g., `data-structures-algorithms.html`)
7. **Consider adding interlinks** to related articles in the same category
8. Update `blog.html` if needed

---

### Workflow 2: From content.md to HTML

When creating a new article based on `articlecontent/content.md`:

1. **Read the content.md file** to get the article content
2. **Create the HTML file** in the appropriate category folder:
   - Machine Learning: `articles/machine-learning/`
   - Statistics: `articles/statistics/`
   - Technical Articles: `articles/technical-articles/`
   - Python: `articles/python/`
   - Data Structures & Algorithms: `articles/data-structures-algorithms/`
   - Linear Algebra: `articles/linear-algebra/`

**Example Command:**
```
Create {{filename}}.html in articles/{{category}} based on content in art.iclecontent/content.md
```

---

## HTML Structure Requirements

### Required Elements:
- Full navigation header (navbar with logo, nav-menu, theme toggle, hamburger)
- Link to `../../styles.css` (two levels up from articles subfolder)
- Article-specific styles inline in `<style>` tag
- Article title with class `article-title`
- Date with class `article-date`
- Content wrapped in `<article class="blog-article">` and `<div class="article-content">`
- "Back to [Category]" button at bottom
- Footer with copyright
- Link to `../../script.js`

### Standard CSS Components:
| Class | Purpose | Style |
|-------|---------|-------|
| `.highlight-box` | Important introductions | Left border accent, card background |
| `.concept-box` | Key concepts | Primary color background |
| `.example-box` | Practical examples | Yellow/orange theme |
| `.diagram` | Images/diagrams | Centered, **transparent background** |
| `.code-block` | Code snippets | Dark background (#1e1e1e) |
| `.formula` | Mathematical formulas | Centered, bordered, card background |

### Link Styling (Already in styles.css):
✅ Links within `.article-content` are automatically styled with:
- Primary color (adapts to light/dark mode)
- Visible underline (2px thickness)
- Hover effects
- Good contrast in both themes

**No additional styling needed for interlinks** - they work out of the box!

### Image Modal/Lightbox (Already Implemented):
✅ Automatically works for all images in articles
- No additional HTML needed - just add `<img>` tags normally
- Implemented in `script.js` and `styles.css`
- Features:
  - Click image to open in fullscreen modal
  - Close with × button, Escape key, or click outside
  - Shows alt text as caption
  - Smooth fade/zoom animations
  - Prevents body scroll when open
  - Dark overlay (95% black)

### Image Paths:
- Images stored in: `images/`
- Reference from HTML: `../../images/{{image-name}}.png` or `.jpg`
- Diagrams XML stored in: `diagrams/{{category}}/`

### Adding Images to Articles:
**Format:**
```html
<div class="diagram">
    <img src="../../images/{{image-name}}.jpg" alt="{{Descriptive Alt Text}}">
</div>
```

**Styling Notes:**
- `.diagram` has **transparent background** - images blend seamlessly with page
- Includes padding and centered alignment
- Images are responsive (max-width: 100%)

**Image Modal Feature:**
✅ All images in articles automatically support click-to-zoom in a modal/lightbox
- Click any image to view it larger
- Close with × button, clicking outside, or pressing Escape
- Displays image alt text as caption
- Smooth animations and dark overlay
- Works in both light and dark modes

**Best Placement:**
- After introductory paragraphs
- After key concept explanations
- Between major sections to break up text
- After highlight boxes with lists

**Quick Command:**
```
Add image to {{article-name}}.html from images/{{image-filename}}.jpg
```

---

## File Naming Conventions

### HTML Files:
- Use lowercase with hyphens
- Example: `descriptive-inferential-statistics.html`

### Diagram Files:
- Format: `{{topic-slug}}-diagram-{{number}}.xml`
- Example: `descriptive-inferential-statistics-diagram-1.xml`
- Multiple diagrams: increment number (diagram-1, diagram-2, etc.)

### Image Files (after converting from XML):
- Format: `{{topic-slug}}-diagram-{{number}}.png`
- Store in: `images/`

---

## Category Index Updates

⚠️ **CRITICAL: ALWAYS update the category index page when creating an article!**

When adding a new article, **you MUST update the category index page**:

**List Style:**
```html
<ul class="blog-list">
    <li class="blog-item">
        <a href="articles/{{category}}/{{filename}}.html" class="blog-link">
            {{Article Title}}
        </a>
    </li>
</ul>
```

**Category Index Files:**
- Data Structures & Algorithms: `data-structures-algorithms.html`
- Statistics: `statistics.html`
- Machine Learning: `machine-learning.html`
- Python: `python.html`
- Technical Articles: `technical-articles.html`
- Linear Algebra: `linear-algebra.html`

**Also update `blog.html`:**
- Add article to appropriate category section
- Show first 3 articles per category
- Include "Show All →" link to category page

---

## Folder Structure

```
Portfolio/
├── templates/
│   ├── ARTICLE_PROMPT.md      # Prompt template for article generation
│   └── ARTICLE_TEMPLATE.html  # HTML structure reference
│
├── Notes/                      # Handwritten notes images
│   └── {{notes-filename}}.jpeg
│
├── diagrams/                   # Draw.io XML files
│   ├── machine-learning/
│   ├── statistics/
│   ├── technical-articles/
│   ├── python/
│   ├── data-structures-algorithms/
│   └── linear-algebra/
│
├── images/                     # Converted PNG images
│   └── {{image-name}}.png
│
├── articles/
│   ├── machine-learning/
│   ├── statistics/
│   ├── technical-articles/
│   ├── python/
│   ├── data-structures-algorithms/
│   └── linear-algebra/
│
├── articlecontent/
│   └── content.md              # Alternative: pre-written content
│
├── SKILL.md                    # This file
├── blog.html                   # Main blog hub
├── {{category}}.html           # Category index pages
├── styles.css                  # Global styles
└── script.js                   # Main JavaScript
```

---

## Article Content Guidelines

When generating article content, follow these rules:

### Requirements:
- Length: 300+ words (extend for complex topics)
- No "I" statements or first-person perspective
- No fancy or flowery language
- Practical and to the point
- Write as if written by a human, not an LLM

### Structure:
- Start with blog title and date
- No long dashes or emoticons
- Use bullet points for core concepts
- Begin with context (why this matters)
- Include code examples if applicable
- Explain complex concepts with examples and analogies
- Mention common use cases
- Note limitations
- End with concise conclusion

### Style:
- Direct statements over explanations
- Show, don't tell (use examples)
- Avoid marketing language
- No unnecessary adjectives
- Short, clear sentences
- Natural flow

### Diagrams (if needed):
- Create as draw.io XML format
- Save in `diagrams/{{category}}/`
- Add placeholder in HTML where image should appear
- User will manually convert XML to PNG and add to `images/`

---

## Adding Internal Links (Interlinks)

**Why Interlinks Matter:**
- Helps readers discover related content
- Improves SEO and user engagement
- Creates a connected knowledge base

**When to Add Interlinks:**
- After creating a new article
- When an article mentions concepts covered in other articles
- When reviewing/updating existing content

**Where to Add Interlinks:**
Add links within article content when mentioning:
- Related data structures (e.g., "Arrays" article mentions "Hash Tables")
- Prerequisites (e.g., "Advanced topic" links to "Basics")
- Follow-up topics (e.g., "Intro" suggests "Deep Dive")

**Example:**
```html
<p>Understanding <a href="what-are-data-structures.html">data structures</a> is essential
before analyzing computational complexity.</p>
```

**Commands:**

Simple version:
```
Add internal links between related articles in {{category}}
```

Specific version:
```
Review all articles in articles/{{category}} and add cross-reference links where topics are mentioned
```

**Best Practices:**
- Link to articles in the same category using relative paths
- Use descriptive anchor text (not "click here")
- Add 2-4 relevant interlinks per article
- Don't overlink - only link genuinely related content

---

## Quick Commands Reference

| Task | Command |
|------|---------|
| Create article from notes | `Create article: - Folder: ... - Topic: ... - Date: ... - Notes: ...` |
| Create article from content.md | `Create {{filename}}.html in articles/{{category}} based on content.md` |
| Add internal links | `Add internal links between related articles in {{category}}` |
| Update category index | `Update {{category}}.html with new article {{filename}}` |
| Update blog hub | `Update blog.html with new article in {{category}}` |
