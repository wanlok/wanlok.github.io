"use strict";(self.webpackChunkwanlok_component_react=self.webpackChunkwanlok_component_react||[]).push([[5840],{45840:(e,t,i)=>{i.r(t),i.d(t,{CIMSymbolRasterizer:()=>g});var s=i(85504),r=i(16770);class n{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let s=this._inFlightResourceMap.get(e);return s?s.then((e=>({width:e.width,height:e.height}))):(s=(0,r.M5)(e,t),this._inFlightResourceMap.set(e,s),s.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,s.Al)(e)}}var h=i(16355),a=i(67855),l=i(48988),o=i(97763);const c=96/72;class g{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new n}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,s,r,n,h,c,g){if(!e)return null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:w}=d;n||(n=(0,o.n5)(w));const y=await l.$.resolveSymbolOverrides(d,t,this._spatialReference,r,n,h,c),m=this._cimResourceManager,p=[];a.wp.fetchResources(y,m,p),a.wp.fetchFonts(y,m,p),p.length>0&&await Promise.all(p);const{width:M,height:_}=i,R=u(n,M,_,s),b=a.wp.getEnvelope(y,R,m);if(!b)return null;let v=1,f=0,C=0;switch(w.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;b.width>M&&(e=M/b.width);let t=1;b.height>_&&(t=_/b.height),"preview"===s&&(b.width<M&&(e=M/b.width),b.height<_&&(t=_/b.height)),v=Math.min(e,t),f=b.x+b.width/2,C=b.y+b.height/2}break;case"CIMLineSymbol":{(g||b.height>_)&&(v=_/b.height),C=b.y+b.height/2;const e=b.x*v+M/2,t=(b.x+b.width)*v+M/2,{paths:i}=R;i[0][0][0]-=e/v,i[0][2][0]-=(t-M)/v}break;case"CIMPolygonSymbol":{f=b.x+b.width/2,C=b.y+b.height/2;const e=b.x*v+M/2,t=(b.x+b.width)*v+M/2,i=b.y*v+_/2,s=(b.y+b.height)*v+_/2,{rings:r}=R;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),i<0&&(r[0][0][1]+=i,r[0][1][1]+=i,r[0][4][1]+=i),t>M&&(r[0][1][0]-=t-M,r[0][2][0]-=t-M),s>_&&(r[0][2][1]+=s-_,r[0][3][1]+=s-_)}}const I={type:"cim",data:{type:"CIMSymbolReference",symbol:y}};return this.rasterize(I,M,_,f,C,v,n,1,R)}rasterize(e,t,i,s,r,n,a){let l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:w}=d,y=this._canvas,m=(window.devicePixelRatio||1)*c;y.width=t*m,y.height=i*m,a||(a=(0,o.n5)(w)),g||(g=u(a,t,i,"legend")),y.width+=2*l,y.height+=2*l;const p=y.getContext("2d",{willReadFrequently:!0}),M=h.IT.createIdentity();return M.translate(-s,-r),M.scale(n*m,-n*m),M.translate(t*m/2+l,i*m/2+l),p.clearRect(0,0,y.width,y.height),new h.Rj(p,this._cimResourceManager,M,!0).drawSymbol(w,g),p.getImageData(0,0,y.width,y.height)}}function u(e,t,i,s){const r=-t/2+1,n=t/2-1,h=i/2-1,a=-i/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[r,0],[0,0],[n,0]]]};default:return"legend"===s?{rings:[[[r,h],[n,0],[n,a],[r,a],[r,h]]]}:{rings:[[[r,h],[n,h],[n,a],[r,a],[r,h]]]}}}}}]);
//# sourceMappingURL=5840.231c5558.chunk.js.map