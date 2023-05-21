"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[8566],{38566:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var n=r(74165),i=r(15861),o=r(37762),s=r(15671),a=r(43144),u=r(97326),p=r(60136),l=r(29388),c=r(27366),d=(r(59486),r(44055)),y=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),f=r(92026),v=r(97642),m=r(18202),h=r(35995),g=r(49861),b=r(25243),w=(r(63780),r(69912)),C=r(31201),x=r(27823),F=r(30651),Z=r(29439),_=r(1413),S=r(10064),k=r(41691),O=r(93169),I=r(54472),R=r(66978),T=r(31009),q=r(63543),P=r(12622),j=r(49818),U=r(53866),E=function(e){(0,p.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._connection=null,e.capabilities=(0,q.MS)(!1,!1),e.type="wfs",e.refresh=(0,R.Ds)(function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r){var i,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e._connection.invoke("refresh",r);case 4:return i=t.sent,o=i.extent,t.abrupt("return",(o&&(e.sourceJSON.extent=o),{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return(0,a.Z)(r,[{key:"load",value:function(e){var t=(0,f.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return i=e.sent,e.abrupt("return",j.Z.fromJSON(i));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return i=e.sent,e.abrupt("return",{count:i.count,extent:U.Z.fromJSON(i.extent)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLoadOptions",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o,s,a,u,p,l,c,d,y,v,m,h,g,b=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.layer,s=o.url,a=o.customParameters,u=o.name,p=o.namespaceUri,l=o.spatialReference,c=o.fields,d=o.geometryType,y=o.swapXY,s){e.next=3;break}throw new S.Z("wfs-layer:missing-url","WFSLayer must be created with a url");case 3:if(e.t0=this.wfsCapabilities,e.t0){e.next=8;break}return e.next=7,(0,P.FU)(s,(0,_.Z)({customParameters:a},t));case 7:this.wfsCapabilities=e.sent;case 8:if(v=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((function(e){return null==b.layer[e]})),!v){e.next=15;break}return e.next=12,(0,P.be)(this.wfsCapabilities,u,p,{spatialReference:l,customParameters:a,signal:null===t||void 0===t?void 0:t.signal});case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=(0,_.Z)((0,_.Z)({},(0,P.eB)(null!==c&&void 0!==c?c:[])),{},{geometryType:d,name:u,namespaceUri:p,spatialReference:l,swapXY:y});case 16:return m=e.t1,h=(0,f.Wg)((0,P.ft)(this.wfsCapabilities.readFeatureTypes(),m.name,m.namespaceUri)),g=x.M.toJSON(m.geometryType),e.abrupt("return",{customParameters:a,featureType:h,fields:null!==(r=null===(i=m.fields)||void 0===i?void 0:i.map((function(e){return e.toJSON()})))&&void 0!==r?r:[],geometryField:m.geometryField,geometryType:g,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:m.objectIdField,spatialReference:m.spatialReference.toJSON(),swapXY:!!m.swapXY});case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_startWorker",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o,s,a,u,p,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,R.as)([this._createLoadOptions(t),(0,T.bA)("WFSSourceWorker",(0,_.Z)((0,_.Z)({},t),{},{strategy:(0,O.Z)("feature-layers-workers")?"dedicated":"local"}))]);case 2:if(r=e.sent,i=(0,Z.Z)(r,2),o=i[0],s=i[1],a=o.error||s.error||null,u=s.value||null,!a){e.next=10;break}throw u&&u.close(),a;case 10:return p=o.value,this._connection=s.value,e.next=14,this._connection.invoke("load",p,t);case 14:l=e.sent.extent,this.sourceJSON={extent:l,fields:p.fields,geometryType:p.geometryType,objectIdField:p.objectIdField,geometryField:p.geometryField,drawingInfo:(0,q.bU)(p.geometryType),name:p.featureType.title,wfsInfo:{name:p.featureType.name,featureUrl:p.getFeatureUrl,maxFeatures:3e3,swapXY:p.swapXY,supportedSpatialReferences:p.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:p.featureType.namespaceUri}};case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,k.p)(I.Z));(0,c._)([(0,g.Cb)()],E.prototype,"capabilities",void 0),(0,c._)([(0,g.Cb)({constructOnly:!0})],E.prototype,"layer",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"sourceJSON",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"type",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"wfsCapabilities",void 0),E=(0,c._)([(0,w.j)("esri.layers.graphics.sources.WFSSource")],E);var N,D=r(6693),Q=r(46671),J=r(7632),M=r(64390),W=r(6061),A=r(94207),Y=r(29598),G=r(71684),X=r(56811),B=r(99063),z=r(45948),H=r(83040),L=r(25610),V=r(80031),$=r(77748),K=r(85116),ee=r(86638),te=r(81085),re=r(78952),ne=(0,L.v)(),ie=N=function(e){(0,p.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).copyright=null,n.customParameters=null,n.definitionExpression=null,n.displayField=null,n.elevationInfo=null,n.featureUrl=void 0,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.labelsVisible=!0,n.labelingInfo=null,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="WFS",n.maxFeatures=3e3,n.mode=0,n.name=null,n.namespaceUri=null,n.outFields=null,n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new E({layer:(0,u.Z)(n)}),n.spatialReference=re.Z.WGS84,n.spatialReferences=[4326],n.swapXY=void 0,n.title="WFS",n.type="wfs",n.url=null,n.version=void 0,n}return(0,a.Z)(r,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,V.YN)(t.renderer,t.fieldsIndex),(0,V.UF)(t.timeInfo,t.fieldsIndex)}))),Promise.resolve(this)}},{key:"capabilities",get:function(){var e;return null===(e=this.source)||void 0===e?void 0:e.capabilities}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"writeFields",value:function(e,t,r){var n=e.filter((function(e){return e.name!==P.M8}));this.geometryField&&n.unshift(new H.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,m.RB)(r,n.map((function(e){return e.toJSON()})),t)}},{key:"parsedUrl",get:function(){return(0,h.mN)(this.url)}},{key:"renderer",set:function(e){(0,V.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"wfsCapabilities",get:function(){var e;return null===(e=this.source)||void 0===e?void 0:e.wfsCapabilities},set:function(e){this.source&&(this.source.wfsCapabilities=e)}},{key:"createPopupTemplate",value:function(e){return(0,te.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new ee.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";var t=this.timeOffset,r=this.timeExtent;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}},{key:"getFieldDomain",value:function(e,t){var r;return null===(r=this.getField(e))||void 0===r?void 0:r.domain}},{key:"getField",value:function(e){var t;return null===(t=this.fieldsIndex)||void 0===t?void 0:t.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(ee.Z.from(e)||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,n=(0,o.Z)(e.features);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(s){n.e(s)}finally{n.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(ee.Z.from(e)||r.createQuery(),t)}))}},{key:"hasDataChanged",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,i=t.updates,e.abrupt("return",((0,f.pC)(i)&&this.read(i,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()}],[{key:"fromWFSLayerInfo",value:function(e){var t=e.customParameters,r=e.fields,n=e.geometryField,i=e.geometryType,o=e.name,s=e.namespaceUri,a=e.objectIdField,u=e.spatialReference,p=e.swapXY,l=e.url,c=e.wfsCapabilities;return new N({customParameters:t,fields:r,geometryField:n,geometryType:i,name:o,namespaceUri:s,objectIdField:a,spatialReference:u,swapXY:p,url:l,wfsCapabilities:c})}}]),r}((0,A.c)((0,Q.N)((0,M.M)((0,J.b)((0,D.h)((0,B.n)((0,G.Q)((0,X.M)((0,W.q)((0,Y.I)((0,v.R)(F.Z))))))))))));(0,c._)([(0,g.Cb)({readOnly:!0})],ie.prototype,"capabilities",null),(0,c._)([(0,g.Cb)({type:String})],ie.prototype,"copyright",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],ie.prototype,"createQueryVersion",null),(0,c._)([(0,g.Cb)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:function(e){return{enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0}}}}})],ie.prototype,"customParameters",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],ie.prototype,"defaultPopupTemplate",null),(0,c._)([(0,g.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ie.prototype,"definitionExpression",void 0),(0,c._)([(0,g.Cb)({type:String})],ie.prototype,"displayField",void 0),(0,c._)([(0,g.Cb)(z.PV)],ie.prototype,"elevationInfo",void 0),(0,c._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"featureUrl",void 0),(0,c._)([(0,g.Cb)({type:[H.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],ie.prototype,"fields",void 0),(0,c._)([(0,C.c)("fields")],ie.prototype,"writeFields",null),(0,c._)([(0,g.Cb)(ne.fieldsIndex)],ie.prototype,"fieldsIndex",void 0),(0,c._)([(0,g.Cb)({type:U.Z,json:{name:"extent"}})],ie.prototype,"fullExtent",void 0),(0,c._)([(0,g.Cb)()],ie.prototype,"geometryField",void 0),(0,c._)([(0,g.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:x.M.read},write:{target:"layerDefinition.geometryType",writer:x.M.write,ignoreOrigin:!0},origins:{service:{read:x.M.read}}}})],ie.prototype,"geometryType",void 0),(0,c._)([(0,g.Cb)({type:String})],ie.prototype,"id",void 0),(0,c._)([(0,g.Cb)(z.iR)],ie.prototype,"labelsVisible",void 0),(0,c._)([(0,g.Cb)({type:[$.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K.r},write:!0}})],ie.prototype,"labelingInfo",void 0),(0,c._)([(0,g.Cb)(z.rn)],ie.prototype,"legendEnabled",void 0),(0,c._)([(0,g.Cb)({type:["show","hide"]})],ie.prototype,"listMode",void 0),(0,c._)([(0,g.Cb)({type:String})],ie.prototype,"objectIdField",void 0),(0,c._)([(0,g.Cb)({type:["WFS"]})],ie.prototype,"operationalLayerType",void 0),(0,c._)([(0,g.Cb)({type:b.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"maxFeatures",void 0),(0,c._)([(0,g.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ie.prototype,"mode",void 0),(0,c._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"name",void 0),(0,c._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"namespaceUri",void 0),(0,c._)([(0,g.Cb)(z.bT)],ie.prototype,"opacity",void 0),(0,c._)([(0,g.Cb)(ne.outFields)],ie.prototype,"outFields",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],ie.prototype,"parsedUrl",null),(0,c._)([(0,g.Cb)(z.C_)],ie.prototype,"popupEnabled",void 0),(0,c._)([(0,g.Cb)({type:d.Z,json:{name:"popupInfo",write:!0}})],ie.prototype,"popupTemplate",void 0),(0,c._)([(0,g.Cb)({types:y.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:y.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],ie.prototype,"renderer",null),(0,c._)([(0,g.Cb)(z.YI)],ie.prototype,"screenSizePerspectiveEnabled",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],ie.prototype,"source",void 0),(0,c._)([(0,g.Cb)({type:re.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],ie.prototype,"spatialReference",void 0),(0,c._)([(0,g.Cb)({readOnly:!0,type:[b.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"spatialReferences",void 0),(0,c._)([(0,g.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"swapXY",void 0),(0,c._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],ie.prototype,"title",void 0),(0,c._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],ie.prototype,"type",void 0),(0,c._)([(0,g.Cb)(z.HQ)],ie.prototype,"url",void 0),(0,c._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],ie.prototype,"version",void 0),(0,c._)([(0,g.Cb)()],ie.prototype,"wfsCapabilities",null);var oe=ie=N=(0,c._)([(0,w.j)("esri.layers.WFSLayer")],ie)},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:function(e,t,r){r.d(t,{Dm:function(){return d},Hq:function(){return y},MS:function(){return f},bU:function(){return p}});var n=r(4942),i=r(1413),o=r(93169),s=r(84652),a=r(60480),u=r(76115);function p(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.I4:"esriGeometryPolyline"===e?u.ET:u.lF}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,c=1;function d(e,t){if((0,o.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(l.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var a=new Function("\n      return class AttributesClass$".concat(c++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new a}}catch(u){return function(){return(0,i.Z)((0,n.Z)({},t,null),e)}}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=8566.62a69c18.chunk.js.map