export const routeBuilders = {
  home: () => "/",

  tests: {
    root: () => "/tests",
    search: () => "/tests/search",
    create: () => "/tests/create",
    playground: (id: number | string) => `/tests/${id}/playground`,
    detail: (id: number | string) => `/tests/${id}`,
  },
} as const;
