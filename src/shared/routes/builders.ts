export const routeBuilders = {
  home: () => "/",

  tests: {
    root: () => "/tests",
    detail: (id: number | string) => `/tests/${id}`,
  },
} as const;
