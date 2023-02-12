<script>
    import "./styles.css";
    /** @type {import('./$types').LayoutData} */ export let data;
</script>

<div class="head-row">
    <a href="/" class="title">KEKW.pro</a>
    <a href="https://www.youtube.com/watch?v=WDiB4rtp1qw&t=41s"
        ><img
            src="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/2x"
            alt="risitas"
        /></a
    >

    {#each data.sections as section}
        <a class="menu-item" href="/{section.slug}">{section.title}</a>
    {/each}
</div>

<slot />

<footer>
    This is a hobby project that is in no way affiliated with Twitch.
</footer>
