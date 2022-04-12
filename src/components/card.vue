<template>
    <v-container data-content="card">
        <v-hover 
            v-slot="{ hover }"
            open-delay="200"
        >
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="300"
                elevation="2"
            >

                <!--- CARD IMAGE --->
                <v-img :aspect-ratio="16/9" :src="resource.image" :alt="resource.title">

                    <v-expand-transition>
                        <div v-if="hover"
                            class="d-flex transition-fast-in-fast-out teal lighten-2 v-card--reveal align-center "
                            style="height: 100%;"
                        >
                            <v-img
                                alt="Junior Developer Group Logo | A butterfly with dotted wings"
                                class="shrink"
                                contain
                                src="../assets/images/jdg-logo.png"
                                transition="scale-transition"
                                width="100"
                            />
                            <span class="ml-2 white--text"> Junior Developer Group</span>
                        </div>
                    </v-expand-transition>

                </v-img>

            <!--- CARD TEXT --->
                <v-card-text class="pt-6" style="position:relative;">
                    <v-row>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                    <v-btn 
                                        absolute 
                                        class="white--text" 
                                        fab  
                                        top
                                        right
                                        v-bind="attrs"
                                        v-on="on"
                                        :class="[ hover ? 'indigo accent-4' : 'light-blue accent-4']"
                                    >
                                        
                                        <a :href="resource.downloadURL" :download="resource.title" style="color:white">
                                            <v-icon dark>
                                                mdi-download
                                            </v-icon>
                                        </a>

                                    </v-btn>
                            </template>
                            <span> Download {{resource.title}}</span>
                        </v-tooltip>


                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                    <v-btn 
                                        absolute 
                                        class="white--text mr-16" 
                                        fab 
                                        right
                                        top
                                        v-bind="attrs"
                                        v-on="on"
                                        :class="[ hover ? 'brown darken-4' : 'brown darken-1']"
                                    >
                                        
                                        <a :href="resource.viewURL" :download="resource.title" style="color:white">
                                            <v-icon dark>
                                                mdi-open-in-new
                                            </v-icon>
                                        </a>

                                    </v-btn>
                            </template>
                            <span> View {{resource.title}}</span>
                        </v-tooltip>
                    </v-row>

                    <h6 class="font-weight-light grey--text text-h6 mb-2" >
                        {{ resource.category}}
                    </h6>
                    <h3 class="text-lg-h4 text-md-h4 text-sm-h4 text-xs-h3 font-weight-light orange--text mb-2 ">
                        {{ resource.title }}
                    </h3>
                    <h6 class="font-weight-light text-h6 mb-2">
                        {{ resource.description }}
                    </h6>
                </v-card-text>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>

export default {
    name: 'card',
    props: ['resource'],

    methods: {
       

    }

}
</script>