<template>
  <router-view />
</template>

<script>
import GET_PROFILE from "@/graphql/getProfile.gql";
export default {
  apollo: {
    getProfile: GET_PROFILE
  }
};
</script>

<style lang="sass">
@import "./_dashboard"
</style>
