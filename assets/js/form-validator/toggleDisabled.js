/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.201
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a,b,c){"use strict";var d=function(a,b){"disabled"===b?a.find('*[type="submit"]').addClass("disabled").attr("disabled","disabled"):a.find('*[type="submit"]').removeClass("disabled").removeAttr("disabled")},e=!1;a.formUtils.$win.bind("validatorsLoaded formValidationSetup",function(b,f,g){var h=g.disabledFormFilter?f.filter(g.disabledFormFilter):f,i=g.showErrorDialogs===c||g.showErrorDialogs,j=function(b,c,d){var e=a(this);d.indexOf("blur")>-1?e.unbind("afterValidation",j):c.isValid?e.unbind("afterValidation",j):e.valAttr("have-been-blurred")||(c.shouldChangeDisplay=!1)};h.addClass(i?"disabled-with-errors":"disabled-without-errors").find("*[data-validation]").valAttr("event","keyup change").on("validation",function(b,c){if(!e){e=!0;var f=a(this).closest("form");c&&f.isValid(g,g.language,!1)?d(f,"enabled"):d(f,"disabled"),e=!1}}).on("afterValidation",j).on("blur",function(){a(this).valAttr("have-been-blurred",1)}),d(h,"disabled"),h.validateOnEvent(g.language,g)}).on("validationErrorDisplay",function(a,b,c){b.closest("form").hasClass("disabled-without-errors")&&c.hide()})}(a,window)});