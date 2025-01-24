"use strict";(self.webpackChunkinkken=self.webpackChunkinkken||[]).push([[3161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={slug:"npm",title:"npm",authors:[{name:"\u590f\u4e00"}],tags:["\u5f00\u53d1"]},p=void 0,l={permalink:"/npm",source:"@site/blog/Develop/2022-01-11-npm/index.mdx",title:"npm",description:"\u2014END\u2014",date:"2022-01-11T00:00:00.000Z",formattedDate:"2022\u5e741\u670811\u65e5",tags:[{label:"\u5f00\u53d1",permalink:"/tags/\u5f00\u53d1"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"\u590f\u4e00"}],frontMatter:{slug:"npm",title:"npm",authors:[{name:"\u590f\u4e00"}],tags:["\u5f00\u53d1"]},prevItem:{title:"cnpm",permalink:"/cnpm"},nextItem:{title:"yarn",permalink:"/yarn"}},i={authorsImageUrls:[void 0]},c=[],u={toc:c},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n\u5e38\u7528\u547d\u4ee4\uff1a\n\nnpm -v // \u67e5\u770b\u7248\u672c\u53f7\n\nnpm install (npm i) // \u5b89\u88c5\u9879\u76ee\u76f8\u5173\u4f9d\u8d56\uff08vue/react\uff09\n\nnpm ci // \u548cnpm install\u547d\u4ee4\u4e00\u6837\uff0c\u662f\u7528\u6765\u5b89\u88c5\u4f9d\u8d56\u7684\u547d\u4ee4\uff0c\u4f46\u4ed6\u53ef\u4ee5\u6bd4\u5e38\u89c4\u7684 npm \u5b89\u88c5\u5feb\u5f97\u591a\uff0c\u4e5f\u6bd4\u5e38\u89c4\u5b89\u88c5\u66f4\u4e25\u683c\uff0c\u4ed6\u53ef\u4ee5npm\u4f9d\u8d56\u5b89\u88c5\u7684\u4e00\u81f4\u548c\u7a33\u5b9a (\u9501\u7248\u672c)\n\nnpm uninstall express // \u5378\u8f7d Node.js \u6a21\u5757\n\nnpm update express // \u66f4\u65b0\u6a21\u5757\n\nnpm search express // \u641c\u7d22\u6a21\u5757\n\nnpm run dev // \u542f\u52a8\u5f00\u53d1\u73af\u5883 \uff08vue\uff09\n\nnpm run build // \u6253\u5305\u751f\u4ea7\u73af\u5883\u7684\u4ee3\u7801\uff0c\u6253\u5305\u6210\u529f\u4f1a\u751f\u6210dist\u6587\u4ef6\u5939\uff08\u91cc\u9762\u6709index.html\u6587\u4ef6\u548cstatic\u6587\u4ef6\u5939\uff09\uff1b\u9879\u76ee\u4e0a\u7ebf\u65f6\uff0c\u53ea\u9700\u8981\u5c06 dist \u6587\u4ef6\u5939\u653e\u5230\u670d\u52a1\u5668\u5c31\u884c\u4e86\u3002\uff08vue\uff09\n\nnpm start // \u542f\u52a8\u5f00\u53d1\u73af\u5883 \uff08react\uff09\n\nnpm run build // \u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u5230build\u76ee\u5f55\u3002\u5c06\u6574\u4e2a\u5e94\u7528\u6253\u5305\u53d1\u5e03\uff0c\u81ea\u52a8\u8bd5\u7528webpack\u8fdb\u884c\u538b\u7f29\u4e0e\u4f18\u5316\u3002\n\n")),(0,a.kt)("p",null,"\u2014END\u2014"))}s.isMDXComponent=!0}}]);