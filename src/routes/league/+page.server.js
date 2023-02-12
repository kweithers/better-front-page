import { getStreams } from "$lib/server/twitch.js"
import { createEmoteUrlMap } from "$lib/server/emote-url-map.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let streams = await getStreams(12, 21779);
  let emoteUrlMap = createEmoteUrlMap();
  return { streams, emoteUrlMap }
}
