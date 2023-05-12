<script>
  export let language;
</script>

{#if language == "en"}
  🇺🇸
{:else if language == "es"}
  🇪🇸
{:else if language == "pt"}
  🇧🇷
{:else if language == "fr"}
  🇫🇷
{:else if language == "ru"}
  🇷🇺
{:else if language == "de"}
  🇩🇪
{:else if language == "ja"}
  🇯🇵
{:else if language == "ko"}
  🇰🇷
{:else if language == "zh"}
  🇨🇳
{:else if language == "it"}
  🇮🇹
{:else if language == "tr"}
  🇹🇷
{:else if language == "pl"}
  🇵🇱
{:else if language == "th"}
  🇹🇭
{:else}
  🏴‍☠️
{/if}