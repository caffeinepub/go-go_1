import { useQuery } from "@tanstack/react-query";
import type { ComicStrip } from "../backend";
import { useActor } from "./useActor";

export function useGetComicStrips() {
  const { actor, isFetching } = useActor();

  return useQuery<ComicStrip[]>({
    queryKey: ["comicStrips"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getComicStrips();
    },
    enabled: !!actor && !isFetching,
  });
}
