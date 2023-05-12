<script>
  import Flag from "./Flag.svelte";

  export let image_url;
  export let user_name;
  export let viewer_count;
  export let language;
  export let uptime;

  function milliToHHMMSS(duration) {
    var seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt(duration / (1000 * 60 * 60));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  var tick = milliToHHMMSS(Date.now() - uptime);
  $: {
    setInterval(() => {
      tick = milliToHHMMSS(Date.now() - uptime);
    }, 1000);
  }
</script>

<div class="row" id="row-{user_name}">
  <div class="streamer-card">
    <div>
      {user_name}
    </div>
    <div>
      <img
        class="smolbutton"
        src="https://em-content.zobj.net/thumbs/240/apple/325/large-red-circle_1f534.png"
        alt="red button"
      />
      {viewer_count}
    </div>
    <div>
      <Flag {language} />
      {tick}
    </div>
  </div>
  <a
    href="https://twitch.tv/{user_name}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      title={user_name}
      src={image_url}
      alt="{user_name}'s profile picture"
    />
  </a>
  <div class="scroller" id={user_name} />
</div>

<style>
  .streamer-card {
    flex-direction: column;
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    color: white;
    width: 100px;
    flex: 0 0 auto;
  }
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid black;
  }
  .smolbutton {
    width: 10px;
    height: 10px;
  }
</style>
