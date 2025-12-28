# Creating New Articles

## From content.md to HTML
When creating a new article based on D:\Projects\Portfolio\articlecontent\content.md:

1. **Read the content.md file** to get the article content
2. **Create the HTML file** in the appropriate category folder:
   - Machine Learning: `articles/machine-learning/`
   - Statistics: `articles/statistics/`
   - Technical Articles: `articles/technical-articles/`

3. **HTML Structure Requirements:**
   - Include full navigation header (navbar with logo, nav-menu, theme toggle, hamburger)
   - Link to `../../styles.css` (two levels up from articles subfolder)
   - Add article-specific styles inline in `<style>` tag
   - Use standard components:
     - `.highlight-box` - for important introductions (with left border accent)
     - `.concept-box` - for key concepts (with primary color background)
     - `.example-box` - for practical examples (with yellow/orange theme)
     - `.diagram` - for images
   - Include article title with class `article-title`
   - Include date with class `article-date`
   - Wrap content in `<article class="blog-article">` and `<div class="article-content">`
   - Add "Back to [Category]" button at bottom
   - Include footer with copyright
   - Link to `../../script.js`

4. **Image Paths:**
   - Images are stored in `D:\Projects\Portfolio\images`
   - Use path `../../images/imagename.png` from article HTML files

5. **Update Category Index (e.g., statistics.html):**
   - Use simple list style: `<ul class="blog-list">` with `<li class="blog-item">`
   - Each link uses class `blog-link`
   - Follow the same pattern as machine-learning.html

6. **Update blog.html:**
   - Add article to appropriate category section
   - List first 3 articles
   - Include "Show All →" link to category page

## Example Command:
"Create [filename].html in D:\Projects\Portfolio\articles\[category] based on content in D:\Projects\Portfolio\articlecontent\content.md"

# Adding internal links
Simple version:
"Add internal links between related articles in [folder/category name]"

More specific:
"Review all articles in D:\Projects\Portfolio\articles\machine-learning and add cross-reference links where topics are mentioned"