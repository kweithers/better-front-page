import { getStreams } from "$lib/server/twitch.js"
import { getStreamsAllCategories } from "$lib/server/twitch.js"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let streams = await getStreamsAllCategories(12);
  return { streams }
}
export const ssr = false;

