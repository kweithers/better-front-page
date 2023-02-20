import { createEmoteUrlMap } from "$lib/emote-url-map.js";
import { getStreamsForUser } from "$lib/twitch-user.js"

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
  let access_token = window.location.hash.split("&")[0].split("=")[1];

  let emoteUrlMap = createEmoteUrlMap();
  let streams = getStreamsForUser(access_token);
  return { streams, emoteUrlMap }
}
