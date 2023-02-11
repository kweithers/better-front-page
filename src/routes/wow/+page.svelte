<script>
  /** @type {import('./$types').PageData} */ export let data;
  // import Button from "./Button.svelte";
  import Row from "../Row.svelte";
  import { createMap } from "../EmoteURLMap.js";
  import { Client } from "tmi.js";

  let m = createMap();

  // const ws = new WebSocket("ws://localhost:3000/ws");

  // ws.onopen = function () {
  //   for (let i = 0; i < data.streams.length; i++) {
  //     let s = data.streams[i].user_name;
  //     s = s.replace("#", "");
  //     ws.send(s);
  //   }
  // };

  // ws.onmessage = function (evt) {
  //   var received_msg = evt.data;
  //   const arr = received_msg.split(":");
  //   const id = arr[0];
  //   const emote = arr[1];

  //   console.log(emote);
  //   var node = document.createElement("img");
  //   node.setAttribute("src", m.get(emote));
  //   node.setAttribute("id", received_msg);
  //   document.getElementById(id).prepend(node);
  // };

  let streams = [];
  for (let i = 0; i < data.streams.length; i++) {
    let s = data.streams[i].user_name;
    s = s.replace("#", "");
    streams.push(s);
  }
  const client = new Client({
    channels: streams,
  });

  client.connect();

  client.on("message", (channel, tags, message, self) => {
    let channel_parsed = channel.replace("#", "");
    // console.log(`${channel_parsed}: ${message}`);

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
</script>

<body>
  {#each data.streams as { user_name, url }}
    <Row {user_name} image_url={url} />
  {/each}
</body>
