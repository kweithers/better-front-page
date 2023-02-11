<script>
  /** @type {import('./$types').PageData} */ export let data;
  import Button from "./Button.svelte";
  import Row from "./Row.svelte";
  import { Client } from "tmi.js";

  let streams = [];
  for (let i = 0; i < data.streams.length; i++) {
    let s = data.streams[i].user_name;
    s = s.replace('#','');
    streams.push(s);
  }
  console.log(streams);
  const client = new Client({
    channels: streams,
  });

  client.connect();

  client.on("message", (channel, tags, message, self) => {
    let channel_parsed = channel.replace('#','');
    console.log(`${channel_parsed}: ${message}`);

    var node = document.createElement("img");
    node.setAttribute(
      "src",
      "https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/2x"
    );
    document.getElementById(channel_parsed).prepend(node);
  });
</script>

<body>
  {#each data.streams as { user_name, url }}
    <Row {user_name} image_url={url} />
  {/each}
</body>
