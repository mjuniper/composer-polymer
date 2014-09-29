(function () {
  'use strict';

  Polymer({

    autofocus: true,
    placeholder: 'Search for Open Data',
    searchString: '',

    onSubmit: function (e) {
      e.preventDefault();
      this.fire('esri_od:search:before-start', this.searchString);
    }

  });

})();