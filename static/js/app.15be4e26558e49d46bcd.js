webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),i=s.n(r),a=s("/5sW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-navigation-drawer",{staticClass:"hidden-sm-and-up",attrs:{temporary:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v("\n                        "+t._s(e.icon)+"\n                    ")])],1),t._v(" "),s("v-list-tile-content",[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)}),t._v(" "),t.userAuth?s("v-list-tile",[s("v-list-tile-action",{on:{click:t.logout}},[s("v-icon",[t._v("\n                      exit_to_app\n                    ")])],1),t._v(" "),s("v-list-tile-content",[t._v("\n                  Logout\n                ")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{app:"",dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n            Developers Meet Up\n        ")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n             "+t._s(e.title)+"\n            ")],1)}),t._v(" "),t.userAuth?s("v-btn",{attrs:{flat:""},on:{click:t.logout}},[s("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n             Logout\n            ")],1):t._e()],2)],1)],1)},staticRenderFns:[]};var o={name:"App",components:{navbar:s("VU/8")({name:"navbar",data:function(){return{drawer:!1}},methods:{logout:function(){this.$store.dispatch("logout")}},computed:{menuItems:function(){return this.userAuth?[{title:"View Meetups",icon:"supervisor_account",link:"/meetups"},{title:"Organise Meetups",icon:"room",link:"/meetups/new"},{title:"Profile",icon:"person",link:"/profile"}]:[{title:"Sign Up",icon:"face",link:"/signup"},{title:"Sign In",icon:"lock_open",link:"/signin"}]},userAuth:function(){return this.$store.getters.users}}},n,!1,function(t){s("taUA")},"data-v-d34c2cd0",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-app",{staticClass:".background"},[e("navbar"),this._v(" "),e("div",{staticClass:"app"},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")(o,l,!1,function(t){s("kwIl")},"data-v-09f1e478",null).exports,c=s("/ocq"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","text-xs-center":"","text-sm-right":""}},[s("v-btn",{staticClass:"primary",attrs:{large:"",to:"/meetups/new"}},[t._v("\n         Organize Meetups\n       ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm6:"","text-xs-center":"","text-sm-left":""}},[s("v-btn",{staticClass:"primary",attrs:{large:"",to:"/meetups"}},[t._v("\n         Explore Meetups\n       ")])],1)],1),t._v(" "),t.loading?s("v-layout",{staticClass:"mt-5",attrs:{row:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"amber"}})],1)],1):t._e(),t._v(" "),t.loading?t._e():s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-carousel",{staticStyle:{height:"70vh"}},t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageURL,to:e.link}},[s("div",{staticClass:"title"},[t._v("\n            Meetup in "+t._s(e.location)+"\n          ")])])}))],1),t._v(" "),s("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"text-xs-center":""}},[t._v("\n         Join Our MEETUPS!!!\n      ")])],1)],1)],1)},staticRenderFns:[]};var v=s("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}}},d,!1,function(t){s("aRM+")},"data-v-55bfef93",null).exports,p={data:function(){return{title:"",titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=50||"Title must be less than 50 characters"}],date:"",time:"00:00",valid:!0,image:null,location:"",description:"",desRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=100||"Description must be less than 100 characters"}],locationRules:[function(t){return!!t||"Location is required"},function(t){return t&&t.length<=20||"Location must be less than 20 characters"}],imageURL:"",imageRules:[function(t){return!!t||"Image URL is required"}]}},computed:{validation:function(){return""!==this.location&&""!==this.imageURL&&""!==this.description},submittedDateAndTime:function(){var t=new Date(this.date),e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];return t.setHours(e),t.setMinutes(s),console.log(t),t}},methods:{clear:function(){this.$refs.form.reset()},onPickFile:function(){this.$refs.fileInput.click()},onUpload:function(t){var e=this,s=t.target.files,r=s[0].name;console.log(r),r.lastIndexOf(".")<=0&&alert("Please upload a valid image");var i=new FileReader;i.readAsDataURL(s[0]),i.addEventListener("load",function(){e.imageURL=i.result}),this.image=s[0],console.log(this.image)},onCreateMeetup:function(){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittedDateAndTime};this.$store.dispatch("createMeetups",t),this.$refs.form.reset(),this.$router.push("/meetups")}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","text-xs-center":""}},[s("h1",{staticClass:"secondary--text"},[t._v("Create a meetup")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-5",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","text-xs-center":""}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onCreateMeetup(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:t.titleRules,counter:50,label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("v-text-field",{attrs:{rules:t.locationRules,counter:20,label:"Location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),t._v(" "),s("h5",[t._v("Upload an Image")]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("cloud_upload")]),t._v("Upload")],1),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onUpload}})],1)],1),t._v(" "),s("img",{attrs:{src:t.imageURL,height:"100px"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",rules:t.desRules,counter:100,label:"Description","multi-line":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h3",{staticClass:"secondary--text"},[t._v("Choose a date for meetup")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{attrs:{color:"primary"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h3",{staticClass:"secondary--text"},[t._v("Choose a time for meetup")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{format:"24hr",color:"primary"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-btn",{attrs:{disabled:!t.validation||!t.valid},on:{click:t.clear}},[t._v("clear")]),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:!t.validation||!t.valid}},[t._v("\n                Create Meetup\n            ")])],1)],1)],1)],1)},staticRenderFns:[]},f=s("VU/8")(p,m,!1,null,null,null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"secondary white--text"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{lg5:""}},[s("v-card-media",{attrs:{src:e.imageURL,height:"200px"}})],1),t._v(" "),s("v-flex",{attrs:{lg7:""}},[s("v-card-title",[s("div",[s("h3",[t._v(t._s(e.title))]),t._v(" "),s("h4",[t._v(t._s(e.location))]),t._v(" "),s("h4",[t._v(t._s(t._f("date")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{light:"",left:""}},[t._v("arrow_forward")]),t._v("View Meetup")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]},g=s("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},h,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("\n        This is the Profile page!\n    ")])])}]},x=s("VU/8")(null,_,!1,null,null,null).exports,w={data:function(){return{email:"",password:"",confirmPassword:"",emailRules:[function(t){return!!t||"email is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"password is required"}]}},methods:{submit:function(){var t={email:this.email,password:this.password};this.$store.dispatch("onSignIn",t)},onClose:function(){console.log("dismissed"),this.$store.dispatch("clearErr")}},computed:{user:function(){return this.$store.getters.users},error:function(){return this.$store.getters.errors},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onClose}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-container",[s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("v-text-field",{attrs:{label:"EMAIL",id:"email",type:"email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("v-text-field",{attrs:{label:"PASSWORD",id:"password",type:"password",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{type:"submit",loading:t.loading,disabled:t.loading}},[t._v("\n                                       Sign In\n                                    ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},y=s("VU/8")(w,b,!1,null,null,null).exports,k={data:function(){var t=this;return{msg:"dummy text",email:"",password:"",confirmPassword:"",emailRules:[function(t){return!!t||"email is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"password is required"}],confirmPasswordRules:[function(){return t.password!==t.confirmPassword?"Password does not match":""}]}},methods:{submit:function(){var t={email:this.email,password:this.password};this.$store.dispatch("onSignUp",t)},onClose:function(){this.$store.dispatch("clearErr"),console.log("dismissed fired!!!")}},computed:{user:function(){return console.log("computed!"),console.log(this.$store.getters.users),this.$store.getters.users},error:function(){return this.$store.getters.errors},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&(console.log("hurrrayyy!!"),this.$router.push("/"))}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onClose}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-container",[s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("v-text-field",{attrs:{label:"EMAIL",id:"email",type:"email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("v-text-field",{attrs:{label:"PASSWORD",id:"password",type:"password",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("v-text-field",{attrs:{label:"CONFIRM PASSWORD",id:"confirmPassword",type:"password",rules:t.confirmPasswordRules,required:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign Up")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},R=s("VU/8")(k,C,!1,null,null,null).exports,U={props:["id"],computed:{loading:function(){return this.$store.getters.loading},meetup:function(){return this.$store.getters.loadedMeetup(this.id)},user:function(){return console.log(this.meetup),this.$store.getters.users},creatorAuth:function(){return null!==this.user&&void 0!==this.user&&this.meetup.creatorID===this.user.id},showRegister:function(){return null===this.$store.getters.users||void 0===this.$store.getters.users||this.$store.getters.loadedMeetup(this.id).creatorID===this.$store.getters.users.id}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{staticClass:"mt-5",attrs:{row:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"amber"}})],1)],1):t._e(),t._v(" "),t.loading?t._e():s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",{staticClass:"primary--text"},[s("h3",[t._v(t._s(t.meetup.title)+" in "+t._s(t.meetup.location))]),t._v(" "),t.creatorAuth?[s("v-spacer"),t._v(" "),s("edit-meetups",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageURL,height:"300px"}}),t._v(" "),s("v-card-text",{staticClass:"pb-0"},[s("h4",[t._v(t._s(t._f("date")(t.meetup.date))+"\r\n                ")]),t._v(" "),t.creatorAuth?s("div",[[s("edit-date",{attrs:{meetup:t.meetup}})],t._v(" "),[s("edit-time",{attrs:{meetup:t.meetup}})]],2):t._e(),t._v(" "),s("p",[t._v("\r\n                    "+t._s(t.meetup.description)+"\r\n                ")])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.showRegister?t._e():s("register",{attrs:{meetupID:t.meetup.id}})],1)],1)],1)],1)],1)},staticRenderFns:[]},D=s("VU/8")(U,M,!1,null,null,null).exports,L=s("NYxO"),$=s("kxiW"),E={state:{loadedMeetups:[{title:"HTML5 updates",id:"1",imageURL:"https://www.jetairways.com/Explore/Chennai2-1024x400.jpg",location:"Chennai",link:"/meetups/1",date:new Date,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!"},{title:"CSS3 updates",id:"2",imageURL:"https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/03/Hyderabad-city-e1508867439150.jpg",location:"Hyderabad",link:"/meetups/2",date:new Date,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!"},{title:"JavaScript updates",id:"3",imageURL:"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7aa2929ae744a13e7063aa26eca9c046%2F204824160%2F474676074.jpg",location:"Bangalore",link:"/meetups/3",date:new Date,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!"}]},mutations:{createMeetups:function(t,e){t.loadedMeetups.push(e)},editedMeetup:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)},setLoadedMeetups:function(t,e){t.loadedMeetups=e}},actions:{createMeetups:function(t,e){var s=t.commit,r=t.getters,a={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorID:r.users.id},n=void 0,o=void 0,l=void 0;$.database().ref("meetups").push(a).then(function(t){return console.log(t),n=t.key}).then(function(t){var s=e.image.name;return l=s.slice(s.lastIndexOf(".")),$.storage().ref("meetups/"+t+"."+l).put(e.image)}).then(function(t){return console.log(n),console.log(t),$.storage().ref("meetups/"+n+"."+l).getDownloadURL()}).then(function(t){return o=t,console.log(o),$.database().ref("meetups").child(n).update({imageURL:o})}).then(function(){s("createMeetups",i()({},a,{id:n,link:"/meetups/"+n,imageURL:o}))}).catch(function(t){console.log(t)})},editedMeetup:function(t,e){var s=t.commit;s("onLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),$.database().ref("meetups").child(e.id).update(r).then(function(t){s("onLoading",!1),s("editedMeetup",e)}).catch(function(t){s("onLoading",!1),console.log(t)})},setLoadedMeetups:function(t){var e=t.commit;e("onLoading",!0),e("clearError"),$.database().ref("meetups").once("value").then(function(t){var s=[],r=t.val();for(var i in r)s.push({id:i,title:r[i].title,imageURL:r[i].imageURL,location:r[i].location,link:"/meetups/"+i,date:r[i].date,description:r[i].description,creatorID:r[i].creatorID});e("setLoadedMeetups",s),e("onLoading",!1)}).catch(function(t){e("onLoading",!0),e("setError",t)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},I=s("uqrR"),S=s.n(I),T={state:{user:null},mutations:{onRegister:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbkey[s]=e.fbkey)},onUnregister:function(t,e){var s=t.user,r=t.user.registeredMeetups;r.splice(r.findIndex(function(t){return t===e}),1),S()(s.fbkey,e)},createUser:function(t,e){t.user=e}},actions:{onRegister:function(t,e){var s=t.commit,r=t.getters;s("onLoading",!0);var i=r.users;$.database().ref("users/"+i.id).child("registration").push(e).then(function(t){s("onLoading",!1);var r={id:e,fbkey:t.key};console.log(r),s("onRegister",{id:e,fbkey:t.key})}).catch(function(t){console.log(t),s("onLoading",!1)})},onUnregister:function(t,e){var s=t.commit,r=t.getters;s("onLoading",!0);var i=r.users;if(i.fbkey){var a=i.fbkey[e];$.database().ref("users/"+i.id+"/registration").child(a).remove().then(function(){s("onLoading",!1),s("onUnregister",e)}).catch(function(t){console.log(t),s("onLoading",!1)})}},onSignUp:function(t,e){var s=t.commit;s("onLoading",!0),s("clearError"),$.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("onLoading",!1);var e={id:t.user.uid,registeredMeetups:[],fbkey:{}};console.log("Actions"),console.log(e),s("createUser",e)}).catch(function(t){s("setError",t),s("onLoading",!1),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("createUser",{id:e.uid,registeredMeetups:[],fbkey:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("onLoading",!0);var r=s.users;$.database().ref("users/"+r.id+"/registration").once("value").then(function(t){var s=t.val(),i=[],a={};for(var n in s)i.push(s[n]),a[s[n]]=n;e("onLoading",!1),e("createUser",{id:r.id,registeredMeetups:i,fbkey:a})}).catch(function(t){console.log(t),e("onLoading",!1)})},logout:function(t){var e=t.commit;$.auth().signOut(),e("createUser",null)},onSignIn:function(t,e){var s=t.commit;s("onLoading",!0),s("clearError"),$.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("onLoading",!1);var e={id:t.user.uid,registeredMeetups:[],fbkey:{}};s("createUser",e)}).catch(function(t){s("onLoading",!1),s("setError",t),console.log(t)})},clearErr:function(t){(0,t.commit)("clearError")}},getters:{users:function(t){return t.user}}};a.a.use(L.a);var F=new L.a.Store({modules:{user:T,meetup:E,shared:{state:{error:null,loading:!1},mutations:{onLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearErr:function(t){(0,t.commit)("clearError")}},getters:{errors:function(t){return t.error},loading:function(t){return t.loading}}}}}),A=function(t,e,s){F.getters.users?s():s("/signin")};a.a.use(c.a);var q=new c.a({routes:[{path:"/",name:"home",component:v},{path:"/profile",name:"profile",component:x,beforeEnter:A},{path:"/meetups/new",name:"createMeetUps",component:f,beforeEnter:A},{path:"/meetups/:id",name:"meetup",props:!0,component:D},{path:"/meetups",name:"meetUps",component:g},{path:"/signin",name:"signIn",component:y},{path:"/signup",name:"signUp",component:R}],mode:"history"}),P=s("3EgV"),V=s.n(P),O=(s("7zck"),s("IHMs")),j=s.n(O),z={render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{value:"true",dismissible:"",type:"error"},on:{input:this.onClose}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]},H=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},z,!1,null,null,null).exports,W={apiKey:"AIzaSyCy7PDOjpnTzA9W4-8ygwm9cpIcs17ZalQ",authDomain:"meetup-2fe2a.firebaseapp.com",databaseURL:"https://meetup-2fe2a.firebaseio.com",projectId:"meetup-2fe2a",storageBucket:"meetup-2fe2a.appspot.com"},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{staticClass:"primary",attrs:{slot:"activator",fab:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",{staticClass:"blue--text"},[s("h3",[t._v("Edit Meetup")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{rules:t.titleRules,counter:50,label:"Title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}})],1)],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("v-text-field",{attrs:{name:"description",rules:t.desRules,counter:100,label:"Description","multi-line":""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:t.onClose}},[t._v("Close")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},N=s("VU/8")({props:["meetup"],data:function(){return{titleRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=50||"Title must be less than 50 characters"}],desRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=100||"Description must be less than 100 characters"}],dialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onClose:function(){this.dialog=!1},onSave:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.dialog=!1,this.$store.dispatch("editedMeetup",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},Y,!1,null,null,null).exports,B={props:["meetup"],data:function(){return{dialog:!1,editedDate:null}},methods:{onSave:function(){this.dialog=!1;var t=new Date(this.meetup.date),e=new Date(this.editedDate).getUTCDate(),s=new Date(this.editedDate).getUTCMonth(),r=new Date(this.editedDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(s),t.setUTCFullYear(r),this.$store.dispatch("editedMeetup",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date),e=""+(t.getMonth()+1),s=""+t.getDate(),r=t.getFullYear();e.length<2&&(e="0"+e),s.length<2&&(s="0"+s),this.editedDate=[r,e,s].join("-")}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{staticClass:"primary",attrs:{slot:"activator"},slot:"activator"},[t._v("\n        Edit Date\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",{staticClass:"blue--text"},[s("h3",[t._v("Edit Meetup Date")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-date-picker",{attrs:{color:"primary"},model:{value:t.editedDate,callback:function(e){t.editedDate=e},expression:"editedDate"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},J=s("VU/8")(B,G,!1,null,null,null).exports,K={props:["meetup"],data:function(){return{dialog:!1,editedTime:"00:00"}},methods:{onSave:function(){this.dialog=!1;var t=new Date(this.meetup.date),e=this.editedTime.match(/^(\d+)/)[1],s=this.editedTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("editedMeetup",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date).getHours(),e=new Date(this.meetup.date).getMinutes();this.editedTime=t+":"+e}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{staticClass:"primary",attrs:{slot:"activator"},slot:"activator"},[t._v("\n        Edit Time\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",{staticClass:"blue--text"},[s("h3",[t._v("Edit Meetup Time")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-time-picker",{attrs:{format:"24hr",color:"primary"},model:{value:t.editedTime,callback:function(e){t.editedTime=e},expression:"editedTime"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text",attrs:{flat:""},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=s("VU/8")(K,Q,!1,null,null,null).exports,X={props:["meetupID"],data:function(){return{dialog:!1}},computed:{registered:function(){var t=this;console.log("props:"+this.meetupID),console.log(this.$store.getters.users.registeredMeetups);var e=this.$store.getters.users.registeredMeetups.findIndex(function(e){return t.meetupID===e});if(console.log(e),e>=0)return!0}},methods:{onSave:function(){this.registered?this.$store.dispatch("onUnregister",this.meetupID):this.$store.dispatch("onRegister",this.meetupID)}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.registered?s("v-btn",{staticClass:"primary",attrs:{slot:"activator"},slot:"activator"},[t._v("\n      Unregister\n    ")]):s("v-btn",{staticClass:"primary",attrs:{slot:"activator"},slot:"activator"},[t._v("\n      Register\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",{staticClass:"blue--text"},[t.registered?s("h4",[t._v("Unregister for this meetup?")]):s("h4",[t._v("Register for this meetup?")])])],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("You can always change you decision.  :)")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-card-actions",[s("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onSave}},[t._v("Yes")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},et=s("VU/8")(X,tt,!1,null,null,null).exports;a.a.config.productionTip=!1,a.a.filter("date",function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),a.a.component("app-alert",H),a.a.component("edit-meetups",N),a.a.component("edit-date",J),a.a.component("edit-time",Z),a.a.component("register",et),a.a.use(V.a,{theme:{primary:j.a.blueGrey.darken4,secondary:j.a.blueGrey.lighten1,accent:j.a.red.accent2,error:j.a.red.accent4}}),new a.a({el:"#app",router:q,store:F,render:function(t){return t(u)},created:function(){var t=this,e=i()({},W);$.initializeApp(e),$.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("setLoadedMeetups")}})},"aRM+":function(t,e){},kwIl:function(t,e){},taUA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.15be4e26558e49d46bcd.js.map