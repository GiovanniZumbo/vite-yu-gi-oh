<script>

import MainCardList from './MainCardList.vue';
import MainCounter from './MainCounter.vue';
import MainSelect from './MainSelect.vue';


export default {
    data() {
        return {

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
            <div class="wrapper p-5 bg-light">
                <MainSelect />
                <MainCounter />
                <MainCardList />
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: var(--sand-yellow);
}
</style>