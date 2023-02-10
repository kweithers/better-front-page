<script>
    import "./styles.css";
    /** @type {import('./$types').LayoutData} */ export let data;
</script>

<div class="head-row">
    <a href="/" class="title">KEKW.pro</a>
    <a href="https://www.youtube.com/watch?v=WDiB4rtp1qw&t=41s"><img src="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/2x" alt='risitas' /></a>

    {#each data.sections as section}
        <a on:click class="menu-item" href="/{section.slug}">{section.title}</a>
    {/each}
</div>

<slot />

<!-- <footer>
    <a href="https://www.rust-lang.org/">
        <img
            src="https://rustacean.net/assets/rustacean-orig-noshadow.svg"
            height="34"
            width="53"
            alt="ferris the crab"
        /></a
    >
    <p id='builtwith'>
        Built with <a href="https://github.com/tokio-rs/axum">Axum</a> and
        <a href="https://svelte.dev/">Svelte</a>
    </p>
</footer> -->
