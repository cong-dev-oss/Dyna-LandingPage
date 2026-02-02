# ContentBlock Component - Usage Guide

## Overview
The `ContentBlock` component is a testimonial/feedback card generated from UIPro Figma plugin. It displays user testimonials with a visually rich gradient background, user avatar, star ratings, and DYNA branding.

## Component Structure
- **ContentBlock.tsx** - Main testimonial card component
- **Icon1.tsx** - User avatar sub-component
- **ContentBlock.css** - Styles for ContentBlock
- **Icon1.css** - Styles for Icon1

## Usage Example

### Basic Usage
```tsx
import ContentBlock from '../components/ContentBlock';

function MyPage() {
  return (
    <ContentBlock />
  );
}
```

### With Custom Props
```tsx
import ContentBlock from '../components/ContentBlock';

function MyPage() {
  return (
    <ContentBlock
      name="Sophie Martin"
      review="Dyna transforme ma façon de travailler. Je gagne du temps et reste focus!"
      feedbackTitle="Feedback de la communauté"
      feedbackText="Nos utilisateurs adorent Dyna pour sa simplicité et son efficacité."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `name` | `string` | `"Casey"` | User name displayed in the testimonial |
| `review` | `string` | `"Dyna m'aide..."` | User testimonial text |
| `feedbackTitle` | `string` | `"Feedback de la communauté"` | Title for the bottom section |
| `feedbackText` | `string` | `"Dyna m'aide..."` | Description text for the bottom section |

## Integration with DYNALANDINGPAGE

To integrate this component into the existing landing page, you can replace or supplement the current testimonial sections:

### Option 1: Replace existing content-block5
In `DYNALANDINGPAGE.tsx`, around line 526, replace the existing `content-block5` section with:

```tsx
import ContentBlock from '../components/ContentBlock';

// Inside the testimonials section:
<motion.div 
  className="testimonials"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={staggerContainer}
>
  <ContentBlock />
</motion.div>
```

### Option 2: Use in the testimonial slider
You can integrate it into the existing testimonial slider system by adding it to the `TESTIMONIAL_ITEMS` array.

## Assets Required

The component uses the following assets (all located in `/public`):
- ✅ Content-Block-Image.svg - User avatar
- ✅ Content-Block-Star.svg - Star rating icons (5x)
- ✅ merged-asset-1@2x.png - Decorative background planet
- ✅ Content-Block@3x.png - DYNA badge background
- ✅ Content-Block@2x.png - Additional decorative element
- ✅ Content-Block1@2x.png - Additional decorative element

All assets have been verified and are present in the public folder.

## CSS Variables

The component uses CSS variables defined in `global.css`:

### Spacing Variables
- `--Global-Spacing-Sp-4`, `--Global-Spacing-Sp-16`, `--Global-Spacing-Sp-24`
- `--Golbal-Spacing-Sp-14`, `--Golbal-Spacing-Sp-22`, `--Golbal-Spacing-Sp-28`, `--Golbal-Spacing-Sp-34`
- `--radius-4xl`, `--radius-xl`

### Color Variables
- `--Global-color-blue-brand-shade-blue-3`, `--Global-color-blue-brand-shade-blue-5`
- `--color-black`, `--color-gainsboro`, `--color-gray-100` through `--color-gray-400`
- `--color-mediumslateblue`, `--color-midnightblue`, `--Title-20-Regular`

### Typography Variables
- `--Golbal-Typography-DM-Sans`
- `--font-jetbrains-mono`, `--font-poppins`

### Size Variables
- `--height-12`, `--height-48`, `--width-12`, `--width-48`

## Accessibility Features
- ✅ Semantic HTML: Uses `<article>`, `<section>`, `<h3>`, `<p>` tags
- ✅ ARIA labels: Star rating has `role="img"` and `aria-label="5 star rating"`
- ✅ Alt text: All images have appropriate alt attributes
- ✅ Keyboard navigation: Component is fully accessible via keyboard

## Responsive Design
The component has a max-width of 433px and is designed to be responsive. Consider adding media queries if needed for smaller screens.

## Notes
- The component maintains pixel-perfect styling from the Figma design
- All CSS variables are properly defined in `global.css`
- Component names and class names follow existing codebase conventions
- Code is well-commented for maintainability
