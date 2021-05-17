(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a23416"],{"0226":function(t,e,i){},"0c94":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},s=[],n=(i("a9e3"),i("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:n["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},l=r,o=i("2877"),c=Object(o["a"])(l,a,s,!1,null,"7e2a888e",null);e["a"]=c.exports},"0f05":function(t,e,i){},"186d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"artist-in-line"},[t._v(" "+t._s(t.computedPrefix)+" "),t._l(t.filteredArtists,(function(e,a){return i("span",{key:e.id},[i("router-link",{attrs:{to:"/artist/"+e.id}},[t._v(t._s(e.name))]),a!==t.filteredArtists.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2)},s=[],n=(i("4de4"),i("b0c0"),{name:"ArtistInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},computed:{filteredArtists:function(){var t=this;return this.artists.filter((function(e){return e.name!==t.exclude}))},computedPrefix:function(){return 0!==this.filteredArtists.length?this.prefix:""}}}),r=n,l=i("2877"),o=Object(l["a"])(r,a,s,!1,null,"6b13d4cd",null);e["a"]=o.exports},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return s(t)||n(t)||Object(r["a"])(t)||l()}},3020:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[i("div",{staticClass:"cover-container"},[i("div",{staticClass:"shade"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[i("svg-icon",{attrs:{"icon-class":"play"}})],1)]),i("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},s=[],n=(i("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),r=n,l=(i("458d"),i("2877")),o=Object(l["a"])(r,a,s,!1,null,"02559854",null);e["a"]=o.exports},"3e8f":function(t,e){},"440b":function(t,e,i){"use strict";i("994d")},"458d":function(t,e,i){"use strict";i("e3a5")},"5e45":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?i("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},s=[],n=(i("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),r=n,l=(i("440b"),i("2877")),o=Object(l["a"])(r,a,s,!1,null,"3794cec8",null);e["a"]=o.exports},7381:function(t,e,i){"use strict";var a=function(){if(!0===Object({NODE_ENV:"production",VUE_APP_NETEASE_API_URL:"/api",VUE_APP_ELECTRON_API_URL:"/api",VUE_APP_ELECTRON_API_URL_DEV:"http://127.0.0.1:3000",VUE_APP_LASTFM_API_KEY:"09c55292403d961aa517ff7f5e8a3d9c",VUE_APP_LASTFM_API_SHARED_SECRET:"307c9fda32b3904e53654baff215cb67",BASE_URL:"/"}).IS_ELECTRON){var t=i("bdb9"),e=t.remote.dialog;if(e)return function(t){var i={type:"warning",detail:t};e.showMessageBoxSync(null,i)}}return alert}();e["a"]=a},"7d10":function(t,e,i){"use strict";i("0f05")},"8b00":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[void 0!==t.specialPlaylistInfo||t.isLikeSongsPage?t._e():i("div",{staticClass:"playlist-info"},[i("Cover",{attrs:{imageUrl:t._f("resizeImage")(t.playlist.coverImgUrl,1024),showPlayButton:!0,alwaysShowShadow:!0,clickCoverToPlay:!0,fixedSize:288,type:"playlist",id:t.playlist.id,coverHover:!1,playButtonSize:18},nativeOn:{contextmenu:function(e){return t.openMenu(e)}}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title",on:{contextmenu:function(e){return t.openMenu(e)}}},[10===t.playlist.privacy?i("span",{staticClass:"lock-icon"},[i("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),t._v(t._s(t.playlist.name))]),i("div",{staticClass:"artist"},[t._v(" Playlist by "),[5277771961,5277965913,5277969451,5277778542,5278068783].includes(t.playlist.id)?i("span",{staticStyle:{"font-weight":"600"}},[t._v("Apple Music")]):i("a",{attrs:{href:"https://music.163.com/#/user/home?id="+t.playlist.creator.userId,target:"blank"}},[t._v(t._s(t.playlist.creator.nickname))])]),i("div",{staticClass:"date-and-count"},[t._v(" "+t._s(t.$t("playlist.updatedAt"))+" "+t._s(t._f("formatDate")(t.playlist.updateTime))+" · "+t._s(t.playlist.trackCount)+" "+t._s(t.$t("common.songs"))+" ")]),i("div",{staticClass:"description",on:{click:function(e){t.showFullDescription=!0}}},[t._v(" "+t._s(t.playlist.description)+" ")]),i("div",{staticClass:"buttons"},[i("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(e){return t.playPlaylistByID()}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),t.playlist.creator.userId!==t.data.user.userId?i("ButtonTwoTone",{attrs:{iconClass:t.playlist.subscribed?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.playlist.subscribed?"blue":"grey",textColor:t.playlist.subscribed?"#335eea":"",backgroundColor:t.playlist.subscribed?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likePlaylist(e)}}}):t._e(),i("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)]),t.displaySearchInPlaylist?i("div",{staticClass:"search-box"},[i("div",{staticClass:"container",class:{active:t.inputFocus}},[i("svg-icon",{attrs:{"icon-class":"search"}}),i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputSearchKeyWords,expression:"inputSearchKeyWords",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus",value:t.displaySearchInPlaylist,expression:"displaySearchInPlaylist"}],attrs:{placeholder:t.inputFocus?"":t.$t("playlist.search")},domProps:{value:t.inputSearchKeyWords},on:{input:[function(e){e.target.composing||(t.inputSearchKeyWords=e.target.value.trim())},function(e){return t.inputDebounce()}],focus:function(e){t.inputFocus=!0},blur:[function(e){t.inputFocus=!1},function(e){return t.$forceUpdate()}]}})])],1)]):t._e()],1),void 0!==t.specialPlaylistInfo?i("div",{staticClass:"special-playlist"},[i("div",{staticClass:"title",class:t.specialPlaylistInfo.gradient,on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(" "+t._s(t.specialPlaylistInfo.name)+" ")]),i("div",{staticClass:"subtitle"},[t._v(t._s(t.playlist.englishTitle)+" · "+t._s(t.playlist.updateFrequency)+" ")]),i("div",{staticClass:"buttons"},[i("ButtonTwoTone",{staticClass:"play-button",attrs:{iconClass:"play",color:"grey"},nativeOn:{click:function(e){return t.playPlaylistByID()}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),t.playlist.creator.userId!==t.data.user.userId?i("ButtonTwoTone",{attrs:{iconClass:t.playlist.subscribed?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.playlist.subscribed?"blue":"grey",textColor:t.playlist.subscribed?"#335eea":"",backgroundColor:t.playlist.subscribed?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likePlaylist(e)}}}):t._e(),i("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)]):t._e(),t.isLikeSongsPage?i("div",{staticClass:"user-info"},[i("h1",[i("img",{staticClass:"avatar",attrs:{src:t._f("resizeImage")(t.data.user.avatarUrl)}}),t._v(t._s(t.data.user.nickname)+t._s(t.$t("library.sLikedSongs"))+" ")])]):t._e(),i("TrackList",{attrs:{tracks:t.filteredTracks,type:"playlist",id:t.playlist.id,extraContextMenuItem:t.isUserOwnPlaylist?["removeTrackFromPlaylist"]:[]}}),i("Modal",{attrs:{show:t.showFullDescription,close:function(){return t.showFullDescription=!1},showFooter:!1,clickOutsideHide:!0,title:"歌单介绍"}},[t._v(t._s(t.playlist.description))]),i("ContextMenu",{ref:"playlistMenu"},[i("div",{staticClass:"item"},[t._v(t._s(t.$t("contextMenu.playNext")))]),i("div",{staticClass:"item",on:{click:function(e){return t.likePlaylist(!0)}}},[t._v(t._s(t.playlist.subscribed?"从音乐库删除":"保存到音乐库"))]),i("div",{staticClass:"item",on:{click:function(e){return t.searchInPlaylist()}}},[t._v("歌单内搜索")]),t.playlist.creator.userId===t.data.user.userId?i("div",{staticClass:"item",on:{click:t.editPlaylist}},[t._v("编辑歌单信息")]):t._e(),t.playlist.creator.userId===t.data.user.userId?i("div",{staticClass:"item",on:{click:t.deletePlaylist}},[t._v("删除歌单")]):t._e()])],1)},s=[],n=i("2909"),r=i("5530"),l=(i("b0c0"),i("4de4"),i("caad"),i("2532"),i("7db0"),i("d81d"),i("a15b"),i("2f62")),o=i("323e"),c=i.n(o),u=i("1e9a"),d=i("fefb"),p=i("5f87"),h=i("7381"),y=i("5e45"),f=i("6825"),m=i("a1a1"),k=i("3020"),v=i("714b"),g={2829816518:{name:"欧美私人订制",gradient:"gradient-pink-purple-blue"},2890490211:{name:"助眠鸟鸣声",gradient:"gradient-green"},5089855855:{name:"夜的胡思乱想",gradient:"gradient-moonstone-blue"},2888212971:{name:"全球百大DJ",gradient:"gradient-orange-red"},2829733864:{name:"睡眠伴侣",gradient:"gradient-midnight-blue"},2829844572:{name:"洗澡时听的歌",gradient:"gradient-yellow"},2920647537:{name:"还是会想你",gradient:"gradient-dark-blue-midnight-blue"},2890501416:{name:"助眠白噪声",gradient:"gradient-sky-blue"},5217150082:{name:"摇滚唱片行",gradient:"gradient-yellow-red"},2829961453:{name:"古风音乐大赏",gradient:"gradient-fog"},4923261701:{name:"Trance",gradient:"gradient-light-red-light-blue "},5212729721:{name:"欧美点唱机",gradient:"gradient-indigo-pink-yellow"},3103434282:{name:"甜蜜少女心",gradient:"gradient-pink"},2829896389:{name:"日系私人订制",gradient:"gradient-yellow-pink"},2829779628:{name:"运动随身听",gradient:"gradient-orange-red"},2860654884:{name:"独立女声精选",gradient:"gradient-sharp-blue"},898150:{name:"浪漫婚礼专用",gradient:"gradient-pink"},2638104052:{name:"牛奶泡泡浴",gradient:"gradient-fog"},5317236517:{name:"后朋克精选",gradient:"gradient-pink-purple-blue"},2821115454:{name:"一周原创发现",gradient:"gradient-blue-purple"},3136952023:{name:"私人雷达",gradient:"gradient-radar"}},b={name:"Playlist",components:{Cover:k["a"],ButtonTwoTone:y["a"],TrackList:m["a"],Modal:v["a"],ContextMenu:f["a"]},data:function(){return{show:!1,playlist:{id:0,coverImgUrl:"",creator:{userId:""},trackIds:[]},showFullDescription:!1,tracks:[],loadingMore:!1,lastLoadedTrackIndex:9,displaySearchInPlaylist:!1,searchKeyWords:"",inputSearchKeyWords:"",inputFocus:!1,debounceTimeout:null}},created:function(){"likedSongs"===this.$route.name?this.loadData(this.data.likedSongPlaylistID):this.loadData(this.$route.params.id)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!0)},computed:Object(r["a"])(Object(r["a"])({},Object(l["d"])(["player","data"])),{},{isLikeSongsPage:function(){return"likedSongs"===this.$route.name},specialPlaylistInfo:function(){return g[this.playlist.id]},isUserOwnPlaylist:function(){return this.playlist.creator.userId===this.data.user.userId&&this.playlist.id!==this.data.likedSongPlaylistID},filteredTracks:function(){var t=this;return this.tracks.filter((function(e){return e.name&&e.name.toLowerCase().includes(t.searchKeyWords.toLowerCase())||e.al.name&&e.al.name.toLowerCase().includes(t.searchKeyWords.toLowerCase())||e.ar.find((function(e){return e.name&&e.name.toLowerCase().includes(t.searchKeyWords.toLowerCase())}))}))}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])(["appendTrackToPlayerList"])),Object(l["b"])(["playFirstTrackOnList","playTrackOnListByID","showToast"])),{},{playPlaylistByID:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",e=this.playlist.trackIds.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.playlist.id,"playlist",t)},likePlaylist:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(p["b"])()?Object(u["h"])({id:this.playlist.id,t:this.playlist.subscribed?2:1}).then((function(i){200===i.code&&(t.playlist.subscribed=!t.playlist.subscribed,!0===e&&t.showToast(t.playlist.subscribed?"已保存到音乐库":"已从音乐库删除")),Object(u["e"])(t.id,!0).then((function(e){t.playlist=e.playlist}))})):this.showToast("此操作需要登录网易云账号")},loadData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.id=t,Object(u["e"])(this.id,!0).then((function(t){return e.playlist=t.playlist,e.tracks=t.playlist.tracks,c.a.done(),void 0!==i&&i(),e.show=!0,e.lastLoadedTrackIndex=t.playlist.tracks.length-1,e.playlist.trackCount>e.tracks.length&&window.addEventListener("scroll",e.handleScroll,!0),t})).then((function(){e.playlist.trackCount>e.tracks.length&&(e.loadingMore=!0,e.loadMore())}))},loadMore:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,i=this.playlist.trackIds.filter((function(i,a){if(a>t.lastLoadedTrackIndex&&a<=t.lastLoadedTrackIndex+e)return i}));i=i.map((function(t){return t.id})),Object(d["c"])(i.join(",")).then((function(e){var a;(a=t.tracks).push.apply(a,Object(n["a"])(e.songs)),t.lastLoadedTrackIndex+=i.length,t.loadingMore=!1}))},handleScroll:function(t){var e=document.querySelector("html"),i=Math.max(e.scrollHeight,e.scrollHeight),a=t.target.scrollingElement.scrollTop,s=e.innerHeight||Math.min(e.clientHeight,e.clientHeight);if(s+a+200>=i){if(this.lastLoadedTrackIndex+1===this.playlist.trackIds.length||this.loadingMore)return;this.loadingMore=!0,this.loadMore()}},openMenu:function(t){this.$refs.playlistMenu.openMenu(t)},deletePlaylist:function(){var t=this;if(Object(p["b"])()){var e=confirm("确定要删除歌单 ".concat(this.playlist.name,"？"));!0===e&&Object(u["d"])(this.playlist.id).then((function(e){200===e.code?(Object(h["a"])("已删除歌单 ".concat(t.playlist.name)),t.$router.go(-1)):Object(h["a"])("发生错误")}))}else this.showToast("此操作需要登录网易云账号")},editPlaylist:function(){Object(h["a"])("此功能开发中")},searchInPlaylist:function(){this.displaySearchInPlaylist=!this.displaySearchInPlaylist,0==this.displaySearchInPlaylist?(this.searchKeyWords="",this.inputSearchKeyWords=""):this.loadMore(500)},removeTrack:function(t){Object(p["b"])()?this.tracks=this.tracks.filter((function(e){return e.id!==t})):this.showToast("此操作需要登录网易云账号")},inputDebounce:function(){var t=this;this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((function(){t.searchKeyWords=t.inputSearchKeyWords}),600)}}),directives:{focus:{inserted:function(t){t.focus()}}}},_=b,T=(i("7d10"),i("2877")),C=Object(T["a"])(_,a,s,!1,null,"5d4aadd7",null);e["default"]=C.exports},"994d":function(t,e,i){},a1a1:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track-list"},[i("ContextMenu",{ref:"menu"},[i("div",{staticClass:"item-info"},[i("img",{attrs:{src:t._f("resizeImage")(t.rightClickedTrack.al.picUrl,224)}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(t.rightClickedTrack.name))]),i("div",{staticClass:"subtitle"},[t._v(t._s(t.rightClickedTrack.ar[0].name))])])]),i("hr"),i("div",{staticClass:"item",on:{click:t.play}},[t._v(t._s(t.$t("contextMenu.play")))]),i("div",{staticClass:"item",on:{click:t.playNext}},[t._v(t._s(t.$t("contextMenu.playNext")))]),i("hr"),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked,expression:"!isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.saveToMyLikedSongs"))+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked,expression:"isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.removeFromMyLikedSongs"))+" ")]),t.extraContextMenuItem.includes("removeTrackFromPlaylist")?i("div",{staticClass:"item",on:{click:t.removeTrackFromPlaylist}},[t._v("从歌单中删除")]):t._e(),i("div",{staticClass:"item",on:{click:t.addTrackToPlaylist}},[t._v("添加到歌单")])]),i("div",{style:t.listStyles},t._l(t.tracks,(function(e,a){return i("TrackListItem",{key:"id"===t.itemKey?e.id:""+e.id+a,attrs:{track:e,highlightPlayingTrack:t.highlightPlayingTrack},nativeOn:{dblclick:function(i){return t.playThisList(e.id)},contextmenu:function(i){return t.openMenu(i,e)}}})})),1)],1)},s=[],n=i("5530"),r=(i("a9e3"),i("caad"),i("2532"),i("d81d"),i("4de4"),i("b0c0"),i("2f62")),l=i("fefb"),o=i("1e9a"),c=i("5f87"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.showUnavailableSongInGreyStyle?t.track.reason:""},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.isAlbum?t._e():i("img",{class:{hover:t.focus},attrs:{src:t.imgUrl},on:{click:t.goToAlbum}}),t.isAlbum?i("div",{staticClass:"no"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[i("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),i("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[i("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),i("div",{staticClass:"title-and-artist"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum?i("span",{staticClass:"featured"},[i("ArtistsInLine",{attrs:{artists:t.track.ar,exclude:this.$parent.albumObject.artist.name,prefix:"-"}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?i("span",{staticClass:"explicit-symbol"},[i("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():i("div",{staticClass:"artist"},[1318912===t.track.mark?i("span",{staticClass:"explicit-symbol before-artist"},[i("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),i("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),i("div")]),t.isTracklist||t.isAlbum?t._e():i("div",{staticClass:"album"},[i("router-link",{attrs:{to:"/album/"+t.album.id}},[t._v(t._s(t.album.name))]),i("div")],1),t.isTracklist?t._e():i("div",{staticClass:"actions"},[i("button",{on:{click:t.likeThisSong}},[i("svg-icon",{style:{visibility:t.focus&&!t.isLiked?"visible":"hidden"},attrs:{"icon-class":"heart"}}),i("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1)]),t.isTracklist?t._e():i("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},d=[],p=i("186d"),h=i("0c94"),y={name:"TrackListItem",components:{ArtistsInLine:p["a"],ExplicitSymbol:h["a"]},props:{track:Object,highlightPlayingTrack:{type:Boolean,default:!0}},data:function(){return{hover:!1,trackStyle:{}}},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["settings"])),{},{imgUrl:function(){var t,e,i,a,s,n,r=null!==(t=null!==(e=null===(i=this.track)||void 0===i||null===(a=i.al)||void 0===a?void 0:a.picUrl)&&void 0!==e?e:null===(s=this.track)||void 0===s||null===(n=s.album)||void 0===n?void 0:n.picUrl)&&void 0!==t?t:"https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg";return r+"?param=224y224"},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},album:function(){return this.track.album||this.track.al},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return!this.track.playable&&this.settings.showUnavailableSongInGreyStyle&&t.push("disable"),this.isPlaying&&this.highlightPlayingTrack&&t.push("playing"),this.focus&&t.push("focus"),t},isMenuOpened:function(){return this.$parent.rightClickedTrack.id===this.track.id},focus:function(){return this.hover&&0===this.$parent.rightClickedTrack.id||this.isMenuOpened},showUnavailableSongInGreyStyle:function(){return this.$store.state.settings.showUnavailableSongInGreyStyle}}),methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeASong(this.track.id)}}},f=y,m=(i("a23f"),i("2877")),k=Object(m["a"])(f,u,d,!1,null,"0fd62688",null),v=k.exports,g=i("6825"),b={name:"TrackList",components:{TrackListItem:v,ContextMenu:g["a"]},props:{tracks:Array,type:String,id:Number,dbclickTrackFunc:{type:String,default:"default"},albumObject:{type:Object,default:function(){return{artist:{name:""}}}},extraContextMenuItem:{type:Array,default:function(){return[]}},columnNumber:{type:Number,default:4},highlightPlayingTrack:{type:Boolean,default:!0},itemKey:{type:String,default:"id"}},data:function(){return{rightClickedTrack:{id:0,name:"",ar:[{name:""}],al:{picUrl:""}},listStyles:{}}},created:function(){"tracklist"===this.type&&(this.listStyles={display:"grid",gap:"4px",gridTemplateColumns:"repeat(".concat(this.columnNumber,", 1fr)")})},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["c"])(["updateLikedSongs","updateModal"])),Object(r["b"])(["nextTrack","showToast"])),{},{openMenu:function(t,e){this.rightClickedTrack=e,this.$refs.menu.openMenu(t)},closeMenu:function(){this.rightClickedTrack={id:0,name:"",ar:[{name:""}],al:{picUrl:""}}},playThisList:function(t){if("default"===this.dbclickTrackFunc)this.playThisListDefault(t);else if("none"===this.dbclickTrackFunc);else if("playTrackOnListByID"===this.dbclickTrackFunc)this.$store.state.player.playTrackOnListByID(t);else if("playPlaylistByID"===this.dbclickTrackFunc)this.$store.state.player.playPlaylistByID(this.id,t);else if("playAList"===this.dbclickTrackFunc){var e=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.id,"artist",t)}else if("dailyTracks"===this.dbclickTrackFunc){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,"/daily/songs","url",t)}},playThisListDefault:function(t){if("playlist"===this.type)this.$store.state.player.playPlaylistByID(this.id,t);else if("album"===this.type)this.$store.state.player.playAlbumByID(this.id,t);else if("tracklist"===this.type){var e=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.id,"artist",t)}},play:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id,!0)},playNext:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id)},like:function(){this.likeASong(this.rightClickedTrack.id)},likeASong:function(t){var e=this;if(Object(c["b"])()){var i=!0,a=this.liked.songs;a.includes(t)&&(i=!1),Object(l["d"])({id:t,like:i}).then((function(s){200===s.code&&(!1===i?(e.showToast(e.$t("toast.removedFromMyLikedSongs")),e.updateLikedSongs(a.filter((function(e){return e!==t})))):(e.showToast(e.$t("toast.savedToMyLikedSongs")),a.push(t),e.updateLikedSongs(a)))}))}else this.showToast("此操作需要登录网易云账号")},addTrackToPlaylist:function(){Object(c["b"])()?(this.updateModal({modalName:"addTrackToPlaylistModal",key:"show",value:!0}),this.updateModal({modalName:"addTrackToPlaylistModal",key:"selectedTrackID",value:this.rightClickedTrack.id})):this.showToast("此操作需要登录网易云账号")},removeTrackFromPlaylist:function(){var t=this;if(Object(c["b"])()){if(confirm("确定要从歌单删除 ".concat(this.rightClickedTrack.name,"？"))){var e=this.rightClickedTrack.id;Object(o["a"])({op:"del",pid:this.id,tracks:e}).then((function(i){t.showToast(200===i.body.code?"已从歌单中删除":i.body.message),t.$parent.removeTrack(e)}))}}else this.showToast("此操作需要登录网易云账号")}})},_=b,T=Object(m["a"])(_,a,s,!1,null,"0574ba73",null);e["a"]=T.exports},a23f:function(t,e,i){"use strict";i("0226")},bdb9:function(t,e,i){(function(e){const a=i("3e8f"),s=i("df7c"),n=s.join(e,"path.txt");function r(){if(a.existsSync(n)){const t=a.readFileSync(n,"utf-8");return Object({NODE_ENV:"production",VUE_APP_NETEASE_API_URL:"/api",VUE_APP_ELECTRON_API_URL:"/api",VUE_APP_ELECTRON_API_URL_DEV:"http://127.0.0.1:3000",VUE_APP_LASTFM_API_KEY:"09c55292403d961aa517ff7f5e8a3d9c",VUE_APP_LASTFM_API_SHARED_SECRET:"307c9fda32b3904e53654baff215cb67",BASE_URL:"/"}).ELECTRON_OVERRIDE_DIST_PATH?s.join(Object({NODE_ENV:"production",VUE_APP_NETEASE_API_URL:"/api",VUE_APP_ELECTRON_API_URL:"/api",VUE_APP_ELECTRON_API_URL_DEV:"http://127.0.0.1:3000",VUE_APP_LASTFM_API_KEY:"09c55292403d961aa517ff7f5e8a3d9c",VUE_APP_LASTFM_API_SHARED_SECRET:"307c9fda32b3904e53654baff215cb67",BASE_URL:"/"}).ELECTRON_OVERRIDE_DIST_PATH,t):s.join(e,"dist",t)}throw new Error("Electron failed to install correctly, please delete node_modules/electron and try installing again")}t.exports=r()}).call(this,"/")},e3a5:function(t,e,i){}}]);
//# sourceMappingURL=chunk-58a23416.65f8d97c.js.map