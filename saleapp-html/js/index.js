/*! jQuery UI - v1.12.1 - 2017-10-13
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete});
/*!
 * jQuery.ellipsis
 * http://github.com/jjenzz/jquery.ellipsis
 * --------------------------------------------------------------------------
 * Copyright (c) 2013 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * adds a class to the last 'allowed' line of text so you can apply
 * text-overflow: ellipsis;
 */
(function(factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. register as an anonymous module
    define(['jquery'], factory);
  } else {
    // browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var namespace = 'ellipsis',
      span = '<span style="white-space: nowrap;">',
      defaults = {
        lines: 'auto',
        ellipClass: 'ellip',
        responsive: false
      };

  /**
   * Ellipsis()
   * --------------------------------------------------------------------------
   * @param {Node} el
   * @param {Object} opts
   */
  function Ellipsis(el, opts) {
    var base = this,
        currLine = 0,
        lines = [],
        setStartEllipAt,
        startEllipAt,
        resizeTimer,
        currOffset,
        lineHeight,
        contHeight,
        words,
        htmlEntities;

    // List of HTML entities for escaping.
    htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };

    base.$cont = $(el);
    base.opts = $.extend({}, defaults, opts);

    /**
     * create() happens once when
     * instance is created
     */
    function create() {
      base.text = base.$cont.text();
      base.opts.ellipLineClass = base.opts.ellipClass + '-line';

      base.$el = $('<span class="' + base.opts.ellipClass + '" />');
      base.$el.text(base.text);

      base.$cont.empty().append(base.$el);

      init();
    }

    /**
     * init()
     */
    function init() {

      // if they only want one line just add
      // the class and do nothing else
      if (typeof base.opts.lines === 'number' && base.opts.lines < 2) {
        base.$el.addClass(base.opts.ellipLineClass);
        return;
      }

      contHeight = base.$cont.height();

      // if they only want to ellipsis the overflow
      // then do nothing if there is no overflow
      if (base.opts.lines === 'auto' && base.$el.prop('scrollHeight') <= contHeight) {
        return;
      }

      if (!setStartEllipAt) {
        return;
      }

      // create an array of words from our string
      words = $.trim(escapeText(base.text)).split(/\s+/);

      // wrap each word in a span and temporarily append to the DOM
      base.$el.html(span + words.join('</span> ' + span) + '</span>');

      // loop through words to determine which word the
      // ellipsis container should start from (need to
      // re-query spans from DOM so we can get their offset)
      base.$el.find('span').each(setStartEllipAt);

      // startEllipAt could be 0 so make sure we're
      // checking undefined instead of falsey
      if (startEllipAt != null) {
        updateText(startEllipAt);
      }
    }

    /**
     * updateText() updates the text in the DOM
     * with a span around the line that needs
     * to be truncated
     *
     * @param {Number} i
     */
    function updateText(nth) {
      // add a span that wraps from nth
      // word to the end of the string
      words[nth] = '<span class="' + base.opts.ellipLineClass + '">' + words[nth];
      words.push('</span>');

      // update the DOM with
      // our new string/markup
      base.$el.html(words.join(' '));
    }

    function escapeText(text){
      return String(text).replace(/[&<>"'\/]/g, function (s) {
        return htmlEntities[s];
      });
    }

    // only define the method if it's required
    if (base.opts.lines === 'auto') {

      /**
       * setStartEllipByHeight() sets the start
       * position to the first word in the last
       * line of the element that doesn't overflow
       *
       * @param {Number} i
       * @param {Node} word
       */
      var setStartEllipByHeight = function(i, word) {
        var $word = $(word),
            top = $word.position().top;

        lineHeight = lineHeight || $word.height();

        if (top === currOffset) {
          // if it's top matches currOffset
          // then it's on the same line
          // as the previous word
          lines[currLine].push($word);
        } else {
          // otherwise we're
          // on a new line
          currOffset = top;
          currLine += 1;
          lines[currLine] = [$word];
        }

        // if the bottom of the word is outside
        // the element (overflowing) then
        // stop looping and set startEllipAt to
        // the first word in the previous line
        if (top + lineHeight > contHeight) {
          startEllipAt = i - lines[currLine - 1].length;
          return false;
        }
      };

      setStartEllipAt = setStartEllipByHeight;
    }

    // only define the method if it's required
    if (typeof base.opts.lines === 'number' && base.opts.lines > 1) {

        /**
         * setStartEllipByLine() sets the start
         * position to the first word in the line
         * that was passed to opts. This forces
         * the ellipsis on a specific line
         * regardless of overflow
         *
         * @param {Number} i
         * @param {Node} word
         */
        var setStartEllipByLine = function(i, word) {
          var $word = $(word),
              top = $word.position().top;

          // if top isn't currOfset
          // then we're on a new line
          if (top !== currOffset) {
            currOffset = top;
            currLine += 1;
          }

          // if the word's currLine is equal
          // to the line limit passed via options
          // then start ellip from this
          // word and stop looping
          if (currLine === base.opts.lines) {
            startEllipAt = i;
            return false;
          }
      };

      setStartEllipAt = setStartEllipByLine;
    }

    // only bind to window resize if required
    if (base.opts.responsive) {

      /**
       * resize() resets necessary vars
       * and content and then re-initialises
       * the Ellipsis script
       */
      var resize = function() {
        lines = [];
        currLine = 0;
        currOffset = null;
        startEllipAt = null;
        base.$el.html(escapeText(base.text));

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 100);
      };

      $(window).on('resize.' + namespace, resize);
    }

    // start 'er up
    create();
  }

  $.fn[namespace] = function(opts) {
    return this.each(function() {
      try {
        $(this).data(namespace, (new Ellipsis(this, opts)));
      } catch (err) {
        if (window.console) {
          console.error(namespace + ': ' + err);
        }
      }
    });
  };

}));
/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function(exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var removeEventListener = 'remove' + EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() { pushed = 0; }, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller || el).scrollLeft -=
                                newScrollX = (-lastClientX + (lastClientX = e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (-lastClientY + (lastClientY = e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }


    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));
jQuery(document).ready(function($) {

    var cols = {},

        messageIsOpen = false;

    cols.showOverlay = function() {
        $('body').addClass('show-main-overlay');
    };
    cols.hideOverlay = function() {
        $('body').removeClass('show-main-overlay');
    };


    cols.showMessage = function() {
        $('body').addClass('show-menu');
        messageIsOpen = true;
    };
    cols.hideMessage = function() {
        $('body').removeClass('show-menu');
        $('#main .fillter-tool li').removeClass('active');
        messageIsOpen = false;
    };


    cols.showSidebar = function() {
        $('body').addClass('show-sidebar');
    };
    cols.hideSidebar = function() {
        $('body').removeClass('show-sidebar');
    };


    // Show sidebar when trigger is clicked

    $('.trigger-toggle-sidebar').on('click', function() {
        cols.showSidebar();
        cols.showOverlay();
    });


    $('.trigger-message-close').on('click', function() {
        cols.hideMessage();
        cols.hideOverlay();
    });


    // When you click on a message, show it

    $('#main .fillter-tool li').on('click', function(e) {
        var item = $(this),
            target = $(e.target);

        if (target.is('label')) {
            item.toggleClass('selected');
        } else {
            if (messageIsOpen && item.is('.active')) {
                cols.hideMessage();
                cols.hideOverlay();
            } else {
                if (messageIsOpen) {
                    cols.hideMessage();
                    item.addClass('active');
                    setTimeout(function() {
                        cols.showMessage();
                    }, 300);
                } else {
                    item.addClass('active');
                    cols.showMessage();
                }
                cols.showOverlay();
            }
        }
    });


    // This will prevent click from triggering twice when clicking checkbox/label

    $('input[type=checkbox]').on('click', function(e) {
        e.stopImmediatePropagation();
    });



    // When you click the overlay, close everything

    $('#main > .overlay').on('click', function() {
        cols.hideOverlay();
        cols.hideMessage();
        cols.hideSidebar();
    });



    // Enable sexy scrollbars




    // Disable links



    // Search box responsive stuff

    $('.search-box input').on('focus', function() {
        if ($(window).width() <= 1360) {
            cols.hideMessage();
        }
    });

});




/*! nanoScrollerJS - v0.8.0 - 2014
 * https://jamesflorentino.github.com/nanoScrollerJS/
 * Copyright (c) 2014 James Florentino; Licensed MIT */
(function($, window, document) {
    "use strict";
    var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
    defaults = {

        /**
          a classname for the pane element.
          @property paneClass
          @type String
          @default 'nano-pane'
         */
        paneClass: 'nano-pane',

        /**
          a classname for the slider element.
          @property sliderClass
          @type String
          @default 'nano-slider'
         */
        sliderClass: 'nano-slider',

        /**
          a classname for the content element.
          @property contentClass
          @type String
          @default 'nano-content'
         */
        contentClass: 'nano-content',

        /**
          a setting to enable native scrolling in iOS devices.
          @property iOSNativeScrolling
          @type Boolean
          @default false
         */
        iOSNativeScrolling: false,

        /**
          a setting to prevent the rest of the page being
          scrolled when user scrolls the `.content` element.
          @property preventPageScrolling
          @type Boolean
          @default false
         */
        preventPageScrolling: false,

        /**
          a setting to disable binding to the resize event.
          @property disableResize
          @type Boolean
          @default false
         */
        disableResize: false,

        /**
          a setting to make the scrollbar always visible.
          @property alwaysVisible
          @type Boolean
          @default false
         */
        alwaysVisible: false,

        /**
          a default timeout for the `flash()` method.
          @property flashDelay
          @type Number
          @default 1500
         */
        flashDelay: 1500,

        /**
          a minimum height for the `.slider` element.
          @property sliderMinHeight
          @type Number
          @default 20
         */
        sliderMinHeight: 20,

        /**
          a maximum height for the `.slider` element.
          @property sliderMaxHeight
          @type Number
          @default null
         */
        sliderMaxHeight: null,

        /**
          an alternate document context.
          @property documentContext
          @type Document
          @default null
         */
        documentContext: null,

        /**
          an alternate window context.
          @property windowContext
          @type Window
          @default null
         */
        windowContext: null
    };

    /**
      @property SCROLLBAR
      @type String
      @static
      @final
      @private
     */
    SCROLLBAR = 'scrollbar';

    /**
      @property SCROLL
      @type String
      @static
      @final
      @private
     */
    SCROLL = 'scroll';

    /**
      @property MOUSEDOWN
      @type String
      @final
      @private
     */
    MOUSEDOWN = 'mousedown';

    /**
      @property MOUSEMOVE
      @type String
      @static
      @final
      @private
     */
    MOUSEMOVE = 'mousemove';

    /**
      @property MOUSEWHEEL
      @type String
      @final
      @private
     */
    MOUSEWHEEL = 'mousewheel';

    /**
      @property MOUSEUP
      @type String
      @static
      @final
      @private
     */
    MOUSEUP = 'mouseup';

    /**
      @property RESIZE
      @type String
      @final
      @private
     */
    RESIZE = 'resize';

    /**
      @property DRAG
      @type String
      @static
      @final
      @private
     */
    DRAG = 'drag';

    /**
      @property UP
      @type String
      @static
      @final
      @private
     */
    UP = 'up';

    /**
      @property PANEDOWN
      @type String
      @static
      @final
      @private
     */
    PANEDOWN = 'panedown';

    /**
      @property DOMSCROLL
      @type String
      @static
      @final
      @private
     */
    DOMSCROLL = 'DOMMouseScroll';

    /**
      @property DOWN
      @type String
      @static
      @final
      @private
     */
    DOWN = 'down';

    /**
      @property WHEEL
      @type String
      @static
      @final
      @private
     */
    WHEEL = 'wheel';

    /**
      @property KEYDOWN
      @type String
      @static
      @final
      @private
     */
    KEYDOWN = 'keydown';

    /**
      @property KEYUP
      @type String
      @static
      @final
      @private
     */
    KEYUP = 'keyup';

    /**
      @property TOUCHMOVE
      @type String
      @static
      @final
      @private
     */
    TOUCHMOVE = 'touchmove';

    /**
      @property BROWSER_IS_IE7
      @type Boolean
      @static
      @final
      @private
     */
    BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;

    /**
      @property BROWSER_SCROLLBAR_WIDTH
      @type Number
      @static
      @default null
      @private
     */
    BROWSER_SCROLLBAR_WIDTH = null;
    rAF = window.requestAnimationFrame;
    cAF = window.cancelAnimationFrame;
    _elementStyle = document.createElement('div').style;
    _vendor = (function() {
        var i, transform, vendor, vendors, _i, _len;
        vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
        for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
            vendor = vendors[i];
            transform = vendors[i] + 'ransform';
            if (transform in _elementStyle) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }
        return false;
    })();
    _prefixStyle = function(style) {
        if (_vendor === false) {
            return false;
        }
        if (_vendor === '') {
            return style;
        }
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    };
    transform = _prefixStyle('transform');
    hasTransform = transform !== false;

    /**
      Returns browser's native scrollbar width
      @method getBrowserScrollbarWidth
      @return {Number} the scrollbar width in pixels
      @static
      @private
     */
    getBrowserScrollbarWidth = function() {
        var outer, outerStyle, scrollbarWidth;
        outer = document.createElement('div');
        outerStyle = outer.style;
        outerStyle.position = 'absolute';
        outerStyle.width = '100px';
        outerStyle.height = '100px';
        outerStyle.overflow = SCROLL;
        outerStyle.top = '-9999px';
        document.body.appendChild(outer);
        scrollbarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);
        return scrollbarWidth;
    };
    isFFWithBuggyScrollbar = function() {
        var isOSXFF, ua, version;
        ua = window.navigator.userAgent;
        isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
        if (!isOSXFF) {
            return false;
        }
        version = /Firefox\/\d{2}\./.exec(ua);
        if (version) {
            version = version[0].replace(/\D+/g, '');
        }
        return isOSXFF && +version > 23;
    };

    /**
      @class NanoScroll
      @param element {HTMLElement|Node} the main element
      @param options {Object} nanoScroller's options
      @constructor
     */
    NanoScroll = (function() {
        function NanoScroll(el, options) {
            this.el = el;
            this.options = options;
            BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
            this.$el = $(this.el);
            this.doc = $(this.options.documentContext || document);
            this.win = $(this.options.windowContext || window);
            this.$content = this.$el.children("." + options.contentClass);
            this.$content.attr('tabindex', this.options.tabIndex || 0);
            this.content = this.$content[0];
            if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
                this.nativeScrolling();
            } else {
                this.generate();
            }
            this.createEvents();
            this.addEvents();
            this.reset();
        }


        /**
          Prevents the rest of the page being scrolled
          when user scrolls the `.nano-content` element.
          @method preventScrolling
          @param event {Event}
          @param direction {String} Scroll direction (up or down)
          @private
         */

        NanoScroll.prototype.preventScrolling = function(e, direction) {
            if (!this.isActive) {
                return;
            }
            if (e.type === DOMSCROLL) {
                if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
                    e.preventDefault();
                }
            } else if (e.type === MOUSEWHEEL) {
                if (!e.originalEvent || !e.originalEvent.wheelDelta) {
                    return;
                }
                if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
                    e.preventDefault();
                }
            }
        };


        /**
          Enable iOS native scrolling
          @method nativeScrolling
          @private
         */

        NanoScroll.prototype.nativeScrolling = function() {
            this.$content.css({
                WebkitOverflowScrolling: 'touch'
            });
            this.iOSNativeScrolling = true;
            this.isActive = true;
        };


        /**
          Updates those nanoScroller properties that
          are related to current scrollbar position.
          @method updateScrollValues
          @private
         */

        NanoScroll.prototype.updateScrollValues = function() {
            var content;
            content = this.content;
            this.maxScrollTop = content.scrollHeight - content.clientHeight;
            this.prevScrollTop = this.contentScrollTop || 0;
            this.contentScrollTop = content.scrollTop;
            if (!this.iOSNativeScrolling) {
                this.maxSliderTop = this.paneHeight - this.sliderHeight;
                this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
            }
        };


        /**
          Updates CSS styles for current scroll position.
          Uses CSS 2d transfroms and `window.requestAnimationFrame` if available.
          @method setOnScrollStyles
          @private
         */

        NanoScroll.prototype.setOnScrollStyles = function() {
            var cssValue;
            if (hasTransform) {
                cssValue = {};
                cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
            } else {
                cssValue = {
                    top: this.sliderTop
                };
            }
            if (rAF) {
                if (!this.scrollRAF) {
                    this.scrollRAF = rAF((function(_this) {
                        return function() {
                            _this.scrollRAF = null;
                            _this.slider.css(cssValue);
                        };
                    })(this));
                }
            } else {
                this.slider.css(cssValue);
            }
        };


        /**
          Creates event related methods
          @method createEvents
          @private
         */

        NanoScroll.prototype.createEvents = function() {
            this.events = {
                down: (function(_this) {
                    return function(e) {
                        _this.isBeingDragged = true;
                        _this.offsetY = e.pageY - _this.slider.offset().top;
                        _this.pane.addClass('active');
                        _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
                        return false;
                    };
                })(this),
                drag: (function(_this) {
                    return function(e) {
                        _this.sliderY = e.pageY - _this.$el.offset().top - _this.offsetY;
                        _this.scroll();
                        if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
                            _this.$el.trigger('scrollend');
                        } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
                            _this.$el.trigger('scrolltop');
                        }
                        return false;
                    };
                })(this),
                up: (function(_this) {
                    return function(e) {
                        _this.isBeingDragged = false;
                        _this.pane.removeClass('active');
                        _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
                        return false;
                    };
                })(this),
                resize: (function(_this) {
                    return function(e) {
                        _this.reset();
                    };
                })(this),
                panedown: (function(_this) {
                    return function(e) {
                        _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
                        _this.scroll();
                        _this.events.down(e);
                        return false;
                    };
                })(this),
                scroll: (function(_this) {
                    return function(e) {
                        _this.updateScrollValues();
                        if (_this.isBeingDragged) {
                            return;
                        }
                        if (!_this.iOSNativeScrolling) {
                            _this.sliderY = _this.sliderTop;
                            _this.setOnScrollStyles();
                        }
                        if (e == null) {
                            return;
                        }
                        if (_this.contentScrollTop >= _this.maxScrollTop) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, DOWN);
                            }
                            if (_this.prevScrollTop !== _this.maxScrollTop) {
                                _this.$el.trigger('scrollend');
                            }
                        } else if (_this.contentScrollTop === 0) {
                            if (_this.options.preventPageScrolling) {
                                _this.preventScrolling(e, UP);
                            }
                            if (_this.prevScrollTop !== 0) {
                                _this.$el.trigger('scrolltop');
                            }
                        }
                    };
                })(this),
                wheel: (function(_this) {
                    return function(e) {
                        var delta;
                        if (e == null) {
                            return;
                        }
                        delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
                        if (delta) {
                            _this.sliderY += -delta / 3;
                        }
                        _this.scroll();
                        return false;
                    };
                })(this)
            };
        };


        /**
          Adds event listeners with jQuery.
          @method addEvents
          @private
         */

        NanoScroll.prototype.addEvents = function() {
            var events;
            this.removeEvents();
            events = this.events;
            if (!this.options.disableResize) {
                this.win.bind(RESIZE, events[RESIZE]);
            }
            if (!this.iOSNativeScrolling) {
                this.slider.bind(MOUSEDOWN, events[DOWN]);
                this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
            }
            this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
          Removes event listeners with jQuery.
          @method removeEvents
          @private
         */

        NanoScroll.prototype.removeEvents = function() {
            var events;
            events = this.events;
            this.win.unbind(RESIZE, events[RESIZE]);
            if (!this.iOSNativeScrolling) {
                this.slider.unbind();
                this.pane.unbind();
            }
            this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
          Generates nanoScroller's scrollbar and elements for it.
          @method generate
          @chainable
          @private
         */

        NanoScroll.prototype.generate = function() {
            var contentClass, cssRule, currentPadding, options, paneClass, sliderClass;
            options = this.options;
            paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
            if (!this.$el.find("." + paneClass).length && !this.$el.find("." + sliderClass).length) {
                this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
            }
            this.pane = this.$el.children("." + paneClass);
            this.slider = this.pane.find("." + sliderClass);
            if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
                currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/\D+/g, '');
                cssRule = {
                    right: -14,
                    paddingRight: +currentPadding + 14
                };
            } else if (BROWSER_SCROLLBAR_WIDTH) {
                cssRule = {
                    right: -BROWSER_SCROLLBAR_WIDTH
                };
                this.$el.addClass('has-scrollbar');
            }
            if (cssRule != null) {
                this.$content.css(cssRule);
            }
            return this;
        };


        /**
          @method restore
          @private
         */

        NanoScroll.prototype.restore = function() {
            this.stopped = false;
            if (!this.iOSNativeScrolling) {
                this.pane.show();
            }
            this.addEvents();
        };


        /**
          Resets nanoScroller's scrollbar.
          @method reset
          @chainable
          @example
              $(".nano").nanoScroller();
         */

        NanoScroll.prototype.reset = function() {
            var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
            if (this.iOSNativeScrolling) {
                this.contentHeight = this.content.scrollHeight;
                return;
            }
            if (!this.$el.find("." + this.options.paneClass).length) {
                this.generate().stop();
            }
            if (this.stopped) {
                this.restore();
            }
            content = this.content;
            contentStyle = content.style;
            contentStyleOverflowY = contentStyle.overflowY;
            if (BROWSER_IS_IE7) {
                this.$content.css({
                    height: this.$content.height()
                });
            }
            contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
            parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
            if (parentMaxHeight > 0) {
                this.$el.height("");
                this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
            }
            paneHeight = this.pane.outerHeight(false);
            paneTop = parseInt(this.pane.css('top'), 10);
            paneBottom = parseInt(this.pane.css('bottom'), 10);
            paneOuterHeight = paneHeight + paneTop + paneBottom;
            sliderHeight = Math.round(paneOuterHeight / contentHeight * paneOuterHeight);
            if (sliderHeight < this.options.sliderMinHeight) {
                sliderHeight = this.options.sliderMinHeight;
            } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
                sliderHeight = this.options.sliderMaxHeight;
            }
            if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
                sliderHeight += BROWSER_SCROLLBAR_WIDTH;
            }
            this.maxSliderTop = paneOuterHeight - sliderHeight;
            this.contentHeight = contentHeight;
            this.paneHeight = paneHeight;
            this.paneOuterHeight = paneOuterHeight;
            this.sliderHeight = sliderHeight;
            this.slider.height(sliderHeight);
            this.events.scroll();
            this.pane.show();
            this.isActive = true;
            if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
                this.pane.hide();
                this.isActive = false;
            } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
                this.slider.hide();
            } else {
                this.slider.show();
            }
            this.pane.css({
                opacity: (this.options.alwaysVisible ? 1 : ''),
                visibility: (this.options.alwaysVisible ? 'visible' : '')
            });
            contentPosition = this.$content.css('position');
            if (contentPosition === 'static' || contentPosition === 'relative') {
                right = parseInt(this.$content.css('right'), 10);
                if (right) {
                    this.$content.css({
                        right: '',
                        marginRight: right
                    });
                }
            }
            return this;
        };


        /**
          @method scroll
          @private
          @example
              $(".nano").nanoScroller({ scroll: 'top' });
         */

        NanoScroll.prototype.scroll = function() {
            if (!this.isActive) {
                return;
            }
            this.sliderY = Math.max(0, this.sliderY);
            this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
            this.$content.scrollTop((this.paneHeight - this.contentHeight + BROWSER_SCROLLBAR_WIDTH) * this.sliderY / this.maxSliderTop * -1);
            if (!this.iOSNativeScrolling) {
                this.updateScrollValues();
                this.setOnScrollStyles();
            }
            return this;
        };


        /**
          Scroll at the bottom with an offset value
          @method scrollBottom
          @param offsetY {Number}
          @chainable
          @example
              $(".nano").nanoScroller({ scrollBottom: value });
         */

        NanoScroll.prototype.scrollBottom = function(offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };


        /**
          Scroll at the top with an offset value
          @method scrollTop
          @param offsetY {Number}
          @chainable
          @example
              $(".nano").nanoScroller({ scrollTop: value });
         */

        NanoScroll.prototype.scrollTop = function(offsetY) {
            if (!this.isActive) {
                return;
            }
            this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
            this.stop().restore();
            return this;
        };


        /**
          Scroll to an element
          @method scrollTo
          @param node {Node} A node to scroll to.
          @chainable
          @example
              $(".nano").nanoScroller({ scrollTo: $('#a_node') });
         */

        NanoScroll.prototype.scrollTo = function(node) {
            if (!this.isActive) {
                return;
            }
            this.scrollTop(this.$el.find(node).get(0).offsetTop);
            return this;
        };


        /**
          To stop the operation.
          This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
          @method stop
          @chainable
          @example
              $(".nano").nanoScroller({ stop: true });
         */

        NanoScroll.prototype.stop = function() {
            if (cAF && this.scrollRAF) {
                cAF(this.scrollRAF);
                this.scrollRAF = null;
            }
            this.stopped = true;
            this.removeEvents();
            if (!this.iOSNativeScrolling) {
                this.pane.hide();
            }
            return this;
        };


        /**
          Destroys nanoScroller and restores browser's native scrollbar.
          @method destroy
          @chainable
          @example
              $(".nano").nanoScroller({ destroy: true });
         */

        NanoScroll.prototype.destroy = function() {
            if (!this.stopped) {
                this.stop();
            }
            if (!this.iOSNativeScrolling && this.pane.length) {
                this.pane.remove();
            }
            if (BROWSER_IS_IE7) {
                this.$content.height('');
            }
            this.$content.removeAttr('tabindex');
            if (this.$el.hasClass('has-scrollbar')) {
                this.$el.removeClass('has-scrollbar');
                this.$content.css({
                    right: ''
                });
            }
            return this;
        };


        /**
          To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
          Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
          @method flash
          @chainable
          @example
              $(".nano").nanoScroller({ flash: true });
         */

        NanoScroll.prototype.flash = function() {
            if (this.iOSNativeScrolling) {
                return;
            }
            if (!this.isActive) {
                return;
            }
            this.reset();
            this.pane.addClass('flashed');
            setTimeout((function(_this) {
                return function() {
                    _this.pane.removeClass('flashed');
                };
            })(this), this.options.flashDelay);
            return this;
        };

        return NanoScroll;

    })();
    $.fn.nanoScroller = function(settings) {
        return this.each(function() {
            var options, scrollbar;
            if (!(scrollbar = this.nanoscroller)) {
                options = $.extend({}, defaults, settings);
                this.nanoscroller = scrollbar = new NanoScroll(this, options);
            }
            if (settings && typeof settings === "object") {
                $.extend(scrollbar.options, settings);
                if (settings.scrollBottom != null) {
                    return scrollbar.scrollBottom(settings.scrollBottom);
                }
                if (settings.scrollTop != null) {
                    return scrollbar.scrollTop(settings.scrollTop);
                }
                if (settings.scrollTo) {
                    return scrollbar.scrollTo(settings.scrollTo);
                }
                if (settings.scroll === 'bottom') {
                    return scrollbar.scrollBottom(0);
                }
                if (settings.scroll === 'top') {
                    return scrollbar.scrollTop(0);
                }
                if (settings.scroll && settings.scroll instanceof $) {
                    return scrollbar.scrollTo(settings.scroll);
                }
                if (settings.stop) {
                    return scrollbar.stop();
                }
                if (settings.destroy) {
                    return scrollbar.destroy();
                }
                if (settings.flash) {
                    return scrollbar.flash();
                }
            }
            return scrollbar.reset();
        });
    };
    $.fn.nanoScroller.Constructor = NanoScroll;
})(jQuery, window, document);

