var G=Object.defineProperty;var N=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var F=(d,u,m)=>u in d?G(d,u,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[u]=m,k=(d,u)=>{for(var m in u||(u={}))j.call(u,m)&&F(d,m,u[m]);if(N)for(var m of N(u))q.call(u,m)&&F(d,m,u[m]);return d};import{b as O,c as E,u as z}from"./table.1661925429160.js";import{l as M}from"./type.1661925429160.js";import P from"./basicInfoForm.1661925429160.js";import Q from"./genInfoForm.1661925429160.js";import{_ as K,H as C,k as $,p as H,f as v,w as t,M as R,r,o as _,b as V,h as e,a as D,e as x,t as g,F as B,g as A,i as L}from"./index.1661925429160.js";const J={name:"genEdit",components:{BasicInfoForm:P,GenInfoForm:Q},setup(){const{proxy:d}=A(),u=C(),m=C(),n=$({isShowDialog:!1,loading:!1,activeName:"cloum",columns:[],tableTree:[],dictOptions:[],info:{}}),T=a=>{a.tableId&&(O(a.tableId).then(s=>{let f=s.data.list.filter(w=>!["createTime","update_time","delete_time"].includes(w.columnName));n.columns=f,n.info=s.data.info,n.info.columns=n.columns,n.isShowDialog=!0}),n.loading=!1,M({pageNum:1,pageSize:100}).then(s=>{n.dictOptions=s.data.data}),E().then(s=>{n.tableTree=s.data,n.tableTree.length===0&&n.tableTree.unshift({tableId:0,className:"\u8BF7\u9009\u62E9"})}))},y=()=>{const a=m.value.basicInfoForm,s=u.value.genInfoFormRef;Promise.all([a,s].map(i)).then(f=>{if(f.every(c=>!!c)){const c=Object.assign({},m.value.info,u.value.info);c.columns=n.columns,n.loading=!0,z(c).then(U=>{R.success("\u4FEE\u6539\u6210\u529F"),n.loading=!1,b()})}else R.error("\u8868\u5355\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u91CD\u65B0\u68C0\u67E5\u63D0\u4EA4\u5185\u5BB9")})},h=()=>{E().then(a=>{n.tableTree=a.data,n.tableTree.unshift({tableId:0,className:"\u8BF7\u9009\u62E9"})})},p=a=>n.tableTree.filter(function(s){if(s.tableName===a)return s.columns}),i=a=>new Promise(s=>{a.validate(f=>{s(f)})}),b=a=>{d.mittBus.emit("onEditTableModule",a),n.isShowDialog=!1};return k({genInfoRef:u,basicInfoRef:m,openDialog:T,closeDialog:b,getTablesCol:p,getTables:h,submitForm:y,getFormPromise:i},H(n))}},W={style:{float:"left"}},X={style:{float:"right",color:"#8492a6","font-size":"13px"}},Y={style:{float:"left"}},Z={style:{float:"right",color:"#8492a6","font-size":"13px"}},ee={class:"dialog-footer"},le=L("\u63D0\u4EA4"),ae=L("\u8FD4\u56DE");function oe(d,u,m,n,T,y){const h=r("BasicInfoForm"),p=r("el-tab-pane"),i=r("el-table-column"),b=r("el-input"),a=r("el-option"),s=r("el-select"),f=r("el-checkbox"),w=r("el-table"),c=r("GenInfoForm"),U=r("el-tabs"),I=r("el-button"),S=r("el-dialog");return _(),v(S,{modelValue:d.isShowDialog,"onUpdate:modelValue":u[1]||(u[1]=l=>d.isShowDialog=l),title:"\u7F16\u8F91\u8868\u7ED3\u6784",width:"90%",center:""},{footer:t(()=>[V("span",ee,[e(I,{type:"primary",onClick:n.submitForm,loading:d.loading},{default:t(()=>[le]),_:1},8,["onClick","loading"]),e(I,{onClick:n.closeDialog},{default:t(()=>[ae]),_:1},8,["onClick"])])]),default:t(()=>[e(U,{modelValue:d.activeName,"onUpdate:modelValue":u[0]||(u[0]=l=>d.activeName=l)},{default:t(()=>[e(p,{label:"\u57FA\u672C\u4FE1\u606F",name:"basic"},{default:t(()=>[e(h,{ref:"basicInfoRef",info:d.info},null,8,["info"])]),_:1}),e(p,{label:"\u5B57\u6BB5\u4FE1\u606F",name:"cloum"},{default:t(()=>[e(w,{ref:"dragTable",data:d.columns,"row-key":"columnId",height:"450px"},{default:t(()=>[e(i,{label:"\u5E8F\u53F7",type:"index",width:"50"}),e(i,{label:"\u5B57\u6BB5\u5217\u540D",prop:"columnName",width:"150","show-overflow-tooltip":!0}),e(i,{fixed:"",label:"\u5B57\u6BB5\u63CF\u8FF0",width:"150"},{default:t(l=>[e(b,{modelValue:l.row.columnComment,"onUpdate:modelValue":o=>l.row.columnComment=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u7269\u7406\u7C7B\u578B",prop:"columnType",width:"120","show-overflow-tooltip":!0}),e(i,{label:"go\u7C7B\u578B",width:"120"},{default:t(l=>[e(s,{modelValue:l.row.goType,"onUpdate:modelValue":o=>l.row.goType=o},{default:t(()=>[e(a,{label:"int",value:"int"}),e(a,{label:"uint",value:"uint"}),e(a,{label:"int64",value:"int64"}),e(a,{label:"uint64",value:"uint64"}),e(a,{label:"float64",value:"float64"}),e(a,{label:"string",value:"string"}),e(a,{label:"Time",value:"Time"}),e(a,{label:"byte",value:"byte"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"go\u5C5E\u6027",width:"150"},{default:t(l=>[e(b,{modelValue:l.row.goField,"onUpdate:modelValue":o=>l.row.goField=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"json\u5C5E\u6027",width:"150"},{default:t(l=>[e(b,{modelValue:l.row.jsonField,"onUpdate:modelValue":o=>l.row.jsonField=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u63D2\u5165",width:"50"},{default:t(l=>[e(f,{modelValue:l.row.isInsert,"onUpdate:modelValue":o=>l.row.isInsert=o,"true-label":"1","false-label":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u7F16\u8F91",width:"70","cell-style":{"text-align":"center"}},{default:t(l=>[e(f,{modelValue:l.row.isEdit,"onUpdate:modelValue":o=>l.row.isEdit=o,"true-label":"1","false-label":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u5217\u8868",width:"70","cell-style":{"text-align":"center"}},{default:t(l=>[e(f,{modelValue:l.row.isList,"onUpdate:modelValue":o=>l.row.isList=o,"true-label":"1","false-label":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u67E5\u8BE2",width:"70","cell-style":{"text-align":"center"}},{default:t(l=>[e(f,{modelValue:l.row.isQuery,"onUpdate:modelValue":o=>l.row.isQuery=o,"true-label":"1","false-label":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u5FC5\u586B",width:"50"},{default:t(l=>[e(f,{modelValue:l.row.isRequired,"onUpdate:modelValue":o=>l.row.isRequired=o,"true-label":"1","false-label":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u67E5\u8BE2\u65B9\u5F0F",width:"120"},{default:t(l=>[e(s,{modelValue:l.row.queryType,"onUpdate:modelValue":o=>l.row.queryType=o},{default:t(()=>[e(a,{label:"=",value:"EQ"}),e(a,{label:"!=",value:"NE"}),e(a,{label:">",value:"GT"}),e(a,{label:">=",value:"GTE"}),e(a,{label:"<",value:"LT"}),e(a,{label:"<=",value:"LTE"}),e(a,{label:"LIKE",value:"LIKE"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u663E\u793A\u7C7B\u578B",width:"140"},{default:t(l=>[e(s,{modelValue:l.row.htmlType,"onUpdate:modelValue":o=>l.row.htmlType=o},{default:t(()=>[e(a,{label:"\u6587\u672C\u6846",value:"input"}),e(a,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(a,{label:"\u5F00\u5173",value:"switch"}),e(a,{label:"\u5355\u9009\u6846",value:"radio"}),e(a,{label:"\u591A\u9009\u6846",value:"checkbox"}),e(a,{label:"\u6587\u4EF6\u9009\u62E9",value:"file"}),e(a,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(a,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u5B57\u5178\u7C7B\u578B",width:"160"},{default:t(l=>[e(s,{modelValue:l.row.dictType,"onUpdate:modelValue":o=>l.row.dictType=o,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(_(!0),D(B,null,x(d.dictOptions,o=>(_(),v(a,{key:o.dictType,label:o.dictName,value:o.dictType},{default:t(()=>[V("span",W,g(o.dictName),1),V("span",X,g(o.dictType),1)]),_:2},1032,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u5173\u7CFB\u8868",width:"160"},{default:t(l=>[e(s,{modelValue:l.row.linkTableName,"onUpdate:modelValue":o=>l.row.linkTableName=o,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(_(!0),D(B,null,x(d.tableTree,o=>(_(),v(a,{key:o.tableName,label:o.tableName,value:o.tableName},{default:t(()=>[V("span",Y,g(o.tableName),1),V("span",Z,g(o.tableComment),1)]),_:2},1032,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1}),e(p,{label:"\u751F\u6210\u4FE1\u606F",name:"genInfo"},{default:t(()=>[e(c,{ref:"genInfoRef",info:d.info},null,8,["info"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}var me=K(J,[["render",oe]]);export{me as default};