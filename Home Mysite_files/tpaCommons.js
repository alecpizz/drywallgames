(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[78],{335:function(e,n,t){"use strict";t.r(n),t.d(n,"site",(function(){return s}));var a=t(51),r=t(501),o=t(217);t.d(n,"MasterPageTpaPropsCacheSymbol",(function(){return o.a})),t.d(n,"TpaSrcBuilderSymbol",(function(){return o.d})),t.d(n,"TpaContextMappingSymbol",(function(){return o.b}));var i=t(502),c=t(504),u=t(503);t.d(n,"TpaHandlersManagerSymbol",(function(){return o.c})),t.d(n,"name",(function(){return o.e}));var d=t(410);for(var l in d)["default","site","TpaHandlersManagerSymbol","name","MasterPageTpaPropsCacheSymbol","TpaSrcBuilderSymbol","TpaContextMappingSymbol"].indexOf(l)<0&&function(e){t.d(n,e,(function(){return d[e]}))}(l);var s=function(e){e(a.a.AppDidMountHandler).to(r.a),e(o.a).to(i.a),e(o.b).to(u.a),e(o.d).to(c.a)}},410:function(e,n){},474:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),r=function(e,n){var t=e.split("/"),r=t.indexOf(n||"");return r<0||t[r]!==n?null:Object(a.e)(t.splice(r)).slice(1)}},501:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(0),r=t(7),o=t(316),i=t(34),c=t(217),u=t(242),d=t(147),l=function(e){if(e.data)try{return JSON.parse(e.data)}catch(e){}return{}},s=["getWixUpgradeUrl","stylesReady","getViewModeInternal","setHelpArticle"],p=Object(r.h)([u.a,i.a,c.b,o.d,o.b,Object(r.g)(d.a)],(function(e,n,t,r,o,i){return{appDidMount:function(){e.addWindowMessageHandler({canHandleEvent:function(e){return!!(e.source&&(n=l(e),n&&["TPA","TPA2"].includes(n.intent)));var n},handleEvent:function(e){return Object(a.b)(this,void 0,void 0,(function(){var o,u,d,p,f,g,v;return Object(a.d)(this,(function(m){switch(m.label){case 0:return o=l(e),u=o.type,d=o.callId,s.includes(u)?[2]:(p=function(e){var n=e.compId;if(n)return t.getTpaComponentContextId(n)||r.getContextIdOfCompId(n)}(o),f=t.getTpaComponentIdFromTemplate(o.compId),g=Object(a.a)(Object(a.a)({},o),{compId:null!=f?f:o.compId}),v=g.compId,i&&i.tpa.addMessage({msg:g,compId:v,contextId:p}),p?[4,(b=p,Object(a.b)(void 0,void 0,Promise,(function(){return Object(a.d)(this,(function(e){switch(e.label){case 0:return[4,n(b)];case 1:return[2,e.sent().getAllImplementersOnPageOf(c.c)[0]]}}))})))]:(console.error("TPA handler message caller does not belong to any page",{type:u,callId:d,compId:v}),[2]));case 1:return m.sent().handleMessage(e.source,g).catch((function(e){console.error("TpaHandlerError",u,p,v,e)})),[2]}var b}))}))}})}}}))},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(15),r=t.n(a),o=t(7),i=t(316),c=t(214),u=Object(o.h)([i.b,c.a],(function(e,n){var t={};return{cacheProps:function(n,a){var o=r.a.omitBy(a||e.get(n),r.a.isFunction);t[n]=r.a.isEmpty(o)?null:o},getCachedProps:function(e){var a,o,i,c,u=t[e];if(u)return r.a.isEqual(null===(o=null===(a=n.getCurrentRouteInfo())||void 0===a?void 0:a.dynamicRouteData)||void 0===o?void 0:o.publicData,null===(c=null===(i=n.getPreviousRouterInfo())||void 0===i?void 0:i.dynamicRouteData)||void 0===c?void 0:c.publicData)||delete u.src,u}}}))},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(7),r=Object(a.h)([],(function(){var e={},n={};return{registerTpasForContext:function(n,t){t.forEach((function(t){e[t]=n}))},getTpaComponentContextId:function(n){return e[n]},registerTpaTemplateId:function(e,t){n[e]=t},getTpaComponentIdFromTemplate:function(e){return n[e]}}}))},504:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var a=t(0),r=t(7),o=t(316),i=t(29),c=t(28),u=t(214),d=t(321),l=t(308),s=t(217),p=t(23),f=t(24),g=t(19),v=t(15),m=t.n(v),b=t(146),I=t(474),y=function(e){var n,t=e.getCurrentConsentPolicy();return(n=t).defaultPolicy&&m.a.every(n.policy)||!e._getConsentPolicyHeader()["consent-policy"]?void 0:decodeURIComponent(e._getConsentPolicyHeader()["consent-policy"])},h=Object(r.h)([o.b,Object(r.f)(i.e,s.e),p.a,f.a,c.a,g.a,u.a,d.a,l.b,Object(r.g)(b.a)],(function(e,n,t,r,o,i,c,u,d,l){var s=n.widgetsClientSpecMapData,p=n.siteRevision,f=n.viewMode,g=n.appSectionParams,v=n.externalBaseUrl,b=n.requestUrl,h=n.extras,C=n.deviceType,O=n.tpaDebugParams,P=n.locale,w=n.timeZone,T=function(){return o?o.location.href:b},j=function(e,n,t){var r=Boolean(t.tpaPageUri&&!m.a.isNil(n)&&n===t.tpaApplicationId),o=Object(a.e)(T().replace(v,"").split("?"),1)[0],i=r&&Object(I.a)(o,t.tpaPageUri);return i?function(e,n){if(0===e.length)return n;var t=e.join("/"),a=new URL(n);return a.pathname+="/"+t,a.href}(i,e):e};return{buildSrc:function(e,n,u,v,b){var I,S,x,R;void 0===b&&(b={});var D=m.a.merge({tpaInnerRouteConfig:null,extraQueryParams:{},appDefinitionId:""},b),M=u.widgetId,U=u.width,N=u.height,_=u.externalId,A=u.templateId,H=s[M]||{},L=H.applicationId,E=H.appDefinitionId||D.appDefinitionId,B=null===(S=null===(I=c.getCurrentRouteInfo())||void 0===I?void 0:I.dynamicRouteData)||void 0===S?void 0:S.publicData,J=A||e,F=e,k=JSON.stringify(i.getCommonConfig()),q=new URL(T()),Q=Object(a.a)(Object(a.a)({instance:t.getAppInstanceByAppDefId(E),pageId:n,compId:J,viewerCompId:F,siteRevision:""+p,viewMode:f,deviceType:C,externalId:_,locale:P,commonConfig:k,tz:w,vsi:d.viewerSessionId,"consent-policy":y(r),currency:h.currency,currentCurrency:q.searchParams.get("currency")||h.currency,width:m.a.isNumber(U)?""+U:null,height:m.a.isNumber(N)?""+N:null},function(){if(o){var e=new URL(T()).searchParams.get("appSectionParams");return JSON.parse(decodeURIComponent(e||"{}"))||{}}return g}()),D.extraQueryParams);l&&(Q.lang=null===(x=l.currentLanguage)||void 0===x?void 0:x.languageCode,Q.dateNumberFormat=null===(R=l.currentLanguage)||void 0===R?void 0:R.locale,m.a.isNil(l.isOriginalLanguage)||(Q.isPrimaryLanguage=""+l.isOriginalLanguage)),B&&(Q.routerData=JSON.stringify(B)),m.a.entries(O).forEach((function(e){var n=Object(a.e)(e,2),t=n[0],r=n[1];m.a.isNil(r)||(Q[t]=r)}));var W=D.tpaInnerRouteConfig?j(v,L,D.tpaInnerRouteConfig):v,z=new URL(W);return m.a.entries(Q).forEach((function(e){var n=Object(a.e)(e,2),t=n[0],r=n[1];m.a.isNil(r)||z.searchParams.set(t,r)})),z.href}}}))}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/tpaCommons.17ad89d7.chunk.min.js.map