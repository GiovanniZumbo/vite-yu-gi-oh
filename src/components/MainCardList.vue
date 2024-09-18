<script>
import axios from "axios";

import MainCard from './MainCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
            store

        }
    },

    props: {

    },

    methods: {
        getCards() {
            axios.get(this.apiUrl)
                .then((response) => {

                    console.log(response);
                    store.cardList = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },


    components: {
        MainCard
    },

    created() {
        this.getCards();
    }
}
</script>

<template>
    <div class="row row-cols-5">

        <MainCard v-for="card in store.cardList" :key="card.id" :cardObject="card" />

    </div>
</template>

<style scoped></style>