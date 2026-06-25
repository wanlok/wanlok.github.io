import{CC as e,El as t,Fl as n,HS as r,Il as i,Ks as a,Lc as o,N_ as s,Nl as c,Qs as l,Tl as u,YC as d,ZS as f,_h as p,as as m,bg as h,d_ as g,is as _,kl as v,nc as y,qs as b,rs as x,uw as S,vo as C,xb as w,yb as T}from"./index-BTcWy-iY.js";var E=class extends n{constructor(){super(...arguments),this.clipBox=T(w),this.useFixedSizes=!1,this.useRealWorldSymbolSizes=!1,this.scaleFactor=1,this.minSizePx=0,this.size=0,this.sizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}},D=class extends m{constructor(e,t,n){super(e),this.origin=e,this.isLeaf=t,this.splatSize=n}};function O(n){let s=new u,m=n.output===y.Color,g=n.output===y.LinearDepth,S=n.output===y.Highlight,{vertex:w,fragment:T}=s;return s.include(_,n),s.attributes.add(h.POSITION,`vec3`),s.attributes.add(h.COLOR,`vec3`),w.uniforms.add(new l(`modelView`,((e,t)=>r(A,t.camera.viewMatrix,f(A,e.origin)))),new t(`proj`,((e,t)=>t.camera.projectionMatrix)),new C(`screenMinMaxSize`,((e,t,n)=>p(M,n.useFixedSizes?0:n.minSizePx*t.camera.pixelRatio,k(e.isLeaf)*t.camera.pixelRatio))),n.useFixedSizes?new v(`pointScale`,((e,t)=>p(M,e.fixedSize*t.camera.pixelRatio,t.camera.fullHeight))):new C(`pointScale`,((e,t,n)=>p(M,e.splatSize*n.scaleFactor*t.camera.pixelRatio,t.camera.fullHeight/t.camera.pixelRatio)))),n.clippingEnabled?w.uniforms.add(new o(`clipMin`,((e,t,n)=>d(j,n.clipBox[0]-e.origin[0],n.clipBox[1]-e.origin[1],n.clipBox[2]-e.origin[2]))),new o(`clipMax`,((e,t,n)=>d(j,n.clipBox[3]-e.origin[0],n.clipBox[4]-e.origin[1],n.clipBox[5]-e.origin[2])))):(w.constants.add(`clipMin`,`vec3`,[-e,-e,-e]),w.constants.add(`clipMax`,`vec3`,[e,e,e])),g?(a(s),b(s),s.varyings.add(`depth`,`float`)):n.output!==y.Highlight&&s.varyings.add(`vColor`,`vec3`),w.code.add(i`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${n.drawScreenSize?i`
      float clampedScreenSize = pointSize;`:i`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${g?i`depth = calculateLinearDepth(nearFar, camera.z);`:``}
     ${m?i`vColor = color;`:``}
    }
  `),T.include(c,n),S&&s.include(x,n),T.code.add(i`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${g?i`fragColor = float2rgba(depth);`:``}
      ${S?i`outputHighlight();`:``}
      ${m?i`fragColor = vec4(vColor, 1.0);`:``}
    }
  `),s}function k(e){return e?256:64}var A=s(),j=S(),M=g(),N=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:D,PointRendererPassParameters:E,build:O,getMaxPointSizeScreenspace:k},Symbol.toStringTag,{value:`Module`}));export{E as a,O as i,k as n,D as r,N as t};