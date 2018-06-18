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
    "./data/Feiertage/feiertage.txt",
    "./data/Feiertage/knabenschiessen.txt",
    "./data/Feiertage/sechseläuten.txt",
  ]
)

// https://signalwerk.github.io/calendar/PublicHoliday.ics
generator(
  "./public/Physio.ics",
  [
    "./data/Physio/Therapieplan-618417.txt",
  ]
)

// https://signalwerk.github.io/calendar/projekt-woche-sfgz.ics
generator(
  "./public/projekt-woche-sfgz.ics",
  [
    "./data/sfgz/projekt-woche",
  ]
)

