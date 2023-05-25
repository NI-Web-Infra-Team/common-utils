import fs from "fs";
import dayjs from "dayjs";

const buildTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

const version = JSON.parse(fs.readFileSync("package.json")).version;
const packageName = JSON.parse(fs.readFileSync("package.json")).name;
// 拼接 banner信息
const bannerText = `export default \`/**\n * ${packageName}\n * version: v${version}\n * build time: ${buildTime}\n */\``;
// 写入文件
fs.writeFile("build/banner.ts", bannerText, (error) => {
  if (error) {
    console.error("banner update error!");
  } else {
    console.log("🎉 banner update success!");
  }
});
