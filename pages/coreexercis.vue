<template>
    <v-container>
       <v-row>
           <v-col cols="12">
       <v-card-title class="text-h2 text-primary font-weight-bold" style="margin-top:60px;">
           Core Exercises
       </v-card-title>
     </v-col>
     <v-col cols="12" class="my-6" v-for="i in 10" :key="`card-${i}`">
        <v-row>
          <v-col cols="4" class="text-h4">
            <v-img src="potatos.jpg" cover height="100%"> </v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="7" style="border: 1px solid #31cb00; padding: 50px">
            <v-card-title class="text-h3 text-primary" style="">
              Bent Over Dumbbell Row
            </v-card-title>
            <v-card-text class="text-h6 my-5">
              Primary muscle group(s):<br />
              Lats, Upper Back, Rear Delts, Biceps<br /><br />

              Holding a dumbbell in each hand bend at the waist to approximately a 45
              degree angle with the palms of your hands facing each other. Have a slight
              bend in your knees. Row both dumbbells up to hip level squeezing your
              shoulder blades together. Return to the starting position.
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
       </v-row>
   </v-container> 
</template>

<script>
export default {
   data(){
       return {

       };
   },
}
</script>