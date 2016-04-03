var ImageModel = Backbone.Model.extend ({

  displayImage: function () {
    this.trigger('setImage', this);
  }
  
});