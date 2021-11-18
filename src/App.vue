<template>
  <v-app>
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
          src="./assets/images/jdg-logo.png"
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

  <!-- RESOURCES -->
    <v-main class="d-flex flex-row justify-center mt-4">

          <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-col cols="10" lg="6" md="6" sm="8">
              <h1 class="mb-2">{{ greeting }} 👋 </h1>
              <p class="mb-0"> Our 'Resources' website contains Junior Developer Group workshop presentations, cheat sheets and member onboarding docs. To help you find the right content we've added some buttons below.</p>
            </v-col>
          </v-container>

      <v-container class="d-flex justify-center align-center flex-wrap">

          <!-- NEW MEMBERS -->
            <v-col cols="10" lg="4" sm="10" class="d-flex justify-center">

              <v-hover
                  v-slot="{ hover }"
                  open-delay="100"
                >
                <v-btn 
                    class="px-4 mx-2"
                    color="grey lighten-4 dark--text"
                    :elevation="hover ? 12 : 2"
                    @click="showGroupResources"
                    ripple   
                    small  
                    :class="{'teal--text' : hover}"   
                > 
                  NEW MEMBER RESOURCES
                  </v-btn>

                </v-hover>
            </v-col>

          <!-- WORKSHOP RESOURCES -->
            <v-col cols="10" lg="4" sm="10" class="d-flex justify-center">

              <v-hover
                v-slot="{ hover }"
                open-delay="100"
              >
                <v-btn 
                    class="px-4 mx-4"
                    color="grey lighten-4 dark--text"
                    :elevation="hover ? 12 : 2"
                    @click="showWorkshopResources"
                    ripple
                    small
                    :class="{'teal--text' : hover}"
                  > 
                    WORKSHOP RESOURCES
                </v-btn>

              </v-hover>
          </v-col>
      </v-container>

      <!-- GETTING STARTED RESOURCES-->
      <v-container v-if="shouldShowGroupResources" transition="slide-x-transition" class="mt-10">

            <v-container class="d-flex justify-center align-center teal--text">
              <h2 class="text-center">Helping you get started:</h2>
            </v-container>

            <v-divider></v-divider>

            <v-container class="d-flex flex-wrap justify-center align-center">
              <v-col cols="8" lg="4" md="4" sm="8" v-for="(groupRerource, index) in groupRerources" :key="index">
                <Card :resource="groupRerource"></Card>
              </v-col>
            </v-container>

      </v-container>

      <!-- WORKSHOP RESOURCES-->
      <v-container v-if="shouldShowWorkshopPresentations" transition="slide-x-transition" class="mt-10">
          <v-container class="d-flex justify-center align-center teal--text">
            <h2 class="text-center"> Workshop Resources Available:</h2>
          </v-container>

          <v-divider></v-divider>

          <v-container class="d-flex flex-wrap justify-center align-center">
            <v-col cols="8" lg="4" md="4" sm="8" v-for="(workshopResource, index) in workshopResources" :key="index">
              <Card :resource="workshopResource"></Card>
            </v-col>
          </v-container>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import Card from "./components/card.vue";

export default {
  name: 'App',

  components: {
    Card,
  },

  data() {
      return {


        shouldShowWorkshopPresentations: false, 
        shouldShowGroupResources: false,


          workshopResources: [
              {
                  category: 'PDF',
                  title: 'Introduction to: Basic SEO',
                  description: '',
                  image: '/src/assets/images/resources-images/introduction__basic-seo.png',
                  downloadURL: '/src/assets/resources/presentations/IntroductionTo_ BasicSEO.pdf' 
              },

              {
                  category: 'PDF',
                  title: 'Introduction to: GDPR',
                  description: '',
                  image: '/src/assets/images/resources-images/presentation__gdpr.png',
                  downloadURL: '/src/assets/resources/presentations/IntroductionTo_ GDPR.pdf'
              },
          ],

          groupRerources: [
              {
                  category: 'PDF',
                  title: 'New Member Welcome Pack',
                  description: '',
                  image: '/src/assets/images/resources-images/new-member-onboarding__thumbnail.png',
                  downloadURL: '/src/assets/resources/presentations/new-member-onboarding.pdf' 
              },
              {
                  category: 'PDF',
                  title: 'Ticket Management',
                  description: '',
                  image: '/src/assets/images/resources-images/ticket-management__thumbnail.png',
                  downloadURL: '/src/assets/resources/presentations/ticket-management.pdf' 
              },
          ]
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