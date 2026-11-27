import{A as Ct,B as Ee,C as j,D as Le,E as Mt,F as De,G as Z,K as Be,L as Tt,M as Fe,N as St,a as ee,b as E,d as ke,e as Pe,f as yt,l as te,m as K,q as we,t as xt,w as fe,x as ne,z as vt}from"./chunk-YU6RYL6E.js";import{$a as dt,A as ze,Aa as le,B as P,C as qe,D as Ge,Da as ue,E as O,Ea as u,F as We,Fa as Y,Ga as st,H as C,Ha as at,I as Qe,Ia as mt,J as Ye,Ja as ct,K as ye,L as Je,La as pe,N as c,Na as de,Oa as lt,P as Xe,Q as A,S as x,T as xe,Ta as ut,Ua as pt,V as et,W as M,Wa as w,X as l,Xa as J,Y as tt,Z as ve,_ as v,a as se,ab as Me,b as Ne,bb as bt,cb as Te,d as ae,db as X,e as N,eb as be,f as L,fa as a,ga as _,gb as ft,h as He,ha as d,hb as _t,i as k,ia as g,j as G,jb as gt,k as Ue,kb as ht,l as H,la as $,lb as It,m as W,ma as R,mb as Se,n as D,na as V,o as $e,oa as Ce,p as U,pa as ce,q as he,r as me,ra as Q,s as Ie,t as h,ta as m,u as je,ua as nt,v as B,va as it,w as F,wa as ot,x as y,xa as rt,ya as T,z as Ze,za as S}from"./chunk-NC7YD7J6.js";var kt=[{path:"",loadComponent:()=>import("./chunk-VHL4UX2R.js").then(i=>i.HomeComponent)},{path:"unidades",loadComponent:()=>import("./chunk-HPOEQTT5.js").then(i=>i.UnidadesComponent)},{path:"detalhes-unidade/:id",loadComponent:()=>import("./chunk-TE6VTGGY.js").then(i=>i.DetalhesUnidadeComponent)}];var Oe="Service workers are disabled or not supported by this browser",z=class{serviceWorker;worker;registration;events;constructor(s,e){if(this.serviceWorker=s,!s)this.worker=this.events=this.registration=new ae(t=>t.error(new D(5601,!1)));else{let t=null,n=new N;this.worker=new ae(p=>(t!==null&&p.next(t),n.subscribe(I=>p.next(I))));let o=()=>{let{controller:p}=s;p!==null&&(t=p,n.next(t))};s.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(W(()=>s.getRegistration().then(p=>{if(!p)throw new D(5601,!1);return p})));let r=new N;this.events=r.asObservable();let b=p=>{let{data:I}=p;I?.type&&r.next(I)};s.addEventListener("message",b),e?.get(ve,null,{optional:!0})?.onDestroy(()=>{s.removeEventListener("controllerchange",o),s.removeEventListener("message",b)})}}postMessage(s,e){return new Promise(t=>{this.worker.pipe(H(1)).subscribe(n=>{n.postMessage(se({action:s},e)),t()})})}postMessageWithOperation(s,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(s,e);return Promise.all([o,n]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(s){let e;return typeof s=="string"?e=t=>t.type===s:e=t=>s.includes(t.type),this.events.pipe(G(e))}nextEventOfType(s){return this.eventsOfType(s).pipe(H(1))}waitForOperationCompleted(s){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(G(n=>n.nonce===s),H(1),L(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Kt=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new N;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=k,this.notificationClicks=k,this.notificationCloses=k,this.pushSubscriptionChanges=k,this.subscription=k;return}this.messages=this.sw.eventsOfType("PUSH").pipe(L(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(L(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(L(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(L(n=>n.data)),this.pushManager=this.sw.registration.pipe(L(n=>n.pushManager));let t=this.pushManager.pipe(W(n=>n.getSubscription()));this.subscription=new ae(n=>{let o=t.subscribe(n),r=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),r.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Oe));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return t.applicationServerKey=o,new Promise((r,b)=>{this.pushManager.pipe(W(f=>f.subscribe(t)),H(1)).subscribe({next:f=>{this.subscriptionChanges.next(f),r(f)},error:b})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Oe));let e=t=>{if(t===null)throw new D(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new D(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(H(1),W(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(Ie(z))};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),Nt=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=k,this.unrecoverable=k;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Oe));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new D(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(Ie(z))};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),wt=new me("");function Ht(){let i=h(ie);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let s=h(wt),e=h(qe),t=h(ve);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=i;if(typeof o=="function")n=new Promise(r=>o().subscribe(()=>r()));else{let[r,...b]=(o||"registerWhenStable:30000").split(":");switch(r){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Pt(+b[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),Pt(+b[0])]);break;default:throw new D(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(s,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(r=>console.error($e(5604,!1)))})})}function Pt(i){return new Promise(s=>setTimeout(s,i))}function Ut(){let i=h(ie),s=h(Ze),e=!0;return new z(e&&i.enabled!==!1?navigator.serviceWorker:void 0,s)}var ie=class{enabled;updateViaCache;type;scope;registrationStrategy};function Et(i,s={}){return je([Kt,Nt,{provide:wt,useValue:i},{provide:ie,useValue:s},{provide:z,useFactory:Ut},tt(Ht)])}var Lt={providers:[Ge(),It(kt),{provide:lt,useValue:"pt-BR"},Et("ngsw-worker.js",{enabled:!ut(),registrationStrategy:"registerWhenStable:30000"})]};var $t=["data-p-icon","angle-down"],Dt=(()=>{class i extends Z{static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["","data-p-icon","angle-down"]],features:[M],attrs:$t,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(t,n){t&1&&(y(),$(0,"path",0))},encapsulation:2})}return i})();var jt=["data-p-icon","angle-right"],Bt=(()=>{class i extends Z{static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["","data-p-icon","angle-right"]],features:[M],attrs:jt,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(t,n){t&1&&(y(),$(0,"path",0))},encapsulation:2})}return i})();var Zt=["data-p-icon","bars"],Ft=(()=>{class i extends Z{static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["","data-p-icon","bars"]],features:[M],attrs:Zt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,n){t&1&&(y(),$(0,"path",0))},encapsulation:2})}return i})();var Ot=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var Rt=(i,s)=>({instance:i,processedItem:s}),zt=()=>({exact:!1}),qt=(i,s)=>({$implicit:i,root:s});function Gt(i,s){if(i&1&&g(0,"li",6),i&2){let e=m().$implicit,t=m();ue(t.getItemProp(e,"style")),u(t.cn(t.cx("separator"),e==null?null:e.styleClass)),a("pBind",t.ptm("separator")),v("id",t.getItemId(e))}}function Wt(i,s){if(i&1&&g(0,"span",17),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),a("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,n,"itemIcon")),v("tabindex",-1)}}function Qt(i,s){if(i&1&&(_(0,"span",18),Y(1),d()),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),a("ngStyle",o.getItemProp(t,"labelStyle"))("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,n,"itemLabel")),c(),at(" ",o.getItemLabel(t)," ")}}function Yt(i,s){if(i&1&&g(0,"span",19),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),a("ngStyle",o.getItemProp(t,"labelStyle"))("innerHTML",o.getItemLabel(t),ye)("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,n,"itemLabel"))}}function Jt(i,s){if(i&1&&g(0,"p-badge",20),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.getItemProp(t,"badgeStyleClass")),a("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,n,"pcBadge"))("unstyled",o.unstyled())}}function Xt(i,s){if(i&1&&(y(),g(0,"svg",24)),i&2){let e=m(6),t=e.$implicit,n=e.index,o=m();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(t,n,"submenuIcon"))}}function en(i,s){if(i&1&&(y(),g(0,"svg",25)),i&2){let e=m(6),t=e.$implicit,n=e.index,o=m();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(t,n,"submenuIcon"))}}function tn(i,s){if(i&1&&(R(0),l(1,Xt,1,3,"svg",22)(2,en,1,3,"svg",23),V()),i&2){let e=m(6);c(),a("ngIf",e.root),c(),a("ngIf",!e.root)}}function nn(i,s){}function on(i,s){i&1&&l(0,nn,0,0,"ng-template")}function rn(i,s){if(i&1&&(R(0),l(1,tn,3,2,"ng-container",9)(2,on,1,0,null,21),V()),i&2){let e=m(5);c(),a("ngIf",!e.submenuiconTemplate),c(),a("ngTemplateOutlet",e.submenuiconTemplate)}}function sn(i,s){if(i&1&&(_(0,"a",13),l(1,Wt,1,5,"span",14)(2,Qt,2,6,"span",15)(3,Yt,1,6,"ng-template",null,1,de)(5,Jt,1,5,"p-badge",16)(6,rn,3,2,"ng-container",9),d()),i&2){let e=le(4),t=m(3),n=t.$implicit,o=t.index,r=m();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),a("ngStyle",r.getItemProp(n,"linkStyle"))("pBind",r.getPTOptions(n,o,"itemLink")),v("href",r.getItemProp(n,"url"),Je)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("target",r.getItemProp(n,"target"))("tabindex",-1),c(),a("ngIf",r.getItemProp(n,"icon")),c(),a("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),c(3),a("ngIf",r.getItemProp(n,"badge")),c(),a("ngIf",r.isItemGroup(n))}}function an(i,s){if(i&1&&g(0,"span",17),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),a("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,n,"itemIcon")),v("tabindex",-1)}}function mn(i,s){if(i&1&&(_(0,"span",17),Y(1),d()),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),a("ngStyle",o.getItemProp(t,"labelStyle"))("pBind",o.getPTOptions(t,n,"itemLabel")),c(),st(o.getItemLabel(t))}}function cn(i,s){if(i&1&&g(0,"span",28),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),a("ngStyle",o.getItemProp(t,"labelStyle"))("innerHTML",o.getItemLabel(t),ye)("pBind",o.getPTOptions(t,n,"itemLabel"))}}function ln(i,s){if(i&1&&g(0,"p-badge",20),i&2){let e=m(4),t=e.$implicit,n=e.index,o=m();u(o.getItemProp(t,"badgeStyleClass")),a("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,n,"pcBadge"))("unstyled",o.unstyled())}}function un(i,s){if(i&1&&(y(),g(0,"svg",24)),i&2){let e=m(6),t=e.$implicit,n=e.index,o=m();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(t,n,"submenuIcon"))}}function pn(i,s){if(i&1&&(y(),g(0,"svg",25)),i&2){let e=m(6),t=e.$implicit,n=e.index,o=m();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(t,n,"submenuIcon"))}}function dn(i,s){if(i&1&&(R(0),l(1,un,1,3,"svg",22)(2,pn,1,3,"svg",23),V()),i&2){let e=m(6);c(),a("ngIf",e.root),c(),a("ngIf",!e.root)}}function bn(i,s){}function fn(i,s){i&1&&l(0,bn,0,0,"ng-template")}function _n(i,s){if(i&1&&(R(0),l(1,dn,3,2,"ng-container",9)(2,fn,1,0,null,21),V()),i&2){let e=m(5);c(),a("ngIf",!e.submenuiconTemplate),c(),a("ngTemplateOutlet",e.submenuiconTemplate)}}function gn(i,s){if(i&1&&(_(0,"a",26),l(1,an,1,5,"span",14)(2,mn,2,5,"span",27)(3,cn,1,5,"ng-template",null,2,de)(5,ln,1,5,"p-badge",16)(6,_n,3,2,"ng-container",9),d()),i&2){let e=le(4),t=m(3),n=t.$implicit,o=t.index,r=m();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),a("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||ct(23,zt))("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,o,"itemLink")),v("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),c(),a("ngIf",r.getItemProp(n,"icon")),c(),a("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),c(3),a("ngIf",r.getItemProp(n,"badge")),c(),a("ngIf",r.isItemGroup(n))}}function hn(i,s){if(i&1&&(R(0),l(1,sn,7,14,"a",11)(2,gn,7,24,"a",12),V()),i&2){let e=m(2).$implicit,t=m();c(),a("ngIf",!t.getItemProp(e,"routerLink")),c(),a("ngIf",t.getItemProp(e,"routerLink"))}}function In(i,s){}function yn(i,s){i&1&&l(0,In,0,0,"ng-template")}function xn(i,s){if(i&1&&(R(0),l(1,yn,1,0,null,29),V()),i&2){let e=m(2).$implicit,t=m();c(),a("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",pe(2,qt,e.item,t.root))}}function vn(i,s){if(i&1){let e=ce();_(0,"ul",30),Q("itemClick",function(n){B(e);let o=m(3);return F(o.itemClick.emit(n))})("itemMouseEnter",function(n){B(e);let o=m(3);return F(o.onItemMouseEnter(n))}),d()}if(i&2){let e=m(2).$implicit,t=m();a("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,pe(13,Rt,t,e)))("pt",t.pt())("pBind",t.ptm("submenu"))("unstyled",t.unstyled()),v("aria-labelledby",t.getItemLabelId(e))}}function Cn(i,s){if(i&1){let e=ce();_(0,"li",7,0)(2,"div",8),Q("click",function(n){B(e);let o=m().$implicit,r=m();return F(r.onItemClick(n,o))})("mouseenter",function(n){B(e);let o=m().$implicit,r=m();return F(r.onItemMouseEnter({$event:n,processedItem:o}))}),l(3,hn,3,2,"ng-container",9)(4,xn,2,5,"ng-container",9),d(),l(5,vn,1,16,"ul",10),d()}if(i&2){let e=m(),t=e.$implicit,n=e.index,o=m();ue(o.getItemProp(t,"style")),u(o.cn(o.cx("item",pe(23,Rt,o,t)),o.getItemProp(t,"styleClass"))),a("pBind",o.getPTOptions(t,n,"item"))("tooltipOptions",o.getItemProp(t,"tooltipOptions"))("pTooltipUnstyled",o.unstyled()),v("id",o.getItemId(t))("data-p-highlight",o.isItemActive(t))("data-p-focused",o.isItemFocused(t))("data-p-disabled",o.isItemDisabled(t))("aria-label",o.getItemLabel(t))("aria-disabled",o.isItemDisabled(t)||void 0)("aria-haspopup",o.isItemGroup(t)&&!o.getItemProp(t,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(t)?o.isItemActive(t):void 0)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(n)),c(2),u(o.cx("itemContent")),a("pBind",o.getPTOptions(t,n,"itemContent")),c(),a("ngIf",!o.itemTemplate),c(),a("ngIf",o.itemTemplate),c(),a("ngIf",o.isItemVisible(t)&&o.isItemGroup(t))}}function Mn(i,s){if(i&1&&l(0,Gt,1,6,"li",4)(1,Cn,6,26,"li",5),i&2){let e=s.$implicit,t=m();a("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),c(),a("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var Tn=["start"],Sn=["end"],kn=["item"],Pn=["menuicon"],wn=["submenuicon"],En=["menubutton"],Ln=["rootmenu"],Dn=["*"];function Bn(i,s){i&1&&Ce(0)}function Fn(i,s){if(i&1&&(_(0,"div",7),l(1,Bn,1,0,"ng-container",8),d()),i&2){let e=m();u(e.cx("start")),a("pBind",e.ptm("start")),c(),a("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function On(i,s){if(i&1&&(y(),g(0,"svg",11)),i&2){let e=m(2);a("pBind",e.ptm("buttonIcon"))}}function An(i,s){}function Rn(i,s){i&1&&l(0,An,0,0,"ng-template")}function Vn(i,s){if(i&1){let e=ce();_(0,"a",9,2),Q("click",function(n){B(e);let o=m();return F(o.menuButtonClick(n))})("keydown",function(n){B(e);let o=m();return F(o.menuButtonKeydown(n))}),l(2,On,1,1,"svg",10)(3,Rn,1,0,null,8),d()}if(i&2){let e=m();u(e.cx("button")),a("pBind",e.ptm("button")),v("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),c(2),a("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),c(),a("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Kn(i,s){i&1&&Ce(0)}function Nn(i,s){if(i&1&&(_(0,"div",7),l(1,Kn,1,0,"ng-container",8),d()),i&2){let e=m();u(e.cx("end")),a("pBind",e.ptm("end")),c(),a("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function Hn(i,s){if(i&1&&(_(0,"div"),it(1),d()),i&2){let e=m();u(e.cx("end"))}}var Un={submenu:({instance:i,processedItem:s})=>({display:i.isItemActive(s)?"flex":"none"})},$n={root:({instance:i})=>["p-menubar p-component",{"p-menubar-mobile":i.queryMatches(),"p-menubar-mobile-active":i.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:i,processedItem:s})=>["p-menubar-item",{"p-menubar-item-active":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ae=(()=>{class i extends vt{name="menubar";style=Ot;classes=$n;inlineStyles=Un;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(i)))(n||i)}})();static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();var At=new me("MENUBAR_INSTANCE"),Re=(()=>{class i{autoHide;autoHideDelay;mouseLeaves=new N;mouseLeft$=this.mouseLeaves.pipe(Ue(()=>He(this.autoHideDelay)),G(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),jn=(()=>{class i extends Ee{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new P;itemMouseEnter=new P;menuFocus=new P;menuBlur=new P;menuKeydown=new P;mouseLeaveSubscriber;menubarService=h(Re);_componentStyle=h(Ae);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?Pe(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return E(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}}getPTOptions(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(t,n){t&2&&(v("id",n.root?n.menuId:null)("aria-activedescendant",n.focusedItemId)("role","menubar"),ue(n.inlineStyles),u(n.level===0?n.cx("rootList"):n.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",w],autoZIndex:[2,"autoZIndex","autoZIndex",w],baseZIndex:[2,"baseZIndex","baseZIndex",J],mobileActive:[2,"mobileActive","mobileActive",w],autoDisplay:[2,"autoDisplay","autoDisplay",w],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",J],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[M],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(t,n){t&1&&l(0,Mn,2,2,"ng-template",3),t&2&&a("ngForOf",n.items)},dependencies:[i,X,dt,Me,Te,bt,Se,gt,ht,St,Fe,Tt,j,Dt,Bt,De,Mt,ne,Le],encapsulation:2})}return i})(),Ve=(()=>{class i extends Ee{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=h(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(j,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new P;onBlur=new P;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=O(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=O([]);number=O(0);focusedItemInfo=O({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=h(Ae);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${E(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,n,o,r,b){super(),this.document=e,this.platformId=t,this.el=n,this.renderer=o,this.cd=r,this.menubarService=b,We(()=>{let f=this.activeItemPath();E(f)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||xt("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,n={},o=""){let r=[];return e&&e.forEach((b,f)=>{let p=(o!==""?o+"_":"")+f,I={item:b,index:f,level:t,key:p,parent:n,parentKey:o};I.items=this.createProcessedItems(b.items,t+1,I,p),r.push(I)}),r}bindMatchMediaListener(){if(be(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?Pe(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:n}=e,o=this.isProcessedItemGroup(n),r=ee(n.parent);if(this.isSelected(n)){let{index:f,key:p,level:I,parentKey:ge,item:re}=n;this.activeItemPath.set(this.activeItemPath().filter(q=>p!==q.key&&p.startsWith(q.key))),this.focusedItemInfo.set({index:f,level:I,parentKey:ge,item:re}),this.dirty=!r,K(this.rootmenu?.el.nativeElement)}else if(o)this.onItemChange(e);else{let f=r?n:this.activeItemPath().find(p=>p.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,f?f.index:-1),this.mobileActive=!1,K(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){we()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,n=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},n)}changeFocusedItemIndex(e,t){let n=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let o=this.focusedItemInfo();this.focusedItemInfo.set(Ne(se({},o),{item:n.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=te(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:n,isFocus:o}=e;if(ee(n))return;let{index:r,key:b,level:f,parentKey:p,items:I,item:ge}=n,re=E(I),q=this.activeItemPath().filter(Ke=>Ke.parentKey!==p&&Ke.parentKey!==b);re&&q.push(n),this.focusedItemInfo.set({index:r,level:f,parentKey:p,item:ge}),re&&(this.dirty=!0),o&&K(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(q)}toggle(e){this.mobileActive?(this.mobileActive=!1,Be.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,Be.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{K(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&K(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),K(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let o=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:o?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&yt(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return E(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&E(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&E(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,o=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(o=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?ee(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(o=>o.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(ee(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let o=this.activeItemPath().find(r=>r.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(b=>b.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],n=t?this.activeItemPath().find(o=>o.key===t.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let o=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=te(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(te(t,'[data-pc-section="itemlink"]')||te(t,"a,button"));n?n.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ke(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?ke(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){be(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{we()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){be(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),n=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||i)(A(ze),A(Ye),A(Qe),A(Xe),A(pt),A(Re))};static \u0275cmp=x({type:i,selectors:[["p-menubar"]],contentQueries:function(t,n,o){if(t&1&&ot(o,Tn,4)(o,Sn,4)(o,kn,4)(o,Pn,4)(o,wn,4)(o,fe,4),t&2){let r;T(r=S())&&(n.startTemplate=r.first),T(r=S())&&(n.endTemplate=r.first),T(r=S())&&(n.itemTemplate=r.first),T(r=S())&&(n.menuIconTemplate=r.first),T(r=S())&&(n.submenuIconTemplate=r.first),T(r=S())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&rt(En,5)(Ln,5),t&2){let o;T(o=S())&&(n.menubutton=o.first),T(o=S())&&(n.rootmenu=o.first)}},hostVars:2,hostBindings:function(t,n){t&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",w],baseZIndex:[2,"baseZIndex","baseZIndex",J],autoDisplay:[2,"autoDisplay","autoDisplay",w],autoHide:[2,"autoHide","autoHide",w],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",J],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[mt([Re,Ae,{provide:At,useExisting:i},{provide:Ct,useExisting:i}]),et([j]),M],ngContentSelectors:Dn,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1&&(nt(),l(0,Fn,2,4,"div",3)(1,Vn,4,9,"a",4),_(2,"ul",5,0),Q("itemClick",function(r){return n.onItemClick(r)})("mousedown",function(r){return n.onMenuMouseDown(r)})("focus",function(r){return n.onMenuFocus(r)})("blur",function(r){return n.onMenuBlur(r)})("keydown",function(r){return n.onKeyDown(r)})("itemMouseEnter",function(r){return n.onItemMouseEnter(r)})("mouseleave",function(r){return n.onMouseLeave(r)}),d(),l(4,Nn,2,4,"div",6)(5,Hn,2,2,"ng-template",null,1,de)),t&2){let o=le(6);a("ngIf",n.startTemplate||n._startTemplate),c(),a("ngIf",n.model&&n.model.length>0),c(),a("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuIconTemplate||n._submenuIconTemplate)("activeItemPath",n.activeItemPath())("pt",n.pt())("pBind",n.ptm("rootList"))("unstyled",n.unstyled()),v("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),c(2),a("ngIf",n.endTemplate||n._endTemplate)("ngIfElse",o)}},dependencies:[X,Me,Te,Se,jn,Fe,j,Ft,De,ne,Le],encapsulation:2,changeDetection:0})}return i})(),Vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=xe({type:i});static \u0275inj=he({imports:[Ve,ne,ne]})}return i})();function zn(i,s){i&1&&(_(0,"div",5)(1,"span",6),Y(2,"Bistr\xF4"),d()())}function qn(i,s){i&1&&(_(0,"div",7)(1,"span",8),g(2,"i",9)(3,"input",10),d(),g(4,"i",11),d())}var _e=class i{items=O(void 0);ngOnInit(){this.items.set([{label:"In\xEDcio",icon:"pi pi-home",routerLink:"/"},{label:"Unidades",icon:"pi pi-map-marker",routerLink:"/unidades"},{label:"Sobre",icon:"pi pi-info-circle"},{label:"Contato",icon:"pi pi-envelope"}])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-root"]],decls:6,vars:1,consts:[[1,"app-container"],[3,"model"],["pTemplate","start"],["pTemplate","end"],[1,"main-content"],[1,"brand-container","flex","align-items-center","mr-3"],[1,"font-bold","text-xl","text-primary",2,"color","#1a0b5e","font-style","italic"],[1,"flex","align-items-center","gap-2"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Buscar unidade...",1,"p-inputtext-sm","hidden","md:inline-block"],["title","Perfil",1,"pi","pi-user","text-xl","text-700","cursor-pointer"]],template:function(e,t){e&1&&(_(0,"div",0)(1,"p-menubar",1),l(2,zn,3,0,"ng-template",2)(3,qn,5,0,"ng-template",3),d(),_(4,"main",4),g(5,"router-outlet"),d()()),e&2&&(c(),a("model",t.items()))},dependencies:[_t,Vt,Ve,fe,X],styles:[".app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;background-color:#f8f9fa}.app-container[_ngcontent-%COMP%]   .p-menubar[_ngcontent-%COMP%]{border-radius:0;border-left:none;border-right:none;border-top:none;background-color:#fff;box-shadow:0 2px 8px #00000014;padding:.75rem 1.5rem}.app-container[_ngcontent-%COMP%]   .p-menubar[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]{padding-right:1rem}.app-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})};ft(_e,Lt).catch(i=>console.error(i));
