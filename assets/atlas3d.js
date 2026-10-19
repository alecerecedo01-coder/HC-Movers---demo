/* HC Movers — escultura 3D HCM · Atlas (v7, "Atlas-HCM-3D.html" de Claude Design, con three.js empaquetado).
   Generado por _build/build.py desde _fuentes/atlas-v7/; montado en #hero3d, sin controles, fondo transparente. */

(()=>{var Ya="169",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zc=0,dl=1,$c=2;var xc=1,Za=2,vn=3,zn=0,De=1,Mn=2,On=0,Ci=1,fl=2,pl=3,ml=4,Jc=5,$n=100,Kc=101,jc=102,Qc=103,th=104,eh=200,nh=201,ih=202,sh=203,Ro=204,Co=205,rh=206,oh=207,ah=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,Lo=0,Po=1,Io=2,Di=3,Do=4,Uo=5,No=6,Oo=7,yc=0,ph=1,mh=2,Fn=0,gh=1,_h=2,xh=3,$a=4,yh=5,vh=6,Mh=7;var vc=300,Ui=301,Ni=302,Fo=303,Bo=304,zr=306,ti=1e3,jn=1001,zo=1002,qe=1003,Sh=1004;var Ps=1005;var en=1006,Yr=1007;var Qn=1008;var En=1009,Mc=1010,Sc=1011,ps=1012,Ja=1013,ei=1014,Sn=1015,Rs=1016,Ka=1017,ja=1018,Oi=1020,bc=35902,Ec=1021,wc=1022,nn=1023,Tc=1024,Ac=1025,Li=1026,Fi=1027,Rc=1028,Qa=1029,Cc=1030,tl=1031;var el=1033,nr=33776,ir=33777,sr=33778,rr=33779,ko=35840,Ho=35841,Vo=35842,Go=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,Zo=37809,$o=37810,Jo=37811,Ko=37812,jo=37813,Qo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,or=36492,aa=36494,la=36495,Lc=36283,ca=36284,ha=36285,ua=36286;var lr=2300,da=2301,Zr=2302,gl=2400,_l=2401,xl=2402;var bh=3200,Eh=3201;var Pc=0,wh=1,Nn="",Ae="srgb",kn="srgb-linear",nl="display-p3",kr="display-p3-linear",cr="linear",ue="srgb",hr="rec709",ur="p3";var di=7680;var yl=519,Th=512,Ah=513,Rh=514,Ic=515,Ch=516,Lh=517,Ph=518,Ih=519,vl=35044;var Ml="300 es",bn=2e3,dr=2001,wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=1234567,cs=Math.PI/180,ms=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function il(i,t){return(i%t+t)%t}function Dh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Uh(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function Nh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function Oh(i,t=1){return t-Math.abs(il(i,t*2)-t)}function Fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kh(i,t){return i+Math.random()*(t-i)}function Hh(i){return i*(.5-Math.random())}function Vh(i){i!==void 0&&(Sl=i);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gh(i){return i*cs}function Wh(i){return i*ms}function Xh(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:cs,RAD2DEG:ms,generateUUID:ci,clamp:ye,euclideanModulo:il,mapLinear:Dh,inverseLerp:Uh,lerp:hs,damp:Nh,pingpong:Oh,smoothstep:Fh,smootherstep:Bh,randInt:zh,randFloat:kh,randFloatSpread:Hh,seededRandom:Vh,degToRad:Gh,radToDeg:Wh,isPowerOfTwo:Xh,ceilPowerOfTwo:qh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:Zh,normalize:Ue,denormalize:Ti},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],y=s[0],p=s[3],f=s[6],A=s[1],_=s[4],M=s[7],O=s[2],P=s[5],D=s[8];return r[0]=o*y+a*A+l*O,r[3]=o*p+a*_+l*P,r[6]=o*f+a*M+l*D,r[1]=c*y+h*A+d*O,r[4]=c*p+h*_+d*P,r[7]=c*f+h*M+d*D,r[2]=u*y+m*A+g*O,r[5]=u*p+m*_+g*P,r[8]=u*f+m*M+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=e*d+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$r=new Wt;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){let i=fr("canvas");return i.style.display="block",i}var bl={};function ar(i){i in bl||(bl[i]=!0,console.warn(i))}function Jh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var El=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[kn]:{transfer:cr,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ae]:{transfer:ue,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:cr,primaries:ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(wl),fromReference:i=>i.applyMatrix3(El)},[nl]:{transfer:ue,primaries:ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(wl),fromReference:i=>i.applyMatrix3(El).convertLinearToSRGB()}},Qh=new Set([kn,kr]),oe={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ns[t].toReference,s=ns[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ns[i].primaries},getTransfer:function(i){return i===Nn?cr:ns[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ns[t].luminanceCoefficients)}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fi,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=fr("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tu=0,pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kr(s[o].image)):r.push(Kr(s[o]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eu=0,Ge=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=en,o=Qn,a=nn,l=En,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ci(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=vc;Ge.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(m+1)/2,O=(f+1)/2,P=(h+u)/4,D=(d+y)/4,F=(g+p)/4;return _>M&&_>O?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=D/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=F/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=D/r,s=F/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-y)/A,this.z=(u-h)/A,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mr=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==m||h!==g){let p=1-a,f=l*u+c*m+h*g+d*y,A=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let O=Math.sqrt(_),P=Math.atan2(O,f*A);p=Math.sin(p*P)/O,a=Math.sin(a*P)/O}let M=a*A;if(l=l*p+u*M,c=c*p+m*M,h=h*p+g*M,d=d*p+y*M,p===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-a*m,t[e+2]=c*g+h*m+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jr=new B,Tl=new Be,An=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Ds.subVectors(this.max,is),pi.subVectors(t.a,is),mi.subVectors(t.b,is),gi.subVectors(t.c,is),Cn.subVectors(mi,pi),Ln.subVectors(gi,mi),Vn.subVectors(pi,gi);let e=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Vn.y,Vn.x,0];return!Qr(e,pi,mi,gi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,pi,mi,gi,Ds))?!1:(Us.crossVectors(Cn,Ln),e=[Us.x,Us.y,Us.z],Qr(e,pi,mi,gi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new B,new B,new B,new B,new B,new B,new B,new B],Ke=new B,Is=new An,pi=new B,mi=new B,gi=new B,Cn=new B,Ln=new B,Vn=new B,is=new B,Ds=new B,Us=new B,Gn=new B;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gn.fromArray(i,r);let a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nu=new An,ss=new B,to=new B,gs=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);let e=ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(to)),this.expandByPoint(ss.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new B,eo=new B,Ns=new B,Pn=new B,no=new B,Os=new B,io=new B,_s=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(eo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ns),a=Pn.dot(this.direction),l=-Pn.dot(Ns),c=Pn.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(eo).addScaledVector(Ns,u),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Os.subVectors(n,t),io.crossVectors(no,Os);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);let l=a*this.direction.dot(Os.crossVectors(Pn,Os));if(l<0)return null;let c=a*this.direction.dot(no.cross(Pn));if(c<0||l+c>o)return null;let h=-a*Pn.dot(io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,m,g,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,m,g,y,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),In.crossVectors(n,He),In.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),In.crossVectors(n,He)),In.normalize(),Fs.crossVectors(He,In),s[0]=In.x,s[4]=Fs.x,s[8]=He.x,s[1]=In.y,s[5]=Fs.y,s[9]=He.y,s[2]=In.z,s[6]=Fs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],A=n[3],_=n[7],M=n[11],O=n[15],P=s[0],D=s[4],F=s[8],nt=s[12],x=s[1],S=s[5],G=s[9],$=s[13],Q=s[2],dt=s[6],J=s[10],ot=s[14],k=s[3],St=s[7],Mt=s[11],Et=s[15];return r[0]=o*P+a*x+l*Q+c*k,r[4]=o*D+a*S+l*dt+c*St,r[8]=o*F+a*G+l*J+c*Mt,r[12]=o*nt+a*$+l*ot+c*Et,r[1]=h*P+d*x+u*Q+m*k,r[5]=h*D+d*S+u*dt+m*St,r[9]=h*F+d*G+u*J+m*Mt,r[13]=h*nt+d*$+u*ot+m*Et,r[2]=g*P+y*x+p*Q+f*k,r[6]=g*D+y*S+p*dt+f*St,r[10]=g*F+y*G+p*J+f*Mt,r[14]=g*nt+y*$+p*ot+f*Et,r[3]=A*P+_*x+M*Q+O*k,r[7]=A*D+_*S+M*dt+O*St,r[11]=A*F+_*G+M*J+O*Mt,r[15]=A*nt+_*$+M*ot+O*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],y=t[7],p=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*m-n*l*m)+y*(+e*l*m-e*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],y=t[13],p=t[14],f=t[15],A=d*p*c-y*u*c+y*l*m-a*p*m-d*l*f+a*u*f,_=g*u*c-h*p*c-g*l*m+o*p*m+h*l*f-o*u*f,M=h*y*c-g*d*c+g*a*m-o*y*m-h*a*f+o*d*f,O=g*d*l-h*y*l-g*a*u+o*y*u+h*a*p-o*d*p,P=e*A+n*_+s*M+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return t[0]=A*D,t[1]=(y*u*r-d*p*r-y*s*m+n*p*m+d*s*f-n*u*f)*D,t[2]=(a*p*r-y*l*r+y*s*c-n*p*c-a*s*f+n*l*f)*D,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*m-n*l*m)*D,t[4]=_*D,t[5]=(h*p*r-g*u*r+g*s*m-e*p*m-h*s*f+e*u*f)*D,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*D,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*m+e*l*m)*D,t[8]=M*D,t[9]=(g*d*r-h*y*r-g*n*m+e*y*m+h*n*f-e*d*f)*D,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*D,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*D,t[12]=O*D,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*p+e*d*p)*D,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*p-e*a*p)*D,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,g=r*d,y=o*h,p=o*d,f=a*d,A=l*c,_=l*h,M=l*d,O=n.x,P=n.y,D=n.z;return s[0]=(1-(y+f))*O,s[1]=(m+M)*O,s[2]=(g-_)*O,s[3]=0,s[4]=(m-M)*P,s[5]=(1-(u+f))*P,s[6]=(p+A)*P,s[7]=0,s[8]=(g+_)*D,s[9]=(p-A)*D,s[10]=(1-(u+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let c=1/r,h=1/o,d=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),m,g;if(a===bn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===dr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,m=(n+s)*h,g,y;if(a===bn)g=(o+r)*d,y=-2*d;else if(a===dr)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_i=new B,je=new me,iu=new B(0,0,0),su=new B(1,1,1),In=new B,Fs=new B,He=new B,Al=new me,Rl=new Be,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ru=0,Cl=new B,xi=new Be,gn=new me,Bs=new B,rs=new B,ou=new B,au=new Be,Ll=new B(1,0,0),Pl=new B(0,1,0),Il=new B(0,0,1),Dl={type:"added"},lu={type:"removed"},yi={type:"childadded",child:null},so={type:"childremoved",child:null},Oe=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new un,n=new Be,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Wt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(rs,Bs,this.up):gn.lookAt(Bs,rs,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new B(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new B,_n=new B,ro=new B,xn=new B,vi=new B,Mi=new B,Ul=new B,oo=new B,ao=new B,lo=new B,co=new ae,ho=new ae,uo=new ae,Jn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),_n.subVectors(n,e),ro.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(_n),l=Qe.dot(ro),c=_n.dot(_n),h=_n.dot(ro),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),_n.subVectors(t,e),Qe.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vi.subVectors(s,n),Mi.subVectors(r,n),oo.subVectors(t,n);let l=vi.dot(oo),c=Mi.dot(oo);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,s);let h=vi.dot(ao),d=Mi.dot(ao);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vi,o);lo.subVectors(t,r);let m=vi.dot(lo),g=Mi.dot(lo);if(g>=0&&m<=g)return e.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Mi,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ul.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Ul,a);let f=1/(p+y+u);return o=y*f,a=u*f,e.copy(n).addScaledVector(vi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=il(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return oe.fromWorkingColorSpace(Pe.copy(this),t),Math.round(ye(Pe.r*255,0,255))*65536+Math.round(ye(Pe.g*255,0,255))*256+Math.round(ye(Pe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ae){oe.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(zs);let n=hs(Dn.h,zs.h,e),s=hs(Dn.s,zs.s,e),r=hs(Dn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Kt;Kt.NAMES=Uc;var cu=0,ni=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Ci,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bi=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new B,ks=new ht,Ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var _r=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},hu=0,Xe=new me,po=new Oe,Si=new B,Ve=new An,os=new An,Te=new B,Ce=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?xr:_r)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ve.min,os.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,os.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(os.min),Ve.expandByPoint(os.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),Te.add(Si)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new B,l[F]=new B;let c=new B,h=new B,d=new B,u=new ht,m=new ht,g=new ht,y=new B,p=new B;function f(F,nt,x){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,nt),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,F),m.fromBufferAttribute(r,nt),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),m.sub(u),g.sub(u);let S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(S),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(S),a[F].add(y),a[nt].add(y),a[x].add(y),l[F].add(p),l[nt].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,nt=A.length;F<nt;++F){let x=A[F],S=x.start,G=x.count;for(let $=S,Q=S+G;$<Q;$+=3)f(t.getX($+0),t.getX($+1),t.getX($+2))}let _=new B,M=new B,O=new B,P=new B;function D(F){O.fromBufferAttribute(s,F),P.copy(O);let nt=a[F];_.copy(nt),_.sub(O.multiplyScalar(O.dot(nt))).normalize(),M.crossVectors(P,nt);let S=M.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,S)}for(let F=0,nt=A.length;F<nt;++F){let x=A[F],S=x.start,G=x.count;for(let $=S,Q=S+G;$<Q;$+=3)D(t.getX($+0)),D(t.getX($+1)),D(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new Ye(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nl=new me,Wn=new _s,Hs=new gs,Ol=new B,Vs=new B,Gs=new B,Ws=new B,mo=new B,Xs=new B,Fl=new B,qs=new B,jt=class extends Oe{constructor(t=new Ce,e=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(mo.fromBufferAttribute(d,t),o?Xs.addScaledVector(mo,h):Xs.addScaledVector(mo.sub(e),h))}e.add(Xs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Hs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Hs,Ol)===null||Wn.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,O=_;M<O;M+=3){let P=a.getX(M),D=a.getX(M+1),F=a.getX(M+2);s=Ys(this,f,t,n,c,h,d,P,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let A=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);s=Ys(this,o,t,n,c,h,d,A,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,O=_;M<O;M+=3){let P=M,D=M+1,F=M+2;s=Ys(this,f,t,n,c,h,d,P,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let A=p,_=p+1,M=p+2;s=Ys(this,o,t,n,c,h,d,A,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function uu(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Ws);let h=uu(i,t,e,n,Vs,Gs,Ws,Fl);if(h){let d=new B;Jn.getBarycoord(Fl,Vs,Gs,Ws,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,l,c,d,new ht)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,l,c,d,new ht)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};Jn.getNormal(Vs,Gs,Ws,u.normal),h.face=u,h.barycoord=d}return h}var sn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(y,p,f,A,_,M,O,P,D,F,nt){let x=M/D,S=O/F,G=M/2,$=O/2,Q=P/2,dt=D+1,J=F+1,ot=0,k=0,St=new B;for(let Mt=0;Mt<J;Mt++){let Et=Mt*S-$;for(let Gt=0;Gt<dt;Gt++){let Jt=Gt*x-G;St[y]=Jt*A,St[p]=Et*_,St[f]=Q,c.push(St.x,St.y,St.z),St[y]=0,St[p]=0,St[f]=P>0?1:-1,h.push(St.x,St.y,St.z),d.push(Gt/D),d.push(1-Mt/F),ot+=1}}for(let Mt=0;Mt<F;Mt++)for(let Et=0;Et<D;Et++){let Gt=u+Et+dt*Mt,Jt=u+Et+dt*(Mt+1),N=u+(Et+1)+dt*(Mt+1),U=u+(Et+1)+dt*Mt;l.push(Gt,Jt,U),l.push(Jt,N,U),k+=6}a.addGroup(m,k,nt),m+=k,u+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function du(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var fu={clone:zi,merge:Ne},pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new B,Bl=new ht,zl=new ht,Ie=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,zl),e.subVectors(zl,Bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bi=-90,Ei=1,ga=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(bi,Ei,t,e);s.layers=this.layers,this.add(s);let r=new Ie(bi,Ei,t,e);r.layers=this.layers,this.add(r);let o=new Ie(bi,Ei,t,e);o.layers=this.layers,this.add(o);let a=new Ie(bi,Ei,t,e);a.layers=this.layers,this.add(a);let l=new Ie(bi,Ei,t,e);l.layers=this.layers,this.add(l);let c=new Ie(bi,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vr=class extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:On});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=en),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},go=new B,gu=new B,_u=new Wt,tn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=go.subVectors(n,e).cross(gu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_u.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new gs,Zs=new B,xs=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],g=s[9],y=s[10],p=s[11],f=s[12],A=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,p-m,M-f).normalize(),n[1].setComponents(l+r,u+c,p+m,M+f).normalize(),n[2].setComponents(l+o,u+h,p+g,M+A).normalize(),n[3].setComponents(l-o,u-h,p-g,M-A).normalize(),n[4].setComponents(l-a,u-d,p-y,M-_).normalize(),e===bn)n[5].setComponents(l+a,u+d,p+y,M+_).normalize();else if(e===dr)n[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let y=d[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mr=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){let A=f*u-o;for(let _=0;_<c;_++){let M=_*d-r;g.push(M,-A,0),y.push(0,0,1),p.push(_/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){let _=A+c*f,M=A+c*(f+1),O=A+1+c*(f+1),P=A+1+c*f;m.push(_,M,P),m.push(M,O,P)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_d=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:yu,alphahash_pars_fragment:vu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:bu,alphatest_pars_fragment:Eu,aomap_fragment:wu,aomap_pars_fragment:Tu,batching_pars_vertex:Au,batching_vertex:Ru,begin_vertex:Cu,beginnormal_vertex:Lu,bsdfs:Pu,iridescence_fragment:Iu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Fu,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Hu,common:Vu,cube_uv_reflection_fragment:Gu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:Zu,colorspace_fragment:$u,colorspace_pars_fragment:Ju,envmap_fragment:Ku,envmap_common_pars_fragment:ju,envmap_pars_fragment:Qu,envmap_pars_vertex:td,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:od,lightmap_pars_fragment:ad,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:xd,lights_fragment_maps:yd,lights_fragment_end:vd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Ed,map_fragment:wd,map_pars_fragment:Td,map_particle_fragment:Ad,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Pd,morphcolor_vertex:Id,morphnormal_vertex:Dd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Od,normal_fragment_maps:Fd,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:kd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Zd,project_vertex:$d,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:ef,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:of,skinning_vertex:af,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:hf,tonemapping_fragment:uf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:_f,worldpos_vertex:xf,background_vert:yf,background_frag:vf,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:bf,cube_frag:Ef,depth_vert:wf,depth_frag:Tf,distanceRGBA_vert:Af,distanceRGBA_frag:Rf,equirect_vert:Cf,equirect_frag:Lf,linedashed_vert:Pf,linedashed_frag:If,meshbasic_vert:Df,meshbasic_frag:Uf,meshlambert_vert:Nf,meshlambert_frag:Of,meshmatcap_vert:Ff,meshmatcap_frag:Bf,meshnormal_vert:zf,meshnormal_frag:kf,meshphong_vert:Hf,meshphong_frag:Vf,meshphysical_vert:Gf,meshphysical_frag:Wf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Yf,points_frag:Zf,shadow_vert:$f,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:jf},At={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},cn={basic:{uniforms:Ne([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ne([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ne([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ne([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ne([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ne([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ne([At.points,At.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ne([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ne([At.common,At.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ne([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ne([At.sprite,At.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ne([At.common,At.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ne([At.lights,At.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};cn.physical={uniforms:Ne([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var $s={r:0,b:0,g:0},qn=new un,Qf=new me;function tp(i,t,e,n,s,r,o){let a=new Kt(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?e:t).get(_)),_}function y(A){let _=!1,M=g(A);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===zr)?(h===void 0&&(h=new jt(new sn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(_.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(qn)),h.material.toneMapped=oe.getTransfer(M.colorSpace)!==ue,(d!==M||u!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new jt(new Mr(2,2),new dn({name:"BackgroundMaterial",uniforms:zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,_){A.getRGB($s,Nc(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(A,_=1){a.set(A),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:y,addToRenderList:p}}function ep(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(x,S,G,$,Q){let dt=!1,J=d($,G,S);r!==J&&(r=J,c(r.object)),dt=m(x,$,G,Q),dt&&g(x,$,G,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,M(x,S,G,$),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,S,G){let $=G.wireframe===!0,Q=n[x.id];Q===void 0&&(Q={},n[x.id]=Q);let dt=Q[S.id];dt===void 0&&(dt={},Q[S.id]=dt);let J=dt[$];return J===void 0&&(J=u(l()),dt[$]=J),J}function u(x){let S=[],G=[],$=[];for(let Q=0;Q<e;Q++)S[Q]=0,G[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:$,object:x,attributes:{},index:null}}function m(x,S,G,$){let Q=r.attributes,dt=S.attributes,J=0,ot=G.getAttributes();for(let k in ot)if(ot[k].location>=0){let Mt=Q[k],Et=dt[k];if(Et===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Et=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Et=x.instanceColor)),Mt===void 0||Mt.attribute!==Et||Et&&Mt.data!==Et.data)return!0;J++}return r.attributesNum!==J||r.index!==$}function g(x,S,G,$){let Q={},dt=S.attributes,J=0,ot=G.getAttributes();for(let k in ot)if(ot[k].location>=0){let Mt=dt[k];Mt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor));let Et={};Et.attribute=Mt,Mt&&Mt.data&&(Et.data=Mt.data),Q[k]=Et,J++}r.attributes=Q,r.attributesNum=J,r.index=$}function y(){let x=r.newAttributes;for(let S=0,G=x.length;S<G;S++)x[S]=0}function p(x){f(x,0)}function f(x,S){let G=r.newAttributes,$=r.enabledAttributes,Q=r.attributeDivisors;G[x]=1,$[x]===0&&(i.enableVertexAttribArray(x),$[x]=1),Q[x]!==S&&(i.vertexAttribDivisor(x,S),Q[x]=S)}function A(){let x=r.newAttributes,S=r.enabledAttributes;for(let G=0,$=S.length;G<$;G++)S[G]!==x[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function _(x,S,G,$,Q,dt,J){J===!0?i.vertexAttribIPointer(x,S,G,Q,dt):i.vertexAttribPointer(x,S,G,$,Q,dt)}function M(x,S,G,$){y();let Q=$.attributes,dt=G.getAttributes(),J=S.defaultAttributeValues;for(let ot in dt){let k=dt[ot];if(k.location>=0){let St=Q[ot];if(St===void 0&&(ot==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),ot==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),St!==void 0){let Mt=St.normalized,Et=St.itemSize,Gt=t.get(St);if(Gt===void 0)continue;let Jt=Gt.buffer,N=Gt.type,U=Gt.bytesPerElement,R=N===i.INT||N===i.UNSIGNED_INT||St.gpuType===Ja;if(St.isInterleavedBufferAttribute){let b=St.data,it=b.stride,ft=St.offset;if(b.isInstancedInterleavedBuffer){for(let X=0;X<k.locationSize;X++)f(k.location+X,b.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let X=0;X<k.locationSize;X++)p(k.location+X);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let X=0;X<k.locationSize;X++)_(k.location+X,Et/k.locationSize,N,Mt,it*U,(ft+Et/k.locationSize*X)*U,R)}else{if(St.isInstancedBufferAttribute){for(let b=0;b<k.locationSize;b++)f(k.location+b,St.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let b=0;b<k.locationSize;b++)p(k.location+b);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let b=0;b<k.locationSize;b++)_(k.location+b,Et/k.locationSize,N,Mt,Et*U,Et/k.locationSize*b*U,R)}}else if(J!==void 0){let Mt=J[ot];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(k.location,Mt);break;case 3:i.vertexAttrib3fv(k.location,Mt);break;case 4:i.vertexAttrib4fv(k.location,Mt);break;default:i.vertexAttrib1fv(k.location,Mt)}}}}A()}function O(){F();for(let x in n){let S=n[x];for(let G in S){let $=S[G];for(let Q in $)h($[Q].object),delete $[Q];delete S[G]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;let S=n[x.id];for(let G in S){let $=S[G];for(let Q in $)h($[Q].object),delete $[Q];delete S[G]}delete n[x.id]}function D(x){for(let S in n){let G=n[S];if(G[x.id]===void 0)continue;let $=G[x.id];for(let Q in $)h($[Q].object),delete $[Q];delete G[x.id]}}function F(){nt(),o=!0,r!==s&&(r=s,c(r.object))}function nt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:nt,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function np(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,u){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)e.update(g,n,u[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==nn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==En&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Sn&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let D=t.get("EXT_clip_control");D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:A,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:O,maxSamples:P}}function sp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new tn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:n,_=A*4,M=f.clippingState||null;l.value=M,M=h(g,u,_,m);for(let O=0;O!==_;++O)M[O]=e[O];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let f=m+y*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,M=m;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(A,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function rp(i){let t=new WeakMap;function e(o,a){return a===Fo?o.mapping=Ui:a===Bo&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fo||a===Bo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sr=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ai=4,kl=[.125,.215,.35,.446,.526,.582],Kn=20,_o=new Sr,Hl=new Kt,xo=null,yo=0,vo=0,Mo=!1,Zn=(1+Math.sqrt(5))/2,wi=1/Zn,Vl=[new B(-Zn,wi,0),new B(Zn,wi,0),new B(-wi,0,Zn),new B(wi,0,Zn),new B(0,Zn,-wi),new B(0,Zn,wi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ki=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,yo,vo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Rs,format:nn,colorSpace:kn,depthBuffer:!1},s=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=ap(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Hl),h.toneMapping=Fn,h.autoClear=!1;let m=new Bi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new jt(new sn,m),y=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(Hl),y=!0);for(let f=0;f<6;f++){let A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;Js(s,A*_,f>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vl[(s-r-1)%Vl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new jt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Kn;p>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);let f=[],A=0;for(let D=0;D<Kn;++D){let F=D/y,nt=Math.exp(-F*F/2);f.push(nt),D===0?A+=nt:D<p&&(A+=2*nt)}for(let D=0;D<f.length;D++)f[D]=f[D]/A;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let M=this._sizeLods[s],O=3*M*(s>_-Ai?s-_+Ai:0),P=4*(this._cubeSize-M);Js(e,O,P,3*M,2*M),l.setRenderTarget(e),l.render(d,_o)}};function op(i){let t=[],e=[],n=[],s=i,r=i-Ai+1+kl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ai?l=kl[o-i+Ai-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,p=2,f=1,A=new Float32Array(y*g*m),_=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let P=0;P<m;P++){let D=P%3*2/3-1,F=P>2?0:-1,nt=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];A.set(nt,y*g*P),_.set(u,p*g*P);let x=[P,P,P,P,P,P];M.set(x,f*g*P)}let O=new Ce;O.setAttribute("position",new Ye(A,y)),O.setAttribute("uv",new Ye(_,p)),O.setAttribute("faceIndex",new Ye(M,f)),t.push(O),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(i,t,e){let n=new Tn(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ap(i,t,e){let n=new Float32Array(Kn),s=new B(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Wl(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Xl(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fo||l===Bo,h=l===Ui||l===Ni;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ki(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ki(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hp(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)t.remove(y[p])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let A=m.array;y=m.version;for(let _=0,M=A.length;_<M;_+=3){let O=A[_+0],P=A[_+1],D=A[_+2];u.push(O,P,P,D,D,O)}}else if(g!==void 0){let A=g.array;y=g.version;for(let _=0,M=A.length/3-1;_<M;_+=3){let O=_+0,P=_+1,D=_+2;u.push(O,P,P,D,D,O)}}else return;let p=new(Dc(u)?xr:_r)(u,1);p.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function up(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*o,g),e.update(m,n,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function d(u,m,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)c(u[f]/o,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,y,0,g);let f=0;for(let A=0;A<g;A++)f+=m[A];for(let A=0;A<y.length;A++)e.update(f,n,y[A])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function dp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fp(i,t,e){let n=new WeakMap,s=new ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let nt=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",nt)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],_=0;m===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let M=a.attributes.position.count*_,O=1;M>t.maxTextureSize&&(O=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let P=new Float32Array(M*O*4*d),D=new mr(P,M,O,d);D.type=Sn,D.needsUpdate=!0;let F=_*4;for(let x=0;x<d;x++){let S=p[x],G=f[x],$=A[x],Q=M*O*4*x;for(let dt=0;dt<S.count;dt++){let J=dt*F;m===!0&&(s.fromBufferAttribute(S,dt),P[Q+J+0]=s.x,P[Q+J+1]=s.y,P[Q+J+2]=s.z,P[Q+J+3]=0),g===!0&&(s.fromBufferAttribute(G,dt),P[Q+J+4]=s.x,P[Q+J+5]=s.y,P[Q+J+6]=s.z,P[Q+J+7]=0),y===!0&&(s.fromBufferAttribute($,dt),P[Q+J+8]=s.x,P[Q+J+9]=s.y,P[Q+J+10]=s.z,P[Q+J+11]=$.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new ht(M,O)},n.set(a,u),a.addEventListener("dispose",nt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function pp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var br=class extends Ge{constructor(t,e,n,s,r,o,a,l,c,h=Li){if(h!==Li&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ei),n===void 0&&h===Fi&&(n=Oi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fc=new Ge,ql=new br(1,1),Bc=new mr,zc=new ma,kc=new vr,Yl=[],Zl=[],$l=new Float32Array(16),Jl=new Float32Array(9),Kl=new Float32Array(4);function Zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),be(e,n)}}function vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Jl.set(n),i.uniformMatrix3fv(this.addr,!1,Jl),be(e,n)}}function Mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),be(e,n)}}function Sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Tp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=Ic,r=ql):r=Fc,e.setTexture2D(t||r,s)}function Pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function Ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kc,s)}function Dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function Up(i){switch(i){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return xp;case 35674:return yp;case 35675:return vp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Ap;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Dp}}function Np(i,t){i.uniform1fv(this.addr,t)}function Op(i,t){let e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Fp(i,t){let e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Bp(i,t){let e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function zp(i,t){let e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kp(i,t){let e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hp(i,t){let e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vp(i,t){i.uniform1iv(this.addr,t)}function Gp(i,t){i.uniform2iv(this.addr,t)}function Wp(i,t){i.uniform3iv(this.addr,t)}function Xp(i,t){i.uniform4iv(this.addr,t)}function qp(i,t){i.uniform1uiv(this.addr,t)}function Yp(i,t){i.uniform2uiv(this.addr,t)}function Zp(i,t){i.uniform3uiv(this.addr,t)}function $p(i,t){i.uniform4uiv(this.addr,t)}function Jp(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fc,r[o])}function Kp(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zc,r[o])}function jp(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kc,r[o])}function Qp(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bc,r[o])}function tm(i){switch(i){case 5126:return Np;case 35664:return Op;case 35665:return Fp;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return Zp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}var xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Up(e.type)}},ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tm(e.type)}},va=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},So=/(\w+)(\])?(\[|\.)?/g;function jl(i,t){i.seq.push(t),i.map[t.id]=t}function em(i,t,e){let n=i.name,s=n.length;for(So.lastIndex=0;;){let r=So.exec(n),o=So.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jl(e,c===void 0?new xa(a,i,t):new ya(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new va(a),jl(e,d)),e=d}}}var Ii=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);em(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ql(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var nm=37297,im=0;function sm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function rm(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===ur&&e===hr?n="LinearDisplayP3ToLinearSRGB":t===hr&&e===ur&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case kr:return[n,"LinearTransferOETF"];case Ae:case nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),o)}else return s}function om(i,t){let e=rm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function am(i,t){let e;switch(t){case gh:e="Linear";break;case _h:e="Reinhard";break;case xh:e="Cineon";break;case $a:e="ACESFilmic";break;case vh:e="AgX";break;case Mh:e="Neutral";break;case yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ks=new B;function lm(){oe.getLuminanceCoefficients(Ks);let i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function hm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ls(i){return i!==""}function ec(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(dm,pm)}var fm=new Map;function pm(i,t){let e=$t[t];if(e===void 0){let n=fm.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}var mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(mm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Za?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ym(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_m(e),c=xm(e),h=ym(e),d=vm(e),u=Mm(e),m=cm(e),g=hm(r),y=s.createProgram(),p,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(p=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Fn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=Ma(o),o=ec(o,e),o=nc(o,e),a=Ma(a),a=ec(a,e),a=nc(a,e),o=ic(o),a=ic(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=A+p+o,M=A+f+a,O=Ql(s,s.VERTEX_SHADER,_),P=Ql(s,s.FRAGMENT_SHADER,M);s.attachShader(y,O),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(S){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y).trim(),$=s.getShaderInfoLog(O).trim(),Q=s.getShaderInfoLog(P).trim(),dt=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,O,P);else{let ot=tc(s,O,"vertex"),k=tc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+ot+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):($===""||Q==="")&&(J=!1);J&&(S.diagnostics={runnable:dt,programLog:G,vertexShader:{log:$,prefix:p},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(O),s.deleteShader(P),F=new Ii(s,y),nt=um(s,y)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let nt;this.getAttributes=function(){return nt===void 0&&D(this),nt};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,nm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=P,this}var bm=0,Sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ba(t),e.set(t,n)),n}},ba=class{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}};function Em(i,t,e,n,s,r,o){let a=new gr,l=new Sa,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,S,G,$,Q){let dt=$.fog,J=Q.geometry,ot=x.isMeshStandardMaterial?$.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||ot),St=k&&k.mapping===zr?k.image.height:null,Mt=y[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Gt=Et!==void 0?Et.length:0,Jt=0;J.morphAttributes.position!==void 0&&(Jt=1),J.morphAttributes.normal!==void 0&&(Jt=2),J.morphAttributes.color!==void 0&&(Jt=3);let N,U,R,b;if(Mt){let ve=cn[Mt];N=ve.vertexShader,U=ve.fragmentShader}else N=x.vertexShader,U=x.fragmentShader,l.update(x),R=l.getVertexShaderID(x),b=l.getFragmentShaderID(x);let it=i.getRenderTarget(),ft=Q.isInstancedMesh===!0,X=Q.isBatchedMesh===!0,gt=!!x.map,j=!!x.matcap,w=!!k,Y=!!x.aoMap,et=!!x.lightMap,st=!!x.bumpMap,at=!!x.normalMap,z=!!x.displacementMap,C=!!x.emissiveMap,E=!!x.metalnessMap,v=!!x.roughnessMap,K=x.anisotropy>0,ct=x.clearcoat>0,pt=x.dispersion>0,ut=x.iridescence>0,Nt=x.sheen>0,wt=x.transmission>0,Pt=K&&!!x.anisotropyMap,Tt=ct&&!!x.clearcoatMap,vt=ct&&!!x.clearcoatNormalMap,Rt=ct&&!!x.clearcoatRoughnessMap,kt=ut&&!!x.iridescenceMap,Ht=ut&&!!x.iridescenceThicknessMap,Ot=Nt&&!!x.sheenColorMap,Qt=Nt&&!!x.sheenRoughnessMap,Xt=!!x.specularMap,re=!!x.specularColorMap,W=!!x.specularIntensityMap,Ut=wt&&!!x.transmissionMap,lt=wt&&!!x.thicknessMap,xt=!!x.gradientMap,bt=!!x.alphaMap,Lt=x.alphaTest>0,Zt=!!x.alphaHash,he=!!x.extensions,Re=Fn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Re=i.toneMapping);let ee={shaderID:Mt,shaderType:x.type,shaderName:x.name,vertexShader:N,fragmentShader:U,defines:x.defines,customVertexShaderID:R,customFragmentShaderID:b,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:X,batchingColor:X&&Q._colorsTexture!==null,instancing:ft,instancingColor:ft&&Q.instanceColor!==null,instancingMorph:ft&&Q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:kn,alphaToCoverage:!!x.alphaToCoverage,map:gt,matcap:j,envMap:w,envMapMode:w&&k.mapping,envMapCubeUVHeight:St,aoMap:Y,lightMap:et,bumpMap:st,normalMap:at,displacementMap:m&&z,emissiveMap:C,normalMapObjectSpace:at&&x.normalMapType===wh,normalMapTangentSpace:at&&x.normalMapType===Pc,metalnessMap:E,roughnessMap:v,anisotropy:K,anisotropyMap:Pt,clearcoat:ct,clearcoatMap:Tt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Rt,dispersion:pt,iridescence:ut,iridescenceMap:kt,iridescenceThicknessMap:Ht,sheen:Nt,sheenColorMap:Ot,sheenRoughnessMap:Qt,specularMap:Xt,specularColorMap:re,specularIntensityMap:W,transmission:wt,transmissionMap:Ut,thicknessMap:lt,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:bt,alphaTest:Lt,alphaHash:Zt,combine:x.combine,mapUv:gt&&p(x.map.channel),aoMapUv:Y&&p(x.aoMap.channel),lightMapUv:et&&p(x.lightMap.channel),bumpMapUv:st&&p(x.bumpMap.channel),normalMapUv:at&&p(x.normalMap.channel),displacementMapUv:z&&p(x.displacementMap.channel),emissiveMapUv:C&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:v&&p(x.roughnessMap.channel),anisotropyMapUv:Pt&&p(x.anisotropyMap.channel),clearcoatMapUv:Tt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&p(x.sheenRoughnessMap.channel),specularMapUv:Xt&&p(x.specularMap.channel),specularColorMapUv:re&&p(x.specularColorMap.channel),specularIntensityMapUv:W&&p(x.specularIntensityMap.channel),transmissionMapUv:Ut&&p(x.transmissionMap.channel),thicknessMapUv:lt&&p(x.thicknessMap.channel),alphaMapUv:bt&&p(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(at||K),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(gt||bt),fog:!!dt,useFog:x.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:Jt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:gt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function A(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let G in x.defines)S.push(G),S.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(_(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){let S=y[x.type],G;if(S){let $=cn[S];G=fu.clone($.uniforms)}else G=x.uniforms;return G}function P(x,S){let G;for(let $=0,Q=h.length;$<Q;$++){let dt=h[$];if(dt.cacheKey===S){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new Sm(i,S,x,r),h.push(G)),G}function D(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function F(x){l.remove(x)}function nt(){l.dispose()}return{getParameters:f,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:D,releaseShaderCache:F,programs:h,dispose:nt}}function wm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,m,g,y,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),t++,f}function a(d,u,m,g,y,p){let f=o(d,u,m,g,y,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(d,u,m,g,y,p){let f=o(d,u,m,g,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Tm),n.length>1&&n.sort(u||rc),s.length>1&&s.sort(u||rc)}function h(){for(let d=t,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Am(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new oc,i.set(n,[o])):s>=r.length?(o=new oc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Kt};break;case"SpotLight":e={position:new B,direction:new B,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Cm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Lm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Im(i){let t=new Rm,e=Cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new me,o=new me;function a(c){let h=0,d=0,u=0;for(let nt=0;nt<9;nt++)n.probe[nt].set(0,0,0);let m=0,g=0,y=0,p=0,f=0,A=0,_=0,M=0,O=0,P=0,D=0;c.sort(Pm);for(let nt=0,x=c.length;nt<x;nt++){let S=c[nt],G=S.color,$=S.intensity,Q=S.distance,dt=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(S.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(S.sh.coefficients[J],$);D++}else if(S.isDirectionalLight){let J=t.get(S);if(J.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ot=S.shadow,k=e.get(S);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=dt,n.directionalShadowMatrix[m]=S.shadow.matrix,A++}n.directional[m]=J,m++}else if(S.isSpotLight){let J=t.get(S);J.position.setFromMatrixPosition(S.matrixWorld),J.color.copy(G).multiplyScalar($),J.distance=Q,J.coneCos=Math.cos(S.angle),J.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),J.decay=S.decay,n.spot[y]=J;let ot=S.shadow;if(S.map&&(n.spotLightMap[O]=S.map,O++,ot.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[y]=ot.matrix,S.castShadow){let k=e.get(S);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=dt,M++}y++}else if(S.isRectAreaLight){let J=t.get(S);J.color.copy(G).multiplyScalar($),J.halfWidth.set(S.width*.5,0,0),J.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=J,p++}else if(S.isPointLight){let J=t.get(S);if(J.color.copy(S.color).multiplyScalar(S.intensity),J.distance=S.distance,J.decay=S.decay,S.castShadow){let ot=S.shadow,k=e.get(S);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,k.shadowCameraNear=ot.camera.near,k.shadowCameraFar=ot.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=dt,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=J,g++}else if(S.isHemisphereLight){let J=t.get(S);J.skyColor.copy(S.color).multiplyScalar($),J.groundColor.copy(S.groundColor).multiplyScalar($),n.hemi[f]=J,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==A||F.numPointShadows!==_||F.numSpotShadows!==M||F.numSpotMaps!==O||F.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,F.directionalLength=m,F.pointLength=g,F.spotLength=y,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=A,F.numPointShadows=_,F.numSpotShadows=M,F.numSpotMaps=O,F.numLightProbes=D,n.version=Lm++)}function l(c,h){let d=0,u=0,m=0,g=0,y=0,p=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let _=c[f];if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(_.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function ac(i){let t=new Im(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ac(i),t.set(s,[a])):r>=o.length?(a=new ac(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ea=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wa=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Om(i,t,e){let n=new xs,s=new ht,r=new ht,o=new ae,a=new Ea({depthPacking:Eh}),l=new wa,c={},h=e.maxTextureSize,d={[zn]:De,[De]:zn,[Mn]:Mn},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Um,fragmentShader:Nm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new jt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let f=this.type;this.render=function(P,D,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let nt=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),G=i.state;G.setBlending(On),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=f!==vn&&this.type===vn,Q=f===vn&&this.type!==vn;for(let dt=0,J=P.length;dt<J;dt++){let ot=P[dt],k=ot.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let St=k.getFrameExtents();if(s.multiply(St),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/St.x),s.x=r.x*St.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/St.y),s.y=r.y*St.y,k.mapSize.y=r.y)),k.map===null||$===!0||Q===!0){let Et=this.type!==vn?{minFilter:qe,magFilter:qe}:{};k.map!==null&&k.map.dispose(),k.map=new Tn(s.x,s.y,Et),k.map.texture.name=ot.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let Mt=k.getViewportCount();for(let Et=0;Et<Mt;Et++){let Gt=k.getViewport(Et);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),G.viewport(o),k.updateMatrices(ot,Et),n=k.getFrustum(),M(D,F,k.camera,ot,this.type)}k.isPointLightShadow!==!0&&this.type===vn&&A(k,F),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(nt,x,S)};function A(P,D){let F=t.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Tn(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,F,u,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,F,m,y,null)}function _(P,D,F,nt){let x=null,S=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)x=S;else if(x=F.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let G=x.uuid,$=D.uuid,Q=c[G];Q===void 0&&(Q={},c[G]=Q);let dt=Q[$];dt===void 0&&(dt=x.clone(),Q[$]=dt,D.addEventListener("dispose",O)),x=dt}if(x.visible=D.visible,x.wireframe=D.wireframe,nt===vn?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=i.properties.get(x);G.light=F}return x}function M(P,D,F,nt,x){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let $=t.update(P),Q=P.material;if(Array.isArray(Q)){let dt=$.groups;for(let J=0,ot=dt.length;J<ot;J++){let k=dt[J],St=Q[k.materialIndex];if(St&&St.visible){let Mt=_(P,St,nt,x);P.onBeforeShadow(i,P,D,F,$,Mt,k),i.renderBufferDirect(F,null,$,Mt,P,k),P.onAfterShadow(i,P,D,F,$,Mt,k)}}}else if(Q.visible){let dt=_(P,Q,nt,x);P.onBeforeShadow(i,P,D,F,$,dt,null),i.renderBufferDirect(F,null,$,dt,P,null),P.onAfterShadow(i,P,D,F,$,dt,null)}}let G=P.children;for(let $=0,Q=G.length;$<Q;$++)M(G[$],D,F,nt,x)}function O(P){P.target.removeEventListener("dispose",O);for(let F in c){let nt=c[F],x=P.target.uuid;x in nt&&(nt[x].dispose(),delete nt[x])}}}var Fm={[Lo]:Po,[Io]:No,[Do]:Oo,[Di]:Uo,[Po]:Lo,[No]:Io,[Oo]:Do,[Uo]:Di};function Bm(i){function t(){let W=!1,Ut=new ae,lt=null,xt=new ae(0,0,0,0);return{setMask:function(bt){lt!==bt&&!W&&(i.colorMask(bt,bt,bt,bt),lt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,Lt,Zt,he,Re){Re===!0&&(bt*=he,Lt*=he,Zt*=he),Ut.set(bt,Lt,Zt,he),xt.equals(Ut)===!1&&(i.clearColor(bt,Lt,Zt,he),xt.copy(Ut))},reset:function(){W=!1,lt=null,xt.set(-1,0,0,0)}}}function e(){let W=!1,Ut=!1,lt=null,xt=null,bt=null;return{setReversed:function(Lt){Ut=Lt},setTest:function(Lt){Lt?R(i.DEPTH_TEST):b(i.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!W&&(i.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Ut&&(Lt=Fm[Lt]),xt!==Lt){switch(Lt){case Lo:i.depthFunc(i.NEVER);break;case Po:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Lt}},setLocked:function(Lt){W=Lt},setClear:function(Lt){bt!==Lt&&(i.clearDepth(Lt),bt=Lt)},reset:function(){W=!1,lt=null,xt=null,bt=null}}}function n(){let W=!1,Ut=null,lt=null,xt=null,bt=null,Lt=null,Zt=null,he=null,Re=null;return{setTest:function(ee){W||(ee?R(i.STENCIL_TEST):b(i.STENCIL_TEST))},setMask:function(ee){Ut!==ee&&!W&&(i.stencilMask(ee),Ut=ee)},setFunc:function(ee,ve,Je){(lt!==ee||xt!==ve||bt!==Je)&&(i.stencilFunc(ee,ve,Je),lt=ee,xt=ve,bt=Je)},setOp:function(ee,ve,Je){(Lt!==ee||Zt!==ve||he!==Je)&&(i.stencilOp(ee,ve,Je),Lt=ee,Zt=ve,he=Je)},setLocked:function(ee){W=ee},setClear:function(ee){Re!==ee&&(i.clearStencil(ee),Re=ee)},reset:function(){W=!1,Ut=null,lt=null,xt=null,bt=null,Lt=null,Zt=null,he=null,Re=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],m=null,g=!1,y=null,p=null,f=null,A=null,_=null,M=null,O=null,P=new Kt(0,0,0),D=0,F=!1,nt=null,x=null,S=null,G=null,$=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,J=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ot)[1]),dt=J>=1):ot.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),dt=J>=2);let k=null,St={},Mt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Gt=new ae().fromArray(Mt),Jt=new ae().fromArray(Et);function N(W,Ut,lt,xt){let bt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(W,Lt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<lt;Zt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Ut+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Lt}let U={};U[i.TEXTURE_2D]=N(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=N(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=N(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=N(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),R(i.DEPTH_TEST),r.setFunc(Di),et(!1),st(dl),R(i.CULL_FACE),w(On);function R(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function b(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function it(W,Ut){return h[W]!==Ut?(i.bindFramebuffer(W,Ut),h[W]=Ut,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function ft(W,Ut){let lt=u,xt=!1;if(W){lt=d.get(Ut),lt===void 0&&(lt=[],d.set(Ut,lt));let bt=W.textures;if(lt.length!==bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,Zt=bt.length;Lt<Zt;Lt++)lt[Lt]=i.COLOR_ATTACHMENT0+Lt;lt.length=bt.length,xt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(lt)}function X(W){return m!==W?(i.useProgram(W),m=W,!0):!1}let gt={[$n]:i.FUNC_ADD,[Kc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};gt[Qc]=i.MIN,gt[th]=i.MAX;let j={[eh]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[rh]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function w(W,Ut,lt,xt,bt,Lt,Zt,he,Re,ee){if(W===On){g===!0&&(b(i.BLEND),g=!1);return}if(g===!1&&(R(i.BLEND),g=!0),W!==Jc){if(W!==y||ee!==F){if((p!==$n||_!==$n)&&(i.blendEquation(i.FUNC_ADD),p=$n,_=$n),ee)switch(W){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}f=null,A=null,M=null,O=null,P.set(0,0,0),D=0,y=W,F=ee}return}bt=bt||Ut,Lt=Lt||lt,Zt=Zt||xt,(Ut!==p||bt!==_)&&(i.blendEquationSeparate(gt[Ut],gt[bt]),p=Ut,_=bt),(lt!==f||xt!==A||Lt!==M||Zt!==O)&&(i.blendFuncSeparate(j[lt],j[xt],j[Lt],j[Zt]),f=lt,A=xt,M=Lt,O=Zt),(he.equals(P)===!1||Re!==D)&&(i.blendColor(he.r,he.g,he.b,Re),P.copy(he),D=Re),y=W,F=!1}function Y(W,Ut){W.side===Mn?b(i.CULL_FACE):R(i.CULL_FACE);let lt=W.side===De;Ut&&(lt=!lt),et(lt),W.blending===Ci&&W.transparent===!1?w(On):w(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),s.setMask(W.colorWrite);let xt=W.stencilWrite;o.setTest(xt),xt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):b(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){nt!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),nt=W)}function st(W){W!==Zc?(R(i.CULL_FACE),W!==x&&(W===dl?i.cullFace(i.BACK):W===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):b(i.CULL_FACE),x=W}function at(W){W!==S&&(dt&&i.lineWidth(W),S=W)}function z(W,Ut,lt){W?(R(i.POLYGON_OFFSET_FILL),(G!==Ut||$!==lt)&&(i.polygonOffset(Ut,lt),G=Ut,$=lt)):b(i.POLYGON_OFFSET_FILL)}function C(W){W?R(i.SCISSOR_TEST):b(i.SCISSOR_TEST)}function E(W){W===void 0&&(W=i.TEXTURE0+Q-1),k!==W&&(i.activeTexture(W),k=W)}function v(W,Ut,lt){lt===void 0&&(k===null?lt=i.TEXTURE0+Q-1:lt=k);let xt=St[lt];xt===void 0&&(xt={type:void 0,texture:void 0},St[lt]=xt),(xt.type!==W||xt.texture!==Ut)&&(k!==lt&&(i.activeTexture(lt),k=lt),i.bindTexture(W,Ut||U[W]),xt.type=W,xt.texture=Ut)}function K(){let W=St[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(W){Gt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Gt.copy(W))}function Ot(W){Jt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Jt.copy(W))}function Qt(W,Ut){let lt=l.get(Ut);lt===void 0&&(lt=new WeakMap,l.set(Ut,lt));let xt=lt.get(W);xt===void 0&&(xt=i.getUniformBlockIndex(Ut,W.name),lt.set(W,xt))}function Xt(W,Ut){let xt=l.get(Ut).get(W);a.get(Ut)!==xt&&(i.uniformBlockBinding(Ut,xt,W.__bindingPointIndex),a.set(Ut,xt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,St={},h={},d=new WeakMap,u=[],m=null,g=!1,y=null,p=null,f=null,A=null,_=null,M=null,O=null,P=new Kt(0,0,0),D=0,F=!1,nt=null,x=null,S=null,G=null,$=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:R,disable:b,bindFramebuffer:it,drawBuffers:ft,useProgram:X,setBlending:w,setMaterial:Y,setFlipSided:et,setCullFace:st,setLineWidth:at,setPolygonOffset:z,setScissorTest:C,activeTexture:E,bindTexture:v,unbindTexture:K,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:Rt,texImage3D:kt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:Tt,texStorage3D:vt,texSubImage2D:ut,texSubImage3D:Nt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Pt,scissor:Ht,viewport:Ot,reset:re}}function lc(i,t,e,n){let s=zm(n);switch(e){case Ec:return i*t;case Tc:return i*t;case Ac:return i*t*2;case Rc:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Go:return Math.max(i,16)*Math.max(t,8)/4;case ko:case Vo:return Math.max(i,8)*Math.max(t,8)/2;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case aa:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case En:case Mc:return{byteLength:1,components:1};case ps:case Sc:case Rs:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case ei:case Ja:case Sn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function km(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):fr("canvas")}function y(E,v,K){let ct=1,pt=C(E);if((pt.width>K||pt.height>K)&&(ct=K/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ut=Math.floor(ct*pt.width),Nt=Math.floor(ct*pt.height);d===void 0&&(d=g(ut,Nt));let wt=v?g(ut,Nt):d;return wt.width=ut,wt.height=Nt,wt.getContext("2d").drawImage(E,0,0,ut,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ut+"x"+Nt+")."),wt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==qe&&E.minFilter!==en}function f(E){i.generateMipmap(E)}function A(E,v,K,ct,pt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut=v;if(v===i.RED&&(K===i.FLOAT&&(ut=i.R32F),K===i.HALF_FLOAT&&(ut=i.R16F),K===i.UNSIGNED_BYTE&&(ut=i.R8)),v===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ut=i.R8UI),K===i.UNSIGNED_SHORT&&(ut=i.R16UI),K===i.UNSIGNED_INT&&(ut=i.R32UI),K===i.BYTE&&(ut=i.R8I),K===i.SHORT&&(ut=i.R16I),K===i.INT&&(ut=i.R32I)),v===i.RG&&(K===i.FLOAT&&(ut=i.RG32F),K===i.HALF_FLOAT&&(ut=i.RG16F),K===i.UNSIGNED_BYTE&&(ut=i.RG8)),v===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ut=i.RG8UI),K===i.UNSIGNED_SHORT&&(ut=i.RG16UI),K===i.UNSIGNED_INT&&(ut=i.RG32UI),K===i.BYTE&&(ut=i.RG8I),K===i.SHORT&&(ut=i.RG16I),K===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),K===i.UNSIGNED_INT&&(ut=i.RGB32UI),K===i.BYTE&&(ut=i.RGB8I),K===i.SHORT&&(ut=i.RGB16I),K===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),K===i.UNSIGNED_INT&&(ut=i.RGBA32UI),K===i.BYTE&&(ut=i.RGBA8I),K===i.SHORT&&(ut=i.RGBA16I),K===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),v===i.RGBA){let Nt=pt?cr:oe.getTransfer(ct);K===i.FLOAT&&(ut=i.RGBA32F),K===i.HALF_FLOAT&&(ut=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ut=Nt===ue?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function _(E,v){let K;return E?v===null||v===ei||v===Oi?K=i.DEPTH24_STENCIL8:v===Sn?K=i.DEPTH32F_STENCIL8:v===ps&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Oi?K=i.DEPTH_COMPONENT24:v===Sn?K=i.DEPTH_COMPONENT32F:v===ps&&(K=i.DEPTH_COMPONENT16),K}function M(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==qe&&E.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function O(E){let v=E.target;v.removeEventListener("dispose",O),D(v),v.isVideoTexture&&h.delete(v)}function P(E){let v=E.target;v.removeEventListener("dispose",P),nt(v)}function D(E){let v=n.get(E);if(v.__webglInit===void 0)return;let K=E.source,ct=u.get(K);if(ct){let pt=ct[v.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&F(E),Object.keys(ct).length===0&&u.delete(K)}n.remove(E)}function F(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let K=E.source,ct=u.get(K);delete ct[v.__cacheKey],o.memory.textures--}function nt(E){let v=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(v.__webglFramebuffer[ct]))for(let pt=0;pt<v.__webglFramebuffer[ct].length;pt++)i.deleteFramebuffer(v.__webglFramebuffer[ct][pt]);else i.deleteFramebuffer(v.__webglFramebuffer[ct]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ct])}else{if(Array.isArray(v.__webglFramebuffer))for(let ct=0;ct<v.__webglFramebuffer.length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[ct]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ct=0;ct<v.__webglColorRenderbuffer.length;ct++)v.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ct]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let K=E.textures;for(let ct=0,pt=K.length;ct<pt;ct++){let ut=n.get(K[ct]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(K[ct])}n.remove(E)}let x=0;function S(){x=0}function G(){let E=x;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),x+=1,E}function $(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Q(E,v){let K=n.get(E);if(E.isVideoTexture&&at(E),E.isRenderTargetTexture===!1&&E.version>0&&K.__version!==E.version){let ct=E.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(K,E,v);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+v)}function dt(E,v){let K=n.get(E);if(E.version>0&&K.__version!==E.version){Jt(K,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+v)}function J(E,v){let K=n.get(E);if(E.version>0&&K.__version!==E.version){Jt(K,E,v);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+v)}function ot(E,v){let K=n.get(E);if(E.version>0&&K.__version!==E.version){N(K,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+v)}let k={[ti]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},St={[qe]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Th]:i.NEVER,[Ih]:i.ALWAYS,[Ah]:i.LESS,[Ic]:i.LEQUAL,[Rh]:i.EQUAL,[Ph]:i.GEQUAL,[Ch]:i.GREATER,[Lh]:i.NOTEQUAL};function Et(E,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Yr||v.magFilter===Ps||v.magFilter===Qn||v.minFilter===en||v.minFilter===Yr||v.minFilter===Ps||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,k[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,k[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,k[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,St[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==Ps&&v.minFilter!==Qn||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(E,v){let K=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",O));let ct=v.source,pt=u.get(ct);pt===void 0&&(pt={},u.set(ct,pt));let ut=$(v);if(ut!==E.__cacheKey){pt[ut]===void 0&&(pt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pt[ut].usedTimes++;let Nt=pt[E.__cacheKey];Nt!==void 0&&(pt[E.__cacheKey].usedTimes--,Nt.usedTimes===0&&F(v)),E.__cacheKey=ut,E.__webglTexture=pt[ut].texture}return K}function Jt(E,v,K){let ct=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ct=i.TEXTURE_3D);let pt=Gt(E,v),ut=v.source;e.bindTexture(ct,E.__webglTexture,i.TEXTURE0+K);let Nt=n.get(ut);if(ut.version!==Nt.__version||pt===!0){e.activeTexture(i.TEXTURE0+K);let wt=oe.getPrimaries(oe.workingColorSpace),Pt=v.colorSpace===Nn?null:oe.getPrimaries(v.colorSpace),Tt=v.colorSpace===Nn||wt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let vt=y(v.image,!1,s.maxTextureSize);vt=z(v,vt);let Rt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Ht=A(v.internalFormat,Rt,kt,v.colorSpace,v.isVideoTexture);Et(ct,v);let Ot,Qt=v.mipmaps,Xt=v.isVideoTexture!==!0,re=Nt.__version===void 0||pt===!0,W=ut.dataReady,Ut=M(v,vt);if(v.isDepthTexture)Ht=_(v.format===Fi,v.type),re&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ht,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,vt.width,vt.height,0,Rt,kt,null));else if(v.isDataTexture)if(Qt.length>0){Xt&&re&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Qt[0].width,Qt[0].height);for(let lt=0,xt=Qt.length;lt<xt;lt++)Ot=Qt[lt],Xt?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Rt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,lt,Ht,Ot.width,Ot.height,0,Rt,kt,Ot.data);v.generateMipmaps=!1}else Xt?(re&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,vt.width,vt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Rt,kt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,vt.width,vt.height,0,Rt,kt,vt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,Qt[0].width,Qt[0].height,vt.depth);for(let lt=0,xt=Qt.length;lt<xt;lt++)if(Ot=Qt[lt],v.format!==nn)if(Rt!==null)if(Xt){if(W)if(v.layerUpdates.size>0){let bt=lc(Ot.width,Ot.height,v.format,v.type);for(let Lt of v.layerUpdates){let Zt=Ot.data.subarray(Lt*bt/Ot.data.BYTES_PER_ELEMENT,(Lt+1)*bt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Lt,Ot.width,Ot.height,1,Rt,Zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,vt.depth,Rt,Ot.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Ht,Ot.width,Ot.height,vt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,vt.depth,Rt,kt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Ht,Ot.width,Ot.height,vt.depth,0,Rt,kt,Ot.data)}else{Xt&&re&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Qt[0].width,Qt[0].height);for(let lt=0,xt=Qt.length;lt<xt;lt++)Ot=Qt[lt],v.format!==nn?Rt!==null?Xt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Rt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Ht,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Rt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,lt,Ht,Ot.width,Ot.height,0,Rt,kt,Ot.data)}else if(v.isDataArrayTexture)if(Xt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,vt.width,vt.height,vt.depth),W)if(v.layerUpdates.size>0){let lt=lc(vt.width,vt.height,v.format,v.type);for(let xt of v.layerUpdates){let bt=vt.data.subarray(xt*lt/vt.data.BYTES_PER_ELEMENT,(xt+1)*lt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,vt.width,vt.height,1,Rt,kt,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Rt,kt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,vt.width,vt.height,vt.depth,0,Rt,kt,vt.data);else if(v.isData3DTexture)Xt?(re&&e.texStorage3D(i.TEXTURE_3D,Ut,Ht,vt.width,vt.height,vt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Rt,kt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,vt.width,vt.height,vt.depth,0,Rt,kt,vt.data);else if(v.isFramebufferTexture){if(re)if(Xt)e.texStorage2D(i.TEXTURE_2D,Ut,Ht,vt.width,vt.height);else{let lt=vt.width,xt=vt.height;for(let bt=0;bt<Ut;bt++)e.texImage2D(i.TEXTURE_2D,bt,Ht,lt,xt,0,Rt,kt,null),lt>>=1,xt>>=1}}else if(Qt.length>0){if(Xt&&re){let lt=C(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,lt.width,lt.height)}for(let lt=0,xt=Qt.length;lt<xt;lt++)Ot=Qt[lt],Xt?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Rt,kt,Ot):e.texImage2D(i.TEXTURE_2D,lt,Ht,Rt,kt,Ot);v.generateMipmaps=!1}else if(Xt){if(re){let lt=C(vt);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,lt.width,lt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,kt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Rt,kt,vt);p(v)&&f(ct),Nt.__version=ut.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function N(E,v,K){if(v.image.length!==6)return;let ct=Gt(E,v),pt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+K);let ut=n.get(pt);if(pt.version!==ut.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);let Nt=oe.getPrimaries(oe.workingColorSpace),wt=v.colorSpace===Nn?null:oe.getPrimaries(v.colorSpace),Pt=v.colorSpace===Nn||Nt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,vt=v.image[0]&&v.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!Tt&&!vt?Rt[xt]=y(v.image[xt],!0,s.maxCubemapSize):Rt[xt]=vt?v.image[xt].image:v.image[xt],Rt[xt]=z(v,Rt[xt]);let kt=Rt[0],Ht=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),Qt=A(v.internalFormat,Ht,Ot,v.colorSpace),Xt=v.isVideoTexture!==!0,re=ut.__version===void 0||ct===!0,W=pt.dataReady,Ut=M(v,kt);Et(i.TEXTURE_CUBE_MAP,v);let lt;if(Tt){Xt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Qt,kt.width,kt.height);for(let xt=0;xt<6;xt++){lt=Rt[xt].mipmaps;for(let bt=0;bt<lt.length;bt++){let Lt=lt[bt];v.format!==nn?Ht!==null?Xt?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt,0,0,Lt.width,Lt.height,Ht,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt,Qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt,0,0,Lt.width,Lt.height,Ht,Ot,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt,Qt,Lt.width,Lt.height,0,Ht,Ot,Lt.data)}}}else{if(lt=v.mipmaps,Xt&&re){lt.length>0&&Ut++;let xt=C(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Qt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(vt){Xt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,Ht,Ot,Rt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Qt,Rt[xt].width,Rt[xt].height,0,Ht,Ot,Rt[xt].data);for(let bt=0;bt<lt.length;bt++){let Zt=lt[bt].image[xt].image;Xt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt+1,0,0,Zt.width,Zt.height,Ht,Ot,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt+1,Qt,Zt.width,Zt.height,0,Ht,Ot,Zt.data)}}else{Xt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ht,Ot,Rt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Qt,Ht,Ot,Rt[xt]);for(let bt=0;bt<lt.length;bt++){let Lt=lt[bt];Xt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt+1,0,0,Ht,Ot,Lt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt+1,Qt,Ht,Ot,Lt.image[xt])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),ut.__version=pt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function U(E,v,K,ct,pt,ut){let Nt=r.convert(K.format,K.colorSpace),wt=r.convert(K.type),Pt=A(K.internalFormat,Nt,wt,K.colorSpace);if(!n.get(v).__hasExternalTextures){let vt=Math.max(1,v.width>>ut),Rt=Math.max(1,v.height>>ut);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ut,Pt,vt,Rt,v.depth,0,Nt,wt,null):e.texImage2D(pt,ut,Pt,vt,Rt,0,Nt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,n.get(K).__webglTexture,0,et(v)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,n.get(K).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function R(E,v,K){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let ct=v.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,ut=_(v.stencilBuffer,pt),Nt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=et(v);st(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,ut,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,E)}else{let ct=v.textures;for(let pt=0;pt<ct.length;pt++){let ut=ct[pt],Nt=r.convert(ut.format,ut.colorSpace),wt=r.convert(ut.type),Pt=A(ut.internalFormat,Nt,wt,ut.colorSpace),Tt=et(v);K&&st(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Pt,v.width,v.height):st(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function b(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let ct=n.get(v.depthTexture).__webglTexture,pt=et(v);if(v.depthTexture.format===Li)st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(v.depthTexture.format===Fi)st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function it(E){let v=n.get(E),K=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let ct=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ct){let pt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),v.__depthDisposeCallback=pt}v.__boundDepthTexture=ct}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");b(v.__webglFramebuffer,E)}else if(K){v.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ct]),v.__webglDepthbuffer[ct]===void 0)v.__webglDepthbuffer[ct]=i.createRenderbuffer(),R(v.__webglDepthbuffer[ct],E,!1);else{let pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),R(v.__webglDepthbuffer,E,!1);else{let ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(E,v,K){let ct=n.get(E);v!==void 0&&U(ct.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&it(E)}function X(E){let v=E.texture,K=n.get(E),ct=n.get(v);E.addEventListener("dispose",P);let pt=E.textures,ut=E.isWebGLCubeRenderTarget===!0,Nt=pt.length>1;if(Nt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=v.version,o.memory.textures++),ut){K.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer[wt]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)K.__webglFramebuffer[wt][Pt]=i.createFramebuffer()}else K.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer=[];for(let wt=0;wt<v.mipmaps.length;wt++)K.__webglFramebuffer[wt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let wt=0,Pt=pt.length;wt<Pt;wt++){let Tt=n.get(pt[wt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&st(E)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let wt=0;wt<pt.length;wt++){let Pt=pt[wt];K.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[wt]);let Tt=r.convert(Pt.format,Pt.colorSpace),vt=r.convert(Pt.type),Rt=A(Pt.internalFormat,Tt,vt,Pt.colorSpace,E.isXRRenderTarget===!0),kt=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,K.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),R(K.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(i.TEXTURE_CUBE_MAP,v);for(let wt=0;wt<6;wt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)U(K.__webglFramebuffer[wt][Pt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Pt);else U(K.__webglFramebuffer[wt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);p(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let wt=0,Pt=pt.length;wt<Pt;wt++){let Tt=pt[wt],vt=n.get(Tt);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),Et(i.TEXTURE_2D,Tt),U(K.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),p(Tt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(wt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ct.__webglTexture),Et(wt,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)U(K.__webglFramebuffer[Pt],E,v,i.COLOR_ATTACHMENT0,wt,Pt);else U(K.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,wt,0);p(v)&&f(wt),e.unbindTexture()}E.depthBuffer&&it(E)}function gt(E){let v=E.textures;for(let K=0,ct=v.length;K<ct;K++){let pt=v[K];if(p(pt)){let ut=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get(pt).__webglTexture;e.bindTexture(ut,Nt),f(ut),e.unbindTexture()}}}let j=[],w=[];function Y(E){if(E.samples>0){if(st(E)===!1){let v=E.textures,K=E.width,ct=E.height,pt=i.COLOR_BUFFER_BIT,ut=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(E),wt=v.length>1;if(wt)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);let Tt=n.get(v[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,pt,i.NEAREST),l===!0&&(j.length=0,w.length=0,j.push(i.COLOR_ATTACHMENT0+Pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(j.push(ut),w.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);let Tt=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function et(E){return Math.min(s.maxSamples,E.samples)}function st(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(E){let v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function z(E,v){let K=E.colorSpace,ct=E.format,pt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||K!==kn&&K!==Nn&&(oe.getTransfer(K)===ue?(ct!==nn||pt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),v}function C(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=Q,this.setTexture2DArray=dt,this.setTexture3D=J,this.setTextureCube=ot,this.rebindTextures=ft,this.setupRenderTarget=X,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=U,this.useMultisampledRTT=st}function Hm(i,t){function e(n,s=Nn){let r,o=oe.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===wc)return i.RGB;if(n===nn)return i.RGBA;if(n===Tc)return i.LUMINANCE;if(n===Ac)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Cc)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Ho||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===Zo||n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===aa||n===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===ca||n===ha||n===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ta=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Aa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:Gm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ra=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,y=new Aa,p=e.getContextAttributes(),f=null,A=null,_=[],M=[],O=new ht,P=null,D=new Ie;D.layers.enable(1),D.viewport=new ae;let F=new Ie;F.layers.enable(2),F.viewport=new ae;let nt=[D,F],x=new Ta;x.layers.enable(1),x.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=_[N];return U===void 0&&(U=new us,_[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=_[N];return U===void 0&&(U=new us,_[N]=U),U.getGripSpace()},this.getHand=function(N){let U=_[N];return U===void 0&&(U=new us,_[N]=U),U.getHandSpace()};function $(N){let U=M.indexOf(N.inputSource);if(U===-1)return;let R=_[U];R!==void 0&&(R.update(N.inputSource,N.frame,c||o),R.dispatchEvent({type:N.type,data:N.inputSource}))}function Q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",dt);for(let N=0;N<_.length;N++){let U=M[N];U!==null&&(M[N]=null,_[N].disconnect(U))}S=null,G=null,y.reset(),t.setRenderTarget(f),m=null,u=null,d=null,s=null,A=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",dt),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let U={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Tn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let U=null,R=null,b=null;p.depth&&(b=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=p.stencil?Fi:Li,R=p.stencil?Oi:ei);let it={colorFormat:e.RGBA8,depthFormat:b,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(it),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Tn(u.textureWidth,u.textureHeight,{format:nn,type:En,depthTexture:new br(u.textureWidth,u.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function dt(N){for(let U=0;U<N.removed.length;U++){let R=N.removed[U],b=M.indexOf(R);b>=0&&(M[b]=null,_[b].disconnect(R))}for(let U=0;U<N.added.length;U++){let R=N.added[U],b=M.indexOf(R);if(b===-1){for(let ft=0;ft<_.length;ft++)if(ft>=M.length){M.push(R),b=ft;break}else if(M[ft]===null){M[ft]=R,b=ft;break}if(b===-1)break}let it=_[b];it&&it.connect(R)}}let J=new B,ot=new B;function k(N,U,R){J.setFromMatrixPosition(U.matrixWorld),ot.setFromMatrixPosition(R.matrixWorld);let b=J.distanceTo(ot),it=U.projectionMatrix.elements,ft=R.projectionMatrix.elements,X=it[14]/(it[10]-1),gt=it[14]/(it[10]+1),j=(it[9]+1)/it[5],w=(it[9]-1)/it[5],Y=(it[8]-1)/it[0],et=(ft[8]+1)/ft[0],st=X*Y,at=X*et,z=b/(-Y+et),C=z*-Y;if(U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(C),N.translateZ(z),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),it[10]===-1)N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let E=X+z,v=gt+z,K=st-C,ct=at+(b-C),pt=j*gt/v*E,ut=w*gt/v*E;N.projectionMatrix.makePerspective(K,ct,pt,ut,E,v),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function St(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let U=N.near,R=N.far;y.texture!==null&&(y.depthNear>0&&(U=y.depthNear),y.depthFar>0&&(R=y.depthFar)),x.near=F.near=D.near=U,x.far=F.far=D.far=R,(S!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,G=x.far);let b=N.parent,it=x.cameras;St(x,b);for(let ft=0;ft<it.length;ft++)St(it[ft],b);it.length===2?k(x,D,F):x.projectionMatrix.copy(D.projectionMatrix),Mt(N,x,b)};function Mt(N,U,R){R===null?N.matrix.copy(U.matrixWorld):(N.matrix.copy(R.matrixWorld),N.matrix.invert(),N.matrix.multiply(U.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ms*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Et=null;function Gt(N,U){if(h=U.getViewerPose(c||o),g=U,h!==null){let R=h.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let b=!1;R.length!==x.cameras.length&&(x.cameras.length=0,b=!0);for(let ft=0;ft<R.length;ft++){let X=R[ft],gt=null;if(m!==null)gt=m.getViewport(X);else{let w=d.getViewSubImage(u,X);gt=w.viewport,ft===0&&(t.setRenderTargetTextures(A,w.colorTexture,u.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(A))}let j=nt[ft];j===void 0&&(j=new Ie,j.layers.enable(ft),j.viewport=new ae,nt[ft]=j),j.matrix.fromArray(X.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(X.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(gt.x,gt.y,gt.width,gt.height),ft===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),b===!0&&x.cameras.push(j)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){let ft=d.getDepthInformation(R[0]);ft&&ft.isValid&&ft.texture&&y.init(t,ft,s.renderState)}}for(let R=0;R<_.length;R++){let b=M[R],it=_[R];b!==null&&it!==void 0&&it.update(b,U,c||o)}Et&&Et(N,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let Jt=new Oc;Jt.setAnimationLoop(Gt),this.setAnimationLoop=function(N){Et=N},this.dispose=function(){}}},Yn=new un,Xm=new me;function qm(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Nc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,A,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,A,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===De&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===De&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let A=t.get(f),_=A.envMap,M=A.envMapRotation;_&&(p.envMap.value=_,Yn.copy(M),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Yn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let A=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ym(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,_){let M=_.program;n.uniformBlockBinding(A,M)}function c(A,_){let M=s[A.id];M===void 0&&(g(A),M=h(A),s[A.id]=M,A.addEventListener("dispose",p));let O=_.program;n.updateUBOMapping(A,O);let P=t.render.frame;r[A.id]!==P&&(u(A),r[A.id]=P)}function h(A){let _=d();A.__bindingPointIndex=_;let M=i.createBuffer(),O=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let _=s[A.id],M=A.uniforms,O=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,D=M.length;P<D;P++){let F=Array.isArray(M[P])?M[P]:[M[P]];for(let nt=0,x=F.length;nt<x;nt++){let S=F[nt];if(m(S,P,nt,O)===!0){let G=S.__offset,$=Array.isArray(S.value)?S.value:[S.value],Q=0;for(let dt=0;dt<$.length;dt++){let J=$[dt],ot=y(J);typeof J=="number"||typeof J=="boolean"?(S.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,G+Q,S.__data)):J.isMatrix3?(S.__data[0]=J.elements[0],S.__data[1]=J.elements[1],S.__data[2]=J.elements[2],S.__data[3]=0,S.__data[4]=J.elements[3],S.__data[5]=J.elements[4],S.__data[6]=J.elements[5],S.__data[7]=0,S.__data[8]=J.elements[6],S.__data[9]=J.elements[7],S.__data[10]=J.elements[8],S.__data[11]=0):(J.toArray(S.__data,Q),Q+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,_,M,O){let P=A.value,D=_+"_"+M;if(O[D]===void 0)return typeof P=="number"||typeof P=="boolean"?O[D]=P:O[D]=P.clone(),!0;{let F=O[D];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[D]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(A){let _=A.uniforms,M=0,O=16;for(let D=0,F=_.length;D<F;D++){let nt=Array.isArray(_[D])?_[D]:[_[D]];for(let x=0,S=nt.length;x<S;x++){let G=nt[x],$=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,dt=$.length;Q<dt;Q++){let J=$[Q],ot=y(J),k=M%O,St=k%ot.boundary,Mt=k+St;M+=St,Mt!==0&&O-Mt<ot.storage&&(M+=O-Mt),G.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ot.storage}}}let P=M%O;return P>0&&(M+=O-P),A.__size=M,A.__cache={},this}function y(A){let _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function p(A){let _=A.target;_.removeEventListener("dispose",p);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Er=class{constructor(t={}){let{canvas:e=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Fn,this.toneMappingExposure=1;let _=this,M=!1,O=0,P=0,D=null,F=-1,nt=null,x=new ae,S=new ae,G=null,$=new Kt(0),Q=0,dt=e.width,J=e.height,ot=1,k=null,St=null,Mt=new ae(0,0,dt,J),Et=new ae(0,0,dt,J),Gt=!1,Jt=new xs,N=!1,U=!1,R=new me,b=new me,it=new B,ft=new ae,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function j(){return D===null?ot:1}let w=n;function Y(T,q){return e.getContext(T,q)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),w===null){let q="webgl2";if(w=Y(q,T),w===null)throw Y(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let et,st,at,z,C,E,v,K,ct,pt,ut,Nt,wt,Pt,Tt,vt,Rt,kt,Ht,Ot,Qt,Xt,re,W;function Ut(){et=new cp(w),et.init(),Xt=new Hm(w,et),st=new ip(w,et,t,Xt),at=new Bm(w),st.reverseDepthBuffer&&at.buffers.depth.setReversed(!0),z=new dp(w),C=new wm,E=new km(w,et,at,C,st,Xt,z),v=new rp(_),K=new lp(_),ct=new xu(w),re=new ep(w,ct),pt=new hp(w,ct,z,re),ut=new pp(w,pt,ct,z),Ht=new fp(w,st,E),vt=new sp(C),Nt=new Em(_,v,K,et,st,re,vt),wt=new qm(_,C),Pt=new Am,Tt=new Dm(et),kt=new tp(_,v,K,at,ut,u,l),Rt=new Om(_,ut,st),W=new Ym(w,z,st,at),Ot=new np(w,et,z),Qt=new up(w,et,z),z.programs=Nt.programs,_.capabilities=st,_.extensions=et,_.properties=C,_.renderLists=Pt,_.shadowMap=Rt,_.state=at,_.info=z}Ut();let lt=new Ra(_,w);this.xr=lt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(T){T!==void 0&&(ot=T,this.setSize(dt,J,!1))},this.getSize=function(T){return T.set(dt,J)},this.setSize=function(T,q,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}dt=T,J=q,e.width=Math.floor(T*ot),e.height=Math.floor(q*ot),rt===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(dt*ot,J*ot).floor()},this.setDrawingBufferSize=function(T,q,rt){dt=T,J=q,ot=rt,e.width=Math.floor(T*rt),e.height=Math.floor(q*rt),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,q,rt,L){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,q,rt,L),at.viewport(x.copy(Mt).multiplyScalar(ot).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,q,rt,L){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,q,rt,L),at.scissor(S.copy(Et).multiplyScalar(ot).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(T){at.setScissorTest(Gt=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){St=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,q=!0,rt=!0){let L=0;if(T){let I=!1;if(D!==null){let V=D.texture.format;I=V===el||V===tl||V===Qa}if(I){let V=D.texture.type,H=V===En||V===ei||V===ps||V===Oi||V===Ka||V===ja,tt=kt.getClearColor(),Z=kt.getClearAlpha(),_t=tt.r,mt=tt.g,yt=tt.b;H?(m[0]=_t,m[1]=mt,m[2]=yt,m[3]=Z,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=_t,g[1]=mt,g[2]=yt,g[3]=Z,w.clearBufferiv(w.COLOR,0,g))}else L|=w.COLOR_BUFFER_BIT}q&&(L|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),rt&&(L|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Pt.dispose(),Tt.dispose(),C.dispose(),v.dispose(),K.dispose(),ut.dispose(),re.dispose(),W.dispose(),Nt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",hi),lt.removeEventListener("sessionend",Hn),Me.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=z.autoReset,q=Rt.enabled,rt=Rt.autoUpdate,L=Rt.needsUpdate,I=Rt.type;Ut(),z.autoReset=T,Rt.enabled=q,Rt.autoUpdate=rt,Rt.needsUpdate=L,Rt.type=I}function Lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){let q=T.target;q.removeEventListener("dispose",Zt),he(q)}function he(T){Re(T),C.remove(T)}function Re(T){let q=C.get(T).programs;q!==void 0&&(q.forEach(function(rt){Nt.releaseProgram(rt)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,rt,L,I,V){q===null&&(q=X);let H=I.isMesh&&I.matrixWorld.determinant()<0,tt=ui(T,q,rt,L,I);at.setMaterial(L,H);let Z=rt.index,_t=1;if(L.wireframe===!0){if(Z=pt.getWireframeAttribute(rt),Z===void 0)return;_t=2}let mt=rt.drawRange,yt=rt.attributes.position,Ct=mt.start*_t,Bt=(mt.start+mt.count)*_t;V!==null&&(Ct=Math.max(Ct,V.start*_t),Bt=Math.min(Bt,(V.start+V.count)*_t)),Z!==null?(Ct=Math.max(Ct,0),Bt=Math.min(Bt,Z.count)):yt!=null&&(Ct=Math.max(Ct,0),Bt=Math.min(Bt,yt.count));let Ft=Bt-Ct;if(Ft<0||Ft===1/0)return;re.setup(I,L,tt,rt,Z);let ne,zt=Ot;if(Z!==null&&(ne=ct.get(Z),zt=Qt,zt.setIndex(ne)),I.isMesh)L.wireframe===!0?(at.setLineWidth(L.wireframeLinewidth*j()),zt.setMode(w.LINES)):zt.setMode(w.TRIANGLES);else if(I.isLine){let It=L.linewidth;It===void 0&&(It=1),at.setLineWidth(It*j()),I.isLineSegments?zt.setMode(w.LINES):I.isLineLoop?zt.setMode(w.LINE_LOOP):zt.setMode(w.LINE_STRIP)}else I.isPoints?zt.setMode(w.POINTS):I.isSprite&&zt.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)zt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))zt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let It=I._multiDrawStarts,ce=I._multiDrawCounts,Dt=I._multiDrawCount,Vt=Z?ct.get(Z).bytesPerElement:1,qt=C.get(L).currentProgram.getUniforms();for(let Yt=0;Yt<Dt;Yt++)qt.setValue(w,"_gl_DrawID",Yt),zt.render(It[Yt]/Vt,ce[Yt])}else if(I.isInstancedMesh)zt.renderInstances(Ct,Ft,I.count);else if(rt.isInstancedBufferGeometry){let It=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,ce=Math.min(rt.instanceCount,It);zt.renderInstances(Ct,Ft,ce)}else zt.render(Ct,Ft)};function ee(T,q,rt){T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,Fe(T,q,rt),T.side=zn,T.needsUpdate=!0,Fe(T,q,rt),T.side=Mn):Fe(T,q,rt)}this.compile=function(T,q,rt=null){rt===null&&(rt=T),p=Tt.get(rt),p.init(q),A.push(p),rt.traverseVisible(function(I){I.isLight&&I.layers.test(q.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),T!==rt&&T.traverseVisible(function(I){I.isLight&&I.layers.test(q.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();let L=new Set;return T.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let V=I.material;if(V)if(Array.isArray(V))for(let H=0;H<V.length;H++){let tt=V[H];ee(tt,rt,I),L.add(tt)}else ee(V,rt,I),L.add(V)}),A.pop(),p=null,L},this.compileAsync=function(T,q,rt=null){let L=this.compile(T,q,rt);return new Promise(I=>{function V(){if(L.forEach(function(H){C.get(H).currentProgram.isReady()&&L.delete(H)}),L.size===0){I(T);return}setTimeout(V,10)}et.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let ve=null;function Je(T){ve&&ve(T)}function hi(){Me.stop()}function Hn(){Me.start()}let Me=new Oc;Me.setAnimationLoop(Je),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){ve=T,lt.setAnimationLoop(T),T===null?Me.stop():Me.start()},lt.addEventListener("sessionstart",hi),lt.addEventListener("sessionend",Hn),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(q),q=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,q,D),p=Tt.get(T,A.length),p.init(q),A.push(p),b.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Jt.setFromProjectionMatrix(b),U=this.localClippingEnabled,N=vt.init(this.clippingPlanes,U),y=Pt.get(T,f.length),y.init(),f.push(y),lt.enabled===!0&&lt.isPresenting===!0){let V=_.xr.getDepthSensingMesh();V!==null&&ke(V,q,-1/0,_.sortObjects)}ke(T,q,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(k,St),gt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,gt&&kt.addToRenderList(y,T),this.info.render.frame++,N===!0&&vt.beginShadows();let rt=p.state.shadowsArray;Rt.render(rt,T,q),N===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=y.opaque,I=y.transmissive;if(p.setupLights(),q.isArrayCamera){let V=q.cameras;if(I.length>0)for(let H=0,tt=V.length;H<tt;H++){let Z=V[H];Ki(L,I,T,Z)}gt&&kt.render(T);for(let H=0,tt=V.length;H<tt;H++){let Z=V[H];Ji(y,T,Z,Z.viewport)}}else I.length>0&&Ki(L,I,T,q),gt&&kt.render(T),Ji(y,T,q);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,q),re.resetDefaultState(),F=-1,nt=null,A.pop(),A.length>0?(p=A[A.length-1],N===!0&&vt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ke(T,q,rt,L){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Jt.intersectsSprite(T)){L&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(b);let H=ut.update(T),tt=T.material;tt.visible&&y.push(T,H,tt,rt,ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Jt.intersectsObject(T))){let H=ut.update(T),tt=T.material;if(L&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),ft.copy(H.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(b)),Array.isArray(tt)){let Z=H.groups;for(let _t=0,mt=Z.length;_t<mt;_t++){let yt=Z[_t],Ct=tt[yt.materialIndex];Ct&&Ct.visible&&y.push(T,H,Ct,rt,ft.z,yt)}}else tt.visible&&y.push(T,H,tt,rt,ft.z,null)}}let V=T.children;for(let H=0,tt=V.length;H<tt;H++)ke(V[H],q,rt,L)}function Ji(T,q,rt,L){let I=T.opaque,V=T.transmissive,H=T.transparent;p.setupLightsView(rt),N===!0&&vt.setGlobalState(_.clippingPlanes,rt),L&&at.viewport(x.copy(L)),I.length>0&&an(I,q,rt),V.length>0&&an(V,q,rt),H.length>0&&an(H,q,rt),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Ki(T,q,rt,L){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new Tn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Rs:En,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let V=p.state.transmissionRenderTarget[L.id],H=L.viewport||x;V.setSize(H.z,H.w);let tt=_.getRenderTarget();_.setRenderTarget(V),_.getClearColor($),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),gt&&kt.render(rt);let Z=_.toneMapping;_.toneMapping=Fn;let _t=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),N===!0&&vt.setGlobalState(_.clippingPlanes,L),an(T,rt,L),E.updateMultisampleRenderTarget(V),E.updateRenderTargetMipmap(V),et.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let yt=0,Ct=q.length;yt<Ct;yt++){let Bt=q[yt],Ft=Bt.object,ne=Bt.geometry,zt=Bt.material,It=Bt.group;if(zt.side===Mn&&Ft.layers.test(L.layers)){let ce=zt.side;zt.side=De,zt.needsUpdate=!0,ji(Ft,rt,L,ne,zt,It),zt.side=ce,zt.needsUpdate=!0,mt=!0}}mt===!0&&(E.updateMultisampleRenderTarget(V),E.updateRenderTargetMipmap(V))}_.setRenderTarget(tt),_.setClearColor($,Q),_t!==void 0&&(L.viewport=_t),_.toneMapping=Z}function an(T,q,rt){let L=q.isScene===!0?q.overrideMaterial:null;for(let I=0,V=T.length;I<V;I++){let H=T[I],tt=H.object,Z=H.geometry,_t=L===null?H.material:L,mt=H.group;tt.layers.test(rt.layers)&&ji(tt,q,rt,Z,_t,mt)}}function ji(T,q,rt,L,I,V){T.onBeforeRender(_,q,rt,L,I,V),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(_,q,rt,L,T,V),I.transparent===!0&&I.side===Mn&&I.forceSinglePass===!1?(I.side=De,I.needsUpdate=!0,_.renderBufferDirect(rt,q,L,I,T,V),I.side=zn,I.needsUpdate=!0,_.renderBufferDirect(rt,q,L,I,T,V),I.side=Mn):_.renderBufferDirect(rt,q,L,I,T,V),T.onAfterRender(_,q,rt,L,I,V)}function Fe(T,q,rt){q.isScene!==!0&&(q=X);let L=C.get(T),I=p.state.lights,V=p.state.shadowsArray,H=I.state.version,tt=Nt.getParameters(T,I.state,V,q,rt),Z=Nt.getProgramCacheKey(tt),_t=L.programs;L.environment=T.isMeshStandardMaterial?q.environment:null,L.fog=q.fog,L.envMap=(T.isMeshStandardMaterial?K:v).get(T.envMap||L.environment),L.envMapRotation=L.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,_t===void 0&&(T.addEventListener("dispose",Zt),_t=new Map,L.programs=_t);let mt=_t.get(Z);if(mt!==void 0){if(L.currentProgram===mt&&L.lightsStateVersion===H)return qr(T,tt),mt}else tt.uniforms=Nt.getUniforms(T),T.onBeforeCompile(tt,_),mt=Nt.acquireProgram(tt,Z),_t.set(Z,mt),L.uniforms=tt.uniforms;let yt=L.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=vt.uniform),qr(T,tt),L.needsLights=es(T),L.lightsStateVersion=H,L.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),L.currentProgram=mt,L.uniformsList=null,mt}function Qi(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=Ii.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function qr(T,q){let rt=C.get(T);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function ui(T,q,rt,L,I){q.isScene!==!0&&(q=X),E.resetTextureUnits();let V=q.fog,H=L.isMeshStandardMaterial?q.environment:null,tt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:kn,Z=(L.isMeshStandardMaterial?K:v).get(L.envMap||H),_t=L.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,mt=!!rt.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),yt=!!rt.morphAttributes.position,Ct=!!rt.morphAttributes.normal,Bt=!!rt.morphAttributes.color,Ft=Fn;L.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ft=_.toneMapping);let ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,zt=ne!==void 0?ne.length:0,It=C.get(L),ce=p.state.lights;if(N===!0&&(U===!0||T!==nt)){let fe=T===nt&&L.id===F;vt.setState(L,T,fe)}let Dt=!1;L.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ce.state.version||It.outputColorSpace!==tt||I.isBatchedMesh&&It.batching===!1||!I.isBatchedMesh&&It.batching===!0||I.isBatchedMesh&&It.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&It.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&It.instancing===!1||!I.isInstancedMesh&&It.instancing===!0||I.isSkinnedMesh&&It.skinning===!1||!I.isSkinnedMesh&&It.skinning===!0||I.isInstancedMesh&&It.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&It.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&It.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&It.instancingMorph===!1&&I.morphTexture!==null||It.envMap!==Z||L.fog===!0&&It.fog!==V||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==vt.numPlanes||It.numIntersection!==vt.numIntersection)||It.vertexAlphas!==_t||It.vertexTangents!==mt||It.morphTargets!==yt||It.morphNormals!==Ct||It.morphColors!==Bt||It.toneMapping!==Ft||It.morphTargetsCount!==zt)&&(Dt=!0):(Dt=!0,It.__version=L.version);let Vt=It.currentProgram;Dt===!0&&(Vt=Fe(L,q,I));let qt=!1,Yt=!1,ie=!1,te=Vt.getUniforms(),_e=It.uniforms;if(at.useProgram(Vt.program)&&(qt=!0,Yt=!0,ie=!0),L.id!==F&&(F=L.id,Yt=!0),qt||nt!==T){st.reverseDepthBuffer?(R.copy(T.projectionMatrix),Kh(R),jh(R),te.setValue(w,"projectionMatrix",R)):te.setValue(w,"projectionMatrix",T.projectionMatrix),te.setValue(w,"viewMatrix",T.matrixWorldInverse);let fe=te.map.cameraPosition;fe!==void 0&&fe.setValue(w,it.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&te.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&te.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),nt!==T&&(nt=T,Yt=!0,ie=!0)}if(I.isSkinnedMesh){te.setOptional(w,I,"bindMatrix"),te.setOptional(w,I,"bindMatrixInverse");let fe=I.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),te.setValue(w,"boneTexture",fe.boneTexture,E))}I.isBatchedMesh&&(te.setOptional(w,I,"batchingTexture"),te.setValue(w,"batchingTexture",I._matricesTexture,E),te.setOptional(w,I,"batchingIdTexture"),te.setValue(w,"batchingIdTexture",I._indirectTexture,E),te.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&te.setValue(w,"batchingColorTexture",I._colorsTexture,E));let we=rt.morphAttributes;if((we.position!==void 0||we.normal!==void 0||we.color!==void 0)&&Ht.update(I,rt,Vt),(Yt||It.receiveShadow!==I.receiveShadow)&&(It.receiveShadow=I.receiveShadow,te.setValue(w,"receiveShadow",I.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(_e.envMap.value=Z,_e.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&q.environment!==null&&(_e.envMapIntensity.value=q.environmentIntensity),Yt&&(te.setValue(w,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&ts(_e,ie),V&&L.fog===!0&&wt.refreshFogUniforms(_e,V),wt.refreshMaterialUniforms(_e,L,ot,J,p.state.transmissionRenderTarget[T.id]),Ii.upload(w,Qi(It),_e,E)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Ii.upload(w,Qi(It),_e,E),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&te.setValue(w,"center",I.center),te.setValue(w,"modelViewMatrix",I.modelViewMatrix),te.setValue(w,"normalMatrix",I.normalMatrix),te.setValue(w,"modelMatrix",I.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){let fe=L.uniformsGroups;for(let ln=0,Yc=fe.length;ln<Yc;ln++){let ul=fe[ln];W.update(ul,Vt),W.bind(ul,Vt)}}return Vt}function ts(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function es(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,q,rt){C.get(T.texture).__webglTexture=q,C.get(T.depthTexture).__webglTexture=rt;let L=C.get(T);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=rt===void 0,L.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,q){let rt=C.get(T);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,rt=0){D=T,O=q,P=rt;let L=!0,I=null,V=!1,H=!1;if(T){let Z=C.get(T);if(Z.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(w.FRAMEBUFFER,null),L=!1;else if(Z.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Z.__hasExternalTextures)E.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let yt=T.depthTexture;if(Z.__boundDepthTexture!==yt){if(yt!==null&&C.has(yt)&&(T.width!==yt.image.width||T.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}let _t=T.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(H=!0);let mt=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(mt[q])?I=mt[q][rt]:I=mt[q],V=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?I=C.get(T).__webglMultisampledFramebuffer:Array.isArray(mt)?I=mt[rt]:I=mt,x.copy(T.viewport),S.copy(T.scissor),G=T.scissorTest}else x.copy(Mt).multiplyScalar(ot).floor(),S.copy(Et).multiplyScalar(ot).floor(),G=Gt;if(at.bindFramebuffer(w.FRAMEBUFFER,I)&&L&&at.drawBuffers(T,I),at.viewport(x),at.scissor(S),at.setScissorTest(G),V){let Z=C.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z.__webglTexture,rt)}else if(H){let Z=C.get(T.texture),_t=q||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Z.__webglTexture,rt||0,_t)}F=-1},this.readRenderTargetPixels=function(T,q,rt,L,I,V,H){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&H!==void 0&&(tt=tt[H]),tt){at.bindFramebuffer(w.FRAMEBUFFER,tt);try{let Z=T.texture,_t=Z.format,mt=Z.type;if(!st.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-L&&rt>=0&&rt<=T.height-I&&w.readPixels(q,rt,L,I,Xt.convert(_t),Xt.convert(mt),V)}finally{let Z=D!==null?C.get(D).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(T,q,rt,L,I,V,H){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&H!==void 0&&(tt=tt[H]),tt){let Z=T.texture,_t=Z.format,mt=Z.type;if(!st.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=T.width-L&&rt>=0&&rt<=T.height-I){at.bindFramebuffer(w.FRAMEBUFFER,tt);let yt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.bufferData(w.PIXEL_PACK_BUFFER,V.byteLength,w.STREAM_READ),w.readPixels(q,rt,L,I,Xt.convert(_t),Xt.convert(mt),0);let Ct=D!==null?C.get(D).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,Ct);let Bt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Jh(w,Bt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,V),w.deleteBuffer(yt),w.deleteSync(Bt),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,q=null,rt=0){T.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1]);let L=Math.pow(2,-rt),I=Math.floor(T.image.width*L),V=Math.floor(T.image.height*L),H=q!==null?q.x:0,tt=q!==null?q.y:0;E.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,rt,0,0,H,tt,I,V),at.unbindTexture()},this.copyTextureToTexture=function(T,q,rt=null,L=null,I=0){T.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,T=arguments[1],q=arguments[2],I=arguments[3]||0,rt=null);let V,H,tt,Z,_t,mt;rt!==null?(V=rt.max.x-rt.min.x,H=rt.max.y-rt.min.y,tt=rt.min.x,Z=rt.min.y):(V=T.image.width,H=T.image.height,tt=0,Z=0),L!==null?(_t=L.x,mt=L.y):(_t=0,mt=0);let yt=Xt.convert(q.format),Ct=Xt.convert(q.type);E.setTexture2D(q,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);let Bt=w.getParameter(w.UNPACK_ROW_LENGTH),Ft=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ne=w.getParameter(w.UNPACK_SKIP_PIXELS),zt=w.getParameter(w.UNPACK_SKIP_ROWS),It=w.getParameter(w.UNPACK_SKIP_IMAGES),ce=T.isCompressedTexture?T.mipmaps[I]:T.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ce.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ce.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Z),T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,I,_t,mt,V,H,yt,Ct,ce.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,I,_t,mt,ce.width,ce.height,yt,ce.data):w.texSubImage2D(w.TEXTURE_2D,I,_t,mt,V,H,yt,Ct,ce),w.pixelStorei(w.UNPACK_ROW_LENGTH,Bt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ft),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ne),w.pixelStorei(w.UNPACK_SKIP_ROWS,zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,It),I===0&&q.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(T,q,rt=null,L=null,I=0){T.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,L=arguments[1]||null,T=arguments[2],q=arguments[3],I=arguments[4]||0);let V,H,tt,Z,_t,mt,yt,Ct,Bt,Ft=T.isCompressedTexture?T.mipmaps[I]:T.image;rt!==null?(V=rt.max.x-rt.min.x,H=rt.max.y-rt.min.y,tt=rt.max.z-rt.min.z,Z=rt.min.x,_t=rt.min.y,mt=rt.min.z):(V=Ft.width,H=Ft.height,tt=Ft.depth,Z=0,_t=0,mt=0),L!==null?(yt=L.x,Ct=L.y,Bt=L.z):(yt=0,Ct=0,Bt=0);let ne=Xt.convert(q.format),zt=Xt.convert(q.type),It;if(q.isData3DTexture)E.setTexture3D(q,0),It=w.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),It=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);let ce=w.getParameter(w.UNPACK_ROW_LENGTH),Dt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vt=w.getParameter(w.UNPACK_SKIP_PIXELS),qt=w.getParameter(w.UNPACK_SKIP_ROWS),Yt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ft.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ft.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Z),w.pixelStorei(w.UNPACK_SKIP_ROWS,_t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,mt),T.isDataTexture||T.isData3DTexture?w.texSubImage3D(It,I,yt,Ct,Bt,V,H,tt,ne,zt,Ft.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(It,I,yt,Ct,Bt,V,H,tt,ne,Ft.data):w.texSubImage3D(It,I,yt,Ct,Bt,V,H,tt,ne,zt,Ft),w.pixelStorei(w.UNPACK_ROW_LENGTH,ce),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Dt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vt),w.pixelStorei(w.UNPACK_SKIP_ROWS,qt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Yt),I===0&&q.generateMipmaps&&w.generateMipmap(It),at.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),at.unbindTexture()},this.resetState=function(){O=0,P=0,D=null,at.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===nl?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===kr?"display-p3":"srgb"}};var Hi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ii=class extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$e=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,s=[],r=[],o=[],a=new B,l=new me;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ye(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ye(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ys=class extends $e{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ca=class extends ys{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,m*=h,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var js=new B,bo=new rl,Eo=new rl,wo=new rl,Vi=class extends $e{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(js.subVectors(s[0],s[1]).add(s[0]),c=js);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(js.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=js),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),bo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),Eo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),wo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Eo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(bo.calc(l),Eo.calc(l),wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Zm(i,t){let e=1-i;return e*e*t}function $m(i,t){return 2*(1-i)*i*t}function Jm(i,t){return i*i*t}function ds(i,t,e,n){return Zm(i,t)+$m(i,e)+Jm(i,n)}function Km(i,t){let e=1-i;return e*e*e*t}function jm(i,t){let e=1-i;return 3*e*e*i*t}function Qm(i,t){return 3*(1-i)*i*i*t}function t0(i,t){return i*i*i*t}function fs(i,t,e,n,s){return Km(i,t)+jm(i,e)+Qm(i,n)+t0(i,s)}var wr=class extends $e{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends $e{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,s.x,r.x,o.x,a.x),fs(t,s.y,r.y,o.y,a.y),fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends $e{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends $e{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends $e{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends $e{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y),ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends $e{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,l.x,c.x,h.x,d.x),cc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Lr=Object.freeze({__proto__:null,ArcCurve:Ca,CatmullRomCurve3:Vi,CubicBezierCurve:wr,CubicBezierCurve3:La,EllipseCurve:ys,LineCurve:Tr,LineCurve3:Pa,QuadraticBezierCurve:Ar,QuadraticBezierCurve3:Rr,SplineCurve:Cr}),Ia=class extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lr[s.type]().fromJSON(s))}return this}},We=class extends Ia{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ar(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wr(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Cr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ys(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class i extends Ce{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new B,u=new ht,m=new B,g=new B,y=new B,p=0,f=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:p=t[A+1].x-t[A].x,f=t[A+1].y-t[A].y,m.x=f*1,m.y=-p,m.z=f*0,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[A+1].x-t[A].x,f=t[A+1].y-t[A].y,m.x=f*1,m.y=-p,m.z=f*0,g.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(g)}for(let A=0;A<=e;A++){let _=n+A*h*s,M=Math.sin(_),O=Math.cos(_);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*M,d.y=t[P].y,d.z=t[P].x*O,o.push(d.x,d.y,d.z),u.x=A/e,u.y=P/(t.length-1),a.push(u.x,u.y);let D=l[3*P+0]*M,F=l[3*P+1],nt=l[3*P+0]*O;c.push(D,F,nt)}}for(let A=0;A<e;A++)for(let _=0;_<t.length-1;_++){let M=_+A*t.length,O=M,P=M+t.length,D=M+t.length+1,F=M+1;r.push(O,P,F),r.push(D,F,P)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Pr=class i extends vs{constructor(t=1,e=1,n=4,s=8){let r=new We;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var rn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,y=[],p=n/2,f=0;A(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(m,2));function A(){let M=new B,O=new B,P=0,D=(e-t)/n;for(let F=0;F<=r;F++){let nt=[],x=F/r,S=x*(e-t)+t;for(let G=0;G<=s;G++){let $=G/s,Q=$*l+a,dt=Math.sin(Q),J=Math.cos(Q);O.x=S*dt,O.y=-x*n+p,O.z=S*J,d.push(O.x,O.y,O.z),M.set(dt,D,J).normalize(),u.push(M.x,M.y,M.z),m.push($,1-x),nt.push(g++)}y.push(nt)}for(let F=0;F<s;F++)for(let nt=0;nt<r;nt++){let x=y[nt][F],S=y[nt+1][F],G=y[nt+1][F+1],$=y[nt][F+1];t>0&&(h.push(x,S,$),P+=3),e>0&&(h.push(S,G,$),P+=3)}c.addGroup(f,P,0),f+=P}function _(M){let O=g,P=new ht,D=new B,F=0,nt=M===!0?t:e,x=M===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,p*x,0),u.push(0,x,0),m.push(.5,.5),g++;let S=g;for(let G=0;G<=s;G++){let Q=G/s*l+a,dt=Math.cos(Q),J=Math.sin(Q);D.x=nt*J,D.y=p*x,D.z=nt*dt,d.push(D.x,D.y,D.z),u.push(0,x,0),P.x=dt*.5+.5,P.y=J*.5*x+.5,m.push(P.x,P.y),g++}for(let G=0;G<s;G++){let $=O+G,Q=S+G;M===!0?h.push(Q,Q+1,$):h.push(Q+1,Q,$),F+=3}c.addGroup(f,F,M===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ze=class extends We{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new We().fromJSON(s))}return this}},e0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hc(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,m;if(n&&(r=o0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Ms(r,o,e,a,l,m,0),o}};function Hc(i,t,e,n,s){let r,o;if(s===_0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hc(r,i[r],i[r+1],o);return o&&Vr(o,o.next)&&(bs(o),o=o.next),o}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||pe(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ms(i,t,e,n,s,r,o){if(!i)return;!o&&r&&u0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?i0(i,n,s,r):n0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=s0(si(i),t,e),Ms(i,t,e,n,s,r,2)):o===2&&r0(i,t,e,n,s,r):Ms(si(i),t,e,n,s,r,1);break}}}function n0(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=m&&Ri(s,a,r,l,o,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(pe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,f=Da(m,g,t,e,n),A=Da(y,p,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=f&&M&&M.z<=A;){if(_.x>=m&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ri(a,h,l,d,c,u,_.x,_.y)&&pe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ri(a,h,l,d,c,u,M.x,M.y)&&pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ri(a,h,l,d,c,u,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=A;){if(M.x>=m&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ri(a,h,l,d,c,u,M.x,M.y)&&pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function s0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Vr(s,r)&&Vc(s,n,n.next,r)&&Ss(s,r)&&Ss(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),bs(n),bs(n.next),n=i=r),n=n.next}while(n!==i);return si(n)}function r0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&p0(o,a)){let l=Gc(o,a);o=si(o,o.next),l=si(l,l.next),Ms(o,t,e,n,s,r,0),Ms(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function o0(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Hc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(f0(c));for(s.sort(a0),r=0;r<s.length;r++)e=l0(s[r],e);return e}function a0(i,t){return i.x-t.x}function l0(i,t){let e=c0(i,t);if(!e)return t;let n=Gc(e,i);return si(n,n.next),si(e,e.next)}function c0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ri(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Ss(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&h0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function h0(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function u0(i,t,e,n){let s=i;do s.z===0&&(s.z=Da(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,d0(s)}function d0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Da(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function f0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function p0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!m0(i,t)&&(Ss(i,t)&&Ss(t,i)&&g0(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Vr(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function Vc(i,t,e,n){let s=tr(pe(i,t,e)),r=tr(pe(i,t,n)),o=tr(pe(e,n,i)),a=tr(pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Qs(i,e,t)||r===0&&Qs(i,n,t)||o===0&&Qs(e,i,n)||a===0&&Qs(e,t,n))}function Qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tr(i){return i>0?1:i<0?-1:0}function m0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ss(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function g0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gc(i,t){let e=new Ua(i.i,i.x,i.y),n=new Ua(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hc(i,t,e,n){let s=new Ua(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ua(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Bn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uc(t),dc(n,t);let o=t.length;e.forEach(uc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,dc(n,e[l]);let a=e0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends Ce{constructor(t=new Ze([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:x0,_,M=!1,O,P,D,F;f&&(_=f.getSpacedPoints(h),M=!0,u=!1,O=f.computeFrenetFrames(h,!1),P=new B,D=new B,F=new B),u||(p=0,m=0,g=0,y=0);let nt=a.extractPoints(c),x=nt.shape,S=nt.holes;if(!Bn.isClockWise(x)){x=x.reverse();for(let j=0,w=S.length;j<w;j++){let Y=S[j];Bn.isClockWise(Y)&&(S[j]=Y.reverse())}}let $=Bn.triangulateShape(x,S),Q=x;for(let j=0,w=S.length;j<w;j++){let Y=S[j];x=x.concat(Y)}function dt(j,w,Y){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(w,Y)}let J=x.length,ot=$.length;function k(j,w,Y){let et,st,at,z=j.x-w.x,C=j.y-w.y,E=Y.x-j.x,v=Y.y-j.y,K=z*z+C*C,ct=z*v-C*E;if(Math.abs(ct)>Number.EPSILON){let pt=Math.sqrt(K),ut=Math.sqrt(E*E+v*v),Nt=w.x-C/pt,wt=w.y+z/pt,Pt=Y.x-v/ut,Tt=Y.y+E/ut,vt=((Pt-Nt)*v-(Tt-wt)*E)/(z*v-C*E);et=Nt+z*vt-j.x,st=wt+C*vt-j.y;let Rt=et*et+st*st;if(Rt<=2)return new ht(et,st);at=Math.sqrt(Rt/2)}else{let pt=!1;z>Number.EPSILON?E>Number.EPSILON&&(pt=!0):z<-Number.EPSILON?E<-Number.EPSILON&&(pt=!0):Math.sign(C)===Math.sign(v)&&(pt=!0),pt?(et=-C,st=z,at=Math.sqrt(K)):(et=z,st=C,at=Math.sqrt(K/2))}return new ht(et/at,st/at)}let St=[];for(let j=0,w=Q.length,Y=w-1,et=j+1;j<w;j++,Y++,et++)Y===w&&(Y=0),et===w&&(et=0),St[j]=k(Q[j],Q[Y],Q[et]);let Mt=[],Et,Gt=St.concat();for(let j=0,w=S.length;j<w;j++){let Y=S[j];Et=[];for(let et=0,st=Y.length,at=st-1,z=et+1;et<st;et++,at++,z++)at===st&&(at=0),z===st&&(z=0),Et[et]=k(Y[et],Y[at],Y[z]);Mt.push(Et),Gt=Gt.concat(Et)}for(let j=0;j<p;j++){let w=j/p,Y=m*Math.cos(w*Math.PI/2),et=g*Math.sin(w*Math.PI/2)+y;for(let st=0,at=Q.length;st<at;st++){let z=dt(Q[st],St[st],et);b(z.x,z.y,-Y)}for(let st=0,at=S.length;st<at;st++){let z=S[st];Et=Mt[st];for(let C=0,E=z.length;C<E;C++){let v=dt(z[C],Et[C],et);b(v.x,v.y,-Y)}}}let Jt=g+y;for(let j=0;j<J;j++){let w=u?dt(x[j],Gt[j],Jt):x[j];M?(D.copy(O.normals[0]).multiplyScalar(w.x),P.copy(O.binormals[0]).multiplyScalar(w.y),F.copy(_[0]).add(D).add(P),b(F.x,F.y,F.z)):b(w.x,w.y,0)}for(let j=1;j<=h;j++)for(let w=0;w<J;w++){let Y=u?dt(x[w],Gt[w],Jt):x[w];M?(D.copy(O.normals[j]).multiplyScalar(Y.x),P.copy(O.binormals[j]).multiplyScalar(Y.y),F.copy(_[j]).add(D).add(P),b(F.x,F.y,F.z)):b(Y.x,Y.y,d/h*j)}for(let j=p-1;j>=0;j--){let w=j/p,Y=m*Math.cos(w*Math.PI/2),et=g*Math.sin(w*Math.PI/2)+y;for(let st=0,at=Q.length;st<at;st++){let z=dt(Q[st],St[st],et);b(z.x,z.y,d+Y)}for(let st=0,at=S.length;st<at;st++){let z=S[st];Et=Mt[st];for(let C=0,E=z.length;C<E;C++){let v=dt(z[C],Et[C],et);M?b(v.x,v.y+_[h-1].y,_[h-1].x+Y):b(v.x,v.y,d+Y)}}}N(),U();function N(){let j=s.length/3;if(u){let w=0,Y=J*w;for(let et=0;et<ot;et++){let st=$[et];it(st[2]+Y,st[1]+Y,st[0]+Y)}w=h+p*2,Y=J*w;for(let et=0;et<ot;et++){let st=$[et];it(st[0]+Y,st[1]+Y,st[2]+Y)}}else{for(let w=0;w<ot;w++){let Y=$[w];it(Y[2],Y[1],Y[0])}for(let w=0;w<ot;w++){let Y=$[w];it(Y[0]+J*h,Y[1]+J*h,Y[2]+J*h)}}n.addGroup(j,s.length/3-j,0)}function U(){let j=s.length/3,w=0;R(Q,w),w+=Q.length;for(let Y=0,et=S.length;Y<et;Y++){let st=S[Y];R(st,w),w+=st.length}n.addGroup(j,s.length/3-j,1)}function R(j,w){let Y=j.length;for(;--Y>=0;){let et=Y,st=Y-1;st<0&&(st=j.length-1);for(let at=0,z=h+p*2;at<z;at++){let C=J*at,E=J*(at+1),v=w+et+C,K=w+st+C,ct=w+st+E,pt=w+et+E;ft(v,K,ct,pt)}}}function b(j,w,Y){l.push(j),l.push(w),l.push(Y)}function it(j,w,Y){X(j),X(w),X(Y);let et=s.length/3,st=A.generateTopUV(n,s,et-3,et-2,et-1);gt(st[0]),gt(st[1]),gt(st[2])}function ft(j,w,Y,et){X(j),X(w),X(et),X(w),X(Y),X(et);let st=s.length/3,at=A.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);gt(at[0]),gt(at[1]),gt(at[3]),gt(at[1]),gt(at[2]),gt(at[3])}function X(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function gt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return y0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lr[s.type]().fromJSON(s)),new i(n,t.options)}},x0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-d),new ht(u,1-g),new ht(y,1-f)]:[new ht(a,1-l),new ht(h,1-d),new ht(m,1-g),new ht(p,1-f)]}};function y0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Es=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,m=[],g=[],y=[],p=[];for(let f=0;f<=n;f++){let A=[],_=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let O=0;O<=e;O++){let P=O/e;d.x=-t*Math.cos(s+P*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+P*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(P+M,1-_),A.push(c++)}h.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){let _=h[f][A+1],M=h[f][A],O=h[f+1][A],P=h[f+1][A+1];(f!==0||o>0)&&m.push(_,M,P),(f!==n-1||l<Math.PI)&&m.push(M,O,P)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wi=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new B,d=new B,u=new B;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let y=g/s*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let y=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,A=(s+1)*m+g;o.push(y,p,A),o.push(p,f,A)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ws=class i extends Ce{constructor(t=new Rr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new ht,h=new B,d=[],u=[],m=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(m,2));function y(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),A(),f()}function p(_){h=t.getPointAt(_/e,h);let M=o.normals[_],O=o.binormals[_];for(let P=0;P<=s;P++){let D=P/s*Math.PI*2,F=Math.sin(D),nt=-Math.cos(D);l.x=nt*M.x+F*O.x,l.y=nt*M.y+F*O.y,l.z=nt*M.z+F*O.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){let O=(s+1)*(_-1)+(M-1),P=(s+1)*_+(M-1),D=(s+1)*_+M,F=(s+1)*(_-1)+M;g.push(O,P,F),g.push(P,D,F)}}function A(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)c.x=_/e,c.y=M/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Lr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Rn=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ge=class extends Rn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function er(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _l:r=t,a=2*e-n;break;case xl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:o=t,l=2*n-e;break;case xl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,f=-u*p+2*u*y-u*g,A=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,_=(-1-m)*p+(1.5+m)*y+.5*g,M=m*p-m*y;for(let O=0;O!==a;++O)r[O]=f*o[h+O]+A*o[c+O]+_*o[l+O]+M*o[d+O];return r}},Oa=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Fa=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=er(e,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:er(t.times,Array),values:er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case Zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return Zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&v0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=da;var ri=class extends on{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=lr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends on{};Ba.prototype.ValueTypeName="color";var za=class extends on{};za.prototype.ValueTypeName="number";var ka=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Be.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ir=class extends on{InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends on{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=lr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends on{};Ha.prototype.ValueTypeName="vector";var fc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},M0=new Va,qi=class{constructor(t){this.manager=t!==void 0?t:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var yn={},Ga=class extends Error{constructor(t,e){super(t),this.response=e}},Dr=class extends qi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=fc.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yn[t]!==void 0){yn[t].push({onLoad:e,onProgress:n,onError:s});return}yn[t]=[],yn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=yn[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=u?parseInt(u):0,g=m!==0,y=0,p=new ReadableStream({start(f){A();function A(){d.read().then(({done:_,value:M})=>{if(_)f.close();else{y+=M.byteLength;let O=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let P=0,D=h.length;P<D;P++){let F=h[P];F.onProgress&&F.onProgress(O)}f.enqueue(M),A()}},_=>{f.error(_)})}}});return new Response(p)}else throw new Ga(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{fc.add(t,c);let h=yn[t];delete yn[t];for(let d=0,u=h.length;d<u;d++){let m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=yn[t];if(h===void 0)throw this.manager.itemError(t),c;delete yn[t];for(let d=0,u=h.length;d<u;d++){let m=h[d];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Ts=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ur=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},To=new me,pc=new B,mc=new B,Nr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gc=new me,as=new B,Ao=new B,Wa=class extends Nr{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),as.setFromMatrixPosition(t.matrixWorld),n.position.copy(as),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),s.makeTranslation(-as.x,-as.y,-as.z),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc)}},Or=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xa=class extends Nr{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Xa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ol="\\[\\]\\.:\\/",S0=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",b0="[^"+ol.replace("\\.","")+"]",E0=/((?:WC+[\/:])*)/.source.replace("WC",al),w0=/(WCOD+)?/.source.replace("WCOD",b0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),R0=new RegExp("^"+E0+w0+T0+A0+"$"),C0=["material","materials","bones","map"],qa=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S0,"")}static parseTrackName(t){let e=R0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);C0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=qa;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X0=new Float32Array(1);var As=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _c=new ht,Fr=class{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_c.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_c).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var fn=class{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new We,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){let A=[];for(let _=0,M=f.length;_<M;_++){let O=f[_],P=new Ze;P.curves=O.curves,A.push(P)}return A}function n(f,A){let _=A.length,M=!1;for(let O=_-1,P=0;P<_;O=P++){let D=A[O],F=A[P],nt=F.x-D.x,x=F.y-D.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(D=A[P],nt=-nt,F=A[O],x=-x),f.y<D.y||f.y>F.y)continue;if(f.y===D.y){if(f.x===D.x)return!0}else{let S=x*(f.x-D.x)-nt*(f.y-D.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(f.y!==D.y)continue;if(F.x<=f.x&&f.x<=D.x||D.x<=f.x&&f.x<=F.x)return!0}}return M}let s=Bn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Ze,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let d=[],u=[],m=[],g=0,y;u[g]=void 0,m[g]=[];for(let f=0,A=r.length;f<A;f++)a=r[f],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!h&&u[g]&&g++,u[g]={s:new Ze,p:y},u[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:y[0]});if(!u[0])return e(r);if(u.length>1){let f=!1,A=0;for(let _=0,M=u.length;_<M;_++)d[_]=[];for(let _=0,M=u.length;_<M;_++){let O=m[_];for(let P=0;P<O.length;P++){let D=O[P],F=!0;for(let nt=0;nt<u.length;nt++)n(D.p,u[nt].p)&&(_!==nt&&A++,F?(F=!1,d[nt].push(D)):f=!0);F&&d[_].push(D)}}A>0&&f===!1&&(m=d)}let p;for(let f=0,A=u.length;f<A;f++){l=u[f].s,c.push(l),p=m[f];for(let _=0,M=p.length;_<M;_++)l.holes.push(p[_].h)}return c}},Br=class extends wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);var P0=Ae,Ls=class i extends qi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,o=new Dr(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(N,U){if(N.nodeType!==1)return;let R=M(N),b=!1,it=null;switch(N.nodeName){case"svg":U=g(N,U);break;case"style":r(N);break;case"g":U=g(N,U);break;case"path":U=g(N,U),N.hasAttribute("d")&&(it=s(N));break;case"rect":U=g(N,U),it=l(N);break;case"polygon":U=g(N,U),it=c(N);break;case"polyline":U=g(N,U),it=h(N);break;case"circle":U=g(N,U),it=d(N);break;case"ellipse":U=g(N,U),it=u(N);break;case"line":U=g(N,U),it=m(N);break;case"defs":b=!0;break;case"use":U=g(N,U);let gt=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),j=N.viewportElement.getElementById(gt);j?n(j,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+gt);break;default:}it&&(U.fill!==void 0&&U.fill!=="none"&&it.color.setStyle(U.fill,P0),P(it,Et),G.push(it),it.userData={node:N,style:U});let ft=N.childNodes;for(let X=0;X<ft.length;X++){let gt=ft[X];b&&gt.nodeName!=="style"&&gt.nodeName!=="defs"||n(gt,U)}R&&(Q.pop(),Q.length>0?Et.copy(Q[Q.length-1]):Et.identity())}function s(N){let U=new fn,R=new ht,b=new ht,it=new ht,ft=!0,X=!1,gt=N.getAttribute("d");if(gt===""||gt==="none")return null;let j=gt.match(/[a-df-z][^a-df-z]*/ig);for(let w=0,Y=j.length;w<Y;w++){let et=j[w],st=et.charAt(0),at=et.slice(1).trim();ft===!0&&(X=!0,ft=!1);let z;switch(st){case"M":z=p(at);for(let C=0,E=z.length;C<E;C+=2)R.x=z[C+0],R.y=z[C+1],b.x=R.x,b.y=R.y,C===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),C===0&&it.copy(R);break;case"H":z=p(at);for(let C=0,E=z.length;C<E;C++)R.x=z[C],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"V":z=p(at);for(let C=0,E=z.length;C<E;C++)R.y=z[C],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"L":z=p(at);for(let C=0,E=z.length;C<E;C+=2)R.x=z[C+0],R.y=z[C+1],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"C":z=p(at);for(let C=0,E=z.length;C<E;C+=6)U.bezierCurveTo(z[C+0],z[C+1],z[C+2],z[C+3],z[C+4],z[C+5]),b.x=z[C+2],b.y=z[C+3],R.x=z[C+4],R.y=z[C+5],C===0&&X===!0&&it.copy(R);break;case"S":z=p(at);for(let C=0,E=z.length;C<E;C+=4)U.bezierCurveTo(y(R.x,b.x),y(R.y,b.y),z[C+0],z[C+1],z[C+2],z[C+3]),b.x=z[C+0],b.y=z[C+1],R.x=z[C+2],R.y=z[C+3],C===0&&X===!0&&it.copy(R);break;case"Q":z=p(at);for(let C=0,E=z.length;C<E;C+=4)U.quadraticCurveTo(z[C+0],z[C+1],z[C+2],z[C+3]),b.x=z[C+0],b.y=z[C+1],R.x=z[C+2],R.y=z[C+3],C===0&&X===!0&&it.copy(R);break;case"T":z=p(at);for(let C=0,E=z.length;C<E;C+=2){let v=y(R.x,b.x),K=y(R.y,b.y);U.quadraticCurveTo(v,K,z[C+0],z[C+1]),b.x=v,b.y=K,R.x=z[C+0],R.y=z[C+1],C===0&&X===!0&&it.copy(R)}break;case"A":z=p(at,[3,4],7);for(let C=0,E=z.length;C<E;C+=7){if(z[C+5]==R.x&&z[C+6]==R.y)continue;let v=R.clone();R.x=z[C+5],R.y=z[C+6],b.x=R.x,b.y=R.y,o(U,z[C],z[C+1],z[C+2],z[C+3],z[C+4],v,R),C===0&&X===!0&&it.copy(R)}break;case"m":z=p(at);for(let C=0,E=z.length;C<E;C+=2)R.x+=z[C+0],R.y+=z[C+1],b.x=R.x,b.y=R.y,C===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),C===0&&it.copy(R);break;case"h":z=p(at);for(let C=0,E=z.length;C<E;C++)R.x+=z[C],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"v":z=p(at);for(let C=0,E=z.length;C<E;C++)R.y+=z[C],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"l":z=p(at);for(let C=0,E=z.length;C<E;C+=2)R.x+=z[C+0],R.y+=z[C+1],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),C===0&&X===!0&&it.copy(R);break;case"c":z=p(at);for(let C=0,E=z.length;C<E;C+=6)U.bezierCurveTo(R.x+z[C+0],R.y+z[C+1],R.x+z[C+2],R.y+z[C+3],R.x+z[C+4],R.y+z[C+5]),b.x=R.x+z[C+2],b.y=R.y+z[C+3],R.x+=z[C+4],R.y+=z[C+5],C===0&&X===!0&&it.copy(R);break;case"s":z=p(at);for(let C=0,E=z.length;C<E;C+=4)U.bezierCurveTo(y(R.x,b.x),y(R.y,b.y),R.x+z[C+0],R.y+z[C+1],R.x+z[C+2],R.y+z[C+3]),b.x=R.x+z[C+0],b.y=R.y+z[C+1],R.x+=z[C+2],R.y+=z[C+3],C===0&&X===!0&&it.copy(R);break;case"q":z=p(at);for(let C=0,E=z.length;C<E;C+=4)U.quadraticCurveTo(R.x+z[C+0],R.y+z[C+1],R.x+z[C+2],R.y+z[C+3]),b.x=R.x+z[C+0],b.y=R.y+z[C+1],R.x+=z[C+2],R.y+=z[C+3],C===0&&X===!0&&it.copy(R);break;case"t":z=p(at);for(let C=0,E=z.length;C<E;C+=2){let v=y(R.x,b.x),K=y(R.y,b.y);U.quadraticCurveTo(v,K,R.x+z[C+0],R.y+z[C+1]),b.x=v,b.y=K,R.x=R.x+z[C+0],R.y=R.y+z[C+1],C===0&&X===!0&&it.copy(R)}break;case"a":z=p(at,[3,4],7);for(let C=0,E=z.length;C<E;C+=7){if(z[C+5]==0&&z[C+6]==0)continue;let v=R.clone();R.x+=z[C+5],R.y+=z[C+6],b.x=R.x,b.y=R.y,o(U,z[C],z[C+1],z[C+2],z[C+3],z[C+4],v,R),C===0&&X===!0&&it.copy(R)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(R.copy(it),U.currentPath.currentPoint.copy(R),ft=!0);break;default:console.warn(et)}X=!1}return U}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let U=0;U<N.sheet.cssRules.length;U++){let R=N.sheet.cssRules[U];if(R.type!==1)continue;let b=R.selectorText.split(/,/gm).filter(Boolean).map(it=>it.trim());for(let it=0;it<b.length;it++){let ft=Object.fromEntries(Object.entries(R.style).filter(([,X])=>X!==""));$[b[it]]=Object.assign($[b[it]]||{},ft)}}}function o(N,U,R,b,it,ft,X,gt){if(U==0||R==0){N.lineTo(gt.x,gt.y);return}b=b*Math.PI/180,U=Math.abs(U),R=Math.abs(R);let j=(X.x-gt.x)/2,w=(X.y-gt.y)/2,Y=Math.cos(b)*j+Math.sin(b)*w,et=-Math.sin(b)*j+Math.cos(b)*w,st=U*U,at=R*R,z=Y*Y,C=et*et,E=z/st+C/at;if(E>1){let vt=Math.sqrt(E);U=vt*U,R=vt*R,st=U*U,at=R*R}let v=st*C+at*z,K=(st*at-v)/v,ct=Math.sqrt(Math.max(0,K));it===ft&&(ct=-ct);let pt=ct*U*et/R,ut=-ct*R*Y/U,Nt=Math.cos(b)*pt-Math.sin(b)*ut+(X.x+gt.x)/2,wt=Math.sin(b)*pt+Math.cos(b)*ut+(X.y+gt.y)/2,Pt=a(1,0,(Y-pt)/U,(et-ut)/R),Tt=a((Y-pt)/U,(et-ut)/R,(-Y-pt)/U,(-et-ut)/R)%(Math.PI*2);N.currentPath.absellipse(Nt,wt,U,R,Pt,Pt+Tt,ft===0,b)}function a(N,U,R,b){let it=N*R+U*b,ft=Math.sqrt(N*N+U*U)*Math.sqrt(R*R+b*b),X=Math.acos(Math.max(-1,Math.min(1,it/ft)));return N*b-U*R<0&&(X=-X),X}function l(N){let U=_(N.getAttribute("x")||0),R=_(N.getAttribute("y")||0),b=_(N.getAttribute("rx")||N.getAttribute("ry")||0),it=_(N.getAttribute("ry")||N.getAttribute("rx")||0),ft=_(N.getAttribute("width")),X=_(N.getAttribute("height")),gt=1-.551915024494,j=new fn;return j.moveTo(U+b,R),j.lineTo(U+ft-b,R),(b!==0||it!==0)&&j.bezierCurveTo(U+ft-b*gt,R,U+ft,R+it*gt,U+ft,R+it),j.lineTo(U+ft,R+X-it),(b!==0||it!==0)&&j.bezierCurveTo(U+ft,R+X-it*gt,U+ft-b*gt,R+X,U+ft-b,R+X),j.lineTo(U+b,R+X),(b!==0||it!==0)&&j.bezierCurveTo(U+b*gt,R+X,U,R+X-it*gt,U,R+X-it),j.lineTo(U,R+it),(b!==0||it!==0)&&j.bezierCurveTo(U,R+it*gt,U+b*gt,R,U+b,R),j}function c(N){function U(ft,X,gt){let j=_(X),w=_(gt);it===0?b.moveTo(j,w):b.lineTo(j,w),it++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new fn,it=0;return N.getAttribute("points").replace(R,U),b.currentPath.autoClose=!0,b}function h(N){function U(ft,X,gt){let j=_(X),w=_(gt);it===0?b.moveTo(j,w):b.lineTo(j,w),it++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new fn,it=0;return N.getAttribute("points").replace(R,U),b.currentPath.autoClose=!1,b}function d(N){let U=_(N.getAttribute("cx")||0),R=_(N.getAttribute("cy")||0),b=_(N.getAttribute("r")||0),it=new We;it.absarc(U,R,b,0,Math.PI*2);let ft=new fn;return ft.subPaths.push(it),ft}function u(N){let U=_(N.getAttribute("cx")||0),R=_(N.getAttribute("cy")||0),b=_(N.getAttribute("rx")||0),it=_(N.getAttribute("ry")||0),ft=new We;ft.absellipse(U,R,b,it,0,Math.PI*2);let X=new fn;return X.subPaths.push(ft),X}function m(N){let U=_(N.getAttribute("x1")||0),R=_(N.getAttribute("y1")||0),b=_(N.getAttribute("x2")||0),it=_(N.getAttribute("y2")||0),ft=new fn;return ft.moveTo(U,R),ft.lineTo(b,it),ft.currentPath.autoClose=!1,ft}function g(N,U){U=Object.assign({},U);let R={};if(N.hasAttribute("class")){let X=N.getAttribute("class").split(/\s/).filter(Boolean).map(gt=>gt.trim());for(let gt=0;gt<X.length;gt++)R=Object.assign(R,$["."+X[gt]])}N.hasAttribute("id")&&(R=Object.assign(R,$["#"+N.getAttribute("id")]));function b(X,gt,j){j===void 0&&(j=function(Y){return Y.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Y}),N.hasAttribute(X)&&(U[gt]=j(N.getAttribute(X))),R[X]&&(U[gt]=j(R[X])),N.style&&N.style[X]!==""&&(U[gt]=j(N.style[X]))}function it(X){return Math.max(0,Math.min(1,_(X)))}function ft(X){return Math.max(0,_(X))}return b("fill","fill"),b("fill-opacity","fillOpacity",it),b("fill-rule","fillRule"),b("opacity","opacity",it),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",it),b("stroke-width","strokeWidth",ft),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",ft),b("visibility","visibility"),U}function y(N,U){return N-(U-N)}function p(N,U,R){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);let b={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},it=0,ft=1,X=2,gt=3,j=it,w=!0,Y="",et="",st=[];function at(v,K,ct){let pt=new SyntaxError('Unexpected character "'+v+'" at index '+K+".");throw pt.partial=ct,pt}function z(){Y!==""&&(et===""?st.push(Number(Y)):st.push(Number(Y)*Math.pow(10,Number(et)))),Y="",et=""}let C,E=N.length;for(let v=0;v<E;v++){if(C=N[v],Array.isArray(U)&&U.includes(st.length%R)&&b.FLAGS.test(C)){j=ft,Y=C,z();continue}if(j===it){if(b.WHITESPACE.test(C))continue;if(b.DIGIT.test(C)||b.SIGN.test(C)){j=ft,Y=C;continue}if(b.POINT.test(C)){j=X,Y=C;continue}b.COMMA.test(C)&&(w&&at(C,v,st),w=!0)}if(j===ft){if(b.DIGIT.test(C)){Y+=C;continue}if(b.POINT.test(C)){Y+=C,j=X;continue}if(b.EXP.test(C)){j=gt;continue}b.SIGN.test(C)&&Y.length===1&&b.SIGN.test(Y[0])&&at(C,v,st)}if(j===X){if(b.DIGIT.test(C)){Y+=C;continue}if(b.EXP.test(C)){j=gt;continue}b.POINT.test(C)&&Y[Y.length-1]==="."&&at(C,v,st)}if(j===gt){if(b.DIGIT.test(C)){et+=C;continue}if(b.SIGN.test(C)){if(et===""){et+=C;continue}et.length===1&&b.SIGN.test(et)&&at(C,v,st)}}b.WHITESPACE.test(C)?(z(),j=it,w=!1):b.COMMA.test(C)?(z(),j=it,w=!0):b.SIGN.test(C)?(z(),j=ft,Y=C):b.POINT.test(C)?(z(),j=X,Y=C):at(C,v,st)}return z(),st}let f=["mm","cm","in","pt","pc","px"],A={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(N){let U="px";if(typeof N=="string"||N instanceof String)for(let b=0,it=f.length;b<it;b++){let ft=f[b];if(N.endsWith(ft)){U=ft,N=N.substring(0,N.length-ft.length);break}}let R;return U==="px"&&e.defaultUnit!=="px"?R=A.in[e.defaultUnit]/e.defaultDPI:(R=A[U][e.defaultUnit],R<0&&(R=A[U].in*e.defaultDPI)),R*parseFloat(N)}function M(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;let U=O(N);return Q.length>0&&U.premultiply(Q[Q.length-1]),Et.copy(U),Q.push(U),U}function O(N){let U=new Wt,R=dt;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){let b=_(N.getAttribute("x")),it=_(N.getAttribute("y"));U.translate(b,it)}if(N.hasAttribute("transform")){let b=N.getAttribute("transform").split(")");for(let it=b.length-1;it>=0;it--){let ft=b[it].trim();if(ft==="")continue;let X=ft.indexOf("("),gt=ft.length;if(X>0&&X<gt){let j=ft.slice(0,X),w=p(ft.slice(X+1));switch(R.identity(),j){case"translate":if(w.length>=1){let Y=w[0],et=0;w.length>=2&&(et=w[1]),R.translate(Y,et)}break;case"rotate":if(w.length>=1){let Y=0,et=0,st=0;Y=w[0]*Math.PI/180,w.length>=3&&(et=w[1],st=w[2]),J.makeTranslation(-et,-st),ot.makeRotation(Y),k.multiplyMatrices(ot,J),J.makeTranslation(et,st),R.multiplyMatrices(J,k)}break;case"scale":if(w.length>=1){let Y=w[0],et=Y;w.length>=2&&(et=w[1]),R.scale(Y,et)}break;case"skewX":w.length===1&&R.set(1,Math.tan(w[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":w.length===1&&R.set(1,0,0,Math.tan(w[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":w.length===6&&R.set(w[0],w[2],w[4],w[1],w[3],w[5],0,0,1);break}}U.premultiply(R)}}return U}function P(N,U){function R(X){Mt.set(X.x,X.y,1).applyMatrix3(U),X.set(Mt.x,Mt.y)}function b(X){let gt=X.xRadius,j=X.yRadius,w=Math.cos(X.aRotation),Y=Math.sin(X.aRotation),et=new B(gt*w,gt*Y,0),st=new B(-j*Y,j*w,0),at=et.applyMatrix3(U),z=st.applyMatrix3(U),C=dt.set(at.x,z.x,0,at.y,z.y,0,0,0,1),E=J.copy(C).invert(),ct=ot.copy(E).transpose().multiply(E).elements,pt=S(ct[0],ct[1],ct[4]),ut=Math.sqrt(pt.rt1),Nt=Math.sqrt(pt.rt2);if(X.xRadius=1/ut,X.yRadius=1/Nt,X.aRotation=Math.atan2(pt.sn,pt.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Pt=J.set(ut,0,0,0,Nt,0,0,0,1),Tt=ot.set(pt.cs,pt.sn,0,-pt.sn,pt.cs,0,0,0,1),vt=Pt.multiply(Tt).multiply(C),Rt=kt=>{let{x:Ht,y:Ot}=new B(Math.cos(kt),Math.sin(kt),0).applyMatrix3(vt);return Math.atan2(Ot,Ht)};X.aStartAngle=Rt(X.aStartAngle),X.aEndAngle=Rt(X.aEndAngle),D(U)&&(X.aClockwise=!X.aClockwise)}}function it(X){let gt=nt(U),j=x(U);X.xRadius*=gt,X.yRadius*=j;let w=gt>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);X.aRotation+=w,D(U)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}let ft=N.subPaths;for(let X=0,gt=ft.length;X<gt;X++){let w=ft[X].curves;for(let Y=0;Y<w.length;Y++){let et=w[Y];et.isLineCurve?(R(et.v1),R(et.v2)):et.isCubicBezierCurve?(R(et.v0),R(et.v1),R(et.v2),R(et.v3)):et.isQuadraticBezierCurve?(R(et.v0),R(et.v1),R(et.v2)):et.isEllipseCurve&&(St.set(et.aX,et.aY),R(St),et.aX=St.x,et.aY=St.y,F(U)?b(et):it(et))}}}function D(N){let U=N.elements;return U[0]*U[4]-U[1]*U[3]<0}function F(N){let U=N.elements,R=U[0]*U[3]+U[1]*U[4];if(R===0)return!1;let b=nt(N),it=x(N);return Math.abs(R/(b*it))>Number.EPSILON}function nt(N){let U=N.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function x(N){let U=N.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function S(N,U,R){let b,it,ft,X,gt,j=N+R,w=N-R,Y=Math.sqrt(w*w+4*U*U);return j>0?(b=.5*(j+Y),gt=1/b,it=N*gt*R-U*gt*U):j<0?it=.5*(j-Y):(b=.5*Y,it=-.5*Y),w>0?ft=w+Y:ft=w-Y,Math.abs(ft)>2*Math.abs(U)?(gt=-2*U/ft,X=1/Math.sqrt(1+gt*gt),ft=gt*X):Math.abs(U)===0?(ft=1,X=0):(gt=-.5*ft/U,ft=1/Math.sqrt(1+gt*gt),X=gt*ft),w>0&&(gt=ft,ft=-X,X=gt),{rt1:b,rt2:it,cs:ft,sn:X}}let G=[],$={},Q=[],dt=new Wt,J=new Wt,ot=new Wt,k=new Wt,St=new ht,Mt=new B,Et=new Wt,Gt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Gt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:Gt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,p,f,A){let _=y.x,M=p.x,O=f.x,P=A.x,D=y.y,F=p.y,nt=f.y,x=A.y,S=(P-O)*(D-nt)-(x-nt)*(_-O),G=(M-_)*(D-nt)-(F-D)*(_-O),$=(x-nt)*(M-_)-(P-O)*(F-D),Q=S/$,dt=G/$;if($===0&&S!==0||Q<=0||Q>=1||dt<0||dt>1)return null;if(S===0&&$===0){for(let J=0;J<2;J++)if(o(J===0?f:A,y,p),s.loc==n.ORIGIN){let ot=J===0?f:A;return{x:ot.x,y:ot.y,t:s.t}}else if(s.loc==n.BETWEEN){let ot=+(_+s.t*(M-_)).toPrecision(10),k=+(D+s.t*(F-D)).toPrecision(10);return{x:ot,y:k,t:s.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?f:A,y,p),s.loc==n.ORIGIN){let St=k===0?f:A;return{x:St.x,y:St.y,t:s.t}}let J=+(_+Q*(M-_)).toPrecision(10),ot=+(D+Q*(F-D)).toPrecision(10);return{x:J,y:ot,t:Q}}}function o(y,p,f){let A=f.x-p.x,_=f.y-p.y,M=y.x-p.x,O=y.y-p.y,P=A*O-M*_;if(y.x===p.x&&y.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===f.x&&y.y===f.y){s.loc=n.DESTINATION,s.t=1;return}if(P<-Number.EPSILON){s.loc=n.LEFT;return}if(P>Number.EPSILON){s.loc=n.RIGHT;return}if(A*M<0||_*O<0){s.loc=n.BEHIND;return}if(Math.sqrt(A*A+_*_)<Math.sqrt(M*M+O*O)){s.loc=n.BEYOND;return}let D;A!==0?D=M/A:D=O/_,s.loc=n.BETWEEN,s.t=D}function a(y,p){let f=[],A=[];for(let _=1;_<y.length;_++){let M=y[_-1],O=y[_];for(let P=1;P<p.length;P++){let D=p[P-1],F=p[P],nt=r(M,O,D,F);nt!==null&&f.find(x=>x.t<=nt.t+Number.EPSILON&&x.t>=nt.t-Number.EPSILON)===void 0&&(f.push(nt),A.push(new ht(nt.x,nt.y)))}}return A}function l(y,p,f){let A=new ht;p.getCenter(A);let _=[];return f.forEach(M=>{M.boundingBox.containsPoint(A)&&a(y,M.points).forEach(P=>{_.push({identifier:M.identifier,isCW:M.isCW,point:P})})}),_.sort((M,O)=>M.point.x-O.point.x),_}function c(y,p,f,A,_){(_==null||_==="")&&(_="nonzero");let M=new ht;y.boundingBox.getCenter(M);let O=[new ht(f,M.y),new ht(A,M.y)],P=l(O,y.boundingBox,p);P.sort((G,$)=>G.point.x-$.point.x);let D=[],F=[];P.forEach(G=>{G.identifier===y.identifier?D.push(G):F.push(G)});let nt=D[0].point.x,x=[],S=0;for(;S<F.length&&F[S].point.x<nt;)x.length>0&&x[x.length-1]===F[S].identifier?x.pop():x.push(F[S].identifier),S++;if(x.push(y.identifier),_==="evenodd"){let G=x.length%2===0,$=x[x.length-2];return{identifier:y.identifier,isHole:G,for:$}}else if(_==="nonzero"){let G=!0,$=null,Q=null;for(let dt=0;dt<x.length;dt++){let J=x[dt];G?(Q=p[J].isCW,G=!1,$=J):Q!==p[J].isCW&&(Q=p[J].isCW,G=!0)}return{identifier:y.identifier,isHole:G,for:$}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,d=-999999999,u=t.subPaths.map(y=>{let p=y.getPoints(),f=-999999999,A=999999999,_=-999999999,M=999999999;for(let O=0;O<p.length;O++){let P=p[O];P.y>f&&(f=P.y),P.y<A&&(A=P.y),P.x>_&&(_=P.x),P.x<M&&(M=P.x)}return d<=_&&(d=_+1),h>=M&&(h=M-1),{curves:y.curves,points:p,isCW:Bn.isClockWise(p),identifier:-1,boundingBox:new Fr(new ht(M,A),new ht(_,f))}});u=u.filter(y=>y.points.length>1);for(let y=0;y<u.length;y++)u[y].identifier=y;let m=u.map(y=>c(y,u,h,d,t.userData?t.userData.style.fillRule:void 0)),g=[];return u.forEach(y=>{if(!m[y.identifier].isHole){let f=new Ze;f.curves=y.curves,m.filter(_=>_.isHole&&_.for===y.identifier).forEach(_=>{let M=u[_.identifier],O=new We;O.curves=M.curves,f.holes.push(O)}),g.push(f)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;let l=new Ce;return l.setAttribute("position",new se(r,3)),l.setAttribute("normal",new se(o,3)),l.setAttribute("uv",new se(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){let c=new ht,h=new ht,d=new ht,u=new ht,m=new ht,g=new ht,y=new ht,p=new ht,f=new ht,A=new ht,_=new ht,M=new ht,O=new ht,P=new ht,D=new ht,F=new ht,nt=new ht;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=w(t);let x=t.length;if(x<2)return 0;let S=t[0].equals(t[x-1]),G,$=t[0],Q,dt=e.strokeWidth/2,J=1/(x-1),ot=0,k,St,Mt,Et,Gt=!1,Jt=0,N=l*3,U=l*2;R(t[0],t[1],c).multiplyScalar(dt),p.copy(t[0]).sub(c),f.copy(t[0]).add(c),A.copy(p),_.copy(f);for(let Y=1;Y<x;Y++){G=t[Y],Y===x-1?S?Q=t[1]:Q=void 0:Q=t[Y+1];let et=c;if(R($,G,et),d.copy(et).multiplyScalar(dt),M.copy(G).sub(d),O.copy(G).add(d),k=ot+J,St=!1,Q!==void 0){R(G,Q,h),d.copy(h).multiplyScalar(dt),P.copy(G).sub(d),D.copy(G).add(d),Mt=!0,d.subVectors(Q,$),et.dot(d)<0&&(Mt=!1),Y===1&&(Gt=Mt),d.subVectors(Q,G),d.normalize();let st=Math.abs(et.dot(d));if(st>Number.EPSILON){let at=dt/st;d.multiplyScalar(-at),u.subVectors(G,$),m.copy(u).setLength(at).add(d),F.copy(m).negate();let z=m.length(),C=u.length();u.divideScalar(C),g.subVectors(Q,G);let E=g.length();switch(g.divideScalar(E),u.dot(F)<C&&g.dot(F)<E&&(St=!0),nt.copy(m).add(G),F.add(G),Et=!1,St?Mt?(D.copy(F),O.copy(F)):(P.copy(F),M.copy(F)):ft(),e.strokeLineJoin){case"bevel":X(Mt,St,k);break;case"round":gt(Mt,St),Mt?it(G,M,P,k,0):it(G,D,O,k,1);break;case"miter":case"miter-clip":default:let v=dt*e.strokeMiterLimit/z;if(v<1)if(e.strokeLineJoin!=="miter-clip"){X(Mt,St,k);break}else gt(Mt,St),Mt?(g.subVectors(nt,M).multiplyScalar(v).add(M),y.subVectors(nt,P).multiplyScalar(v).add(P),b(M,k,0),b(g,k,0),b(G,k,.5),b(G,k,.5),b(g,k,0),b(y,k,0),b(G,k,.5),b(y,k,0),b(P,k,0)):(g.subVectors(nt,O).multiplyScalar(v).add(O),y.subVectors(nt,D).multiplyScalar(v).add(D),b(O,k,1),b(g,k,1),b(G,k,.5),b(G,k,.5),b(g,k,1),b(y,k,1),b(G,k,.5),b(y,k,1),b(D,k,1));else St?(Mt?(b(f,ot,1),b(p,ot,0),b(nt,k,0),b(f,ot,1),b(nt,k,0),b(F,k,1)):(b(f,ot,1),b(p,ot,0),b(nt,k,1),b(p,ot,0),b(F,k,0),b(nt,k,1)),Mt?P.copy(nt):D.copy(nt)):Mt?(b(M,k,0),b(nt,k,0),b(G,k,.5),b(G,k,.5),b(nt,k,0),b(P,k,0)):(b(O,k,1),b(nt,k,1),b(G,k,.5),b(G,k,.5),b(nt,k,1),b(D,k,1)),Et=!0;break}}else ft()}else ft();!S&&Y===x-1&&j(t[0],A,_,Mt,!0,ot),ot=k,$=G,p.copy(P),f.copy(D)}if(!S)j(G,M,O,Mt,!1,k);else if(St&&r){let Y=nt,et=F;Gt!==Mt&&(Y=F,et=nt),Mt?(Et||Gt)&&(et.toArray(r,0*3),et.toArray(r,3*3),Et&&Y.toArray(r,1*3)):(Et||!Gt)&&(et.toArray(r,1*3),et.toArray(r,3*3),Et&&Y.toArray(r,0*3))}return Jt;function R(Y,et,st){return st.subVectors(et,Y),st.set(-st.y,st.x).normalize()}function b(Y,et,st){r&&(r[N]=Y.x,r[N+1]=Y.y,r[N+2]=0,o&&(o[N]=0,o[N+1]=0,o[N+2]=1),N+=3,a&&(a[U]=et,a[U+1]=st,U+=2)),Jt+=3}function it(Y,et,st,at,z){c.copy(et).sub(Y).normalize(),h.copy(st).sub(Y).normalize();let C=Math.PI,E=c.dot(h);Math.abs(E)<1&&(C=Math.abs(Math.acos(E))),C/=n,d.copy(et);for(let v=0,K=n-1;v<K;v++)u.copy(d).rotateAround(Y,C),b(d,at,z),b(u,at,z),b(Y,at,.5),d.copy(u);b(u,at,z),b(st,at,z),b(Y,at,.5)}function ft(){b(f,ot,1),b(p,ot,0),b(M,k,0),b(f,ot,1),b(M,k,0),b(O,k,1)}function X(Y,et,st){et?Y?(b(f,ot,1),b(p,ot,0),b(M,k,0),b(f,ot,1),b(M,k,0),b(F,k,1),b(M,st,0),b(P,st,0),b(F,st,.5)):(b(f,ot,1),b(p,ot,0),b(O,k,1),b(p,ot,0),b(F,k,0),b(O,k,1),b(O,st,1),b(F,st,0),b(D,st,1)):Y?(b(M,st,0),b(P,st,0),b(G,st,.5)):(b(O,st,1),b(D,st,0),b(G,st,.5))}function gt(Y,et){et&&(Y?(b(f,ot,1),b(p,ot,0),b(M,k,0),b(f,ot,1),b(M,k,0),b(F,k,1),b(M,ot,0),b(G,k,.5),b(F,k,1),b(G,k,.5),b(P,ot,0),b(F,k,1)):(b(f,ot,1),b(p,ot,0),b(O,k,1),b(p,ot,0),b(F,k,0),b(O,k,1),b(O,ot,1),b(F,k,0),b(G,k,.5),b(G,k,.5),b(F,k,0),b(D,ot,1)))}function j(Y,et,st,at,z,C){switch(e.strokeLineCap){case"round":z?it(Y,st,et,C,.5):it(Y,et,st,C,.5);break;case"square":if(z)c.subVectors(et,Y),h.set(c.y,-c.x),d.addVectors(c,h).add(Y),u.subVectors(h,c).add(Y),at?(d.toArray(r,1*3),u.toArray(r,0*3),u.toArray(r,3*3)):(d.toArray(r,1*3),a[3*2+1]===1?u.toArray(r,3*3):d.toArray(r,3*3),u.toArray(r,0*3));else{c.subVectors(st,Y),h.set(c.y,-c.x),d.addVectors(c,h).add(Y),u.subVectors(h,c).add(Y);let E=r.length;at?(d.toArray(r,E-1*3),u.toArray(r,E-2*3),u.toArray(r,E-4*3)):(u.toArray(r,E-2*3),d.toArray(r,E-1*3),u.toArray(r,E-4*3))}break;case"butt":default:break}}function w(Y){let et=!1;for(let at=1,z=Y.length-1;at<z;at++)if(Y[at].distanceTo(Y[at+1])<s){et=!0;break}if(!et)return Y;let st=[];st.push(Y[0]);for(let at=1,z=Y.length-1;at<z;at++)Y[at].distanceTo(Y[at+1])>=s&&st.push(Y[at]);return st.push(Y[Y.length-1]),st}}};var Gr=class extends Hi{constructor(){super();let t=new sn;t.deleteAttribute("uv");let e=new Rn({side:De}),n=new Rn,s=new Or(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new jt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new jt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new jt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new jt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new jt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new jt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new jt(t,$i(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let m=new jt(t,$i(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new jt(t,$i(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new jt(t,$i(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new jt(t,$i(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let f=new jt(t,$i(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $i(i){let t=new Bi;return t.color.setScalar(i),t}var Wc={type:"change"},cl={type:"start"},qc={type:"end"},Wr=new _s,Xc=new tn,I0=Math.cos(70*Cs.DEG2RAD),Ee=new B,ze=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ll=1e-6,Xr=class extends Br{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Be,this._lastTargetPosition=new B,this._quat=new Be().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new As,this._sphericalDelta=new As,this._scale=1,this._panOffset=new B,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new B,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U0.bind(this),this._onPointerDown=D0.bind(this),this._onPointerUp=N0.bind(this),this._onContextMenu=V0.bind(this),this._onMouseWheel=B0.bind(this),this._onKeyDown=z0.bind(this),this._onTouchStart=k0.bind(this),this._onTouchMove=H0.bind(this),this._onMouseDown=O0.bind(this),this._onMouseMove=F0.bind(this),this._interceptControlDown=G0.bind(this),this._interceptControlUp=W0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wc),this.update(),this.state=le.NONE}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ze:n>Math.PI&&(n-=ze),s<-Math.PI?s+=ze:s>Math.PI&&(s-=ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ee.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<I0?this.object.lookAt(this.target):(Xc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(Xc,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ll||this._lastTargetPosition.distanceToSquared(this.target)>ll?(this.dispatchEvent(Wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function D0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function U0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function N0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qc),this.state=le.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function O0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(cl)}function F0(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function B0(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(cl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qc))}function z0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function k0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(cl)}function H0(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function V0(i){this.enabled!==!1&&i.preventDefault()}function G0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hl={isConnected:!1,remove(){},textContent:""};try{let a=function(L=1){let I=document.createElement("canvas");I.width=I.height=1024;let V=I.getContext("2d");V.fillStyle="#808080",V.fillRect(0,0,1024,1024);let H=L,tt=()=>(H=H*16807%2147483647)/2147483647;for(let _t=0;_t<9e3;_t++){let mt=tt()*1024,yt=tt()*1024,Ct=80+tt()*600,Bt=Math.floor(90+tt()*90);V.strokeStyle=`rgba(${Bt},${Bt},${Bt},${.1+tt()*.25})`,V.lineWidth=.6+tt()*1.2,V.beginPath(),V.moveTo(yt,mt),V.lineTo(yt+Ct,mt+(tt()-.5)*2),V.stroke()}let Z=new ii(I);return Z.wrapS=Z.wrapT=ti,Z.repeat.set(1/140,1/140),Z.anisotropy=8,Z},c=function(){let L=document.createElement("canvas");L.width=L.height=1024;let I=L.getContext("2d"),V=I.createRadialGradient(512,470,60,512,512,720);V.addColorStop(0,"#e2e1dc"),V.addColorStop(1,"#8f8e89"),I.fillStyle=V,I.fillRect(0,0,1024,1024);let H=I.getImageData(0,0,1024,1024),tt=3,Z=()=>(tt=tt*16807%2147483647)/2147483647;for(let mt=0;mt<H.data.length;mt+=4){let yt=(Z()-.5)*6;H.data[mt]+=yt,H.data[mt+1]+=yt,H.data[mt+2]+=yt}I.putImageData(H,0,0);let _t=new ii(L);return _t.colorSpace=Ae,_t},M=function(L,I="evenodd"){let V=new Ls().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${L}" fill="#000" fill-rule="${I}"/></svg>`),H=[];for(let tt of V.paths)for(let Z of Ls.createShapes(tt)){let{shape:_t,holes:mt}=Z.extractPoints(10),yt=new Ze(_t.map(Ct=>new ht(Ct.x,-Ct.y)));yt.holes=mt.map(Ct=>new We(Ct.map(Bt=>new ht(Bt.x,-Bt.y)))),H.push(yt)}return H},O=function(L,I,V,H,tt,Z=.7){let _t=new Gi(M(L,tt),{depth:V-2*Z,bevelEnabled:!0,bevelThickness:Z,bevelSize:Z*.8,bevelSegments:2,curveSegments:8});_t.translate(0,0,I+Z);let mt=new jt(_t,H);return mt.castShadow=mt.receiveShadow=!0,r.add(mt),mt},P=function(L,I,V,H=1,tt=0){let Z=5*H,_t=new jt(new Es(Z,24,12,0,Math.PI*2,0,Math.PI/2),f);_t.rotation.x=Math.PI/2,_t.scale.set(1,.38,1),_t.position.set(L,-I,V),_t.castShadow=!0,r.add(_t);for(let mt of[0,Math.PI/2]){let yt=new jt(new sn(Z*1.25,Z*.22,1.2),A);yt.position.set(L,-I,V+Z*.36),yt.rotation.z=mt+tt*Math.PI/180,r.add(yt)}},D=function(L,I,V,H){let tt=new rn(4.2,4.2,H-V,20);tt.rotateX(Math.PI/2);let Z=new jt(tt,_);Z.position.set(L,-I,(V+H)/2),Z.castShadow=!0,r.add(Z)},F=function(L){let I=L;return()=>(I=I*16807%2147483647)/2147483647},nt=function(L=2048){let I=document.createElement("canvas");return I.width=I.height=L,[I,I.getContext("2d")]},x=function(L,I,V,H){let tt=n,Z=F(L),[_t,mt]=nt(tt),[yt,Ct]=nt(tt),[Bt,Ft]=nt(tt),[ne,zt]=nt(tt);mt.fillStyle=I,mt.fillRect(0,0,tt,tt),Ct.fillStyle=V?"#6a6a6a":"#585858",Ct.fillRect(0,0,tt,tt),Ft.fillStyle="#808080",Ft.fillRect(0,0,tt,tt),zt.fillStyle=V?"#3a3a3a":"#ffffff",zt.fillRect(0,0,tt,tt);for(let Dt=0;Dt<70;Dt++){let Vt=Z()*tt,qt=Z()*tt,Yt=60+Z()*380,ie=Z(),te=V?ie<.5?H[0]:H[1]:ie<.35?"rgba(92,72,52,":ie<.7?"rgba(40,42,45,":"rgba(225,228,230,",_e=mt.createRadialGradient(Vt,qt,0,Vt,qt,Yt);_e.addColorStop(0,te+(.1+Z()*.18)+")"),_e.addColorStop(1,te+"0)"),mt.fillStyle=_e,mt.fillRect(Vt-Yt,qt-Yt,2*Yt,2*Yt);let we=Math.floor(80+Z()*120),fe=Ct.createRadialGradient(Vt,qt,0,Vt,qt,Yt);fe.addColorStop(0,`rgba(${we},${we},${we},0.35)`),fe.addColorStop(1,`rgba(${we},${we},${we},0)`),Ct.fillStyle=fe,Ct.fillRect(Vt-Yt,qt-Yt,2*Yt,2*Yt)}for(let Dt=0;Dt<14e3;Dt++){let Vt=Z()*tt,qt=Z()*tt,Yt=60+Z()*500,ie=Math.floor(100+Z()*70);Ft.strokeStyle=`rgba(${ie},${ie},${ie},${.12+Z()*.2})`,Ft.lineWidth=.7+Z(),Ft.beginPath(),Ft.moveTo(qt,Vt),Ft.lineTo(qt+Yt,Vt+(Z()-.5)*2),Ft.stroke()}for(let Dt=0;Dt<(V?420:900);Dt++){let Vt=Z()*tt,qt=Z()*tt,Yt=Z()*Math.PI,ie=15+Z()*(Z()<.1?420:120),te=Vt+Math.cos(Yt)*ie,_e=qt+Math.sin(Yt)*ie,we=.5+Z()*(V?.9:1.4);mt.strokeStyle=V?`rgba(170,175,180,${.35+Z()*.5})`:`rgba(235,238,240,${.15+Z()*.3})`,mt.lineWidth=we,mt.beginPath(),mt.moveTo(Vt,qt),mt.lineTo(te,_e),mt.stroke(),Ft.strokeStyle="rgba(40,40,40,0.55)",Ft.lineWidth=we,Ft.beginPath(),Ft.moveTo(Vt,qt),Ft.lineTo(te,_e),Ft.stroke(),Ct.strokeStyle="rgba(60,60,60,0.6)",Ct.lineWidth=we,Ct.beginPath(),Ct.moveTo(Vt,qt),Ct.lineTo(te,_e),Ct.stroke(),V&&(zt.strokeStyle="#ffffff",zt.lineWidth=we,zt.beginPath(),zt.moveTo(Vt,qt),zt.lineTo(te,_e),zt.stroke())}for(let Dt=0;Dt<2600;Dt++){let Vt=Z()*tt,qt=Z()*tt,Yt=.5+Z()*(Z()<.04?4:1.5);mt.fillStyle=`rgba(0,0,0,${.12+Z()*.25})`,mt.beginPath(),mt.arc(Vt,qt,Yt,0,7),mt.fill(),Ft.fillStyle="rgba(30,30,30,0.8)",Ft.beginPath(),Ft.arc(Vt,qt,Yt,0,7),Ft.fill(),Ct.fillStyle="rgba(200,200,200,0.5)",Ct.beginPath(),Ct.arc(Vt,qt,Yt,0,7),Ct.fill()}if(V)for(let Dt=0;Dt<160;Dt++){let Vt=Z()*tt,qt=Z()*tt,Yt=3+Z()*(Z()<.12?26:9),ie=9;mt.beginPath(),zt.beginPath(),Ft.beginPath();for(let te=0;te<=ie;te++){let _e=te/ie*6.283,we=Yt*(.5+Z()*.7),fe=Vt+Math.cos(_e)*we,ln=qt+Math.sin(_e)*we;te?(mt.lineTo(fe,ln),zt.lineTo(fe,ln),Ft.lineTo(fe,ln)):(mt.moveTo(fe,ln),zt.moveTo(fe,ln),Ft.moveTo(fe,ln))}mt.fillStyle="rgb(150,154,158)",mt.fill(),zt.fillStyle="#ffffff",zt.fill(),Ft.fillStyle="rgba(40,40,40,0.9)",Ft.fill()}let It=mt.getImageData(0,0,tt,tt);for(let Dt=0;Dt<It.data.length;Dt+=4){let Vt=(Z()-.5)*14;It.data[Dt]+=Vt,It.data[Dt+1]+=Vt,It.data[Dt+2]+=Vt}mt.putImageData(It,0,0);let ce=(Dt,Vt)=>{let qt=new ii(Dt);return qt.wrapS=qt.wrapT=ti,qt.repeat.set(1/340,1/340),qt.anisotropy=8,Vt&&(qt.colorSpace=Ae),qt};return{map:ce(_t,!0),roughnessMap:ce(yt),bumpMap:ce(Bt),metalnessMap:ce(ne)}},Rt=function(L,I){let[V,H]=nt(L);I(H,L);let tt=new ii(V);return tt.wrapS=tt.wrapT=ti,tt.anisotropy=8,tt},Zt=function(L,I){let V=new jt(L,I);return V.castShadow=!0,V.receiveShadow=!0,r.add(V),V},he=function(L,I,V,H=!1,tt=0,Z=12){let _t=new Vi(L,H,"centripetal");return Zt(new ws(_t,tt||Math.max(24,Math.round(_t.getLength()/3)),I,Z,H),V)},Re=function(L,I,V){let H=new B().subVectors(I,L),tt=H.length();H.normalize();let Z=new B(1,0,0).cross(H);Z.lengthSq()<1e-4&&Z.set(0,0,1).cross(H),Z.normalize();let _t=new B().crossVectors(H,Z),mt=V*7.2,yt=Math.ceil(tt/3.2);for(let Ct=0;Ct<6;Ct++){let Bt=[];for(let ne=0;ne<=yt;ne++){let zt=ne/yt*tt,It=Ct*Math.PI/3+zt/mt*Math.PI*2;Bt.push(L.clone().addScaledVector(H,zt).addScaledVector(Z,Math.cos(It)*V*.64).addScaledVector(_t,Math.sin(It)*V*.64))}let Ft=he(Bt,V*.4,Ot.clone(),!1,yt,8);Ft.material.bumpMap=kt.clone(),Ft.material.bumpMap.repeat.set(tt/9,1),Ft.material.map=Ht.clone(),Ft.material.map.repeat.set(tt/60,1)}Zt(new rn(V*.42,V*.42,tt,10).translate(0,tt/2,0).applyQuaternion(new Be().setFromUnitVectors(Tt(0,1,0),H)).translate(L.x,L.y,L.z),Qt)},ee=function(L,I,V=58,H=14){let tt=[Tt(0,0,0),Tt(H*.82,0,0),Tt(H,6,0),Tt(H,V-6,0),Tt(H*.82,V,0),Tt(0,V,0)].map(mt=>new ht(mt.x,mt.y)),Z=new vs(tt,28);Z.scale(1,1,.86);let _t=Zt(Z,lt);return _t.position.copy(L),_t.quaternion.setFromUnitVectors(Tt(0,1,0),I),_t},ve=function(L,I,V){let H=new hn;H.position.copy(L),H.quaternion.setFromUnitVectors(Tt(0,1,0),I.clone().normalize()),r.add(H);let tt=(Dt,Vt,qt,Yt)=>{let ie=new jt(Dt,Vt);return qt&&ie.position.copy(qt),Yt&&ie.rotation.set(...Yt),ie.castShadow=ie.receiveShadow=!0,H.add(ie),ie},Z=new Ze;Z.moveTo(-30,0),Z.lineTo(30,0),Z.lineTo(30,44),Z.absarc(0,44,30,0,Math.PI,!1),Z.lineTo(-30,0);let _t=new We;_t.absarc(0,46,13,0,Math.PI*2,!0),Z.holes.push(_t);let mt=new Gi(Z,{depth:16,bevelEnabled:!0,bevelThickness:1.6,bevelSize:1.6,bevelSegments:2,curveSegments:32});mt.translate(0,-4,-8),tt(mt,h);for(let Dt of[-10.5,10.5])tt(new Pr(3.2,60,4,8),xt,Tt(0,-2,Dt),[0,0,Math.PI/2]);let yt=42,Ct=new hn;Ct.position.set(0,yt,0),H.add(Ct),H.updateMatrixWorld(!0);let Bt=H.worldToLocal(V.clone()).sub(Tt(0,yt,0));Ct.rotation.z=Math.atan2(-Bt.x,Bt.y);let Ft=(Dt,Vt,qt,Yt)=>{let ie=new jt(Dt,Vt);return qt&&ie.position.copy(qt),Yt&&ie.rotation.set(...Yt),ie.castShadow=ie.receiveShadow=!0,Ct.add(ie),ie};Ft(new rn(10.5,10.5,62,20),W,Tt(0,0,0),[Math.PI/2,0,0]),Ft(new rn(15,15,9,24),Ut,Tt(0,0,33),[Math.PI/2,0,0]),Ft(new sn(10,26,7),Ut,Tt(0,10,37));for(let Dt=0;Dt<4;Dt++)Ft(new Wi(10.8,.9,6,20),W,Tt(0,0,-24-Dt*2.4));for(let Dt of[-19,19])Ft(new Wi(13,6.5,12,26),W,Tt(0,0,Dt));let ne=28,zt=6+Math.sqrt(ne*ne-20*20),It=zt+ne,ce=[];for(let Dt=0;Dt<=48;Dt++){let Vt=Cs.degToRad(-44.4+Dt/48*268.8);ce.push(Tt(0,zt+ne*Math.sin(Vt),ne*Math.cos(Vt)))}return Ft(new ws(new Vi(ce,!1,"centripetal"),72,9.5,14,!1),W),H.updateMatrixWorld(!0),{top:Ct.localToWorld(Tt(0,It,0)),side:Tt(1,0,0).applyQuaternion(Ct.getWorldQuaternion(new Be)).normalize()}},Je=function(L,I){let V=L.top,H=new B().subVectors(I,V).normalize(),tt=L.side.clone().addScaledVector(H,-L.side.dot(H)).normalize(),Z=(Bt,Ft,ne)=>[V.clone().addScaledVector(H,Ft).addScaledVector(tt,ne),V.clone().addScaledVector(H,Bt*1.2).addScaledVector(tt,Bt*.92),V.clone().addScaledVector(tt,Bt),V.clone().addScaledVector(H,-Bt*.72).addScaledVector(tt,Bt*.7),V.clone().addScaledVector(H,-Bt),V.clone().addScaledVector(H,-Bt*.72).addScaledVector(tt,-Bt*.7),V.clone().addScaledVector(tt,-Bt),V.clone().addScaledVector(H,Bt*1.2).addScaledVector(tt,-Bt*.92),V.clone().addScaledVector(H,Ft).addScaledVector(tt,-ne)],_t=V.clone();V.addScaledVector(H,9.5+4+Lt+2);let mt=he(Z(15,40,6),4.2,W,!1,80,10),yt=he(Z(15+4.2+Lt,64,Lt*.9),Lt,Ot.clone(),!1,120,12);yt.material.bumpMap=kt.clone(),yt.material.bumpMap.repeat.set(26,1),yt.material.map=Ht.clone();let Ct=V.clone().addScaledVector(H,56);ee(Ct,H,60,15.5),Re(Ct.clone().addScaledVector(H,50),I,Lt)},Qi=function(){let L=t.clientWidth,I=t.clientHeight;s.setSize(L,I,!1),an.aspect=L/I,an.updateProjectionMatrix()},i={plate:"M216.00,57.60 L201.67,64.27 L171.29,81.67 L161.19,88.67 L159.43,90.67 L159.26,91.67 L159.68,92.33 L160.67,92.58 L162.00,92.21 L188.00,79.78 L205.00,73.40 L225.33,67.29 L249.00,62.10 L257.67,60.87 L266.33,60.77 L281.67,58.87 L299.00,58.66 L319.00,62.46 L341.33,69.18 L375.33,82.83 L387.33,88.31 L399.33,95.73 L421.00,111.12 L440.14,127.00 L448.83,135.00 L460.67,147.19 L468.33,155.96 L479.33,169.97 L480.67,170.52 L482.10,169.67 L482.18,168.33 L479.73,163.67 L468.33,144.91 L459.03,132.00 L446.67,117.19 L434.16,104.33 L424.00,95.24 L410.33,84.45 L395.38,74.33 L378.50,64.67 L364.00,57.78 L346.33,50.85 L331.33,46.21 L316.00,42.50 L301.00,39.93 L273.67,40.00 L264.33,42.43 L259.00,43.13 L246.67,46.40 L237.00,49.40Z  M130.67,80.45 L109.00,97.24 L93.67,111.53 L72.12,136.67 L60.61,153.33 L53.97,164.33 L42.12,187.67 L35.97,202.67 L31.72,215.00 L25.57,238.00 L22.69,253.67 L21.22,264.67 L19.83,284.00 L19.86,299.67 L20.89,314.67 L23.02,331.00 L25.23,342.67 L29.74,360.33 L31.62,366.33 L32.67,367.78 L34.33,367.56 L35.08,366.00 L32.89,349.67 L31.86,336.00 L32.20,309.00 L34.26,288.33 L38.57,263.67 L42.98,245.67 L46.04,236.00 L55.21,216.00 L64.67,193.19 L74.31,175.00 L83.33,160.58 L92.66,147.67 L96.33,144.81 L109.00,131.14 L112.67,126.53 L131.49,107.67 L135.00,103.61 L153.00,88.45 L168.29,77.00 L180.00,69.06 L192.33,61.64 L207.67,53.27 L223.08,45.67 L223.92,44.67 L223.33,43.49 L219.00,42.98 L195.33,49.31 L177.67,55.60 L156.83,65.00 L144.67,71.83Z  M440.67,148.39 L448.67,159.78 L457.02,173.00 L464.40,186.00 L470.58,198.33 L479.38,219.67 L482.43,232.00 L484.41,242.33 L487.14,266.33 L487.50,274.33 L487.14,293.00 L486.07,305.00 L484.29,317.67 L482.42,322.00 L480.93,328.00 L474.88,343.67 L465.40,363.33 L458.44,375.67 L452.16,385.33 L443.79,397.33 L434.30,409.00 L432.71,411.67 L433.33,413.13 L435.33,413.01 L461.25,399.33 L463.00,399.34 L463.25,400.00 L462.76,401.00 L450.00,410.59 L439.33,417.51 L419.00,431.81 L410.00,437.40 L403.53,442.67 L398.10,450.00 L394.32,461.00 L391.38,468.00 L389.33,470.63 L386.00,471.77 L370.67,471.87 L365.33,472.77 L361.00,472.94 L357.33,473.86 L354.00,475.52 L334.24,488.67 L332.59,490.67 L332.73,492.67 L334.00,494.39 L340.77,500.00 L341.33,501.33 L340.67,502.12 L336.33,501.27 L320.33,495.02 L314.56,492.33 L311.95,490.00 L310.23,485.33 L307.38,468.33 L301.65,450.33 L299.33,446.76 L297.67,445.68 L295.67,445.20 L270.00,448.50 L266.75,451.33 L262.76,458.67 L260.43,464.00 L259.83,468.00 L259.89,480.33 L262.42,494.00 L263.33,496.02 L265.00,497.40 L267.00,497.82 L272.00,497.70 L273.33,498.45 L273.90,499.67 L273.31,501.67 L271.00,504.48 L268.33,506.58 L265.67,507.66 L254.67,507.80 L246.00,505.98 L241.00,505.94 L235.00,507.91 L227.00,513.05 L222.67,513.83 L218.67,513.69 L202.33,510.89 L194.67,510.69 L182.00,507.98 L176.00,507.73 L172.00,506.69 L164.33,503.40 L135.12,485.67 L133.34,483.67 L133.67,483.05 L134.67,483.07 L145.67,487.99 L146.67,487.71 L147.17,487.00 L146.40,484.67 L135.84,474.33 L129.00,466.53 L118.33,455.85 L100.31,441.67 L96.00,437.14 L87.67,427.30 L79.97,417.00 L73.23,406.67 L69.67,400.14 L60.28,377.00 L53.62,354.33 L50.37,339.33 L47.60,322.00 L45.53,301.33 L44.98,286.00 L44.00,284.06 L42.67,283.94 L41.60,284.67 L40.26,292.67 L38.86,306.67 L38.20,319.00 L38.17,331.00 L39.22,348.00 L42.10,368.00 L47.07,388.33 L53.31,406.00 L62.93,426.33 L69.64,438.00 L72.64,442.00 L81.67,452.47 L87.12,457.67 L90.54,462.00 L102.12,474.67 L108.26,482.67 L120.12,495.67 L128.67,506.14 L138.84,517.33 L147.67,525.59 L153.00,528.27 L174.67,535.40 L212.67,549.14 L219.00,550.57 L225.67,550.82 L231.33,549.89 L236.33,549.77 L251.33,546.89 L255.67,546.87 L257.67,547.33 L260.67,549.43 L268.70,560.67 L281.61,580.00 L282.74,582.67 L282.15,584.67 L280.33,585.65 L266.67,588.57 L261.33,589.24 L252.00,591.67 L247.00,592.13 L238.33,594.43 L233.00,595.10 L224.00,597.14 L221.59,598.33 L219.49,601.00 L218.86,604.00 L218.78,610.33 L217.86,615.67 L218.10,629.33 L228.93,659.67 L233.52,674.00 L238.69,687.33 L239.63,693.00 L239.04,694.67 L237.67,695.99 L228.33,699.12 L222.33,700.31 L212.00,703.92 L208.67,706.34 L204.78,712.50 L267.35,712.50 L267.00,712.23 L263.73,704.00 L260.43,693.67 L259.24,688.00 L257.22,683.00 L254.86,673.00 L254.93,670.00 L256.78,660.33 L256.93,654.00 L258.80,644.00 L258.77,637.33 L257.20,629.33 L258.00,627.49 L260.00,626.63 L266.33,627.77 L275.00,627.98 L291.33,630.77 L297.67,630.98 L301.00,632.13 L303.86,634.67 L305.54,637.67 L307.02,642.00 L308.43,648.67 L310.25,653.67 L311.43,659.67 L313.15,664.33 L316.38,676.33 L317.42,682.00 L319.24,687.00 L322.04,697.67 L323.43,704.67 L325.23,709.00 L325.42,711.67 L324.95,712.50 L356.52,712.50 L356.44,712.33 L357.25,710.67 L361.43,707.67 L363.67,706.65 L365.67,707.07 L366.98,708.67 L367.45,711.33 L366.96,712.50 L381.44,712.50 L381.18,712.33 L379.94,709.33 L379.78,704.33 L378.86,699.00 L378.78,690.33 L377.89,685.33 L377.72,679.67 L376.91,677.67 L375.33,676.68 L373.67,676.87 L359.33,684.15 L357.00,683.64 L355.67,681.17 L352.93,663.67 L352.78,655.33 L350.86,643.00 L349.83,627.00 L349.78,604.33 L344.56,576.67 L344.89,567.33 L345.78,562.33 L347.93,540.00 L349.14,534.00 L350.34,531.33 L352.01,529.33 L355.67,526.61 L397.33,500.61 L408.67,492.21 L417.14,485.00 L424.83,477.33 L433.21,467.67 L448.16,446.67 L460.61,428.00 L488.91,383.33 L495.69,366.67 L499.25,355.67 L502.54,343.67 L503.00,339.67 L505.74,327.67 L508.44,306.33 L509.47,293.67 L509.83,277.67 L509.14,263.33 L507.74,249.67 L506.20,240.00 L502.15,227.67 L497.36,215.33 L488.91,197.67 L483.33,187.96 L473.60,173.33 L464.00,160.96 L453.00,148.53 L442.67,138.18 L425.00,122.70 L421.00,119.61 L419.67,119.57 L418.88,120.67 L419.24,122.00 L430.36,135.00Z ",starsil:"M264.30,282.30 L364.38,221.69 L269.55,260.94Z M264.30,282.30 L364.38,221.69 L285.66,287.55Z M264.30,282.30 L324.91,382.38 L285.66,287.55Z M264.30,282.30 L324.91,382.38 L259.05,303.66Z M264.30,282.30 L164.22,342.91 L259.05,303.66Z M264.30,282.30 L164.22,342.91 L242.94,277.05Z M264.30,282.30 L203.69,182.22 L242.94,277.05Z M264.30,282.30 L203.69,182.22 L269.55,260.94Z M264.30,282.30 L300.80,133.72 L251.35,260.92Z M264.30,282.30 L300.80,133.72 L285.68,269.35Z M264.30,282.30 L412.88,318.80 L285.68,269.35Z M264.30,282.30 L412.88,318.80 L277.25,303.68Z M264.30,282.30 L227.80,430.88 L277.25,303.68Z M264.30,282.30 L227.80,430.88 L242.92,295.25Z M264.30,282.30 L115.72,245.80 L242.92,295.25Z M264.30,282.30 L115.72,245.80 L251.35,260.92Z",facets:[[264.3,282.3,364.38,221.69,269.55,260.94],[264.3,282.3,364.38,221.69,285.66,287.55],[264.3,282.3,324.91,382.38,285.66,287.55],[264.3,282.3,324.91,382.38,259.05,303.66],[264.3,282.3,164.22,342.91,259.05,303.66],[264.3,282.3,164.22,342.91,242.94,277.05],[264.3,282.3,203.69,182.22,242.94,277.05],[264.3,282.3,203.69,182.22,269.55,260.94],[264.3,282.3,300.8,133.72,251.35,260.92],[264.3,282.3,300.8,133.72,285.68,269.35],[264.3,282.3,412.88,318.8,285.68,269.35],[264.3,282.3,412.88,318.8,277.25,303.68],[264.3,282.3,227.8,430.88,277.25,303.68],[264.3,282.3,227.8,430.88,242.92,295.25],[264.3,282.3,115.72,245.8,242.92,295.25],[264.3,282.3,115.72,245.8,251.35,260.92]],plateScrews:[[267,51.35,1,21],[341.89,59.51,1,9],[409.66,93.65,1,36],[470.7,181.69,1,14],[496.71,249.5,1,6],[494.46,321.97,1,36],[468.2,388.13,1,83],[428.17,445.64,1,72],[373.88,491,1,69],[304.33,501.68,1,20],[233.45,528.7,1,48],[157.19,515.15,1,25],[103.69,459.12,1,16],[60.17,399.97,1,10],[26.5,298.4,1,19],[39.52,224.77,1,83],[71.35,158.03,1,75],[120.5,102.49,1,73],[296,560,.9,17],[355,690,.85,66]],letters:[{name:"H",d:"M-50.30,4.00 L25.74,4.00 L12.17,89.68 L105.39,89.68 L118.96,4.00 L195.00,4.00 L157.30,242.00 L81.26,242.00 L96.34,146.80 L3.12,146.80 L-11.96,242.00 L-88.00,242.00Z",red:!1,screws:[[-21.047927081794235,51.6],[-44.41913509608281,199.16],[150.66522516013805,51.6],[127.29401714584947,199.16]]},{name:"C",d:"M-73.87,272.85 L-71.97,266.16 L-68.51,259.93 L-63.74,254.57 L-57.97,250.46 L-51.59,247.88 L-45.05,247.00 L146.00,247.00 L135.58,312.80 L-6.03,312.80 L-19.80,399.75 L121.81,399.75 L108.78,482.00 L-82.28,482.00 L-88.53,481.12 L-94.09,478.54 L-98.56,474.43 L-101.64,469.07 L-103.12,462.84 L-102.91,456.15Z",red:!1,screws:[[-39.02722852312223,279.9],[-65.08146895650844,444.4],[104.82587582603378,279.9]]},{name:"M",d:"M-99.46,490.00 L-34.75,490.00 L-3.25,594.28 L61.28,490.00 L126.00,490.00 L88.46,727.00 L27.92,727.00 L49.69,589.54 L-1.02,672.49 L-30.25,672.49 L-54.69,589.54 L-76.46,727.00 L-137.00,727.00Z",red:!0,screws:[[-75.49141275265313,523.18],[-103.2688758967703,698.56],[91.518133649632,523.18],[63.740670505514835,698.56]]}],cardinals:[{ch:"N",d:"M321.24951171875 92.826171875 316.29345703125 92.08984375 316.66162109375 90.0224609375H330.17041015625L329.80224609375 92.08984375L324.78955078125 92.826171875L318.61572265625 128.0H315.35888671875L300.03759765625 96.5078125L294.91162109375 125.16796875L299.86767578125 125.9326171875L299.52783203125 128.0H286.01904296875L286.35888671875 125.9326171875L291.37158203125 125.16796875L297.06396484375 92.826171875L292.33447265625 92.08984375L292.70263671875 90.0224609375H304.96533203125L317.28466796875 115.3408203125Z",color:"red"},{ch:"W",d:"M96.40966796875 256.2568359375H94.11474609375L90.25732421875 235.5537109375L80.44287109375 256.2568359375H77.97705078125L73.38720703125 225.177734375L70.21337890625 224.54296875L70.53076171875 222.7607421875H84.30029296875L83.98291015625 224.54296875L80.02783203125 225.177734375L82.61572265625 245.05078125L92.30810546875 224.8115234375H94.74951171875L98.46044921875 245.1728515625L107.29833984375 225.177734375L103.29443359375 224.54296875L103.61181640625 222.7607421875H114.15869140625L113.84130859375 224.54296875L110.86279296875 225.177734375Z",color:"dark"},{ch:"E",d:"M424.58203125 311.603515625 420.8310546875 311.01953125 421.123046875 309.3798828125H444.751953125L443.404296875 317.0390625H441.3603515625L441.4951171875 312.1650390625Q439.046875 311.8505859375 434.28515625 311.8505859375H431.185546875L429.2314453125 322.9013671875H435.54296875L436.8232421875 319.5771484375H438.822265625L437.1826171875 328.8310546875H435.18359375L435.09375 325.4169921875H428.7822265625L426.73828125 337.029296875H430.8486328125Q436.53125 337.029296875 438.4404296875 336.669921875L440.75390625 331.099609375H442.7978515625L440.9111328125 339.5H415.822265625L416.091796875 337.8603515625L420.0673828125 337.25390625Z",color:"dark"},{ch:"S",d:"M217.18017578125 474.91015625Q212.72998046875 474.91015625 209.07958984375 473.4541015625L210.39208984375 466.0712890625H212.19677734375L212.21728515625 470.48046875Q212.91455078125 471.4853515625 214.39111328125 472.162109375Q215.86767578125 472.8388671875 217.52880859375 472.8388671875Q220.52294921875 472.8388671875 222.14306640625 471.587890625Q223.76318359375 470.3369140625 223.76318359375 468.1220703125Q223.76318359375 467.0146484375 223.27099609375 466.1943359375Q222.77880859375 465.3740234375 221.96875 464.70751953125Q221.15869140625 464.041015625 220.13330078125 463.45654296875Q219.10791015625 462.8720703125 218.03125 462.26708984375Q216.95458984375 461.662109375 215.92919921875 460.95458984375Q214.90380859375 460.2470703125 214.09375 459.32421875Q213.28369140625 458.4013671875 212.79150390625 457.2119140625Q212.29931640625 456.0224609375 212.29931640625 454.4228515625Q212.29931640625 450.6494140625 215.037109375 448.67041015625Q217.77490234375 446.69140625 223.02490234375 446.69140625Q226.53173828125 446.69140625 229.91552734375 447.5732421875L228.76708984375 454.115234375H226.94189453125L226.79833984375 450.095703125Q225.13720703125 448.82421875 222.47119140625 448.82421875Q220.15380859375 448.82421875 218.8310546875 449.8291015625Q217.50830078125 450.833984375 217.50830078125 452.5771484375Q217.50830078125 453.8076171875 218.400390625 454.84326171875Q219.29248046875 455.87890625 221.17919921875 456.9248046875Q223.92724609375 458.462890625 225.1474609375 459.27294921875Q226.36767578125 460.0830078125 227.20849609375 461.005859375Q228.04931640625 461.9287109375 228.5517578125 463.09765625Q229.05419921875 464.2666015625 229.05419921875 465.8251953125Q229.05419921875 470.2548828125 226.0087890625 472.58251953125Q222.96337890625 474.91015625 217.18017578125 474.91015625Z",color:"dark"}],center:[264.3,282.3]},t=document.getElementById("hero3d"),e=Math.min(innerWidth,innerHeight)<700,n=e?1024:2048,s=new Er({antialias:!0,alpha:!0});s.setClearColor(0,0),s.setPixelRatio(Math.min(devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Za,s.toneMapping=$a,s.toneMappingExposure=.95,s.outputColorSpace=Ae,t.appendChild(s.domElement);let r=new Hi,o=new ki(s);r.environment=o.fromScene(new Gr,.04).texture,r.environmentIntensity=.95;let l=a(7),h=new ge({color:14212062,metalness:1,roughness:.3,roughnessMap:l,bumpMap:l,bumpScale:.35,anisotropy:.7}),d=new ge({color:8160138,metalness:1,roughness:.42}),u=new ge({color:15133164,metalness:1,roughness:.12}),m=new ge({color:2830390,metalness:.9,roughness:.28}),g=new ge({color:10359324,metalness:.35,roughness:.36,clearcoat:1,clearcoatRoughness:.12,bumpMap:l,bumpScale:.15}),y=new ge({color:5900816,metalness:.4,roughness:.4,clearcoat:.6}),p=new ge({color:1382170,metalness:.5,roughness:.32,clearcoat:.7}),f=new ge({color:14672613,metalness:1,roughness:.2}),A=new Rn({color:1118998,metalness:.6,roughness:.5}),_=new ge({color:12107202,metalness:1,roughness:.25}),S=x(11,"#a9aeb3",!1),G=x(23,"#9b2129",!0,["rgba(60,8,10,","rgba(150,40,40,"]),$=x(37,"#26292d",!0,["rgba(5,6,8,","rgba(70,74,80,"]);h.setValues({color:16777215,map:S.map,roughness:1,roughnessMap:S.roughnessMap,bumpMap:S.bumpMap,bumpScale:.6,metalness:1,anisotropy:.3}),h.needsUpdate=!0,g.setValues({color:16777215,map:G.map,metalness:1,metalnessMap:G.metalnessMap,roughness:1,roughnessMap:G.roughnessMap,bumpMap:G.bumpMap,bumpScale:.8,clearcoat:.25,clearcoatRoughness:.5}),g.needsUpdate=!0,p.setValues({color:16777215,map:$.map,metalness:1,metalnessMap:$.metalnessMap,roughness:1,roughnessMap:$.roughnessMap,bumpMap:$.bumpMap,bumpScale:.6,clearcoat:0}),p.needsUpdate=!0,m.setValues({map:$.map,roughness:1,roughnessMap:S.roughnessMap,bumpMap:S.bumpMap,bumpScale:.5}),m.needsUpdate=!0,u.setValues({roughness:.22,bumpMap:S.bumpMap,bumpScale:.25}),u.needsUpdate=!0,f.setValues({color:10133412,roughness:.45}),f.needsUpdate=!0;let Q=new ge({color:9278619,metalness:1,roughness:.42,roughnessMap:l,bumpMap:l,bumpScale:.25}),dt=h.clone();dt.color.set(13817562),dt.roughnessMap=null,dt.roughness=.38;let J=x(53,"#3d4044",!1),ot=new ge({color:16777215,map:J.map,metalness:1,roughness:1,roughnessMap:J.roughnessMap,bumpMap:J.bumpMap,bumpScale:.6}),k=new ge({color:9080725,map:J.map,metalness:1,roughness:.55,bumpMap:J.bumpMap,bumpScale:.5});h.roughness=.62,h.needsUpdate=!0,ot.roughness=.6,ot.clearcoat=.35,ot.clearcoatRoughness=.25,ot.needsUpdate=!0,k.roughness=.35,k.needsUpdate=!0,g.roughness=.65,g.clearcoat=.7,g.clearcoatRoughness=.18,g.needsUpdate=!0,p.roughness=.6,p.clearcoat=.5,p.needsUpdate=!0,u.roughness=.12,u.needsUpdate=!0,s.toneMappingExposure=.95,r.environmentIntensity=.95;let St=new An,Mt=[],Et=L=>{for(let I of M(L))for(let V of I.getPoints(4))Mt.push(V)};i.letters.forEach(L=>Et(L.d)),Et(i.plate);let Gt=Mt.map(L=>L.x),Jt=Mt.map(L=>L.y),N=Math.min(...Gt),U=Math.max(...Gt),R=Math.min(...Jt),b=Math.max(...Jt),it=U-N,ft=b-R,X=it/2;window.__dims={LX:it,LY:ft,DZ:X,X0:N,X1:U,Y0:R,Y1:b};let gt=0,j=.55*X,w=6,Y=.85*X,et=0,st=.45*X,at=.48*X,z=.7*X,C=X,E=.47*X,v=.64*X;for(let L of i.letters){O(L.d,gt,j-gt,L.red?[g,g]:[ot,k],"evenodd",2.4);for(let[I,V]of L.screws)P(I,V,j,1.1,20)}O(i.plate,w,Y-w,[h,dt],"evenodd",2.2);{let[L,I]=i.center,V=[];i.facets.forEach(_t=>{let mt=Math.hypot(_t[2]-L,_t[3]-I);V.some(yt=>Math.hypot(yt[0]-_t[2],yt[1]-_t[3])<1)||V.push([_t[2],_t[3],mt])}),V.sort((_t,mt)=>mt[2]-_t[2]);let H=4.2,tt=.5*X,Z=.62*X;for(let[_t,mt,yt]of V.slice(0,4)){let Ct=(_t-L)/yt,Bt=(mt-I)/yt,Ft=-Bt,ne=Ct,zt=yt*.55,It=236,ce=[[L+Ct*zt+Ft*H,I+Bt*zt+ne*H],[L+Ct*It+Ft*H,I+Bt*It+ne*H],[L+Ct*It-Ft*H,I+Bt*It-ne*H],[L+Ct*zt-Ft*H,I+Bt*zt-ne*H]],Dt=new Ze(ce.map(([Yt,ie])=>new ht(Yt,-ie))),Vt=new Gi(Dt,{depth:Z-tt-2,bevelEnabled:!0,bevelThickness:1,bevelSize:.8,bevelSegments:2});Vt.translate(0,0,tt+1);let qt=new jt(Vt,[h,dt]);qt.castShadow=qt.receiveShadow=!0,r.add(qt)}}i.plateScrews.forEach(([L,I,V,H])=>P(L,I,Y,V*1.1,H)),O(i.starsil,at,z-at,[m,m],"nonzero",1.2);let[K,ct]=i.center,pt=[],ut=[];i.facets.forEach((L,I)=>{let[V,H,tt,Z,_t,mt]=L;(I%2===0?pt:ut).push(V,-H,C,tt,-Z,z,_t,-mt,z)});for(let[L,I]of[[pt,u],[ut,m]]){let V=new Ce;V.setAttribute("position",new se(L,3));let H=V.attributes.position.array;for(let Z=0;Z<H.length;Z+=9){let _t=H[Z+3]-H[Z],mt=H[Z+4]-H[Z+1],yt=H[Z+6]-H[Z],Ct=H[Z+7]-H[Z+1];if(_t*Ct-mt*yt<0)for(let Bt=0;Bt<3;Bt++){let Ft=H[Z+3+Bt];H[Z+3+Bt]=H[Z+6+Bt],H[Z+6+Bt]=Ft}}V.computeVertexNormals();let tt=new jt(V,I);tt.castShadow=tt.receiveShadow=!0,r.add(tt)}let Nt=new jt(new rn(10,10,6,6),u);Nt.rotation.x=Math.PI/2,Nt.position.set(K,-ct,C+1),Nt.castShadow=!0,r.add(Nt);let wt=new jt(new Es(4.5,20,10),u);wt.position.set(K,-ct,C+4),r.add(wt);for(let L of i.cardinals)O(L.d,E,v-E,L.color==="red"||L.ch==="W"?[g,g]:[p,p],"nonzero",1);let Pt=110,Tt=(L,I,V)=>new B(L,I,V),vt=e?512:1024,kt=Rt(256,(L,I)=>{L.fillStyle="#7a7a7a",L.fillRect(0,0,I,I);for(let V=-I;V<2*I;V+=16)L.strokeStyle="#2b2b2b",L.lineWidth=3,L.beginPath(),L.moveTo(V,0),L.lineTo(V+I*.6,I),L.stroke(),L.strokeStyle="#d8d8d8",L.lineWidth=2,L.beginPath(),L.moveTo(V+7,0),L.lineTo(V+7+I*.6,I),L.stroke()}),Ht=Rt(256,(L,I)=>{L.fillStyle="#9da2a7",L.fillRect(0,0,I,I);let V=7,H=()=>(V=V*16807%2147483647)/2147483647;for(let tt=0;tt<400;tt++){let Z=60+H()*120;L.fillStyle=`rgba(${Z},${Z-4},${Z-10},${.15+H()*.3})`,L.fillRect(H()*I,H()*I,2+H()*10,1+H()*3)}for(let tt=0;tt<60;tt++)L.fillStyle=`rgba(40,32,22,${.2+H()*.3})`,L.beginPath(),L.arc(H()*I,H()*I,2+H()*8,0,7),L.fill()});Ht.colorSpace=Ae;let Ot=new ge({map:Ht,metalness:1,roughness:.42,bumpMap:kt,bumpScale:1.4}),Qt=new Rn({color:2894375,roughness:.8,metalness:.2}),Xt=Rt(vt,(L,I)=>{L.fillStyle="#b9bdc1",L.fillRect(0,0,I,I);let V=31,H=()=>(V=V*16807%2147483647)/2147483647;for(let tt=0;tt<900;tt++){let Z=150+H()*90,_t=6+H()*40;L.fillStyle=`rgba(${Z},${Z+2},${Z+4},${.25+H()*.4})`,L.fillRect(H()*I,H()*I,_t,_t*(.4+H()))}for(let tt=0;tt<160;tt++){let Z=H()*I,_t=H()*I,mt=3+H()*22,yt=L.createRadialGradient(Z,_t,0,Z,_t,mt);yt.addColorStop(0,`rgba(120,64,28,${.35+H()*.4})`),yt.addColorStop(1,"rgba(120,64,28,0)"),L.fillStyle=yt,L.fillRect(Z-mt,_t-mt,2*mt,2*mt)}for(let tt=0;tt<260;tt++){L.strokeStyle=`rgba(240,242,244,${.2+H()*.4})`,L.lineWidth=.6+H();let Z=H()*I,_t=H()*I,mt=H()*6.28,yt=5+H()*40;L.beginPath(),L.moveTo(Z,_t),L.lineTo(Z+Math.cos(mt)*yt,_t+Math.sin(mt)*yt),L.stroke()}});Xt.colorSpace=Ae;let re=Rt(vt,(L,I)=>{L.fillStyle="#6e6e6e",L.fillRect(0,0,I,I);let V=9,H=()=>(V=V*16807%2147483647)/2147483647;for(let tt=0;tt<1500;tt++){let Z=60+H()*140;L.fillStyle=`rgba(${Z},${Z},${Z},0.5)`,L.fillRect(H()*I,H()*I,4+H()*30,4+H()*20)}}),W=new ge({map:Xt,metalness:1,roughness:1,roughnessMap:re,bumpMap:re,bumpScale:.6}),Ut=new ge({color:16777215,map:G.map,metalness:.4,roughness:.55,bumpMap:G.bumpMap,bumpScale:.5,clearcoat:.3}),lt=new ge({color:13225166,map:Xt,metalness:1,roughness:.5,bumpMap:re,bumpScale:.4}),xt=new ge({color:5985099,metalness:.8,roughness:.75,bumpMap:S.bumpMap,bumpScale:1.2}),bt=new B((N+U)/2,556,X/2),Lt=7.8;{let L=[264.8,284.9],I=245,V=Math.acos((430-L[0])/I),H=[L[0]+I*Math.cos(V),-(L[1]-I*Math.sin(V))],tt=Tt(Math.cos(V),Math.sin(V),0),Z=[ve(Tt(-12,-4,.14*X),Tt(0,1,0),bt),ve(Tt(-12,-4,.44*X),Tt(0,1,0),bt),ve(Tt(H[0]-3,H[1]-3,.14*X),tt,bt),ve(Tt(H[0]-3,H[1]-3,.74*X),tt,bt)];for(let _t of Z){let mt=bt.clone().add(new B().subVectors(_t.top,bt).setY(0).setLength(14)).add(Tt(0,-40,0));Je(_t,mt)}}let hi=new ge({color:14263572,map:S.map,metalness:.35,roughness:.55,bumpMap:S.bumpMap,bumpScale:.6,clearcoat:.25});{let L=Zt(new Wi(34,11,18,48),W);L.position.copy(bt).add(Tt(0,-6,0)),L.scale.set(.75,1.35,1);let I=[Tt(0,40,0),Tt(0,10,0),Tt(-4,-20,0),Tt(10,-48,0),Tt(36,-52,0),Tt(52,-32,0),Tt(50,-10,0)];he(I.map(mt=>mt.clone().add(bt).add(Tt(-24,52,0))),13,hi,!1,80,16).position.set(0,0,0),Zt(new rn(15,15,46,20),W).position.copy(bt).add(Tt(-24,112,0)),Zt(new rn(24,24,18,6),W).position.copy(bt).add(Tt(-24,140,0));let Z=new sn(110,150,60,1,1,1);Zt(Z,hi).position.copy(bt).add(Tt(-24,225,0));for(let mt of[-34,34]){let yt=Zt(new rn(62,62,8,40),hi);yt.rotation.x=Math.PI/2,yt.position.copy(bt).add(Tt(-24,250,mt))}for(let mt of[-36,36])Re(bt.clone().add(Tt(-24+mt,300,0)),bt.clone().add(Tt(-24+mt,4300,0)),10)}let Hn=new hn;Hn.position.copy(bt);for(let L of[...r.children])(L.isMesh||L.isGroup)&&(L.position.sub(bt),Hn.add(L));r.add(Hn);let Me=new B((N+U)/2,(R+b)/2,X/2);r.add(new Ur(16777215,9407880,.35));let ke=new Yi(16774374,3);ke.position.set(Me.x-700,Me.y+1100,X+900),ke.target.position.copy(Me),ke.castShadow=!0,ke.shadow.mapSize.set(2048,2048),Object.assign(ke.shadow.camera,{left:-700,right:700,top:900,bottom:-700,near:100,far:4e3}),ke.shadow.bias=-4e-4,ke.shadow.normalBias=.6,r.add(ke,ke.target);let Ji=new Yi(14674175,1.4);Ji.position.set(Me.x+900,Me.y+500,-700),r.add(Ji);let Ki=new Yi(16777215,.6);Ki.position.set(Me.x+800,Me.y+200,X+900),r.add(Ki);let an=new Ie(30,1,150,2e4),hero=document.getElementById("inicio"),camDir=new B(.34,.12,.93).normalize(),
frame=()=>{let w=t.clientWidth,h=t.clientHeight;if(!w||!h)return;s.setSize(w,h,!1);let mob=w<700,S=mob?.34:.56,F=mob?.5:.225,V=mob?.25:.5;an.aspect=w/h;let d=ft/S/2/Math.tan(Cs.degToRad(an.fov/2));an.position.copy(Me).addScaledVector(camDir,d);an.lookAt(Me);an.setViewOffset(w,h,(.5-F)*w,(.5-V)*h,w,h);an.updateProjectionMatrix()},
reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,ang=.6,tt0=0,last=performance.now(),vis=!0,raf=0,
pose=()=>Hn.rotation.set(.01*Math.sin(tt0*.55+1.2),ang,.014*Math.sin(tt0*.8)),
loop=now=>{let dt=Math.min((now-last)/1e3,.05);last=now;ang+=dt*.32;tt0+=dt;pose();s.render(r,an);raf=vis&&!reduce?requestAnimationFrame(loop):0};
frame();pose();s.render(r,an);hero.classList.add("has-3d");
requestAnimationFrame(()=>requestAnimationFrame(()=>dispatchEvent(new Event("hero3d-ready"))));
new ResizeObserver(()=>{frame();s.render(r,an)}).observe(t);
new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis&&!raf&&!reduce){last=performance.now();raf=requestAnimationFrame(loop)}}).observe(hero);
if(!reduce)raf=requestAnimationFrame(loop)}catch(i){console.error(i)}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

