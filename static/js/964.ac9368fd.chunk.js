"use strict";(self.webpackChunkwanlok_component_react=self.webpackChunkwanlok_component_react||[]).push([[964],{20964:(e,t,a)=>{a.d(t,{save:()=>p,saveAs:()=>y});var r=a(97924),o=a(72945);const i="Image Service",n="imagery-layer-save",l="imagery-layer-save-as",s="imagery-tile-layer-save",c="imagery-tile-layer-save-as";function d(e){var t;if("imagery"===e.type)return{isValid:!0};const{raster:a}=e,r="Function"===(null===a||void 0===a?void 0:a.datasetFormat)?null===(t=a.primaryRasters)||void 0===t?void 0:t.rasters[0]:a;return{isValid:"RasterTileServer"===(null===r||void 0===r?void 0:r.datasetFormat)&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function m(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function u(e,t){const{parsedUrl:a,title:r,fullExtent:i}=e;t.url=a.path,t.title||(t.title=r);try{t.extent=await(0,o.sQ)(i)}catch{t.extent=void 0}(0,o.OM)(t,o.mm.METADATA),"imagery-tile"===e.type&&(0,o.LG)(t,o.mm.TILED_IMAGERY)}async function p(e,t){const a="imagery"===e.type?n:s;return(0,r.UN)({layer:e,itemType:i,validateLayer:d,createItemData:m,errorNamePrefix:a},t)}async function y(e,t,a){const o="imagery"===e.type?l:c;return(0,r.Uh)({layer:e,itemType:i,validateLayer:d,createItemData:m,errorNamePrefix:o,newItem:t,setItemProperties:u},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>g,Uh:()=>h});var r=a(50076),o=a(37888),i=a(65308),n=a(70652),l=a(79942),s=a(72945),c=a(65526),d=a(24907);async function m(e){const{layer:t,errorNamePrefix:a,validateLayer:o}=e;await t.load(),function(e,t,a){const o=a(e);if(!o.isValid)throw new r.A("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,a,o)}function u(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function p(e){const{item:t,errorNamePrefix:a,layer:o,validateItem:i}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:o,errorNamePrefix:i,layer:n}=e,l=[a];if(o&&l.push(o),!l.includes(t.type)){const e=l.map((e=>"'".concat(e,"'"))).join(", ");throw new r.A("".concat(i,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:n})}}(e),i){const e=i(t);if(!e.isValid)throw new r.A("".concat(a,":invalid-parameters"),e.errorMessage,{layer:o})}}function y(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:o}=t;if(!o)throw new r.A("".concat(a,":portal-item-not-set"),u(t,"requires the portalItem property to be set"));if(!o.loaded)throw new r.A("".concat(a,":portal-item-not-loaded"),u(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:o})}function v(e){var t,a,r,o;const{newItem:l,itemType:s}=e;let c=n.default.from(l);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=s),null!==(o=(r=c).portal)&&void 0!==o||(r.portal=i.A.getDefault()),p({...e,item:c}),c}function f(e){return(0,l.m)(e,"portal-item")}async function w(e,t,a){var r,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const i=e.write({},t);return await Promise.all(null!==(r=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==r?r:[]),(0,d.c)(t,{errorName:"layer-write:unsupported"},a),i}function I(e){(0,s.LG)(e,s.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function g(e,t){const{layer:a,createItemData:r,createJSONContext:i,saveResources:n,supplementalUnsupportedErrors:l}=e;await m(e),y(e);const s=a.portalItem,c=i?i(s):f(s),d=await w(a,c,{...t,supplementalUnsupportedErrors:l}),u=await r({layer:a,layerJSON:d},s);return I(s),await s.update({data:u}),(0,o.v)(c),await(null===n||void 0===n?void 0:n(s,c)),s}async function h(e,t){const{layer:a,createItemData:r,createJSONContext:i,setItemProperties:n,saveResources:l,supplementalUnsupportedErrors:s}=e;await m(e);const c=v(e),d=i?i(c):f(c),u=await w(a,d,{...t,supplementalUnsupportedErrors:s}),p=await r({layer:a,layerJSON:u},c);return await n(a,c),I(c),await async function(e,t,a){var r;const o=e.portal;await o.signIn(),await(null===(r=o.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,p,t),a.portalItem=c,(0,o.v)(d),await(null===l||void 0===l?void 0:l(c,d)),c}}}]);
//# sourceMappingURL=964.ac9368fd.chunk.js.map