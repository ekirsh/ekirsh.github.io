/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_DesignButton}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("downloads.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_DesignButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
          sym.$("DesignButton").css('box-shadow', '3px 3px 3px rgba(0,0,0,0.65)');
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_DesignButton}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.$("DesignButton").css('box-shadow', '0px 0px 0px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AppButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
          sym.$("AppButton").css('box-shadow', '3px 3px 3px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AppButton}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
          sym.$("AppButton").css('box-shadow', '0px 0px 0px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SocialButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
          sym.$("SocialButton").css('box-shadow', '3px 3px 3px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SocialButton}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
          sym.$("SocialButton").css('box-shadow', '0px 0px 0px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_OtherButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
          sym.$("OtherButton").css('box-shadow', '3px 3px 3px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_OtherButton}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
          sym.$("OtherButton").css('box-shadow', '0px 0px 0px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
          sym.$("SocialButton").css('box-shadow', '0px 0px 0px rgba(0,0,0,0.65)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 993, function(sym, e) {
         // insert code here
         sym.$("Text3").css('color', '#000000');
         sym.$("Ellipse").css('color', '#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2558, function(sym, e) {
         // insert code here
         this.play(0);
         sym.$("Text3").css('color', '#FFFFFF');
         sym.$("Ellipse").css('color', '#FFFFFF');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-808270");