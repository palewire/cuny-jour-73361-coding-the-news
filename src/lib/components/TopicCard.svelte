<script>
  let { icon: Icon, title, description } = $props();
</script>

<div class="topic-card">
  <div class="icon-wrapper">
    <Icon size={32} strokeWidth={1.5} />
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .topic-card {
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--spacing-lg);
  }

  .icon-wrapper {
    color: var(--color-primary-orange);
    margin-bottom: var(--spacing-sm);
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-dark);
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-medium-gray);
    margin-bottom: 0;
  }
</style>