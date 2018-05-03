const { Parser } = require("./src/Parser");
const { icsExporter } = require("./src/icsExporter");

const generator = (icsPath, filePaths) => {

  let parser = new Parser();
  filePaths.map(path => parser.parse(path))

  let ics = new icsExporter(parser.events);
  ics.ics(icsPath);

}


// https://signalwerk.github.io/calendar/PublicHoliday.ics
generator(
  "./public/PublicHoliday.ics",
  [
    "./data/sechseläuten.txt",
  ]
)

// https://signalwerk.github.io/calendar/PublicHoliday.ics
generator(
  "./public/Physio.ics",
  [
    "./data/Physio/Therapieplan-618417.txt",
  ]
)

