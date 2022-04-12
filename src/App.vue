<template>
  <v-app>

  <Navigation></Navigation>

  <!-- RESOURCES -->
    <v-main class="d-flex flex-row justify-center mt-4" data-content="main">

          <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-col cols="10" lg="6" md="6" sm="8">
              <h1 class="mb-2">{{ greeting }} 👋 </h1>
              <p class="mb-0"> 
                Our resources website contains <a class="teal--text" href="https://junior-developer-group.com/" target="_blank">Junior Developer Group</a> 
                workshop presentations, cheat sheets and new member onboarding docs. To help you find the right content we've added a few buttons below.
              </p>
            </v-col>
          </v-container>

      <v-container data-content="buttons">
        <HomepageButtons @showWorkshopResources="showWorkshopResources" @showGroupResources="showGroupResources"></HomepageButtons>
      </v-container>

      <v-container transition="slide-x-transition" class="mt-10 px-0">
        <NewMembers   v-if="shouldShowGroupResources"></NewMembers>
        <Workshops    v-if="shouldShowWorkshopPresentations"></Workshops>
      </v-container>

    </v-main>

  </v-app>
</template>

<script>
import NewMembers from "./components/newMembers.vue";
import Workshops from "./components/workshops.vue";
import HomepageButtons from "./components/buttons/homepageButtons.vue";
import Navigation from "./components/navigation/Navigation.vue";

export default {
  name: 'App',

  components: {
    NewMembers,
    Workshops,
    HomepageButtons,
    Navigation
},

  data() {
      return {
        shouldShowWorkshopPresentations: false, 
        shouldShowGroupResources: false,
      }
  },
  methods: {

    showWorkshopResources() {
      this.shouldShowWorkshopPresentations  = !this.shouldShowWorkshopPresentations;
      this.shouldShowGroupResources         = false;
    },

    showGroupResources() {
      this.shouldShowWorkshopPresentations  = false;
      this.shouldShowGroupResources         = !this.shouldShowGroupResources;
    }

  },
  computed: {
    hourOfTheDay(){
      const date = new Date();
      let hour = date.getHours();
      return hour;
    },

    greeting() {

      if(this.hourOfTheDay > 1 && this.hourOfTheDay < 12) {
        return 'Good Morning!'

      } 

      else if (this.hourOfTheDay >= 12 && this.hourOfTheDay < 19) {

        return 'Good Day!'

      } 

      else if (this.hourOfTheDay >= 19 && this.hourOfTheDay < 22) {

        return 'Good Evening!'

      } 
      
      else {

        return 'Hi!'

      }
    }
  }
};
</script>