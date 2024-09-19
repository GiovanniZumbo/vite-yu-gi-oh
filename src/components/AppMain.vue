<script>
import axios from 'axios';
import { store } from '../store';

import MainCardList from './MainCardList.vue';
import MainCounter from './MainCounter.vue';
import MainSelect from './MainSelect.vue';


export default {
    data() {
        return {
            store
        }
    },

    methods: {
        getFIlteredArchList(selectedInput = " ") {
            console.log(selectedInput)

            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${selectedInput}`)
                .then((response) => {
                    console.log(response)
                    store.cardList = response.data.data
                })
        }
    },

    components: {
        MainCounter,
        MainCardList,
        MainSelect
    }
}

</script>

<template>

    <main>
        <div class="container">
            <div class="wrapper p-5  bg-light">
                <MainSelect @read-selected-archetype="getFIlteredArchList" />
                <MainCounter />
                <MainCardList />
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: var(--sand-yellow);
    padding: 30px 0;
    min-height: 100vh;

}
</style>