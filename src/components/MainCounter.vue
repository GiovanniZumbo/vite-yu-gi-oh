<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },

    computed: {
        cardListLength() {
            return store.cardList ? store.cardList.length : 'no';
        }
    },


    props: {
        cardObject: {
            type: Object,
            Required: true,
        }
    }
}
</script>

<template>
    <div class="counter bg-dark p-lg-2">
        <h5>Found {{ cardListLength }} cards.</h5>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    height: 50px;
    color: white;
}
</style>