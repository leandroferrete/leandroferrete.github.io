(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*!\n * baguetteBox.js\n * @author  feimosi\n * @version 1.11.1\n * @url https://github.com/feimosi/baguetteBox.js\n */\r\n#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);transition:opacity .5s ease}\r\n#baguetteBox-overlay.visible{opacity:1}\r\n#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}\r\n#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}\r\n#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;box-shadow:0 0 8px rgba(0,0,0,.6)}\r\n#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}\r\n#baguetteBox-overlay .full-image:before{content:\"\";display:inline-block;height:50%;width:1px;margin-right:-1px}\r\n#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;transition:left .4s ease,transform .4s ease}\r\n#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}\r\n#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}\r\n@-webkit-keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}\r\n@keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}\r\n@-webkit-keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}\r\n@keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}\r\n.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}\r\n.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;transition:background-color .4s ease}\r\n.baguetteBox-button:focus,.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}\r\n.baguetteBox-button#next-button{right:2%}\r\n.baguetteBox-button#previous-button{left:2%}\r\n.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}\r\n.baguetteBox-button svg{position:absolute;left:0;top:0}\r\n.baguetteBox-spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}\r\n.baguetteBox-double-bounce1,.baguetteBox-double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}\r\n.baguetteBox-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}\r\n@-webkit-keyframes bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}\r\n@keyframes bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}\r\n.jumbotron{\r\n    background-color: white !important;\r\n}\r\n.catalog{\r\n    margin-top: 3em;\r\n}\r\n.catalog img{\r\n    width: 100%; \r\n}\r\n.catalog h2{\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n    font-size: 17px;\r\n    letter-spacing: .06em;\r\n    font-weight: 300;\r\n}\r\n.catalog p{\r\n    margin-top: 1em;\r\n    letter-spacing: .06em;\r\n    font-weight: 300;\r\n}\r\n.catalog strong{\r\n    letter-spacing: .06em;\r\n    font-weight: 400;\r\n}\r\n.overview{\r\n    margin-top: 3em;\r\n}\r\n.overview img{\r\n    width: 100%; \r\n}\r\n.overview h1{\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n.overview h2{\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n    font-size: 17px;\r\n    letter-spacing: .06em;\r\n    font-weight: 300;\r\n}\r\n.overview p{    \r\n    letter-spacing: .06em;\r\n    font-weight: 300;\r\n}\r\n.overview strong{\r\n    letter-spacing: .06em;\r\n    font-weight: 400;\r\n}\r\n#gallery-item{  \r\n    height: 15em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL2Rpc3QvYmFndWV0dGVCb3gubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNBOUU7Ozs7O0VBS0U7QUFBQyxxQkFBcUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsK0JBQStCLENBQXFDLDJCQUEyQjtBQUFDLDZCQUE2QixTQUFTO0FBQUMsaUNBQWlDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCO0FBQUMsd0NBQXdDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVztBQUFDLHFDQUFxQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQWtGLGlDQUFpQztBQUFDLDRDQUE0QyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLCtCQUErQixDQUFDLHNCQUFzQjtBQUFDLHdDQUF3QyxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFpSCwyQ0FBMEk7QUFBQyxzQ0FBc0MsOENBQThDLENBQUMsc0NBQXNDO0FBQUMscUNBQXFDLDZDQUE2QyxDQUFDLHFDQUFxQztBQUFDLG1DQUFtQyxRQUFRLGFBQWEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO0FBQUMsMkJBQTJCLFFBQVEsYUFBYSxDQUFDLElBQUksaUJBQWlCLENBQUM7QUFBQyxrQ0FBa0MsUUFBUSxhQUFhLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztBQUFDLDBCQUEwQixRQUFRLGFBQWEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO0FBQUMsb0VBQW9FLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVztBQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUF3QixpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQThDLG9DQUFvQztBQUFDLG9EQUFvRCxrQ0FBa0M7QUFBQyxnQ0FBZ0MsUUFBUTtBQUFDLG9DQUFvQyxPQUFPO0FBQUMsaUNBQWlDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVc7QUFBQyx3QkFBd0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUs7QUFBQyxxQkFBcUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtBQUFDLHdEQUF3RCxVQUFVLENBQUMsV0FBVyxDQUF3QixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyx3Q0FBd0M7QUFBQyw0QkFBNEIsMkJBQTJCLENBQUMsbUJBQW1CO0FBQUMsMEJBQTBCLFFBQW1DLGtCQUFrQixDQUFDLElBQStCLGtCQUFrQixDQUFDO0FBQUMsa0JBQWtCLFFBQTJELGtCQUFrQixDQUFDLElBQXVELGtCQUFrQixDQUFDO0FERno2RztJQUNJLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0ICdiYWd1ZXR0ZWJveC5qcy9kaXN0L2JhZ3VldHRlQm94Lm1pbi5jc3MnO1xyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXRhbG9ne1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcblxyXG4uY2F0YWxvZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi5jYXRhbG9nIGgye1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNhdGFsb2cgcHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDZlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jYXRhbG9nIHN0cm9uZ3tcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDZlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5vdmVydmlld3tcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxufVxyXG5cclxuLm92ZXJ2aWV3IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufVxyXG5cclxuLm92ZXJ2aWV3IGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ub3ZlcnZpZXcgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA2ZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ub3ZlcnZpZXcgcHsgICAgXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA2ZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ub3ZlcnZpZXcgc3Ryb25ne1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI2dhbGxlcnktaXRlbXsgIFxyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG59IiwiLyohXG4gKiBiYWd1ZXR0ZUJveC5qc1xuICogQGF1dGhvciAgZmVpbW9zaVxuICogQHZlcnNpb24gMS4xMS4xXG4gKiBAdXJsIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWltb3NpL2JhZ3VldHRlQm94LmpzXG4gKi8jYmFndWV0dGVCb3gtb3ZlcmxheXtkaXNwbGF5Om5vbmU7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO292ZXJmbG93OmhpZGRlbjt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjojMjIyO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuOCk7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjVzIGVhc2U7dHJhbnNpdGlvbjpvcGFjaXR5IC41cyBlYXNlfSNiYWd1ZXR0ZUJveC1vdmVybGF5LnZpc2libGV7b3BhY2l0eToxfSNiYWd1ZXR0ZUJveC1vdmVybGF5IC5mdWxsLWltYWdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9I2JhZ3VldHRlQm94LW92ZXJsYXkgLmZ1bGwtaW1hZ2UgZmlndXJle2Rpc3BsYXk6aW5saW5lO21hcmdpbjowO2hlaWdodDoxMDAlfSNiYWd1ZXR0ZUJveC1vdmVybGF5IC5mdWxsLWltYWdlIGltZ3tkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvO2hlaWdodDphdXRvO21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCA4cHggcmdiYSgwLDAsMCwuNik7LW1vei1ib3gtc2hhZG93OjAgMCA4cHggcmdiYSgwLDAsMCwuNik7Ym94LXNoYWRvdzowIDAgOHB4IHJnYmEoMCwwLDAsLjYpfSNiYWd1ZXR0ZUJveC1vdmVybGF5IC5mdWxsLWltYWdlIGZpZ2NhcHRpb257ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEuODt3aGl0ZS1zcGFjZTpub3JtYWw7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KTtmb250LWZhbWlseTpzYW5zLXNlcmlmfSNiYWd1ZXR0ZUJveC1vdmVybGF5IC5mdWxsLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjUwJTt3aWR0aDoxcHg7bWFyZ2luLXJpZ2h0Oi0xcHh9I2JhZ3VldHRlQm94LXNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC10cmFuc2l0aW9uOmxlZnQgLjRzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjRzIGVhc2U7dHJhbnNpdGlvbjpsZWZ0IC40cyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlO3RyYW5zaXRpb246bGVmdCAuNHMgZWFzZSx0cmFuc2Zvcm0gLjRzIGVhc2U7dHJhbnNpdGlvbjpsZWZ0IC40cyBlYXNlLHRyYW5zZm9ybSAuNHMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuNHMgZWFzZSwtbW96LXRyYW5zZm9ybSAuNHMgZWFzZX0jYmFndWV0dGVCb3gtc2xpZGVyLmJvdW5jZS1mcm9tLXJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOmJvdW5jZUZyb21SaWdodCAuNHMgZWFzZS1vdXQ7YW5pbWF0aW9uOmJvdW5jZUZyb21SaWdodCAuNHMgZWFzZS1vdXR9I2JhZ3VldHRlQm94LXNsaWRlci5ib3VuY2UtZnJvbS1sZWZ0ey13ZWJraXQtYW5pbWF0aW9uOmJvdW5jZUZyb21MZWZ0IC40cyBlYXNlLW91dDthbmltYXRpb246Ym91bmNlRnJvbUxlZnQgLjRzIGVhc2Utb3V0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VGcm9tUmlnaHR7MCUsMTAwJXttYXJnaW4tbGVmdDowfTUwJXttYXJnaW4tbGVmdDotMzBweH19QGtleWZyYW1lcyBib3VuY2VGcm9tUmlnaHR7MCUsMTAwJXttYXJnaW4tbGVmdDowfTUwJXttYXJnaW4tbGVmdDotMzBweH19QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUZyb21MZWZ0ezAlLDEwMCV7bWFyZ2luLWxlZnQ6MH01MCV7bWFyZ2luLWxlZnQ6MzBweH19QGtleWZyYW1lcyBib3VuY2VGcm9tTGVmdHswJSwxMDAle21hcmdpbi1sZWZ0OjB9NTAle21hcmdpbi1sZWZ0OjMwcHh9fS5iYWd1ZXR0ZUJveC1idXR0b24jbmV4dC1idXR0b24sLmJhZ3VldHRlQm94LWJ1dHRvbiNwcmV2aW91cy1idXR0b257dG9wOjUwJTt0b3A6Y2FsYyg1MCUgLSAzMHB4KTt3aWR0aDo0NHB4O2hlaWdodDo2MHB4fS5iYWd1ZXR0ZUJveC1idXR0b257cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7b3V0bGluZTowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDstbW96LWJvcmRlci1yYWRpdXM6MTUlO2JvcmRlci1yYWRpdXM6MTUlO2JhY2tncm91bmQtY29sb3I6IzMyMzIzMjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTAsNTAsNTAsLjUpO2NvbG9yOiNkZGQ7Zm9udDoxLjZlbSBzYW5zLXNlcmlmOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC40cyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuNHMgZWFzZX0uYmFndWV0dGVCb3gtYnV0dG9uOmZvY3VzLC5iYWd1ZXR0ZUJveC1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDUwLDUwLDUwLC45KX0uYmFndWV0dGVCb3gtYnV0dG9uI25leHQtYnV0dG9ue3JpZ2h0OjIlfS5iYWd1ZXR0ZUJveC1idXR0b24jcHJldmlvdXMtYnV0dG9ue2xlZnQ6MiV9LmJhZ3VldHRlQm94LWJ1dHRvbiNjbG9zZS1idXR0b257dG9wOjIwcHg7cmlnaHQ6MiU7cmlnaHQ6Y2FsYygyJSArIDZweCk7d2lkdGg6MzBweDtoZWlnaHQ6MzBweH0uYmFndWV0dGVCb3gtYnV0dG9uIHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmJhZ3VldHRlQm94LXNwaW5uZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi10b3A6LTIwcHg7bWFyZ2luLWxlZnQ6LTIwcHh9LmJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UxLC5iYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy1tb3otYm9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO29wYWNpdHk6LjY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uOmJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDthbmltYXRpb246Ym91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0fS5iYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMnstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc31ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYm91bmNlezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1vei10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\leandro-portfolio\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map