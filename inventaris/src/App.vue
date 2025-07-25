<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router';

</script>
 
<template>

<nav>
<button>
    <RouterLink to="/overview">Overview</RouterLink>
</button>
</nav>
<main>
<RouterView  />
</main>

</template>




