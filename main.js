const app = Vue.createApp({
  data() {
    return {
      searchString: "",
      data: [],
    };
  },

  created: async function () {
    await this.getAiresConvoit();
  },

  // computed: async function () {
  //   return await this.getParking();
  // },

  methods: {
    getAiresConvoit: async function () {
      return await axios
        .get(
          "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_aires-covoiturage-nantes-metropole&rows=20"
        )
        .then((response) => {
          this.data = response.data;

          this.data.records.forEach((item) => {
            item.fields.presentation = item.fields.presentation.replaceAll(
              /<p>|<\/p>/g,
              ""
            );
          });
        });
    },

    urlGoogleMap: function (lat, long) {
      return `https://maps.google.com/maps?q=${lat},${long}&z=13&output=embed`;
    },

    // filteredParking: async function () {
    //   const searchString = this.searchString;

    //   if (!this.searchString) {
    //     this.data = response.data;
    //   }

    //   const search = this.searchString.trim().toLowerCase();
    //   const length = search.length;

    //   const itemFiltered = this.data.filter(function (item) {
    //     if (
    //       item.fields.nom_complet.toLowerCase().indexOf(search) !== -1
    //     ) {
    //       return item;
    //     }
    //   });

    //   return parkingFiltered;
    // },
  },
}).mount("#main");
