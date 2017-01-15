;(function(){'use strict';var _arity=function _arity(n,d){switch(n){case 0:return function(){return d.apply(this,arguments);};case 1:return function(e){return d.apply(this,arguments);};case 2:return function(h,i){return d.apply(this,arguments);};case 3:return function(j,k,l){return d.apply(this,arguments);};case 4:return function(m,o,p,q){return d.apply(this,arguments);};case 5:return function(r,s,t,u,v){return d.apply(this,arguments);};case 6:return function(w,y,z,A,B,C){return d.apply(this,arguments);};case 7:return function(D,E,F,G,H,I,J){return d.apply(this,arguments);};case 8:return function(K,L,M,N,O,P,Q,S){return d.apply(this,arguments);};case 9:return function(T,U,V,W,X,Y,Z,a7,a8){return d.apply(this,arguments);};case 10:return function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){return d.apply(this,arguments);};default:throw new Error('First argument to _arity must be a non-negative integer no greater than ten');}},o1=Array.isArray||function _isArray(p1){return p1!=null&&p1.length>=0&&Object.prototype.toString.call(p1)==='[object Array]';},_isPlaceholder=function _isPlaceholder(a){return a!=null&&typeof a==='object'&&a['@@functional/placeholder']===!0;},_isString=function _isString(x){return Object.prototype.toString.call(x)==='[object String]';},_pipe=function _pipe(f,g){return function(){return g.call(this,f.apply(this,arguments));};},q1=function(){function XWrap(fn){this.f=fn;}XWrap.prototype['@@transducer/init']=function(){throw new Error('init not implemented on XWrap');};XWrap.prototype['@@transducer/result']=function(s1){return s1;};XWrap.prototype['@@transducer/step']=function(t1,x){return this.f(t1,x);};return function _xwrap(fn){return new XWrap(fn);};}(),_checkForMethod=function _checkForMethod(v1,fn){return function(){var x1=arguments.length;if(x1===0){return fn();}var y1=arguments[x1-1];return o1(y1)||typeof y1[v1]!=='function'?fn.apply(this,arguments):y1[v1].apply(y1,Array.prototype.slice.call(arguments,0,x1-1));};},_curry1=function _curry1(fn){return function f1(a){if(arguments.length===0||_isPlaceholder(a)){return f1;}else{return fn.apply(this,arguments);}};},_curry2=function _curry2(fn){return function f2(a,b){switch(arguments.length){case 0:return f2;case 1:return _isPlaceholder(a)?f2:_curry1(function(_b){return fn(a,_b);});default:return _isPlaceholder(a)&&_isPlaceholder(b)?f2:_isPlaceholder(a)?_curry1(function(_a){return fn(_a,b);}):_isPlaceholder(b)?_curry1(function(_b){return fn(a,_b);}):fn(a,b);}};},_curry3=function _curry3(fn){return function f3(a,b,c){switch(arguments.length){case 0:return f3;case 1:return _isPlaceholder(a)?f3:_curry2(function(_b,_c){return fn(a,_b,_c);});case 2:return _isPlaceholder(a)&&_isPlaceholder(b)?f3:_isPlaceholder(a)?_curry2(function(_a,_c){return fn(_a,b,_c);}):_isPlaceholder(b)?_curry2(function(_b,_c){return fn(a,_b,_c);}):_curry1(function(_c){return fn(a,b,_c);});default:return _isPlaceholder(a)&&_isPlaceholder(b)&&_isPlaceholder(c)?f3:_isPlaceholder(a)&&_isPlaceholder(b)?_curry2(function(_a,_b){return fn(_a,_b,c);}):_isPlaceholder(a)&&_isPlaceholder(c)?_curry2(function(_a,_c){return fn(_a,b,_c);}):_isPlaceholder(b)&&_isPlaceholder(c)?_curry2(function(_b,_c){return fn(a,_b,_c);}):_isPlaceholder(a)?_curry1(function(_a){return fn(_a,b,c);}):_isPlaceholder(b)?_curry1(function(_b){return fn(a,_b,c);}):_isPlaceholder(c)?_curry1(function(_c){return fn(a,b,_c);}):fn(a,b,c);}};},_curryN=function _curryN(V1,W1,fn){return function(){var Y1=[],Z1=0,b2=V1,c2=0;while(c2<W1.length||Z1<arguments.length){var d2;if(c2<W1.length&&(!_isPlaceholder(W1[c2])||Z1>=arguments.length)){d2=W1[c2];}else{d2=arguments[Z1];Z1+=1;}Y1[c2]=d2;if(!_isPlaceholder(d2)){b2-=1;}c2+=1;}return b2<=0?fn.apply(this,Y1):_arity(b2,_curryN(V1,Y1,fn));};},e2=_curry2(function bind(fn,h2){return _arity(fn.length,function(){return fn.apply(h2,arguments);});}),i2=_curry2(function curryN(j2,fn){if(j2===1){return _curry1(fn);}return _arity(j2,_curryN(j2,[],fn));}),l2=_curry1(function isArrayLike(x){if(o1(x)){return!0;}if(!x){return!1;}if(typeof x!=='object'){return!1;}if(_isString(x)){return!1;}if(x.nodeType===1){return!!x.length;}if(x.length===0){return!0;}if(x.length>0){return x.hasOwnProperty(0)&&x.hasOwnProperty(x.length-1);}return!1;}),m2=_curry1(function reverse(n2){return _isString(n2)?n2.split('').reverse().join(''):Array.prototype.slice.call(n2,0).reverse();}),o2=_curry3(_checkForMethod('slice',function slice(p2,q2,r2){return Array.prototype.slice.call(r2,p2,q2);})),s2=_curry1(_checkForMethod('tail',o2(1,Infinity))),t2=function(){function _arrayReduce(xf,v2,w2){var x2=0,y2=w2.length;while(x2<y2){v2=xf['@@transducer/step'](v2,w2[x2]);if(v2&&v2['@@transducer/reduced']){v2=v2['@@transducer/value'];break;}x2+=1;}return xf['@@transducer/result'](v2);}function _iterableReduce(xf,A2,B2){var C2=B2.next();while(!C2.done){A2=xf['@@transducer/step'](A2,C2.value);if(A2&&A2['@@transducer/reduced']){A2=A2['@@transducer/value'];break;}C2=B2.next();}return xf['@@transducer/result'](A2);}function _methodReduce(xf,E2,F2){return xf['@@transducer/result'](F2.reduce(e2(xf['@@transducer/step'],xf),E2));}var G2=typeof Symbol!=='undefined'?Symbol.iterator:'@@iterator';return function _reduce(fn,I2,J2){if(typeof fn==='function'){fn=q1(fn);}if(l2(J2)){return _arrayReduce(fn,I2,J2);}if(typeof J2.reduce==='function'){return _methodReduce(fn,I2,J2);}if(J2[G2]!=null){return _iterableReduce(fn,I2,J2[G2]());}if(typeof J2.next==='function'){return _iterableReduce(fn,I2,J2);}throw new TypeError('reduce: list must be array or iterable');};}(),K2=_curry1(function curry(fn){return i2(fn.length,fn);}),M2=_curry1(function flip(fn){return K2(function(a,b){var O2=Array.prototype.slice.call(arguments,0);O2[0]=b;O2[1]=a;return fn.apply(this,O2);});}),P2=_curry3(t2),pipe=function pipe(){if(arguments.length===0){throw new Error('pipe requires at least one argument');}return _arity(arguments[0].length,P2(_pipe,arguments[0],s2(arguments)));},compose=function compose(){if(arguments.length===0){throw new Error('compose requires at least one argument');}return pipe.apply(this,m2(arguments));},R={compose:compose,flip:M2};if(typeof exports==='object'){module.exports=R;}else if(typeof define==='function'&&define.amd){define(function(){return R;});}else{this.R=R;}}).call(this);