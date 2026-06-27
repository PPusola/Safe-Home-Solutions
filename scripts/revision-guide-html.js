const fs = require("fs");

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error("Usage: node revision-guide-html.js INPUT.md OUTPUT.html");
  process.exit(1);
}

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const inline = (value) => {
  let result = escapeHtml(value);
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return result;
};

const lines = fs.readFileSync(inputPath, "utf8").split(/\r?\n/);
const body = [];
let paragraph = [];
let inCode = false;
let codeLanguage = "";
let code = [];
let listType = null;

const flushParagraph = () => {
  if (paragraph.length) {
    body.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  }
};

const closeList = () => {
  if (listType) {
    body.push(`</${listType}>`);
    listType = null;
  }
};

const isTableDivider = (line) =>
  /^\s*\|?[\s:|-]+\|[\s:|-]*\|?\s*$/.test(line);

for (let index = 0; index < lines.length; index += 1) {
  const line = lines[index];

  if (line.startsWith("```")) {
    flushParagraph();
    closeList();
    if (!inCode) {
      inCode = true;
      codeLanguage = line.slice(3).trim();
      code = [];
    } else {
      body.push(
        `<pre data-language="${escapeHtml(codeLanguage)}"><code>${escapeHtml(
          code.join("\n")
        )}</code></pre>`
      );
      inCode = false;
    }
    continue;
  }

  if (inCode) {
    code.push(line);
    continue;
  }

  if (
    line.includes("|") &&
    index + 1 < lines.length &&
    isTableDivider(lines[index + 1])
  ) {
    flushParagraph();
    closeList();
    const tableLines = [line];
    index += 2;
    while (index < lines.length && lines[index].includes("|")) {
      tableLines.push(lines[index]);
      index += 1;
    }
    index -= 1;

    const cells = (row) =>
      row
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim());

    const header = cells(tableLines[0]);
    body.push("<table><thead><tr>");
    header.forEach((cell) => body.push(`<th>${inline(cell)}</th>`));
    body.push("</tr></thead><tbody>");
    tableLines.slice(1).forEach((row) => {
      body.push("<tr>");
      cells(row).forEach((cell) => body.push(`<td>${inline(cell)}</td>`));
      body.push("</tr>");
    });
    body.push("</tbody></table>");
    continue;
  }

  const heading = line.match(/^(#{1,4})\s+(.+)$/);
  if (heading) {
    flushParagraph();
    closeList();
    const level = heading[1].length;
    body.push(`<h${level}>${inline(heading[2])}</h${level}>`);
    continue;
  }

  const unordered = line.match(/^\s*[-*]\s+(.+)$/);
  const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
  if (unordered || ordered) {
    flushParagraph();
    const desiredType = unordered ? "ul" : "ol";
    if (listType !== desiredType) {
      closeList();
      listType = desiredType;
      body.push(`<${listType}>`);
    }
    body.push(`<li>${inline((unordered || ordered)[1])}</li>`);
    continue;
  }

  if (!line.trim()) {
    flushParagraph();
    closeList();
    continue;
  }

  paragraph.push(line.trim());
}

flushParagraph();
closeList();

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page { size: Letter; margin: 0.55in 0.58in 0.62in; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: #18242d;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-size: 9.4pt;
    line-height: 1.32;
  }
  h1 {
    margin: 0 0 16pt;
    padding: 18pt 20pt;
    color: #ffffff;
    background: #176c73;
    font-size: 24pt;
    line-height: 1.08;
    page-break-after: avoid;
  }
  h2 {
    margin: 18pt 0 8pt;
    padding: 6pt 9pt;
    color: #ffffff;
    background: #237f80;
    font-size: 15pt;
    line-height: 1.1;
    page-break-after: avoid;
  }
  h3 {
    margin: 14pt 0 5pt;
    padding-bottom: 3pt;
    color: #185c63;
    border-bottom: 1.5pt solid #d0dadd;
    font-size: 12pt;
    line-height: 1.15;
    page-break-after: avoid;
  }
  h4 {
    margin: 10pt 0 4pt;
    color: #a15c13;
    font-size: 10.5pt;
    line-height: 1.15;
    page-break-after: avoid;
  }
  p { margin: 0 0 6pt; }
  strong { color: #152f3a; }
  code {
    color: #8e3d15;
    font-family: "SF Mono", Menlo, Consolas, monospace;
    font-size: 8.6pt;
  }
  pre {
    margin: 4pt 0 8pt;
    padding: 7pt 9pt;
    color: #10212b;
    background: #eef4f5;
    border-left: 3pt solid #d28a2e;
    font-family: "SF Mono", Menlo, Consolas, monospace;
    font-size: 7.9pt;
    line-height: 1.22;
    white-space: pre-wrap;
    page-break-inside: avoid;
  }
  pre code { color: inherit; font-size: inherit; }
  ul, ol { margin: 2pt 0 8pt 18pt; padding: 0; }
  li { margin: 0 0 2.5pt; padding-left: 2pt; }
  table {
    width: 100%;
    margin: 5pt 0 10pt;
    border-collapse: collapse;
    font-size: 8.4pt;
    page-break-inside: avoid;
  }
  th {
    padding: 5pt 6pt;
    color: #ffffff;
    background: #176c73;
    border: 0.5pt solid #176c73;
    text-align: left;
  }
  td {
    padding: 4pt 6pt;
    border: 0.5pt solid #cbd6d9;
    vertical-align: top;
  }
  tr:nth-child(even) td { background: #f5f8f8; }
</style>
</head>
<body>${body.join("\n")}</body>
</html>`;

fs.writeFileSync(outputPath, html);
