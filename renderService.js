import { part1 } from "./featureA/part1.js";
import { part2 } from "./featureA/part2.js";
import { part3 } from "./featureA/part3.js";
import { fb } from "./featureB/featureB.js";

export function renderItem(description) {
  const text = document.createElement("h4");
  text.append(description);

  const item = document.createElement("div");
  item.className = "item";
  item.append(text);

  return item;
}

export function renderSection(descriptions, sectionName = null) {
  const section = document.createElement("div");
  section.className = "section";

  if (sectionName) {
    const header = document.createElement("h3");
    header.append(sectionName);
    section.appendChild(header);
  }

  descriptions.forEach((description) => {
    const item = renderItem(description);
    section.appendChild(item);
  });

  return section;
}

export function renderFeatureA() {
  const container = document.getElementById("featureA-container");

  const sections = [
    renderSection(part1, "Part1"),
    renderSection(part2, "Part2"),
    renderSection(part3, "Part3"),
  ];

  sections.forEach((section) => {
    container.appendChild(section);
  });
}

export function renderFeatureB() {
  const container = document.getElementById("featureB-container");

  const section = renderSection(fb);
  container.appendChild(section);
}
