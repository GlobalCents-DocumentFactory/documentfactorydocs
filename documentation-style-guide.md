# Universal Documentation Style Guide

This comprehensive style guide provides universal principles and actionable rules for creating consistent, professional technical documentation. These rules are platform-agnostic and can be applied to any documentation system or project.

## 1. File Structure Guidelines

### Directory Naming Conventions
- **Use lowercase with hyphens**: `getting-started`, `advanced-topics`, `client-tools`
- **Keep names descriptive and concise**: Names should clearly indicate the content area
- **Group related content logically**: Organize by user journey and content type

**Universal Directory Structure Pattern:**
```
docs/
├── introduction.md                  # Root-level overview
├── getting-started/                 # User onboarding
│   ├── installation.md
│   ├── quickstart.md
│   └── basic-concepts.md
├── guides/                          # How-to guides
├── api-reference/                   # API documentation
├── integrations/                    # Third-party integrations
├── tutorials/                       # Step-by-step tutorials
└── troubleshooting/                 # Problem solving
```

### File Naming Patterns
- **Use kebab-case for multi-word files**: `getting-started.md`, `api-reference.md`, `user-management.md`
- **Use descriptive names that match content**: File name should indicate the specific topic
- **Choose appropriate file extensions**: `.md` for standard markdown, `.mdx` for component integration

### Sidebar Organization Principles
- **Use navigation configuration files** to control sidebar ordering
- **Set logical position numbers**: Start with 1, increment logically
- **Provide descriptive labels**: Use sentence case, be specific about content
- **Include meaningful descriptions**: Help users understand section purpose

**Example navigation configuration:**
```json
{
  "label": "Getting Started",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Quick introduction covering installation, basic concepts, and initial setup procedures."
  }
}
```

### Frontmatter Standards
- **Always include sidebar_position**: Controls ordering within sections
- **Use descriptive titles**: Match the main H1 heading
- **Add TOC configuration when needed**: Control heading levels in right sidebar

**Standard frontmatter:**
```yaml
---
position: 1
title: Installation Guide
description: Step-by-step installation instructions
---
```

**Extended frontmatter for complex pages:**
```yaml
---
position: 2
title: Advanced Configuration
description: Detailed configuration options
toc_min_heading_level: 2
toc_max_heading_level: 4
tags: [configuration, advanced]
---
```

## 2. Content Writing Rules

### Tone and Voice Guidelines
- **Use professional but accessible tone**: Formal enough for enterprise, friendly for usability
- **Write in active voice when possible**: "DocumentFactory processes documents" vs "Documents are processed"
- **Address users directly**: Use "you" and imperative mood for instructions
- **Be clear and concise**: Prefer short sentences, avoid unnecessary jargon

**DO:**
- "Configure the service to handle large data payloads"
- "Use this setting to control application behavior"
- "Set the property to `true` to enable the feature"

**DON'T:**
- "The service can be configured by users for the handling of large data payloads"
- "This setting has the capability to control application behavior"
- "When the property is set to `true`, the feature will be enabled"

### Heading Hierarchy Standards
- **Use single H1 (`#`) per page**: Should match the frontmatter title
- **Start with H2 (`##`) for main sections**: Never skip heading levels
- **Use H3-H6 progressively**: Maintain logical hierarchy throughout
- **Make headings descriptive and scannable**: Users should understand content from headings alone

**Heading Pattern:**
```markdown
# Main Page Title

## Major Section
Brief overview of what this section covers.

### Subsection
Specific topic within the major section.

#### Property Details
Technical details or specific configuration.

##### Additional Options
Further granular details when needed.
```

### Paragraph Structure Preferences
- **Start with overview paragraphs**: Introduce concepts before diving into details
- **Keep paragraphs focused**: One main idea per paragraph
- **Use 2-4 sentences per paragraph**: Maintain readability
- **Include context before technical details**: Help users understand "why" before "how"

### Introduction/Conclusion Patterns
- **Begin with purpose statement**: Clearly state what the page/section accomplishes
- **Include practical use cases**: Help users understand when to use the information
- **End with next steps or related topics**: Guide users to logical follow-up actions

