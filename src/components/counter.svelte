<script lang="ts" >
  let count = $state(0)
</script>

<button class="btn" onclick={()=>{ count++ }} >
  {count}
  <div class="i-tabler:click size-5"></div>
</button>