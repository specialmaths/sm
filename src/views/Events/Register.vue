
<template>
    <v-content>
        <v-container fluid class="py-0 my-0 mt-0">
            <v-row class="py-0 my-0" justify="center" align="center">
                <v-col md="12" sm="12" cols="12" class="py-0 my-0 mb-5 mt-5">
                <h2 :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-3'" class="google-font mb-5 mt-5">Registration Form</h2>
                <p class="google-font mt-1 mb-0" style="font-size:110%">
                    Please note that for the registration to be complete, you have to fill out the form and pay the 15,000 camp fee
                </p>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
  <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name of student"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name of student"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name of student"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name of student"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail for correspondence and updates"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree to the Terms of Service?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</v-col>
        </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Primary',
        'JSS 1',
        'JSS 2',
        'JSS 3',
        'SSS 1',
        'SSS 1',
        'SSS 1',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>