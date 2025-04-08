# HTML to JSX Conversion Exercise

This exercise focuses on converting HTML to JSX, demonstrating the key differences and syntax requirements of JSX.

## Getting Started

### Online classroom

To run this project:

1. Make sure you have [bun installed](https://bun.sh/docs/installation) on your computer
2. Open a terminal and navigate to the project directory
3. Run `bun install` to install the necessary dependencies
4. Run `bun dev` to start the development server
5. Check your terminal for the URL, open that URL in your browser

### Offline classroom

1. Duplicate the `react-boilerplate` folder
2. Rename the folder `react-project-name-challenge`
3. Open a terminal and navigate to the project directory
4. Run `bun dev` in the terminal
5. Hold the `command` key and click on the URL

## Instructions

1. Open the `src/App.jsx` file.
2. You will find a HTML structure inside a JavaScript template literal (``).
3. Your task is to convert this HTML into valid JSX.
4. Follow the steps outlined below to make the necessary changes.

## Steps for Converting HTML to JSX

1. Replace `class` attributes with `className`.
2. Close all self-closing tags (e.g., `<img>` becomes `<img />`).
3. Replace `for` attributes in labels with `htmlFor`.
4. Convert inline styles to JSX style objects.
5. Replace `onclick` attributes with `onClick` and make them reference a function.
6. Ensure all attribute names use camelCase (e.g., `tabindex` becomes `tabIndex`).
7. Wrap any JavaScript expressions inside curly braces `{}`.
8. Replace HTML comments `<!-- -->` with JSX comments `{/* */}`.

## Example Conversions

HTML:

```html
<div class="container">
  <img src="logo.png" alt="Logo" />
  <label for="username">Username:</label>
  <input type="text" id="username" />
</div>
```

JSX:

```jsx
<div className="container">
  <img src="logo.png" alt="Logo" />
  <label htmlFor="username">Username:</label>
  <input type="text" id="username" />
</div>
```

## Learning Objectives

- Understand the key differences between HTML and JSX
- Practice converting HTML structures to valid JSX
- Gain familiarity with JSX syntax and rules

Good luck!
