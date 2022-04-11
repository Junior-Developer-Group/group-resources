<template>
      <v-container class="d-flex justify-center align-center flex-wrap">

          <!-- NEW MEMBERS -->
            <v-col cols="10" xl="2" lg="4" sm="10" class="d-flex justify-center">

              <v-hover
                  v-slot="{ hover }"
                  open-delay="100"
                >
                <v-btn 
                    class="px-4 py-4 mx-2"
                    color="teal white--text"
                    :elevation="hover ? 12 : 2"
                    @click="showGroupResources"
                    ripple     
                    :class="{'white--text' : hover}"   
                > 
                  NEW MEMBER RESOURCES
                  </v-btn>

                </v-hover>
            </v-col>

          <!-- WORKSHOP RESOURCES -->
            <v-col cols="10" xl="2" lg="4" sm="10" class="d-flex justify-center">

              <v-hover
                v-slot="{ hover }"
                open-delay="100"
              >
                <v-btn 
                    class="px-4 py-4 mx-4"
                    color="teal white--text"
                    :elevation="hover ? 12 : 2"
                    @click="showWorkshopResources"
                    ripple
                    :class="{'white--text' : hover}"
                  > 
                    WORKSHOP RESOURCES
                </v-btn>

              </v-hover>
          </v-col>
      </v-container>
</template>


<script>
export default {
    name: 'HomepageButtons',

    methods: {
        showWorkshopResources() {
            this.$emit('showWorkshopResources')
        },
        showGroupResources() {
            this.$emit('showGroupResources')
        }
    }
}
</script>