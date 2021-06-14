 //Novo instância do Vue
 new Vue({
    //Local onde o Vue irá controlar com base no ID de uma tag do HTML
        el: '#app',
        //Nossos dados da aplicação
        data: {
            message: 'Agenda Telefônica',
            contact: {
            id: 0,
            name: null,
            lastname: null,
            telephone: null
            },
            index: null,
            list: []
        },
        //Âncora do ciclo de vida do Vue
        mounted() {
            const contacts = JSON.parse(localStorage.getItem('contacts'))
            this.list = contacts ? contacts : []
        },
        //Espaço para criação dos métodos
        methods: {
            add() {   
                if(this.contact.id === 0) {
                    this.contact.id = this.list.length + 1
                    this.list.push(this.contact)
                } else {
                this.list[this.index] = this.contact
                }

                localStorage.setItem('contacts', JSON.stringify(this.list))
                this.contact = {id: 0, name: null, telephone: null}
            },
            
            remove(item) {
                const idx = this.list.indexOf(item)
                this.list.splice(idx, 1)
                localStorage.setItem('contacts', JSON.stringify(this.list))
            }, 
            
            edit(item) {
                this.index = this.list.indexOf(item)
                this.contact = Object.assign({}, item);
                localStorage.setItem('contacts', JSON.stringify(this.list))
            }  
        }
    })