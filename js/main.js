var loadView = Backbone.View.extend({
  template: _.template($("#loading").html()),
  tagName: "section",
  className: "loading",
  initialize: function(options){
    this.ellipses = options.ellipses || 1;
  },

  render: function(){
    this.$el.html(this.template(this));
  }

});

var menuView = Backbone.View.extend({

  template: _.template($("#menu").html()),
  tagName: "section",
  className: "menu",
  render: function(){
    this.$el.html(this.template());
  }

});

var gameView = Backbone.View.extend({

  template: _.template($("#play").html()),
  tagName: "section",
  className: "play",
  render: function(){
    this.$el.html(this.template());
  }

});

var settingsView = Backbone.View.extend({

  template: _.template($("#settings").html()),
  tagName: "section",
  className: "settings",
  render: function(){
    this.$el.html(this.template());
  }

});

var boardsView = Backbone.View.extend({

  template: _.template($("#boards").html()),
  tagName: "section",
  className: "boards",
  render: function(){
    this.$el.html(this.template());
  }

});

var loadRouter = Backbone.Router.extend({

  routes: {
    "": "load",
    "menu": "menu",
    "play": "game",
    "settings": "settings",
    "boards": "boards"
  },

  load: function(){
    var thisvar = this;

    var view = new loadView({
      ellipses: 0
    });
    var counter = 0;
    var clock;

    function loadingIndicator(){

      $("main").html("");
      view.ellipses = Array(counter + 1).join('.');
      view.render();
      $("main").html(view.$el);
      counter++;

      if (counter > 4) {
        clearInterval(clock);
        thisvar.navigate('menu', {trigger: true});
        return;
      }
    }

    clock = setInterval(loadingIndicator, 1000);
  },

  menu: function(){
    var view = new menuView();
    $("main").html("");
    view.render();
    $("main").html(view.$el);
  },

  game: function(){
    var view = new gameView();
    $("main").html("");
    view.render();
    $("main").html(view.$el);
  },

  settings: function(){
    var view = new settingsView();
    $("main").html("");
    view.render();
    $("main").html(view.$el);
  },

  boards: function(){
    var view = new boardsView();
    $("main").html("");
    view.render();
    $("main").html(view.$el);
  }

});

var router = new loadRouter();

Backbone.history.start();
