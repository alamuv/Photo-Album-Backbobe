var AppView = Backbone.View.extend ({

  initialize: function(params) {
    this.addImageView = new AddImageView({collection: this.model.get('library')});
    this.imageDisplayView = new ImageDisplayView({model: this.model.get('currentImage')});
    this.imageListView = new ImageListView({collection: this.model.get('library')});

    this.model.on('change:currentImage', function (model) {
      // console.log(this.model.get(image));
      this.imageDisplayView.setImage(model.get('currentImage'));
    }, this);

  },

  render: function () {
    return this.$el.html([
      this.addImageView.$el,
      this.imageDisplayView.$el,
      this.imageListView.$el
    ]);
  }

});