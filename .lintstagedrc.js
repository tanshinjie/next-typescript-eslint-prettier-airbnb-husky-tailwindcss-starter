const path = require("path");

module.exports = {
  "*.(ts|tsx)": () => "tsc --noEmit",
  "*.(ts|tsx|js)": (filenames) => [
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
  ],
  "*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,
};
