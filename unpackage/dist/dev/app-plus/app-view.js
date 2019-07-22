var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'msg']]],[1,'']]])
Z([3,'text'])
Z([[7],[3,'myval']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-score-wapper'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowScore']])
Z([3,'star-ico'])
Z([3,'/static/star.png'])
Z([3,'__i1__'])
Z([3,'gary'])
Z([[7],[3,'garyScore']])
Z(z[4])
Z([3,'/static/star0.png'])
Z([[2,'=='],[[7],[3,'showNum']],[1,1]])
Z([3,'movie-score'])
Z([a,[[7],[3,'innerScore']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black'])
Z([3,'__e'])
Z([3,'cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z([3,'carousel'])
Z([1,1000])
Z([[7],[3,'ica']])
Z([[7],[3,'ic']])
Z(z[1])
Z([1,3000])
Z([3,'__i0__'])
Z(z[2])
Z([[7],[3,'carouselList']])
Z(z[2])
Z([[6],[[7],[3,'carousel']],[3,'pic']])
Z([3,'page-block super-hot'])
Z([3,'hot-title-wappper'])
Z([3,'hot-ico'])
Z([3,'../../static/fire.png'])
Z([3,'hot-title'])
Z([3,'热门预告'])
Z([3,'page-block hot'])
Z([3,'true'])
Z([3,'idt'])
Z([3,'superhero'])
Z([[7],[3,'hotSuperheroList']])
Z(z[21])
Z([3,'sigle-poster'])
Z([3,'dy'])
Z([3,'poster-wapper'])
Z([3,'poster'])
Z([[6],[[7],[3,'superhero']],[3,'pic']])
Z([3,'movie-name'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[7],[3,'idt']],[1,1]],[1,'.']],[[6],[[7],[3,'superhero']],[3,'title']]]])
Z([3,'__l'])
Z([[6],[[6],[[7],[3,'mdy']],[1,2]],[3,'score']])
Z([3,'1'])
Z([[2,'+'],[1,'1-'],[[7],[3,'idt']]])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'精彩视频'])
Z([3,'hot-movies page-block'])
Z([3,'spindex'])
Z([3,'sp'])
Z([[7],[3,'mdysp']])
Z(z[43])
Z([3,'hot-movie-single'])
Z([[6],[[7],[3,'sp']],[3,'poster']])
Z([[6],[[7],[3,'sp']],[3,'trailer']])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'猜你喜欢'])
Z([3,'guess-u-like page-block'])
Z([3,'dyindex'])
Z([3,'ady'])
Z([[7],[3,'alldy']])
Z(z[57])
Z([3,'single-like-movie'])
Z([3,'like-movie'])
Z([[6],[[7],[3,'ady']],[3,'poster']])
Z([3,'movie-desc'])
Z([3,'movie-title'])
Z([a,[[6],[[7],[3,'ady']],[3,'name']]])
Z(z[32])
Z(z[33])
Z(z[34])
Z([[2,'+'],[1,'2-'],[[7],[3,'dyindex']]])
Z([3,'movie-info'])
Z([a,[[6],[[7],[3,'ady']],[3,'type']]])
Z(z[71])
Z([a,[[6],[[7],[3,'ady']],[3,'eq']]])
Z([3,'__e'])
Z([3,'movie-oper'])
Z([[7],[3,'dyindex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'pralse-ico'])
Z([3,'../../static/dz.png'])
Z([3,'praise-me'])
Z([3,'赞一下'])
Z([[6],[[7],[3,'animationDataArr']],[[7],[3,'dyindex']]])
Z([3,'praise-me animation-opacity'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[7],[3,'userinfo']],[3,'facepic']])
Z(z[3])
Z([3,'../../static/my0.png'])
Z(z[2])
Z([3,'info-wapper'])
Z([3,'nickname'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'userinfo']],[3,'name']]],[1,'']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[1,'ID:'],[[6],[[7],[3,'userinfo']],[3,'id']]]])
Z([3,'navigate'])
Z([3,'../registLogin/registLogin'])
Z([3,'nickname regist-login'])
Z([3,'注册/登录'])
Z(z[2])
Z([3,'set-wapper'])
Z([3,'../meInfo/meInfo'])
Z([3,'settings'])
Z([3,'../../static/setting.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'pending-wapper'])
Z([3,'pending-face'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice'])
Z([3,'notice-words'])
Z([3,'* 请从相册中选择图片'])
Z([3,'footer-opertor'])
Z([3,'__e'])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changpendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'page-block info-list'])
Z([3,'item-wapper face-line-upbottom'])
Z([3,'info-words'])
Z([3,'头像'])
Z([3,'right-wapper'])
Z([3,'__e'])
Z([3,'face'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'userinfo']],[3,'facepic']])
Z([3,'arrow-block'])
Z([3,'arrow-ico'])
Z([3,'../../static/right.png'])
Z([3,'line-top'])
Z([3,'line'])
Z(z[2])
Z(z[3])
Z([3,'昵称'])
Z(z[5])
Z([3,'right-wapper-text'])
Z([a,[[6],[[7],[3,'userinfo']],[3,'name']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[2])
Z(z[3])
Z([3,'ID'])
Z(z[5])
Z(z[19])
Z([a,[[6],[[7],[3,'userinfo']],[3,'id']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[2])
Z(z[3])
Z([3,'性别'])
Z(z[5])
Z([3,'gray-fields'])
Z([[2,'=='],[[6],[[7],[3,'userinfo']],[3,'sex']],[1,1]])
Z(z[19])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'userinfo']],[3,'sex']],[1,0]])
Z(z[19])
Z([3,'女'])
Z(z[19])
Z([3,'未选择'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'footer-wapper'])
Z(z[6])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[6])
Z(z[53])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tuichu']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'player'])
Z([3,'myTrailer'])
Z([[6],[[7],[3,'trailerInfo']],[3,'poster']])
Z([[6],[[7],[3,'trailerInfo']],[3,'trailer']])
Z([3,'movie-info'])
Z([[2,'+'],[1,'../cover/cover?cover\x3d'],[[6],[[7],[3,'trailerInfo']],[3,'poster']]])
Z([3,'cover'])
Z(z[3])
Z([3,'movie-desc'])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailerInfo']],[3,'name']]],[1,'']]])
Z([3,'basic-info'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailerInfo']],[3,'type']]],[1,'']]])
Z(z[12])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailerInfo']],[3,'eq']]],[1,'']]])
Z([3,'score-block'])
Z([3,'big-score'])
Z([3,'score-words'])
Z([3,'综合评分:'])
Z([3,'movie-score'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'score']]])
Z([3,'score-stars'])
Z([[2,'>='],[[6],[[7],[3,'trailerInfo']],[3,'score']],[1,0]])
Z([3,'__l'])
Z([[6],[[7],[3,'trailerInfo']],[3,'score']])
Z([3,'0'])
Z([3,'1'])
Z([3,'prise-counts'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'trailerInfo']],[3,'priseCounts']]],[1,' 人点赞']]])
Z([3,'line-wapper'])
Z([3,'line'])
Z([3,'plots-block'])
Z([3,'plots-title'])
Z([3,'剧情介绍'])
Z([3,'plots-desc'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'dyjs']]])
Z([3,'scroll-block'])
Z(z[33])
Z([3,'演职人员'])
Z([3,'scroll-list'])
Z([3,'__i0__'])
Z([3,'yyp'])
Z([[6],[[7],[3,'trailerInfo']],[3,'yzry']])
Z([3,'actor-wapper'])
Z([3,'single-actor'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'yyp']],[3,'poster']])
Z([3,'actor-name'])
Z([a,[[6],[[7],[3,'yyp']],[3,'yname']]])
Z([3,'actor-role'])
Z([a,[[6],[[7],[3,'yyp']],[3,'yrole']]])
Z(z[37])
Z(z[33])
Z([3,'剧照'])
Z(z[40])
Z([3,'imgindex'])
Z([3,'juz'])
Z([[6],[[7],[3,'trailerInfo']],[3,'jz']])
Z([3,'__e'])
Z([3,'plot-image'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'imgindex']])
Z(z[46])
Z([[6],[[7],[3,'juz']],[3,'poster']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wapper'])
Z([3,'face'])
Z([3,'../../static/10900.jpg'])
Z([3,'info-wapper'])
Z([3,'words-1b1'])
Z([3,'账号'])
Z([3,'input'])
Z([3,'username'])
Z([3,'请输入账号'])
Z([3,'graywords'])
Z([3,'text'])
Z([3,''])
Z(z[6])
Z([3,'margin-top:40rpx;'])
Z(z[7])
Z([3,'密码'])
Z(z[9])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'third-wapper'])
Z([3,'single-line'])
Z([3,'line'])
Z([3,'third-words'])
Z([3,'第三方登录'])
Z(z[31])
Z(z[32])
Z([3,'third-icos-wapper'])
Z(z[1])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/wx.png'])
Z(z[1])
Z(z[39])
Z(z[40])
Z([3,'qq'])
Z(z[1])
Z(z[39])
Z(z[40])
Z([3,'sinaweibo'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search-block'])
Z([3,'search-ico-wapper'])
Z([3,'search-ico'])
Z([3,'../../static/search.png'])
Z([3,'__e'])
Z([3,'search-text'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'searchMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索一下'])
Z([3,'movie-list page-block'])
Z([3,'adaindex'])
Z([3,'ada'])
Z([[7],[3,'alldyArr']])
Z(z[11])
Z([[7],[3,'dyshow1']])
Z(z[4])
Z([3,'movie-wapper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'alldyArr']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[13])
Z(z[4])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTrailer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'ada']],[3,'id']])
Z([[6],[[7],[3,'ada']],[3,'poster']])
Z([3,'__i0__'])
Z([3,'ada2'])
Z(z[13])
Z([[7],[3,'dyshow2']])
Z(z[4])
Z(z[17])
Z(z[18])
Z(z[13])
Z(z[21])
Z([[6],[[7],[3,'alldyArr']],[3,'poster']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./componets/helloComp.wxml','./componets/trailerStars.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_oz(z,0,e,s,gg)
_(oB,xC)
var oD=_n('view')
var fE=_mz(z,'input',['type',1,'value',1],[],e,s,gg)
_(oD,fE)
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var cI=_v()
_(hG,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_mz(z,'image',['class',4,'src',1],[],aL,lK,gg)
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,3,oJ,e,s,gg,cI,'yellow','__i0__','')
var oP=_v()
_(hG,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_mz(z,'image',['class',9,'src',1],[],fS,oR,gg)
_(cT,oV)
return cT
}
oP.wxXCkey=2
_2z(z,8,xQ,e,s,gg,oP,'gary','__i1__','')
var oH=_v()
_(hG,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',12,e,s,gg)
var oX=_oz(z,13,e,s,gg)
_(cW,oX)
_(oH,cW)
}
oH.wxXCkey=1
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aZ=_n('view')
_rz(z,aZ,'class',0,e,s,gg)
var t1=_mz(z,'image',['bindlongpress',1,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(aZ,t1)
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_mz(z,'swiper',['autoplay',1,'class',1,'duration',2,'indicatorActiveColor',3,'indicatorColor',4,'indicatorDots',5,'interval',6],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_n('swiper-item')
var oBB=_mz(z,'image',['class',11,'src',1],[],c8,f7,gg)
_(cAB,oBB)
_(h9,cAB)
return h9
}
x5.wxXCkey=2
_2z(z,10,o6,e,s,gg,x5,'carousel','__i0__','')
_(b3,o4)
var lCB=_n('view')
_rz(z,lCB,'class',13,e,s,gg)
var aDB=_n('view')
_rz(z,aDB,'class',14,e,s,gg)
var tEB=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
_(aDB,tEB)
var eFB=_n('view')
_rz(z,eFB,'class',17,e,s,gg)
var bGB=_oz(z,18,e,s,gg)
_(eFB,bGB)
_(aDB,eFB)
_(lCB,aDB)
var oHB=_mz(z,'scroll-view',['class',19,'scrollX',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_mz(z,'view',['class',25,'id',1],[],cLB,fKB,gg)
var oPB=_n('view')
_rz(z,oPB,'class',27,cLB,fKB,gg)
var lQB=_mz(z,'image',['class',28,'src',1],[],cLB,fKB,gg)
_(oPB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',30,cLB,fKB,gg)
var tSB=_oz(z,31,cLB,fKB,gg)
_(aRB,tSB)
_(oPB,aRB)
var eTB=_mz(z,'trailer-stars',['bind:__l',32,'innerScore',1,'showNum',2,'vueId',3],[],cLB,fKB,gg)
_(oPB,eTB)
_(cOB,oPB)
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=4
_2z(z,23,oJB,e,s,gg,xIB,'superhero','idt','idt')
_(lCB,oHB)
_(b3,lCB)
var bUB=_n('view')
_rz(z,bUB,'class',36,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',37,e,s,gg)
var xWB=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
_(oVB,xWB)
var oXB=_n('view')
_rz(z,oXB,'class',40,e,s,gg)
var fYB=_oz(z,41,e,s,gg)
_(oXB,fYB)
_(oVB,oXB)
_(bUB,oVB)
var cZB=_n('view')
_rz(z,cZB,'class',42,e,s,gg)
var h1B=_v()
_(cZB,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_mz(z,'video',['class',47,'poster',1,'src',2],[],o4B,c3B,gg)
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,45,o2B,e,s,gg,h1B,'sp','spindex','spindex')
_(bUB,cZB)
_(b3,bUB)
var e8B=_n('view')
_rz(z,e8B,'class',50,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',51,e,s,gg)
var o0B=_mz(z,'image',['class',52,'src',1],[],e,s,gg)
_(b9B,o0B)
var xAC=_n('view')
_rz(z,xAC,'class',54,e,s,gg)
var oBC=_oz(z,55,e,s,gg)
_(xAC,oBC)
_(b9B,xAC)
_(e8B,b9B)
var fCC=_n('view')
_rz(z,fCC,'class',56,e,s,gg)
var cDC=_v()
_(fCC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_n('view')
_rz(z,aJC,'class',61,cGC,oFC,gg)
var tKC=_mz(z,'image',['class',62,'src',1],[],cGC,oFC,gg)
_(aJC,tKC)
var eLC=_n('view')
_rz(z,eLC,'class',64,cGC,oFC,gg)
var bMC=_n('view')
_rz(z,bMC,'class',65,cGC,oFC,gg)
var oNC=_oz(z,66,cGC,oFC,gg)
_(bMC,oNC)
_(eLC,bMC)
var xOC=_mz(z,'trailer-stars',['bind:__l',67,'innerScore',1,'showNum',2,'vueId',3],[],cGC,oFC,gg)
_(eLC,xOC)
var oPC=_n('view')
_rz(z,oPC,'class',71,cGC,oFC,gg)
var fQC=_oz(z,72,cGC,oFC,gg)
_(oPC,fQC)
_(eLC,oPC)
var cRC=_n('view')
_rz(z,cRC,'class',73,cGC,oFC,gg)
var hSC=_oz(z,74,cGC,oFC,gg)
_(cRC,hSC)
_(eLC,cRC)
_(aJC,eLC)
var oTC=_mz(z,'view',['bindtap',75,'class',1,'data-dyindex',2,'data-event-opts',3],[],cGC,oFC,gg)
var cUC=_mz(z,'image',['class',79,'src',1],[],cGC,oFC,gg)
_(oTC,cUC)
var oVC=_n('view')
_rz(z,oVC,'class',81,cGC,oFC,gg)
var lWC=_oz(z,82,cGC,oFC,gg)
_(oVC,lWC)
_(oTC,oVC)
var aXC=_mz(z,'view',['animation',83,'class',1],[],cGC,oFC,gg)
var tYC=_oz(z,85,cGC,oFC,gg)
_(aXC,tYC)
_(oTC,aXC)
_(aJC,oTC)
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=4
_2z(z,59,hEC,e,s,gg,cDC,'ady','dyindex','dyindex')
_(e8B,fCC)
_(b3,e8B)
_(r,b3)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_n('view')
_rz(z,o2C,'class',1,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,2,e,s,gg)){x3C.wxVkey=1
var c6C=_n('view')
var h7C=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(c6C,h7C)
_(x3C,c6C)
}
else{x3C.wxVkey=2
var o8C=_n('view')
var c9C=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(o8C,c9C)
_(x3C,o8C)
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,7,e,s,gg)){o4C.wxVkey=1
var o0C=_n('view')
_rz(z,o0C,'class',8,e,s,gg)
var lAD=_n('view')
_rz(z,lAD,'class',9,e,s,gg)
var aBD=_oz(z,10,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_n('view')
_rz(z,tCD,'class',11,e,s,gg)
var eDD=_oz(z,12,e,s,gg)
_(tCD,eDD)
_(o0C,tCD)
_(o4C,o0C)
}
else{o4C.wxVkey=2
var bED=_n('view')
var oFD=_mz(z,'navigator',['openType',13,'url',1],[],e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',15,e,s,gg)
var oHD=_oz(z,16,e,s,gg)
_(xGD,oHD)
_(oFD,xGD)
_(bED,oFD)
_(o4C,bED)
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,17,e,s,gg)){f5C.wxVkey=1
var fID=_n('view')
_rz(z,fID,'class',18,e,s,gg)
var cJD=_n('navigator')
_rz(z,cJD,'url',19,e,s,gg)
var hKD=_mz(z,'image',['class',20,'src',1],[],e,s,gg)
_(cJD,hKD)
_(fID,cJD)
_(f5C,fID)
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
_(b1C,o2C)
_(r,b1C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cMD=_n('view')
_rz(z,cMD,'class',0,e,s,gg)
var oND=_n('view')
_rz(z,oND,'class',1,e,s,gg)
var lOD=_mz(z,'image',['class',2,'id',1,'mode',2,'src',3],[],e,s,gg)
_(oND,lOD)
_(cMD,oND)
var aPD=_n('view')
_rz(z,aPD,'class',6,e,s,gg)
var tQD=_n('view')
_rz(z,tQD,'class',7,e,s,gg)
var eRD=_oz(z,8,e,s,gg)
_(tQD,eRD)
_(aPD,tQD)
var bSD=_n('view')
_rz(z,bSD,'class',9,e,s,gg)
var oTD=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var xUD=_oz(z,13,e,s,gg)
_(oTD,xUD)
_(bSD,oTD)
var oVD=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var fWD=_oz(z,17,e,s,gg)
_(oVD,fWD)
_(bSD,oVD)
_(aPD,bSD)
_(cMD,aPD)
_(r,cMD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var hYD=_n('view')
_rz(z,hYD,'class',0,e,s,gg)
var oZD=_n('view')
_rz(z,oZD,'class',1,e,s,gg)
var c1D=_n('view')
_rz(z,c1D,'class',2,e,s,gg)
var o2D=_n('view')
_rz(z,o2D,'class',3,e,s,gg)
var l3D=_oz(z,4,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_n('view')
_rz(z,a4D,'class',5,e,s,gg)
var t5D=_mz(z,'image',['bindtap',6,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(a4D,t5D)
var e6D=_n('view')
_rz(z,e6D,'class',10,e,s,gg)
var b7D=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(e6D,b7D)
_(a4D,e6D)
_(c1D,a4D)
_(oZD,c1D)
var o8D=_n('view')
_rz(z,o8D,'class',13,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',14,e,s,gg)
_(o8D,x9D)
_(oZD,o8D)
var o0D=_n('view')
_rz(z,o0D,'class',15,e,s,gg)
var fAE=_n('view')
_rz(z,fAE,'class',16,e,s,gg)
var cBE=_oz(z,17,e,s,gg)
_(fAE,cBE)
_(o0D,fAE)
var hCE=_n('view')
_rz(z,hCE,'class',18,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'class',19,e,s,gg)
var cEE=_oz(z,20,e,s,gg)
_(oDE,cEE)
_(hCE,oDE)
var oFE=_n('view')
_rz(z,oFE,'class',21,e,s,gg)
var lGE=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(oFE,lGE)
_(hCE,oFE)
_(o0D,hCE)
_(oZD,o0D)
var aHE=_n('view')
_rz(z,aHE,'class',24,e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',25,e,s,gg)
_(aHE,tIE)
_(oZD,aHE)
var eJE=_n('view')
_rz(z,eJE,'class',26,e,s,gg)
var bKE=_n('view')
_rz(z,bKE,'class',27,e,s,gg)
var oLE=_oz(z,28,e,s,gg)
_(bKE,oLE)
_(eJE,bKE)
var xME=_n('view')
_rz(z,xME,'class',29,e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',30,e,s,gg)
var fOE=_oz(z,31,e,s,gg)
_(oNE,fOE)
_(xME,oNE)
var cPE=_n('view')
_rz(z,cPE,'class',32,e,s,gg)
var hQE=_mz(z,'image',['class',33,'src',1],[],e,s,gg)
_(cPE,hQE)
_(xME,cPE)
_(eJE,xME)
_(oZD,eJE)
var oRE=_n('view')
_rz(z,oRE,'class',35,e,s,gg)
var cSE=_n('view')
_rz(z,cSE,'class',36,e,s,gg)
var oTE=_oz(z,37,e,s,gg)
_(cSE,oTE)
_(oRE,cSE)
var lUE=_n('view')
_rz(z,lUE,'class',38,e,s,gg)
var aVE=_n('view')
_rz(z,aVE,'class',39,e,s,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,40,e,s,gg)){tWE.wxVkey=1
var eXE=_n('view')
_rz(z,eXE,'class',41,e,s,gg)
var bYE=_oz(z,42,e,s,gg)
_(eXE,bYE)
_(tWE,eXE)
}
else{tWE.wxVkey=2
var oZE=_v()
_(tWE,oZE)
if(_oz(z,43,e,s,gg)){oZE.wxVkey=1
var x1E=_n('view')
_rz(z,x1E,'class',44,e,s,gg)
var o2E=_oz(z,45,e,s,gg)
_(x1E,o2E)
_(oZE,x1E)
}
else{oZE.wxVkey=2
var f3E=_n('view')
_rz(z,f3E,'class',46,e,s,gg)
var c4E=_oz(z,47,e,s,gg)
_(f3E,c4E)
_(oZE,f3E)
}
oZE.wxXCkey=1
}
tWE.wxXCkey=1
_(lUE,aVE)
var h5E=_n('view')
_rz(z,h5E,'class',48,e,s,gg)
var o6E=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
_(h5E,o6E)
_(lUE,h5E)
_(oRE,lUE)
_(oZD,oRE)
_(hYD,oZD)
var c7E=_n('view')
_rz(z,c7E,'class',51,e,s,gg)
var o8E=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
var l9E=_oz(z,55,e,s,gg)
_(o8E,l9E)
_(c7E,o8E)
var a0E=_mz(z,'view',['bindtap',56,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var tAF=_oz(z,60,e,s,gg)
_(a0E,tAF)
_(c7E,a0E)
_(hYD,c7E)
_(r,hYD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bCF=_n('view')
_rz(z,bCF,'class',0,e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',1,e,s,gg)
var xEF=_mz(z,'video',['controls',-1,'id',2,'poster',1,'src',2],[],e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
var oFF=_n('view')
_rz(z,oFF,'class',5,e,s,gg)
var fGF=_n('navigator')
_rz(z,fGF,'url',6,e,s,gg)
var cHF=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(fGF,cHF)
_(oFF,fGF)
var hIF=_n('view')
_rz(z,hIF,'class',9,e,s,gg)
var oJF=_n('view')
_rz(z,oJF,'class',10,e,s,gg)
var cKF=_oz(z,11,e,s,gg)
_(oJF,cKF)
_(hIF,oJF)
var oLF=_n('view')
_rz(z,oLF,'class',12,e,s,gg)
var lMF=_oz(z,13,e,s,gg)
_(oLF,lMF)
_(hIF,oLF)
var aNF=_n('view')
_rz(z,aNF,'class',14,e,s,gg)
var tOF=_oz(z,15,e,s,gg)
_(aNF,tOF)
_(hIF,aNF)
var ePF=_n('view')
_rz(z,ePF,'class',16,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',17,e,s,gg)
var oRF=_n('view')
_rz(z,oRF,'class',18,e,s,gg)
var xSF=_oz(z,19,e,s,gg)
_(oRF,xSF)
_(bQF,oRF)
var oTF=_n('view')
_rz(z,oTF,'class',20,e,s,gg)
var fUF=_oz(z,21,e,s,gg)
_(oTF,fUF)
_(bQF,oTF)
_(ePF,bQF)
var cVF=_n('view')
_rz(z,cVF,'class',22,e,s,gg)
var hWF=_v()
_(cVF,hWF)
if(_oz(z,23,e,s,gg)){hWF.wxVkey=1
var oXF=_mz(z,'trailer-stars',['bind:__l',24,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(hWF,oXF)
}
var cYF=_n('view')
_rz(z,cYF,'class',28,e,s,gg)
var oZF=_oz(z,29,e,s,gg)
_(cYF,oZF)
_(cVF,cYF)
hWF.wxXCkey=1
hWF.wxXCkey=3
_(ePF,cVF)
_(hIF,ePF)
_(oFF,hIF)
_(bCF,oFF)
var l1F=_n('view')
_rz(z,l1F,'class',30,e,s,gg)
var a2F=_n('view')
_rz(z,a2F,'class',31,e,s,gg)
_(l1F,a2F)
_(bCF,l1F)
var t3F=_n('view')
_rz(z,t3F,'class',32,e,s,gg)
var e4F=_n('view')
_rz(z,e4F,'class',33,e,s,gg)
var b5F=_oz(z,34,e,s,gg)
_(e4F,b5F)
_(t3F,e4F)
var o6F=_n('view')
_rz(z,o6F,'class',35,e,s,gg)
var x7F=_oz(z,36,e,s,gg)
_(o6F,x7F)
_(t3F,o6F)
_(bCF,t3F)
var o8F=_n('view')
_rz(z,o8F,'class',37,e,s,gg)
var f9F=_n('view')
_rz(z,f9F,'class',38,e,s,gg)
var c0F=_oz(z,39,e,s,gg)
_(f9F,c0F)
_(o8F,f9F)
var hAG=_mz(z,'scroll-view',['scrollX',-1,'class',40],[],e,s,gg)
var oBG=_v()
_(hAG,oBG)
var cCG=function(lEG,oDG,aFG,gg){
var eHG=_n('view')
_rz(z,eHG,'class',44,lEG,oDG,gg)
var bIG=_mz(z,'image',['class',45,'mode',1,'src',2],[],lEG,oDG,gg)
_(eHG,bIG)
var oJG=_n('view')
_rz(z,oJG,'class',48,lEG,oDG,gg)
var xKG=_oz(z,49,lEG,oDG,gg)
_(oJG,xKG)
_(eHG,oJG)
var oLG=_n('view')
_rz(z,oLG,'class',50,lEG,oDG,gg)
var fMG=_oz(z,51,lEG,oDG,gg)
_(oLG,fMG)
_(eHG,oLG)
_(aFG,eHG)
return aFG
}
oBG.wxXCkey=2
_2z(z,43,cCG,e,s,gg,oBG,'yyp','__i0__','')
_(o8F,hAG)
_(bCF,o8F)
var cNG=_n('view')
_rz(z,cNG,'class',52,e,s,gg)
var hOG=_n('view')
_rz(z,hOG,'class',53,e,s,gg)
var oPG=_oz(z,54,e,s,gg)
_(hOG,oPG)
_(cNG,hOG)
var cQG=_mz(z,'scroll-view',['scrollX',-1,'class',55],[],e,s,gg)
var oRG=_v()
_(cQG,oRG)
var lSG=function(tUG,aTG,eVG,gg){
var oXG=_mz(z,'image',['bindtap',59,'class',1,'data-event-opts',2,'data-imgindex',3,'mode',4,'src',5],[],tUG,aTG,gg)
_(eVG,oXG)
return eVG
}
oRG.wxXCkey=2
_2z(z,58,lSG,e,s,gg,oRG,'juz','imgindex','')
_(cNG,cQG)
_(bCF,cNG)
_(r,bCF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oZG=_n('view')
_rz(z,oZG,'class',0,e,s,gg)
var f1G=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var c2G=_n('view')
_rz(z,c2G,'class',3,e,s,gg)
var h3G=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(c2G,h3G)
_(f1G,c2G)
var o4G=_n('view')
_rz(z,o4G,'class',6,e,s,gg)
var c5G=_n('label')
_rz(z,c5G,'class',7,e,s,gg)
var o6G=_oz(z,8,e,s,gg)
_(c5G,o6G)
_(o4G,c5G)
var l7G=_mz(z,'input',['class',9,'name',1,'placeholder',2,'placeholderClass',3,'type',4,'value',5],[],e,s,gg)
_(o4G,l7G)
_(f1G,o4G)
var a8G=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var t9G=_n('label')
_rz(z,t9G,'class',17,e,s,gg)
var e0G=_oz(z,18,e,s,gg)
_(t9G,e0G)
_(a8G,t9G)
var bAH=_mz(z,'input',['class',19,'name',1,'password',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(a8G,bAH)
_(f1G,a8G)
var oBH=_mz(z,'button',['formType',26,'style',1,'type',2],[],e,s,gg)
var xCH=_oz(z,29,e,s,gg)
_(oBH,xCH)
_(f1G,oBH)
_(oZG,f1G)
var oDH=_n('view')
_rz(z,oDH,'class',30,e,s,gg)
var fEH=_n('view')
_rz(z,fEH,'class',31,e,s,gg)
var cFH=_n('view')
_rz(z,cFH,'class',32,e,s,gg)
_(fEH,cFH)
_(oDH,fEH)
var hGH=_n('view')
_rz(z,hGH,'class',33,e,s,gg)
var oHH=_oz(z,34,e,s,gg)
_(hGH,oHH)
_(oDH,hGH)
var cIH=_n('view')
_rz(z,cIH,'class',35,e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',36,e,s,gg)
_(cIH,oJH)
_(oDH,cIH)
_(oZG,oDH)
var lKH=_n('view')
_rz(z,lKH,'class',37,e,s,gg)
var aLH=_mz(z,'image',['bindtap',38,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
_(lKH,aLH)
var tMH=_mz(z,'image',['src',-1,'bindtap',43,'class',1,'data-event-opts',2,'data-logintype',3],[],e,s,gg)
_(lKH,tMH)
var eNH=_mz(z,'image',['src',-1,'bindtap',47,'class',1,'data-event-opts',2,'data-logintype',3],[],e,s,gg)
_(lKH,eNH)
_(oZG,lKH)
_(r,oZG)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oPH=_n('view')
var xQH=_n('view')
_rz(z,xQH,'class',0,e,s,gg)
var oRH=_n('view')
_rz(z,oRH,'class',1,e,s,gg)
var fSH=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(oRH,fSH)
_(xQH,oRH)
var cTH=_mz(z,'input',['focus',-1,'bindconfirm',4,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5],[],e,s,gg)
_(xQH,cTH)
_(oPH,xQH)
var hUH=_n('view')
_rz(z,hUH,'class',10,e,s,gg)
var oVH=_v()
_(hUH,oVH)
var cWH=function(lYH,oXH,aZH,gg){
var e2H=_v()
_(aZH,e2H)
if(_oz(z,15,lYH,oXH,gg)){e2H.wxVkey=1
var b3H=_mz(z,'view',['bindinput',16,'class',1,'data-event-opts',2,'value',3],[],lYH,oXH,gg)
var o4H=_mz(z,'image',['bindtap',20,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],lYH,oXH,gg)
_(b3H,o4H)
_(e2H,b3H)
}
e2H.wxXCkey=1
return aZH
}
oVH.wxXCkey=2
_2z(z,13,cWH,e,s,gg,oVH,'ada','adaindex','adaindex')
var x5H=_v()
_(hUH,x5H)
var o6H=function(c8H,f7H,h9H,gg){
var cAI=_v()
_(h9H,cAI)
if(_oz(z,28,c8H,f7H,gg)){cAI.wxVkey=1
var oBI=_mz(z,'view',['bindinput',29,'class',1,'data-event-opts',2,'value',3],[],c8H,f7H,gg)
var lCI=_mz(z,'image',['class',33,'src',1],[],c8H,f7H,gg)
_(oBI,lCI)
_(cAI,oBI)
}
cAI.wxXCkey=1
return h9H
}
x5H.wxXCkey=2
_2z(z,27,o6H,e,s,gg,x5H,'ada2','__i0__','')
_(oPH,hUH)
_(r,oPH)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page{ width: 100%; height: 100%; background-color: #f7f7f7; }\n.",[1],"page-block{ background-color: #ffffff; }\n.",[1],"line-wapper{ padding: 0 ",[0,20],"; }\n.",[1],"line{ height: 1px; background-color: #DBDBDA; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['componets/helloComp.wxss']=undefined;    
__wxAppCode__['componets/helloComp.wxml']=$gwx('./componets/helloComp.wxml');

__wxAppCode__['componets/trailerStars.wxss']=setCssToHead([".",[1],"movie-score-wapper{ width: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; margin-top: ",[0,10],"; }\n.",[1],"star-ico{ width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movie-score{ font-size: 12px; color: grey; margin-left: ",[0,5],"; margin-top: ",[0,-7],"; }\n",],undefined,{path:"./componets/trailerStars.wxss"});    
__wxAppCode__['componets/trailerStars.wxml']=$gwx('./componets/trailerStars.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black{ background-color: #000000; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: fixed; }\n.",[1],"cover{ -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"carousel{ width: 100%; height: ",[0,440],"; }\n.",[1],"super-hot{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot-title-wappper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"hot-ico{ width: ",[0,35],"; height: ",[0,35],"; margin-top: ",[0,10],"; }\n.",[1],"hot-title{ font-size: 20px; margin-left: ",[0,20],"; font-weight: bold; }\n.",[1],"hot{ width: 100%; white-space: nowrap; }\n.",[1],"sigle-poster{ display: inline-block; margin-left: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"poster-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,330],"; }\n.",[1],"movie-name{ width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-score-wapper{ width: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; margin-top: ",[0,10],"; }\n.",[1],"star-ico{ width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movie-score{ font-size: 12px; color: grey; margin-left: ",[0,5],"; margin-top: ",[0,-7],"; }\n.",[1],"hot-movies{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot-movie-single{ width: ",[0,330],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"single-like-movie{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,30]," ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"like-movie{ width: ",[0,180],"; height: ",[0,240],"; -webkit-border-radius: 3%; border-radius: 3%; }\n.",[1],"movie-desc{ width: ",[0,340],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,40],"; }\n.",[1],"movie-title{ white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info{ color: #808080; font-size: 14px; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-oper{ border-left: dashed 2px #dbdbda; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-left: ",[0,20],"; }\n.",[1],"pralse-ico{ width: ",[0,60],"; height: ",[0,60],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"praise-me{ font-size: 14px; font-weight: bold; color: deeppink; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"animation-opacity{ font-weight: bold; opacity: 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"page-fill{ width: 100%; height: 100%; }\n.",[1],"header{ padding: ",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color: #ffd655; background: url(http://img.sccnn.com/bimg/341/13198.jpg) ",[0,60]," ",[0,-20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face{ width: ",[0,120],"; height: ",[0,120],"; -webkit-border-radius: 50%; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; border: 1px solid pink; }\n.",[1],"info-wapper{ width: 80%; margin-left: ",[0,30],"; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname{ color: #6a5018; font-size: 18px; font-weight: bold; }\n.",[1],"nav-info{ color: #a38e62; font-size: 14px; margin-top: ",[0,10],"; }\n.",[1],"set-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 15%; }\n.",[1],"settings{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"regist-login{ margin-left: ",[0,60],"; margin-top: ",[0,30],"; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill{ width: 100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"footer-opertor{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: fixed; bottom: 0; border-top: #515050 solid 1px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"opertor-words{ color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n.",[1],"pending-face{ width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 100%; }\n.",[1],"notice-words{ color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill{ width: 100%; height: 100%; position: absolute; padding: 0px; margin: 0px; }\n.",[1],"info-list{ padding: ",[0,0]," ",[0,30]," 0 ",[0,30],"; }\n.",[1],"info-words{ color: #333333; font-size: 16px; width: 25%; line-height: ",[0,80],"; }\n.",[1],"face{ width: ",[0,80],"; height: ",[0,80],"; -webkit-border-radius: 50%; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"arrow-block{ margin-left: ",[0,10],"; line-height: ",[0,86],"; }\n.",[1],"arrow-ico{ width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"item-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom{ margin-top: ",[0,20],"; padding-top: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"line-top{ }\n.",[1],"right-wapper{ width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields{ font-size: 14px; color: darkgray; line-height: ; }\n.",[1],"footer-wapper{ position: fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"footer-words{ text-align: center; background-color: white; padding: ",[0,20],"; color: #333333; font-size: 16px; }\n.",[1],"right-wapper-text{ margin-top: 10px; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"player{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: black; }\n#myTrailer{ width: 100%; }\n.",[1],"movie{ width: 100%; height: ",[0,440],"; }\n.",[1],"movie-info{ padding: ",[0,40]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; }\n.",[1],"cover{ width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title{ font-size: 20px; }\n.",[1],"basic-info{ color: darkgray; font-size: 14px; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block{ background-color: white; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; padding: ",[0,20],"; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words{ font-size: 14px; color: grey; }\n.",[1],"movie-score{ font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #FEAB2A; line-height: ",[0,60],"; }\n.",[1],"prise-counts{ font-size: 14px; color: grey; line-height: ",[0,44],"; }\n.",[1],"score-stars{ margin-top: ",[0,25],"; margin-left: ",[0,25],"; }\n.",[1],"plots-block{ background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title{ color: #A9A9A9; font-size: 16px; }\n.",[1],"plots-desc{ margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll-block{ background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"scroll-list{ width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image{ width: ",[0,280],"; height: ",[0,380],"; margin-left: ",[0,10],"; }\n.",[1],"single-actor{ width: ",[0,170],"; height: ",[0,240],"; margin-left: ",[0,10],"; }\n.",[1],"actor-wapper{ display: inline-block; }\n.",[1],"actor-name{ width: ",[0,170],"; text-align: center; font-size: 15px; overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor-role{ width: ",[0,170],"; text-align: center; font-size: 13px; color: #A9A9A9; margin-top: ",[0,5],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/movie/movie.wxss:12:1)",{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body{ border-top: solid 1px #DBDBDA; padding: 0 ",[0,40],"; }\n.",[1],"face-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,120],"; margin-bottom: ",[0,120],"; }\n.",[1],"face{ width: ",[0,140],"; height: ",[0,140],"; }\n.",[1],"info-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: solid 1px #DBDBDA; padding-bottom:",[0,20],"; }\n.",[1],"words-1b1{ color: #808080; }\n.",[1],"input{ width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"graywords{ color: #EAEAEA; }\n.",[1],"thierd-line{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"third-wapper{ width: 100%; margin-top: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"third-words{ color: #A9A9A9; font-size: 13px; }\n.",[1],"single-line{ padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wapper{ margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"third-ico{ width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico{ background-image: url(data:image/png;base64,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\x3d\x3d); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat: no-repeat; border: none; padding: 0; }\nwx-button::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search-block{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; top: 100; z-index: 20000; background-color: #f8f8f8; }\n.",[1],"search-ico{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search-text{ font-size: 14px; background-color: #eaeaea; height: ",[0,60],"; width: ",[0,640],"; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"search-ico-wapper{ background-color: #eaeaea; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,330],"; }\n.",[1],"movie-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,80]," ",[0,10]," ",[0,0]," ",[0,10],"; }\n.",[1],"movie-wapper{ padding: ",[0,10]," ",[0,20],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
