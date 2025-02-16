# Bundlers and Vite Crash Course

## How Websites Were Built Before Bundlers

### Early Web Development (Static Websites)

In the early days of the web (may be early 2000s to mid 2010s), websites were simple and mostly static, meaning they did not have much interactivity. A typical website had:

- **HTML** files for structure (e.g. headings, paragraphs, buttons).
- **CSS** files for styling (e.g. fonts, colors, layout).
- **JavaScript** files for small interactive features (e.g. form validation/submission, simple animations).

Developers would include JavaScript in web pages using `<script>` tag like this:

```html
<script src="script-01.js"></script>
<script src="script-02.js"></script>
<script src="script-03.js"></script>
```

Each `<script>` tag would load a separate JavaScript file.

#### Problems With This Approach

1. **Too many HTTP requests**

   - Every time a user visited a web page, their browser had to download each **JavaScript file separately**.
   - **More files** = **slower page load time**, especially for users with slow internet connections.

2. **No built-in way to organize JavaScript code**

   - IF a developer wanted to use the same function in multiple files, they had to **copy and paste it manually**.
   - This made maintaining large projects difficult.

3. **No Module System (No Imports/Exports)**

   - JavaScript files could not share code with each other easily.
   - Developers had to rely on **global variables**, which caused **naming conflicts and bugs**.

#### Example Of A Problem

Imagine two JavaScript files, both defining a variable called `user`.

```js
// script-01.js
var user = "Shawqi";
```

```js
// script-02.js
var user = "Hatem";
```

Since both variables are global, they will overwrite each other unexpectedly.

## The Rise Of JavaScript Complexity

As websites evolved, they became more interactive, moving from simple pages to complex web applications like:

- Online Stores (Amazon, eBay)
- Social Media Platforms (Instagram, Twitter)
- Web-Based Tools (Google Docs, Figma)

With this growth came new challenges:

- More JavaScript files meant more HTTP requests, slowing down websites.
- Developers wanted a way to split large codebases into smaller, reusable files (modules).
- New JavaScript features (like ES6 in 2015) made coding easier, but older browsers did not support them.

**Solution? Modules!**

ES6 introduced the **import/export** system to help organize JavaScript:

```js
// script-01.js (A Module)
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
```

```js
// script-02.js (Using the Module)
import { sayHello } from "./script-01.js";

sayHello("Shawqi");
```

BUT... older browsers did not support this feature natively at the time!

## Bundlers Emerge As A Solution

To solve all these problems, bundlers like **Webpack**, **Parcel**, **Rollup**, and **Vite** were created! 🚀

### 🔹 What Bundlers Do

A bundler is a tool that:

- Takes multiple JavaScript files and combines them into one optimized file.
- Minifies and compresses JavaScript, CSS, and images to improve speed.
- Transpiles modern JavaScript (ES6 (+)) into older versions for better browser support.
- Automatically manages dependencies (modules) for a smooth development experience.

### 🔹 How/Why Bundlers Changed Web Development

- Websites now load faster because fewer files are downloaded.
- Developers can write clean, modular code without worrying about browser support.
- Front-end frameworks like Angular, React, and Vue rely on bundlers to function properly.

## Real-Life Analogy: Why Bundlers Matter

Imagine you are packing a suitcase for a trip.

- **Without a bundler**: You throw all your clothes loosely into your suitcase—it is messy, takes up more space, and you struggle to find things.
- **With a bundler**: You neatly fold and organize your clothes, removing unnecessary items and zipping everything into a compact, efficient package.

Bundlers do the same for your JavaScript files—organizing, optimizing, and reducing them so that your website loads quickly and runs smoothly! 🎯

## Understanding How Bundlers Work

### 🔹 1. Basic Workflow of a Bundler

A bundler follows these steps to process files:

#### Step 1: Entry File (Starting Point)

- The bundler starts with an entry file (usually index.js or main.js).
- This file contains imports for all the JavaScript modules used in the project.

**Example**:

```js
// index.js (Entry File)
import { sayHello } from "./script-01.js";
import { sayBye } from "./script-02.js";

sayHello("Shawqi");
sayBye("Shawqi");
```

```js
// script-01.js
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
```

```js
// script-02.js
export function sayBye(name) {
  console.log(`Bye, ${name}!`);
}
```

#### Step 2: Building a Dependency Graph

- The bundler scans the entry file to **find all imported files**.
- It follows each import to build a **dependency graph** (a map of how files depend on each other).
- This helps the bundler understand which files need to be combined.

#### Step 3: Bundling The Files

- The bundler combines all JavaScript modules into a single file (bundle.js).
- This reduces HTTP requests and speeds up the website.

**Example Output (After Bundling)**:
Instead of multiple files, we now have:

```js
// bundle.js
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayBye(name) {
  console.log(`Bye, ${name}!`);
}

sayHello("Shawqi");
sayBye("Shawqi");
```

The bundler has merged everything into one optimized file.

#### Step 4: Optimization The Code

After bundling, the code goes through optimizations like:

- **Minification** – Removing unnecessary spaces and comments.
- **Tree Shaking** – Removing unused code.
- **Code Splitting** – Splitting large codebases into smaller chunks (lazy loading).

💡 Minified Output Example:

<!-- prettier-ignore -->
```js
function h(n){console.log(`Hello, ${n}!`);}function b(n){console.log(`Bye, ${n}!`);}h("Shawqi");b("Shawqi");
```

This smaller file loads faster in the browser! 🚀

## Vite.JS Installation and Setup

### Step 1: Install Node.JS

- Before using Vite, you will need to have Node.JS installed on your computer.
- You can download it from the official website.
- After installation, verify by running:

```bash
node -v
npm -v
```

This checks that both Node.JS and `npm` (Node's package manager) are installed.

### Step 2: Create a Project Folder

- Create a new folder where you want your project. You can do this manually or with the command line:

```bash
mkdir vite-project
cd vite-project
```

### Step 3: Initialize a New Project

- Inside your project folder, run:

```bash
npm init -y
```

This creates a `package.json` file with default values.

### Step 4: Install Vite.JS

- Now, install Vite.JS using `npm` by running:

```bash
npm install vite
```

Coding Time!
