<script>
import axios from 'axios';

export default {
    data() {
        return {
            urlApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
            archetypesList: []
        }
    },

    methods: {
        getArchetypes() {
            axios.get(this.urlApi
                .then

            )
        }
    }

}
</script>

<template>
    <div class="container">
        <select class="form-select mb-4 w-25">
            <option selected> - Choose the archetype -</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<style scoped></style>