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
        <div class="card">
            <img src="..." class="card-img-top" alt="img">
            <div class="card-body">
                <h5 class="card-title"></h5>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">TYPE</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>