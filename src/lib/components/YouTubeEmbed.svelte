<script lang="ts">
  let {
    url,
    title = 'YouTube video',
    allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  } = $props<{ url: string; title?: string; allow?: string }>();
</script>

<div class="youtube-embed" data-title={title}>
  <iframe src={url} {title} {allow} allowfullscreen loading="lazy"></iframe>
</div>

<style>
  .youtube-embed {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 6px;
    overflow: hidden;
    background: var(--color-black);
  }

  .youtube-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
