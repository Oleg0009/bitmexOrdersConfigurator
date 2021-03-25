<template>
  <v-app>


    <v-main class='text-center'>
      <p>
        Order Configurator
      </p>
      <v-btn
        depressed
        color="primary"
        @click="linkToAccount"
      >
        My linkedin
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  methods:{
    linkToAccount(){
      window.location.href = 'https://www.linkedin.com/in/oleg-statkevych-58bb1614b'
    }
  },
  
  data: () => ({
    //
  }),
};
</script>
