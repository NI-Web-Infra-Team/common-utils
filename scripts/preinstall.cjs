if (!/corepack/.test(process.env.COREPACK_ROOT || "")) {
  console.warn(`\x1b[43m 检测到 corepack 未开启，建议运行以下命令开启 corepack \x1b[0m`);
  console.log("\x1b[42m corepack enable \x1b[0m");
}

if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(`\n\x1b[41m 此仓库要求使用 pnpm 作为包管理器！请使用 corepack 或手动安装 pnpm！ \x1b[0m\n`);
  process.exit(1);
}
