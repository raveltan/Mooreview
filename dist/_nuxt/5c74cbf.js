(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{228:function(t,e,n){"use strict";n.r(e);n(46),n(77),n(22);var o=n(5),r={name:"HomePage",data:function(){return{data:[],addMovieModal:!1,newMovieName:""}},created:function(){this.getData()},methods:{navigate:function(t){this.$router.replace({path:"/review/"+t})},setLoading:function(data){this.$store.commit("loading",data)},addMovie:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.newMovieName){e.next=2;break}return e.abrupt("return");case 2:return t.setLoading(!0),e.prev=3,e.next=6,t.$axios.$post("https://moo-api.lightbear.net/api/movie/add",{name:t.newMovieName},{headers:{Authorization:"Bearer ".concat(t.$store.state.auth.token)}});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0&&alert("Unable to add new movie");case 11:return e.prev=11,t.setLoading(!1),t.getData(),t.newMovieName="",t.addMovieModal=!1,e.finish(11);case 17:case"end":return e.stop()}}),e,null,[[3,8,11,17]])})))()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoading(!0),e.prev=1,e.next=4,t.$axios.$get("https://moo-api.lightbear.net/api/movies",{headers:{Authorization:"Bearer ".concat(t.$store.state.auth.token)}});case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0&&(t.data=[]);case 10:return e.prev=10,t.setLoading(!1),e.finish(10);case 13:n&&(t.data=n);case 14:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))()}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},model:{value:t.addMovieModal,callback:function(e){t.addMovieModal=e},expression:"addMovieModal"}},[[n("form",{on:{submit:function(e){return e.preventDefault(),t.addMovie()}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Add New Movie")]),t._v(" "),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.addMovieModal=!1}}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Movie Name"}},[n("b-input",{attrs:{type:"text",placeholder:"Hua Mu Lan"},model:{value:t.newMovieName,callback:function(e){t.newMovieName=e},expression:"newMovieName"}})],1)],1),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.addMovieModal=!1}}},[t._v("\n              Close\n            ")]),t._v(" "),n("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Add")])])])])]],2),t._v(" "),n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("h1",{staticClass:"is-size-2"},[t._v("Movies ("+t._s(t.data.length)+")")])])]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("b-button",{attrs:{type:"is-primary is-light"},on:{click:function(e){t.addMovieModal=!0}}},[t._v("Add Movie")])],1)])]),t._v(" "),n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column"},[n("b-table",{attrs:{data:t.data,striped:"",hoverable:"","mobile-cards":"",paginated:"","sort-multiple":!1,"pagination-size":"40"}},[n("b-table-column",{attrs:{label:"Added By",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.AddedBy)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"name",label:"Name",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.Name)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{label:"Added On",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.AddedOn)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{label:"Rating",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.Rating)+"\n        ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"voters",label:"Voters",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"tag is-primary"},[t._v("\n            "+t._s(e.row.Voters)+"\n          ")])]}}])}),t._v(" "),n("b-table-column",{attrs:{label:"Action",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-button",{attrs:{type:"is-small is-primary",rounded:""},on:{click:function(n){return t.navigate(e.row.ID)}}},[t._v("Review")])]}}])})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);