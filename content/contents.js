const fs = require("fs");
const path = require('path');

const articles = [
  /* "What-s React", */
  /*"JSX",*/
  "JSX is not Html (the major differences)",
  "how to write proper JSX",
  "HTML properties",
  "style property",
  /* "Building Components", */
  "How to write a simple component",
  "How to Communicate between Props",
  "One way Communication",
  "Splitting components into multiple components",
  /* "Working with Events", */
  "What’s an event in React",
  "onClick",
  "onChange",
  /* "React State", */
  "What’s a state",
  "Class vs Functional Component",
  "useState Hook",
  /*  "How to Create a Simple Form", */
  "Controlled input (value/defaultValue)",
  "Select, radio and checkbox",
  /*  "Conditional Content", */
  "if else condition",
  "ternary condition",
  /*  "Let’s build a list", */
  "How to build a List using Array’s method map()"
];

const toSlug = string => string.replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/\s+/g, '-')
  .replace("'", "")
  .toLowerCase();

articles.forEach(
  (article, index) => {
    const filename = `${toSlug(article)}.mdx`;
    const content = `---
title: ${article}
metaTitle: ${article}
metaDescription: ${article}
---
`;

    fs.writeFile(filename, content, function (err) {
      if (err) return cb(err);
    });
  });
