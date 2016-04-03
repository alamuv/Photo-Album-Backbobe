var ImageDisplayView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<img class="image" src="<%=image%>">\
                        <h3><%=name%></h3><h4>Rating:<%=rating%></h4><select id="rating">Update Rating\
                        <option value="select">select</option><option value="1">1</option><option value="2">2</option> \
                        <option value="3">3</option><option value="4">4</option></select>'),

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  events : {
     'change' : 'setRating'
  },

  setRating: function(e) {
    this.model.set('rating', e.target.value);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    return this.$el.html(this.template(this.model.attributes));
  }
});