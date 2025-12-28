# Article Prompt Template

Use this template when generating article content.

---

## PROMPT

Write a short self-learning article about "{{TOPIC}}"

Context: This is a personal reference article for future recall of learned concepts.

Tone: direct, clear, conversational but not casual

### Requirements:
- Length should be 300 words (can be extended if need to cover important learning aspects)
- No "I" statements or first-person perspective
- No fancy or flowery language
- Keep it practical and to the point
- Blog date: {{DATE}}
- Use only references/information available before {{DATE}}
- Write as if written by a human, not an LLM
- No headings or subheadings
- Simple prose format
- Focus on completeness - cover the essential aspects of the topic
- If I forget something, I go to article and understand concept easily

### Structure:
- Easier for brain to grasp key points
- Start with blog title and date
- No long dashes or emoticons
- Emphasize on bullet points for core concepts
- Begin with context or why this matters
- Include practical code examples (if applicable)
- Cover key features, patterns, or concepts
- Explain complex concept with example and analogy (don't highlight as sub-heading)
- Mention common use cases (don't highlight as sub-heading)
- Note any limitations (don't highlight as sub-heading)
- End with a concise conclusion
- Output should be markdown format

### Style Guidelines:
- Direct statements over explanations
- Show, don't tell (use examples)
- Avoid marketing language or hype
- No unnecessary adjectives
- Short, clear sentences
- Natural flow without forced structure
- Add code block only if required and not mandatory
- Add diagram (XML draw.io) only if required and not mandatory
- Diagram(s) and Code should explain concepts, not substitute textual content
- Add mathematical notation only if required and not mandatory

### Diagram Requirements (if needed):
- Create as draw.io XML format
- Save separately in diagrams/{{CATEGORY}}/ folder
- Name: {{TOPIC_SLUG}}-diagram-1.xml (increment for multiple)
- Add placeholder in HTML: `<!-- DIAGRAM: {{TOPIC_SLUG}}-diagram-1.png -->`

---

## Variables:
- `{{TOPIC}}` - Article topic name
- `{{DATE}}` - Blog date (e.g., Sep 2020)
- `{{CATEGORY}}` - Folder category (e.g., statistics, machine-learning)
- `{{TOPIC_SLUG}}` - URL-friendly topic name (e.g., descriptive-inferential-stats)
