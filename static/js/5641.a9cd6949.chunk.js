"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[5641],{55641:function(t,e,n){n.r(e),n.d(e,{executeForTopExtents:function(){return p}});var r=n(74165),u=n(1413),o=n(15861),i=(n(59486),n(23084)),s=n(88031),a=n(54307),l=n(53866);function p(t,e,n){return c.apply(this,arguments)}function c(){return c=(0,o.Z)((0,r.Z)().mark((function t(e,n,o){var p,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=(0,i.en)(e),t.next=3,(0,s.m5)(p,a.Z.from(n),(0,u.Z)({},o));case 3:return c=t.sent,t.abrupt("return",{count:c.data.count,extent:l.Z.fromJSON(c.data.extent)});case 5:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},88031:function(t,e,n){n.d(e,{IJ:function(){return y},m5:function(){return h},vB:function(){return Z},w7:function(){return v}});var r=n(74165),u=n(1413),o=n(15861),i=n(76200),s=n(92026),a=n(35995),l=n(77981),p=n(91340),c=n(22585),d=n(68620),f="Layer does not support extent calculation.";function y(t,e,n,r){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,r.Z)().mark((function t(e,n,u,o){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e,n,"json",o);case 2:return i=t.sent,t.abrupt("return",((0,d.p)(n,u,i.data),i));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,n){return F.apply(this,arguments)}function F(){return(F=(0,o.Z)((0,r.Z)().mark((function t(e,n,u){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.pC)(n.timeExtent)&&n.timeExtent.isEmpty?{data:{objectIds:[]}}:w(e,n,"json",u,{returnIdsOnly:!0}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e,n){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,r.Z)().mark((function t(e,n,u){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.pC)(n.timeExtent)&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(e,n,"json",u,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(t){var e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(f);if(e.hasOwnProperty("count"))throw new Error(f);return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t,e,n){return(0,s.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},d="string"==typeof t?(0,a.mN)(t):t,f=e.geometry?[e.geometry]:[];return r.responseType="pbf"===n?"array-buffer":"json",(0,p.aX)(f,null,r).then((function(t){var p=t&&t[0];(0,s.pC)(p)&&((e=e.clone()).geometry=p);var f=(0,c.A)((0,u.Z)((0,u.Z)((0,u.Z)({},d.query),{},{f:n},o),function(t,e){var n,r,u=t.geometry,o=t.toJSON(),i=o;if((0,s.pC)(u)&&(i.geometry=JSON.stringify(u),i.geometryType=(0,l.Ji)(u),i.inSR=u.spatialReference.wkid||JSON.stringify(u.spatialReference)),null!==(n=o.topFilter)&&void 0!==n&&n.groupByFields&&(i.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!==(r=o.topFilter)&&void 0!==r&&r.orderByFields&&(i.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?o.outFields.includes("*")?i.outFields="*":i.outFields=o.outFields.join(","):delete i.outFields,o.outSR?i.outSR=o.outSR.wkid||JSON.stringify(o.outSR):u&&o.returnGeometry&&(i.outSR=i.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){var a=o.timeExtent,p=a.start,c=a.end;null==p&&null==c||(i.time=p===c?p:"".concat(null!==p&&void 0!==p?p:"null",",").concat(null!==c&&void 0!==c?c:"null")),delete o.timeExtent}return i}(e,o)));return(0,i.default)((0,a.v_)(d.path,"queryTopFeatures"),(0,u.Z)((0,u.Z)({},r),{},{query:(0,u.Z)((0,u.Z)({},f),r.query)}))}))}}}]);
//# sourceMappingURL=5641.a9cd6949.chunk.js.map