<script>
  let boundVariable = $state('');
</script>

<input type="text" bind:value={boundVariable} />
<p>Hello, {boundVariable}!</p>

<style>
  input {
    padding: 0.5rem;
    font-size: 0.875rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  p {
    font-size: 0.875rem;
    color: #333;
    margin: 0 !important;
  }
</style>
