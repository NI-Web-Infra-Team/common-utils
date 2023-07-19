const { resolve } = require("node:path");
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require("node:fs");

const unitSummaryPath = resolve(process.cwd(), "unit-coverage/coverage-summary.json");
const e2eSummaryPath = resolve(process.cwd(), "e2e-coverage/coverage-summary.json");
const unitFinalPath = resolve(process.cwd(), "unit-coverage/coverage-final.json");
const e2eFinalPath = resolve(process.cwd(), "e2e-coverage/coverage-final.json");
const coverageDir = resolve(process.cwd(), "coverage/");

function main() {
  try {
    const unitSummary = JSON.parse(readFileSync(unitSummaryPath, "utf-8"));
    const e2eSummary = JSON.parse(readFileSync(e2eSummaryPath, "utf-8"));
    const summary = {
      ...unitSummary,
      ...e2eSummary,
      total: mergeTotalObj(unitSummary.total, e2eSummary.total),
    };

    const unitFinal = JSON.parse(readFileSync(unitFinalPath, "utf-8"));
    const e2eFinal = JSON.parse(readFileSync(e2eFinalPath, "utf-8"));
    const final = { ...unitFinal, ...e2eFinal };

    if (!existsSync(coverageDir)) {
      mkdirSync(coverageDir);
    }
    existsSync(resolve(coverageDir, "coverage-summary.json"));
    existsSync(resolve(coverageDir, "coverage-final.json"));

    writeFileSync(resolve(process.cwd(), "coverage/coverage-summary.json"), JSON.stringify(summary));
    writeFileSync(resolve(process.cwd(), "coverage/coverage-final.json"), JSON.stringify(final));
  } catch (e) {
    console.error(e);
  }
}

function mergeTotalObj(...totalObjs) {
  const totalObj = {};
  totalObjs.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (totalObj[key]) {
        Object.entries(value).forEach(([childKey, childValue]) => {
          if (childKey === "pct") return;
          const preNum = totalObj[key][childKey] ?? 0;
          totalObj[key][childKey] = preNum + childValue;
        });
      } else {
        totalObj[key] = { ...value, pct: undefined };
      }
    });
  });
  Object.keys(totalObj).forEach((key) => {
    if (totalObj[key].total === 0) {
      totalObj[key].pct = 0;
      return;
    }
    totalObj[key].pct = Number(
      (((totalObj[key].covered - totalObj[key].skipped) / totalObj[key].total) * 100).toFixed(2)
    );
  });
  return totalObj;
}
main();
