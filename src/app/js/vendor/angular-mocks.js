!function(e,t){"use strict";function n(e){var t,n=/^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;if(t=e.match(n)){var o=new Date(0),i=0,c=0;return t[9]&&(i=r(t[9]+t[10]),c=r(t[9]+t[11])),o.setUTCFullYear(r(t[1]),r(t[2])-1,r(t[3])),o.setUTCHours(r(t[4]||0)-i,r(t[5]||0)-c,r(t[6]||0),r(t[7]||0)),o}return e}function r(e){return parseInt(e,10)}function o(e,t,n){var r="";for(e<0&&(r="-",e=-e),e=""+e;e.length<t;)e="0"+e;return n&&(e=e.substr(e.length-t)),r+e}function i(e,n,r,o){function i(e,n,r,o){return t.isFunction(e)?e:function(){return t.isNumber(e)?[e,n,r,o,"complete"]:[200,e,n,r,"complete"]}}function u(e,r,i,c,a,u,f,l,v,w){function E(e){return t.isString(e)||t.isFunction(e)||e instanceof RegExp?e:t.toJson(e)}function k(t){function s(){var n=t.response(e,r,i,a,t.params(r));y.$$respHeaders=n[2],c(g(n[0]),g(n[1]),y.getAllResponseHeaders(),g(n[3]||""),g(n[4]))}function f(){for(var e=0,t=$.length;e<t;e++)if($[e]===s){$.splice(e,1),c(-1,void 0,"",void 0,"timeout");break}}return!o&&u&&(u.then?u.then(f):n(f,u)),s.description=e+" "+r,s}var y=new s,T=h[0],D=!1;if(y.$$events=v,y.upload.$$events=w,T&&T.match(e,r)){if(!T.matchData(i))throw new Error("Expected "+T+" with different data\nEXPECTED: "+E(T.data)+"\nGOT:      "+i);if(!T.matchHeaders(a))throw new Error("Expected "+T+" with different headers\nEXPECTED: "+E(T.headers)+"\nGOT:      "+E(a));if(h.shift(),T.response)return void $.push(k(T));D=!0}for(var b,C=-1;b=d[++C];)if(b.match(e,r,i,a||{})){if(b.response)(o?o.defer:p)(k(b));else{if(!b.passThrough)throw new Error("No response defined !");m(e,r,i,c,a,u,f,l,v,w)}return}throw D?new Error("No response defined !"):new Error("Unexpected request: "+e+" "+r+"\n"+(T?"Expected "+T:"No more request expected"))}function f(e){var n={regexp:e},r=n.keys=[];return e&&t.isString(e)?(e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([?*])?/g,function(e,t,n,o){var i="?"===o?o:null,c="*"===o?o:null;return r.push({name:n,optional:!!i}),t=t||"",""+(i?"":t)+"(?:"+(i?t:"")+(c&&"(.+?)"||"([^/]+)")+(i||"")+")"+(i||"")}).replace(/([\/$*])/g,"\\$1"),n.regexp=new RegExp("^"+e,"i"),n):n}function l(e){t.forEach(["GET","DELETE","JSONP","HEAD"],function(n){u[e+n]=function(r,o,i){return c(arguments,0,"url"),t.isUndefined(r)&&(r=null),u[e](n,r,void 0,o,i)}}),t.forEach(["PUT","POST","PATCH"],function(n){u[e+n]=function(r,o,i,a){return c(arguments,0,"url"),t.isUndefined(r)&&(r=null),u[e](n,r,o,i,a)}})}var d=[],h=[],$=[],p=t.bind($,$.push),g=t.copy,m=r.$$originalHttpBackend||r;return u.when=function(e,t,n,r,s){c(arguments,1,"url");var u=new a(e,t,n,r,s),f={respond:function(e,t,n,r){return u.passThrough=void 0,u.response=i(e,t,n,r),f}};return o&&(f.passThrough=function(){return u.response=void 0,u.passThrough=!0,f}),d.push(u),f},l("when"),u.whenRoute=function(e,t){var n=f(t);return u.when(e,n.regexp,void 0,void 0,n.keys)},u.expect=function(e,t,n,r,o){c(arguments,1,"url");var s=new a(e,t,n,r,o),u={respond:function(e,t,n,r){return s.response=i(e,t,n,r),u}};return h.push(s),u},l("expect"),u.expectRoute=function(e,t){var n=f(t);return u.expect(e,n.regexp,void 0,void 0,n.keys)},u.flush=function(n,r,o){if(o!==!1&&e.$digest(),r=r||0,r>=$.length)throw new Error("No pending request to flush !");if(t.isDefined(n)&&null!==n)for(;n--;){var i=$.splice(r,1);if(!i.length)throw new Error("No more pending request to flush !");i[0]()}else for(;$.length>r;)$.splice(r,1)[0]();u.verifyNoOutstandingExpectation(o)},u.verifyNoOutstandingExpectation=function(t){if(t!==!1&&e.$digest(),h.length)throw new Error("Unsatisfied requests: "+h.join(", "))},u.verifyNoOutstandingRequest=function(t){if(t!==!1&&e.$digest(),$.length){var n=$.map(function(e){return e.description});throw new Error("Unflushed requests: "+$.length+"\n  "+n.join("\n  "))}},u.resetExpectations=function(){h.length=0,$.length=0},u.$$originalHttpBackend=m,u}function c(e,n,r){if(e.length>n&&t.isUndefined(e[n]))throw new Error("Undefined argument `"+r+"`; the argument is provided but not defined")}function a(e,n,r,o,i){function c(e){var t=e.slice(e.indexOf("?")+1).split("&");return t.sort()}function a(e){return n.slice(0,n.indexOf("?"))===e.slice(0,e.indexOf("?"))&&c(n).join()===c(e).join()}this.data=r,this.headers=o,this.match=function(n,r,o,i){return e===n&&(!!this.matchUrl(r)&&(!(t.isDefined(o)&&!this.matchData(o))&&!(t.isDefined(i)&&!this.matchHeaders(i))))},this.matchUrl=function(e){return!n||(t.isFunction(n.test)?n.test(e):t.isFunction(n)?n(e):n===e||a(e))},this.matchHeaders=function(e){return!!t.isUndefined(o)||(t.isFunction(o)?o(e):t.equals(o,e))},this.matchData=function(e){return!!t.isUndefined(r)||(r&&t.isFunction(r.test)?r.test(e):r&&t.isFunction(r)?r(e):r&&!t.isString(r)?t.equals(t.fromJson(t.toJson(r)),t.fromJson(e)):r==e)},this.toString=function(){return e+" "+n},this.params=function(e){function r(){var r={};if(!n||!t.isFunction(n.test)||!i||0===i.length)return r;var o=n.exec(e);if(!o)return r;for(var c=1,a=o.length;c<a;++c){var s=i[c-1],u=o[c];s&&u&&(r[s.name||s]=u)}return r}function o(){var n,r,o={},i=e.indexOf("?")>-1?e.substring(e.indexOf("?")+1):"";return t.forEach(i.split("&"),function(e){if(e&&(n=e.replace(/\+/g,"%20").split("="),r=c(n[0]),t.isDefined(r))){var i=!t.isDefined(n[1])||c(n[1]);hasOwnProperty.call(o,r)?t.isArray(o[r])?o[r].push(i):o[r]=[o[r],i]:o[r]=i}}),o}function c(e){try{return decodeURIComponent(e)}catch(t){}}return t.extend(o(),r())}}function s(){s.$$lastInstance=this,this.open=function(e,t,n){this.$$method=e,this.$$url=t,this.$$async=n,this.$$reqHeaders={},this.$$respHeaders={}},this.send=function(e){this.$$data=e},this.setRequestHeader=function(e,t){this.$$reqHeaders[e]=t},this.getResponseHeader=function(e){var n=this.$$respHeaders[e];return n?n:(e=t.lowercase(e),(n=this.$$respHeaders[e])?n:(n=void 0,t.forEach(this.$$respHeaders,function(r,o){n||t.lowercase(o)!==e||(n=r)}),n))},this.getAllResponseHeaders=function(){var e=[];return t.forEach(this.$$respHeaders,function(t,n){e.push(n+": "+t)}),e.join("\n")},this.abort=t.noop,this.$$events={},this.addEventListener=function(e,n){t.isUndefined(this.$$events[e])&&(this.$$events[e]=[]),this.$$events[e].push(n)},this.upload={$$events:{},addEventListener:this.addEventListener}}function u(e){return t.mock.$ControllerDecorator=["$delegate",function(n){return function(r,o,i,c){if(i&&"object"==typeof i){var a=e.preAssignBindingsEnabled(),s=n(r,o,!0,c);a&&t.extend(s.instance,i);var u=s();return a&&u===s.instance||t.extend(u,i),u}return n(r,o,i,c)}}],t.mock.$ControllerDecorator}t.mock={},t.mock.$BrowserProvider=function(){this.$get=function(){return new t.mock.$Browser}},t.mock.$Browser=function(){var e=this;this.isMock=!0,e.$$url="http://server/",e.$$lastUrl=e.$$url,e.pollFns=[];var n=0,r=[];e.$$incOutstandingRequestCount=function(){n++},e.$$completeOutstandingRequest=function(e){try{e()}finally{if(n--,!n)for(;r.length;)r.pop()()}},e.notifyWhenNoOutstandingRequests=function(e){n?r.push(e):e()},e.onUrlChange=function(t){return e.pollFns.push(function(){e.$$lastUrl===e.$$url&&e.$$state===e.$$lastState||(e.$$lastUrl=e.$$url,e.$$lastState=e.$$state,t(e.$$url,e.$$state))}),t},e.$$applicationDestroyed=t.noop,e.$$checkUrlChange=t.noop,e.deferredFns=[],e.deferredNextId=0,e.defer=function(t,n){return n=n||0,e.deferredFns.push({time:e.defer.now+n,fn:t,id:e.deferredNextId}),e.deferredFns.sort(function(e,t){return e.time-t.time}),e.deferredNextId++},e.defer.now=0,e.defer.cancel=function(n){var r;return t.forEach(e.deferredFns,function(e,t){e.id===n&&(r=t)}),!!t.isDefined(r)&&(e.deferredFns.splice(r,1),!0)},e.defer.flush=function(n){var r;if(t.isDefined(n))r=e.defer.now+n;else{if(!e.deferredFns.length)throw new Error("No deferred tasks to be flushed");r=e.deferredFns[e.deferredFns.length-1].time}for(;e.deferredFns.length&&e.deferredFns[0].time<=r;)e.defer.now=e.deferredFns[0].time,e.deferredFns.shift().fn();e.defer.now=r},e.$$baseHref="/",e.baseHref=function(){return this.$$baseHref}},t.mock.$Browser.prototype={poll:function(){t.forEach(this.pollFns,function(e){e()})},url:function(e,n,r){return t.isUndefined(r)&&(r=null),e?(this.$$url=e,this.$$state=t.copy(r),this):this.$$url},state:function(){return this.$$state}},t.mock.$ExceptionHandlerProvider=function(){var e;this.mode=function(t){switch(t){case"log":case"rethrow":var n=[];e=function(e){if(1===arguments.length?n.push(e):n.push([].slice.call(arguments,0)),"rethrow"===t)throw e},e.errors=n;break;default:throw new Error("Unknown mode '"+t+"', only 'log'/'rethrow' modes are allowed!")}},this.$get=function(){return e},this.mode("rethrow")},t.mock.$LogProvider=function(){function e(e,t,n){return e.concat(Array.prototype.slice.call(t,n))}var n=!0;this.debugEnabled=function(e){return t.isDefined(e)?(n=e,this):n},this.$get=function(){var r={log:function(){r.log.logs.push(e([],arguments,0))},warn:function(){r.warn.logs.push(e([],arguments,0))},info:function(){r.info.logs.push(e([],arguments,0))},error:function(){r.error.logs.push(e([],arguments,0))},debug:function(){n&&r.debug.logs.push(e([],arguments,0))}};return r.reset=function(){r.log.logs=[],r.info.logs=[],r.warn.logs=[],r.error.logs=[],r.debug.logs=[]},r.assertEmpty=function(){var e=[];if(t.forEach(["error","warn","info","log","debug"],function(n){t.forEach(r[n].logs,function(r){t.forEach(r,function(t){e.push("MOCK $log ("+n+"): "+String(t)+"\n"+(t.stack||""))})})}),e.length)throw e.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"),e.push(""),new Error(e.join("\n---------\n"))},r.reset(),r}},t.mock.$IntervalProvider=function(){this.$get=["$browser","$rootScope","$q","$$q",function(e,n,r,o){var i=[],c=0,a=0,s=function(s,u,f,l){function d(){if(m.notify(p++),f>0&&p>=f){var r;m.resolve(p),t.forEach(i,function(e,t){e.id===v.$$intervalId&&(r=t)}),t.isDefined(r)&&i.splice(r,1)}g?e.defer.flush():n.$apply()}var h=arguments.length>4,$=h?Array.prototype.slice.call(arguments,4):[],p=0,g=t.isDefined(l)&&!l,m=(g?o:r).defer(),v=m.promise;return f=t.isDefined(f)?f:0,v.then(null,function(){},h?function(){s.apply(null,$)}:s),v.$$intervalId=c,i.push({nextTime:a+(u||0),delay:u||1,fn:d,id:c,deferred:m}),i.sort(function(e,t){return e.nextTime-t.nextTime}),c++,v};return s.cancel=function(e){if(!e)return!1;var n;return t.forEach(i,function(t,r){t.id===e.$$intervalId&&(n=r)}),!!t.isDefined(n)&&(i[n].deferred.promise.then(void 0,function(){}),i[n].deferred.reject("canceled"),i.splice(n,1),!0)},s.flush=function(e){var t=a;for(a+=e;i.length&&i[0].nextTime<=a;){var n=i[0];n.fn(),n.nextTime===t&&n.nextTime++,n.nextTime+=n.delay,i.sort(function(e,t){return e.nextTime-t.nextTime})}return e},s}]},t.mock.TzDate=function(e,r){var i=new Date(0);if(t.isString(r)){var c=r;if(i.origDate=n(r),r=i.origDate.getTime(),isNaN(r))throw{name:"Illegal Argument",message:"Arg '"+c+"' passed into TzDate constructor is not a valid date string"}}else i.origDate=new Date(r);var a=new Date(r).getTimezoneOffset();i.offsetDiff=60*a*1e3-1e3*e*60*60,i.date=new Date(r+i.offsetDiff),i.getTime=function(){return i.date.getTime()-i.offsetDiff},i.toLocaleDateString=function(){return i.date.toLocaleDateString()},i.getFullYear=function(){return i.date.getFullYear()},i.getMonth=function(){return i.date.getMonth()},i.getDate=function(){return i.date.getDate()},i.getHours=function(){return i.date.getHours()},i.getMinutes=function(){return i.date.getMinutes()},i.getSeconds=function(){return i.date.getSeconds()},i.getMilliseconds=function(){return i.date.getMilliseconds()},i.getTimezoneOffset=function(){return 60*e},i.getUTCFullYear=function(){return i.origDate.getUTCFullYear()},i.getUTCMonth=function(){return i.origDate.getUTCMonth()},i.getUTCDate=function(){return i.origDate.getUTCDate()},i.getUTCHours=function(){return i.origDate.getUTCHours()},i.getUTCMinutes=function(){return i.origDate.getUTCMinutes()},i.getUTCSeconds=function(){return i.origDate.getUTCSeconds()},i.getUTCMilliseconds=function(){return i.origDate.getUTCMilliseconds()},i.getDay=function(){return i.date.getDay()},i.toISOString&&(i.toISOString=function(){return o(i.origDate.getUTCFullYear(),4)+"-"+o(i.origDate.getUTCMonth()+1,2)+"-"+o(i.origDate.getUTCDate(),2)+"T"+o(i.origDate.getUTCHours(),2)+":"+o(i.origDate.getUTCMinutes(),2)+":"+o(i.origDate.getUTCSeconds(),2)+"."+o(i.origDate.getUTCMilliseconds(),3)+"Z"});var s=["getUTCDay","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toGMTString","toJSON","toLocaleFormat","toLocaleString","toLocaleTimeString","toSource","toString","toTimeString","toUTCString","valueOf"];return t.forEach(s,function(e){i[e]=function(){throw new Error("Method '"+e+"' is not implemented in the TzDate mock")}}),i},t.mock.TzDate.prototype=Date.prototype,t.mock.animate=t.module("ngAnimateMock",["ng"]).info({angularVersion:"1.6.6"}).config(["$provide",function(e){e.factory("$$forceReflow",function(){function e(){e.totalReflows++}return e.totalReflows=0,e}),e.factory("$$animateAsyncRun",function(){var e=[],t=function(){return function(t){e.push(t)}};return t.flush=function(){if(0===e.length)return!1;for(var t=0;t<e.length;t++)e[t]();return e=[],!0},t}),e.decorator("$$animateJs",["$delegate",function(e){var t=[],n=function(){var n=e.apply(e,arguments);return n&&t.push(n),n};return n.$closeAndFlush=function(){t.forEach(function(e){e.end()}),t=[]},n}]),e.decorator("$animateCss",["$delegate",function(e){var t=[],n=function(n,r){var o=e(n,r);return t.push(o),o};return n.$closeAndFlush=function(){t.forEach(function(e){e.end()}),t=[]},n}]),e.decorator("$animate",["$delegate","$timeout","$browser","$$rAF","$animateCss","$$animateJs","$$forceReflow","$$animateAsyncRun","$rootScope",function(e,n,r,o,i,c,a,s,u){var f={queue:[],cancel:e.cancel,on:e.on,off:e.off,pin:e.pin,get reflows(){return a.totalReflows},enabled:e.enabled,closeAndFlush:function(){this.flush(!0),i.$closeAndFlush(),c.$closeAndFlush(),this.flush()},flush:function(e){u.$digest();var t,n=!1;do t=!1,o.queue.length&&(o.flush(),t=n=!0),s.flush()&&(t=n=!0);while(t);if(!n&&!e)throw new Error("No pending animations ready to be closed or flushed");u.$digest()}};return t.forEach(["animate","enter","leave","move","addClass","removeClass","setClass"],function(t){f[t]=function(){return f.queue.push({event:t,element:arguments[0],options:arguments[arguments.length-1],args:arguments}),e[t].apply(e,arguments)}}),f}])}]),t.mock.dump=function(e){function n(e){var o;return t.isElement(e)?(e=t.element(e),o=t.element("<div></div>"),t.forEach(e,function(e){o.append(t.element(e).clone())}),o=o.html()):t.isArray(e)?(o=[],t.forEach(e,function(e){o.push(n(e))}),o="[ "+o.join(", ")+" ]"):o=t.isObject(e)?t.isFunction(e.$eval)&&t.isFunction(e.$apply)?r(e):e instanceof Error?e.stack||""+e.name+": "+e.message:t.toJson(e,!0):String(e),o}function r(e,n){n=n||"  ";var o=[n+"Scope("+e.$id+"): {"];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&!i.match(/^(\$|this)/)&&o.push("  "+i+": "+t.toJson(e[i]));for(var c=e.$$childHead;c;)o.push(r(c,n+"  ")),c=c.$$nextSibling;return o.push("}"),o.join("\n"+n)}return n(e)},t.mock.$httpBackendDecorator=["$rootScope","$timeout","$delegate",i],t.mock.$TimeoutDecorator=["$delegate","$browser",function(e,n){function r(e){var n=[];return t.forEach(e,function(e){n.push("{id: "+e.id+", time: "+e.time+"}")}),n.join(", ")}return e.flush=function(e){n.defer.flush(e)},e.verifyNoPendingTasks=function(){if(n.deferredFns.length)throw new Error("Deferred tasks to flush ("+n.deferredFns.length+"): "+r(n.deferredFns))},e}],t.mock.$RAFDecorator=["$delegate",function(e){var t=function(e){var n=t.queue.length;return t.queue.push(e),function(){t.queue.splice(n,1)}};return t.queue=[],t.supported=e.supported,t.flush=function(){if(0===t.queue.length)throw new Error("No rAF callbacks present");for(var e=t.queue.length,n=0;n<e;n++)t.queue[n]();t.queue=t.queue.slice(n)},t}];var f;t.mock.$RootElementProvider=function(){this.$get=["$injector",function(e){return f=t.element("<div ng-app></div>").data("$injector",e)}]},t.mock.$ComponentControllerProvider=["$compileProvider",function(e){this.$get=["$controller","$injector","$rootScope",function(e,t,n){return function(r,o,i,c){var a=t.get(r+"Directive"),s=a.filter(function(e){return e.controller&&e.controllerAs&&"E"===e.restrict});if(0===s.length)throw new Error("No component found");if(s.length>1)throw new Error("Too many components found");var u=s[0];return o=o||{},o.$scope=o.$scope||n.$new(!0),e(u.controller,o,i,c||u.controllerAs)}}]}],t.module("ngMock",["ng"]).provider({$browser:t.mock.$BrowserProvider,$exceptionHandler:t.mock.$ExceptionHandlerProvider,$log:t.mock.$LogProvider,$interval:t.mock.$IntervalProvider,$rootElement:t.mock.$RootElementProvider,$componentController:t.mock.$ComponentControllerProvider}).config(["$provide","$compileProvider",function(e,n){e.decorator("$timeout",t.mock.$TimeoutDecorator),e.decorator("$$rAF",t.mock.$RAFDecorator),e.decorator("$rootScope",t.mock.$RootScopeDecorator),e.decorator("$controller",u(n)),e.decorator("$httpBackend",t.mock.$httpBackendDecorator)}]).info({angularVersion:"1.6.6"}),t.module("ngMockE2E",["ng"]).config(["$provide",function(e){e.decorator("$httpBackend",t.mock.e2e.$httpBackendDecorator)}]).info({angularVersion:"1.6.6"}),t.mock.e2e={},t.mock.e2e.$httpBackendDecorator=["$rootScope","$timeout","$delegate","$browser",i],t.mock.$RootScopeDecorator=["$delegate",function(e){function t(){for(var e,t=0,n=[this.$$childHead];n.length;)for(e=n.shift();e;)t+=1,n.push(e.$$childHead),e=e.$$nextSibling;return t}function n(){for(var e,t=this.$$watchers?this.$$watchers.length:0,n=[this.$$childHead];n.length;)for(e=n.shift();e;)t+=e.$$watchers?e.$$watchers.length:0,n.push(e.$$childHead),e=e.$$nextSibling;return t}var r=Object.getPrototypeOf(e);return r.$countChildScopes=t,r.$countWatchers=n,e}],function(n){function r(){this.shared=!1,this.sharedError=null,this.cleanupAfterEach=function(){return!this.shared||this.sharedError}}if(n){var o=null,i=new r,c=[],a=function(){return!!o};t.mock.$$annotate=t.injector.$$annotate,t.injector.$$annotate=function(e){return"function"!=typeof e||e.$inject||c.push(e),t.mock.$$annotate.apply(this,arguments)};var u=e.module=t.mock.module=function(){function e(){if(o.$injector)throw new Error("Injector already created, can not register a module!");var e,r=o.$modules||(o.$modules=[]);t.forEach(n,function(n){e=t.isObject(n)&&!t.isArray(n)?["$provide",function(e){t.forEach(n,function(t,n){e.value(n,t)})}]:n,o.$providerInjector?o.$providerInjector.invoke(e):r.push(e)})}var n=Array.prototype.slice.call(arguments,0);return a()?e():e};u.$$beforeAllHook=e.before||e.beforeAll,u.$$afterAllHook=e.after||e.afterAll,u.$$currentSpec=function(e){return 0===arguments.length?e:void(o=e)},u.sharedInjector=function(){if(!u.$$beforeAllHook||!u.$$afterAllHook)throw Error("sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll");var e=!1;u.$$beforeAllHook(function(){if(i.shared)throw i.sharedError=Error("sharedInjector() cannot be called inside a context that has already called sharedInjector()"),i.sharedError;e=!0,o=this,i.shared=!0}),u.$$afterAllHook(function(){e?(i=new r,u.$$cleanup()):i.sharedError=null})},u.$$beforeEach=function(){if(i.shared&&o&&o!==this){var e=o;o=this,t.forEach(["$injector","$modules","$providerInjector","$injectorStrict"],function(t){o[t]=e[t],e[t]=null})}else o=this,f=null,c=[]},u.$$afterEach=function(){i.cleanupAfterEach()&&u.$$cleanup()},u.$$cleanup=function(){var e=o.$injector;if(c.forEach(function(e){delete e.$inject}),o.$injector=null,o.$modules=null,o.$providerInjector=null,o=null,e){var n=e.get("$rootElement"),r=n&&n[0],i=f?[f[0]]:[];!r||f&&r===f[0]||i.push(r),t.element.cleanData(i);var a=e.get("$rootScope");a&&a.$destroy&&a.$destroy()}t.forEach(t.element.fragments,function(e,n){delete t.element.fragments[n]}),s.$$lastInstance=null,t.forEach(t.callbacks,function(e,n){delete t.callbacks[n]}),t.callbacks.$$counter=0},(e.beforeEach||e.setup)(u.$$beforeEach),(e.afterEach||e.teardown)(u.$$afterEach);var l=function(e,t){this.message=e.message,this.name=e.name,e.line&&(this.line=e.line),e.sourceId&&(this.sourceId=e.sourceId),e.stack&&t&&(this.stack=e.stack+"\n"+t.stack),e.stackArray&&(this.stackArray=e.stackArray)};l.prototype=Error.prototype,e.inject=t.mock.inject=function(){function e(){var e=o.$modules||[],i=!!o.$injectorStrict;e.unshift(["$injector",function(e){o.$providerInjector=e}]),e.unshift("ngMock"),e.unshift("ng");var c=o.$injector;c||(i&&t.forEach(e,function(e){"function"==typeof e&&t.injector.$$annotate(e)}),c=o.$injector=t.injector(e,i),o.$injectorStrict=i);for(var a=0,s=n.length;a<s;a++){o.$injectorStrict&&c.annotate(n[a]);try{c.invoke(n[a]||t.noop,this)}catch(u){if(u.stack&&r)throw new l(u,r);throw u}finally{r=null}}}var n=Array.prototype.slice.call(arguments,0),r=new Error("Declaration Location");if(!r.stack)try{throw r}catch(i){}return a()?e.call(o):e},t.mock.inject.strictDi=function(e){function t(){if(e!==o.$injectorStrict){if(o.$injector)throw new Error("Injector already created, can not modify strict annotations");o.$injectorStrict=e}}return e=!arguments.length||!!e,a()?t():t}}}(e.jasmine||e.mocha),function(){function t(){if("_cached"in t)return t._cached;if(!e.document.createTouch||!e.document.createTouchList)return t._cached=!1,!1;try{e.document.createEvent("TouchEvent")}catch(n){return t._cached=!1,!1}return t._cached=!0,!0}function n(t,n,r,o){var i=new e.Event(n);r=r||0,o=o||0;var c=e.document.createTouch(e,t,Date.now(),r,o,r,o),a=e.document.createTouchList(c);return i.touches=a,i}function r(){if("_cached"in r)return r._cached;r._cached=!1;var t=e.document;if(t){var n=t.createElement("div"),o=n.cloneNode();n.appendChild(o),n.addEventListener("e",function(){r._cached=!0});var i=e.document.createEvent("Events");i.initEvent("e",!0,!0),o.dispatchEvent(i)}return r._cached}function o(e,t){var n=!1,r=t.stopPropagation;t.stopPropagation=function(){n=!0,r.apply(t,arguments)},i(t,e);do e.dispatchEvent(t);while(!n&&(e=e.parentNode))}function i(e,t){e._target=t,Object.defineProperty(e,"target",{get:function(){return this._target}})}function c(t){for(;t=t.parentNode;)if(t===e)return!0;return!1}e.browserTrigger=function(i,a,s){function u(e){return l.indexOf(e)!==-1}if(i&&!i.nodeName&&(i=i[0]),i){s=s||{};var f=s.relatedTarget||i,l=s.keys,d=s.x,h=s.y,$=i.type?i.type.toLowerCase():null,p=i.nodeName.toLowerCase();a||(a={text:"change",textarea:"change",hidden:"change",password:"change",button:"click",submit:"click",reset:"click",image:"click",checkbox:"click",radio:"click","select-one":"change","select-multiple":"change",_default_:"click"}[$||"_default_"]),"option"===p&&(i.parentNode.value=i.value,i=i.parentNode,a="change"),l=l||[];var g;if(/transitionend/.test(a))if(e.WebKitTransitionEvent)g=new e.WebKitTransitionEvent(a,s),g.initEvent(a,!1,!0);else try{g=new e.TransitionEvent(a,s)}catch(m){g=e.document.createEvent("TransitionEvent"),g.initTransitionEvent(a,null,null,null,s.elapsedTime||0)}else if(/animationend/.test(a))if(e.WebKitAnimationEvent)g=new e.WebKitAnimationEvent(a,s),g.initEvent(a,!1,!0);else try{g=new e.AnimationEvent(a,s)}catch(m){g=e.document.createEvent("AnimationEvent"),g.initAnimationEvent(a,null,null,null,s.elapsedTime||0)}else/touch/.test(a)&&t()?g=n(i,a,d,h):/key/.test(a)?(g=e.document.createEvent("Events"),g.initEvent(a,s.bubbles,s.cancelable),g.view=e,g.ctrlKey=u("ctrl"),g.altKey=u("alt"),g.shiftKey=u("shift"),g.metaKey=u("meta"),g.keyCode=s.keyCode,g.charCode=s.charCode,g.which=s.which):(g=e.document.createEvent("MouseEvents"),d=d||0,h=h||0,g.initMouseEvent(a,!0,!0,e,0,d,h,d,h,u("ctrl"),u("alt"),u("shift"),u("meta"),0,f));if(g.$manualTimeStamp=s.timeStamp,g){var v,w=g.preventDefault,E=i.ownerDocument.defaultView,k=!0,y=E.angular||{};return y["ff-684208-preventDefault"]=!1,g.preventDefault=function(){return k=!1,w.apply(g,arguments)},!s.bubbles||r()||c(i)?i.dispatchEvent(g):o(i,g),v=!(y["ff-684208-preventDefault"]||!k),delete y["ff-684208-preventDefault"],v}}}}()}(window,window.angular);