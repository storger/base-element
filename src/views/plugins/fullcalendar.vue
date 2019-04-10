<template>
  <div>
    <full-calendar :events="events" locale="fr"></full-calendar>
  </div>
</template>


<script>
import fullCalendar from "vue-fullcalendar";
export default {
  components: {
    fullCalendar
  },
  data() {
    return {
      events: [
        {
          title: "测试",
          start: "2019-02-16",
          end: "2019-02-17"
		},
		{
          title: "阅读",
          start: "2019-02-15",
          end: "2019-02-16"
        },
      ]
    };
  }
};
</script>

<style scoped>
.comp-full-calendar {
	max-width: 100%;
}
</style>

