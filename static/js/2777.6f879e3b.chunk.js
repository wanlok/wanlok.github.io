"use strict";(self.webpackChunkwanlok_component_react=self.webpackChunkwanlok_component_react||[]).push([[2777],{12777:(e,t,s)=>{s.r(t),s.d(t,{TerrainTileTree3DDebugger:()=>h});var l=s(35143),i=(s(35238),s(68134)),n=(s(76460),s(81806),s(47249),s(50076),s(85842)),r=s(2413),o=s(29614),a=s(65215);let h=class extends o.E{constructor(e){super(e),this.enablePolygons=!1}initialize(){(0,i.wB)((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),i.Vh)}getTiles(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((t=>({...t,geometry:a.A.fromExtent((0,r.w1)(t.extent,e))})))}};h=(0,l._)([(0,n.$)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],h)},29614:(e,t,s)=>{s.d(t,{E:()=>m});var l=s(35143),i=s(69539),n=s(39356),r=(s(95444),s(91967)),o=s(19276),a=s(15941),h=s(46053),c=(s(81806),s(76460),s(47249),s(85842)),b=s(37471),p=s(86875),y=s(86659),d=s(21405),g=s(48670),u=s(92135),w=s(68905);const _=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let m=class extends r.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=_.map((e=>new p.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,s=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,r)=>{const h=l.lij.toString();s.delete(h);const c=l.lij[0],p=l.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new n.A({geometry:p,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),t.push(e)}if(this.enableLabels){const s=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(l),c=r/(e.length-1),_=(0,a.Cc)(0,200,c),m=(0,a.Cc)(20,6,c)/.75,v=null!=l.loadPriority&&l.loadPriority>=e.length,A=new i.A([_,v?0:_,v?0:_]),f="3d"===this.view.type?()=>new b.A({verticalOffset:new g.A({screenLength:40/.75}),callout:new u.A({color:new i.A("white"),border:new w.A({color:new i.A("black")})}),symbolLayers:new o.A([new d.A({text:s,halo:{color:"white",size:1/.75},material:{color:A},size:m})])}):()=>new y.A({text:s,haloColor:"white",haloSize:1/.75,color:A,size:m}),T=this._labels.get(h);if(T){const e=f();null!=T.symbol&&JSON.stringify(e)===JSON.stringify(T.symbol)||(T.symbol=e)}else{const e=new n.A({geometry:p.extent.center,symbol:f()});this._labels.set(h,e),t.push(e)}}}));const l=new Array;s.forEach((e=>{const t=this._polygons.get(e);null!=t&&(l.push(t),this._polygons.delete(e));const s=this._labels.get(e);null!=s&&(l.push(s),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.MZ)({constructOnly:!0})],m.prototype,"view",void 0),(0,l._)([(0,h.MZ)({readOnly:!0})],m.prototype,"updating",void 0),(0,l._)([(0,h.MZ)()],m.prototype,"enabled",null),m=(0,l._)([(0,c.$)("esri.views.support.TileTreeDebugger")],m)}}]);
//# sourceMappingURL=2777.6f879e3b.chunk.js.map