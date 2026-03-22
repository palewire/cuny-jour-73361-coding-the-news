<script lang="ts">
  let { data } = $props();

  const Content = $derived(data.content);
</script>

<Content previousScript={data.previousScript} nextScript={data.nextScript} />
