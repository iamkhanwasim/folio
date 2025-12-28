# Diagrams Folder

This folder contains draw.io XML files for article diagrams.

## Structure
```
diagrams/
├── machine-learning/
│   ├── gradient-descent-diagram-1.xml
│   └── linear-regression-diagram-1.xml
├── statistics/
│   └── descriptive-inferential-stats-diagram-1.xml
├── technical-articles/
├── python/
├── data-structures-algorithms/
└── linear-algebra/
```

## Naming Convention
- Format: `{{topic-slug}}-diagram-{{number}}.xml`
- Use lowercase with hyphens
- Increment number for multiple diagrams per article

## How to Convert to PNG
1. Go to [draw.io](https://app.diagrams.net/)
2. File → Import From → Text
3. Paste the XML content
4. Click Import
5. File → Export As → PNG
6. Save to `images/` folder with same name (but .png extension)

## Image Reference in HTML
After converting, the HTML references images as:
```html
<div class="diagram">
    <img src="../../images/topic-slug-diagram-1.png" alt="Diagram description">
</div>
```
