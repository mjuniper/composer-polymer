(function () {
  'use strict';

  Polymer({

    searchEl: 'esri_od-search',
    spinner: true,

    ready: function () {
      var searchComponent = document.querySelector(this.searchEl);
      searchComponent.addEventListener('esri_od:search:start', this.showLoading.bind(this));
      searchComponent.addEventListener('esri_od:search:complete', this.handleResults.bind(this));
    },

    showLoading: function (evt) {
      if (this.spinner) {
        this.$.spinner.active = true;
      }
    },

    handleResults: function (evt) {
      this.results = evt.detail;
      setTimeout(function () { this.$.spinner.active = false; }.bind(this), 500);
    }
  });

})();