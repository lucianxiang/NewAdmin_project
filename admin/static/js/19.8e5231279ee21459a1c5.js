webpackJsonp([19],{"E2/5":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},F3uM:function(n,t,e){var a=e("E2/5");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("70c1c5e3",a,!0)},gKFO:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("SJI6"),s={computed:Object(a.mapGetters)(["showTopList"]),data:function(){return{isLoading:!1,isPass:[{value:0,label:"审核中"},{value:1,label:"通过审核"},{value:2,label:"未通过审核"}],toExamineDialog:!1,formLabelWidth:"120px",toExamine:{tm_ts_Code:"",tm_ts_ShowTopIsAgree:""},total:0}},methods:{handleCurrentChange:function(n){this.initData(n)},initData:function(n){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:"",tm_ts_Name:"",tm_ts_TradeInfoID:"",tm_ts_ShowTop:1,tm_ts_IsDelete:0,page:n||1,rows:5};this.isLoading=!0,this.$store.dispatch("initShowTop",e).then(function(n){t.isLoading=!1,t.total=n})},toExamineS:function(n){this.$store.commit("setTranstionFalse"),this.toExamine.tm_ts_Code=n,this.toExamineDialog=!0},toExamineSubmit:function(){var n=this,t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:this.toExamine.tm_ts_Code,tm_ts_ShowTopIsAgree:this.toExamine.tm_ts_ShowTopIsAgree};this.$store.dispatch("toExamineShowHomePageSubmit",t).then(function(t){n.$notify({message:t,type:"success"}),n.initData()},function(t){n.$notify({message:t,type:"error"})}),this.toExamineDialog=!1}},created:function(){this.initData()}},o={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{attrs:{id:"wrap"}},[e("h1",{staticClass:"userClass"},[n._v("审核景点展示首页")]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:n.showTopList}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("el-form-item",{attrs:{label:"景点编码(主键):"}},[e("span",[n._v(n._s(t.row.tm_ts_Code))])]),n._v(" "),e("el-form-item",{attrs:{label:"景点名称:"}},[e("span",[n._v(n._s(t.row.tm_ts_Name))])]),n._v(" "),e("el-form-item",{attrs:{label:"主题名称:"}},[e("span",[n._v(n._s(t.row.tm_ts_ThemeTypeID))])]),n._v(" "),e("el-form-item",{attrs:{label:"预订须知编号:"}},[e("span",[n._v(n._s(t.row.tm_bk_ID))])]),n._v(" "),e("el-form-item",{attrs:{label:"票种编号:"}},[e("span",[n._v(n._s(t.row.tm_tm_ID))])]),n._v(" "),e("el-form-item",{attrs:{label:"洲:"}},[e("span",[n._v(n._s(t.row.tm_ts_GreatName))])]),n._v(" "),e("el-form-item",{attrs:{label:"国:"}},[e("span",[n._v(n._s(t.row.tm_ts_CountrieName))])]),n._v(" "),e("el-form-item",{attrs:{label:"省:"}},[e("span",[n._v(n._s(t.row.tm_ts_ProviceName))])]),n._v(" "),e("el-form-item",{attrs:{label:"市:"}},[e("span",[n._v(n._s(t.row.tm_ts_CityName))])]),n._v(" "),e("el-form-item",{attrs:{label:"县:"}},[e("span",[n._v(n._s(t.row.tm_ts_ContryName))])]),n._v(" "),e("el-form-item",{attrs:{label:"展示图片:"}},n._l(t.row.tm_ts_ShowImage,function(n,t){return e("img",{staticStyle:{"margin-top":"10px"},attrs:{src:n,width:"300",height:"150"}})})),n._v(" "),e("el-form-item",{attrs:{label:"介绍:"}},[e("span",[n._v(n._s(t.row.tm_ts_Introduce))])]),n._v(" "),e("el-form-item",{attrs:{label:"详细介绍:"}},[e("span",[n._v(n._s(t.row.tm_ts_Detailedintroduction))])]),n._v(" "),e("el-form-item",{attrs:{label:"详细地址:"}},[e("span",[n._v(n._s(t.row.tm_ts_Address))])]),n._v(" "),e("el-form-item",{attrs:{label:"开放时间:"}},[e("span",[n._v(n._s(t.row.tm_ts_Opentime))])]),n._v(" "),e("el-form-item",{attrs:{label:"建议游玩时间:"}},[e("span",[n._v(n._s(t.row.tm_ts_Time))])]),n._v(" "),e("el-form-item",{attrs:{label:"联系电话号码:"}},[e("span",[n._v(n._s(t.row.tm_ts_Phone))])]),n._v(" "),e("el-form-item",{attrs:{label:"经度:"}},[e("span",[n._v(n._s(t.row.tm_ts_Longitude))])]),n._v(" "),e("el-form-item",{attrs:{label:"纬度:"}},[e("span",[n._v(n._s(t.row.tm_ts_Latitude))])]),n._v(" "),e("el-form-item",{attrs:{label:"是否热门景点:"}},[e("span",[n._v(n._s(t.row.tm_ts_IsHot))])]),n._v(" "),e("el-form-item",{attrs:{label:"是否境外景点:"}},[e("span",[n._v(n._s(t.row.tm_ts_IsOversea))])]),n._v(" "),e("el-form-item",{attrs:{label:"是否当季精选:"}},[e("span",[n._v(n._s(t.row.tm_ts_IsSeasonChoice))])]),n._v(" "),e("el-form-item",{attrs:{label:"建议价格:"}},[e("span",[n._v(n._s(t.row.tm_ts_SuggestPrice)+"元")])]),n._v(" "),e("el-form-item",{attrs:{label:"创建时间:"}},[e("span",[n._v(n._s(t.row.tm_ts_CreateTime))])]),n._v(" "),e("el-form-item",{attrs:{label:"备注:"}},[e("span",[n._v(n._s(t.row.tm_ts_Remark))])])],1)]}}])}),n._v(" "),e("el-table-column",{attrs:{label:"景点名称",prop:"tm_ts_Name"}}),n._v(" "),e("el-table-column",{attrs:{label:"联系电话号码",prop:"tm_ts_Phone"}}),n._v(" "),e("el-table-column",{staticStyle:{width:"1000px"},attrs:{label:"操作",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){n.toExamineS(t.row.tm_ts_Code)}}},[[n._v("\n              "+n._s(t.row.showTopIsAgreeLabel)+"\n            ")]],2)]}}])})],1),n._v(" "),e("el-dialog",{attrs:{title:"审核弹窗",visible:n.toExamineDialog},on:{"update:visible":function(t){n.toExamineDialog=t}}},[e("el-form",{attrs:{model:n.toExamine}},[e("el-form-item",{attrs:{label:"审核状态:","label-width":n.formLabelWidth}},[e("el-select",{attrs:{placeholder:"请选择审核状态"},model:{value:n.toExamine.tm_ts_ShowTopIsAgree,callback:function(t){n.$set(n.toExamine,"tm_ts_ShowTopIsAgree",t)},expression:"toExamine.tm_ts_ShowTopIsAgree"}},n._l(n.isPass,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}))],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.toExamineDialog=!1}}},[n._v("取 消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:n.toExamineSubmit}},[n._v("确 定")])],1)],1),n._v(" "),e("div",{staticClass:"block",staticStyle:{float:"right",padding:"10px 0"}},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:n.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:n.total},on:{"current-change":n.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var l=e("VU/8")(s,o,!1,function(n){e("F3uM")},"data-v-591031e6",null);t.default=l.exports}});