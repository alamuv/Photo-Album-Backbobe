var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', new ImageModel());
  
    params.library.on('setImage', function(image) {
      this.set('currentImage', image);
    }, this);

  }
});