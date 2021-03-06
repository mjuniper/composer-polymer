(function () {
  'use strict';

  Polymer({

    autofocus: true,
    placeholder: 'Search for Open Data',
    searchString: '',
    searchEl: 'esri_od-search',

    domReady: function () {
      var url = document.querySelector(this.searchEl).url;
      this.initTypeahead(url);
    },

    onSubmit: function (e) {
      e.preventDefault();
      this.typeahead.typeahead('close');
      this.fire('esri_od:search:before-start', this.searchString);
    },

    getTypeaheadUrl: function (url, query) {
      url = url.replace('%QUERY', query);
      return url;
    },

    initBloodhound: function (url) {
      var bloodhound = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url: url + 'autocomplete?query=%QUERY',
          rateLimitWait: 150,
          replace: self.getTypeaheadUrl,
          filter: function(response) {
            return response.data;
          }
        }
      });

      bloodhound.initialize();

      return bloodhound;
    },

    initTypeahead: function (url) {

      var self = this;

      var opts = {
        highlight: true,
        minLength: 2,
        hint: false
      };

      var bloodhound = this.initBloodhound(url);

      var datasets = {
        name: 'datasets',
        displayKey: function(item) {
          return item;
        },
        templates: {
          empty: '<div class="empty-message">No datasets found.</div>'
        },
        source: bloodhound.ttAdapter()
      };

      this.typeahead = $(this.$.search).typeahead(opts, datasets).on('typeahead:selected', self.onSubmit.bind(this));
    }

  });

})();