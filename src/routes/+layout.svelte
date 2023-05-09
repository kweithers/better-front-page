<script>
    import "./styles.css";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    /** @type {import('./$types').LayoutData} */ export let data;
    let current = "";

    inject({ mode: dev ? "development" : "production" });
</script>

<div class="head-head">
    <div class="head-row">
        <a on:click={() => (current = "")} href="/"  class="title">Better Front Page</a>
    </div>
    <div class="head-row">
        {#each data.sections as section}
            <a
                class:selected={current === section.slug}
                on:click={() => (current = section.slug)}
                class="menu-item"
                href="/{section.slug}">{section.title}</a
            >
        {/each}
    </div>
    <div class="head-row">
        {#if data.pathname == "custom"}
            <p class="menu-item" id="custom">
                Thank you for authenticating. Enjoy!
            </p>
        {:else}
            <a
                class="menu-item"
                id="login"
                href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=inzsbvgt26ismaczn8ndeq8lq6gueh&redirect_uri=https://better-front-page.vercel.app/custom&scope=user%3Aread%3Afollows"
                >Authenticate with Twitch to see your followed streamers</a
            >
        {/if}
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
    }
    #custom {
        font-style: italic;
    }
</style>
