import { categoryNumberMap, getStreams } from "$lib/server/twitch.js"
import { createEmoteUrlMap } from "$lib/emote-url-map.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let streams = await getStreams(12, categoryNumberMap.get(params.slug));
  let emoteUrlMap = createEmoteUrlMap();
  return { streams, emoteUrlMap }
}

