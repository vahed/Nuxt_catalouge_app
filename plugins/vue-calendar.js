// import { Calendar, DatePicker } from 'v-calendar';
//
// export default {
//   components: {
//     Calendar,
//     DatePicker,
//   },
//   data() {
//     return {
//       date: new Date(),
//     };
//   },
//   created() {
//     console.log(this.data());
//   }
//
// }



import Vue from 'vue';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});
