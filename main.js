// CODE FROM BACKBONE INTRO
// var PostModel = Backbone.Model.extend({
//   defaults: function() {
//   return {
//     user: '',
//     text: ''
//    }
//  }
// });

// var PostView = Backbone.View.extend({
//   template: Handlebars.compile($('#post-template').html()),

//   className: 'post',

//   render: function () {
//     this.$el.html(this.template(this.model.attributes));

//     return this;
//   }
// });

// $('.add-post').on('click', function () {
//   var text = $('#post-name').val();
//   var user = $('#post-user').val();

//   var postModel = new PostModel({ text: text, user: user });
//   var postView = new PostView({ model: postModel });

//   $('.posts').append(postView.render().el);
// });




// CODE FROM MORE ON MODELS AND VIEWS


// var Post = Backbone.Model.extend({
//   defaults: {
//     text: 'N/A',
//     points: 0,
//     isAwesome: false
//   },

//   initialize: function() {
//     // When `points` changes, update it!
//     this.on('change:points', this._updateIsAwesome);

//     // If we got a specific initial `points` value, ensure it's set correctly
//     // from the very beginning of this model's lifespan.
//     this._updateIsAwesome();
//   },

//   _updateIsAwesome: function() {
//     var isAwesome = this.get('points') >= 25;
//     this.set('isAwesome', isAwesome);
//   },

//   highFive: function() {
//     // When we change `points` here, an event is fired, triggering
//     // `#_updateIsAwesome`! Note that we don't have to worry about updating
//     // `isAwesome` directly during this method, since it gets taken care of by
//     // our event listener, set in `#initialize`.
//     this.set('points', this.get('points') + 5);
//   }
// });

// var p = new Post();
// console.log(p.get('points')); // 0
// p.highFive();
// console.log(p.get('points')); // 5
// console.log(p.get('isAwesome')); // false
// p.highFive();
// p.highFive();
// p.highFive();
// p.highFive();
// console.log(p.get('points')); // 25
// console.log(p.get('isAwesome')); // true



// CODE FROM NESTED MODELS AND COLLECTIONS

var Book = Backbone.Model.extend({
  defaults: function() {
    return {
      title: '',
      author: ''
    }
  }
});

var Books = Backbone.Collection.extend({ model: Book });

var BookCase = Backbone.Model.extend({
  defaults: function () {
    return {
      label: '',
      books: new Books()
    };
  }
});

var BookCases = Backbone.Collection.extend({ model: BookCase });

var Library = Backbone.Model.extend({
  defaults: function () {
    return {
      name: '',
      bookCases: new BookCases()
    };
  }
});

// Now, create a library that fits the following description:

// This library is named "Awesome Library".
// It has two book cases, labeled "History" and "Fiction".
// The "History" book case contains two books:
// The History of the Decline and Fall of the Roman Empire, by Edward Gibbon
// Antiquities of the Jews, by Flavius Josephus
// The "Fiction" book case includes one book: Brave New World, by Aldous Huxley

var historyBook1 = new Book({
  title: 'The History of the Decline and Fall of the Roman Empire',
  author: 'Edward Gibbon'
});

var historyBook2 = new Book({
  title: 'Antiquities of the Jews',
  author: 'Flavius Josephus'
});

var fictionBook = new Book({
  title: 'Brave New World',
  author: 'Aldous Huxley'
});

var historyBookCase = new BookCase({label: "History", books: [historyBook1, historyBook2]});
var fictionBookCase = new BookCase({label: "Fiction", books: fictionBook});
var newLibrary = new Library ({name: 'Awesome Library', bookCases: [historyBookCase, fictionBookCase]});

