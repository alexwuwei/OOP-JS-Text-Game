require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/app.js');

var app = angular.module('app', []);
app.controller('RenderController', function() {
  this.welcomeText = 'Welcome to coder bicker bash! This is a text game war between coders and uber coders. Read what appears here, and submit your command in the input field below. Acceptable commands are "get", "attack" and a name to choose. Type "yes" and submit when you are ready to start';
  this.inputText = 'Type Here'

  this.clearText = function() {
    this.welcomeText = null;
  }
})
