# Quick Start Guide - Enhanced Design System

## 5-Minute Setup

### Step 1: Update BaseLayout (2 minutes)

Open [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) and make these changes:

**Replace imports:**
```astro
// Remove these lines:
import HeaderNav from "../components/HeaderNav.astro";
import Footer from "../components/Footer.astro";

// Add these lines:
import HeaderNavEnhanced from "../components/HeaderNavEnhanced.astro";
import FooterEnhanced from "../components/FooterEnhanced.astro";
```

**Replace font imports:**
```html
<!-- Replace the existing Google Fonts link with: -->
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

**Replace component usage:**
```astro
<!-- Replace these lines: -->
<HeaderNav />
<Footer />

<!-- With these lines: -->
<HeaderNavEnhanced />
<FooterEnhanced />
```

### Step 2: Update Homepage (2 minutes)

Open [`src/pages/index.astro`](src/pages/index.astro) and:

**Add enhanced imports:**
```astro
// Add these imports:
import HeroEnhanced from "../components/HeroEnhanced.astro";
import ButtonEnhanced from "../components/ButtonEnhanced.astro";
import CaseStudyCardEnhanced from "../components/CaseStudyCardEnhanced.astro";
import "../styles/global-enhanced.css";
import styles from "./_index-enhanced.module.css";
```

**Replace hero section:**
```astro
<!-- Replace the entire hero section with: -->
<HeroEnhanced />
```

**Replace featured grid:**
```astro
<!-- Replace the featured grid with: -->
<div class={styles.featuredGrid}>
  {featured.map((entry, index) => (
    <CaseStudyCardEnhanced 
      entry={entry} 
      featured={index === 0}
    />
  ))}
</div>
```

**Replace buttons:**
```astro
<!-- Replace Button with ButtonEnhanced: -->
<ButtonEnhanced href={withBase("contact/")} variant="primary" size="lg">
  Start a Project
</ButtonEnhanced>
```

### Step 3: Update Case Studies (1 minute)

Open each case study file in [`src/content/caseStudies/`](src/content/caseStudies/) and add an `index` field:

```markdown
---
title: "Dockside Hotel Redesign"
client: "Dockside Hotel"
location: "Perth, WA"
category: "Web Design"
featured: true
index: 1  # Add this line (unique number for each case study)
outcome: "+42% direct bookings, 3.2x conversion rate"
heroImage: ./hero.webp
---
```

---

## Test Your Changes

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   Navigate to `http://localhost:4321`

3. **Verify changes:**
   - ✅ Navigation has scroll progress bar
   - ✅ Hero has parallax orbs and magnetic buttons
   - ✅ Case study cards have numbered overlays
   - ✅ Footer is dark with gradient mesh
   - ✅ Animations trigger on scroll

---

## What You'll See

### Visual Changes
- **Colors**: Deep charcoal backgrounds with electric coral accents
- **Typography**: Large display fonts (Playfair Display) with bold headings
- **Layouts**: Asymmetric, rotated elements, overlapping content
- **Animations**: Scroll reveals, parallax effects, magnetic buttons

### Interactive Changes
- **Hover Effects**: Buttons follow cursor, cards glow, links reveal arrows
- **Scroll Animations**: Elements fade in as you scroll
- **Mobile Menu**: Slide-in animation with staggered links
- **Progress Bar**: Shows scroll position at bottom of nav

---

## Customization

### Change Accent Color

Edit [`src/styles/tokens-enhanced.css`](src/styles/tokens-enhanced.css):

```css
:root {
  --color-accent: #ff6b4a;  /* Change this to your brand color */
  --color-accent-dark: #e55a3b;  /* Darker version for hover states */
}
```

### Adjust Animation Speed

Edit [`src/styles/tokens-enhanced.css`](src/styles/tokens-enhanced.css):

```css
:root {
  --transition-fast: 200ms ease;  /* Make faster: 100ms, slower: 300ms */
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Disable Animations

If you prefer a simpler experience, edit [`src/styles/global-enhanced.css`](src/styles/global-enhanced.css):

```css
/* Comment out or remove these sections: */
/* .reveal { ... } */
/* .reveal-left { ... } */
/* .reveal-right { ... } */
/* .reveal-scale { ... } */
```

---

## Troubleshooting

### Fonts Not Loading
- Check internet connection
- Verify Google Fonts URL is correct
- Clear browser cache

### Animations Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify [`global-enhanced.css`](src/styles/global-enhanced.css) is imported

### Layout Broken on Mobile
- Check responsive breakpoints in component CSS
- Test at different viewport sizes
- Verify grid/flex layouts have fallbacks

### Performance Issues
- Run Lighthouse audit: `npm run build` then open DevTools Lighthouse
- Check image sizes and formats
- Reduce animation complexity if needed

---

## Next Steps

### Apply to Other Pages

1. **Work Page**: Update [`src/pages/work/index.astro`](src/pages/work/index.astro)
2. **About Page**: Update [`src/pages/about/index.astro`](src/pages/about/index.astro)
3. **Contact Page**: Update [`src/pages/contact/index.astro`](src/pages/contact/index.astro)
4. **Case Study Pages**: Update [`src/pages/work/[slug].astro`](src/pages/work/[slug].astro)

### Enhance Further

1. **Add More Animations**: Implement page-specific scroll animations
2. **Custom Cursor**: Add custom cursor component to all pages
3. **Dark Mode Toggle**: Implement theme switching
4. **Video Backgrounds**: Add ambient video for hero section

---

## Performance Tips

### Optimize Images
- Use WebP format for photos
- Compress images before uploading
- Use `loading="lazy"` for non-critical images
- Use `priority` for hero images

### Reduce JavaScript
- Only load scripts when needed
- Use event delegation where possible
- Minimize DOM manipulation

### CSS Optimization
- Use CSS variables for theming
- Minimize specificity
- Use hardware-accelerated properties (transform, opacity)

---

## Browser Support

Test your enhanced design in:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Required Features
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Intersection Observer API
- Backdrop Filter

---

## Accessibility Checklist

- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] ARIA labels are present
- [ ] Reduced motion is respected
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader announces content correctly

---

## Resources

- [Complete Implementation Guide](ENHANCED-DESIGN-GUIDE.md)
- [Design Transformation Summary](DESIGN-TRANSFORMATION-SUMMARY.md)
- [Component Documentation](src/components/)
- [Design Tokens](src/styles/tokens-enhanced.css)

---

## Support

For issues or questions:
1. Check inline comments in component files
2. Review [ENHANCED-DESIGN-GUIDE.md](ENHANCED-DESIGN-GUIDE.md)
3. Test in different browsers
4. Check browser console for errors

---

## Success Indicators

You'll know the enhanced design is working when:

✅ Navigation has a colored progress bar at the bottom  
✅ Hero section has floating orbs that move on scroll  
✅ Buttons have a magnetic effect when you hover  
✅ Case study cards show large numbers (01, 02, 03)  
✅ Footer is dark with a gradient mesh background  
✅ Elements animate in as you scroll down the page  
✅ Links reveal arrows on hover  
✅ Typography uses large display fonts  

---

**Ready to transform your portfolio?** Follow the steps above and see the difference in 5 minutes!
