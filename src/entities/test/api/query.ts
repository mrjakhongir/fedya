import { useQuery } from "@tanstack/react-query";
import testApi from "./client";

export const useTests = (params: Record<string, string | null>) => {
  return useQuery({
    queryKey: ["tests", params],
    queryFn: () => testApi.list(params),
  });
};

export const useTest = (id?: string) => {
  return useQuery({
    queryKey: ["test", id],
    queryFn: () => testApi.single(id),
    enabled: !!id,
  });
};

// export function useInfiniteTests(params: string) {
//   return useInfiniteQuery({
//     queryKey: ["tests", params],

//     queryFn: () => testApi.list(params),

//     initialPageParam: 1, // ⭐ REQUIRED for v5

//     getNextPageParam: (lastPage) =>
//       lastPage.hasNextPage ? lastPage.nextPage : undefined,

//     refetchOnWindowFocus: false,
//     retry: 1,
//     staleTime: 1000 * 60 * 2, // 2 min cache is enough
//   });
// }
