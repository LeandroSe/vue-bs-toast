(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueBsToast"] = factory();
	else
		root["vueBsToast"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ToastManager = __webpack_require__(1);
	
	var _ToastManager2 = _interopRequireDefault(_ToastManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ToastManager2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(2)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/leandrose/project/vue-bs-toast/src/ToastManager.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-066365b7"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-066365b7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-066365b7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ToastManager.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-066365b7&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToastManager.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-066365b7&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToastManager.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toasts[data-v-066365b7] {\n  width: 70%;\n  overflow: hidden;\n  position: absolute;\n  z-index: 999999;\n}\n@media (min-width: 768px) {\n.toasts[data-v-066365b7] {\n      width: 40%;\n}\n}\n.top-left[data-v-066365b7], .top-center[data-v-066365b7], .top-right[data-v-066365b7] {\n  top: 0;\n  margin-top: 10px;\n}\n.bottom-left[data-v-066365b7], .bottom-center[data-v-066365b7], .bottom-right[data-v-066365b7] {\n  bottom: 0;\n  margin-bottom: 10px;\n}\n.top-left[data-v-066365b7], .bottom-left[data-v-066365b7] {\n  left: 0;\n  margin-left: 15px;\n}\n.top-right[data-v-066365b7], .bottom-right[data-v-066365b7] {\n  right: 0;\n  margin-right: 15px;\n}\n.top-center[data-v-066365b7] {\n  top: 15px;\n}\n.bottom-center[data-v-066365b7] {\n  bottom: 15px;\n}\n.top-center[data-v-066365b7], .bottom-center[data-v-066365b7] {\n  position: fixed;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.toast[data-v-066365b7] {\n  padding: 15px 15px;\n  margin-bottom: 5px;\n  width: 100%;\n  text-align: center;\n}\n.toast-default[data-v-066365b7] {\n  border-radius: 6px;\n  color: #000;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n.toast-primary[data-v-066365b7] {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #337ab7;\n}\n.toast-info[data-v-066365b7] {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #5bc0de;\n}\n.toast-success[data-v-066365b7] {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #5cb85c;\n}\n.toast-warning[data-v-066365b7] {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #f0ad4e;\n}\n.toast-danger[data-v-066365b7] {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #d9534f;\n}\n.list-enter-active[data-v-066365b7], .list-leave-active[data-v-066365b7] {\n  transition: all .5s;\n}\n.list-enter[data-v-066365b7], .list-leave-active[data-v-066365b7] {\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./src/ToastManager.vue"],"names":[],"mappings":";AAAA;EACE,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;CAAE;AAClB;AACE;MACE,WAAW;CAAE;CAAE;AAErB;EACE,OAAO;EACP,iBAAiB;CAAE;AAErB;EACE,UAAU;EACV,oBAAoB;CAAE;AAExB;EACE,QAAQ;EACR,kBAAkB;CAAE;AAEtB;EACE,SAAS;EACT,mBAAmB;CAAE;AAEvB;EACE,UAAU;CAAE;AAEd;EACE,aAAa;CAAE;AAEjB;EACE,gBAAgB;EAChB,UAAU;EACV,+BAA+B;CAAE;AAEnC;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;CAAE;AAE3B;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,oBAAoB;CAAE;AAExB;EACE,WAAW;CAAE","file":"ToastManager.vue","sourcesContent":[".toasts {\n  width: 70%;\n  overflow: hidden;\n  position: absolute;\n  z-index: 999999; }\n  @media (min-width: 768px) {\n    .toasts {\n      width: 40%; } }\n\n.top-left, .top-center, .top-right {\n  top: 0;\n  margin-top: 10px; }\n\n.bottom-left, .bottom-center, .bottom-right {\n  bottom: 0;\n  margin-bottom: 10px; }\n\n.top-left, .bottom-left {\n  left: 0;\n  margin-left: 15px; }\n\n.top-right, .bottom-right {\n  right: 0;\n  margin-right: 15px; }\n\n.top-center {\n  top: 15px; }\n\n.bottom-center {\n  bottom: 15px; }\n\n.top-center, .bottom-center {\n  position: fixed;\n  left: 50%;\n  transform: translate(-50%, 0%); }\n\n.toast {\n  padding: 15px 15px;\n  margin-bottom: 5px;\n  width: 100%;\n  text-align: center; }\n\n.toast-default {\n  border-radius: 6px;\n  color: #000;\n  background-color: #fff;\n  border: 1px solid #ccc; }\n\n.toast-primary {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #337ab7; }\n\n.toast-info {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #5bc0de; }\n\n.toast-success {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #5cb85c; }\n\n.toast-warning {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #f0ad4e; }\n\n.toast-danger {\n  border-radius: 6px;\n  color: #fff;\n  background-color: #d9534f; }\n\n.list-enter-active, .list-leave-active {\n  transition: all .5s; }\n\n.list-enter, .list-leave-active {\n  opacity: 0; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toast = __webpack_require__(7);
	
	var _Toast2 = _interopRequireDefault(_Toast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      items: {
	        topLeft: [],
	        topCenter: [],
	        topRight: [],
	        bottomLeft: [],
	        bottomCenter: [],
	        bottomRight: []
	      }
	    };
	  },
	
	  components: {
	    Toast: _Toast2.default
	  },
	  methods: {
	    add: function add(data) {
	      var type = data.type || 'default';
	      var typeToast = 'toast-' + type;
	      var position = data.position || 'bottomLeft';
	      var duration = data.duration || 0;
	      var item = {
	        css: { 'toast': true },
	        message: data.message,
	        duration: duration,
	        position: position
	      };
	      item.css[typeToast] = true;
	      this.items[position].unshift(item);
	    },
	    close: function close(item) {
	      var key = this.items[item.position].indexOf(item);
	      if (key >= 0) {
	        this.items[item.position].splice(key, 1);
	      }
	    },
	    closeAll: function closeAll() {
	      for (var items in this.items) {
	        while (this.items[items].length > 0) {
	          this.items[items].pop();
	        }
	      }
	    },
	    d: function d(data) {
	      data.type = 'danger';
	      this.add(data);
	    },
	    w: function w(data) {
	      data.type = 'warning';
	      this.add(data);
	    },
	    p: function p(data) {
	      data.type = 'primary';
	      this.add(data);
	    },
	    i: function i(data) {
	      data.type = 'info';
	      this.add(data);
	    },
	    s: function s(data) {
	      data.type = 'success';
	      this.add(data);
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(8)
	
	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/leandrose/project/vue-bs-toast/src/Toast.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-78bf2e74", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-78bf2e74", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Toast.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  created: function created() {
	    if (this.item.duration > 0) {
	      this.timeout = setTimeout(function () {
	        this.close();
	      }.bind(this), this.item.duration);
	    }
	  },
	  data: function data() {
	    return {
	      timeout: false
	    };
	  },
	
	  props: {
	    item: Object
	  },
	  methods: {
	    close: function close(position, item) {
	      clearTimeout(this.timeout);
	      this.$emit('close', this.item);
	      this.$destroy();
	    }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    class: _vm.item.css
	  }, [_vm._v("\n  " + _vm._s(_vm.item.message) + "\n  "), _c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.item.duration == 0),
	      expression: "item.duration == 0"
	    }],
	    staticClass: "close",
	    on: {
	      "click": _vm.close
	    }
	  }, [_vm._v("×")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-78bf2e74", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', [_c('div', {
	    staticClass: "top-left toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.topLeft), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "top-center toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.topCenter), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "top-right toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.topRight), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "bottom-left toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.bottomLeft), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "bottom-center toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.bottomCenter), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "bottom-right toasts"
	  }, [_c('transition-group', {
	    attrs: {
	      "name": "list",
	      "tag": "div"
	    }
	  }, _vm._l((_vm.items.bottomRight), function(item) {
	    return _c('toast', {
	      key: item,
	      attrs: {
	        "item": item
	      },
	      on: {
	        "close": _vm.close
	      }
	    })
	  }))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-066365b7", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-bs-toast.js.map