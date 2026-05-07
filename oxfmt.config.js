import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  sortPackageJson: false,
  sortTailwindcss: false,

  sortImports: {
    newlinesBetween: false,
    sortSideEffects: false,
    groups: [
      ["type-builtin", "value-builtin"],
      "react-libs",
      ["type-external", "value-external"],
      ["type-import", "value-import"],
      "my-libs",
      // { newlinesBetween: true },
      "alias-libs",
      ["value-internal", "type-internal"],
      ["type-parent", "value-parent"],
      ["type-sibling", "value-sibling"],
      ["type-index", "value-index"],
      "unknown",
    ],
    customGroups: [
      {
        groupName: "react-libs",
        elementNamePattern: ["react", "react-*", "react-*/**"],
      },
      {
        groupName: "my-libs",
        elementNamePattern: ["@hitachivantara/**", "@pentaho/**", "@zettca/**"],
      },
      {
        groupName: "alias-libs",
        elementNamePattern: ["~/**", "@/**", "#/**"],
      },
    ],
  },
});
