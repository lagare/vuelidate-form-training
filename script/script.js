Vue.use(vuelidate.default)



var app = new Vue({
    el: '#app',
    data: {

        form : {
            civility: '',
            name: '',
            firstname : '',
            birthdate: '',
            mail: '',
            address : '',
            postcode: '',
            city : '',
            message: '',
        },
        acknowledgment: null,
        infos: false,
    },

    validations: {

        form : {

            name: {
                required : validators.required,
                minLength: validators.minLength(4),
                lettersOnly: validators.alpha
            },

            civility: {
                required:validators.required
            },

            mail: {
                required:validators.required,
                mail: validators.email
            },

            message: {
                required:validators.required,
            },
        }
    },

    methods: {

        submitDatas: function(e) {

            this.$v.$touch();
            
            if (this.$v.$invalid) { return false }

            let inputs = {};
            
            inputs.civilite = this.form.civility;
            inputs.nom = this.form.name;
            inputs.prenom = this.form.firstname ? this.firstname : 'non renseigné';
            inputs.naissance = this.form.birthdate ? this.birthdate : 'non renseigné';
            inputs.email = this.form.mail;
            inputs.adresse = this.form.address ? this.form.address : 'non renseigné';
            inputs.codePostal = this.form.postcode ? this.form.postcode : 'non renseigné';
            inputs.ville = this.form.city ? this.form.city : 'non renseigné';
            inputs.message = this.form.message;

            this.acknowledgment = `Merci ${inputs.civilite} ${inputs.nom} Pour votre, demande, nous vous contacterons tres prochainement`;
            this.infos = inputs;
            
        }
    }
})
