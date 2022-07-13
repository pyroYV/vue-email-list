const app = new Vue({
    el: '#app',
    data:{
        secretArray: [],

    },
    methods: {
        pushRandomMail(){
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then((response) => {
            
            const result = response.data.response
            this.secretArray.push(result)
           })
        },
        countToTen(){
            for (let index = 0; index < 9; index++) {
                this.pushRandomMail()
                console.log(this.secretArray)
            }
        },
    },
    mounted: function() {
        this.countToTen()
    },

})