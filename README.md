# Project WASP

Project WASP (Watering Atmospheric Self-Irrigating Planter) is a web presentation for an autonomous planter designed to sustain plant life using atmospheric water harvesting, automated soil-moisture control, UV lighting, and solar power.

The site summarizes the research question, design objectives, hardware and software methods, experimental setup, statistical analysis, results, and cost analysis for the Project WASP system.

## Live Site

[https://rb3572.github.io](https://rb3572.github.io)

## Project Overview

Project WASP explores whether a fully autonomous, self-contained agricultural system can sustain plant growth long-term by collecting atmospheric water and regulating soil moisture and light exposure. The prototype combines:

- Atmospheric water harvesting through a dehumidifier
- Soil-moisture sensing and automated watering
- UV LED lighting to support plant growth
- Solar-powered electrical components
- 3D-printed custom housing and components
- A touchscreen interface for plant-specific profiles

In proof-of-concept trials, the system maintained plant-specific soil moisture targets and supported plant growth without human intervention.

## Repository Contents

- `index.html` - main presentation structure
- `styles.css` - visual layout, horizontal scrolling, typography, and media styling
- `myscript.js` - background video and arrow-animation behavior
- `images/` - project images, charts, and video assets
- `fonts/` - custom font files used by the site

## Running Locally

Because this is a static site, it can be viewed by opening `index.html` in a browser. For a local server:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Authors

Rishi Bhargava and Humza Murad