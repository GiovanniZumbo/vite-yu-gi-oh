<script>
import MainCard from './MainCard.vue';
import MainCounter from './MainCounter.vue';



export default {
    data() {
        return {

        }
    },

    components: {
        MainCounter,
        MainCard
    }
}

</script>

<template>

    <main>
        <div class="container">
            <div class="wrapper p-5 bg-light">
                <MainCounter />
                <div class="row row-cols-5">
                    <div class="col">
                        <MainCard />
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: var(--sand-yellow);
}
</style>