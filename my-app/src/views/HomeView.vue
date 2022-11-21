<template>
    <div>
        <v-form @submit.prevent="addReptile">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="newEncuesta.firstname" label="First name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="newEncuesta.lastname" label="Last name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="newEncuesta.email" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-btn class="mr-4" type="submit">Enviar Datos</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script>
import { app } from '/src/dbfirebase';

export default {
    data() {
        return {
            newEncuesta: {
                firstname: '',
                lastname: '',
                email: ''
            }

        }

    },
    methods: {
        addReptile: function() {
            console.log(this.newEncuesta)
             firebase.database().ref().push(
              this.newEncuesta
              )
             this.newEncuesta = ''
        },
    }
      }
</script>