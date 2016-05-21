"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,o){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(l,o["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,o=n["default"].APP.version;e["default"]=t["default"].extend({version:o,name:a})}),define("dummy/components/confirm-dialog",["exports","ember-confirm-dialog/components/confirm-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-modal-dialog-positioned-container",["exports","ember-modal-dialog/components/positioned-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/modal-dialog-overlay",["exports","ember-modal-dialog/components/modal-dialog-overlay"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/modal-dialog",["exports","ember-modal-dialog/components/modal-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/tether-dialog",["exports","ember-modal-dialog/components/tether-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({disabled:!1,actions:{confirmedAction:function(){alert("Hello world confirmed!")},destroyWorld:function(){alert("World has been destroyed, thanks for using our services.")},confirmDestroy:function(){alert("World will be destroyd shortly, please wait...")},cancelDestroy:function(){alert("Uff, that was close, man!")}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/add-modals-container",["exports","ember-modal-dialog/initializers/add-modals-container"],function(e,t){e["default"]={name:"add-modals-container",initialize:t["default"]}}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,o=n["default"].exportApplicationGlobal;a="string"==typeof o?o:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/modal-dialog",["exports","ember-modal-dialog/services/modal-dialog"],function(e,t){e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:9,column:2},end:{line:11,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Click me!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),o=new Array(1);return o[0]=e.createElementMorph(a),o},statements:[["element","action",["confirmedAction"],[],["loc",[null,[10,14],[10,42]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:17,column:2},end:{line:26,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("DESTROY THE WORLD !");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),o=new Array(1);return o[0]=e.createElementMorph(a),o},statements:[["element","action",["destroyWorld"],[],["loc",[null,[25,14],[25,39]]]]],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:30,column:2},end:{line:38,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Click me!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),o=new Array(1);return o[0]=e.createElementMorph(a),o},statements:[["element","action",["confirmedAction"],[],["loc",[null,[37,14],[37,42]]]]],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:42,column:2},end:{line:49,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Click me!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),o=new Array(1);return o[0]=e.createElementMorph(a),o},statements:[["element","action",["confirmedAction"],[],["loc",[null,[48,14],[48,42]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:51,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Ember-confirm-dialog");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("label");e.setAttribute(a,"for","checkDisabled");var o=e.createTextNode("Disabled: ");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode(" ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("h3"),o=e.createTextNode("Confirm dialog with default settings");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h3"),o=e.createTextNode("Confirm dialog with custom texts and all the callbacks");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("p");e.setAttribute(a,"class","help-block");var o=e.createTextNode("Custom callbacks for confirm and cancel buttons");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h3"),o=e.createTextNode("Confirm dialog with Bootstrap (CSS classes for confirm/cancel buttons) and button icons (FontAwesome or any other font icon)");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h3"),o=e.createTextNode("Confirm dialog with title and custom CSS classes");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),o=new Array(5);return o[0]=e.createMorphAt(a,3,3),o[1]=e.createMorphAt(a,7,7),o[2]=e.createMorphAt(a,13,13),o[3]=e.createMorphAt(a,17,17),o[4]=e.createMorphAt(a,21,21),o},statements:[["inline","input",[],["id","checkDisabled","type","checkbox","checked",["subexpr","@mut",[["get","disabled",["loc",[null,[5,99],[5,107]]]]],[],[]]],["loc",[null,[5,48],[5,109]]]],["block","confirm-dialog",[],["disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[9,29],[9,37]]]]],[],[]]],0,null,["loc",[null,[9,2],[11,21]]]],["block","confirm-dialog",[],["text","Do you want to destry the world?","confirmButton","Yeah, do it!","cancelButton","Noooooo!!!!!","confirmAction",["subexpr","action",["confirmDestroy"],[],["loc",[null,[21,16],[21,41]]]],"cancelAction",["subexpr","action",["cancelDestroy"],[],["loc",[null,[22,15],[22,39]]]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[23,11],[23,19]]]]],[],[]]],1,null,["loc",[null,[17,2],[26,21]]]],["block","confirm-dialog",[],["confirmButtonClass","btn btn-success","cancelButtonClass","btn btn-danger","okCssIcon","fa fa-check-circle-o","cancelCssIcon","fa fa-ban","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[35,11],[35,19]]]]],[],[]]],2,null,["loc",[null,[30,2],[38,21]]]],["block","confirm-dialog",[],["dialogClass","custom-confirm-dialog","title","This is a title","text","And this is a content","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[46,11],[46,19]]]]],[],[]]],3,null,["loc",[null,[42,2],[49,21]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/templates/components/modal-dialog",["exports","ember-modal-dialog/templates/components/modal-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/components/tether-dialog",["exports","ember-modal-dialog/templates/components/tether-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),o=JSON.parse(unescape(a));return{"default":o}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-confirm-dialog",version:"0.3.0+c3981903"});