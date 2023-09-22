"use strict"

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require("@frctl/fractal").create())

const mandelbrot = require("@frctl/mandelbrot")
const myCustomisedTheme = mandelbrot({
  lang: "ko",
  skin: "black",
  nav: ["search", "docs", "components"],
  navigation: "split",
  panels: ["html", "info", "notes"],
  // panels: ["html", "view", "context", "resources", "info", "notes"],
  // styles: ["http://mega-corp.com/css/custom-mandelbrot-stylesheet.css", "default", "/another/stylesheet.css"],
  // highlightStyles: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css",
  // scripts: ["http://mega-corp.com/js/custom-mandelbrot-scripts.js", "default", "/another/script.js"],

  labels: {
    search: {
      placeholder: "궁금이...",
    },
  },

  information: [
    {
      label: "Version",
      value: require("./package.json").version,
    },
    {
      label: "Built on",
      value: new Date(),
      type: "time", // Outputs a <time /> HTML tag
      format: value => {
        return value.toLocaleDateString("en")
      },
    },
  ],
})

// info: 'Information',
// builtOn: 'Built on',
// search: {
//     label: 'Search',
//     placeholder: 'Search…',
//     clear: 'Clear search',
// },
// tree: {
//     collapse: 'Collapse tree',
// },
// components: {
//     handle: 'Handle',
//     tags: 'Tags',
//     variants: 'Variants',
//     context: {
//         empty: 'No context defined.',
//     },
//     notes: {
//         empty: 'No notes defined.',
//     },
//     preview: {
//         label: 'Preview',
//         withLayout: 'With layout',
//         componentOnly: 'Component only',
//     },
//     path: 'Filesystem Path',
//     references: 'References',
//     referenced: 'Referenced by',
//     resources: {
//         file: 'File',
//         content: 'Content',
//         previewUnavailable: 'Previews are currently not available for this file type.',
//         url: 'URL',
//         path: 'Filesystem Path',
//         size: 'Size',
//     },
// },
// panels: {
//     html: 'HTML',
//     view: 'View',
//     context: 'Context',
//     resources: 'Resources',
//     info: 'Info',
//     notes: 'Notes',
// },

/* Set the title of the project */
fractal.set("project.title", "Ring System component library")

fractal.web.theme(myCustomisedTheme)

fractal.web.set("static.path", __dirname + "/public")
fractal.web.set("builder.dest", __dirname + "/build")

fractal.docs.set("path", __dirname + "/src/docs")
fractal.components.set("path", __dirname + "/src/components")

// fractal.components.set("ext", ".handlebars")
// fractal.docs.set("ext", ".html")
// fractal.components.set("default.preview", "@preview");

// fractal.components.set("default.status", "wip")
// fractal.docs.set("default.status", "draft")
// fractal.components.set("statuses", {
//   doing: {
//     label: "Doing",
//     description: "I'm doing it.",
//     color: "#F00",
//   },
//   done: {
//     label: "Done",
//     description: "I'm done with this.",
//     color: "green",
//   },
// })

// fractal.components.set('statuses.prototype.color', 'pink');
// fractal.docs.set('statuses.ready.label', 'Good to go!');

// 임시
// fractal.web.set("static.mount", "public");
// fractal.components.set("default.context", {
//   background: "sparkly",
// })
