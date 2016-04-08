require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/app.js');

var app = angular.module('app', []);
app.controller('RenderController', function() {
  this.welcomeText = 'Welcome to coder bicker bash! This is a text game war between coders and uber coders. Read what appears here, and submit your command in the input field below. Acceptable commands are "get", "attack" and a name to choose. Type "yes" and submit when you are ready to start';
  this.inputText = 'Type Here';

  this.clearText = function() {
    this.welcomeText = null;
  }

  this.handleSubmit = function(text) {
    console.log(text);
    if (text == 'yes') {
        this.clearText();
        this.welcomeText = 'We are glad you chose to play. who would you like to be? choose "reginald", "matt", "mary" or "kelly"';
    } else if (text == 'reginald') {
        this.welcomeText = 'great choice, reginald!';
    } else if (text == 'matt') {
        this.welcomeText = 'great choice, matt!';
    } else if (text == 'mary') {
        this.welcomeText = 'great choice, mary!';
    } else if (text == 'kelly') {
        this.welcomeText = 'great choice, kelly!';
    }
  }
})
