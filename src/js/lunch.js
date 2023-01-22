import ICalParser from "ical-js-parser";
import dayjs from "dayjs";

fetch("https://frosty-night-buzz.evan.workers.dev/https://api.veracross.com/spa/v1/events.ics?event_types=109")
  .then((res) => res.text())
  .then(
    (ical) =>
      ICalParser.toJSON(ical)
        .events.filter(
          (event) => event.dtstart.value == dayjs().format("YYYYMMDD")
        )[0]?.description
        .replaceAll(/ *\\n/g, ", ")
      ?? "Lunch not served"
  )
  .then((meal) => document.querySelector("#lunch").textContent = `Lunch today: ${meal}`)
