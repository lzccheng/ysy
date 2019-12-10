<template>
  <div>
    <router-view/>
    <GlobleLoading />
  </div>
</template>
<script>
import GlobleLoading from '@/components/GlobleLoading'
export default {
  components: {
    GlobleLoading
  }
}
</script>
<style lang="scss">
@import '@/style/reset.scss';

.fixed_center {
    max-width: 375px;
    left: 50% !important;
    transform: translateX(-50%);
}
</style>
