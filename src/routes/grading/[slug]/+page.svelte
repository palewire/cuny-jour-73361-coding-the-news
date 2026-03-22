<script>
  let { data } = $props();

  const Content = $derived(data.content);
</script>

<Content
  previousGrading={data.previousGrading}
  nextGrading={data.nextGrading}
/>
