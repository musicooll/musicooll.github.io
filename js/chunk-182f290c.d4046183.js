(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-182f290c"],{"20e9":function(t,e,s){"use strict";s("bda3")},2726:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover-row",style:t.rowStyles},t._l(t.items,(function(e){return s("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[s("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),s("div",{staticClass:"text"},[t.showPlayCount?s("div",{staticClass:"info"},[s("span",{staticClass:"play-count"},[s("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),s("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?s("span",{staticClass:"explicit-symbol"},[s("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?s("span",{staticClass:"lock-icon"},[s("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),s("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?s("div",{staticClass:"info"},[s("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},a=[],r=(s("a9e3"),s("a4d3"),s("e01a"),s("99af"),s("b0c0"),s("1276"),s("ac1f"),s("3020")),n=s("0c94"),o={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:n["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var s=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(s,"?param=512y512")}}},l=o,c=(s("361a"),s("2877")),u=Object(c["a"])(l,i,a,!1,null,"254a9641",null);e["a"]=u.exports},2909:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var n=s("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||r(t)||Object(n["a"])(t)||o()}},"2c46":function(t,e,s){"use strict";s("862d")},3020:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[s("div",{staticClass:"cover-container"},[s("div",{staticClass:"shade"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[s("svg-icon",{attrs:{"icon-class":"play"}})],1)]),s("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},a=[],r=(s("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),n=r,o=(s("2c46"),s("2877")),l=Object(o["a"])(n,i,a,!1,null,"f1a38860",null);e["a"]=l.exports},3536:function(t,e,s){},"361a":function(t,e,s){"use strict";s("7850")},7850:function(t,e,s){},"862d":function(t,e,s){},bda3:function(t,e,s){},c821:function(t,e,s){"use strict";s("3536")},d4e3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(e){return s("div",{key:t.getID(e),staticClass:"mv"},[s("div",{staticClass:"cover",on:{mouseover:function(s){t.hoverVideoID=t.getID(e)},mouseleave:function(e){t.hoverVideoID=0},click:function(s){t.goToMv(t.getID(e))}}},[s("img",{attrs:{src:t.getUrl(e)}}),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(e),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(e)+")"}})])],1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("router-link",{attrs:{to:"/mv/"+t.getID(e)}},[t._v(t._s(t.getTitle(e)))])],1),s("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(e))}})])])})),0)},a=[],r=(s("5319"),s("ac1f"),s("b0c0"),s("99af"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var e={};void 0!==this.$parent.player&&(e={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:e})},getUrl:function(t){var e,s,i=null!==(e=null!==(s=t.imgurl16v9)&&void 0!==s?s:t.cover)&&void 0!==e?e:t.coverUrl;return i.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var e="null",s=0;return void 0!==t.artistName?(e=t.artistName,s=t.artistId):void 0!==t.creator&&(e=t.creator[0].userName,s=t.creator[0].userId),'<a href="/#/artist/'.concat(s,'">').concat(e,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),n=r,o=(s("20e9"),s("2877")),l=Object(o["a"])(n,i,a,!1,null,"71b4f1ff",null);e["a"]=l.exports},e36c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[s("h1",[s("img",{staticClass:"avatar",attrs:{src:t._f("resizeImage")(t.data.user.avatarUrl)}}),t._v(t._s(t.data.user.nickname)+t._s(t.$t("library.sLibrary"))+" "),s("button-icon",{nativeOn:{click:function(e){return t.showUserProfileMenu(e)}}},[s("svg-icon",{attrs:{"icon-class":"arrow-right"}})],1)],1),s("div",{staticClass:"section-one"},[s("div",{staticClass:"liked-songs",on:{click:t.goToLikedSongsList}},[s("div",{staticClass:"top"},[s("p",t._l(t.pickedLyric,(function(e,i){return s("span",{directives:[{name:"show",rawName:"v-show",value:""!==e,expression:"line !== ''"}],key:""+e+i},[t._v(t._s(e)),s("br")])})),0)]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"titles"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("library.likedSongs")))]),s("div",{staticClass:"sub-title"},[t._v(" "+t._s(t.likedSongsPlaylist.trackCount)+" "+t._s(t.$t("common.songs"))+" ")])]),s("button",{on:{click:function(e){return e.stopPropagation(),t.playLikedSongs(e)}}},[s("svg-icon",{attrs:{"icon-class":"play"}})],1)])]),s("div",{staticClass:"songs"},[s("TrackList",{attrs:{tracks:t.likedSongs,type:"tracklist",id:t.likedSongsPlaylist.id,dbclickTrackFunc:"playPlaylistByID",columnNumber:3}})],1)]),s("div",{staticClass:"section-two",attrs:{id:"liked"}},[s("div",{staticClass:"tabs-row"},[s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab",class:{active:"playlists"===t.currentTab},on:{click:function(e){return t.updateCurrentTab("playlists")}}},[t._v(" "+t._s(t.$t("library.playlists"))+" ")]),s("div",{staticClass:"tab",class:{active:"albums"===t.currentTab},on:{click:function(e){return t.updateCurrentTab("albums")}}},[t._v(" "+t._s(t.$t("library.albums"))+" ")]),s("div",{staticClass:"tab",class:{active:"artists"===t.currentTab},on:{click:function(e){return t.updateCurrentTab("artists")}}},[t._v(" "+t._s(t.$t("library.artists"))+" ")]),s("div",{staticClass:"tab",class:{active:"mvs"===t.currentTab},on:{click:function(e){return t.updateCurrentTab("mvs")}}},[t._v(" "+t._s(t.$t("library.mvs"))+" ")])]),s("button",{directives:[{name:"show",rawName:"v-show",value:"playlists"===t.currentTab,expression:"currentTab === 'playlists'"}],staticClass:"add-playlist",attrs:{icon:"plus"},on:{click:t.openAddPlaylistModal}},[s("svg-icon",{attrs:{"icon-class":"plus"}}),t._v(t._s(t.$t("library.newPlayList")))],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"playlists"===t.currentTab,expression:"currentTab === 'playlists'"}]},[t.playlists.length>1?s("div",[s("CoverRow",{attrs:{items:t.playlists.slice(1),type:"playlist",subText:"creator",showPlayButton:!0}})],1):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:"albums"===t.currentTab,expression:"currentTab === 'albums'"}]},[s("CoverRow",{attrs:{items:t.albums,type:"album",subText:"artist",showPlayButton:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"artists"===t.currentTab,expression:"currentTab === 'artists'"}]},[s("CoverRow",{attrs:{items:t.artists,type:"artist",showPlayButton:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"mvs"===t.currentTab,expression:"currentTab === 'mvs'"}]},[s("MvRow",{attrs:{mvs:t.mvs}})],1)]),s("ContextMenu",{ref:"userProfileMenu"},[s("div",{staticClass:"item",on:{click:t.settings}},[s("svg-icon",{attrs:{"icon-class":"settings"}}),t._v(" "+t._s(t.$t("library.userProfileMenu.settings"))+" ")],1),s("div",{staticClass:"item",on:{click:t.logout}},[s("svg-icon",{attrs:{"icon-class":"logout"}}),t._v(" "+t._s(t.$t("library.userProfileMenu.logout"))+" ")],1)])],1)},a=[],r=s("2909"),n=s("5530"),o=(s("1276"),s("ac1f"),s("4de4"),s("caad"),s("2532"),s("d81d"),s("fb6a"),s("a15b"),s("2f62")),l=s("fefb"),c=s("c24f"),u=s("cf45"),d=s("1e9a"),p=s("5f87"),v=s("323e"),h=s.n(v),y=s("6825"),f=s("2185"),b=s("a1a1"),m=s("2726"),g=s("0032"),w=s("d4e3"),k={name:"Library",components:{SvgIcon:g["a"],CoverRow:m["a"],TrackList:b["a"],MvRow:w["a"],ButtonIcon:f["a"],ContextMenu:y["a"]},data:function(){return{show:!1,playlists:[],hasMorePlaylists:!0,likedSongsPlaylist:{id:0,trackCount:0},likedSongs:[],likedSongIDs:[],lyric:void 0,currentTab:"playlists",albums:[],artists:[],mvs:[]}},created:function(){var t=this;h.a.start(),Object(p["b"])()?Object(c["e"])().then((function(e){t.$store.commit("updateData",{key:"user",value:e.profile})})):Object(c["f"])(this.data.user.userId).then((function(e){t.$store.commit("updateData",{key:"user",value:e.profile})}))},activated:function(){var t=this;this.data.likedSongPlaylistID?this.loadData():Object(c["h"])({uid:this.data.user.userId,limit:1}).then((function(e){t.updateData({key:"likedSongPlaylistID",value:e.playlist[0].id}),t.loadData()})),Object(u["c"])()},computed:Object(n["a"])(Object(n["a"])({},Object(o["d"])(["data"])),{},{likedSongsInState:function(){return this.$store.state.liked.songs},pickedLyric:function(){if(void 0===this.lyric)return"";var t=this.lyric.split("\n");t=t.filter((function(t){return!t.includes("作词")&&!t.includes("作曲")}));var e=Object(u["f"])(0,t.length-1);while(e+4>t.length)e=Object(u["f"])(0,t.length-1);return[t[e].split("]")[1],t[e+1].split("]")[1],t[e+2].split("]")[1]]}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["b"])(["showToast"])),Object(o["c"])(["updateModal","updateData"])),{},{playLikedSongs:function(){this.$store.state.player.playPlaylistByID(this.playlists[0].id,"first",!0)},updateCurrentTab:function(t){Object(p["b"])()||"playlists"===t?(this.currentTab=t,document.getElementById("liked").scrollIntoView({block:"start",behavior:"smooth"}),"albums"===t?0===this.albums.length&&this.loadLikedAlbums():"artists"===t?0===this.artists.length&&this.loadLikedArtists():"mvs"===t&&0===this.mvs.length&&this.loadLikedMVs()):this.showToast("此操作需要登录网易云账号")},goToLikedSongsList:function(){this.$router.push({path:"/library/liked-songs"})},loadData:function(){this.hasMorePlaylists&&"playlists"===this.currentTab&&this.getUserPlaylists(),"albums"===this.currentTab?this.loadLikedAlbums():"artists"===this.currentTab?this.loadLikedArtists():"mvs"===this.currentTab&&this.loadLikedMVs(),this.getLikedSongs()},getUserPlaylists:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(c["h"])({uid:this.data.user.userId,offset:0===this.playlists.length?0:this.playlists.length-1,timestamp:(new Date).getTime()}).then((function(s){var i;e?t.playlists=s.playlist:(i=t.playlists).push.apply(i,Object(r["a"])(s.playlist));t.hasMorePlaylists=s.more}))},getLikedSongs:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Object(d["d"])(this.data.likedSongPlaylistID,!0).then((function(s){if(t.likedSongsPlaylist=s.playlist,0===s.playlist.trackIds.length)return h.a.done(),void(t.show=!0);var i=s.playlist.trackIds.slice(0,12).map((function(t){return t.id}));t.likedSongIDs=i,Object(l["c"])(t.likedSongIDs.join(",")).then((function(e){t.likedSongs=e.songs,h.a.done(),t.show=!0})),e&&t.getRandomLyric()}))},getRandomLyric:function(){var t=this;Object(l["a"])(this.likedSongIDs[Object(u["f"])(0,this.likedSongIDs.length-1)]).then((function(e){void 0!==e.lrc&&(t.lyric=e.lrc.lyric)}))},loadLikedAlbums:function(){var t=this;h.a.start(),Object(c["b"])().then((function(e){t.albums=e.data,h.a.done()}))},loadLikedArtists:function(){var t=this;h.a.start(),Object(c["c"])().then((function(e){t.artists=e.data,h.a.done()}))},loadLikedMVs:function(){var t=this;h.a.start(),Object(c["d"])().then((function(e){t.mvs=e.data,h.a.done()}))},openAddPlaylistModal:function(){Object(p["b"])()?this.updateModal({modalName:"newPlaylistModal",key:"show",value:!0}):this.showToast("此操作需要登录网易云账号")},showUserProfileMenu:function(t){this.$refs.userProfileMenu.openMenu(t)},logout:function(){confirm("确定要退出登录吗？")&&(Object(p["a"])(),this.$router.push({name:"home"}))},settings:function(){this.$router.push({name:"settings"})}}),watch:{likedSongsInState:function(){this.getLikedSongs(!1)}}},S=k,T=(s("c821"),s("2877")),C=Object(T["a"])(S,i,a,!1,null,"06b129fd",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-182f290c.d4046183.js.map