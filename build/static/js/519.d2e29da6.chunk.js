"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[519,3139],{20519:function(e,r,t){t.r(r),t.d(r,{populateOperationalLayers:function(){return b}});var a=t(1413),n=t(74165),u=t(37762),i=t(15861),s=t(40281),c=(t(93169),t(66978)),o=t(19610),l=t(98995);function p(e){return d(e,"notes")}function y(e){return d(e,"markup")}function f(e){return d(e,"route")}function d(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var L=t(43139),v=t(21371);function b(e,r,t){return m.apply(this,arguments)}function m(){return m=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var i,s,o,l,p,y,f,d,L;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:i=[],s=(0,u.Z)(t);try{for(s.s();!(o=s.n()).done;)l=o.value,p=k(l,a),"GroupLayer"===l.layerType?i.push(O(p,l,a)):i.push(p)}catch(n){s.e(n)}finally{s.f()}return e.next=7,(0,c.as)(i);case 7:y=e.sent,f=(0,u.Z)(y);try{for(f.s();!(d=f.n()).done;)(L=d.value).value&&r.add(L.value)}catch(n){f.e(n)}finally{f.f()}case 10:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var S={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},h={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},x={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function k(e,r){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Z,e.next=3,M(r,t);case 3:return e.t1=e.sent,e.t2=r,e.t3=t,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r,t){return G.apply(this,arguments)}function G(){return(G=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((u=new r).read(t,a.context),e.t0="group"===u.type&&A(t),!e.t0){e.next=6;break}return e.next=6,D(u,t,a.context);case 6:return e.next=8,(0,v.y)(u,a.context);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,r){return N.apply(this,arguments)}function N(){return N=(0,i.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,s,c,d,v,b,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t.context,i=C(u),!(s=r.layerType||r.type)&&t&&t.defaultLayerType&&(s=t.defaultLayerType),c=i[s],d=c?o.T[c]:o.T.UnknownLayer,!F(r)){e.next=20;break}if(v=null===u||void 0===u?void 0:u.portal,!r.itemId){e.next=18;break}return b=new l.default({id:r.itemId,portal:v}),e.next=11,b.load();case 11:return e.next=13,(0,L.selectLayerClassPath)(b);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:m=e.t0,d=o.T[m];case 18:e.next=21;break;case 20:"ArcGISFeatureLayer"===s?p(r)||y(r)?d=o.T.MapNotesLayer:f(r)?d=o.T.RouteLayer:A(r)&&(d=o.T.GroupLayer):r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?d=o.T.WMTSLayer:"WFS"===s&&"2.0.0"!==(null===(a=r.wfsInfo)||void 0===a?void 0:a.version)&&(d=o.T.UnsupportedLayer);case 21:return e.abrupt("return",d());case 22:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function A(e){var r,t,a;return"ArcGISFeatureLayer"===e.layerType&&!F(e)&&(null!==(r=null===(t=e.featureCollection)||void 0===t||null===(a=t.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function F(e){return"Feature Collection"===e.type}function C(e){var r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=x;break;case"ground":r=h;break;default:r=S}else switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=I}return r}function O(e,r,t){return W.apply(this,arguments)}function W(){return W=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var u,i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new s.Z,i=b(u,Array.isArray(t.layers)?t.layers:[],a),e.next=4,r;case 4:return c=e.sent,e.next=7,i;case 7:if("group"!==c.type){e.next=9;break}return e.abrupt("return",(c.layers.addMany(u),c));case 9:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function D(e,r,t){return V.apply(this,arguments)}function V(){return V=(0,i.Z)((0,n.Z)().mark((function e(r,t,u){var i,s,c,l,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.T.FeatureLayer,e.next=3,s();case 3:c=e.sent,l=t.featureCollection,p=null===l||void 0===l?void 0:l.showLegend,y=null===l||void 0===l||null===(i=l.layers)||void 0===i?void 0:i.map((function(e,n){var i,s,o=new c;o.read(e,u);var l=(0,a.Z)((0,a.Z)({},u),{},{ignoreDefaults:!0});return o.read({id:"".concat(r.id,"-sublayer-").concat(n),visibility:null===(i=null===(s=t.visibleLayers)||void 0===s?void 0:s.includes(n))||void 0===i||i},l),null!=p&&o.read({showLegend:p},l),o})),r.layers.addMany(null!==y&&void 0!==y?y:[]);case 8:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}},32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var a=t(35995),n=t(70032);function u(e){return{origin:"portal-item",url:(0,a.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,a.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return C},getNumLayersAndTables:function(){return W},getSubtypeGroupLayerIds:function(){return V},load:function(){return b},preprocessFSItemData:function(){return A}});var a=t(93433),n=t(29439),u=t(74165),i=t(15861),s=t(10064),c=t(30651),o=t(25899),l=t(74368),p=t(70032),y=t(98995),f=t(32698),d=t(73117),L=t(21371),v=t(41226);function b(e,r){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=r.instance.portalItem)||!a.id){e.next=6;break}return e.next=4,a.load(t);case 4:return S(r),e.abrupt("return",h(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new s.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}function h(e,r){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a,n,i,s,c,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,i=n.portalItem){e.next=3;break}return e.abrupt("return");case 3:if(s=i.url,c=i.title,o=(0,f.h)(i),"group"!==n.type){e.next=6;break}return e.abrupt("return",(n.read({title:c},o),I(n,r)));case 6:return s&&n.read({url:s},o),e.next=9,M(r,t);case 9:return l=e.sent,e.abrupt("return",(l&&n.read(l,o),n.resourceReferences={portalItem:i,paths:null!==(a=o.readResourcePaths)&&void 0!==a?a:[]},"subtype-group"!==n.type&&n.read({title:c},o),(0,L.y)(n,o)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,r){return g.apply(this,arguments)}function g(){return g=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a,i,c,o,l,p,y,f,L,v,b,m,S;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r.portalItem){e.next=3;break}return e.abrupt("return");case 3:o=c.type,l=t.layerModuleTypeMap,p=null!==(a=(0,d._$)(c,"Oriented Imagery Layer"))&&void 0!==a&&a,e.t0=o,e.next="Feature Service"===e.t0?7:"Stream Service"===e.t0?9:"Scene Service"===e.t0?11:"Feature Collection"===e.t0?13:15;break;case 7:return i=p?l.OrientedImageryLayer:l.FeatureLayer,e.abrupt("break",16);case 9:return i=l.StreamLayer,e.abrupt("break",16);case 11:return i=l.SceneLayer,e.abrupt("break",16);case 13:return i=l.FeatureLayer,e.abrupt("break",16);case 15:throw new s.Z("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"));case 16:return e.next=18,Promise.all([i(),M(t)]);case 18:if(y=e.sent,f=(0,n.Z)(y,2),L=f[0],v=f[1],b=function(){return L},"Feature Service"!==o){e.next=46;break}if(!c.url){e.next=30;break}return e.next=27,A(v,c.url);case 27:e.t1=e.sent,e.next=31;break;case 30:e.t1={};case 31:if(!V(v=e.t1).length){e.next=38;break}return m=l.SubtypeGroupLayer,e.next=36,m();case 36:S=e.sent,b=function(e){return"SubtypeGroupLayer"===e.layerType?S:L};case 38:return e.t2=Z,e.t3=r,e.t4=b,e.t5=v,e.next=44,U(c.url);case 44:return e.t6=e.sent,e.abrupt("return",(0,e.t2)(e.t3,e.t4,e.t5,e.t6));case 46:return e.abrupt("return",W(v)>0?Z(r,b,v):T(r,b));case 47:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function T(e,r){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a,n,i,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(i=r.portalItem)&&void 0!==i&&i.url){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,v.T)(i.url);case 5:(s=e.sent)&&Z(r,t,{layers:null===(a=s.layers)||void 0===a?void 0:a.map(w),tables:null===(n=s.tables)||void 0===n?void 0:n.map(w)});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return{id:e.id,name:e.name}}function Z(e,r,t,a){var n,u=t.layers||[],i=t.tables||[];if("Feature Collection"===(null===(n=e.portalItem)||void 0===n?void 0:n.type)&&(u.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&i.push(e)})),u=u.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var l=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var a=t.searchParams.get("id"),n=t.origin;return c.Z.fromPortalItem({portalItem:new y.default({id:a,url:n})})}if((0,o.B5)(r))return c.Z.fromArcGISServerUrl({url:r});throw new s.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);l&&e.add(l)}u.reverse().forEach((function(n){var u=G(e,r(n),t,n,null===a||void 0===a?void 0:a(n));e.add(u)})),i.reverse().forEach((function(n){var u=G(e,r(n),t,n,null===a||void 0===a?void 0:a(n));e.tables.add(u)}))}function G(e,r,t,a,n){var u=e.portalItem,i=new r({portalItem:u.clone(),layerId:a.id});if("sourceJSON"in i&&(i.sourceJSON=n),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===u.type){var s={origin:"portal-item",portal:u.portal||p.Z.getDefault()};i.read(a,s);var c=t.showLegend;null!=c&&i.read({showLegend:c},s)}return i}function M(e,r){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a,n,i,s,c,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.supportsData){e.next=2;break}return e.abrupt("return");case 2:if(a=r.instance,n=a.portalItem){e.next=5;break}return e.abrupt("return");case 5:return i=null,e.prev=6,e.next=9,n.fetchData("json",t);case 9:i=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(!D(a)){e.next=18;break}return s=null,c=!0,i&&W(i)>0&&(null==a.layerId&&(o=V(i),a.layerId="subtype-group"===a.type?null===o||void 0===o?void 0:o[0]:C(i)),(s=O(i,a))&&(1===W(i)&&(c=!1),null!=i.showLegend&&(s.showLegend=i.showLegend))),e.abrupt("return",(c&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),s));case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function A(e,r){return F.apply(this,arguments)}function F(){return(F=(0,i.Z)((0,u.Z)().mark((function e(r,t){var a,n,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(a=r)||void 0===a?void 0:a.layers)&&null!=(null===(n=r)||void 0===n?void 0:n.tables)){e.next=5;break}return e.next=3,(0,v.T)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function O(e,r){var t,a,n=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===n})))||(null===(a=e.tables)||void 0===a?void 0:a.find((function(e){return e.id===n})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}function W(e){var r,t,a,n;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(a=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==a?a:0)}function D(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function V(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function U(e){return B.apply(this,arguments)}function B(){return(B=(0,i.Z)((0,u.Z)().mark((function e(r){var t,n,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.V)(r);case 2:if(t=e.sent,n=t.layersJSON){e.next=6;break}return e.abrupt("return",null);case 6:return i=[].concat((0,a.Z)(n.layers),(0,a.Z)(n.tables)),e.abrupt("return",(function(e){return i.find((function(r){return r.id===e.id}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return f},selectLayerClassPath:function(){return b}});var a=t(74165),n=t(1413),u=t(15861),i=t(10064),s=t(37933),c=t(19610),o=t(98995),l=t(33388),p=t(73117),y=t(41226);function f(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!r.portalItem||r.portalItem instanceof o.default||(r=(0,n.Z)((0,n.Z)({},r),{},{portalItem:new o.default(r.portalItem)})),e.next=3,L(r.portalItem);case 3:return t=e.sent,e.abrupt("return",new(0,t.constructor)((0,n.Z)({portalItem:r.portalItem},t.properties)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return e.t0=S,e.next=5,b(r);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.type,e.next="Map Service"===e.t0?3:"Feature Service"===e.t0?4:"Feature Collection"===e.t0?5:"Scene Service"===e.t0?6:"Image Service"===e.t0?7:"Stream Service"===e.t0?8:"Vector Tile Service"===e.t0?9:"GeoJson"===e.t0?10:"CSV"===e.t0?11:"KML"===e.t0?12:"WFS"===e.t0?13:"WMTS"===e.t0?14:"WMS"===e.t0?15:"Feed"===e.t0?16:17;break;case 3:return e.abrupt("return",x(r));case 4:return e.abrupt("return",g(r));case 5:return e.abrupt("return",Z(r));case 6:return e.abrupt("return",k(r));case 7:return e.abrupt("return",M(r));case 8:case 16:return e.abrupt("return",{className:"StreamLayer"});case 9:return e.abrupt("return",{className:"VectorTileLayer"});case 10:return e.abrupt("return",{className:"GeoJSONLayer"});case 11:return e.abrupt("return",{className:"CSVLayer"});case 12:return e.abrupt("return",{className:"KMLLayer"});case 13:return e.abrupt("return",{className:"WFSLayer"});case 14:return e.abrupt("return",{className:"WMTSLayer"});case 15:return e.abrupt("return",{className:"WMSLayer"});case 17:throw new i.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.T[r.className],e.next=3,t();case 3:return e.t0=e.sent,e.t1=r.properties,e.abrupt("return",{constructor:e.t0,properties:e.t1});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r);case 2:if(!e.sent){e.next=6;break}e.t0={className:"TileLayer"},e.next=7;break;case 6:e.t0={className:"MapImageLayer"};case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return T.apply(this,arguments)}function T(){return(T=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,p._$)(r,"Oriented Imagery Layer")){e.next=2;break}return e.abrupt("return",A(r));case 2:return e.next=4,W(r);case 4:if("object"!=typeof(t=e.sent)){e.next=8;break}return n={},e.abrupt("return",(null!=t.id&&(n.layerId=t.id),{className:t.className||"FeatureLayer",properties:n}));case 8:return e.abrupt("return",{className:"GroupLayer"});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n,u,i,c,o,l,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(r);case 2:if("object"!=typeof(t=e.sent)){e.next=18;break}if(u={},null!=t.id?(u.layerId=t.id,i="".concat(r.url,"/layers/").concat(t.id)):i=r.url,null===(n=r.typeKeywords)||void 0===n||!n.length){e.next=14;break}c=0,o=Object.keys(s.fb);case 7:if(!(c<o.length)){e.next=14;break}if(l=o[c],!r.typeKeywords.includes(l)){e.next=11;break}return e.abrupt("return",{className:s.fb[l]});case 11:c++,e.next=7;break;case 14:return e.next=16,(0,y.T)(i);case 16:return p=e.sent,e.abrupt("return",{className:s.fb[null===p||void 0===p?void 0:p.layerType]||"SceneLayer",properties:u});case 18:if(!1!==t){e.next=37;break}return e.next=21,(0,y.T)(r.url);case 21:if(e.t1=f=e.sent,e.t0=null===e.t1,e.t0){e.next=25;break}e.t0=void 0===f;case 25:if(!e.t0){e.next=29;break}e.t2=void 0,e.next=30;break;case 29:e.t2=f.layerType;case 30:if(e.t3=e.t2,"Voxel"!==e.t3){e.next=35;break}e.t4={className:"VoxelLayer"},e.next=36;break;case 35:e.t4={className:"GroupLayer"};case 36:return e.abrupt("return",e.t4);case 37:return e.abrupt("return",{className:"GroupLayer"});case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return G.apply(this,arguments)}function G(){return(G=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(t=(0,p._$)(r,"Map Notes"),n=(0,p._$)(r,"Markup"),!t&&!n){e.next=5;break}return e.abrupt("return",{className:"MapNotesLayer"});case 5:if(!(0,p._$)(r,"Route Layer")){e.next=7;break}return e.abrupt("return",{className:"RouteLayer"});case 7:return e.next=9,r.fetchData();case 9:return u=e.sent,e.abrupt("return",1===(0,l.getNumLayersAndTables)(u)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return N.apply(this,arguments)}function N(){return(N=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n,u,i,s,c,o,l,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(c=null!==(t=null===(n=r.typeKeywords)||void 0===n?void 0:n.map((function(e){return e.toLowerCase()})))&&void 0!==t?t:[],!c.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!c.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=13;break}e.t0=void 0===u;case 13:if(!e.t0){e.next=17;break}e.t2=void 0,e.next=18;break;case 17:e.t2=u.layerType;case 18:if("ArcGISTiledImageServiceLayer"!==(o=e.t2)){e.next=21;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 21:if("ArcGISImageServiceLayer"!==o){e.next=23;break}return e.abrupt("return",{className:"ImageryLayer"});case 23:return e.next=25,(0,y.T)(r.url);case 25:return l=e.sent,p=null===(i=l.cacheType)||void 0===i?void 0:i.toLowerCase(),f=null===(s=l.capabilities)||void 0===s?void 0:s.toLowerCase().includes("tilesonly"),e.abrupt("return","map"===p||f?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return F.apply(this,arguments)}function F(){return(F=(0,u.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return e.next=4,r.fetchData();case 4:return t=e.sent,e.abrupt("return",t.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:t});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.T)(r.url);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n,u,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.url)&&!t.match(/\/\d+$/)){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,r.load();case 5:return e.next=7,r.fetchData();case 7:if(n=e.sent,"Feature Service"!==r.type){e.next=16;break}return e.t0=V,e.next=12,(0,l.preprocessFSItemData)(n,t);case 12:return e.t1=e.sent,"object"==typeof(u=(0,e.t0)(e.t1))&&(i=(0,l.getSubtypeGroupLayerIds)(n),u.className=null!=u.id&&i.includes(u.id)?"SubtypeGroupLayer":"FeatureLayer"),e.abrupt("return",u);case 16:if(!((0,l.getNumLayersAndTables)(n)>0)){e.next=18;break}return e.abrupt("return",V(n));case 18:return e.t2=V,e.next=21,(0,y.T)(t);case 21:return e.t3=e.sent,e.abrupt("return",(0,e.t2)(e.t3));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}}}]);
//# sourceMappingURL=519.d2e29da6.chunk.js.map