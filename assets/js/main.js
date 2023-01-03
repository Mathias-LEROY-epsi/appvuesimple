const app = Vue.createApp({
  data() {
    return {
      searchString: '',
      data: [],
    }
  },

  created: async function () {
    await this.getUsers()
  },

  computed: async function () {
    await this.searchUser()
  },

  methods: {
    getUsers: async function () {
      return await axios
        .get('https://dummyjson.com/users?limit=100')
        .then((res) => {
          this.data = res.data
        })
    },

    searchUser: async function () {
      const search = this.searchString.trim().toLowerCase()

      return await axios
        .get(`https://dummyjson.com/users/search?q=${search}`)
        .then((res) => {
          this.data = res.data
        })
    },

    urlGoogleMap: function (lat, long) {
      return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
    },
  },
}).mount('#app')
