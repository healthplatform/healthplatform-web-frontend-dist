function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(u){n=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GSqj:function(e,t,r){"use strict";r.r(t),r.d(t,"TriageModule",(function(){return fe}));var a,n=r("ofXK"),o=r("tyNb"),i=r("3Pt+"),c=r("YUcS"),u=r("bTqV"),l=r("jaxi"),s=r("NFeN"),f=r("qFsG"),b=r("MutI"),g=r("d3UM"),m=r("/t3+"),h=r("LiWt"),p=r("VEu4"),y=r("tk/3"),d=r("cp0P"),v=r("/09x"),x=r("3aQ0"),S=r("fXoL"),C=r("z1O9"),k=r("fafP"),T=r("aOcr"),O=r("2Vo4"),U=((a=function(){function e(t,r,a){_classCallCheck(this,e),this.route=t,this.router=r,this.alertsService=a,this.changeDetected$=new O.a(!1)}return _createClass(e,[{key:"next",value:function(e){var t=this;this.router.navigate(["/","triage"].concat(e||[])).then((function(){return t.changeDetected$.next(!0)})).catch(this.alertsService.add.bind(this.alertsService))}},{key:"getNext",value:function(){return this.changeDetected$.asObservable()}}]),e}()).\u0275fac=function(e){return new(e||a)(S.Yb(o.a),S.Yb(o.b),S.Yb(C.a))},a.\u0275prov=S.Kb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),F=r("2vYC"),w=r("XiUz"),E=r("znSr"),I=r("lJxs"),j=r("flLT");function L(e,t){1&e&&(S.Sb(0),S.zc(1," Next "),S.Ub(2,"mat-icon"),S.zc(3,"arrow_forward"),S.Tb(),S.Rb())}function z(e,t){1&e&&S.zc(0," Nothing coming up next! - Maybe you've finished triage? \ud83e\uddd0 ")}var N=function(){return{height:"30px","font-size":"medium"}},_=function(){return{height:"40px","font-size":"large"}},A=function(){return{height:"50px","font-size":"x-large"}},G=function(){return{height:"150px","font-size":"xx-large"}};function P(e,t){if(1&e){var r=S.Vb();S.Sb(0),S.Ub(1,"button",1),S.cc("click",(function(){return S.qc(r),S.ec().next()})),S.xc(2,L,4,0,"ng-container",2),S.xc(3,z,1,0,"ng-template",null,3,S.yc),S.Tb(),S.Rb()}if(2&e){var a=S.oc(4),n=S.ec();S.Cb(1),S.jc("ngStyle.xs",S.kc(7,N))("ngStyle.sm",S.kc(8,_))("ngStyle.md",S.kc(9,A))("ngStyle.gt-md",S.kc(10,G))("disabled",!n.artifactsLeft.length),S.Cb(1),S.jc("ngIf",n.artifactCategoriseStats.todo>0)("ngIfElse",a)}}var V,D=((V=function(){function e(t,r,a,n,o){_classCallCheck(this,e),this.route=t,this.router=r,this.artifactService=a,this.categoriseService=n,this.triageNextService=o}return _createClass(e,[{key:"ngAfterViewInit",value:function(){var e=this,t=Object(v.a)(localStorage.getItem("defaultCategoryEnum"));Object(d.a)([this.categoriseService.getNext(t).pipe(Object(I.a)((function(e){return e.map(j.b)}))),this.categoriseService.getStats(t)]).subscribe((function(t){var r,a;return a=_slicedToArray(r=t,2),e.artifactsLeft=a[0],e.artifactCategoriseStats=a[1],r}))}},{key:"next",value:function(){var e=this;this.triageNextService.changeDetected$.next(!1);var t=this.route.snapshot.url;this.triageNextService.next(0===t.length?this.artifactsLeft[0]._unparsedLocation:function(){for(var r=0;r+1<e.artifactsLeft.length;r++)if(e.artifactsLeft[r]._unparsedLocation===t[0].path)return e.artifactsLeft[r+1]._unparsedLocation}())}}]),e}()).\u0275fac=function(e){return new(e||V)(S.Ob(o.a),S.Ob(o.b),S.Ob(k.a),S.Ob(T.a),S.Ob(U))},V.\u0275cmp=S.Ib({type:V,selectors:[["app-triage-next"]],decls:1,vars:1,consts:[[4,"ngIf"],["mat-raised-button","","id","next",3,"ngStyle.xs","ngStyle.sm","ngStyle.md","ngStyle.gt-md","disabled","click"],[4,"ngIf","ngIfElse"],["nothingLeft",""]],template:function(e,t){1&e&&S.xc(0,P,5,11,"ng-container",0),2&e&&S.jc("ngIf",null!=t.artifactsLeft)},directives:[n.k,u.b,E.b,s.a],styles:["#next[_ngcontent-%COMP%]{width:100%;background-color:#20b2aa;color:#f5f5f5;margin-top:25px}#next[_ngcontent-%COMP%]:disabled{color:rgba(0,0,0,.26);background-color:rgba(0,0,0,.12)}"]}),V),q=["enumerationGroup"];function M(e,t){if(1&e&&(S.Ub(0,"mat-button-toggle",12),S.Ub(1,"mat-icon"),S.zc(2,"keyboard"),S.Tb(),S.zc(3),S.Tb()),2&e){var r=t.$implicit;S.jc("value",r),S.Cb(3),S.Bc(" ",r," ")}}var J=function(){return{width:"100%","margin-top":"120px"}};function $(e,t){if(1&e){var r=S.Vb();S.Ub(0,"mat-toolbar-row",3),S.Ub(1,"h2",6),S.zc(2,"Triage:\xa0"),S.Tb(),S.Ub(3,"small",7),S.zc(4,"Keyboard shortcuts available (e.g.: "),S.Ub(5,"kbd"),S.zc(6,"3"),S.Tb(),S.zc(7," for 3rd option, "),S.Ub(8,"kbd"),S.zc(9,"n"),S.Tb(),S.zc(10," for next).\xa0"),S.Tb(),S.Pb(11,"span",8),S.Ub(12,"p",6),S.zc(13,"Click image for full screen"),S.Tb(),S.Pb(14,"span",8),S.Ub(15,"mat-button-toggle-group",9,10),S.cc("change",(function(){S.qc(r);var e=S.oc(16);return S.ec().categorySet(e.value)}))("ngModelChange",(function(e){return S.qc(r),S.ec().enumerationGroupValue=e})),S.xc(17,M,4,2,"mat-button-toggle",11),S.Tb(),S.Tb()}if(2&e){var a=S.ec();S.Cb(15),S.jc("ngModel",a.enumerationGroupValue)("ngStyle.lt-sm",S.kc(3,J)),S.Cb(2),S.jc("ngForOf",a.categoryEnum.enumeration)}}function H(e,t){1&e&&(S.Ub(0,"mat-toolbar-row"),S.zc(1," Error: no default category enumeration set.\xa0 "),S.Ub(2,"a",13),S.zc(3,"Set one now."),S.Tb(),S.Tb())}var R,K=function(){return{height:"30px","font-size":"medium"}},B=function(){return{height:"40px","font-size":"large"}},Y=function(){return{height:"50px","font-size":"x-large"}},X=function(){return{height:"150px","font-size":"xx-large"}},W=((R=function(){function e(t,r,a,n,o,i){_classCallCheck(this,e),this.route=t,this.location=r,this.alertsService=a,this.artifactService=n,this.categoriseService=o,this.triageNextService=i,this.lastDate=new Date}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.setCategoryEnum(),Object(d.a)([this.artifactService.getAll(),this.categoriseService.getNext(Object(v.a)(localStorage.getItem("defaultCategoryEnum"))),this.categoriseService.getAll()]).subscribe((function(t){var r,a;return a=_slicedToArray(r=t,3),e.artifactsLeft=a[0],e.artifacts=a[1],e.categorises=a[2],r})),this.triageNextService.getNext().subscribe((function(t){t&&(e.enumerationGroupValue=void 0)}))}},{key:"categorySet",value:function(e){var t=this,r=new Date;r-this.lastDate>500&&(null!=e||null!=this.enumerationGroupValue)&&(this.lastDate=r,this.categoriseService.create({artifactLocation:this.route.snapshot.url[0].path,category:this.enumerationGroupValue,categoryEnumName:this.categoryEnum.name,username:localStorage.getItem("user")},{params:(new y.e).set("upsert","true")}).subscribe((function(e){return t.alertsService.add("Categorised as ".concat(e.category))}),this.alertsService.add.bind(this.alertsService)))}},{key:"setCategoryEnum",value:function(){var e=localStorage.getItem("defaultCategoryEnum");null!=e&&(this.categoryEnum={name:Object(x.a)({value:e}).slice(0,-1),enumeration:Object(x.b)(e)})}},{key:"onKeyUp",value:function(e){switch(e.key){case"n":this.triageNextService.changeDetected$.next(!0);break;case"p":this.previous();break;case"0":throw TypeError("INDEXES START AT 1 DAMMIT!");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":var t=parseInt(e.key,10)-1;t<this.categoryEnum.enumeration.length&&(this.enumerationGroupValue=this.categoryEnum.enumeration[t],this.categorySet(this.enumerationGroupValue))}}},{key:"previous",value:function(){this.location.back()}}]),e}()).\u0275fac=function(e){return new(e||R)(S.Ob(o.a),S.Ob(n.g),S.Ob(C.a),S.Ob(k.a),S.Ob(T.a),S.Ob(U))},R.\u0275cmp=S.Ib({type:R,selectors:[["app-triage-item"]],viewQuery:function(e,t){var r;1&e&&S.Ec(q,!0),2&e&&S.nc(r=S.dc())&&(t.enumerationGroup=r.first)},hostBindings:function(e,t){1&e&&S.cc("keyup",(function(e){return t.onKeyUp(e)}),!1,S.pc)},decls:11,vars:10,consts:[["color","accent"],["fxLayout","row",4,"ngIf","ngIfElse"],["noEnum",""],["fxLayout","row"],["mat-raised-button","","fxFlex","",2,"margin-top","25px",3,"ngStyle.xs","ngStyle.sm","ngStyle.md","ngStyle.gt-md","click"],["fxFlex",""],["fxFlex","","fxHide.lt-md",""],["fxFlex","","fxHide.lt-lg",""],["fxHide.lt-md","",1,"example-spacer"],["fxLayout","row","fxLayout.lt-sm","column",3,"ngModel","ngStyle.lt-sm","change","ngModelChange"],["group","matButtonToggleGroup"],["fxFlex","",3,"value",4,"ngFor","ngForOf"],["fxFlex","",3,"value"],["mat-stroked-button","","color","warn","routerLink","/triage",2,"background-color","whitesmoke"]],template:function(e,t){if(1&e&&(S.Ub(0,"mat-toolbar",0),S.xc(1,$,18,4,"mat-toolbar-row",1),S.xc(2,H,4,0,"ng-template",null,2,S.yc),S.Tb(),S.Pb(4,"app-artifact-item"),S.Ub(5,"div",3),S.Ub(6,"button",4),S.cc("click",(function(){return t.previous()})),S.Ub(7,"mat-icon"),S.zc(8,"arrow_back"),S.Tb(),S.zc(9," Back "),S.Tb(),S.Pb(10,"app-triage-next",5),S.Tb()),2&e){var r=S.oc(3);S.Cb(1),S.jc("ngIf",null!=t.categoryEnum)("ngIfElse",r),S.Cb(5),S.jc("ngStyle.xs",S.kc(6,K))("ngStyle.sm",S.kc(7,B))("ngStyle.md",S.kc(8,Y))("ngStyle.gt-md",S.kc(9,X))}},directives:[m.a,n.k,F.a,w.b,u.b,w.a,E.b,s.a,D,m.c,E.a,l.b,i.j,i.m,n.j,l.a,u.a,o.e],styles:[""]}),R),Q=r("fdqv"),Z=r("Krpd"),ee=r("kmnG"),te=r("FKr1"),re=function(e,t){return[e,t]};function ae(e,t){if(1&e&&(S.Ub(0,"mat-option",11),S.zc(1),S.Tb()),2&e){var r=t.$implicit,a=S.ec(2);S.jc("value",S.mc(3,re,r.name,a.JSON.stringify(r.enumeration)).join(" ")),S.Cb(1),S.Cc(" ",r.name," ",a.JSON.stringify(r.enumeration)," ")}}function ne(e,t){if(1&e&&(S.Ub(0,"mat-option",11),S.zc(1),S.Tb()),2&e){var r=t.$implicit;S.jc("value",r),S.Cb(1),S.Bc(" ",r," ")}}function oe(e,t){if(1&e&&(S.Ub(0,"mat-option",11),S.zc(1),S.Tb()),2&e){var r=t.$implicit,a=S.ec(2);S.jc("value",S.mc(3,re,r.name,a.JSON.stringify(r.enumeration)).join(" ")),S.Cb(1),S.Cc(" ",r.name," ",a.JSON.stringify(r.enumeration)," ")}}function ie(e,t){if(1&e){var r=S.Vb();S.Ub(0,"div",1),S.Ub(1,"form",2),S.cc("ngSubmit",(function(){return S.qc(r),S.ec().submitFilter()})),S.Ub(2,"h3"),S.zc(3,"Filter"),S.Tb(),S.Ub(4,"div",3),S.Ub(5,"mat-form-field",4),S.Pb(6,"input",5),S.Tb(),S.Ub(7,"mat-form-field",4),S.Pb(8,"input",6),S.Tb(),S.Tb(),S.Ub(9,"div",3),S.Ub(10,"mat-form-field",4),S.Ub(11,"mat-label"),S.zc(12,"Category enumeration"),S.Tb(),S.Ub(13,"mat-select",7),S.xc(14,ae,2,6,"mat-option",8),S.Tb(),S.Tb(),S.Ub(15,"mat-form-field",4),S.Ub(16,"mat-select",9),S.Ub(17,"h5",10),S.zc(18),S.Tb(),S.Ub(19,"mat-option",11),S.Ub(20,"em"),S.zc(21," <- Unset -> "),S.Tb(),S.Tb(),S.xc(22,ne,2,2,"mat-option",8),S.Tb(),S.Tb(),S.Tb(),S.Ub(23,"div",12),S.Ub(24,"button",13),S.zc(25," Change filter "),S.Tb(),S.Ub(26,"strong",14),S.zc(27,"OR"),S.Tb(),S.Ub(28,"button",15),S.cc("click",(function(){return S.qc(r),S.ec().searchForUncategorised()})),S.zc(29," Set to search for uncategorised "),S.Tb(),S.Tb(),S.Tb(),S.Ub(30,"form",2),S.cc("ngSubmit",(function(){return S.qc(r),S.ec().submitDefaults()})),S.Ub(31,"h3",16),S.zc(32,"Default configuration"),S.Tb(),S.Ub(33,"mat-form-field",16),S.Ub(34,"mat-label"),S.zc(35,"Default category enumeration"),S.Tb(),S.Ub(36,"mat-select",17),S.xc(37,oe,2,6,"mat-option",8),S.Tb(),S.Tb(),S.Ub(38,"button",18),S.zc(39," Set defaults "),S.Tb(),S.Tb(),S.Tb()}if(2&e){var a=S.ec();S.Cb(1),S.jc("formGroup",a.filterForm),S.Cb(13),S.jc("ngForOf",a.categoryEnums),S.Cb(4),S.Bc(" ",a.parseAndReturnCategoryName(a.filterForm.get("categoryEnum"))," "),S.Cb(1),S.jc("value",null),S.Cb(3),S.jc("ngForOf",a.enumValueToArray(a.filterForm.get("categoryEnum").value)),S.Cb(8),S.jc("formGroup",a.defaultsForm),S.Cb(7),S.jc("ngForOf",a.categoryEnums)}}var ce,ue,le=[{path:"",component:(ce=function(){function e(t,r,a,n){_classCallCheck(this,e),this.fb=t,this.alertsService=r,this.categoriseService=a,this.categoryEnumService=n,this.defaultsForm=this.fb.group({defaultCategoryEnum:[localStorage.getItem("defaultCategoryEnum")||"",i.p.required]}),this.filterForm=this.fb.group({username:[JSON.parse(localStorage.getItem("categoriseServiceFilterForm")||"{}").username||localStorage.getItem("user"),i.p.required],category:[""],categoryEnum:[JSON.parse(localStorage.getItem("categoriseServiceFilterForm")||"{}").categoryEnum||localStorage.getItem("defaultCategoryEnum")||""],updatedAt:[new Date(2019,2,15).toISOString()]}),this.enumValueToArray=x.b,this.JSON=JSON}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.categoryEnumService.getAll().subscribe((function(t){return e.categoryEnums=t}))}},{key:"submitDefaults",value:function(){null!=this.defaultsForm.value&&null!=this.defaultsForm.get("defaultCategoryEnum")&&localStorage.setItem("defaultCategoryEnum",this.defaultsForm.get("defaultCategoryEnum").value),this.refresh()}},{key:"submitFilter",value:function(){var e=Object(Q.a)(this.filterForm.value);Object.keys(e).length>0&&(localStorage.setItem("categoriseServiceFilterForm",JSON.stringify(e)),this.categoriseService._setHttpParamsFromLocalStorage()),this.refresh()}},{key:"isCreateFormValid",value:function(){var e=this,t=Object.keys(Object(Q.b)(this.filterForm.value)).filter((function(t){return e.filterForm.value[t].length>0}));return t.length>0&&t.indexOf("location")>-1}},{key:"parseAndReturnCategoryName",value:function(e){var t=Object(x.a)(e);return null!=t&&this.filterForm.patchValue({categoryEnumName:t}),t}},{key:"searchForUncategorised",value:function(){localStorage.setItem("categoriseServiceFilterForm",JSON.stringify({})),this.categoriseService._setHttpParamsFromLocalStorage(),this.categoriseService.httpParams=new y.e,this.refresh()}},{key:"refresh",value:function(){window.location.reload()}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(S.Ob(i.b),S.Ob(C.a),S.Ob(T.a),S.Ob(h.a))},ce.\u0275cmp=S.Ib({type:ce,selectors:[["app-triage"]],decls:3,vars:1,consts:[["class","page-margin","fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","25px",4,"ngIf"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","25px",1,"page-margin"],["fxFlex","50","fxLayout","column",3,"formGroup","ngSubmit"],["fxLayout","row","fxLayout.lt-sm","column","fxFlex","100","fxLayoutGap","25px"],["fxFlex",""],["matInput","","placeholder","username","formControlName","username"],["matInput","","placeholder","Newer than","formControlName","updatedAt"],["matNativeControl","","formControlName","categoryEnum"],[3,"value",4,"ngFor","ngForOf"],["placeholder","classification","formControlName","category"],["matSubheader","",2,"padding","0 20px"],[3,"value"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","20px"],["fxFlex","80","mat-raised-button","","color","accent","type","submit"],["fxFlex","",2,"text-align","center"],["fxFlex","80","mat-raised-button","","color","accent","type","button",2,"background-color","mediumpurple",3,"click"],["fxFlex","100"],["matNativeControl","","required","","formControlName","defaultCategoryEnum"],["mat-raised-button","","color","primary","type","submit"]],template:function(e,t){1&e&&(S.Pb(0,"app-performance-kpis"),S.xc(1,ie,40,7,"div",0),S.Pb(2,"app-triage-next")),2&e&&(S.Cb(1),S.jc("ngIf",null!=t.categoryEnums&&t.categoryEnums.length>0))},directives:[Z.a,n.k,D,w.b,w.c,i.q,i.k,w.a,i.f,ee.b,f.a,i.a,i.j,i.d,ee.e,g.a,n.j,b.d,te.h,u.b,i.o],styles:[""]}),ce)},{path:":location",component:W}],se=r("rtqH"),fe=((ue=function e(){_classCallCheck(this,e)}).\u0275mod=S.Mb({type:ue}),ue.\u0275inj=S.Lb({factory:function(e){return new(e||ue)},providers:[h.a,T.a],imports:[[n.c,o.f,o.f.forChild(le),i.g,i.n,u.c,c.a,s.b,b.b,f.b,g.b,m.b,l.c,p.a,se.a]]}),ue)}}]);