import { getStreams } from "$lib/server/twitch.js"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let streams = await getStreams(12, 18122);
  return { streams }
}
export const ssr = false;
