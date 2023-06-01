const jsdoc2md = require("jsdoc-to-markdown");
const { join } = require("path");

jsdoc2md.render({ files: join(__dirname, "src/lib/computedTextWidth.ts") }).then(console.log);
