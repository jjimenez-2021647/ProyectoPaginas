<!-- ProductCard.svelte -->
<script>
  export let badgeSrc = '';
</script>

<div class="card-product kafa__center">
  <div class="badge-overlay">
    {#if badgeSrc}
      <img class="badge-image" src={badgeSrc} alt="Badge" />
    {/if}
  </div>
  <slot></slot>
</div>

<style>
.card-product { position: relative; }
.badge-overlay {
  position: absolute;
  top: 8%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}
.badge-image { max-width: 50px; height: auto; }
</style>