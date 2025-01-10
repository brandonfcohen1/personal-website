type Project = {
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Clean and Green Philly",
    description:
      "I was the founding engineer for non-profit open source project to use vacant property mapping to prevent gun violence.",
    url: "https://cleanandgreenphilly.org/",
  },
  {
    title: "GnarMap",
    description:
      "I built a map to view realtime snow depths and observations from NOAA.",
    url: "https://gnarmap.com",
  },
  {
    title: "OpenParkingMap",
    description:
      "I built map to visualize the (over)supply of surface parking.",
    url: "https://openparkingmap.com",
  },
  {
    title: "PhillyTrails",
    description: "I built a map of running and biking trails in Philadelphia.",
    url: "https://phillytrails.com",
  },
];
