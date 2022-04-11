<template>
    <v-app-bar
      app
      color="teal lighten-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Junior Developer Group Logo | A butterfly with dotted wings"
          class="shrink mr-2"
          contain
          src="/assets/images/jdg-logo.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://junior-developer-group.com/"
        target="_blank"
        text
      >
        <span class="mr-2">junior-developer-group.com</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>