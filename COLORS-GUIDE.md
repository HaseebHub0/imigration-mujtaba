# 🎨 Centralized Color System Guide

## Overview
Ab aap ko har page mein hardcoded colors use nahi karne padenge! Sirf ek jagah se saare colors update ho jayenge.

## 📍 Color Configuration Location
**Main File**: `lib/colors.ts` - Yahan se saare colors update karo

## 🎨 Brand Colors
```typescript
// lib/colors.ts mein ye colors hain:
primary: {
  midnight: '#144d5e',     // Midnight Green - Primary brand color
  shamrock: '#6aad81',     // Shiny Shamrock - Secondary/accent color
},

neutral: {
  lightGrey: '#d2d4d8',    // Light Grey - Neutral/background color
  eerieBlack: '#1b1b1b',   // Eerie Black - Dark backgrounds
}
```

## 🛠️ CSS Utility Classes (Recommended)
### Background Colors
```css
.bg-brand-primary      → #144d5e (Midnight Green)
.bg-brand-secondary    → #6aad81 (Shiny Shamrock)  
.bg-brand-neutral      → #d2d4d8 (Light Grey)
.bg-brand-dark         → #1b1b1b (Eerie Black)
```

### Text Colors
```css
.text-brand-primary    → #144d5e
.text-brand-secondary  → #6aad81
.text-brand-neutral    → #d2d4d8
.text-brand-dark       → #1b1b1b
```

### Border Colors
```css
.border-brand-primary    → #144d5e
.border-brand-secondary  → #6aad81
.border-brand-neutral    → #d2d4d8
.border-brand-dark       → #1b1b1b
```

### Special Utilities
```css
.btn-brand-primary         → Pre-styled primary button
.card-brand-hover:hover    → Card hover effect with brand colors
.bg-brand-gradient         → Brand gradient background
.icon-brand-primary        → Icon color (Shamrock)
.icon-brand-secondary      → Icon color (Midnight)
```

## 📝 Usage Examples

### ❌ Old Way (Don't Use)
```jsx
<div className="bg-[#6aad81] text-[#144d5e] border-[#d2d4d8]">
  <Button className="bg-[#6aad81] hover:bg-[#5a9d71]">
    Click Me
  </Button>
</div>
```

### ✅ New Way (Use This)
```jsx
<div className="bg-brand-secondary text-brand-primary border-brand-neutral">
  <Button className="btn-brand-primary">
    Click Me
  </Button>
</div>
```

### ✅ Using CSS Variables
```jsx
<div className="bg-primary text-secondary">
  Content
</div>
```

## 🔄 How to Update Colors

### Step 1: Update Main Configuration
```typescript
// lib/colors.ts mein colors change karo
export const brandColors = {
  primary: {
    midnight: '#YOUR_NEW_COLOR',    // Yahan new color daalo
    shamrock: '#YOUR_NEW_COLOR',    // Yahan new color daalo
  }
}
```

### Step 2: Update CSS Utilities
```css
/* app/globals.css mein ye lines update karo */
.bg-brand-primary { background-color: #YOUR_NEW_COLOR; }
.text-brand-primary { color: #YOUR_NEW_COLOR; }
```

### Step 3: Update CSS Variables
```css
/* app/globals.css mein :root section mein */
--primary: #YOUR_NEW_COLOR;
--secondary: #YOUR_NEW_COLOR;
```

## 🎯 Best Practices

### 1. Use Utility Classes
```jsx
// Good
<Card className="card-brand-hover border-brand-secondary">

// Avoid
<Card className="hover:bg-[#d2d4d8] border-[#6aad81]">
```

### 2. Use CSS Variables for Components
```jsx
// Good
<Button className="bg-primary hover:bg-primary/90">

// Avoid  
<Button className="bg-[#6aad81] hover:bg-[#5a9d71]">
```

### 3. Create Component-Specific Utilities
```css
/* For frequently used combinations */
.hero-overlay {
  background-color: rgb(106 173 129 / 0.8); /* bg-brand-secondary/80 */
}
```

## 🚀 Migration Strategy

### Phase 1: Critical Pages
- Home page
- Contact page  
- Service pages

### Phase 2: Component Updates
- Header
- Footer
- Cards
- Buttons

### Phase 3: Remaining Pages
- About
- Blog
- Assessment pages

## 🧪 Testing
```bash
# Development server chalao
npm run dev

# Browser mein check karo: http://localhost:3000
# Colors consistent hain ya nahi
```

## 📋 Color Update Checklist
- [ ] `lib/colors.ts` updated
- [ ] CSS utility classes updated in `app/globals.css`
- [ ] CSS variables updated in `:root`
- [ ] Dark mode colors updated
- [ ] Test on all major pages
- [ ] Verify hover states work
- [ ] Check mobile responsiveness

## 🆘 Quick Reference
```jsx
// Common Patterns
<div className="bg-brand-secondary text-white">         // Primary button style
<div className="text-brand-primary">                   // Primary text
<div className="bg-brand-neutral">                     // Neutral background  
<div className="border-brand-secondary">               // Brand border
<div className="hover:bg-brand-secondary-dark">        // Hover state
```

---
**Remember**: Sirf `lib/colors.ts` aur `app/globals.css` mein colors update karo, baaki sab automatic ho jayega! 🎉
