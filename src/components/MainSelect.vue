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
            axios.get(this.urlApi)
                .then((response) => {
                    console.log(response);

                    for (let i = 0; i < response.data.length; i++) {
                        this.archetypesList.push(response.data[i].archetype_name)
                    };
                    console.log(this.archetypesList)
                })

        }
    },

    created() { this.getArchetypes() }

}
</script>

<template>
    <div class="container">
        <select class="form-select mb-4 w-25">
            <option selected> - Choose the archetype -</option>
            <option v-for="(archetype, i) in archetypesList " value="{{ i + 1 }}">{{ archetype }}</option>
        </select>
    </div>
</template>

<style scoped></style>