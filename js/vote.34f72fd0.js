"use strict";(self["webpackChunkaccredify_cat_api"]=self["webpackChunkaccredify_cat_api"]||[]).push([[210],{3538:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(3396),s=a(7139);const l={class:""},i={class:"content flex_x"},c={class:"name"},u={class:"btns flex_x"};function o(e,t,a,o,r,d){const v=(0,n.up)("el-image"),m=(0,n.up)("el-button");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.mainData,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"item",key:t},[(0,n._)("div",null,[(0,n.Wm)(v,{src:e.image.url},null,8,["src"])]),(0,n._)("div",c,(0,s.zw)(e.image_id),1),(0,n._)("div",u,[(0,n.Wm)(m,{type:"primary",onClick:t=>o.unvote(e)},{default:(0,n.w5)((()=>[(0,n.Uk)("Unvote")])),_:2},1032,["onClick"])])])))),128))])])}var r=a(4870),d=a(7178),v=a(4721),m={setup(){let e=(0,r.iH)(null);const t=()=>{(0,v.W)({url:"/votes",method:"get"}).then((t=>{200==t.status&&(e.value=t.data)}))};t();const a=e=>{(0,v.W)({url:`/votes/${e.id}`,method:"delete"}).then((e=>{console.log(e),(0,d.z8)({message:"Thanks, bye bye~"}),t()}))};return{getData:t,mainData:e,unvote:a}}},_=a(89);const f=(0,_.Z)(m,[["render",o]]);var g=f}}]);
//# sourceMappingURL=vote.34f72fd0.js.map