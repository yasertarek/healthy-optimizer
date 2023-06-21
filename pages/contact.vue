<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2 class="text-h2 text-primary font-weight-bold meals-head">
                    Contact Us
                </h2>
                <v-card-text class="aline-center" style="text-align: center">
                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum <br />
                    diam justo sed rebum vero dolor duo.
                </v-card-text>
                <v-row><v-col cols="4" class="bg-primary text-h4">
                        <v-text-title>Call Us </v-text-title> <br />
                        <v-text-title class="text-h6">
                            <v-icon style="font-size: 15px">fas fa-phone</v-icon>
                            +012 345 67890 </v-text-title><br /><br /><br />
                        <v-text-title>Email Us </v-text-title> <br />
                        <v-text-title class="text-h6">
                            <v-icon style="font-size: 15px">fas fa-envelope</v-icon>
                            +012 345 67890 </v-text-title><br /><br /><br />
                        <v-text-title>Office Address</v-text-title> <br />
                        <v-text-title class="text-h6">
                            <v-icon style="font-size: 15px">fas fa-map-marker-alt</v-icon>
                            +012 345 67890
                        </v-text-title>
                        <br /><br /><br />
                        <v-text-title>Follow Us </v-text-title> <br />
                        <v-text-title>
                            <nav-btn><v-icon style="font-size: 25px;">fab fa-twitter</v-icon></nav-btn>
                            <nav-btn><v-icon style="font-size: 25px;">fab fa-facebook</v-icon></nav-btn>
                            <nav-btn><v-icon style="font-size: 25px;">fab fa-youtube</v-icon></nav-btn>
                            <nav-btn><v-icon style="font-size: 25px;">fab fa-linkedin</v-icon></nav-btn>
                        </v-text-title>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="7">
                        <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="subject"
            :rules="nameRules"
            :counter="10"
            label="subject"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
        <v-textarea label="message"></v-textarea>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
        <v-btn variant="outlined">
  Send Message
</v-btn>
        </v-col>
       
      </v-row>
    </v-container>
  </v-form>
                        </v-col></v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>
