<template>
  <mcbox_header></mcbox_header>
  <div class="main">
    <router-view></router-view>
  </div>
  <mcbox_footer></mcbox_footer>
</template>

<script>
import mcbox_header from "@/components/mcbox_header.vue";
import mcbox_footer from "@/components/mcbox_footer.vue";

export default {
  components: {
    mcbox_header,
    mcbox_footer,
  },
  mounted() {
    console.log(process.env, "process.env");
    console.log(process.env.VUE_APP_API, "VUE_APP_API");
  },
};
</script>

<style lang="less">
.main {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 5px #000;
}
</style>
