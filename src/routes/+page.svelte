<script>
  /** @type {import('./$types').PageData} */ export let data;
  import Row from "./Row.svelte";
  import { Client } from "tmi.js";
  import { onMount } from "svelte";

  let m = data.emoteUrlMap;

  let streams = [];
  for (let i = 0; i < data.streams.length; i++) {
    streams.push(data.streams[i].user_name);
  }

  const client = new Client({
    channels: streams,
  });

  client.connect();

  onMount(() => {
    client.on("message", (channel, tags, message, self) => {
      let channel_parsed = channel.replace("#", "");
      let tokens = message.split(" ");

      for (let i = 0; i < tokens.length; i++) {
        if (m.has(tokens[i])) {
          var node = document.createElement("img");
          node.setAttribute("src", m.get(tokens[i]));
          node.setAttribute("title", tokens[i]);
          document.getElementById(channel_parsed).prepend(node);
          break;
        }
      }
    });
  });
</script>

<body>
  {#each data.streams as { user_name, url, viewer_count }}
    <Row {user_name} image_url={url} {viewer_count} />
  {/each}
</body>
