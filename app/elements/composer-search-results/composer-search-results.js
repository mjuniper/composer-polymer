(function () {
  'use strict';

  Polymer({

    searchEl: 'composer-search',
    spinner: true,

    ready: function () {
      var searchComponent = document.querySelector(this.searchEl);
      searchComponent.addEventListener('search-before-start', this.showLoading.bind(this));
      searchComponent.addEventListener('search-completed', this.handleResults.bind(this));
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