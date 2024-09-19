<script>
import axios from 'axios';

export default {
    data() {
        return {
            urlApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
            archetypesList: [],
            selectedArchetype: '',
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
        },

        sendSelectedArchetype(string) {
            console.log(string)
            this.$emit("readSelectedArchetype",
                string)
        },
    },

    created() { this.getArchetypes() }

}
</script>

<template>
    <div class="container">
        <select class="form-select mb-4 w-25" v-model="this.selectedArchetype"
            @change="sendSelectedArchetype(selectedArchetype)">
            <option selected disabled value=""> - Choose the archetype -</option>
            <option v-for="(archetype, i) in archetypesList ">{{ archetype }}</option>
        </select>
    </div>
</template>

<style scoped></style>