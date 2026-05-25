import{$l as e,AD as t,BD as n,Cn as r,Fy as i,Gc as a,HD as o,Ht as s,Hy as c,It as l,Lt as u,MD as d,PD as f,Pt as p,Ry as m,Sn as h,TC as g,Tn as _,Uc as v,Wc as y,ZE as b,_l as x,an as S,ao as C,cl as w,dO as T,dl as E,dn as D,fn as ee,gn as te,hl as O,hn as ne,jD as k,ju as A,kS as re,lE as ie,ll as j,mn as M,nk as N,on as ae,oo as oe,pO as P,pl as F,pn as se,qc as ce,rk as I,sO as le,sl as L,tD as R,ta as ue,ui as z,ul as de,vO as fe,vn as pe,wn as me,yE as B,yn as V,zt as H}from"./index-fyglqEWe.js";import{t as he}from"./pbf-C0cyibJb.js";import{t as U}from"./StyleRepository-DAMHKFLP.js";import{t as ge}from"./constants-BfrzA7Ij.js";import{t as _e}from"./vec4f32-WmpS_e84.js";import{t as ve}from"./LayerView3D-CbFCBHmH.js";import{t as ye}from"./LayerView-DarmSEby.js";import{t as be}from"./TiledLayerView3D-DLLuLDAu.js";var xe=class{constructor(e,t,n){this._scale=e,this._shift=t,this._levelShift=n}getLevelRowColumn(e){let t=this.getLevelShift(e[0]),n=this._shift+t;return n?[e[0]-t,e[1]>>n,e[2]>>n]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,t){let n=0,r=0,i=this._shift+this.getLevelShift(e[0]);if(i){let a=(1<<i)-1,o=t/(this._scale*(1<<i-1));n=(e[2]&a)*o,r=(e[1]&a)*o}return[n,r]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}},W=class{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new z(0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new z;let n=null,r=-1;for(let i=0;i<this._free.length;++i){let a=this._free[i];e<=a.width&&t<=a.height&&(n===null||a.y<=n.y&&a.x<=n.x)&&(n=a,r=i)}return n===null?new z:(this._free.splice(r,1),n.width<n.height?(n.width>e&&this._free.push(new z(n.x+e,n.y,n.width-e,t)),n.height>t&&this._free.push(new z(n.x,n.y+t,n.width,n.height-t))):(n.width>e&&this._free.push(new z(n.x+e,n.y,n.width-e,n.height)),n.height>t&&this._free.push(new z(n.x,n.y+t,e,n.height-t))),new z(n.x,n.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){let n=this._free[t];if(n.y===e.y&&n.height===e.height&&n.x+n.width===e.x)n.width+=e.width;else if(n.x===e.x&&n.width===e.width&&n.y+n.height===e.y)n.height+=e.height;else if(e.y===n.y&&e.height===n.height&&e.x+e.width===n.x)n.x=e.x,n.width+=e.width;else{if(e.x!==n.x||e.width!==n.width||e.y+e.height!==n.y)continue;n.y=e.y,n.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}},G=class{constructor(e,t,n){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=n,this._binPack=new W(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,t){let n=[],r=this._glyphSource,i=new Set;for(let e of t){let t=Math.floor(e*.00390625);i.add(t)}let a=[];return i.forEach((t=>{let n=e+t;if(this._rangePromises.has(n))a.push(this._rangePromises.get(n));else{let i=r.getRange(e,t).then((()=>{this._rangePromises.delete(n)}),(()=>{this._rangePromises.delete(n)}));this._rangePromises.set(n,i),a.push(i)}})),Promise.all(a).then((()=>{let i=this._glyphIndex[e];i||(i={},this._glyphIndex[e]=i);for(let a of t){let t=i[a];if(t){n[a]={sdf:!0,rect:t.rect,metrics:t.metrics,page:t.page,code:a};continue}let o=r.getGlyph(e,a);if(!o?.metrics)continue;let s=o.metrics,c;if(s.width===0)c=new z(0,0,0,0);else{let e=s.width+6,t=s.height+6,n=e%4?4-e%4:4,r=t%4?4-t%4:4;n===1&&(n=5),r===1&&(r=5),c=this._binPack.allocate(e+n,t+r),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new W(this.width-4,this.height-4),c=this._binPack.allocate(e+n,t+r));let i=this._glyphData[this._currentPage],a=o.bitmap,l,u;if(a)for(let n=0;n<t;n++){l=e*n,u=this.width*(c.y+n+1)+c.x;for(let t=0;t<e;t++)i[u+t+1]=a.at(l+t)}}i[a]={rect:c,metrics:s,tileIDs:null,page:this._currentPage},n[a]={sdf:!0,rect:c,metrics:s,page:this._currentPage,code:a},this._dirties[this._currentPage]=!0}return n}))}removeGlyphs(e){for(let t in this._glyphIndex){let n=this._glyphIndex[t];if(!n)continue;let r;for(let t in n)if(r=n[t],r.tileIDs.delete(e),r.tileIDs.size===0){let e=this._glyphData[r.page],i=r.rect,a,o;for(let t=0;t<i.height;t++)for(a=this.width*(i.y+t)+i.x,o=0;o<i.width;o++)e[a+o]=0;delete n[t],this._dirties[r.page]=!0}}}bind(e,t,n,r=0){if(!this._textures[n]){let t=new y;t.pixelFormat=E.ALPHA,t.wrapMode=w.CLAMP_TO_EDGE,t.width=this.width,t.height=this.height,this._textures[n]=new v(e,t,new Uint8Array(this.width*this.height))}let i=this._textures[n];i.setSamplingMode(t),this._dirties[n]&&i.setData(this._glyphData[n]),e.bindTexture(i,r),this._dirties[n]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(let e of this._textures)e&&e.dispose();this._textures.length=0}},K=class{constructor(e){if(this._metrics=[],!e)return void(this._allBitmaps=null);let t=new Map,n=0;for(;e.next();)switch(e.tag()){case 1:{let r=e.getMessage();for(;r.next();)switch(r.tag()){case 3:{let e=r.getMessage(),i,a,o,s,c,l,u;for(;e.next();)switch(e.tag()){case 1:i=e.getUInt32();break;case 2:a=e.getBytes();break;case 3:o=e.getUInt32();break;case 4:s=e.getUInt32();break;case 5:c=e.getSInt32();break;case 6:l=e.getSInt32();break;case 7:u=e.getUInt32();break;default:e.skip()}if(e.release(),i){let e=a?.length??0;this._metrics[i]={width:o,height:s,left:c,top:l,advance:u,startOffset:n,length:e},t.set(i,a),n+=e}break}default:r.skip()}r.release();break}default:e.skip()}let r=new Uint8Array(n),i=this._metrics;for(let[e,n]of t){let{startOffset:t,length:a}=i[e];if(n)for(let e=0;e<a;++e)r[t+e]=n[e]}this._allBitmaps=r}getMetrics(e){return this._metrics[e]}getBitmap(e){if(!this._allBitmaps)return;let t=this._metrics[e];if(t===void 0)return;let{startOffset:n,length:r}=t;return r===0?void 0:new Ce(this._allBitmaps,n,r)}},Se=class{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}},q=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t){let n=this._getFontStack(e);if(n.getRange(t))return Promise.resolve();let r=256*t,i=r+255;return this._baseURL?ie(this._baseURL.replace(`{fontstack}`,e).replace(`{range}`,r+`-`+i),{responseType:`array-buffer`}).then((e=>{n.addRange(t,new K(new he(new Uint8Array(e.data),new DataView(e.data))))})).catch((()=>{n.addRange(t,new K)})):(n.addRange(t,new K),Promise.resolve())}getGlyph(e,t){let n=this._getFontStack(e);if(!n)return;let r=Math.floor(t/256),i=n.getRange(r);return i?{metrics:i.getMetrics(t),bitmap:i.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e];return t||=this._glyphInfo[e]=new Se,t}},Ce=class{constructor(e,t,n){this._array=e,this._start=t,this.length=n}at(e){return 0<=e&&e<this.length?this._array[this._start+e]:void 0}};function we(e,t){let n=t===`Butt`,r=t===`Square`,i=!n&&!r;e.length%2==1&&(e=[...e,...e]);let a=ge,o=2*a,s=0;for(let t of e)s+=t;let c=Math.round(s*a),l=new Float32Array(c*o),u=.5*a,d=0,f=0,p=.5,m=!0;for(let t of e){for(d=f,f+=t*a;p<=f;){let e=.5;for(;e<o;){let t=(e-.5)*c+p-.5,o=i?(e-a)*(e-a):Math.abs(e-a);l[t]=m?n?Math.max(Math.max(d+u-p,o),Math.max(p-f+u,o)):o:i?Math.min((p-d)*(p-d)+o,(p-f)*(p-f)+o):r?Math.min(Math.max(p-d,o),Math.max(f-p,o)):Math.min(Math.max(p-d+u,o),Math.max(f+u-p,o)),e++}p++}m=!m}let h=l.length,g=new Uint8Array(4*h);for(let e=0;e<h;++e)ue((i?Math.sqrt(l[e]):l[e])/a,g,4*e);return[g,c,o]}var Te=`dasharray-`,J=class e{constructor(e,t,n=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||t<=0)&&console.error(`Sprites mosaic defaultWidth and defaultHeight must be greater than zero!`),this._pageWidth=e,this._pageHeight=t,n>0&&(this._maxItemSize=n),this._binPack=new W(e-4,t-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(let e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new W(this._pageWidth-4,this._pageHeight-4);let e=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(e*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,t=!1){let n,r,i=this._mosaicRects[e];if(i)return i;if(!this._sprites||this._sprites.loadStatus!==`loaded`||(e&&e.startsWith(Te)?([n,r]=this._rasterizeDash(e),t=!0):n=this._sprites.getSpriteInfo(e),!n?.width||!n.height||n.width<0||n.height<0))return null;let a=n.width,o=n.height,[s,c,l]=this._allocateImage(a,o);return s.width<=0?null:(this._copy(s,n,c,l,t,r),i={type:`sprite`,rect:s,width:a,height:o,sdf:n.sdf,simplePattern:!1,rasterizationScale:n.pixelRatio,page:c},this._mosaicRects[e]=i,i)}getSpriteItems(e){let t={};for(let n of e)t[n.name]=this.getSpriteItem(n.name,n.repeat);return t}getMosaicItemPosition(e,t){let n=this.getSpriteItem(e,t),r=n&&n.rect;if(!r)return null;r.width=n.width,r.height=n.height;let i=n.width,a=n.height;return{tl:[r.x+2,r.y+2],br:[r.x+2+i,r.y+2+a],page:n.page}}bind(e,t,n=0,r=0){if(n>=this._size.length||n>=this._mosaicsData.length)return;if(!this._textures[n]){let t=new y;t.wrapMode=w.CLAMP_TO_EDGE,t.width=this._size[n][0],t.height=this._size[n][1],this._textures[n]=new v(e,t,new Uint8Array(this._mosaicsData[n].buffer))}let i=this._textures[n];i.setSamplingMode(t),this._dirties[n]&&i.setData(new Uint8Array(this._mosaicsData[n].buffer)),e.bindTexture(i,r),this._dirties[n]=!1}static _copyBits(e,t,n,r,i,a,o,s,c,l,u){let d=r*t+n,f=s*a+o;if(u){f-=a;for(let o=-1;o<=l;o++,d=((o+l)%l+r)*t+n,f+=a)for(let t=-1;t<=c;t++)i[f+t]=e[d+(t+c)%c]}else for(let n=0;n<l;n++){for(let t=0;t<c;t++)i[f+t]=e[d+t];d+=t,f+=a}}_copy(t,n,r,i,a,o){if(!this._sprites||this._sprites.loadStatus!==`loaded`||r>=this._mosaicsData.length)return;let s=new Uint32Array(o?o.buffer:this._sprites.image.buffer),c=this._mosaicsData[r];c&&s||console.error(`Source or target images are uninitialized!`);let l=o?n.width:this._sprites.width;e._copyBits(s,l,n.x,n.y,c,i[0],t.x+2,t.y+2,n.width,n.height,a),this._dirties[r]=!0}_allocateImage(e,t){e+=2,t+=2;let n=Math.max(e,t);if(this._maxItemSize&&this._maxItemSize<n){let n=new z(0,0,e,t);return this._mosaicsData.push(new Uint32Array(e*t)),this._dirties.push(!0),this._size.push([e,t]),this._textures.push(void 0),[n,this._mosaicsData.length-1,[e,t]]}let r=e%4?4-e%4:4,i=t%4?4-t%4:4;r===1&&(r=5),i===1&&(i=5);let a=this._binPack.allocate(e+r,t+i);return a.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new W(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,t)):[a,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){let t=e.match(/\[(.*?)\]/);if(!t)return null;let[n,r,i]=we(t[1].split(`,`).map(Number),e.slice(e.lastIndexOf(`-`)+1));return[{x:0,y:0,width:r,height:i,sdf:!0,pixelRatio:1},new Uint8Array(n.buffer)]}},Ee=class{constructor(e,t,n,r){this._layer=e,this._styleRepository=t,this.devicePixelRatio=n,this._sourceDataMaxLOD=r,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic?.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=le(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener(`abort`,this._inputSignalEventListener),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then((()=>this._spriteMosaic))}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);let t=this._layer.currentStyleInfo.glyphsUrl,n=new q(t?B(t,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new G(1024,1024,n),this._broadcastPromise=A(`WorkerTileHandler`,{client:this,schedule:e.schedule,signal:e.signal}).then((t=>{if(this._layer&&(this._connection?.close(),this._connection=t,this._layer&&!this._connection.closed)){let n=t.broadcast(`setStyle`,{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},e);Promise.all(n).catch((e=>f(e)))}}))}_requestSprite(e){this._spriteSourceAbortController?.abort();let n=new AbortController;this._spriteSourceAbortController=n;let r=e?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener(`abort`,this._inputSignalEventListener),this._startOptionsInputSignal=null,r&&(this._inputSignalEventListener=De(n),r.addEventListener(`abort`,this._inputSignalEventListener,{once:!0}));let{signal:i}=n,a={...e,signal:i};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,a),this._spriteSourcePromise.then((e=>{t(i),this._spriteMosaic=new J(1024,1024,250),this._spriteMosaic.setSpriteSource(e)}))}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast(`updateStyle`,e)),this._broadcastPromise}setSpriteSource(e){let t=new J(1024,1024,250);return t.setSpriteSource(e),this._spriteMosaic=t,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,t}async setStyle(e,t,n){await this._broadcastPromise,this._styleRepository=e,this._sourceDataMaxLOD=n,this._requestSprite();let r=new q(this._layer.currentStyleInfo.glyphsUrl?B(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new G(1024,1024,r),this._broadcastPromise=Promise.all(this._connection.broadcast(`setStyle`,{style:t,sourceDataMaxLOD:this._sourceDataMaxLOD})),this._broadcastPromise}async fetchTileData(e,t){let n=await this._getRefKeys(e,t);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),n,t)}async fetchTilePBFs(e){let t=Object.keys(this._layer.sourceNameToSource),n={},r=await this._getRefKeys(e,n),i=[],a=[];for(let e=0;e<r.length;e++)if(r[e].value==null||t[e]==null)a.push(null);else{let o=r[e].value,s=this._getTilePayload(o,t[e],n);s.then((e=>{i.push({...e,key:o})})),a.push(s)}return Promise.all(a).then((()=>i))}async parseTileData(e,t){let n=e&&e.data;if(!n)return null;let{sourceName2DataAndRefKey:r,transferList:i}=n;return Object.keys(r).length===0?null:this._broadcastPromise.then((()=>this._connection.invoke(`createTileAndParse`,{key:e.key.id,sourceName2DataAndRefKey:r,styleLayerUIDs:e.styleLayerUIDs},{...t,transferList:i})))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,t,n){let r=V.pool.acquire(e.id),i=this._layer.sourceNameToSource[t],{level:a,row:o,col:s}=r;V.pool.release(r);try{return{protobuff:await i.requestTile(a,o,s,n),sourceName:t}}catch(e){if(k(e))throw e;return{protobuff:null,sourceName:t}}}async _getRefKeys(e,t){let n=this._layer.sourceNameToSource,r=[];for(let i in n){let a=n[i].getRefKey(e,t);r.push(a)}return o(r)}_getSourcesData(e,t,n){let r=[];for(let i=0;i<t.length;i++)if(t[i].value==null||e[i]==null)r.push(null);else{let a=t[i].value,o=this._getTilePayload(a,e[i],n);r.push(o)}return o(r).then((e=>{let n={},r=[];for(let i=0;i<e.length;i++){let a=e[i].value;if(a&&a.protobuff&&a.protobuff.byteLength>0){let e=t[i].value.id;n[a.sourceName]={refKey:e,protobuff:a.protobuff},r.push(a.protobuff)}}return{sourceName2DataAndRefKey:n,transferList:r}}))}};function De(e){return()=>e.abort()}function Oe(e,t,n,r,i,a){let{iconRotationAlignment:o,textRotationAlignment:c,iconTranslate:l,iconTranslateAnchor:d,textTranslate:f,textTranslateAnchor:p}=r,m=0;for(let r of e.colliders){let[e,h]=r.partIndex===0?l:f,g=r.partIndex===0?d:p,_=r.minLod<=a&&a<=r.maxLod;m+=+!_,r.enabled=_,r.xScreen=r.xTile*i[0]+r.yTile*i[3]+i[6],r.yScreen=r.xTile*i[1]+r.yTile*i[4]+i[7],g===s.MAP?(r.xScreen+=n*e-t*h,r.yScreen+=t*e+n*h):(r.xScreen+=e,r.yScreen+=h),u.VIEWPORT===(r.partIndex===0?o:c)?(r.dxScreen=r.dxPixels,r.dyScreen=r.dyPixels):(r.dxScreen=n*(r.dxPixels+r.width/2)-t*(r.dyPixels+r.height/2)-r.width/2,r.dyScreen=t*(r.dxPixels+r.width/2)+n*(r.dyPixels+r.height/2)-r.height/2)}e.colliders.length>0&&m===e.colliders.length&&(e.unique.show=!1)}var ke=class{constructor(e,t,n,r,i,a){this._symbols=e,this._styleRepository=r,this._zoom=i,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new se(t,n,32),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(let t of e)for(let e of t.symbols)this._allNeededMatrices.has(e.tile)||this._allNeededMatrices.set(e.tile,me(e.tile.transforms.tileUnitsToPixels))}work(e){let t=this._gridIndex;function n(e){let n=e.xScreen+e.dxScreen,r=e.yScreen+e.dyScreen,i=n+e.width,a=r+e.height,[o,s,c,l]=t.getCellSpan(n,r,i,a);for(let e=s;e<=l;e++)for(let s=o;s<=c;s++){let o=t.cells[e][s];for(let e of o){let t=e.xScreen+e.dxScreen,o=e.yScreen+e.dyScreen,s=t+e.width,c=o+e.height;if(!(i<t||n>s||a<o||r>c))return!0}}return!1}let r=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){let t=this._symbols[this._currentLayerCursor],i=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-r>e)return!1;let a=t.symbols[this._currentSymbolCursor];if(!a.unique.show)continue;Oe(a,this._si,this._co,i,this._allNeededMatrices.get(a.tile),this._zoom);let o=a.unique;if(!o.show)continue;let{iconAllowOverlap:s,iconIgnorePlacement:c,textAllowOverlap:l,textIgnorePlacement:u}=i;for(let e of a.colliders){if(!e.enabled)continue;let t=o.parts[e.partIndex];t.show&&!(e.partIndex?l:s)&&n(e)&&(e.hard?o.show=!1:t.show=!1)}if(o.show)for(let e of a.colliders){if(!e.enabled||(e.partIndex?u:c)||!o.parts[e.partIndex].show)continue;let t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,r=t+e.width,i=n+e.height,[a,s,l,d]=this._gridIndex.getCellSpan(t,n,r,i);for(let t=s;t<=d;t++)for(let n=a;n<=l;n++)this._gridIndex.cells[t][n].push(e)}}}return!0}_getProperties(e){let t=this._styleProps.get(e);if(t)return t;let n=this._zoom,r=this._styleRepository.getStyleLayerByUID(e),i=r.getLayoutValue(`symbol-placement`,n)!==H.POINT,a=r.getLayoutValue(`icon-rotation-alignment`,n);a===u.AUTO&&(a=i?u.MAP:u.VIEWPORT);let o=r.getLayoutValue(`text-rotation-alignment`,n);o===u.AUTO&&(o=i?u.MAP:u.VIEWPORT);let s=r.getPaintValue(`icon-translate`,n),c=r.getPaintValue(`icon-translate-anchor`,n),l=r.getPaintValue(`text-translate`,n),d=r.getPaintValue(`text-translate-anchor`,n),f={iconAllowOverlap:r.getLayoutValue(`icon-allow-overlap`,n),iconIgnorePlacement:r.getLayoutValue(`icon-ignore-placement`,n),textAllowOverlap:r.getLayoutValue(`text-allow-overlap`,n),textIgnorePlacement:r.getLayoutValue(`text-ignore-placement`,n),iconRotationAlignment:a,textRotationAlignment:o,iconTranslateAnchor:c,iconTranslate:s,textTranslateAnchor:d,textTranslate:l};return this._styleProps.set(e,f),f}};function Ae(e,t){if(e.priority-t.priority)return e.priority-t.priority;let n=e.tile.key,r=t.tile.key;return n.world-r.world?n.world-r.world:n.level-r.level?n.level-r.level:n.row-r.row?n.row-r.row:n.col-r.col?n.col-r.col:e.xTile-t.xTile?e.xTile-t.xTile:e.yTile-t.yTile}var je=class{get running(){return this._running}constructor(e,t,n,r,i,a){this._visibleTiles=e,this._symbolRepository=t,this._createCollisionJob=n,this._assignTileSymbolsOpacity=r,this._symbolLayerSorter=i,this._isLayerVisible=a,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,t){this._screenWidth===e&&this._screenHeight===t||this.restart(),this._screenWidth=e,this._screenHeight=t}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||=this._createSelectionJob(),!this._selectionJobCompleted){let t=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-t)))===0))return!1}if(this._collisionJob||=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight),!this._collisionJobCompleted){let t=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-t)))===0))return!1}if(this._opacityJob||=this._createOpacityJob(),!this._opacityJobCompleted){let t=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-t)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){let e=this._symbolRepository.uniqueSymbols;for(let t=0;t<e.length;t++){let n=e[t];for(let e=0;e<n.uniqueSymbols.length;e++){let t=n.uniqueSymbols[e];for(let e of t.tileSymbols)e.selectedForRendering=!1}}let t=[],n=0,r=0,i=this._isLayerVisible;function a(a){let o,s=performance.now();for(;r<e.length;r++,n=0){let c=e[r],l=c.styleLayerUID;if(!i(l)){t[r]||(t[r]={styleLayerUID:l,symbols:[]});continue}t[r]=t[r]||{styleLayerUID:l,symbols:[]};let u=t[r];for(;n<c.uniqueSymbols.length;n++){if(o=c.uniqueSymbols[n],n%100==99&&performance.now()-s>a)return!1;let e=null,t=!1,r=!1;for(let n of o.tileSymbols)if(!r||!t){let i=n.tile;(!e||i.isCoverage||i.neededForCoverage&&!t)&&(e=n,(i.neededForCoverage||i.isCoverage)&&(r=!0),i.isCoverage&&(t=!0))}if(e.selectedForRendering=!0,r){u.symbols.push(e),o.show=!0;for(let e of o.parts)e.show=!0}else o.show=!1}}for(let e of t)e.symbols.sort(Ae);return!0}let o=this._symbolLayerSorter;return{work:a,get sortedSymbols(){return t.sort(o)}}}_createOpacityJob(){let e=this._assignTileSymbolsOpacity,t=this._visibleTiles,n=0;function r(t,n){let i=t.symbols;for(let[e,t]of i)Me(t,n);e(t,n);for(let e of t.childrenTiles)r(e,n)}return{work(e){let i=performance.now();for(;n<t.length;n++){if(performance.now()-i>e)return!1;let a=t[n];a.parentTile??r(a,performance.now())}return!0}}}};function Me(e,t){for(let n of e){let e=n.unique;for(let n of e.parts){let r=n.targetOpacity>.5?1:-1;n.startOpacity+=r*((t-n.startTime)/200),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=t,n.targetOpacity=e.show&&n.show?1:0}}}var Ne=32,Pe=8,Fe=64,Ie=class{constructor(e,t,n){this.tileCoordRange=e,this._visibleTiles=t,this._createUnique=n,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return this._uniqueSymbolLayerArray??=this._createUniqueSymbolLayerArray(),this._uniqueSymbolLayerArray}get uniqueSymbolsReferences(){return this._uniqueSymbolsReferences}add(e,t){this._uniqueSymbolLayerArray=null;let n=this._tiles.get(e.id);n||(n={symbols:new Map},this._tiles.set(e.id,n));let r=new Map;if(t)for(let e of t)n.symbols.has(e)&&(r.set(e,n.symbols.get(e)),n.symbols.delete(e));else for(let[t,i]of e.layerData)n.symbols.has(t)&&(r.set(t,n.symbols.get(t)),n.symbols.delete(t));this._removeSymbols(r);let i=e.symbols,a=new Map;for(let[e,t]of i){let r=t.length;if(r>=Ne){let i=this.tileCoordRange;do i/=2,r/=4;while(r>Pe&&i>Fe);let o=new se(this.tileCoordRange,this.tileCoordRange,i);a.set(e,{flat:t,index:o}),n.symbols.set(e,{flat:t,index:o});for(let e of t)o.getCell(e.xTile,e.yTile).push(e)}else a.set(e,{flat:t}),n.symbols.set(e,{flat:t})}this._addSymbols(e.key,i)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(let[t,n]of this._tiles){let r=new Map;for(let t of e)n.symbols.has(t)&&(r.set(t,n.symbols.get(t)),n.symbols.delete(t));this._removeSymbols(r),n.symbols.size===0&&this._tiles.delete(t)}}removeTile(e){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);if(!t)return;let n=new Map;for(let[r,i]of e.symbols)t.symbols.has(r)&&(n.set(r,t.symbols.get(r)),t.symbols.delete(r));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(e.id)}querySymbols(e,t,n,r){let i=[],a=this.uniqueSymbols;for(let r of a){let a=r.styleLayerUID,o=r.uniqueSymbols;for(let r of o){let o=r.tileSymbols.find((e=>e.selectedForRendering));o&&ee(o,e,t*(window.devicePixelRatio||1),n)&&i.push({vtlSymbol:o,styleLayerUID:a,tileKey:o.tile.key})}}return i}_removeSymbols(e){for(let[t,{flat:n}]of e)for(let e of n){let n=e.unique,r=n.tileSymbols,i=r.length-1;for(let t=0;t<i;t++)if(r[t]===e){r[t]=r[i];break}if(r.length=i,i===0){let e=this._uniqueSymbolsReferences.get(t);e.delete(n),e.size===0&&this._uniqueSymbolsReferences.delete(t)}e.unique=null}}_addSymbols(e,t){if(t.size===0)return;let n=this._visibleTiles;for(let r of n)r.parentTile||r.key.world!==e.world||r.key.level===e.level&&!r.key.equals(e)||this._matchSymbols(r,e,t);for(let[e,n]of t)for(let t of n)if(t.unique==null){let n=this._createUnique();t.unique=n,n.tileSymbols.push(t);let r=this._uniqueSymbolsReferences.get(e);r||(r=new Set,this._uniqueSymbolsReferences.set(e,r)),r.add(n)}}_matchSymbols(e,t,n){if(e.key.level>t.level){let n=e.key.level-t.level;if(e.key.row>>n!==t.row||e.key.col>>n!==t.col)return}if(t.level>e.key.level){let n=t.level-e.key.level;if(t.row>>n!==e.key.row||t.col>>n!==e.key.col)return}if(t.equals(e.key)){for(let r of e.childrenTiles)this._matchSymbols(r,t,n);return}let r=new Map;for(let[i,a]of n){let n=[];for(let r of a){let i=M(this.tileCoordRange,r.xTile,t.level,t.col,e.key.level,e.key.col),a=M(this.tileCoordRange,r.yTile,t.level,t.row,e.key.level,e.key.row);i>=0&&i<this.tileCoordRange&&a>=0&&a<this.tileCoordRange&&n.push({symbol:r,xTransformed:i,yTransformed:a})}let o=[],s=e.key.level<t.level?1:1<<e.key.level-t.level,c=this._tiles.get(e.id).symbols.get(i);if(c){let e=c.flat;for(let t of n){let n,r=!1,i=t.xTransformed,a=t.yTransformed;n=c.index==null?e:c.index.getCell(i,a);let l=t.symbol,u=l.hash;for(let e of n)if(u===e.hash&&Math.abs(i-e.xTile)<=s&&Math.abs(a-e.yTile)<=s){let t=e.unique;l.unique=t,t.tileSymbols.push(l),r=!0;break}r||o.push(l)}}o.length>0&&r.set(i,o)}for(let n of e.childrenTiles)this._matchSymbols(n,t,r)}_createUniqueSymbolLayerArray(){let e=this._uniqueSymbolsReferences,t=Array(e.size),n,r=0;for(let[i,a]of e){let e=Array(a.size);n=0;for(let t of a)e[n++]=t;t[r]={styleLayerUID:i,uniqueSymbols:e},r++}return t}};function Le(e){let t=[],n=new Ie(4096,t,(()=>{let e=new te;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),r=new je(t,n,((t,n,r)=>new ke(t,n,r,e.styleRepository,e.key.level,0)),((e,t)=>{ne(e,t,!1)}),(()=>0),(t=>{let n=e.styleRepository.getStyleLayerByUID(t).getLayoutProperty(`visibility`);return!n||n.getValue()!==l.NONE}));t.push(e),n.add(e),r.setScreenSize(512,512),r.continue(1/0)}var Re=class extends pe{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){let t=V.pool.acquire(e),n=t.level===0?null:V.getId(t.level-1,t.row>>1,t.col>>1,t.world);return V.pool.release(t),n}getTileCoverage(e,t,n=!0,r){let i=super.getTileCoverage(e,t,n,r);if(!i)return i;let a=1<<i.lodInfo.level;return i.spans=i.spans.filter((e=>e.row>=0&&e.row<a)),i}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{let t=this._fullCacheLodInfos;if(e>t[0].scale)return t[0].level;let n,r;for(let i=0;i<t.length-1;i++)if(r=t[i+1],e>r.scale)return n=t[i],n.level+(n.scale-e)/(n.scale-r.scale);return t[t.length-1].level}}_initializeFullCacheLODs(t){let n;if(t[0].level===0)n=t.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else{let t=this.tileInfo.size[0],r=this.tileInfo.spatialReference;n=e.create({size:t,spatialReference:r}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})))}for(let e=0;e<n.length;e++)this._levelByScale[n[e].scale]=n[e].level;this._fullCacheLodInfos=n}},ze=class extends Ee{constructor(e,t,n,r){super(e,t,n,e.tileInfo.lods.length-1),this._memCache=r,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Re(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach((e=>e.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,t,r,i){let a=new V(e,t,r,0),o=this._memCache.get(a.id);if(o!=null)return o.retain(),o;let s=await this._getVectorTileData(a);if(n(i),!this._layer)return null;if(o=this._memCache.get(a.id),o!=null)return o.retain(),o;let c=this._layer.tileInfo.getTileBounds(re(),a);return o=new D(a,this._tileInfoView.getTileResolution(e),c[0],c[3],512,512,this._styleRepository,this._memCache),s?(o.setData(s),o.retain(),this._memCache.put(a.id,o,o.usedMemory,-3)):o.setData(null),o.neededForCoverage=!0,o.transforms.tileUnitsToPixels=_(1/8,0,0,0,1/8,0,0,0,1),Le(o),o}_getVectorTileData(e){let t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);let n=new AbortController,r={signal:n.signal},i=this._getParsedVectorTileData(e,r).then((e=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),e))).catch((()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null)));return this._ongoingTileRequests.set(t,i),this._ongoingRequestToController.set(t,n),i}_getParsedVectorTileData(e,t){return this.fetchTileData(e,t).then((n=>this.parseTileData({key:e,data:n},t)))}},Y=class{constructor(){this.name=this.constructor.name||`UnnamedBrush`,this.brushEffect=null}prepareState(e,t){}draw(e,t,n){}drawMany(e,t,n){for(let r of t)r.visible&&this.draw(e,r,n)}},Be=class extends Y{constructor(){super(...arguments),this._color=_e(1,0,0,1),this._patternMatrix=r(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&=(this._vao.dispose(),null)}drawMany(e,t){let{context:n,painter:r,requestRender:i,allowDelayedRender:a}=e;this._loadWGLResources(e);let o=e.displayLevel,s=e.styleLayer,c=s.backgroundMaterial,l=r.vectorTilesMaterialManager,u=s.getPaintValue(`background-color`,o),d=s.getPaintValue(`background-opacity`,o),f=s.getPaintValue(`background-pattern`,o),p=f!==void 0,m=1|window.devicePixelRatio,h=e.spriteMosaic,_,v,y=m>1.15?2:1,b=this._programOptions;b.pattern=p;let x=l.getMaterialProgram(n,c,b);if(!a||i==null||x.compiled){if(n.bindVAO(this._vao),n.useProgram(x),p){let e=h.getMosaicItemPosition(f,!0);if(e!=null){let{tl:t,br:r,page:i}=e;_=r[0]-t[0],v=r[1]-t[1];let a=h.getPageSize(i);a!=null&&(h.bind(n,F.LINEAR,i,5),x.setUniform4f(`u_tlbr`,t[0],t[1],r[0],r[1]),x.setUniform2fv(`u_mosaicSize`,a),x.setUniform1i(`u_texture`,5))}x.setUniform1f(`u_opacity`,d)}else{let e=u[3]*d;this._color[0]=e*u[0],this._color[1]=e*u[1],this._color[2]=e*u[2],this._color[3]=e,x.setUniform4fv(`u_color`,this._color)}x.setUniform1f(`u_depth`,s.z||0);for(let e of t){if(x.setUniform1f(`u_coord_range`,e.rangeX),x.setUniformMatrix3fv(`u_dvsMat3`,e.transforms.displayViewScreenMat3),p){let t=Math.max(2**(Math.round(o)-e.key.level),1),n=y*e.width*t,r=n/g(_),i=n/g(v);this._patternMatrix[0]=r,this._patternMatrix[4]=i,x.setUniformMatrix3fv(`u_pattern_matrix`,this._patternMatrix)}n.setStencilFunction(O.EQUAL,0,255),n.drawArrays(j.TRIANGLE_STRIP,0,4)}}else i()}_loadWGLResources(e){if(this._vao)return;let{context:t,styleLayer:n}=e,r=n.backgroundMaterial,i=new Int8Array([0,0,1,0,0,1,1,1]),o=a.createVertex(t,de.STATIC_DRAW,i),s=new ce(t,r.getAttributeLocations(),r.getLayoutInfo(),{geometry:o});this._vao=s}},Ve=class extends Y{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){let{context:n,displayLevel:r,requiredLevel:i,state:a,painter:o,spriteMosaic:c,styleLayerUID:l,requestRender:u,allowDelayedRender:d}=e;if(!t.some((e=>e.layerData.get(l)?.circleIndexCount??!1)))return;let f=e.styleLayer,p=f.circleMaterial,m=o.vectorTilesMaterialManager,h=f.getPaintValue(`circle-translate`,r),g=f.getPaintValue(`circle-translate-anchor`,r),_=this._programOptions,v=m.getMaterialProgram(n,p,_);if(d&&u!=null&&!v.compiled)return void u();n.useProgram(v),v.setUniformMatrix3fv(`u_displayMat3`,g===s.VIEWPORT?a.displayMat3:a.displayViewMat3),v.setUniform2fv(`u_circleTranslation`,h),v.setUniform1f(`u_depth`,f.z),v.setUniform1f(`u_antialiasingWidth`,1.2);let y=-1;for(let e of t){if(!e.layerData.has(l))continue;e.key.level!==y&&(y=e.key.level,p.setDataUniforms(v,r,f,y,c));let t=e.layerData.get(l);if(!t.circleIndexCount)continue;t.prepareForRendering(n);let a=t.vao;a!=null&&(n.bindVAO(a),v.setUniformMatrix3fv(`u_dvsMat3`,e.transforms.displayViewScreenMat3),i===e.key.level?n.setStencilFunction(O.GREATER,255,255):n.setStencilFunction(O.EQUAL,e.stencilRef,255),n.drawElements(j.TRIANGLES,t.circleIndexCount,L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t.circleIndexStart),e.triangleCount+=t.circleIndexCount/3)}}},He=1/65536,Ue=class extends Y{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){let{displayLevel:n,renderPass:r,spriteMosaic:i,styleLayerUID:a}=e,o=!1;for(let e of t)if(e.layerData.has(a)){let t=e.layerData.get(a);if(t.fillIndexCount>0||t.outlineIndexCount>0){o=!0;break}}if(!o)return;let s=e.styleLayer,c=s.getPaintProperty(`fill-pattern`),l=c!==void 0,u=l&&c.isDataDriven,d;if(l&&!u){let e=c.getValue(n);d=i.getMosaicItemPosition(e,!0)}let f=!l&&s.getPaintValue(`fill-antialias`,n),p=!0,m=1;if(!l){let e=s.getPaintProperty(`fill-color`),t=s.getPaintProperty(`fill-opacity`);if(!e?.isDataDriven&&!t?.isDataDriven){let e=s.getPaintValue(`fill-color`,n);m=s.getPaintValue(`fill-opacity`,n)*e[3],m>=1&&(p=!1)}}if(p&&r===`opaque`)return;let h=s.getPaintValue(`fill-translate`,n),g=s.getPaintValue(`fill-translate-anchor`,n);(p||r!==`translucent`)&&this._drawFill(e,a,s,t,h,g,l,d,u);let _=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&m<1;f&&r!==`opaque`&&!_&&this._drawOutline(e,a,s,t,h,g)}_drawFill(e,t,n,r,i,a,o,c,l){if(o&&!l&&c==null)return;let{context:u,displayLevel:d,state:f,painter:p,pixelRatio:m,spriteMosaic:h,requestRender:g,allowDelayedRender:_}=e,v=n.fillMaterial,y=p.vectorTilesMaterialManager,b=m>1.15?2:1,x=this._fillProgramOptions;x.pattern=o;let S=y.getMaterialProgram(u,v,x);if(_&&g!=null&&!S.compiled)return void g();if(u.useProgram(S),c!=null){let{page:e}=c,t=h.getPageSize(e);t!=null&&(h.bind(u,F.LINEAR,e,5),S.setUniform2fv(`u_mosaicSize`,t),S.setUniform1i(`u_texture`,5))}S.setUniformMatrix3fv(`u_displayMat3`,a===s.VIEWPORT?f.displayMat3:f.displayViewMat3),S.setUniform2fv(`u_fillTranslation`,i),S.setUniform1f(`u_depth`,n.z+He);let C=-1;for(let e of r){if(!e.layerData.has(t))continue;e.key.level!==C&&(C=e.key.level,v.setDataUniforms(S,d,n,C,h));let r=e.layerData.get(t);if(!r.fillIndexCount)continue;r.prepareForRendering(u);let i=r.fillVAO;if(i!=null){if(u.bindVAO(i),S.setUniformMatrix3fv(`u_dvsMat3`,e.transforms.displayViewScreenMat3),u.setStencilFunction(O.EQUAL,e.stencilRef,255),o){let t=Math.max(2**(Math.round(d)-e.key.level),1),n=e.rangeX/(b*e.width*t);S.setUniform1f(`u_patternFactor`,n)}if(l){let e=r.patternMap;if(!e)continue;for(let[t,n]of e){let e=h.getPageSize(t);e!=null&&(h.bind(u,F.LINEAR,t,5),S.setUniform2fv(`u_mosaicSize`,e),S.setUniform1i(`u_texture`,5),u.drawElements(j.TRIANGLES,n[1],L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]))}}else u.drawElements(j.TRIANGLES,r.fillIndexCount,L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r.fillIndexStart);e.triangleCount+=r.fillIndexCount/3}}}_drawOutline(e,t,n,r,i,a){let{context:o,displayLevel:c,state:l,painter:u,pixelRatio:d,spriteMosaic:f,requestRender:p,allowDelayedRender:m}=e,h=n.outlineMaterial,g=u.vectorTilesMaterialManager,_=.75/d,v=this._outlineProgramOptions,y=g.getMaterialProgram(o,h,v);if(m&&p!=null&&!y.compiled)return void p();o.useProgram(y),y.setUniformMatrix3fv(`u_displayMat3`,a===s.VIEWPORT?l.displayMat3:l.displayViewMat3),y.setUniform2fv(`u_fillTranslation`,i),y.setUniform1f(`u_depth`,n.z+He),y.setUniform1f(`u_outline_width`,_);let b=-1;for(let e of r){if(!e.layerData.has(t))continue;e.key.level!==b&&(b=e.key.level,h.setDataUniforms(y,c,n,b,f));let r=e.layerData.get(t);if(r.prepareForRendering(o),!r.outlineIndexCount)continue;let i=r.outlineVAO;i!=null&&(o.bindVAO(i),y.setUniformMatrix3fv(`u_dvsMat3`,e.transforms.displayViewScreenMat3),o.setStencilFunction(O.EQUAL,e.stencilRef,255),o.drawElements(j.TRIANGLES,r.outlineIndexCount,L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r.outlineIndexStart),e.triangleCount+=r.outlineIndexCount/3)}}},We=class extends Y{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){let{context:n,displayLevel:r,state:i,painter:a,pixelRatio:o,spriteMosaic:c,styleLayerUID:l,requestRender:u,allowDelayedRender:d}=e;if(!t.some((e=>e.layerData.get(l)?.lineIndexCount??!1)))return;let f=e.styleLayer,p=f.lineMaterial,m=a.vectorTilesMaterialManager,h=f.getPaintValue(`line-translate`,r),g=f.getPaintValue(`line-translate-anchor`,r),_=f.getPaintProperty(`line-pattern`),v=_!==void 0,y=v&&_.isDataDriven,b,x;if(v&&!y){let e=_.getValue(r);b=c.getMosaicItemPosition(e)}let S=!1;if(!v){let e=f.getPaintProperty(`line-dasharray`);if(x=e!==void 0,S=x&&e.isDataDriven,x&&!S){let t=e.getValue(r),n=f.getDashKey(t,f.getLayoutValue(`line-cap`,r));b=c.getMosaicItemPosition(n)}}let C=1/o,w=this._programOptions;w.pattern=v,w.sdf=x;let T=m.getMaterialProgram(n,p,w);if(d&&u!=null&&!T.compiled)return void u();if(n.useProgram(T),T.setUniformMatrix3fv(`u_displayViewMat3`,i.displayViewMat3),T.setUniformMatrix3fv(`u_displayMat3`,g===s.VIEWPORT?i.displayMat3:i.displayViewMat3),T.setUniform2fv(`u_lineTranslation`,h),T.setUniform1f(`u_depth`,f.z),T.setUniform1f(`u_antialiasing`,C),b&&b!=null){let{page:e}=b,t=c.getPageSize(e);t!=null&&(c.bind(n,F.LINEAR,e,5),T.setUniform2fv(`u_mosaicSize`,t),T.setUniform1i(`u_texture`,5))}let E=-1;for(let e of t){if(!e.layerData.has(l))continue;e.key.level!==E&&(E=e.key.level,p.setDataUniforms(T,r,f,E,c));let t=2**(r-E)/o;T.setUniform1f(`u_zoomFactor`,t);let i=e.layerData.get(l);if(!i.lineIndexCount)continue;i.prepareForRendering(n);let a=i.vao;if(a!=null){if(n.bindVAO(a),T.setUniformMatrix3fv(`u_dvsMat3`,e.transforms.displayViewScreenMat3),n.setStencilFunction(O.EQUAL,e.stencilRef,255),y||S){let e=i.patternMap;if(!e)continue;for(let[t,r]of e){let e=c.getPageSize(t);e!=null&&(c.bind(n,F.LINEAR,t,5),T.setUniform2fv(`u_mosaicSize`,e),T.setUniform1i(`u_texture`,5),n.drawElements(j.TRIANGLES,r[1],L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r[0]))}}else n.drawElements(j.TRIANGLES,i.lineIndexCount,L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i.lineIndexStart);e.triangleCount+=i.lineIndexCount/3}}}};128/Math.PI;var Ge=256/360;1/Math.LN2;function Ke(e,t){return(e%=t)>=0?e:e+t}function qe(e){return Ke(e*Ge,256)}var Je=1/65536,Ye={vtlBackground:Be,vtlFill:Ue,vtlLine:We,vtlCircle:Ve,vtlSymbol:class extends Y{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=C()}dispose(){}drawMany(e,t){let n=e.styleLayer;this._drawIcons(e,n,t),this._drawText(e,n,t)}_drawIcons(e,t,n){let{context:r,displayLevel:i,painter:a,spriteMosaic:o,state:c,styleLayerUID:l,requestRender:d,allowDelayedRender:f}=e,p=t.iconMaterial,m=a.vectorTilesMaterialManager,h,g=!1;for(let e of n)if(e.layerData.has(l)&&(h=e.layerData.get(l),h.iconPerPageElementsMap.size>0)){g=!0;break}if(!g)return;let _=t.getPaintValue(`icon-translate`,i),v=t.getPaintValue(`icon-translate-anchor`,i),y=t.getLayoutValue(`icon-rotation-alignment`,i);y===u.AUTO&&(y=t.getLayoutValue(`symbol-placement`,i)===H.POINT?u.VIEWPORT:u.MAP);let b=y===u.MAP,x=t.getLayoutValue(`icon-keep-upright`,i)&&b,S=h.isIconSDF,C=this._iconProgramOptions;C.sdf=S;let w=m.getMaterialProgram(r,p,C);if(f&&d!=null&&!w.compiled)return void d();r.useProgram(w),w.setUniformMatrix3fv(`u_displayViewMat3`,y===u.MAP?c.displayViewMat3:c.displayMat3),w.setUniformMatrix3fv(`u_displayMat3`,v===s.VIEWPORT?c.displayMat3:c.displayViewMat3),w.setUniform2fv(`u_iconTranslation`,_),w.setUniform1f(`u_depth`,t.z),w.setUniform1f(`u_mapRotation`,qe(c.rotation)),w.setUniform1f(`u_keepUpright`,+!!x),w.setUniform1f(`u_level`,10*i),w.setUniform1i(`u_texture`,5),w.setUniform1f(`u_fadeDuration`,200/1e3);let T=-1;for(let a of n){if(!a.layerData.has(l)||(a.key.level!==T&&(T=a.key.level,p.setDataUniforms(w,i,t,T,o)),h=a.layerData.get(l),h.iconPerPageElementsMap.size===0))continue;h.prepareForRendering(r),h.updateOpacityInfo();let n=h.iconVAO;if(n!=null){r.bindVAO(n),w.setUniformMatrix3fv(`u_dvsMat3`,a.transforms.displayViewScreenMat3),w.setUniform1f(`u_time`,(performance.now()-h.lastOpacityUpdate)/1e3);for(let[t,n]of h.iconPerPageElementsMap)this._renderIconRange(e,w,n,t,a)}}}_renderIconRange(e,t,n,r,i){let{context:a,spriteMosaic:o}=e;this._spritesTextureSize[0]=o.getWidth(r)/4,this._spritesTextureSize[1]=o.getHeight(r)/4,t.setUniform2fv(`u_mosaicSize`,this._spritesTextureSize),o.bind(a,F.LINEAR,r,5),this._setStencilState(e,i),a.drawElements(j.TRIANGLES,n[1],L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),i.triangleCount+=n[1]/3}_drawText(e,t,n){let{context:r,displayLevel:i,glyphMosaic:a,painter:o,pixelRatio:c,spriteMosaic:l,state:d,styleLayerUID:f,requestRender:p,allowDelayedRender:m}=e,h=t.textMaterial,g=o.vectorTilesMaterialManager,_,v=!1;for(let e of n)if(e.layerData.has(f)&&(_=e.layerData.get(f),_.glyphPerPageElementsMap.size>0)){v=!0;break}if(!v)return;let y=t.getPaintProperty(`text-opacity`);if(y&&!y.isDataDriven&&y.getValue(i)===0)return;let b=t.getPaintProperty(`text-color`),x=!b||b.isDataDriven||b.getValue(i)[3]>0,S=t.getPaintProperty(`text-halo-width`),C=t.getPaintProperty(`text-halo-color`),w=(!S||S.isDataDriven||S.getValue(i)>0)&&(!C||C.isDataDriven||C.getValue(i)[3]>0);if(!x&&!w)return;let T=t.getLayoutValue(`text-rotation-alignment`,i);T===u.AUTO&&(T=t.getLayoutValue(`symbol-placement`,i)===H.POINT?u.VIEWPORT:u.MAP);let E=T===u.MAP,D=t.getLayoutValue(`text-keep-upright`,i)&&E,ee=.8*3/c;this._glyphTextureSize||=oe(a.width/4,a.height/4);let te=t.getPaintValue(`text-translate`,i),O=t.getPaintValue(`text-translate-anchor`,i),ne=this._sdfProgramOptions,k=g.getMaterialProgram(r,h,ne);if(m&&p!=null&&!k.compiled)return void p();r.useProgram(k),k.setUniformMatrix3fv(`u_displayViewMat3`,T===u.MAP?d.displayViewMat3:d.displayMat3),k.setUniformMatrix3fv(`u_displayMat3`,O===s.VIEWPORT?d.displayMat3:d.displayViewMat3),k.setUniform2fv(`u_textTranslation`,te),k.setUniform1f(`u_depth`,t.z+Je),k.setUniform2fv(`u_mosaicSize`,this._glyphTextureSize),k.setUniform1f(`u_mapRotation`,qe(d.rotation)),k.setUniform1f(`u_keepUpright`,+!!D),k.setUniform1f(`u_level`,10*i),k.setUniform1i(`u_texture`,6),k.setUniform1f(`u_antialiasingWidth`,ee),k.setUniform1f(`u_fadeDuration`,200/1e3);let A=-1;for(let o of n){if(!o.layerData.has(f)||(o.key.level!==A&&(A=o.key.level,h.setDataUniforms(k,i,t,A,l)),_=o.layerData.get(f),_.glyphPerPageElementsMap.size===0))continue;_.prepareForRendering(r),_.updateOpacityInfo();let n=_.textVAO;if(n==null)continue;r.bindVAO(n),k.setUniformMatrix3fv(`u_dvsMat3`,o.transforms.displayViewScreenMat3),this._setStencilState(e,o);let s=(performance.now()-_.lastOpacityUpdate)/1e3;k.setUniform1f(`u_time`,s),_.glyphPerPageElementsMap.forEach(((e,t)=>{this._renderGlyphRange(r,e,t,a,k,w,x,o)}))}}_renderGlyphRange(e,t,n,r,i,a,o,s){r.bind(e,F.LINEAR,n,6),a&&(i.setUniform1f(`u_halo`,1),e.drawElements(j.TRIANGLES,t[1],L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3),o&&(i.setUniform1f(`u_halo`,0),e.drawElements(j.TRIANGLES,t[1],L.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3)}_setStencilState(e,t){let{context:n,is3D:r,stencilSymbols:i}=e;if(n.setStencilTestEnabled(!0),i)return n.setStencilWriteMask(255),void n.setStencilFunction(O.ALWAYS,t.stencilRef,255);n.setStencilWriteMask(0),r?n.setStencilFunction(O.EQUAL,t.stencilRef,255):n.setStencilFunction(O.GREATER,255,255)}}},Xe={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}},Ze=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);let n=this._read(e);if(!n)throw Error(`cannot find shader file ${e}`);let r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,i=r.exec(n),a=[];for(;i!=null;)a.push({path:i[1],start:i.index,length:i[0].length}),i=r.exec(n);let o=0,s=``;return a.forEach((e=>{s+=n.slice(o,e.start),s+=t.has(e.path)?``:this._resolve(e.path,t),o=e.start+e.length})),s+=n.slice(o),t.set(e,s),s}_read(e){return this._readFile(e)}};function Qe(e){let t=Xe;return e.split(`/`).forEach((e=>{t&&=t[e]})),t}var $e=new Ze(Qe);function X(e){return $e.resolveIncludes(e)}function et(e){let{options:t,value:n}=e;return typeof t[n]==`number`}function Z(e){let t=``;for(let n in e){let r=e[n];if(typeof r==`boolean`)r&&(t+=`#define ${n}\n`);else if(typeof r==`number`)t+=`#define ${n} ${r.toFixed()}\n`;else if(typeof r==`object`)if(et(r)){let{value:e,options:i,namespace:a}=r,o=a?`${a}_`:``;for(let e in i)t+=`#define ${o}${e} ${i[e].toFixed()}\n`;t+=`#define ${n} ${o}${e}\n`}else{let e=r.options,i=0;for(let n in e)t+=`#define ${e[n]} ${(i++).toFixed()}\n`;t+=`#define ${n} ${e[r.value]}\n`}}return t}var tt=e=>Z({PATTERN:e.pattern}),nt={shaders:e=>({vertexShader:tt(e)+X(`background/background.vert`),fragmentShader:tt(e)+X(`background/background.frag`)})},rt={shaders:e=>({vertexShader:X(`circle/circle.vert`),fragmentShader:X(`circle/circle.frag`)})},it=e=>Z({PATTERN:e.pattern}),at={shaders:e=>({vertexShader:it(e)+X(`fill/fill.vert`),fragmentShader:it(e)+X(`fill/fill.frag`)})},ot={shaders:e=>({vertexShader:X(`outline/outline.vert`),fragmentShader:X(`outline/outline.frag`)})},st=e=>Z({SDF:e.sdf}),ct={shaders:e=>({vertexShader:st(e)+X(`icon/icon.vert`),fragmentShader:st(e)+X(`icon/icon.frag`)})},lt=e=>Z({PATTERN:e.pattern,SDF:e.sdf}),ut={shaders:e=>({vertexShader:lt(e)+X(`line/line.vert`),fragmentShader:lt(e)+X(`line/line.frag`)})},dt={shaders:e=>({vertexShader:X(`text/text.vert`),fragmentShader:X(`text/text.frag`)})},ft=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach((e=>e.dispose())),this._programByKey.clear()}getMaterialProgram(e,t,n){let r=t.key<<3|this._getMaterialOptionsValue(t.type,n);if(this._programByKey.has(r))return this._programByKey.get(r);let{shaders:i}=this._getProgramTemplate(t.type),{vertexShader:a,fragmentShader:o}=i(n),s=t.getShaderHeader(),c=t.getShaderMain(),l=a.replace(`#pragma header`,s).replace(`#pragma main`,c),u=e.programCache.acquire(l,o,t.getAttributeLocations());return this._programByKey.set(r,u),u}_getMaterialOptionsValue(e,t){switch(e){case h.BACKGROUND:return!!t.pattern<<1;case h.FILL:return!!t.pattern<<1;case h.OUTLINE:return 0;case h.LINE:{let e=t;return!!e.sdf<<2|!!e.pattern<<1}case h.ICON:return!!t.sdf<<1;case h.CIRCLE:case h.TEXT:default:return 0}}_getProgramTemplate(e){switch(e){case h.BACKGROUND:return nt;case h.CIRCLE:return rt;case h.FILL:return at;case h.ICON:return ct;case h.LINE:return ut;case h.OUTLINE:return ot;case h.TEXT:return dt;default:return null}}},Q=1e-6,pt=class{constructor(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new ft}dispose(){this._brushCache&&=(this._brushCache.forEach((e=>e.dispose())),null),this._vtlMaterialManager=T(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(e,t,n){let r=n.layers;e.renderPass=`translucent`;for(let n=0;n<r.length;n++){let i=r[n];if(i.type!==p.SYMBOL)continue;let a=i.getLayoutProperty(`visibility`);if(a&&a.getValue()===l.NONE)continue;let o=e.displayLevel;i.minzoom!==void 0&&i.minzoom>o+Q||i.maxzoom!==void 0&&i.maxzoom<=o-Q||(e.styleLayerUID=i.uid,e.styleLayer=i,this._drawWithBrush(e,t,`vtlSymbol`))}}drawBackground(e,t,n){if(n.backgroundBucketIds.length===0)return;let{context:r,displayLevel:i,requiredLevel:a}=e;t.key.level=a,r.setBlendingEnabled(!0),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!1),e.renderPass=`background`,n.backgroundBucketIds.forEach((r=>{let a=n.getLayerById(r);if(a.type!==p.BACKGROUND)return;let o=a.getLayoutProperty(`visibility`);o&&o.getValue()===l.NONE||a.minzoom!==void 0&&a.minzoom>i+Q||a.maxzoom!==void 0&&a.maxzoom<=i-Q||(e.styleLayerUID=a.uid,e.styleLayer=a,this._drawWithBrush(e,t,`vtlBackground`))}))}drawTile(e,t,n,r){let{context:i}=e,a=n.layers;i.setBlendingEnabled(!1),i.setDepthTestEnabled(!0),i.setDepthWriteEnabled(!0),i.setDepthFunction(O.LEQUAL),e.renderPass=`opaque`;for(let n=a.length-1;n>=0;n--){let i=a[n];r!=null&&r!==i.type||this._renderStyleLayer(i,e,t,!1)}i.setDepthWriteEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(x.ONE,x.ONE_MINUS_SRC_ALPHA,x.ONE,x.ONE_MINUS_SRC_ALPHA),e.renderPass=`translucent`;for(let n=0;n<a.length;n++){let i=a[n];r!=null&&r!==i.type||this._renderStyleLayer(i,e,t,!1)}i.setDepthTestEnabled(!1),i.bindVAO()}_renderStyleLayer(e,t,n,r){if(!(r||e&&n.layerData.has(e.uid)))return;let i=e.getLayoutProperty(`visibility`);if(i&&i.getValue()===l.NONE)return;let{renderPass:a}=t,o;switch(e.type){case p.BACKGROUND:if(a!==`background`)return;o=`vtlBackground`;break;case p.FILL:if(a!==`opaque`&&t.renderPass!==`translucent`)return;o=`vtlFill`;break;case p.LINE:if(a!==`translucent`)return;o=`vtlLine`;break;case p.CIRCLE:if(a!==`translucent`)return;o=`vtlCircle`;break;case p.SYMBOL:if(a!==`translucent`)return;o=`vtlSymbol`}let s=t.displayLevel;if(e.minzoom!==void 0&&e.minzoom>s+Q||e.maxzoom!==void 0&&e.maxzoom<=s-Q)return;let{context:c}=t;c.setStencilTestEnabled(!1),c.setStencilWriteMask(0),t.styleLayerUID=e.uid,t.styleLayer=e,this._drawWithBrush(t,n,o)}_drawWithBrush(e,t,n){if(!this._brushCache.has(n)){let e=Ye[n];this._brushCache.set(n,new e)}this._brushCache.get(n).drawMany(e,[t])}},$=class extends be(ve(ye)){constructor(){super(...arguments),this._tileHandlerController=null,this.type=`vector-tile-3d`,this.levelShift=+!N(`disable-feature:vtl-level-shift`)}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new fe(`vectortilelayerview:full-extent-undefined`,`This layer view's layer does not define a fullExtent.`)));let{basemapTerrain:e,spatialReference:t,state:n,viewingMode:r}=this.view,a=r===`local`&&!ae(t)||S.force512VTL,o=this.layer.tileInfo.spatialReference.isGeographic,s=a?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,o?1:2),l=this._getTileInfoSupportError(s,this.layer.fullExtent);if(l!=null)return this.addResolvingPromise(Promise.reject(l));let u=c((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{let t=e.tilingScheme,n=t.pixelSize,r=n===256?1:2,i=e.spatialReference?.isGeographic&&n===256?1:0,a=e.spatialReference?.isGeographic||n!==256?0:1,o;if(this.schemaHelper=new xe(r,i,this.levelShift+a),n===256){let e=this.layer.tileInfo.spatialReference.isGeographic;o=this.layer.tileInfo.getOrCreateCompatible(256,e?1:2)}else o=this.view.spatialReference?.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;let s=this._getTileInfoCompatibilityError(o,t);if(s)throw s;this.tileInfo=o}));this._tileHandlerController=new AbortController;let f=this.view.resourceController;this._memCache=f.memoryController.newCache(`vtl-${this.layer.uid}`,(e=>{e.release()})),this.addHandles(m((()=>this.view.qualitySettings.memoryLimit),(e=>this._memCache.maxSize=Math.ceil(e/10*1048576)),i));let p=new U(this.layer.currentStyleInfo.style);this._tileHandler=new ze(this.layer,p,n.contentPixelRatio,this._memCache);let h=this._tileHandlerController.signal,g=ht(f),_=this._tileHandler.start({signal:h,schedule:g}),v=this._tileHandler.spriteMosaic;v.then((e=>{!d(h)&&this._tileHandler&&(this.painter=new pt(e,this._tileHandler.glyphMosaic))})),_.then((()=>this._tileHandlerController=null)),this._updatingHandles.add((()=>({style:this.layer.currentStyleInfo.style,pixelRatio:this.view.state?.contentPixelRatio})),(({style:e,pixelRatio:t})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();let n=new U(e),r=new ze(this.layer,n,t,this._memCache),i=r.start({signal:this._tileHandlerController.signal,schedule:g}),a=r.spriteMosaic;i.then((()=>this._tileHandlerController=null)),this._updatingHandles.addPromise(Promise.all([i,a]).then((([,e])=>{let t=this._tileHandler,n=this.painter;this.painter=new pt(e,r.glyphMosaic),this._tileHandler=r,this.emit(`data-changed`),t.destroy(),n&&n.dispose()})))}));let y=Promise.all([u,_,v]);this.addResolvingPromise(y)}destroy(){this.painter=T(this.painter),this._tileHandlerController=le(this._tileHandlerController),this._tileHandler=P(this._tileHandler),this._memCache=P(this._memCache)}get contentZoom(){return N(`disable-feature:vtl-level-shift`)?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){let e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,n=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,n);return this.layer.maxScale?r.maxLevel++:r.maxLevel+=this.levelShift,r}get dataScaleRange(){let e=this.tileInfo.lods;return{minScale:e[0].scale,maxScale:e[e.length-1].scale}}get dataLevelRange(){let{minScale:e,maxScale:t}=this.dataScaleRange,n=this.levelRangeFromScaleRange(e,t);return n.minLevel===1&&this.tileInfo.size[0]===256&&(n.minLevel=0),n.maxLevel+=this.levelShift,n}async fetchTile(e,t,n,r){return this._tileHandler.getVectorTile(e,t,n,r)}};I([R()],$.prototype,`layer`,void 0),I([R()],$.prototype,`levelShift`,void 0),I([R()],$.prototype,`contentZoom`,null),I([R()],$.prototype,`displayLevelRange`,null),I([R()],$.prototype,`tileInfo`,void 0),I([R()],$.prototype,`dataScaleRange`,null),I([R()],$.prototype,`dataLevelRange`,null),I([R()],$.prototype,`updatingProgressValue`,void 0),$=I([b(`esri.views.3d.layers.VectorTileLayerView3D`)],$);var mt=$;function ht(e){return t=>e.immediate.schedule(t)}export{mt as default};