**Introduction Pattern:**
```markdown
The conversion feature transforms input files from one format to another. This enables seamless integration and interoperability across different systems, ensuring files remain usable and compatible with a wide range of tools and platforms.

This capability is particularly useful for organizations that handle diverse file types and need to normalize them for storage, further processing, or delivery.
```

### Technical Explanation Approaches
- **Define before using**: Introduce technical terms before using them extensively
- **Provide context for properties**: Explain impact and use cases, not just syntax
- **Use consistent terminology**: Maintain the same terms throughout all documentation
- **Include practical implications**: Explain what happens when users change settings

**Property Documentation Pattern:**
```markdown
### `enabled`
*Type:* `boolean`

The `enabled` setting activates the conversion feature within the processing pipeline.
By setting this property to `true`, the system will automatically convert files to the desired output format during execution.
```

## 3. Formatting Standards

### Code Block Conventions
- **Always specify language**: Use appropriate syntax highlighting
- **Add meaningful titles**: Help users understand the code context
- **Use consistent indentation**: Follow the language's standard conventions
- **Include complete, working examples**: Avoid partial code snippets when possible

**Code Block Patterns:**
```json title="config.json"
{
    "features": [
        {
            "enabled": true,
            "settings": {
                "outputFormat": "pdf"
            }
        }
    ]
}
```

```env title=".env"
ENVIRONMENT="production"
MAX_WORKERS=20
DEBUG_MODE=false
```

```log
2025-01-15 10:43:40.550 [INFO] ApplicationEngine: Processing request abc123
2025-01-15 10:43:41.123 [DEBUG] ServiceHandler: Operation completed successfully
```

### Callout/Admonition Usage Rules
- **Use sparingly for maximum impact**: Reserve for truly important information
- **Choose appropriate types**: Match callout type to content purpose
- **Keep content concise**: Callouts should enhance, not replace, main content
- **Place strategically**: Position near relevant content, not at end of sections

**Admonition Types and Usage:**
```markdown
:::note
General information that adds context but isn't critical.
:::

:::warning
Important information about potential issues or limitations.
:::

:::tip
Helpful suggestions or best practices.
:::
```

**Example usage:**
```markdown
:::note
Enabling this feature does not automatically convert input files to a single format before processing. Combining different file types may lead to unexpected results.
:::

:::warning
This operation will permanently delete the selected items. Make sure you have backups before proceeding.
:::
```

### Table Formatting Preferences
- **Use markdown tables for structured data**: Keep formatting simple and readable
- **Include headers for all columns**: Make table purpose immediately clear
- **Align content appropriately**: Left-align text, right-align numbers
- **Keep tables scannable**: Use concise cell content, avoid paragraph text in cells

### List Formatting Standards
- **Use bullet points for unordered items**: When order doesn't matter
- **Use numbered lists for procedures**: When sequence is important
- **Keep items parallel in structure**: Start with same part of speech
- **Use sub-lists sparingly**: Prefer flatter structures for readability

**List Pattern:**
```markdown
Common use cases include:

- Converting files between different formats
- Processing large batches of files automatically  
- Preparing content for system integration
- Automating repetitive file operations
```

### Link Formatting and Referencing
- **Use descriptive link text**: Avoid "click here" or "read more"
- **Link to relevant sections**: Connect related information
- **Use appropriate linking mechanisms**: Follow your platform's best practices
- **Format external links clearly**: Make it obvious when links leave the site

**Internal Link Patterns:**
```markdown
# Standard markdown links
- [Installation Guide](#installation)
- [Configuration Details](../configuration/settings)

# Platform-specific components (if using Docusaurus/similar)
- <Link to="#installation">Installation Guide</Link>
- <Link to="../configuration/settings">Configuration Details</Link>
```

## 4. Content Architecture

### Information Hierarchy Principles
- **Follow user journey structure**: Organize from basic to advanced concepts  
- **Group by functional areas**: Keep related information together
- **Use progressive disclosure**: Introduce concepts in logical order
- **Maintain consistent depth**: Similar content types should have similar detail levels

