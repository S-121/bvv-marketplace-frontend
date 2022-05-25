<template>
  <ul class="countdown">
    <li v-if="days > 0">
      <p class="digit">
        {{ twoDigits(days) }}
      </p>
      <p class="text">
        {{ days > 1 ? 'days' : 'day' }}
      </p>
    </li>
    <li>
      <p class="digit">
        {{ twoDigits(hours) }}
      </p>
      <p class="text">
        {{ hours > 1 ? 'hours' : 'hour' }}
      </p>
    </li>
    <li>
      <p class="digit">
        {{ twoDigits(minutes) }}
      </p>
      <p class="text">min</p>
    </li>
    <li>
      <p class="digit">
        {{ twoDigits(seconds) }}
      </p>
      <p class="text">Sec</p>
    </li>
  </ul>
</template>

<script>
// Added typescript support
let interval = null;
export default {
  props: {
    deadline: {
      type: String,
      default: 'August 22, 2024',
    },
    stop: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0,
    };
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    },
  },
  watch: {
    now() {
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    },
  },
  created() {
    if (!this.deadline) {
      throw new Error("Missing props 'deadline'");
    }
    const endTime = this.deadline;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000);
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline'");
    }
    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  unmounted() {
    clearInterval(interval);
  },
  methods: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return `0${value.toString()}`;
      }
      return value.toString();
    },
  },
};
</script>
