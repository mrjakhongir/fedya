export const paths = {
  home: "/",
  onboarding: "/onboarding",

  tests: {
    root: "/tests",
    search: "/tests/search",
    create: "/tests/create",
    playground: "/tests/:id/playground",
    detail: "/tests/:id",
  },
} as const;