**Universal Content Hierarchy:**
1. **Introduction** - Overview and value proposition
2. **Getting Started** - Installation and basic concepts  
3. **User Guides** - How-to instructions
4. **API Reference** - Technical documentation
5. **Integrations** - Third-party connections
6. **Tutorials** - Step-by-step learning
7. **Troubleshooting** - Problem solving and debugging

### Cross-Referencing Strategies
- **Link to prerequisite knowledge**: Connect foundational concepts
- **Reference related procedures**: Help users find connected tasks
- **Link to configuration details**: Connect features to their settings
- **Provide context for external references**: Explain why users might need external resources

**Cross-Reference Pattern:**
```markdown
For detailed information about this service, please refer to the [official documentation](https://example.com/docs).

If using the standalone binary, it should be placed in the **Installation Directory**, as specified in the [installation guide](../getting-started/installation#setup-process).
```

### Progressive Disclosure Techniques
- **Start with overviews**: Provide conceptual understanding before details
- **Layer information by complexity**: Basic → Intermediate → Advanced
- **Use collapsible sections when appropriate**: Allow users to choose their depth
- **Reference detailed information**: Point to comprehensive resources when needed

### Content Type Patterns

#### Tutorial Content Structure
```markdown
# [Feature Name]

[Brief description of what this feature does and why it's useful]

## Configuration

### `primarySetting`
*Type:* [data type]
Clear explanation of what this setting controls and its impact.

### `configurationObject` 
*Type:* [data type]
Description of the configuration object and its purpose.

## Example
Complete, working example with step-by-step explanation.
```

#### Reference Content Structure
```markdown
# [Component/API Name]

[Purpose and when to use this component]

## Installation
Step-by-step setup instructions.

## Configuration  
Available settings and configuration options.

## Usage
How to use the component in practice with common patterns.

## Examples
Practical examples demonstrating key functionality.

## Troubleshooting
Common issues and their solutions.
```

#### Conceptual Content Structure  
```markdown
# [Concept Name]

[Definition and explanation of the concept]

## How It Works
[Technical explanation]

## Use Cases
[When and why to use]

## Related Concepts
[Connections to other topics]
```

## 5. Visual Elements

### Image Integration Standards
- **Use consistent image components**: Ensures uniform styling and responsive behavior
- **Provide descriptive alt text**: Make images accessible to screen readers
- **Set appropriate maximum widths**: Typically 600px for screenshots, full width for diagrams
- **Center images**: Use consistent positioning and spacing

**Image Usage Patterns:**
```markdown
# Standard markdown
![Installation dialog showing license agreement](./images/installation-license.png)

# With custom components (platform-specific)
<Image 
    src="./images/installation-license.png" 
    alt="Installation dialog showing license agreement"
    maxWidth="600px" />
```

### Diagram and Media Usage
- **Use diagram tools consistently**: Mermaid, PlantUML, or drawing tools as appropriate
- **Keep diagrams simple and focused**: Avoid cluttered visualizations
- **Use consistent styling**: Match diagrams to overall design theme
- **Provide diagram descriptions**: Make visual content accessible

**Diagram Patterns:**
```mermaid
# Process flow example
graph TD;
    A[Input] --> B[Process];
    B --> C[Validate];
    C --> D[Output];
    C --> E[Error Handler];
```

```markdown
# Alternative text descriptions
The diagram shows a simple process flow: Input → Process → Validate, 
with validation leading to either Output or Error Handler.
```

### Custom Component Patterns
- **Import components at file top**: Keep imports organized
- **Use components consistently**: Same component for same content types
- **Document component props**: Make usage clear for other writers
- **Keep components simple**: Focus on reusability and maintainability

### Layout and Spacing Conventions
- **Use consistent white space**: Separate logical sections clearly
- **Avoid overly long lines**: Keep content readable
- **Group related elements**: Use proximity to show relationships
- **Maintain visual rhythm**: Consistent spacing between similar elements

## 6. Examples and Templates

