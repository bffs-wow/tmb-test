"use strict";(self.webpackChunksynergy_loot=self.webpackChunksynergy_loot||[]).push([[990],{990:(N,u,r)=>{r.r(u),r.d(u,{StatisticsModule:()=>I});var c=r(6895),d=r(1791),v=r(8929),h=r(7625),T=r(2994),m=r(1096),p=r(5844),t=r(5062),Z=r(2287),f=r(3998);function k(e,n){if(1&e&&(t.TgZ(0,"div",9),t._UZ(1,"progress",10),t.TgZ(2,"span",11),t._uU(3),t.qZA()()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("value",i.totalProgress.progress),t.xp6(2),t.AsE("Total Loot Progress (This Phase): ",i.totalProgress.rankingsReceived," / ",i.totalProgress.rankings,"")}}function P(e,n){if(1&e&&(t.TgZ(0,"div",9),t._UZ(1,"progress",12),t.TgZ(2,"span",11),t._uU(3),t.qZA()()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("value",i.totalProgressTop10.progress),t.xp6(2),t.AsE("Top 10 Rankings Progress (This Phase): ",i.totalProgressTop10.rankingsReceived," / ",i.totalProgressTop10.rankings,"")}}function x(e,n){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.AsE(" ",i.ranking.loot.name," (",i.sum,") ")}}function R(e,n){if(1&e&&(t.TgZ(0,"div",13)(1,"div")(2,"p",4),t._uU(3,"Most Popular Items"),t.qZA(),t.TgZ(4,"ol"),t.YNc(5,x,2,2,"li",14),t.qZA()()()),2&e){const i=t.oxw();t.xp6(5),t.Q6J("ngForOf",i.mostPopularItems)}}function A(e,n){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.AsE(" ",i.item.name," (",i.count,") ")}}function S(e,n){if(1&e&&(t.TgZ(0,"div",13)(1,"div")(2,"p",4),t._uU(3,"Most Commonly Looted Items"),t.qZA(),t.TgZ(4,"ol"),t.YNc(5,A,2,2,"li",14),t.qZA()()()),2&e){const i=t.oxw();t.xp6(5),t.Q6J("ngForOf",i.mostCommonItems)}}const C=[{path:"",component:(()=>{class e{constructor(i,a){this.tmbService=i,this.statisticsService=a,this.destroyed$=new v.xQ,this.raiderCount=0,this.lootReceived=0,this.totalRanked=0,this.avgAttendance=0,this.totalReceivedThisPhase=0,this.totalProgress=null,this.totalProgressTop10=null,this.mostPopularItems=null,this.mostCommonItems=null}ngOnInit(){this.tmbService.raiders$.pipe((0,h.R)(this.destroyed$),(0,T.b)(i=>{this.raiderCount=i.length,this.lootReceived=i.reduce((s,o)=>s+o.received.length,0),this.totalRanked=i.reduce((s,o)=>s+o.wishlist.length,0),this.avgAttendance=i.reduce((s,o)=>s+o.attendance_points,0)/this.raiderCount;const a=i.map(s=>this.statisticsService.getRaiderListProgress(s));this.totalProgress=a.reduce((s,o)=>(s.rankings=s.rankings+o.rankings,s.rankingsReceived=s.rankingsReceived+o.rankingsReceived,s),{progress:0,rankings:0,rankingsReceived:0}),this.totalProgress.progress=this.totalProgress.rankingsReceived/this.totalProgress.rankings*100;const U=i.map(s=>this.statisticsService.getRaiderListProgress(s,10));this.totalProgressTop10=U.reduce((s,o)=>(s.rankings=s.rankings+o.rankings,s.rankingsReceived=s.rankingsReceived+o.rankingsReceived,s),{progress:0,rankings:0,rankingsReceived:0}),this.totalProgressTop10.progress=this.totalProgressTop10.rankingsReceived/this.totalProgressTop10.rankings*100;const O=i.reduce((s,o)=>[...s,...o.wishlist],[]),g=(0,m.Z)(O,"item_id"),q=Object.keys(g).filter(s=>"undefined"!=s).map(s=>({itemId:s,sum:g[s].reduce((F,Y)=>F+Y.raider_points,0)})).sort((s,o)=>o.sum-s.sum),J=(0,p.Z)(q,10);this.mostPopularItems=J.map(s=>({ranking:g[s.itemId][0],sum:s.sum}));const M=i.reduce((s,o)=>[...s,...o.received],[]),l=(0,m.Z)(M,"item_id"),Q=Object.keys(l).filter(s=>"undefined"!=s).map(s=>({itemId:s,count:l[s].length})).sort((s,o)=>o.count-s.count),b=(0,p.Z)(Q,10);this.mostCommonItems=b.map(s=>({item:l[s.itemId][0],count:s.count}))})).subscribe()}ngOnDestroy(){this.destroyed$.next()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(Z.w),t.Y36(f._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-statistics"]],decls:35,vars:8,consts:[[1,"columns","is-multiline"],[1,"column","is-12"],[1,"level","is-mobile"],[1,"level-item","has-text-centered","box"],[1,"heading"],[1,"title"],[1,"box","has-background-dark"],["class","has-text-centered",4,"ngIf"],["class","level-item box",4,"ngIf"],[1,"has-text-centered"],["max","100",1,"progress","is-info","mb-0",3,"value"],[1,"has-text-centered","is-size-5","is-grey-light"],["max","100",1,"progress","is-success","mb-0",3,"value"],[1,"level-item","box"],[4,"ngFor","ngForOf"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"div",3)(4,"div")(5,"p",4),t._uU(6,"Raiders"),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.qZA()()(),t.TgZ(9,"div",3)(10,"div")(11,"p",4),t._uU(12,"Total Loot Received (All Time)"),t.qZA(),t.TgZ(13,"p",5),t._uU(14),t.qZA()()(),t.TgZ(15,"div",3)(16,"div")(17,"p",4),t._uU(18,"Total Rankings (This Phase)"),t.qZA(),t.TgZ(19,"p",5),t._uU(20),t.qZA()()(),t.TgZ(21,"div",3)(22,"div")(23,"p",4),t._uU(24,"Average Attendance Points"),t.qZA(),t.TgZ(25,"p",5),t._uU(26),t.qZA()()()()(),t.TgZ(27,"div",1)(28,"div",6),t.YNc(29,k,4,3,"div",7),t.YNc(30,P,4,3,"div",7),t.qZA()(),t.TgZ(31,"div",1)(32,"nav",2),t.YNc(33,R,6,1,"div",8),t.YNc(34,S,6,1,"div",8),t.qZA()()()),2&i&&(t.xp6(8),t.Oqu(a.raiderCount),t.xp6(6),t.Oqu(a.lootReceived),t.xp6(6),t.Oqu(a.totalRanked),t.xp6(6),t.Oqu(a.avgAttendance.toFixed(2)),t.xp6(3),t.Q6J("ngIf",a.totalProgress),t.xp6(1),t.Q6J("ngIf",a.totalProgressTop10),t.xp6(3),t.Q6J("ngIf",a.mostPopularItems),t.xp6(1),t.Q6J("ngIf",a.mostCommonItems))},dependencies:[c.sg,c.O5]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,y]}),e})()}}]);