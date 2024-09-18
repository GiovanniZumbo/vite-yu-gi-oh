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
        <div class="card mb-2">
            <img :src="cardObject.card_images[0].image_url_small" class="card-img-top" alt="img">
            <div class="card-body">
                <h5 class="card-title">{{ cardObject.name }}</h5>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ cardObject.archetype }}</li>
                <li class="list-group-item">{{ cardObject.type }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>