const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ImageMaterial.glsl-CLKx3L7q.js","assets/index-k_xmxIhg.js","assets/index-C9qWRVJ5.css"])))=>i.map(i=>d[i]);
import{$c as e,$s as t,Dl as n,Do as r,Eo as i,Fc as a,Gs as o,Il as s,Jo as c,Js as l,Ko as u,Mg as d,Or as f,Pc as p,Qc as m,Qo as h,Tc as g,Tl as _,To as v,Xc as y,Xo as b,Ys as x,_l as S,bg as C,dc as w,dr as T,ec as E,el as D,fc as O,fs as k,il as A,is as j,jg as M,ls as N,nc as P,nl as F,ok as I,ol as L,os as R,qo as ee,rh as z,rk as B,rl as V,ts as H,wl as U,wo as W,xl as G}from"./index-k_xmxIhg.js";function K(e){let t=new _,{vertex:r,fragment:i}=t;return x(r,e),t.include(o,e),t.attributes.add(C.POSITION,`vec3`),t.attributes.add(C.UV0,`vec2`),e.perspectiveInterpolation&&t.attributes.add(C.PERSPECTIVEDIVIDE,`float`),t.varyings.add(`vpos`,`vec3`),e.multipassEnabled&&t.varyings.add(`depth`,`float`),r.code.add(s`
    void main(void) {
      vpos = position;
      ${e.multipassEnabled?`depth = (view * vec4(vpos, 1.0)).z;`:``}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${e.perspectiveInterpolation?`gl_Position *= perspectiveDivide;`:``}
    }
  `),t.include(j,e),t.include(g,e),i.uniforms.add(new U(`tex`,(e=>e.texture)),new n(`opacity`,(e=>e.opacity))),t.varyings.add(`vTexCoord`,`vec2`),e.output===P.Alpha?i.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${e.multipassEnabled?`terrainDepthTest(depth);`:``}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${s.float(H)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(i.include(p),i.code.add(s`
    void main() {
      discardBySlice(vpos);
      ${e.multipassEnabled?`terrainDepthTest(depth);`:``}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${s.float(H)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${e.transparencyPassType===w.Color?`fragColor = premultiplyAlpha(fragColor);`:``}
    }
    `)),t}var q=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:`Module`})),J=class t extends L{initializeProgram(e){return new A(e.rctx,t.shader.get().build(this.configuration),Z)}_setPipelineState(t,n){let r=this.configuration,a=t===w.NONE,o=t===w.FrontFace;return m({blending:r.output!==P.Color&&r.output!==P.Alpha||!r.transparent?null:a?Y:u(t),culling:D(r.cullFace),depthTest:{func:h(t)},depthWrite:a?r.writeDepth?F:null:ee(t),colorWrite:e,stencilWrite:r.hasOccludees?W:null,stencilTest:r.hasOccludees?n?i:v:null,polygonOffset:a||o?null:b(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};J.shader=new G(q,(()=>I(()=>import(`./ImageMaterial.glsl-CLKx3L7q.js`),__vite__mapDeps([0,1,2]))));var Y=V(S.ONE,S.ONE_MINUS_SRC_ALPHA),X=class extends l{constructor(){super(...arguments),this.output=P.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=w.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}};B([y({count:P.COUNT})],X.prototype,`output`,void 0),B([y({count:d.COUNT})],X.prototype,`cullFace`,void 0),B([y()],X.prototype,`hasSlicePlane`,void 0),B([y()],X.prototype,`transparent`,void 0),B([y()],X.prototype,`enableOffset`,void 0),B([y()],X.prototype,`writeDepth`,void 0),B([y()],X.prototype,`hasOccludees`,void 0),B([y({count:w.COUNT})],X.prototype,`transparencyPassType`,void 0),B([y()],X.prototype,`multipassEnabled`,void 0),B([y()],X.prototype,`cullAboveGround`,void 0),B([y()],X.prototype,`perspectiveInterpolation`,void 0),B([y({constValue:!1})],X.prototype,`occlusionPass`,void 0);var Z=new Map([[C.POSITION,0],[C.UV0,2],[C.PERSPECTIVEDIVIDE,3]]),Q=class extends T{constructor(e){super(e,new ne),this.supportsEdges=!0,this.produces=new Map([[O.OPAQUE_MATERIAL,e=>e===P.Highlight||E(e)&&!this.parameters.transparent],[O.TRANSPARENT_MATERIAL,e=>E(e)&&this.parameters.transparent&&this.parameters.writeDepth],[O.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>E(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[O.DRAPED_MATERIAL,e=>t(e)]]),this._vertexAttributeLocations=Z,this._configuration=new X}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<c,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new $(e)}createBufferWriter(){let e=f.clone();return this.parameters.perspectiveInterpolation&&e.f32(C.PERSPECTIVEDIVIDE),new te(e)}},$=class extends a{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(J,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==P.Color&&this._output!==P.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}},te=class extends r{write(e,t,n,r,i){for(let a of this.vertexBufferLayout.fields.keys()){let o=n.attributes.get(a);if(o)if(a===C.PERSPECTIVEDIVIDE){M(o.size===1);let e=r.getField(a,z);e&&N(o,e,i)}else R(a,o,e,t,r,i)}}},ne=class extends k{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}};export{K as n,Q as t};