//# sourceMappingURL=jquery.nanoscroller.js.map
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// Form input
$(function() {
    $('.form1 .form-group input').focusout(function() {
        var text_val = $(this).val();
        if (text_val === "") {
            $(this).removeClass('has-value');
        } else {
            $(this).addClass('has-value');
        }
    });
    $('.form1 .select2').focusout(function() {
        var text_val = $(this).val();
        if (text_val === "") {
            $(this).removeClass('has-value');
        } else {
            $(this).addClass('has-value');
        }
    });
});
// End Form input

// Form search
$(document).ready(function() {
    function setCurrency(currency) {
        if (!currency.id) { return currency.text; }
        var $currency = $('<div class="title-cont">' + currency.text + '</div>' + '<div class="title-search">' + currency.element.value + '</div>');
        return $currency;
    };
    $(".txt_search").select2({
        placeholder: "Tìm kiếm chiến dịch hoặc sản phẩm liên quan", //placeholder
        templateResult: setCurrency,
        allowClear: true,
        templateSelection: setCurrency
    });
})

$('#txt_search').select2({
    dropdownParent: $('#campain_detail')
});
// End Form search

$('ul.list-group li').click(function() {
    $('ul.list-group li.active').removeClass('active');
    $(this).addClass('active').children('input[type="radio"]').prop('checked', true);
});