

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      // fullname: ''
    }
  },
  watch: {
    counter(value) {
      if (value > 50){
        this.counter = 0;
      } 
    }
    // name(value) {
    //   if (value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    // recalc values
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted!');
    },
    resetInput(){
      this.name = '';
    },
    outputFullname(){
      return this.name;
    }

  }
});

app.mount('#events');
 