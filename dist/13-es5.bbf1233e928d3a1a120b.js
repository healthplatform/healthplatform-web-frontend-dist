function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,i=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WLXD:function(e,t,r){"use strict";r.r(t),r.d(t,"CategoryEnumModule",(function(){return M}));var n=r("ofXK"),a=r("tyNb"),i=r("3Pt+"),o=r("XiUz"),c=r("bTqV"),l=r("kmnG"),u=r("NFeN"),s=r("qFsG"),b=r("MutI"),f=r("d3UM"),m=r("+0xr"),d=r("LiWt"),h=r("Gido"),p=r("fXoL"),y=r("z1O9"),v=r("rj8t"),g=r("fdqv"),C=r("FKr1");function S(e,t){if(1&e&&(p.Ub(0,"mat-list-option",14),p.Ub(1,"p",15),p.zc(2),p.Tb(),p.Tb()),2&e){var r=t.$implicit;p.Cb(2),p.Ac(r)}}function x(e,t){if(1&e){var r=p.Vb();p.Ub(0,"mat-selection-list",11),p.cc("selectionChange",(function(e){return p.qc(r),p.ec().enumerationSelectionChange(e)})),p.Ub(1,"h3",12),p.zc(2,"Enumeration"),p.Tb(),p.xc(3,S,3,1,"mat-list-option",13),p.Tb()}if(2&e){var n=p.ec();p.Cb(3),p.jc("ngForOf",n.createForm.value.enumeration)}}var T,k=((T=function(){function e(t,r,n){_classCallCheck(this,e),this.fb=t,this.alertsService=r,this.categoryEnumService=n,this.createForm=this.fb.group({name:["",i.p.required],enumeration:new i.c([],[i.p.required])})}return _createClass(e,[{key:"submit",value:function(){var e=this,t=Object(g.b)(this.createForm.value);null!=t&&0!==Object.keys(t).length&&this.isCreateFormValid()?this.categoryEnumService.create(t).subscribe((function(t){e.alertsService.add("Added ".concat(t.name))}),this.alertsService.add.bind(this.alertsService)):this.alertsService.add("Invalid form")}},{key:"addEnumeration",value:function(e){if(null!=e&&e.value){var t=this.createForm.get("enumeration").value;t.push(e.value),this.createForm.patchValue([{enumeration:t}]),e.value=null,this.createForm.updateValueAndValidity(),this.createForm.markAllAsTouched(),this.createForm.updateValueAndValidity({onlySelf:!1,emitEvent:!0})}}},{key:"isCreateFormValid",value:function(){var e=this;return Object.keys(Object(g.b)(this.createForm.value)).filter((function(t){return e.createForm.value[t].length>0})).length>1}},{key:"enumerationSelectionChange",value:function(e){console.info("change:",e,";");for(var t=0,r=Object.keys(e);t<r.length;t++){var n=r[t];try{console.info(n,":",JSON.stringify(e[n],null,4),";")}catch(c){}for(var a=0,i=Object.keys(e[n]);a<i.length;a++){var o=i[a];try{console.info(n,o,":",JSON.stringify(e[n][o],null,4),";")}catch(c){}}}console.info("change.option.value:",e.option.value,";")}}]),e}()).\u0275fac=function(e){return new(e||T)(p.Ob(i.b),p.Ob(y.a),p.Ob(d.a))},T.\u0275cmp=p.Ib({type:T,selectors:[["app-category-enum-create"]],decls:14,vars:3,consts:[["fxLayout","column",3,"formGroup","ngSubmit"],["fxFlex","100"],["matInput","","placeholder","name","formControlName","name"],["fxFlex","100","formControlName","enumeration",3,"selectionChange",4,"ngIf"],[1,"mat-form-field-wrapper"],[1,"mat-form-field-flex","bottom-border"],[1,"mat-form-field-infix"],["placeholder","Add enumeration option","matInput",""],["enumerationInput",""],["fxFlex","20","type","button","mat-button","",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["fxFlex","100","formControlName","enumeration",3,"selectionChange"],["matSubheader",""],["style","padding: 0",4,"ngFor","ngForOf"],[2,"padding","0"],["mat-line",""]],template:function(e,t){if(1&e){var r=p.Vb();p.Ub(0,"form",0),p.cc("ngSubmit",(function(){return t.submit()})),p.Ub(1,"mat-form-field",1),p.Pb(2,"input",2),p.Tb(),p.xc(3,x,4,1,"mat-selection-list",3),p.Ub(4,"div",4),p.Ub(5,"div",5),p.Ub(6,"div",6),p.Pb(7,"input",7,8),p.Ub(9,"button",9),p.cc("click",(function(){p.qc(r);var e=p.oc(8);return t.addEnumeration(e)})),p.Ub(10,"mat-icon"),p.zc(11,"add"),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(12,"button",10),p.zc(13,"Add"),p.Tb(),p.Tb()}2&e&&(p.jc("formGroup",t.createForm),p.Cb(3),p.jc("ngIf",t.createForm.value.enumeration.length),p.Cb(9),p.jc("disabled",!t.isCreateFormValid()))},directives:[i.q,i.k,o.b,i.f,l.b,o.a,s.a,i.a,i.j,i.d,n.k,c.b,u.a,b.f,b.d,n.j,b.c,C.e],styles:["mat-pseudo-checkbox[_ngcontent-%COMP%]{color:red;background:#00f}.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:green;background:#ff0}.bottom-border[_ngcontent-%COMP%]{border-bottom:thin solid #919191}"]}),T);function w(e,t){1&e&&(p.Ub(0,"th",10),p.zc(1," name "),p.Tb())}function O(e,t){if(1&e&&(p.Ub(0,"td",11),p.zc(1),p.Tb()),2&e){var r=t.$implicit;p.Cb(1),p.Bc(" ",r.name," ")}}function A(e,t){1&e&&(p.Ub(0,"th",10),p.zc(1," enumeration "),p.Tb())}function _(e,t){if(1&e&&(p.Ub(0,"td",11),p.zc(1),p.Tb()),2&e){var r=t.$implicit;p.Cb(1),p.Bc(" ",r.enumeration.join(",")," ")}}function j(e,t){1&e&&(p.Ub(0,"th",10),p.zc(1," createdAt "),p.Tb())}function U(e,t){if(1&e&&(p.Ub(0,"td",11),p.zc(1),p.Tb()),2&e){var r=t.$implicit;p.Cb(1),p.Bc(" ",r.createdAt," ")}}function F(e,t){1&e&&(p.Ub(0,"th",10),p.zc(1," updatedAt "),p.Tb())}function I(e,t){if(1&e&&(p.Ub(0,"td",11),p.zc(1),p.Tb()),2&e){var r=t.$implicit;p.Cb(1),p.Bc(" ",r.updatedAt," ")}}function P(e,t){1&e&&p.Pb(0,"tr",12)}function z(e,t){1&e&&p.Pb(0,"tr",13)}function E(e,t){if(1&e&&(p.Ub(0,"table",1),p.Sb(1,2),p.xc(2,w,2,0,"th",3),p.xc(3,O,2,1,"td",4),p.Rb(),p.Sb(4,5),p.xc(5,A,2,0,"th",3),p.xc(6,_,2,1,"td",4),p.Rb(),p.Sb(7,6),p.xc(8,j,2,0,"th",3),p.xc(9,U,2,1,"td",4),p.Rb(),p.Sb(10,7),p.xc(11,F,2,0,"th",3),p.xc(12,I,2,1,"td",4),p.Rb(),p.xc(13,P,1,0,"tr",8),p.xc(14,z,1,0,"tr",9),p.Tb()),2&e){var r=p.ec();p.jc("dataSource",r.dataSource),p.Cb(13),p.jc("matHeaderRowDef",r.displayedColumns),p.Cb(1),p.jc("matRowDefColumns",r.displayedColumns)}}var L,D,V,R=((L=function(){function e(t,r,n){_classCallCheck(this,e),this.router=t,this.alertsService=r,this.categoryEnumService=n,this.displayedColumns=["name","enumeration"]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.categoryEnumService.getAll().subscribe((function(t){e.categoryEnums=t,e.dataSource=new m.k(t)}),this.alertsService.add.bind(this.alertsService))}}]),e}()).\u0275fac=function(e){return new(e||L)(p.Ob(a.b),p.Ob(y.a),p.Ob(d.a))},L.\u0275cmp=p.Ib({type:L,selectors:[["app-category-enum-table"]],decls:1,vars:1,consts:[["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","enumeration"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&p.xc(0,E,15,3,"table",0),2&e&&p.jc("ngIf",t.dataSource)},directives:[n.k,m.j,m.c,m.e,m.b,m.g,m.i,m.d,m.a,m.f,m.h],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),L),q=[{path:"",component:(D=function(){function e(t,r,n){_classCallCheck(this,e),this.router=t,this.alertsService=r,this.categoriseService=n}return _createClass(e,[{key:"ngAfterViewInit",value:function(){var e=this;this.categoriseService.getAll().subscribe((function(t){return e.categorises=t}),this.alertsService.add.bind(this.alertsService))}},{key:"navigateByUrl",value:function(e,t){this.router.navigateByUrl(e,t).then((function(){})).catch(this.alertsService.add.bind(this.alertsService))}}]),e}(),D.\u0275fac=function(e){return new(e||D)(p.Ob(a.b),p.Ob(y.a),p.Ob(d.a))},D.\u0275cmp=p.Ib({type:D,selectors:[["app-category-enum"]],decls:6,vars:0,consts:[[1,"page-margin"],["fxLayout","row","fxLayout.lt-sm","column","fxLayoutGap","25px",1,"page-margin"],["fxFlex","20"],["fxFlex",""]],template:function(e,t){1&e&&(p.Pb(0,"app-banner-display"),p.Ub(1,"h2",0),p.zc(2,"Category enumerations"),p.Tb(),p.Ub(3,"div",1),p.Pb(4,"app-category-enum-create",2),p.Pb(5,"app-category-enum-table",3),p.Tb())},directives:[v.a,o.b,o.c,k,o.a,R],styles:[""]}),D)}],M=((V=function e(){_classCallCheck(this,e)}).\u0275mod=p.Mb({type:V}),V.\u0275inj=p.Lb({factory:function(e){return new(e||V)},providers:[d.a],imports:[[n.c,a.f,a.f.forChild(q),i.n,i.g,o.d,l.d,s.b,c.c,m.l,f.b,b.b,u.b,h.a]]}),V)},fdqv:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){return Object.keys(e).map((function(t){return null!=e[t]&&e[t]?_defineProperty({},t,e[t]):{null:null}})).filter((function(e){return!e.hasOwnProperty("null")})).reduce((function(e,t){return Object.assign(e,t)}),{})},a=function e(t){return Object.entries(t).forEach((function(r){var n=_slicedToArray(r,2),a=n[0],i=n[1];return i&&"object"==typeof i&&e(i)||(null===i||""===i)&&delete t[a]})),t}}}]);