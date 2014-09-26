(function () {
  'use strict';

  Polymer({

    created: function () {
      this.item = {};
    },

    onItemClick: function (evt) {
      this.fire('esri_od:search-result:item-clicked', evt.detail);
    }

  });

})();
