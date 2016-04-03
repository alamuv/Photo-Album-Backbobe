var AddImageView = Backbone.View.extend ({
  collection: Album,
  // tagName: '<div>',

  template: '<form id="upload">\
             <input type="text" id="link" placeholder="Image URL">\
             <input type="text" id="title" placeholder="Image Title">\
             <button type="submit" class="btn btn-default">Submit</button>\
             </form>',

  initialize: function() {
    this.render();
    this.on('submit', this.handleSubmit, this);
  },

  events: {
    'submit': 'handleSubmit'
  },
  
  handleSubmit: function(event) {
    event.preventDefault();
    var imgTitle = $('[id="title"]').val();
    var imgURL = $('[id="link"]').val();
    this.resetInput();
    var image = new ImageModel({'image': imgURL, 'name': imgTitle, 'rating': 0});
    this.collection.add(image);
  },

  render: function() {
   return this.$el.html(this.template);
  },

  resetInput: function() {
    $('[id="imageURL"]').val("");
    $('[id="imageTitle"]').val("");
    $('#imageTitle').attr({placeholder: 'Type in Image URL Here'});
    $('#imageURL').attr({placeholder: 'Type in Image Title Here'});
  }
 
});