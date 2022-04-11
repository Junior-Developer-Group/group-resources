<template>
      <!-- GETTING STARTED RESOURCES-->
      <v-container>

            <v-container class="d-flex justify-center align-center dark--text text-uppercase font-weight-bold">
              <h2 class="text-center">Helping you get started:</h2>
            </v-container>

            <v-divider></v-divider>

            <v-container class="d-flex flex-wrap justify-center align-center">
              <v-col cols="8" xl="3" lg="4" md="4" sm="8" v-for="(groupRerource, index) in groupRerources" :key="index">
                <Card :resource="groupRerource"></Card>
              </v-col>

            </v-container>

      </v-container>

</template>


<script>
import Card from "./card.vue"; 
export default {
    name: "NewMembers",
    components: { 
        Card 
    },
    data() {
        return {
        
            groupRerources: [
                {
                    category: 'PDF',
                    title: 'New Member Welcome Pack',
                    description: 'Being new (anywhere) is difficult. This document is here to help you find out more info and get you started',
                    image: './assets/images/resources-images/new-member-onboarding__thumbnail.png',
                    downloadURL: './assets/resources/presentations/new-member-onboarding.pdf',
                    viewURL : 'https://docs.google.com/presentation/d/1B7Sfogt3sROajD0X00QGwkc-EvgSOnC2SG_PShhnJpA/edit?usp=sharing' 
                },
                {
                    category: 'PDF',
                    title: 'Ticket Management',
                    description: 'Tickets can be overwhelming, this document will help you get started and explain what to do with your first ones',
                    image: './assets/images/resources-images/ticket-management__thumbnail.png',
                    downloadURL: './assets/resources/presentations/ticket-management.pdf',
                    viewURL : 'https://docs.google.com/presentation/d/1fd0hgEFMGkT-xPT4Jv2Kq1bAtUbDIL2F7uNrbcPTHaw/edit?usp=sharing'  
                },

            ]
        }
    }
}
</script>