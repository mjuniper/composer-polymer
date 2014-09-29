(function () {
  'use strict';

  Polymer({

    searchEl: 'esri_od-search-field',
    url: 'http://opendata.arcgis.com',
    per_page: 10,

    ready: function () {
      var searchField = document.querySelector(this.searchEl);
      searchField.addEventListener('esri_od:search:before-start', this.search.bind(this));
    },

    search: function (evt) {
      this.searchString = evt.detail;
      this.$.ajax.go();
      this.fire('esri_od:search:start', this.searchString);
    },

    resultsChanged: function (oldVal) {
      this.fire('esri_od:search:complete', this.results);
    }

  });

})();