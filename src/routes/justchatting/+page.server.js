import { getStreams } from "$lib/server/twitch.js"
import { createEmoteUrlMap } from "$lib/emote-url-map.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let streams = await getStreams(12, 509658);
  let emoteUrlMap = createEmoteUrlMap();
  return { streams, emoteUrlMap }
}
