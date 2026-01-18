<script>
  let { logoSrc = '/cuny-logo.svg', logoAlt = 'Craig Newmark Graduate School of Journalism at CUNY', href = 'https://www.journalism.cuny.edu/' } = $props();
</script>

<header class="masthead">
  <div class="masthead-container">
    <a {href} class="logo-link">
      <img src={logoSrc} alt={logoAlt} class="logo" />
    </a>
  </div>
</header>

<style>
  .masthead {
    background-color: var(--color-gray);
    height: var(--masthead-height);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .masthead-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo {
    height: 40px;
    width: auto;
  }
</style>