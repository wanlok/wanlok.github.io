import{Dl as e,Il as t,Ol as n,Tl as r,Ys as i,bg as a}from"./index-DhPuEqAb.js";function o(o){let s=new r,{vertex:c,fragment:l}=s;i(c,o),c.uniforms.add(new e(`width`,(e=>e.width))),s.attributes.add(a.POSITION,`vec3`),s.attributes.add(a.NORMAL,`vec3`),s.attributes.add(a.UV0,`vec2`),s.attributes.add(a.LENGTH,`float`),s.varyings.add(`vtc`,`vec2`),s.varyings.add(`vlength`,`float`),s.varyings.add(`vradius`,`float`),c.code.add(t`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),l.uniforms.add(new e(`outlineSize`,(e=>e.outlineSize)),new n(`outlineColor`,(e=>e.outlineColor)),new e(`stripeLength`,(e=>e.stripeLength)),new n(`stripeEvenColor`,(e=>e.stripeEvenColor)),new n(`stripeOddColor`,(e=>e.stripeOddColor)));let u=1/Math.sqrt(2);return l.code.add(t`
    const float INV_SQRT2 = ${t.float(u)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),s}var s=Object.freeze(Object.defineProperty({__proto__:null,build:o},Symbol.toStringTag,{value:`Module`}));export{s as n,o as t};