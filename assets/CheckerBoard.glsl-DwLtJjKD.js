import{Il as e,Ol as t,Pc as n,Tc as r,Tl as i,Ys as a,bg as o,dc as s,kl as c}from"./index-Ds-I3SNu.js";function l(l){let u=new i,{vertex:d,fragment:f}=u;return a(d,l),u.attributes.add(o.POSITION,`vec3`),u.attributes.add(o.UV0,`vec2`),u.varyings.add(`vUV`,`vec2`),l.multipassEnabled&&u.varyings.add(`depth`,`float`),d.code.add(e`
    void main(void) {
      vUV = uv0;
      ${l.multipassEnabled?`depth = (view * vec4(position, 1.0)).z;`:``}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),u.include(r,l),f.uniforms.add(new c(`size`,(e=>e.size))),f.uniforms.add(new t(`color1`,(e=>e.color1))),f.uniforms.add(new t(`color2`,(e=>e.color2))),f.include(n),f.code.add(e`
    void main() {
      ${l.multipassEnabled?`terrainDepthTest(depth);`:``}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${l.transparencyPassType===s.Color?`fragColor = premultiplyAlpha(fragColor);`:``}
    }
  `),u}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as t};