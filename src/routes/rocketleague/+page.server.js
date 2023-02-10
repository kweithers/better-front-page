import { getStreams } from "$lib/server/twitch.js"
import { Client } from "tmi.js"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let streams = await getStreams(12, 30921);

  // const client = new Client({
  //   channels: ['staysafetv']
  // });
  
  // client.connect();
  
  // client.on('message', (channel, tags, message, self) => {
  //   // "Alca: Hello, World!"
  //   console.log(`${tags['display-name']}: ${message}`);
  // });

  
  return { streams }
}

