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
        <v-container>
            <v-btn class="mr-4" v-on:click="readUser">Leer Datos</v-btn>
            <br />
            <v-row class="mt-10">
                <v-col cols='12'>
                    <div>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            firstname
                                        </th>
                                        <th class="text-left">
                                            lastname
                                        </th>
                                        <th class="text-left">
                                            email
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in User" :key="item.name">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td>{{ item.email }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { fireApp } from '../dbfirebase.js';
import firebase from "firebase/app";
import 'firebase/database';


export default {
    /*firebase: {
        items: database.ref('Encuesta')
    },*/
    data() {
        return {
            newEncuesta: {
                firstname: '',
                lastname: '',
                email: ''
            },
            User: []
        }

    },
    methods: {
        addReptile: function() {
            console.log(this.newEncuesta)
            firebase.database().ref('DATOS_ENCUESTA/' + this.newEncuesta.lastname).set({
                firstname: this.newEncuesta.firstname,
                lastname: this.newEncuesta.lastname,
                email: this.newEncuesta.email
            });
            this.newEncuesta.firstname = '';
            this.newEncuesta.lastname = '';
            this.newEncuesta.email = '';
        },
        readUser: function() {
            const dbencuesta = firebase.database().ref();
            const Estudiante = dbencuesta.child('DATOS_ENCUESTA');
            Estudiante.on("child_added", snap => {
                let encuesta = snap.val();
                this.User.push(encuesta);
            })
        }
    }
}
</script>