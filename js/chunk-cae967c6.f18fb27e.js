(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cae967c6"],{"0c13":function(t,i,e){"use strict";e("65da")},"0c94":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},a=[],r=(e("a9e3"),e("0032")),l={name:"ExplicitSymbol",components:{SvgIcon:r["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},n=l,c=e("2877"),o=Object(c["a"])(n,s,a,!1,null,"66e23cb9",null);i["a"]=o.exports},"186d":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"artist-in-line"},[t._v(" "+t._s(t.computedPrefix)+" "),t._l(t.filteredArtists,(function(i,s){return e("span",{key:i.id},[e("router-link",{attrs:{to:"/artist/"+i.id}},[t._v(t._s(i.name))]),s!==t.filteredArtists.length-1?e("span",[t._v(", ")]):t._e()],1)}))],2)},a=[],r=(e("4de4"),e("b0c0"),{name:"ArtistInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},computed:{filteredArtists:function(){var t=this;return this.artists.filter((function(i){return i.name!==t.exclude}))},computedPrefix:function(){return 0!==this.filteredArtists.length?this.prefix:""}}}),l=r,n=e("2877"),c=Object(n["a"])(l,s,a,!1,null,"41ca645e",null);i["a"]=c.exports},2659:function(t,i,e){},2688:function(t,i,e){"use strict";e("db95")},2726:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cover-row",style:t.rowStyles},t._l(t.items,(function(i){return e("div",{key:i.id,staticClass:"item",class:{artist:"artist"===t.type}},[e("Cover",{attrs:{id:i.id,"image-url":t.getImageUrl(i),type:t.type,"play-button-size":"artist"===t.type?26:t.playButtonSize}}),e("div",{staticClass:"text"},[t.showPlayCount?e("div",{staticClass:"info"},[e("span",{staticClass:"play-count"},[e("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(i.playCount))+" ")],1)]):t._e(),e("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(i)?e("span",{staticClass:"explicit-symbol"},[e("ExplicitSymbol")],1):t._e(),t.isPrivacy(i)?e("span",{staticClass:"lock-icon"},[e("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),e("router-link",{attrs:{to:t.getTitleLink(i)}},[t._v(t._s(i.name))])],1),"artist"!==t.type&&"none"!==t.subText?e("div",{staticClass:"info"},[e("span",{domProps:{innerHTML:t._s(t.getSubText(i))}})]):t._e()])],1)})),0)},a=[],r=(e("a9e3"),e("a4d3"),e("e01a"),e("99af"),e("b0c0"),e("ac1f"),e("1276"),e("3020")),l=e("0c94"),n={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:l["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},playButtonSize:{type:Number,default:22}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var i=t.type;return"EP/Single"===t.type?i=1===t.size?"Single":"EP":"Single"===t.type?i="Single":"专辑"===t.type&&(i="Album"),"".concat(i," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var i=t.img1v1Url.split("/");if(i=i[i.length-1],"5639395138885805.jpg"===i)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var e=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(e,"?param=512y512")}}},c=n,o=(e("b868"),e("2877")),u=Object(o["a"])(c,s,a,!1,null,"2f09e3a9",null);i["a"]=u.exports},3020:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(i){t.focus=!0},mouseleave:function(i){t.focus=!1},click:function(i){t.clickCoverToPlay?t.play():t.goTo()}}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"shade"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(i){return i.stopPropagation(),t.play()}}},[e("svg-icon",{attrs:{"icon-class":"play"}})],1)]),e("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},a=[],r=(e("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,i={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};i[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),l=r,n=(e("0c13"),e("2877")),c=Object(n["a"])(l,s,a,!1,null,"2c312334",null);i["a"]=c.exports},"65da":function(t,i,e){},"7a20":function(t,i,e){},a1a1:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track-list"},[e("ContextMenu",{ref:"menu"},[e("div",{staticClass:"item-info"},[e("img",{attrs:{src:t._f("resizeImage")(t.rightClickedTrack.al.picUrl,224)}}),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.rightClickedTrack.name))]),e("div",{staticClass:"subtitle"},[t._v(t._s(t.rightClickedTrack.ar[0].name))])])]),e("hr"),e("div",{staticClass:"item",on:{click:t.play}},[t._v(t._s(t.$t("contextMenu.play")))]),e("div",{staticClass:"item",on:{click:t.playNext}},[t._v(t._s(t.$t("contextMenu.playNext")))]),e("hr"),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked,expression:"!isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.saveToMyLikedSongs"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked,expression:"isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.removeFromMyLikedSongs"))+" ")]),t.extraContextMenuItem.includes("removeTrackFromPlaylist")?e("div",{staticClass:"item",on:{click:t.removeTrackFromPlaylist}},[t._v("从歌单中删除")]):t._e(),e("div",{staticClass:"item",on:{click:t.addTrackToPlaylist}},[t._v("添加到歌单")])]),e("div",{style:t.listStyles},t._l(t.tracks,(function(i,s){return e("TrackListItem",{key:"id"===t.itemKey?i.id:""+i.id+s,attrs:{track:i,"highlight-playing-track":t.highlightPlayingTrack},nativeOn:{dblclick:function(e){return t.playThisList(i.id)},contextmenu:function(e){return t.openMenu(e,i)}}})})),1)],1)},a=[],r=e("5530"),l=(e("a9e3"),e("caad"),e("2532"),e("d81d"),e("b0c0"),e("2f62")),n=e("1e9a"),c=e("5f87"),o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.showUnavailableSongInGreyStyle?t.track.reason:""},on:{mouseover:function(i){t.hover=!0},mouseleave:function(i){t.hover=!1}}},[t.isAlbum?t._e():e("img",{class:{hover:t.focus},attrs:{src:t.imgUrl},on:{click:t.goToAlbum}}),t.isAlbum?e("div",{staticClass:"no"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[e("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),e("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[e("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),e("div",{staticClass:"title-and-artist"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum?e("span",{staticClass:"featured"},[e("ArtistsInLine",{attrs:{artists:t.track.ar,exclude:this.$parent.albumObject.artist.name,prefix:"-"}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?e("span",{staticClass:"explicit-symbol"},[e("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():e("div",{staticClass:"artist"},[1318912===t.track.mark?e("span",{staticClass:"explicit-symbol before-artist"},[e("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),e("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),e("div")]),t.isTracklist||t.isAlbum?t._e():e("div",{staticClass:"album"},[e("router-link",{attrs:{to:"/album/"+t.album.id}},[t._v(t._s(t.album.name))]),e("div")],1),t.isTracklist?t._e():e("div",{staticClass:"actions"},[e("button",{on:{click:t.likeThisSong}},[e("svg-icon",{style:{visibility:t.focus&&!t.isLiked?"visible":"hidden"},attrs:{"icon-class":"heart"}}),e("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1)]),t.isTracklist?t._e():e("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},u=[],d=e("186d"),p=e("0c94"),h={name:"TrackListItem",components:{ArtistsInLine:d["a"],ExplicitSymbol:p["a"]},props:{track:Object,highlightPlayingTrack:{type:Boolean,default:!0}},data:function(){return{hover:!1,trackStyle:{}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["d"])(["settings"])),{},{imgUrl:function(){var t,i,e,s,a,r,l=null!==(t=null!==(i=null===(e=this.track)||void 0===e||null===(s=e.al)||void 0===s?void 0:s.picUrl)&&void 0!==i?i:null===(a=this.track)||void 0===a||null===(r=a.album)||void 0===r?void 0:r.picUrl)&&void 0!==t?t:"https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg";return l+"?param=224y224"},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},album:function(){return this.track.album||this.track.al},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return!this.track.playable&&this.showUnavailableSongInGreyStyle&&t.push("disable"),this.isPlaying&&this.highlightPlayingTrack&&t.push("playing"),this.focus&&t.push("focus"),t},isMenuOpened:function(){return this.$parent.rightClickedTrack.id===this.track.id},focus:function(){return this.hover&&0===this.$parent.rightClickedTrack.id||this.isMenuOpened},showUnavailableSongInGreyStyle:function(){return!Object({NODE_ENV:"production",VUE_APP_NETEASE_API_URL:"/api",VUE_APP_ELECTRON_API_URL:"/api",VUE_APP_ELECTRON_API_URL_DEV:"http://127.0.0.1:3000",VUE_APP_LASTFM_API_KEY:"09c55292403d961aa517ff7f5e8a3d9c",VUE_APP_LASTFM_API_SHARED_SECRET:"307c9fda32b3904e53654baff215cb67",BASE_URL:"/"}).IS_ELECTRON||!this.$store.state.settings.enableUnblockNeteaseMusic}}),methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeATrack(this.track.id)}}},y=h,v=(e("a69d"),e("2877")),f=Object(v["a"])(y,o,u,!1,null,"5a78abfc",null),m=f.exports,k=e("6825"),b={name:"TrackList",components:{TrackListItem:m,ContextMenu:k["a"]},props:{tracks:Array,type:String,id:Number,dbclickTrackFunc:{type:String,default:"default"},albumObject:{type:Object,default:function(){return{artist:{name:""}}}},extraContextMenuItem:{type:Array,default:function(){return[]}},columnNumber:{type:Number,default:4},highlightPlayingTrack:{type:Boolean,default:!0},itemKey:{type:String,default:"id"}},data:function(){return{rightClickedTrack:{id:0,name:"",ar:[{name:""}],al:{picUrl:""}},listStyles:{}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)}}),created:function(){"tracklist"===this.type&&(this.listStyles={display:"grid",gap:"4px",gridTemplateColumns:"repeat(".concat(this.columnNumber,", 1fr)")})},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])(["updateModal"])),Object(l["b"])(["nextTrack","showToast","likeATrack"])),{},{openMenu:function(t,i){this.rightClickedTrack=i,this.$refs.menu.openMenu(t)},closeMenu:function(){this.rightClickedTrack={id:0,name:"",ar:[{name:""}],al:{picUrl:""}}},playThisList:function(t){if("default"===this.dbclickTrackFunc)this.playThisListDefault(t);else if("none"===this.dbclickTrackFunc);else if("playTrackOnListByID"===this.dbclickTrackFunc)this.$store.state.player.playTrackOnListByID(t);else if("playPlaylistByID"===this.dbclickTrackFunc)this.$store.state.player.playPlaylistByID(this.id,t);else if("playAList"===this.dbclickTrackFunc){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,this.id,"artist",t)}else if("dailyTracks"===this.dbclickTrackFunc){var e=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,"/daily/songs","url",t)}},playThisListDefault:function(t){if("playlist"===this.type)this.$store.state.player.playPlaylistByID(this.id,t);else if("album"===this.type)this.$store.state.player.playAlbumByID(this.id,t);else if("tracklist"===this.type){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,this.id,"artist",t)}},play:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id,!0)},playNext:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id)},like:function(){this.likeATrack(this.rightClickedTrack.id)},addTrackToPlaylist:function(){Object(c["b"])()?(this.updateModal({modalName:"addTrackToPlaylistModal",key:"show",value:!0}),this.updateModal({modalName:"addTrackToPlaylistModal",key:"selectedTrackID",value:this.rightClickedTrack.id})):this.showToast("此操作需要登录网易云账号")},removeTrackFromPlaylist:function(){var t=this;if(Object(c["b"])()){if(confirm("确定要从歌单删除 ".concat(this.rightClickedTrack.name,"？"))){var i=this.rightClickedTrack.id;Object(n["a"])({op:"del",pid:this.id,tracks:i}).then((function(e){t.showToast(200===e.body.code?"已从歌单中删除":e.body.message),t.$parent.removeTrack(i)}))}}else this.showToast("此操作需要登录网易云账号")}})},g=b,T=Object(v["a"])(g,s,a,!1,null,"a2e84ac4",null);i["a"]=T.exports},a69d:function(t,i,e){"use strict";e("7a20")},b868:function(t,i,e){"use strict";e("edeb")},d4e3:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(i){return e("div",{key:t.getID(i),staticClass:"mv"},[e("div",{staticClass:"cover",on:{mouseover:function(e){t.hoverVideoID=t.getID(i)},mouseleave:function(i){t.hoverVideoID=0},click:function(e){t.goToMv(t.getID(i))}}},[e("img",{attrs:{src:t.getUrl(i)}}),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(i),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(i)+")"}})])],1),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("router-link",{attrs:{to:"/mv/"+t.getID(i)}},[t._v(t._s(t.getTitle(i)))])],1),e("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(i))}})])])})),0)},a=[],r=(e("ac1f"),e("5319"),e("b0c0"),e("99af"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var i={};void 0!==this.$parent.player&&(i={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:i})},getUrl:function(t){var i,e,s=null!==(i=null!==(e=t.imgurl16v9)&&void 0!==e?e:t.cover)&&void 0!==i?i:t.coverUrl;return s.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var i="null",e=0;return void 0!==t.artistName?(i=t.artistName,e=t.artistId):void 0!==t.creator&&(i=t.creator[0].userName,e=t.creator[0].userId),'<a href="/#/artist/'.concat(e,'">').concat(i,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),l=r,n=(e("2688"),e("2877")),c=Object(n["a"])(l,s,a,!1,null,"c5f57114",null);i["a"]=c.exports},db95:function(t,i,e){},e36c:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("h1",[e("img",{staticClass:"avatar",attrs:{src:t._f("resizeImage")(t.data.user.avatarUrl)}}),t._v(t._s(t.data.user.nickname)+t._s(t.$t("library.sLibrary"))+" ")]),e("div",{staticClass:"section-one"},[e("div",{staticClass:"liked-songs",on:{click:t.goToLikedSongsList}},[e("div",{staticClass:"top"},[e("p",t._l(t.pickedLyric,(function(i,s){return e("span",{directives:[{name:"show",rawName:"v-show",value:""!==i,expression:"line !== ''"}],key:""+i+s},[t._v(t._s(i)),e("br")])})),0)]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"titles"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("library.likedSongs")))]),e("div",{staticClass:"sub-title"},[t._v(" "+t._s(t.liked.songs.length)+" "+t._s(t.$t("common.songs"))+" ")])]),e("button",{on:{click:function(i){return i.stopPropagation(),t.playLikedSongs(i)}}},[e("svg-icon",{attrs:{"icon-class":"play"}})],1)])]),e("div",{staticClass:"songs"},[e("TrackList",{attrs:{id:t.liked.playlists.length>0?t.liked.playlists[0].id:0,tracks:t.liked.songsWithDetails,"column-number":3,type:"tracklist","dbclick-track-func":"playPlaylistByID"}})],1)]),e("div",{staticClass:"section-two"},[e("div",{staticClass:"tabs-row"},[e("div",{staticClass:"tabs"},[e("div",{staticClass:"tab dropdown",class:{active:"playlists"===t.currentTab},on:{click:function(i){return t.updateCurrentTab("playlists")}}},[e("span",{staticClass:"text"},[t._v(t._s({all:"全部歌单",mine:"创建的歌单",liked:"收藏的歌单"}[t.playlistFilter]))]),e("span",{staticClass:"icon",on:{click:function(i){return i.stopPropagation(),t.openPlaylistTabMenu(i)}}},[e("svg-icon",{attrs:{"icon-class":"dropdown"}})],1)]),e("div",{staticClass:"tab",class:{active:"albums"===t.currentTab},on:{click:function(i){return t.updateCurrentTab("albums")}}},[t._v(" "+t._s(t.$t("library.albums"))+" ")]),e("div",{staticClass:"tab",class:{active:"artists"===t.currentTab},on:{click:function(i){return t.updateCurrentTab("artists")}}},[t._v(" "+t._s(t.$t("library.artists"))+" ")]),e("div",{staticClass:"tab",class:{active:"mvs"===t.currentTab},on:{click:function(i){return t.updateCurrentTab("mvs")}}},[t._v(" "+t._s(t.$t("library.mvs"))+" ")])]),e("button",{directives:[{name:"show",rawName:"v-show",value:"playlists"===t.currentTab,expression:"currentTab === 'playlists'"}],staticClass:"add-playlist",attrs:{icon:"plus"},on:{click:t.openAddPlaylistModal}},[e("svg-icon",{attrs:{"icon-class":"plus"}}),t._v(t._s(t.$t("library.newPlayList")))],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:"playlists"===t.currentTab,expression:"currentTab === 'playlists'"}]},[t.liked.playlists.length>1?e("div",[e("CoverRow",{attrs:{items:t.filterPlaylists.slice(1),type:"playlist","sub-text":"creator","show-play-button":!0}})],1):t._e()]),e("div",{directives:[{name:"show",rawName:"v-show",value:"albums"===t.currentTab,expression:"currentTab === 'albums'"}]},[e("CoverRow",{attrs:{items:t.liked.albums,type:"album","sub-text":"artist","show-play-button":!0}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"artists"===t.currentTab,expression:"currentTab === 'artists'"}]},[e("CoverRow",{attrs:{items:t.liked.artists,type:"artist","show-play-button":!0}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"mvs"===t.currentTab,expression:"currentTab === 'mvs'"}]},[e("MvRow",{attrs:{mvs:t.liked.mvs}})],1)]),e("ContextMenu",{ref:"playlistTabMenu"},[e("div",{staticClass:"item",on:{click:function(i){return t.changePlaylistFilter("all")}}},[t._v("全部歌单")]),e("hr"),e("div",{staticClass:"item",on:{click:function(i){return t.changePlaylistFilter("mine")}}},[t._v("创建的歌单")]),e("div",{staticClass:"item",on:{click:function(i){return t.changePlaylistFilter("liked")}}},[t._v("收藏的歌单")])])],1)},a=[],r=e("5530"),l=(e("ac1f"),e("1276"),e("4de4"),e("caad"),e("2532"),e("2f62")),n=e("fefb"),c=e("cf45"),o=e("5f87"),u=e("323e"),d=e.n(u),p=e("6825"),h=e("a1a1"),y=e("2726"),v=e("0032"),f=e("d4e3"),m={name:"Library",components:{SvgIcon:v["a"],CoverRow:y["a"],TrackList:h["a"],MvRow:f["a"],ContextMenu:p["a"]},data:function(){return{show:!1,likedSongs:[],lyric:void 0,currentTab:"playlists"}},computed:Object(r["a"])(Object(r["a"])({},Object(l["d"])(["data","liked"])),{},{pickedLyric:function(){if(void 0===this.lyric)return"";var t=this.lyric.split("\n");t=t.filter((function(t){return!t.includes("作词")&&!t.includes("作曲")}));var i=Object(c["f"])(0,t.length-1);while(i+4>t.length)i=Object(c["f"])(0,t.length-1);return[t[i].split("]")[1],t[i+1].split("]")[1],t[i+2].split("]")[1]]},playlistFilter:function(){return this.data.libraryPlaylistFilter||"all"},filterPlaylists:function(){var t=this.liked.playlists,i=this.data.user.userId;return"mine"===this.playlistFilter?t.filter((function(t){return t.creator.userId===i})):"liked"===this.playlistFilter?t.filter((function(t){return t.creator.userId!==i})):t}}),created:function(){d.a.start(),this.loadData()},activated:function(){this.loadData(),Object(c["c"])()},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["b"])(["showToast"])),Object(l["c"])(["updateModal","updateData"])),{},{loadData:function(){var t=this;this.liked.songsWithDetails.length>0?(d.a.done(),this.show=!0,this.$store.dispatch("fetchLikedSongsWithDetails"),this.getRandomLyric()):this.$store.dispatch("fetchLikedSongsWithDetails").then((function(){d.a.done(),t.show=!0,t.getRandomLyric()})),this.$store.dispatch("fetchLikedSongs"),this.$store.dispatch("fetchLikedPlaylist"),this.$store.dispatch("fetchLikedAlbums"),this.$store.dispatch("fetchLikedArtists"),this.$store.dispatch("fetchLikedMVs")},playLikedSongs:function(){this.$store.state.player.playPlaylistByID(this.liked.playlists[0].id,"first",!0)},updateCurrentTab:function(t){Object(o["b"])()||"playlists"===t?(this.currentTab=t,window.scrollTo({top:375,behavior:"smooth"})):this.showToast("此操作需要登录网易云账号")},goToLikedSongsList:function(){this.$router.push({path:"/library/liked-songs"})},getRandomLyric:function(){var t=this;Object(n["a"])(this.liked.songs[Object(c["f"])(0,this.liked.songs.length-1)]).then((function(i){void 0!==i.lrc&&(t.lyric=i.lrc.lyric)}))},openAddPlaylistModal:function(){Object(o["b"])()?this.updateModal({modalName:"newPlaylistModal",key:"show",value:!0}):this.showToast("此操作需要登录网易云账号")},openPlaylistTabMenu:function(t){this.$refs.playlistTabMenu.openMenu(t)},changePlaylistFilter:function(t){this.updateData({key:"libraryPlaylistFilter",value:t}),window.scrollTo({top:375,behavior:"smooth"})}})},k=m,b=(e("f18d"),e("2877")),g=Object(b["a"])(k,s,a,!1,null,"71040bde",null);i["default"]=g.exports},edeb:function(t,i,e){},f18d:function(t,i,e){"use strict";e("2659")}}]);
//# sourceMappingURL=chunk-cae967c6.f18fb27e.js.map