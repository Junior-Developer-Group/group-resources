<template>
      <!-- WORKSHOP RESOURCES-->
      <v-container class="px-0">

          <v-container class="d-flex justify-center align-center dark--text text-uppercase font-weight-bold" >
            <h2 class="text-center"> Workshop Resources Available:</h2>
          </v-container>

          <v-divider></v-divider>

          <v-container class="d-flex flex-wrap justify-center align-center" data-resource="workshops">
            <v-col cols="12" xl="4" lg="4" md="5" sm="8" xs="12" v-for="(workshopResource, index) in workshopResources" :key="index">
                <Card :resource="workshopResource"></Card>
            </v-col>
          </v-container>

      </v-container>

</template>


<script> 
import Card from "./card.vue"; 
export default {
    name: 'Workshops',
    components: { 
        Card 
    },
    data() {
        return {
        
            workshopResources: [
                {
                    category: 'PDF',
                    title: 'Introduction to: Basic SEO',
                    description: 'Learn about basic SEO practices and different approaches, look at some examples and take notes ',
                    image: './assets/images/resources-images/introduction__basic-seo.png',
                    downloadURL: './assets/resources/presentations/IntroductionTo_ BasicSEO.pdf',
                    viewURL : 'https://docs.google.com/presentation/d/1bolV5xwvzzFYYlQE-QpW7ETR_nRRrXGaeXUd075nTZA/edit?usp=sharing'  
                },

                {
                    category: 'PDF',
                    title: 'Introduction to: GDPR',
                    description: 'Learn about Data Protection Act, GDPR and ways to store/handle sensitive information',
                    image: './assets/images/resources-images/presentation__gdpr.png',
                    downloadURL: './assets/resources/presentations/IntroductionTo_ GDPR.pdf',
                    viewURL : 'https://docs.google.com/presentation/d/151UxMdtfVJMpSOtiFgTKQgCfGEsFQvqlLUsLUzGlBLM/edit?usp=sharing' 
                },
                {
                    category: 'PDF',
                    title: 'Introduction to: Accessibility',
                    description: 'Learn about DOs and DONTs of accessibility, review simple examples and take a quiz while marking your answers',
                    image: './assets/images/resources-images/accessibility.png',
                    downloadURL: './assets/resources/presentations/ticket-management.pdf',
                    viewURL : 'https://docs.google.com/presentation/d/1tZrOCgYi8qC479NVpDBrz7w2rCtQaT5_AmkipNIQPS8/edit?usp=sharing'  
                },
            ],

        }
    }
}
</script>