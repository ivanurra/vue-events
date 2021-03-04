

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    // value
    fullname() {
      console.log('Running again...');
      if (this.name === ''){
        return '';
      }
      return this.name;
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
 