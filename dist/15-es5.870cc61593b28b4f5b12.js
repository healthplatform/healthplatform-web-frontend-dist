function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var a,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{jkDv:function(e,t,a){"use strict";a.r(t),a.d(t,"AdminModule",(function(){return ge}));var n=a("ofXK"),i=a("tyNb"),o=a("3Pt+"),r=a("bTqV"),s=a("rDax"),c=a("+rOU"),l=a("fXoL"),u=a("FKr1"),f=a("cH1L"),d=a("XNiG"),h=a("NXyV"),p=a("LRne"),b=a("pLZG"),m=a("IzEk"),_=a("JX91"),g=a("R0Ic"),v=a("FtGj"),y=a("u47x");function C(e,t){}var k=function e(){_classCallCheck(this,e),this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0},O={dialogContainer:Object(g.m)("dialogContainer",[Object(g.j)("void, exit",Object(g.k)({opacity:0,transform:"scale(0.7)"})),Object(g.j)("enter",Object(g.k)({transform:"none"})),Object(g.l)("* => enter",Object(g.e)("150ms cubic-bezier(0, 0, 0.2, 1)",Object(g.k)({transform:"none",opacity:1}))),Object(g.l)("* => void, * => exit",Object(g.e)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",Object(g.k)({opacity:0})))])};function w(){throw Error("Attempting to attach dialog content after content is already attached")}var D,j,T,x,S=((D=function(e){_inherits(a,e);var t=_createSuper(a);function a(e,n,i,o,r){var s;return _classCallCheck(this,a),(s=t.call(this))._elementRef=e,s._focusTrapFactory=n,s._changeDetectorRef=i,s._config=r,s._elementFocusedBeforeDialogWasOpened=null,s._state="enter",s._animationStateChanged=new l.o,s.attachDomPortal=function(e){return s._portalOutlet.hasAttached()&&w(),s._setupFocusTrap(),s._portalOutlet.attachDomPortal(e)},s._ariaLabelledBy=r.ariaLabelledBy||null,s._document=o,s}return _createClass(a,[{key:"attachComponentPortal",value:function(e){return this._portalOutlet.hasAttached()&&w(),this._setupFocusTrap(),this._portalOutlet.attachComponentPortal(e)}},{key:"attachTemplatePortal",value:function(e){return this._portalOutlet.hasAttached()&&w(),this._setupFocusTrap(),this._portalOutlet.attachTemplatePortal(e)}},{key:"_recaptureFocus",value:function(){this._containsFocus()||this._focusTrap.focusInitialElement()||this._elementRef.nativeElement.focus()}},{key:"_trapFocus",value:function(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}},{key:"_restoreFocus",value:function(){var e=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&e&&"function"==typeof e.focus){var t=this._document.activeElement,a=this._elementRef.nativeElement;t&&t!==this._document.body&&t!==a&&!a.contains(t)||e.focus()}this._focusTrap&&this._focusTrap.destroy()}},{key:"_setupFocusTrap",value:function(){var e=this;this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)),this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then((function(){return e._elementRef.nativeElement.focus()})))}},{key:"_containsFocus",value:function(){var e=this._elementRef.nativeElement,t=this._document.activeElement;return e===t||e.contains(t)}},{key:"_onAnimationDone",value:function(e){"enter"===e.toState?this._trapFocus():"exit"===e.toState&&this._restoreFocus(),this._animationStateChanged.emit(e)}},{key:"_onAnimationStart",value:function(e){this._animationStateChanged.emit(e)}},{key:"_startExitAnimation",value:function(){this._state="exit",this._changeDetectorRef.markForCheck()}}]),a}(c.a)).\u0275fac=function(e){return new(e||D)(l.Ob(l.l),l.Ob(y.d),l.Ob(l.h),l.Ob(n.d,8),l.Ob(k))},D.\u0275cmp=l.Ib({type:D,selectors:[["mat-dialog-container"]],viewQuery:function(e,t){var a;1&e&&l.vc(c.b,!0),2&e&&l.nc(a=l.dc())&&(t._portalOutlet=a.first)},hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(e,t){1&e&&l.Gb("@dialogContainer.start",(function(e){return t._onAnimationStart(e)}))("@dialogContainer.done",(function(e){return t._onAnimationDone(e)})),2&e&&(l.Db("id",t._id)("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),l.Dc("@dialogContainer",t._state))},features:[l.zb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&l.xc(0,C,0,0,"ng-template",0)},directives:[c.b],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[O.dialogContainer]}}),D),R=0,P=function(){function e(t,a){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mat-dialog-".concat(R++);_classCallCheck(this,e),this._overlayRef=t,this._containerInstance=a,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new d.a,this._afterClosed=new d.a,this._beforeClosed=new d.a,this._state=0,a._id=i,a._animationStateChanged.pipe(Object(b.a)((function(e){return"done"===e.phaseName&&"enter"===e.toState})),Object(m.a)(1)).subscribe((function(){n._afterOpened.next(),n._afterOpened.complete()})),a._animationStateChanged.pipe(Object(b.a)((function(e){return"done"===e.phaseName&&"exit"===e.toState})),Object(m.a)(1)).subscribe((function(){clearTimeout(n._closeFallbackTimeout),n._finishDialogClose()})),t.detachments().subscribe((function(){n._beforeClosed.next(n._result),n._beforeClosed.complete(),n._afterClosed.next(n._result),n._afterClosed.complete(),n.componentInstance=null,n._overlayRef.dispose()})),t.keydownEvents().pipe(Object(b.a)((function(e){return e.keyCode===v.e&&!n.disableClose&&!Object(v.o)(e)}))).subscribe((function(e){e.preventDefault(),n.close()})),t.backdropClick().subscribe((function(){n.disableClose?n._containerInstance._recaptureFocus():n.close()}))}return _createClass(e,[{key:"close",value:function(e){var t=this;this._result=e,this._containerInstance._animationStateChanged.pipe(Object(b.a)((function(e){return"start"===e.phaseName})),Object(m.a)(1)).subscribe((function(a){t._beforeClosed.next(e),t._beforeClosed.complete(),t._overlayRef.detachBackdrop(),t._closeFallbackTimeout=setTimeout((function(){return t._finishDialogClose()}),a.totalTime+100)})),this._containerInstance._startExitAnimation(),this._state=1}},{key:"afterOpened",value:function(){return this._afterOpened.asObservable()}},{key:"afterClosed",value:function(){return this._afterClosed.asObservable()}},{key:"beforeClosed",value:function(){return this._beforeClosed.asObservable()}},{key:"backdropClick",value:function(){return this._overlayRef.backdropClick()}},{key:"keydownEvents",value:function(){return this._overlayRef.keydownEvents()}},{key:"updatePosition",value:function(e){var t=this._getPositionStrategy();return e&&(e.left||e.right)?e.left?t.left(e.left):t.right(e.right):t.centerHorizontally(),e&&(e.top||e.bottom)?e.top?t.top(e.top):t.bottom(e.bottom):t.centerVertically(),this._overlayRef.updatePosition(),this}},{key:"updateSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._getPositionStrategy().width(e).height(t),this._overlayRef.updatePosition(),this}},{key:"addPanelClass",value:function(e){return this._overlayRef.addPanelClass(e),this}},{key:"removePanelClass",value:function(e){return this._overlayRef.removePanelClass(e),this}},{key:"getState",value:function(){return this._state}},{key:"_finishDialogClose",value:function(){this._state=2,this._overlayRef.dispose()}},{key:"_getPositionStrategy",value:function(){return this._overlayRef.getConfig().positionStrategy}}]),e}(),A=new l.r("MatDialogData"),F=new l.r("mat-dialog-default-options"),I=new l.r("mat-dialog-scroll-strategy"),U={provide:I,deps:[s.c],useFactory:function(e){return function(){return e.scrollStrategies.block()}}},E=((T=function(){function e(t,a,n,i,o,r,s){var c=this;_classCallCheck(this,e),this._overlay=t,this._injector=a,this._defaultOptions=i,this._parentDialog=r,this._overlayContainer=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new d.a,this._afterOpenedAtThisLevel=new d.a,this._ariaHiddenElements=new Map,this.afterAllClosed=Object(h.a)((function(){return c.openDialogs.length?c._afterAllClosed:c._afterAllClosed.pipe(Object(_.a)(void 0))})),this._scrollStrategy=o}return _createClass(e,[{key:"open",value:function(e,t){var a=this;if((t=function(e,t){return Object.assign(Object.assign({},t),e)}(t,this._defaultOptions||new k)).id&&this.getDialogById(t.id))throw Error('Dialog with id "'.concat(t.id,'" exists already. The dialog id must be unique.'));var n=this._createOverlay(t),i=this._attachDialogContainer(n,t),o=this._attachDialogContent(e,i,n,t);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(o),o.afterClosed().subscribe((function(){return a._removeOpenDialog(o)})),this.afterOpened.next(o),o}},{key:"closeAll",value:function(){this._closeDialogs(this.openDialogs)}},{key:"getDialogById",value:function(e){return this.openDialogs.find((function(t){return t.id===e}))}},{key:"ngOnDestroy",value:function(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}},{key:"_createOverlay",value:function(e){var t=this._getOverlayConfig(e);return this._overlay.create(t)}},{key:"_getOverlayConfig",value:function(e){var t=new s.d({positionStrategy:this._overlay.position().global(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}},{key:"_attachDialogContainer",value:function(e,t){var a=l.s.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:k,useValue:t}]}),n=new c.c(S,t.viewContainerRef,a,t.componentFactoryResolver);return e.attach(n).instance}},{key:"_attachDialogContent",value:function(e,t,a,n){var i=new P(a,t,n.id);if(e instanceof l.M)t.attachTemplatePortal(new c.g(e,null,{$implicit:n.data,dialogRef:i}));else{var o=this._createInjector(n,i,t),r=t.attachComponentPortal(new c.c(e,n.viewContainerRef,o));i.componentInstance=r.instance}return i.updateSize(n.width,n.height).updatePosition(n.position),i}},{key:"_createInjector",value:function(e,t,a){var n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=[{provide:S,useValue:a},{provide:A,useValue:e.data},{provide:P,useValue:t}];return!e.direction||n&&n.get(f.b,null)||i.push({provide:f.b,useValue:{value:e.direction,change:Object(p.a)()}}),l.s.create({parent:n||this._injector,providers:i})}},{key:"_removeOpenDialog",value:function(e){var t=this.openDialogs.indexOf(e);t>-1&&(this.openDialogs.splice(t,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((function(e,t){e?t.setAttribute("aria-hidden",e):t.removeAttribute("aria-hidden")})),this._ariaHiddenElements.clear(),this._afterAllClosed.next()))}},{key:"_hideNonDialogContentFromAssistiveTechnology",value:function(){var e=this._overlayContainer.getContainerElement();if(e.parentElement)for(var t=e.parentElement.children,a=t.length-1;a>-1;a--){var n=t[a];n===e||"SCRIPT"===n.nodeName||"STYLE"===n.nodeName||n.hasAttribute("aria-live")||(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}},{key:"_closeDialogs",value:function(e){for(var t=e.length;t--;)e[t].close()}},{key:"openDialogs",get:function(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}},{key:"afterOpened",get:function(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}},{key:"_afterAllClosed",get:function(){var e=this._parentDialog;return e?e._afterAllClosed:this._afterAllClosedAtThisLevel}}]),e}()).\u0275fac=function(e){return new(e||T)(l.Yb(s.c),l.Yb(l.s),l.Yb(n.g,8),l.Yb(F,8),l.Yb(I),l.Yb(T,12),l.Yb(s.e))},T.\u0275prov=l.Kb({token:T,factory:T.\u0275fac}),T),z=((j=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:j}),j.\u0275inj=l.Lb({factory:function(e){return new(e||j)},providers:[E,U],imports:[[s.f,c.f,u.d],u.d]}),j),L=a("kmnG"),B=a("NFeN"),N=a("qFsG"),V=a("d3UM"),H=a("+0xr"),q=a("/t3+"),W=a("f6nW"),M=a("lJxs"),Y=a("/09x"),G=a("tk/3"),$=((x=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"create",value:function(e){return this.http.post("/api/user",e).pipe(Object(M.a)(Y.b))}},{key:"read",value:function(e){return this.http.get("/api/user".concat(null==e?"":"/"+e)).pipe(Object(M.a)(Y.b))}},{key:"update",value:function(e,t){return this.http.put("/api/user".concat(null==t?"":"/"+t),e).pipe(Object(M.a)(Y.b))}},{key:"destroy",value:function(e){return this.http.delete("/api/user/".concat(e))}},{key:"getAll",value:function(){return this.http.get("/api/users").pipe(Object(M.a)((function(e){return e.users.sort((function(e,t){return e.email.localeCompare(t.email)}))})),Object(M.a)((function(e){return e.map(Y.b)})))}}]),e}()).\u0275fac=function(e){return new(e||x)(l.Yb(G.b))},x.\u0275prov=l.Kb({token:x,factory:x.\u0275fac}),x),X=a("z1O9"),J=["class","user-crud"];function K(e,t){1&e&&(l.Ub(0,"mat-form-field"),l.Pb(1,"input",6),l.Tb())}function Q(e,t){if(1&e&&(l.Ub(0,"h3",7),l.zc(1),l.Tb()),2&e){var a=l.ec();l.Cb(1),l.Ac(a.data.email)}}function Z(e,t){1&e&&(l.Ub(0,"mat-form-field"),l.Pb(1,"input",8),l.Tb())}function ee(e,t){if(1&e&&(l.Ub(0,"mat-option",9),l.zc(1),l.Tb()),2&e){var a=t.$implicit;l.jc("value",a),l.Cb(1),l.Bc(" ",a," ")}}function te(e,t){if(1&e&&(l.Ub(0,"button",10),l.Ub(1,"mat-icon"),l.zc(2,"add_to_queue"),l.Tb(),l.zc(3," Create "),l.Tb()),2&e){var a=l.ec();l.jc("disabled",a.form.invalid)}}function ae(e,t){if(1&e){var a=l.Vb();l.Sb(0),l.Ub(1,"button",10),l.Ub(2,"mat-icon"),l.zc(3,"update"),l.Tb(),l.zc(4," Update "),l.Tb(),l.Ub(5,"button",11),l.cc("click",(function(){return l.qc(a),l.ec().destroy=!0})),l.Ub(6,"mat-icon"),l.zc(7,"delete"),l.Tb(),l.zc(8," Delete "),l.Tb(),l.Rb()}if(2&e){var n=l.ec();l.Cb(1),l.jc("disabled",n.form.invalid)}}var ne,ie=((ne=function(){function e(t,a){_classCallCheck(this,e),this.dialogRef=t,this.data=a,this.roles=e.roles,this.form=new o.e({email:new o.c("",o.p.required),password:new o.c("",o.p.minLength(3)),roles:new o.c("",o.p.required)}),this.defaultRoles=e.roles.slice(0,2),this.destroy=!1}return _createClass(e,[{key:"ngOnInit",value:function(){null===this.data?this.form.patchValue({roles:this.defaultRoles}):(this.form.patchValue(this.data),this.form.controls.password.clearValidators(),this.form.controls.password.disable())}},{key:"closeDialog",value:function(){this.dialogRef.close(this.destroy?this.destroy:this.form.value)}}]),e}()).roles=["registered","login","admin"],ne.\u0275fac=function(e){return new(e||ne)(l.Ob(P),l.Ob(A,8))},ne.\u0275cmp=l.Ib({type:ne,selectors:[["app-admin",8,"user-crud"]],attrs:J,decls:9,vars:7,consts:[[3,"formGroup","ngSubmit"],[4,"ngIf"],["class","mat-h3",4,"ngIf"],["formControlName","roles","matInput","","multiple","","placeholder","Role"],[3,"value",4,"ngFor","ngForOf"],["class","btn","mat-raised-button","","type","submit",3,"disabled",4,"ngIf"],["formControlName","email","matInput","","placeholder","Email","required","","type","email"],[1,"mat-h3"],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],[3,"value"],["mat-raised-button","","type","submit",1,"btn",3,"disabled"],["mat-raised-button","","type","submit",1,"btn",3,"click"]],template:function(e,t){1&e&&(l.Ub(0,"form",0),l.cc("ngSubmit",(function(){return t.closeDialog()})),l.xc(1,K,2,0,"mat-form-field",1),l.xc(2,Q,2,1,"h3",2),l.xc(3,Z,2,0,"mat-form-field",1),l.Ub(4,"mat-form-field"),l.Ub(5,"mat-select",3),l.xc(6,ee,2,2,"mat-option",4),l.Tb(),l.Tb(),l.xc(7,te,4,1,"button",5),l.xc(8,ae,9,1,"ng-container",1),l.Tb()),2&e&&(l.jc("formGroup",t.form),l.Cb(1),l.jc("ngIf",!t.data||!t.data.email),l.Cb(1),l.jc("ngIf",t.data&&t.data.email),l.Cb(1),l.jc("ngIf",t.form.controls.password.enabled),l.Cb(3),l.jc("ngForOf",t.roles),l.Cb(1),l.jc("ngIf",!t.data),l.Cb(1),l.jc("ngIf",t.data))},directives:[o.q,o.k,o.f,n.k,L.b,V.a,o.j,o.d,n.j,o.a,N.a,o.o,u.h,r.b,B.a],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}"]}),ne);function oe(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.zc(1," Email"),l.Tb())}function re(e,t){if(1&e&&(l.Ub(0,"mat-cell"),l.Ub(1,"mat-icon"),l.zc(2,"border_color"),l.Tb(),l.zc(3),l.Tb()),2&e){var a=t.$implicit;l.Cb(3),l.Bc(" ",a.email," ")}}function se(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.zc(1," Roles"),l.Tb())}function ce(e,t){if(1&e&&(l.Ub(0,"mat-cell"),l.zc(1),l.Tb()),2&e){var a=t.$implicit;l.Cb(1),l.Bc(" ",a.roles,"")}}function le(e,t){1&e&&(l.Ub(0,"mat-header-cell"),l.zc(1," createdAt"),l.Tb())}function ue(e,t){if(1&e&&(l.Ub(0,"mat-cell"),l.zc(1),l.Tb()),2&e){var a=t.$implicit;l.Cb(1),l.Bc(" ",a.createdAt,"")}}function fe(e,t){1&e&&l.Pb(0,"mat-header-row")}function de(e,t){if(1&e){var a=l.Vb();l.Ub(0,"mat-row",15),l.cc("click",(function(){l.qc(a);var e=t.$implicit;return l.ec().selected(e)})),l.Tb()}}var he,pe,be,me=((he=function(){function e(t,a){_classCallCheck(this,e),this.dialog=t,this.userService=a,this.displayedColumns=["email","roles","createdAt"]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.userService.getAll().subscribe((function(t){return e.usersDataSource=new H.k(t.sort())}))}},{key:"applyFilter",value:function(e){this.usersDataSource.filter=e.trim().toLowerCase()}},{key:"openUserCrud",value:function(e){var t=this;this.dialog.open(ie,{data:e}).afterClosed().subscribe((function(a){switch(typeof a){case"boolean":case"string":case"number":e&&t.userService.destroy(e.email).subscribe((function(){t.usersDataSource.data.splice(t.usersDataSource.data.indexOf(e),1),t.usersDataSource._updateChangeSubscription()}));break;case"object":e?t.userService.update(a).subscribe((function(n){t.usersDataSource.data.splice(t.usersDataSource.data.indexOf(e),1),t.usersDataSource.data.push(Object.assign(e,a)),t.usersDataSource.data.sort((function(e,t){return e.email.localeCompare(t.email)})),t.usersDataSource._updateChangeSubscription()})):t.userService.create(a).subscribe((function(e){t.usersDataSource.data.push(e),t.usersDataSource.data.sort((function(e,t){return e.email.localeCompare(t.email)})),t.usersDataSource._updateChangeSubscription()}))}}))}},{key:"selected",value:function(e){this.openUserCrud(e)}}]),e}()).\u0275fac=function(e){return new(e||he)(l.Ob(E),l.Ob($))},he.\u0275cmp=l.Ib({type:he,selectors:[["app-users-admin"]],decls:23,vars:3,consts:[["color","secondary"],[1,"mat-h1"],[1,"example-fill-remaining-space"],["mat-icon-button","",3,"click"],["floatPlaceholder","never"],["matInput","","placeholder","Filter",3,"keyup"],[3,"dataSource"],["table",""],["matColumnDef","email"],[4,"cdkHeaderCellDef"],[4,"cdkCellDef"],["matColumnDef","roles"],["matColumnDef","createdAt"],[4,"cdkHeaderRowDef"],[3,"click",4,"cdkRowDef","cdkRowDefColumns"],[3,"click"]],template:function(e,t){1&e&&(l.Ub(0,"mat-toolbar",0),l.Ub(1,"h1",1),l.zc(2,"Users"),l.Tb(),l.Pb(3,"span",2),l.Ub(4,"button",3),l.cc("click",(function(){return t.openUserCrud()})),l.Ub(5,"mat-icon"),l.zc(6,"add_circle"),l.Tb(),l.Tb(),l.Pb(7,"span",2),l.Ub(8,"mat-form-field",4),l.Ub(9,"input",5),l.cc("keyup",(function(e){return t.applyFilter(e.target.value)})),l.Tb(),l.Tb(),l.Tb(),l.Ub(10,"mat-table",6,7),l.Sb(12,8),l.xc(13,oe,2,0,"mat-header-cell",9),l.xc(14,re,4,1,"mat-cell",10),l.Rb(),l.Sb(15,11),l.xc(16,se,2,0,"mat-header-cell",9),l.xc(17,ce,2,1,"mat-cell",10),l.Rb(),l.Sb(18,12),l.xc(19,le,2,0,"mat-header-cell",9),l.xc(20,ue,2,1,"mat-cell",10),l.Rb(),l.xc(21,fe,1,0,"mat-header-row",13),l.xc(22,de,1,0,"mat-row",14),l.Tb()),2&e&&(l.Cb(10),l.jc("dataSource",t.usersDataSource),l.Cb(11),l.jc("cdkHeaderRowDef",t.displayedColumns),l.Cb(1),l.jc("cdkRowDefColumns",t.displayedColumns))},directives:[q.a,r.b,B.a,L.b,N.a,H.j,H.c,W.k,W.c,W.m,W.o,H.d,H.a,H.f,H.h],styles:[".example-fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]}),he),_e=[{path:"",component:(pe=function e(){_classCallCheck(this,e)},pe.\u0275fac=function(e){return new(e||pe)},pe.\u0275cmp=l.Ib({type:pe,selectors:[["app-admin"]],decls:1,vars:0,template:function(e,t){1&e&&l.Pb(0,"app-users-admin")},directives:[me],styles:[""]}),pe)}],ge=((be=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:be}),be.\u0275inj=l.Lb({factory:function(e){return new(e||be)},providers:[X.a,$],imports:[[n.c,W.q,H.l,o.g,o.n,i.f,i.f.forChild(_e),r.c,z,L.d,B.b,N.b,V.b,H.l,q.b]]}),be)}}]);