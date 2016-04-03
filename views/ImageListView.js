var ImageListView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add',this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Images</th>').append(
      this.collection.map(function(image) {
        return new ImageListEntryView({model: image}).render();
      })
    );
  }
});