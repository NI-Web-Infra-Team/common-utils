const { Octokit } = require("octokit");

//需要分配的人数
const COUNT = 2;

const auth = process.env.BOT_TOKEN?.trim();
const owner = process.env.OWNER?.trim();
const repo = process.env.REPO?.trim();
const pull_number = process.env.PULL_NUMBER?.trim();

const octokit = new Octokit({
  auth,
});

/**
 * 从维护团队中获取所有的reviewer
 * */
async function getTeamReviewers() {
  const { data } = await octokit.request("GET /orgs/{org}/teams/{team_slug}/members", {
    org: "NI-Web-Infra-Team",
    team_slug: "reviewers",
  });
  return data.map((user) => user.login);
}

/**
 * 获取已经被分配的 reviewer
 * @returns
 */
async function getRequestedReviewers() {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", {
    owner,
    repo,
    pull_number,
  });
  return data;
}

/**
 * 设置reviewer
 */
async function setRequestedReviewers(reviewers) {
  return await octokit.request("POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", {
    owner,
    repo,
    pull_number,
    reviewers,
  });
}

/**
 * 从数组中随机取指定个数的元素
 * @returns
 */
function getRandomArrayElements(arr, count) {
  let shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

async function main() {
  const { teams, users } = await getRequestedReviewers();
  if (teams.length || users.length) return;
  await setRequestedReviewers(getRandomArrayElements(await getTeamReviewers(), COUNT));
}

main().catch(console.error);
