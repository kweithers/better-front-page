import { createEmoteUrlMap } from "$lib/emote-url-map.js";
import { getStreamsForUser } from "$lib/twitch-user.js"

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
  console.log(document.location);
  let access_token = window.location.hash.split("&")[0].split("=")[1];

  console.log(access_token);
  let emoteUrlMap = createEmoteUrlMap();
  let streams = getStreamsForUser(access_token);
  return { streams, emoteUrlMap }
}
