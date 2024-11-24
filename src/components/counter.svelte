<script lang="ts" >
  let count = $state(0)
</script>

<button class="btn h-32" onclick={()=>{ count++ }} >
{count}
</button>