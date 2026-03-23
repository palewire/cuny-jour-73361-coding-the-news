<script lang="ts">
  let { quote, attribution } = $props<{ quote: string; attribution: string }>();
</script>

<blockquote>
  <p>"{quote}"</p>
  <cite>— {attribution}</cite>
</blockquote>

<style>
  blockquote {
    margin: 2rem 0;
    padding: 1.5rem;
    padding-left: 2rem;
    border-left: 4px solid var(--color-primary-orange);
    background-color: var(--color-light-gray);
    font-style: italic;
  }

  p {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--color-dark-gray);
  }

  cite {
    display: block;
    font-style: normal;
    font-weight: bold;
    color: var(--color-medium-gray);
  }
</style>
