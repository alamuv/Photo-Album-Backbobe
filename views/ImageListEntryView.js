var ImageListEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><%= name %></td>'),

  events: {
    'click td': function(){
      // console.log('Hi');
      this.model.displayImage();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});