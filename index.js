const { Parser } = require("./src/Parser");
const { icsExporter } = require("./src/icsExporter");

const generator = (icsPath, filePaths) => {
  let parser = new Parser();
  filePaths.map((path) => parser.parse(path));

  let ics = new icsExporter(parser.events);
  ics.ics(icsPath);
};

// https://alexjenter.github.io/calendar/Trash.ics
generator("./public/Trash.ics", ["./data/Entsorgung/index.txt"]);

// https://alexjenter.github.io/calendar/artemis-idh.ics
generator("./public/artemis-idh.ics", ["./data/other/diana_stundenplan.txt"]);
