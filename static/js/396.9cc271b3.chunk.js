"use strict";(self.webpackChunkreact_wallet=self.webpackChunkreact_wallet||[]).push([[396],{396:function(r,n,e){e.r(n),e.d(n,{default:function(){return k}});var t=e(2791),a=e(5967),i=e(3623),o=e(9434),s="Chart_wrapper__FxNAa",c="Chart_mainWrapper__PJMcd",l="Chart_title__Uk+iI",u="Chart_chart__DIzHn",d="Chart_main__oYmh+",m=e(1413),p=e(8418),f=e(3970),h=e(6378),x=e(3509),b={form:"Filter_form__Tvf-S"},g=e(3329);function _(){var r=(0,o.v9)(p.dc),n=(0,o.v9)(p.hy),e=(0,o.I0)();(0,t.useEffect)((function(){e((0,h.l3)({month:r,year:n}))}),[]);var a={control:function(r){return(0,m.Z)((0,m.Z)({},r),{},{backgroundColor:"transparent",border:"1px solid #000",borderRadius:"30px",borderBottom:"1px solid green",padding:"12px 20px",minHeight:"32px",fontSize:"16px",fontFamily:"Circe",lineHeight:"24px",fontWeight:"400",color:"#000"})},placeholder:function(r){return(0,m.Z)((0,m.Z)({},r),{},{color:"#000"})},menu:function(r){return(0,m.Z)((0,m.Z)({},r),{},{background:"rgba(0, 0, 0, 0.05)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.5)",backdropFilter:"blur(25px)",borderRadius:"20px",color:"#000",fontSize:"16px",overflow:"hidden"})},option:function(r,n){return(0,m.Z)((0,m.Z)({},r),{},{":hover":{background:"#fff",color:"#000"},":active":{background:"#fff",color:"#000"},":focus":{background:"#fff",color:"#000"}})},singleValue:function(r){return(0,m.Z)((0,m.Z)({},r),{},{color:"#000"})},dropdownIndicator:function(r){return(0,m.Z)((0,m.Z)({},r),{},{padding:"0",color:"#000"})},indicatorsContainer:function(r){return(0,m.Z)((0,m.Z)({},r),{},{padding:"0",color:"#000"})},indicatorSeparator:function(r){return(0,m.Z)((0,m.Z)({},r),{},{display:"none"})},input:function(r){return(0,m.Z)((0,m.Z)({},r),{},{padding:"0",margin:"0"})},valueContainer:function(r){return(0,m.Z)((0,m.Z)({},r),{},{padding:"0"})}},i=[{name:"January"},{name:"February"},{name:"March"},{name:"April"},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"September"},{name:"October"},{name:"November"},{name:"December"}];return(0,g.jsxs)("form",{className:b.form,onSubmit:function(r){r.preventDefault()},children:[(0,g.jsx)(x.Z,{options:[{id:2023,name:2023},{id:2022,name:2022},{id:2021,name:2021},{id:2020,name:2020},{id:2019,name:2019}],onSelect:function(n){e((0,f.$k)(n)),e((0,h.l3)({month:r,year:n}))},styles:a,placeholder:n.toString()}),(0,g.jsx)(x.Z,{options:i,onSelect:function(r){e((0,f.aM)(r)),e((0,h.l3)({month:r,year:n}))},styles:a,placeholder:i[r-1].name})]})}var v=e(2810),j={label:"StatisticsList_label__jk7Gy",list:"StatisticsList_list__jgx8A",marker:"StatisticsList_marker__pt0Ed",total:"StatisticsList_total__pE73F",red:"StatisticsList_red__FJrFD",green:"StatisticsList_green__1lcZ7"};function S(r){var n=r.backgroundColor,e=(0,o.v9)((function(r){return r.transactions.categoriesSummary})),t=e.categories,a=e.expenseSummary,i=e.incomeSummary,s=function(r){var n=Math.abs(r).toFixed(2),e=new Intl.NumberFormat("en-US").format(n).replaceAll(","," "),t=n.split(".")[1]||"00";return"".concat(e,".").concat(t)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:j.label,children:[(0,g.jsx)("span",{children:"Category"}),(0,g.jsx)("span",{children:"Sum"})]}),(0,g.jsx)("ul",{className:j.list,children:t.filter((function(r){return"INCOME"!==r.type})).map((function(r,e){var t=r.name,a=r.total;r.type;return(0,g.jsxs)("li",{children:[(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{className:j.marker,style:{backgroundColor:n[e]}}),t]}),(0,g.jsx)("span",{children:s(a)})]},(0,v.Z)())}))}),(0,g.jsxs)("div",{className:j.total,children:[(0,g.jsx)("span",{children:"Expenses:"}),(0,g.jsxs)("span",{className:j.red,children:[" ",s(a)]})]}),(0,g.jsxs)("div",{className:j.total,children:[(0,g.jsx)("span",{children:"Income:"}),(0,g.jsx)("span",{className:j.green,children:s(i)})]})]})}function Z(){var r=(0,o.v9)(p.sI),n=(0,o.v9)(p.Kk),e=(0,o.v9)(p.ip);function t(){return function(r){var n=Math.abs(r).toFixed(2),e=new Intl.NumberFormat("en-US").format(n).replaceAll(","," "),t=n.split(".")[1]||"00",a=r.toString().includes("-")?"-":"";return"\u20b4 ".concat(a).concat(e,".").concat(t)}(e+n)}var a="doughnut-".concat(t()),m=function(r,n){return r.filter((function(r){return"INCOME"!==r.type})).map((function(r){return r[n]}))},f=["rgba(254, 208, 87, 1)","rgba(255, 216, 208, 1)","rgba(253, 148, 152, 1)","rgba(197, 186, 255, 1)","rgba(110, 120, 232, 1)","rgba(74, 86, 226, 1)","rgba(129, 225, 255, 1)","rgba(36, 204, 167, 1)","rgb(25, 255, 0, 1)","rgba(221, 55, 194, 0.8)","rgba(66, 5, 142, 0.8)","rgba(15, 102, 255, 0.2)"],h={labels:m(r,"name"),datasets:[{data:m(r,"total"),backgroundColor:f,borderWidth:0}]};return(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)("h2",{className:l,children:"Statistics"}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("div",{className:u,children:(0,g.jsx)(i.$I,{data:h,options:{cutout:105},plugins:[{beforeDraw:function(r){var n=r.width,e=r.height,a=r.ctx;a.restore(),a.font="bold 18px Circe",a.textBaseline="middle";var i=t(),o=(n-a.measureText(i).width)/2,s=e/2;a.fillText(i,o,s),a.save()}}]},a)}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)(_,{}),(0,g.jsx)(S,{backgroundColor:f})]})]})]})}a.kL.register(a.qi,a.u);var k=function(){return(0,g.jsx)(Z,{})}}}]);
//# sourceMappingURL=396.9cc271b3.chunk.js.map