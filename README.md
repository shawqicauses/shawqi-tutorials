<!-- DONE REVIEWING -->

# Tailwind CSS Crash Course

## Outline

### What is Tailwind CSS?

#### Utility-First Framework

- Every class in Tailwind does one specific thing: set a font size, add padding, adjust margin, etc.
- Example: `p-4` adds padding of 1rem (16 pixels), `text-xl` sets font-size.

#### Customization and Configurability

- Even though you do not write traditional CSS, you can fully customizable your design system using `tailwindcss.config.js` file.

#### Analogy to Explain

- Think of Tailwind CSS as a box of LEGO blocks. Each block has a single purpose, but together, you can build something amazing.

### Why Use Tailwind CSS?

#### Consistency in Design

- Tailwind enforces a design system by default. All spacings, colors, and sizes are pre-defined.
- This ensures your UI looks consistent even in large projects.

#### Fewer Naming Conflicts

- No need to come up with class names like `card-header` or `main-button`. You use generic, predictable utilities instead.

#### Rich Eco-System

- Tailwind comes with pre-built plugins like typography, forms, and aspect-ratios.

### Core Concepts

#### Utility Classes

- Tailwind utilities are short-hand for CSS properties.
- Example: `mt-4` is same as `margin-top: 1rem`.

#### Key Categories Of Utilities

1. Spacing
   - Control margins and paddings.
   - `px-2`, `py-8`, `m-4`, etc.
2. Typography
   - `text-lg` for font-size, `font-bold` for weight, `leading-relaxed` for line height.
3. Colors and Backgrounds
   - `bg-red-500`, `text-white`, `hover:bg-indigo-700`.
4. Borders and Shadows
   - `border`, `rounded-lg`, and `shadow-xl`.

#### Flex-box and Grid

Tailwind CSS makes flex-box and grid simple by providing intuitive utilities.

##### Flex-box Utilities

1. Parent Element Controls
   - `flex`: Makes an element a flex container.
   - `justify-center`: Centers items horizontally.
   - `items-center`: Centers items vertically.
2. Child Element Controls
   - `flex-grow`, `flex-shrink`, and `basis-1/2`.

##### Grid Utilities

- Controls the number of columns with `grid-cols-n`.

### Responsive Design

#### Mobile-First Approach

- By default, Tailwind CSS utilities apply to all screen sizes. Add breakpoints to target larger screens.

#### Break-points

- `sm` (`640` pixels and larger).
- `md` (`768` pixels and larger).
- `lg` (`1024` pixels and larger).
- `xl` (`1280` pixels and larger).
- `2xl` (`1536` pixels and larger).

#### Live Coding

**_By Shawqi Hatem._**
