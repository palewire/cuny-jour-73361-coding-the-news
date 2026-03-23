<script lang="ts">
  let boundVariable: string = $state('');
</script>

<input type="text" bind:value={boundVariable} />
<p>Hello, {boundVariable}!</p>

<style>
  input {
    padding: 0.5rem;
    font-size: 0.875rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
  }

  p {
    font-size: 0.875rem;
    color: var(--color-dark-gray);
    margin: 0 !important;
  }
</style>
