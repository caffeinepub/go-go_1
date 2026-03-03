import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ComicStrip } from '../backend';

export function useGetComicStrips() {
  const { actor, isFetching } = useActor();

  return useQuery<ComicStrip[]>({
    queryKey: ['comicStrips'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getComicStrips();
    },
    enabled: !!actor && !isFetching,
  });
}