### Tutorial Page Template
```markdown
---
position: [number]
title: [Feature Name]
description: [Brief description for SEO/navigation]
---

# [Page Title]

Opening paragraph explaining what this feature does and why it's valuable. Include practical context.

Second paragraph with use cases or scenarios where this feature applies.

## Configuration

### `primaryProperty`
*Type:* `boolean`

Explanation of what this property controls and its impact on system behavior.

### `configurationObject`
*Type:* `object`

Description of the configuration object and its purpose within the system.

The `configurationObject` may include:
- `subProperty` - Description of nested property and its function

#### `subProperty`
*Type:* `string`

Detailed explanation of the nested property and its possible values.

## Example

```json title="config.json"
{
    "features": [
        {
            "primaryProperty": true,
            "configurationObject": {
                "subProperty": "exampleValue"
            }
        }
    ]
}
```

In the example above:
- The `primaryProperty` enables the feature functionality
- The `configurationObject` provides detailed settings
- Expected behavior: [describe what happens when this configuration is applied]
```

### API Reference Template
```markdown
---
position: [number]
title: [API/Component Name]
description: [Component description for navigation]
tags: [api, reference]
---

# [Component Name]

Brief description of the component's purpose and role in the system.

## When to Use

Specific scenarios where this component is appropriate:
- Primary use case with concrete example
- Secondary use case with context
- Advanced use case for power users

## Installation

Step-by-step instructions for getting the component ready:

1. Install dependencies
2. Configure environment
3. Initialize component
4. Verify installation

## Configuration

Required and optional parameters:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `apiKey` | string | Yes | Authentication key |
| `timeout` | number | No | Request timeout in ms |

## Usage Examples

Practical examples showing the component in action:

```javascript
// Basic usage
const client = new ApiClient({
  apiKey: 'your-api-key',
  timeout: 5000
});

// Advanced configuration
const result = await client.performAction({
  parameter1: 'value1',
  parameter2: 'value2'
});
```
```

### Concept Explanation Template  
```markdown
---
position: [number]
title: [Concept Name]
description: [Concept overview for navigation]
tags: [concepts, fundamentals]
---

# [Concept Title]

Clear definition of the concept and its role in the overall system.

Explanation of how the concept relates to user goals or system behavior.

## Key Characteristics

Detailed explanation of the concept's main features and properties.

## How It Works

Step-by-step explanation of the concept's behavior and mechanics.

## Common Use Cases

Practical scenarios where this concept applies:

- Use case 1 with specific example
- Use case 2 with context
- Use case 3 with implementation notes

## Related Concepts

Connections to other important concepts:

- [Related Concept 1](../concepts/related-concept-1) - Brief explanation of relationship
- [Related Concept 2](../concepts/related-concept-2) - Brief explanation of relationship

```mermaid
# Visual representation showing concept relationships
graph TB;
    A[Main Concept] --> B[Related Concept 1];
    A --> C[Related Concept 2];
    B --> D[Practical Application];
    C --> D;
```

Summary paragraph connecting the concept to practical usage and next steps.
```

## Implementation Guidelines

### Content Creation Process
1. **Research and outline**: Understand the topic thoroughly before writing
2. **Draft content**: Focus on clarity and user needs
3. **Review for consistency**: Check against style guide standards
4. **Test examples**: Ensure all code samples work correctly
5. **Cross-reference**: Add appropriate links to related content

### Quality Checklist
- [ ] File follows naming conventions
- [ ] Frontmatter includes required fields (title, description, position)
- [ ] Heading hierarchy is logical and complete
- [ ] Code blocks have language specification and titles where appropriate
- [ ] Images include descriptive alt text and appropriate sizing
- [ ] Links use descriptive text and work correctly
- [ ] Content matches established tone and voice
- [ ] Examples are complete, tested, and explained
- [ ] Cross-references are accurate and helpful
- [ ] Content is accessible and well-structured

### Common Pitfalls to Avoid
- **Don't skip heading levels**: Always use proper hierarchy
- **Don't overuse admonitions**: Reserve for truly important information
- **Don't use generic link text**: Make links descriptive
- **Don't assume prior knowledge**: Define terms and provide context
- **Don't write in isolation**: Consider the user's journey through the documentation

This style guide should be referenced during all documentation creation and updates to ensure consistency and professional quality across the entire documentation site.