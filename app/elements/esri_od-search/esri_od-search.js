(function () {
  'use strict';

  Polymer({

    url: 'http://opendata.arcgis.com',
    per_page: 10,
    autofocus: true,
    placeholder: 'Search for Open Data',
    searchString: '',

    onSubmit: function (e) {
      e.preventDefault();
      
      this.fire('esri_od:search:before-start', this.results);
      this.$.ajax.go();
      this.fire('esri_od:search:after-start', this.results);
    },

    resultsChanged: function (oldVal) {
      this.fire('esri_od:search:completed', this.results);
    }

  });

})();