<script>
import MainCounter from './MainCounter.vue';



export default {
    data() {
        return {

        }
    },

    components: {
        MainCounter
    }
}

</script>

<template>

    <main>
        <div class="container">
            <div class="wrapper p-5 bg-light">
                <MainCounter />
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">Card name</h5>

                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">TYPE</li>
                    </ul>
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