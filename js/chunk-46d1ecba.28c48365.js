(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46d1ecba"],{"108b":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("9d2c"));r(n("56b0"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=s(t,"string");return"symbol"===a(e)?e:String(e)}function s(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p=function(){function t(){o(this,t),this.mid="",this.id="",this.rootId="",this.sheetId="",this.name="",this.path="",this.localPath="",this.isSyncToCloud=!1}return l(t,[{key:"isCloudStorage",value:function(t){return 0==arguments.length||null==t||t==this.rootId?null!=this.rootId&&this.rootId.length>10&&this.isSyncToCloud:null!=t&&t.length>10}},{key:"setRootId",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.rootId=t,null==this.rootId||this.rootId.length<10||(n?this.isSyncToCloud=!0:i.default.postGetMindmap({id:this.rootId},(function(t){e.isSyncToCloud=!0}),(function(t){e.isSyncToCloud=!1})))}}]),t}();e.default=p},"28a2":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=d(n("917d")),r=n("4660"),a=d(n("6ec5")),o=d(n("13fb")),u=d(n("9987")),l=d(n("108b")),c=d(n("ae53")),s=d(n("907a4")),p=d(n("7233")),f=d(n("59f8"));function d(t){return t&&t.__esModule?t:{default:t}}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */h=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,i){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),u=new N(i||[]);return r(o,"_invoke",{value:x(t,n,u)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",y="executing",v="completed",b={};function g(){}function S(){}function P(){}var w={};c(w,o,(function(){return this}));var M=Object.getPrototypeOf,T=M&&M(M(I([])));T&&T!==n&&i.call(T,o)&&(w=T);var O=P.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(r,a,o,u){var l=p(t[r],t,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==m(s)&&i.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,o,u)}),(function(t){n("throw",t,o,u)})):e.resolve(s).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,u)}))}u(l.arg)}var a;r(this,"_invoke",{value:function(t,i){function r(){return new e((function(e,r){n(t,i,e,r)}))}return a=a?a.then(r,r):r()}})}function x(e,n,i){var r=f;return function(a,o){if(r===y)throw new Error("Generator is already running");if(r===v){if("throw"===a)throw o;return{value:t,done:!0}}for(i.method=a,i.arg=o;;){var u=i.delegate;if(u){var l=R(u,i);if(l){if(l===b)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===f)throw r=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=y;var c=p(e,n,i);if("normal"===c.type){if(r=i.done?v:d,c.arg===b)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=v,i.method="throw",i.arg=c.arg)}}}function R(e,n){var i=n.method,r=e.iterator[i];if(r===t)return n.delegate=null,"throw"===i&&e.iterator.return&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),b;var a=p(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(m(e)+" is not iterable")}return S.prototype=P,r(O,"constructor",{value:P,configurable:!0}),r(P,"constructor",{value:S,configurable:!0}),S.displayName=c(P,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,c(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(k.prototype),c(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,i,r,a){void 0===a&&(a=Promise);var o=new k(s(t,n,i,r),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(O),c(O,l,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(i,r){return u.type="throw",u.arg=e,n.next=i,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:I(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),b}},e}function y(t,e,n,i,r,a,o){try{var u=t[a](o),l=u.value}catch(c){return void n(c)}u.done?e(l):Promise.resolve(l).then(i,r)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){y(a,i,r,o,u,"next",t)}function u(t){y(a,i,r,o,u,"throw",t)}o(void 0)}))}}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,P(i.key),i)}}function S(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t){var e=w(t,"string");return"symbol"===m(e)?e:String(e)}function w(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var M=function(){function t(e){b(this,t),this.appPath="",this.mindMapLocalData=new l.default,this.saveData=new p.default,this.resources=new u.default,this.parameter=new a.default}return S(t,[{key:"reset",value:function(){this.mindMapLocalData=new l.default,this.saveData=new p.default,this.resources=new u.default,this.parameter=new a.default}},{key:"loadMainContent",value:function(t,e,n,i){this.setPath(t,e);var r=this;return new Promise(function(){var t=v(h().mark((function t(n){var a;return h().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=e&&0!=e.length){t.next=3;break}return n(null),t.abrupt("return");case 3:a=e+f.default.FileSeparator+f.default.MindZIPContentPath,r.loadJson(a).then((function(t){var a=t,o=JSON.parse(a);if(r.mindMapLocalData.id=o.id,r.mindMapLocalData.mid=o.mid,null!=o.data&&o.data.length>0){var u=o.data[0];r.setRootId(u.id);var l=0;if(void 0!=i&&null!=i&&i.length>0)for(var c=0;c<o.data.length;c++){var s=o.data[c];if(s.id==i){u=s,l=c;break}}var p=e+f.default.FileSeparator+f.default.MindZIPContentFolderName+f.default.FileSeparator+u.fileName;r.loadJson(p).then((function(t){var e=t;r.parameter.isValid()?n({content:e,mindType:u.mindType,index:l,styleIndex:r.parameter.styleIndex,mindDisplayType:r.parameter.mindDisplayType,isEmpty:r.parameter.isEmpty,nodeLayoutType:r.parameter.nodeLayoutType,name:u.name,lineLayout:r.parameter.lineLayout}):n({content:e,mindType:u.mindType,index:l,styleIndex:1,mindDisplayType:1,isEmpty:!1,nodeLayoutType:1,name:u.name,lineLayout:1})}))}else n(null)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"loadChechMindContent",value:function(t,e,n){var i=this;return new Promise(function(){var r=v(h().mark((function r(a){var u,l,c,s,p,d,m,y,v;return h().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(u=null==n||0==n.length?e:n,null!=u&&0!=u.length){r.next=3;break}return r.abrupt("return");case 3:if(!t){r.next=12;break}if(l=u+".json",c=i.getAppPath()+f.default.MindZIPLocalFilesFolderName+f.default.FileSeparator+f.default.MindZIPContentTemporaryFolderName+f.default.FileSeparator+l,i.existsLocalFile(c)){r.next=9;break}return a(null),r.abrupt("return");case 9:i.loadJson(c).then((function(t){var e=t,n=JSON.parse(e);a({content:n.content,mindType:n.mindType,index:0,styleIndex:1,mindDisplayType:1,isEmpty:!1,nodeLayoutType:1,name:n.name,time:n.lastchangetime,lineLayout:1})})),r.next=35;break;case 12:s="",p=o.default.getCurrentTime()+"|"+u,r.t0=h().keys(localStorage);case 15:if((r.t1=r.t0()).done){r.next=26;break}if(d=r.t1.value,!(d.length==p.length&&d.indexOf("|")>0)){r.next=24;break}if(m=d.split("|"),2==m.length){r.next=21;break}return r.abrupt("continue",15);case 21:if(m[1]!=u){r.next=24;break}return s=d,r.abrupt("break",26);case 24:r.next=15;break;case 26:if(null!=s&&0!=s.length){r.next=29;break}return a(null),r.abrupt("return");case 29:if(y=localStorage.getItem(s),null!=y&&0!=y.length){r.next=33;break}return a(null),r.abrupt("return");case 33:v=JSON.parse(y),a({content:v.content,mindType:v.mindType,index:0,styleIndex:1,mindDisplayType:1,isEmpty:!1,nodeLayoutType:1,name:v.name,time:v.lastchangetime,lineLayout:1});case 35:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}},{key:"getMindmapSheets",value:function(){var t=this,e=this;return new Promise(function(){var n=v(h().mark((function n(i){var r,a;return h().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.getLocalPath(),null!=r&&0!=r.length){n.next=4;break}return i(null,{desc:getString(strings.Load_File_Error)}),n.abrupt("return");case 4:a=r+f.default.FileSeparator+f.default.MindZIPContentPath,e.loadJson(a).then((function(t){var e=t,n=JSON.parse(e);if(null!=n.data&&n.data.length>0){var r=n.data.length,a=new c.default;a.totalNum=r,a.pageSize=Math.max(r,50);for(var u=n.data[0].id,l=0;l<r;l++){var p=n.data[l],f=new s.default;f.name=p.name,f.id=p.id,f.rootId=u,f.cover="",f.index=l,f.fileName=p.fileName,f.type=p.mindType,null==p.lastchangetime||0==p.lastchangetime?f.lastchangetime=o.default.getCurrentTime():f.lastchangetime=p.lastchangetime,a.sheets.push(f)}i(a)}else i(null,{desc:getString(strings.Load_File_Error)})}));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}},{key:"loadJson",value:function(t){var e=this;return new Promise(function(){var n=v(h().mark((function n(r){var a;return h().wrap((function(n){while(1)switch(n.prev=n.next){case 0:try{a=new XMLHttpRequest,a.open("GET",i.default.getLocalPathPrefix(t,e.appPath),!0),a.responseType="blob",a.onload=function(){if(200===a.status){var t=new FileReader;t.readAsText(a.response,"utf-8"),t.addEventListener("loadend",(function(t){var e=t.target.result;r(e)}),!1)}else r("")},a.onerror=function(t){r("")},a.send()}catch(o){r("")}case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}},{key:"loadLocalImg",value:function(t){}},{key:"existsLocalFile",value:function(t){var e=this.getLocalPath(),n=window.require("fs");if(t.startsWith("http")&&null!=e&&e.length>0){var a=(0,r.md5)(i.default.removeUrlPrefix(t)),u=o.default.getUrlType(t),l=this.getLocalPath()+f.default.FileSeparator+f.default.MindZIPFilesFolderName+f.default.FileSeparator+a;null!=u&&u.length>0&&(l=l+"."+u);var c=n.existsSync(l);return c}var s=n.existsSync(t);return s}},{key:"getLocalFilePath",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null==t&&0==t.length)return"";var n=this.getLocalPath();if(t.startsWith("http")&&null!=n&&n.length>0){var a=(0,r.md5)(i.default.removeUrlPrefix(t)),u=o.default.getUrlType(t),l=n+f.default.FileSeparator+f.default.MindZIPFilesFolderName+f.default.FileSeparator+a;null!=u&&u.length>0&&(l=l+"."+u);var c=window.require("fs"),s=c.existsSync(l);if(s)return e?i.default.getLocalPathPrefix(l,this.appPath):l}return t}},{key:"setRootId",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.mindMapLocalData.setRootId(t,e)}},{key:"getRootId",value:function(){return this.mindMapLocalData.rootId}},{key:"setSheetId",value:function(t){this.mindMapLocalData.sheetId=t}},{key:"getSheetId",value:function(){return this.mindMapLocalData.sheetId}},{key:"setPath",value:function(t,e){this.mindMapLocalData.path!=t&&(this.mindMapLocalData.path=t,this.mindMapLocalData.localPath=e,null==t||0==t.length||t.indexOf(f.default.MindZIPNewPathe)>-1?this.mindMapLocalData.name=o.default.getNameByUrl(e,!1):this.mindMapLocalData.name=o.default.getNameByUrl(t))}},{key:"setParameter",value:function(t){null!=t&&0!=t.length&&(this.parameter=(new a.default).format(t))}},{key:"getPath",value:function(){return this.mindMapLocalData.path}},{key:"getName",value:function(){return this.mindMapLocalData.name}},{key:"getLocalPath",value:function(){return this.mindMapLocalData.localPath}},{key:"getAppPath",value:function(){return this.appPath}},{key:"isLoaclMind",value:function(){return null!=this.mindMapLocalData.path&&this.mindMapLocalData.path.length>0}},{key:"isLoaclNotSaved",value:function(){return null!=this.mindMapLocalData.path&&this.mindMapLocalData.path.indexOf(f.default.MindZIPNewPathe)>-1}},{key:"isCloudStorage",value:function(t){return this.mindMapLocalData.isCloudStorage(t)}},{key:"getFileName",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,r.md5)(i.default.removeUrlPrefix(t));if(e){var a=o.default.getUrlType(t);null!=a&&a.length>0&&(n=n+"."+a)}return n}},{key:"getUrlLocalPath",value:function(t){if(!this.isLoaclMind())return"";var e=this.getFileName(t,!0),n=(o.default.getUrlType(t),this.getLocalPath()+f.default.FileSeparator+f.default.MindZIPFilesFolderName+f.default.FileSeparator+e);return n}},{key:"getLocalFileRootPath",value:function(){if(!this.isLoaclMind())return"";var t=this.getLocalPath()+f.default.FileSeparator+f.default.MindZIPFilesFolderName;return t}},{key:"loadResourceData",value:function(t){var e=this;return new Promise(function(){var n=v(h().mark((function n(r){var a,o,u,l;return h().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=i.default.getMediaSrc(t),o=null,!e.existsLocalFile(a)){n.next=9;break}return u=e.getLocalFilePath(a),n.next=6,e.asyncLoadLocalFile(u);case 6:o=n.sent,n.next=15;break;case 9:return n.next=11,fetch(a);case 11:return l=n.sent,n.next=14,l.blob();case 14:o=n.sent;case 15:r(null==o?null:o);case 16:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}},{key:"asyncLoadLocalFile",value:function(t){return new Promise((function(e){var n=new XMLHttpRequest;n.responseType="blob",n.open("GET",t),n.onload=function(t){200==n.status?e(n.response):e(null)},n.send()}))}}]),t}();e.default=new M},"6ec5":function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var e=u(t,"string");return"symbol"===n(e)?e:String(e)}function u(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(){i(this,t),this.parentEntityId="",this.type=1,this.mindDisplayType=0,this.nodeLayoutType=1,this.lineLayout=1,this.isEmpty=!1,this.styleIndex=-1}return a(t,[{key:"getJson",value:function(){var t=JSON.stringify(this,(function(t,e){return"function"===typeof e?e+"":e}));return t}},{key:"format",value:function(e){var n=new t,i=JSON.parse(e);for(var r in i){var a=i[r];n[r]=a}return n}},{key:"isValid",value:function(){return-1!=this.styleIndex}}]),t}();e.default=l},7233:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4660"),r=c(n("13fb")),a=c(n("56b0")),o=c(n("fccf")),u=c(n("8e97")),l=c(n("8b82"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,m(i.key),i)}}function d(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t){var e=h(t,"string");return"symbol"===s(e)?e:String(e)}function h(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var y=function(){function t(){p(this,t),this.path="",this.name="",this.contentList=[],this.images=[],this.files=[],this.version=-1,this.id="",this.mid=""}return d(t,[{key:"getContentListJson",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null==this.contentList||0==this.contentList.length)return"{}";for(var e=new l.default,n=[],c=0;c<this.contentList.length;c++){var s=this.contentList[c],p=new u.default;p.content="",p.id=t?""+c:s.id,p.name=s.name,p.fileName=s.fileName,p.mindType=s.mindType,n.push(p)}e.version=this.version,a.default.isLogin()?e.id=a.default.getUserId():e.id="",e.mid=(0,i.getMachineId)(),e.lastsavetime=r.default.getCurrentTime(),e.data=n;for(var f=0;f<this.files.length;f++){var d=this.files[f],m=new o.default;m.name=d.name,m.path=d.path,e.files.push(m)}var h=JSON.stringify(e,(function(t,e){return"function"===typeof e?e+"":e}));return h}},{key:"format",value:function(e){var n=new t,i=JSON.parse(e);for(var r in i){var a=i[r];if("data"==r){for(var o=[],l=0;l<a.length;l++){var c=a[l],s=new u.default;s.content="",s.id=c.id,s.name=c.name,s.fileName=c.fileName,s.mindType=c.mindType,o.push(s)}n.contentList=o}else n[r]=a}return n}}]),t}();e.default=y},"75a6":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.postMindmapAlias=S,e.postMindmapArchive=it,e.postMindmapAudioLimit=G,e.postMindmapCheckMindmap=x,e.postMindmapChecksum=r,e.postMindmapCollectShare=A,e.postMindmapCopy=m,e.postMindmapCopyArchive=at,e.postMindmapCopySheet=Y,e.postMindmapDelete=y,e.postMindmapDeleteArchive=ot,e.postMindmapDeleteAttachments=j,e.postMindmapDeleteAudio=B,e.postMindmapDeleteBackup=ht,e.postMindmapDeleteCompletely=k,e.postMindmapDeleteImage=M,e.postMindmapDeleteShare=C,e.postMindmapDeleteSheet=H,e.postMindmapDeletedRestore=L,e.postMindmapExportSheet=et,e.postMindmapGetAi=s,e.postMindmapGetEntity=l,e.postMindmapGetMindmap=c,e.postMindmapGetNumExceed=f,e.postMindmapImportXjmind=N,e.postMindmapListBackups=ft,e.postMindmapListDeleted=T,e.postMindmapListDir=o,e.postMindmapListEntities=u,e.postMindmapListSheets=K,e.postMindmapMigrateSheet=tt,e.postMindmapModifyArchive=lt,e.postMindmapModifyShare=D,e.postMindmapModifySheet=W,e.postMindmapMove=b,e.postMindmapMoveArchive=ut,e.postMindmapMoveSheet=Q,e.postMindmapMyLatex=yt,e.postMindmapNew=p,e.postMindmapNewArchiveDir=st,e.postMindmapNewByType=d,e.postMindmapNewDir=h,e.postMindmapNewSheet=z,e.postMindmapOcrInfo=E,e.postMindmapOcrScan=I,e.postMindmapPlay=R,e.postMindmapPull=a,e.postMindmapQuery=v,e.postMindmapQueryArchives=nt,e.postMindmapRearrangeArchive=ct,e.postMindmapReshare=F,e.postMindmapRestoreBackup=mt,e.postMindmapSaveShare=U,e.postMindmapSearchArchive=pt,e.postMindmapSearchDeleted=O,e.postMindmapSearchSheet=$,e.postMindmapShare=_,e.postMindmapUnarchive=rt,e.postMindmapUncollectShare=J,e.postMindmapUploadAttachment=q,e.postMindmapUploadAudio=Z,e.postMindmapUploadDir=g,e.postMindmapUploadImage=w,e.postMindmapUploadMindmap=P,e.postMindmapUploadMyLatex=vt,e.postMindmapView=V,e.postMindmapViewBackup=dt,e.postMindmapViewConnectmap=X;var i=n("4660");function r(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/checksum",t,e,n,r,a,o)}function a(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/pull",t,e,n,r,a,o)}function o(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/list-dir",t,e,n,r,a,o)}function u(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/list-entities",t,e,n,r,a,o)}function l(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/get-entity",t,e,n,r,a,o)}function c(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/get-mindmap",t,e,n,r,a,o)}function s(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/ask-chatgpt",t,e,n,r,a,o)}function p(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/new",t,e,n,r,a,o)}function f(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/get-num-exceed",t,e,n,r,a,o)}function d(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/new-by-type",t,e,n,r,a,o)}function m(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/copy",t,e,n,r,a,o)}function h(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/new-dir",t,e,n,r,a,o)}function y(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete",t,e,n,r,a,o)}function v(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/query",t,e,n,r,a,o)}function b(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/move",t,e,n,r,a,o)}function g(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-dir",t,e,n,r,a,o)}function S(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/alias",t,e,n,r,a,o)}function P(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-mindmap",t,e,n,r,a,o)}function w(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-image",t,e,n,r,a,o)}function M(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-image",t,e,n,r,a,o)}function T(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/list-deleted",t,e,n,r,a,o)}function O(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/search-deleted",t,e,n,r,a,o)}function L(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/deleted-restore",t,e,n,r,a,o)}function k(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-completely",t,e,n,r,a,o)}function x(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/check-mindmap",t,e,n,r,a,o)}function R(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/play",t,e,n,r,a,o)}function q(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-attachment",t,e,n,r,a,o)}function j(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-attachments",t,e,n,r,a,o)}function N(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/import-xjmind",t,e,n,r,a,o)}function I(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/ocr-scan",t,e,n,r,a,o)}function E(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/ocr-info",t,e,n,r,a,o)}function _(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/share",t,e,n,r,a,o)}function D(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/modify-share",t,e,n,r,a,o)}function F(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/reshare",t,e,n,r,a,o)}function C(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-share",t,e,n,r,a,o)}function A(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/collect-share",t,e,n,r,a,o)}function J(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/uncollect-share",t,e,n,r,a,o)}function U(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/save-share",t,e,n,r,a,o)}function G(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/audio-limit",t,e,n,r,a,o)}function Z(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-audio",t,e,n,r,a,o)}function B(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-audio",t,e,n,r,a,o)}function V(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/view",t,e,n,r,a,o)}function X(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/view-connectmap",t,e,n,r,a,o)}function z(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/new-sheet",t,e,n,r,a,o)}function H(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-sheet",t,e,n,r,a,o)}function Q(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/move-sheet",t,e,n,r,a,o)}function W(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/modify-sheet",t,e,n,r,a,o)}function Y(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/copy-sheet",t,e,n,r,a,o)}function K(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/list-sheets",t,e,n,r,a,o)}function $(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/search-sheet",t,e,n,r,a,o)}function tt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/migrate-sheet",t,e,n,r,a,o)}function et(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/export-sheet",t,e,n,r,a,o)}function nt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/query-archives",t,e,n,r,a,o)}function it(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/archive",t,e,n,r,a,o)}function rt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/unarchive",t,e,n,r,a,o)}function at(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/copy-archive",t,e,n,r,a,o)}function ot(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-archive",t,e,n,r,a,o)}function ut(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/move-archive",t,e,n,r,a,o)}function lt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/modify-archive",t,e,n,r,a,o)}function ct(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/rearrange-archive",t,e,n,r,a,o)}function st(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/new-archive-dir",t,e,n,r,a,o)}function pt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/search-archive",t,e,n,r,a,o)}function ft(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/list-backups",t,e,n,r,a,o)}function dt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/view-backup",t,e,n,r,a,o)}function mt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/restore-backup",t,e,n,r,a,o)}function ht(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/delete-backup",t,e,n,r,a,o)}function yt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/my-latex",t,e,n,r,a,o)}function vt(t,e,n,r,a,o){(0,i.apiRequest)("POST","/mindmap/upload-my-latex",t,e,n,r,a,o)}},"8b82":function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)}function o(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r((function t(){u(this,t),this.version=1,this.data=[],this.files=[],this.id="",this.mid="",this.lastsavetime=-1}));e.default=l},"8e97":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4660");r(n("56b0"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=s(t,"string");return"symbol"===a(e)?e:String(e)}function s(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p=function(){function t(){o(this,t),this.name="",this.fileName="",this.id="",this.mindType=1,this.content=null,this.lastchangetime=-1}return l(t,[{key:"setFileName",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.fileName=e?(0,i.md5)(t)+".json":t}},{key:"setName",value:function(t){this.name=t}},{key:"getContentJson",value:function(){var t=JSON.stringify(this,(function(t,e){return"function"===typeof e?e+"":e}));return t}}]),t}();e.default=p},"907a4":function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)}function o(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r((function t(){u(this,t),this.name="",this.cover="",this.id="",this.rootId="",this.index=0,this.lastchangetime=0,this.fileName="",this.type=1}));e.default=l},"9d2c":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("75a6"),r=a(n("28a2"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,s(i.key),i)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t){var e=p(t,"string");return"symbol"===o(e)?e:String(e)}function p(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var f=function(){function t(){u(this,t),this.isElectron=!0}return c(t,[{key:"postGetMindmap",value:function(t,e,n,a,o,u){!r.default.isCloudStorage()&&null!=t.path&&t.path==this.getPath()&&null!=this.getLocalPath()&&this.getLocalPath().length>0?r.default.loadMainContent(t.path,this.getLocalPath(),t.id,t.sheetId).then((function(t){if(null!=t){var i={archiveId:"",audio:"",audioSeconds:0,content:t.content,cover:"",createTime:0,entityId:"",id:"",index:t.index,isArchived:!1,isEmpty:!1,lineLayout:t.lineLayout,machineId:"",mindDisplayType:t.mindDisplayType,modifyTime:"",name:t.name,nodeLayoutType:t.nodeLayoutType,parentId:"",sheetId:"",sheetNum:"",styleIndex:t.styleIndex,type:t.mindType,userId:""};e(i)}else n({desc:"加载数据错误"})})):(0,i.postMindmapGetMindmap)(t,e,n,a,o,u)}},{key:"postUploadMindmap",value:function(t,e,n,r,a,o){(0,i.postMindmapUploadMindmap)(t,e,n,r,a,o)}},{key:"postMindmapSheets",value:function(t,e,n,a,o,u){!r.default.isCloudStorage()&&null!=this.getLocalPath()&&this.getLocalPath().length>0&&(null==t.rootId||t.rootId==r.default.getRootId())?r.default.getMindmapSheets().then((function(t,i){null!=t?e(t):null!=i&&n(i)})):(0,i.postMindmapListSheets)(t,e,n,a,o,u)}},{key:"setPath",value:function(t,e){r.default.setPath(t,e)}},{key:"setParameter",value:function(t){r.default.setParameter(t)}},{key:"getPath",value:function(){return r.default.getPath()}},{key:"getLocalPath",value:function(){return r.default.getLocalPath()}}]),t}();e.default=new f},ae53:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var e=u(t,"string");return"symbol"===n(e)?e:String(e)}function u(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(){i(this,t),this.totalNum=1,this.pageSize=20,this.sheets=[]}return a(t,[{key:"toJSONString",value:function(){var t=JSON.stringify(this,(function(t,e){return"function"===typeof e?e+"":e}));return t}}]),t}();e.default=l},fccf:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)}function o(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r((function t(){u(this,t),this.name="",this.path=""}));e.default=l}}]);
//# sourceMappingURL=chunk-46d1ecba.28c48365.js.map