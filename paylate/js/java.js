// Initiate
$('.optionView').hide();

// Slide
$(document).on('click', '#option', function (evt) {
  var optionID = $(this).data('option');  
  $('#optionMenu').toggle('slide', {direction: 'left'});
  $('#optionView'+optionID).toggle('slide', {direction: 'right'});
});

// Popover
$(function(){
  $('.popover-markup > .trigger').popover({
        html: true,
        placement: "bottom",
        title: function () {
            return $(this).parent().find('.head').html();
        },
        content: function () {
            return $(this).parent().find('.content').html();
        },
        template: '<div class="popover dashboardPopover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
    });
});
$(function(){$("input, textarea").placeholder()});(function(e,t,n){function r(e){var t={};var r=/^jQuery\d+$/;n.each(e.attributes,function(e,n){if(n.specified&&!r.test(n.name)){t[n.name]=n.value}});return t}function i(e,t){var r=this;var i=n(r);if(r.value==i.attr("placeholder")&&i.hasClass("placeholder")){if(i.data("placeholder-password")){i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id"));if(e===true){return i[0].value=t}i.focus()}else{r.value="";i.removeClass("placeholder");r==o()&&r.select()}}}function s(){var e;var t=this;var s=n(t);var o=this.id;if(t.value==""){if(t.type=="password"){if(!s.data("placeholder-textinput")){try{e=s.clone().attr({type:"text"})}catch(u){e=n("<input>").attr(n.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":s,"placeholder-id":o}).bind("focus.placeholder",i);s.data({"placeholder-textinput":e,"placeholder-id":o}).before(e)}s=s.removeAttr("id").hide().prev().attr("id",o).show()}s.addClass("placeholder");s[0].value=s.attr("placeholder")}else{s.removeClass("placeholder")}}function o(){try{return t.activeElement}catch(e){}}var u=Object.prototype.toString.call(e.operamini)=="[object OperaMini]";var a="placeholder"in t.createElement("input")&&!u;var f="placeholder"in t.createElement("textarea")&&!u;var l=n.fn;var c=n.valHooks;var h=n.propHooks;var p;var d;if(a&&f){d=l.placeholder=function(){return this};d.input=d.textarea=true}else{d=l.placeholder=function(){var e=this;e.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":s}).data("placeholder-enabled",true).trigger("blur.placeholder");return e};d.input=a;d.textarea=f;p={get:function(e){var t=n(e);var r=t.data("placeholder-password");if(r){return r[0].value}return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e);var u=r.data("placeholder-password");if(u){return u[0].value=t}if(!r.data("placeholder-enabled")){return e.value=t}if(t==""){e.value=t;if(e!=o()){s.call(e)}}else if(r.hasClass("placeholder")){i.call(e,true,t)||(e.value=t)}else{e.value=t}return r}};if(!a){c.input=p;h.value=p}if(!f){c.textarea=p;h.value=p}n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(i);setTimeout(function(){e.each(s)},10)})});n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})})}})(this,document,jQuery)

