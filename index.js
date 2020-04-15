const { Parser } = require("./src/Parser");
const { icsExporter } = require("./src/icsExporter");

const generator = (icsPath, filePaths) => {
  let parser = new Parser();
  filePaths.map((path) => parser.parse(path));

  let ics = new icsExporter(parser.events);
  ics.ics(icsPath);
};

// https://signalwerk.github.io/calendar/Trash.ics
generator("./public/Trash.ics", ["./data/Entsorgung/index.txt"]);
