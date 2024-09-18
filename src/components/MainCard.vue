<script>
import { store } from '../store.js'


export default {
    data() {
        return {
            store
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
    <div class="col">
        <div class="card mb-2 text-center">
            <img :src="cardObject.card_images[0].image_url_small" class="card-img-top" alt="img">
            <div class="card-body">
                <h5 class="card-title text-light text-uppercase">{{ cardObject.name }}</h5>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Archetype: {{ cardObject.archetype }}</li>
                <li class="list-group-item">Type: {{ cardObject.type }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card,
li {
    background-color: var(--sand-yellow);
}

.card {
    height: 520px;
}

li,
.card-body {
    border: none;
}
</style>