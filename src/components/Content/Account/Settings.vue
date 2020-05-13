<template>
  <div class="container">
    <h1>Профиль пользователя!</h1>

    <ApolloQuery :query="require('../../../graphql/getProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div>{{ data.getProfile.firstname }}</div>
          <div>{{ data.getProfile.lastname }}</div>
          <div>{{ data.getProfile.phone }}</div>
          <div>{{ data.getProfile.location }}</div>
          <br />
          <div>Avatar:</div>
          <!-- <div class="image-input">
              <label for="field-image">Image</label><br />
              <input
                id="field-image"
                type="file"
                accept="image/*"
                required
                @change="onUploadImage"
              />
            </div> -->
          <img :src="`${$filesRoot}/${data.getProfile.avatar.path}`" />
          <br />
          <div>Creator:</div>
          <div>{{ data.getProfile.creator.email }}</div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// import GET_PROFILE from "@/graphql/getProfile.gql";

export default {
  // apollo: {
  //   getProfile: GET_PROFILE
  // },
  // methods: {
  //   async onUploadImage({ target }) {
  //     if (!target.validity.valid) return;
  //     await this.$apollo.mutate({
  //       mutation: UPLOAD_FILE,
  //       variables: {
  //         file: target.files[0]
  //       },
  //       update: (store, { data: { singleUpload } }) => {
  //         const data = store.readQuery({ query: FILES });
  //         data.files.push(singleUpload);
  //         store.writeQuery({ query: FILES, data });
  //       }
  //     });
  //   }
  // },
};
</script>
