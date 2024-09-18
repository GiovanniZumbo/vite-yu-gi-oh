import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

data(){
    return{
        cardList:[],
        apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    }
},

methods:{
    getCards(){
            axios.get(this.apiUrl)
                    .then((response) => {

                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
}

}
})