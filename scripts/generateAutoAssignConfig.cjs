const { join } = require("node:path");
const { readFileSync, writeFileSync } = require("node:fs");
const { Octokit } = require("octokit");
const YAML = require("yaml");

const dotenv = require("dotenv");
dotenv.config({ path: join(process.cwd(), ".env.vault") });

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is required");
}

const ignoreList = ["ni-team-bot"];

const templateFile = join(process.cwd(), "scripts/templates/auto_assign.yml");
const targetConfigFile = join(process.cwd(), ".github/auto_assign.yml");

const octokit = new Octokit({
  auth: process.env.BOT_TOKEN,
});

/**
 * 从维护团队中获取所有的reviewer
 * */
async function getTeamReviewers() {
  const { data } = await octokit.request("GET /orgs/{org}/teams/{team_slug}/members", {
    org: "NI-Web-Infra-Team",
    team_slug: "maintainer",
  });
  return data.filter((user) => !ignoreList.includes(user.login)).map((user) => user.login);
}

/**
 * 生成包含所有reviewer的配置文件
 * */
function generateConfigFile(reviewers) {
  const template = YAML.parse(readFileSync(templateFile, "utf8"));
  writeFileSync(targetConfigFile, YAML.stringify({ ...template, reviewers }), "utf-8");
}

async function main() {
  const reviewers = await getTeamReviewers();
  generateConfigFile(reviewers);
}

main().catch(console.error);
