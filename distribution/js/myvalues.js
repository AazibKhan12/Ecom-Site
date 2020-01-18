$( function() {
        $.widget( "custom.catcomplete", $.ui.autocomplete, {
          _create: function() {
            this._super();
            this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
          },
          _renderMenu: function( ul, items ) {
            var that = this,
              currentCategory = "";
            $.each( items, function( index, item ) {
              var li;
              if ( item.category != currentCategory ) {
                ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                currentCategory = item.category;
              }
              li = that._renderItemData( ul, item );
              if ( item.category ) {
                li.attr( "aria-label", item.category + " : " + item.label );
              }
            });
          }
        });
        var data = [
          { label: "shirt", category: "" },
          { label: "women shirt", category: "" },
          { label: "jeans", category: "" },
          { label: "jeans", category: "in Women" },
          { label: "jeans", category: "in Men" },
          { label: "shirts", category: "In Men" },
          { label: "Footwears", category: "In Women" },
          { label: "Trousers", category: "In Men" },
          { label: "Casuals", category: "In Women" },
          { label: "Casuals", category: "In Men" }
        ];
     
        $( "#searches" ).catcomplete({
          delay: 0,
          source: data
        });
      } );