<script>
    import "./styles.css";
    /** @type {import('./$types').LayoutData} */ export let data;
    let current = "";
</script>

<div class="head-head">
    <div class="head-row">
        <a on:click={() => (current = "")} href="/" class="title">KEKW.pro</a>
        <a href="https://www.youtube.com/watch?v=WDiB4rtp1qw&t=41s"
            ><img
                src="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/2x"
                alt="risitas"
            /></a
        >

        {#each data.sections as section}
            <a
                class:selected={current === section.slug}
                on:click={() => (current = section.slug)}
                class="menu-item"
                href="/{section.slug}">{section.title}</a
            >
        {/each}
    </div>
    <div class="head-login">
        <a
            class="menu-item"
            id="login"
            href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=inzsbvgt26ismaczn8ndeq8lq6gueh&redirect_uri=http://localhost:5173/custom&scope=user%3Aread%3Afollows"
            >Login with Twitch to see your followed streamers</a
        >
    </div>
</div>

<slot />

<footer>
    This is a hobby project that is in no way affiliated with Twitch.
</footer>

<style>
    .selected {
        text-decoration: underline;
    }
    #login {
        font-style: italic;
        text-decoration: underline;
        float: right;
    }
</style>
