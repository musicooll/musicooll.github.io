(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570c23bc"],{"0226":function(t,e,i){},"04f0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"album"},[i("div",{staticClass:"playlist-info"},[i("Cover",{attrs:{imageUrl:t._f("resizeImage")(t.album.picUrl,1024),showPlayButton:!0,alwaysShowShadow:!0,clickCoverToPlay:!0,fixedSize:288,type:"album",id:t.album.id,coverHover:!1,playButtonSize:18},nativeOn:{contextmenu:function(e){return t.openMenu(e)}}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title",on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(" "+t._s(t.title))]),""!==t.subtitle?i("div",{staticClass:"subtitle",on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(t._s(t.subtitle))]):t._e(),i("div",{staticClass:"artist"},[104700!==t.album.artist.id?i("span",[i("span",[t._v(t._s(t._f("formatAlbumType")(t.album.type,t.album))+" by ")]),i("router-link",{attrs:{to:"/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name))])],1):i("span",[t._v("Compilation by Various Artists")])]),i("div",{staticClass:"date-and-count"},[1056768===t.album.mark?i("span",{staticClass:"explicit-symbol"},[i("ExplicitSymbol")],1):t._e(),i("span",{attrs:{title:t._f("formatDate")(t.album.publishTime)}},[t._v(t._s(new Date(t.album.publishTime).getFullYear()))]),i("span",[t._v(" · "+t._s(t.album.size)+" "+t._s(t.$t("common.songs")))]),t._v(", "+t._s(t._f("formatTime")(t.albumTime,"Human"))+" ")]),i("div",{staticClass:"description",on:{click:function(e){t.showFullDescription=!0}}},[t._v(" "+t._s(t.album.description)+" ")]),i("div",{staticClass:"buttons",staticStyle:{"margin-top":"32px"}},[i("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(e){return t.playAlbumByID(t.album.id)}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),i("ButtonTwoTone",{attrs:{iconClass:t.dynamicDetail.isSub?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.dynamicDetail.isSub?"blue":"grey",textColor:t.dynamicDetail.isSub?"#335eea":"",backgroundColor:t.dynamicDetail.isSub?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likeAlbum(e)}}}),i("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)])],1),i("TrackList",{attrs:{tracks:t.tracks,type:"album",id:t.album.id,albumObject:t.album}}),i("div",{staticClass:"extra-info"},[i("div",{staticClass:"album-time"}),i("div",{staticClass:"release-date"},[t._v(" "+t._s(t.$t("album.released"))+" "+t._s(t._f("formatDate")(t.album.publishTime,"MMMM D, YYYY"))+" ")]),null!==t.album.company?i("div",{staticClass:"copyright"},[t._v(" © "+t._s(t.album.company)+" ")]):t._e()]),0!==t.filteredMoreAlbums.length?i("div",{staticClass:"more-by"},[i("div",{staticClass:"section-title"},[t._v(" More by "),i("router-link",{attrs:{to:"/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name)+" ")])],1),i("div",[i("CoverRow",{attrs:{type:"album",items:t.filteredMoreAlbums,subText:"albumType+releaseYear"}})],1)]):t._e(),i("Modal",{attrs:{show:t.showFullDescription,close:function(){return t.showFullDescription=!1},showFooter:!1,clickOutsideHide:!0,title:"专辑介绍"}},[i("p",{staticClass:"description-fulltext"},[t._v(" "+t._s(t.album.description)+" ")])]),i("ContextMenu",{ref:"albumMenu"},[i("div",{staticClass:"item"},[t._v(t._s(t.$t("contextMenu.playNext")))]),i("div",{staticClass:"item",on:{click:function(e){return t.likeAlbum(!0)}}},[t._v(t._s(t.dynamicDetail.isSub?"从音乐库删除":"保存到音乐库"))]),i("div",{staticClass:"item"},[t._v("添加到歌单")])])],1)},s=[],n=i("2909"),r=i("5530"),l=(i("d81d"),i("4de4"),i("7db0"),i("fb6a"),i("99af"),i("b0c0"),i("a15b"),i("2f62")),c=i("512b"),o=i("fefb"),u=i("e498"),d=i("cf45"),p=i("323e"),h=i.n(p),m=i("5f87"),y=i("0c94"),f=i("5e45"),b=i("6825"),v=i("a1a1"),k=i("2726"),g=i("3020"),T=i("714b"),C={name:"Album",components:{Cover:g["a"],ButtonTwoTone:f["a"],TrackList:v["a"],ExplicitSymbol:y["a"],CoverRow:k["a"],Modal:T["a"],ContextMenu:b["a"]},data:function(){return{album:{id:0,picUrl:"",artist:{id:0}},tracks:[],showFullDescription:!1,show:!1,moreAlbums:[],dynamicDetail:{},subtitle:"",title:""}},created:function(){this.loadData(this.$route.params.id)},computed:Object(r["a"])(Object(r["a"])({},Object(l["d"])(["player","data"])),{},{albumTime:function(){var t=0;return this.tracks.map((function(e){return t+=e.dt})),t},filteredMoreAlbums:function(){var t=this,e=this.moreAlbums.filter((function(e){return e.id!==t.album.id})),i=e.filter((function(t){return"专辑"===t.type})),a=e.filter((function(t){return"EP"===t.type||"EP/Single"===t.type&&t.size>1})),s=e.filter((function(t){return void 0===i.find((function(e){return e.id===t.id}))&&void 0===a.find((function(e){return e.id===t.id}))}));return 0===i.length?[].concat(Object(n["a"])(i),Object(n["a"])(a),Object(n["a"])(s)).slice(0,5):[].concat(Object(n["a"])(i),Object(n["a"])(s)).slice(0,5)}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])(["appendTrackToPlayerList"])),Object(l["b"])(["playFirstTrackOnList","playTrackOnListByID","showToast"])),{},{playAlbumByID:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";this.$store.state.player.playAlbumByID(t,e)},likeAlbum:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(m["b"])()?Object(u["c"])({id:this.album.id,t:this.dynamicDetail.isSub?0:1}).then((function(i){200===i.code&&(t.dynamicDetail.isSub=!t.dynamicDetail.isSub,!0===e&&t.showToast(t.dynamicDetail.isSub?"已保存到音乐库":"已从音乐库删除"))})):this.showToast("此操作需要登录网易云账号")},formatTitle:function(){var t=Object(d["h"])(this.album.name),e=Object(d["g"])(t.title);this.title=e.title,""!==t.subtitle&&""!==e.subtitle?this.subtitle=t.subtitle+" · "+e.subtitle:this.subtitle=""===t.subtitle?e.subtitle:t.subtitle},loadData:function(t){var e=this;Object(u["b"])(t).then((function(t){e.album=t.album,e.tracks=t.songs,e.formatTitle(),h.a.done(),e.show=!0;var i=e.tracks.map((function(t){return t.id}));Object(o["c"])(i.join(",")).then((function(t){e.tracks=t.songs})),Object(c["d"])({id:e.album.artist.id,limit:100}).then((function(t){e.moreAlbums=t.hotAlbums}))})),Object(u["a"])(t).then((function(t){e.dynamicDetail=t}))},openMenu:function(t){this.$refs.albumMenu.openMenu(t)}}),beforeRouteUpdate:function(t,e,i){h.a.start(),this.loadData(t.params.id),i()}},_=C,S=(i("5e1e"),i("2877")),x=Object(S["a"])(_,a,s,!1,null,"0f0e84a8",null);e["default"]=x.exports},"0c94":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},s=[],n=(i("a9e3"),i("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:n["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},l=r,c=i("2877"),o=Object(c["a"])(l,a,s,!1,null,"7e2a888e",null);e["a"]=o.exports},"186d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"artist-in-line"},[t._v(" "+t._s(t.computedPrefix)+" "),t._l(t.filteredArtists,(function(e,a){return i("span",{key:e.id},[i("router-link",{attrs:{to:"/artist/"+e.id}},[t._v(t._s(e.name))]),a!==t.filteredArtists.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2)},s=[],n=(i("4de4"),i("b0c0"),{name:"ArtistInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},computed:{filteredArtists:function(){var t=this;return this.artists.filter((function(e){return e.name!==t.exclude}))},computedPrefix:function(){return 0!==this.filteredArtists.length?this.prefix:""}}}),r=n,l=i("2877"),c=Object(l["a"])(r,a,s,!1,null,"6b13d4cd",null);e["a"]=c.exports},2726:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover-row",style:t.rowStyles},t._l(t.items,(function(e){return i("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[i("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id,playButtonSize:"artist"===t.type?26:t.playButtonSize}}),i("div",{staticClass:"text"},[t.showPlayCount?i("div",{staticClass:"info"},[i("span",{staticClass:"play-count"},[i("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),i("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?i("span",{staticClass:"explicit-symbol"},[i("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?i("span",{staticClass:"lock-icon"},[i("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),i("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?i("div",{staticClass:"info"},[i("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},s=[],n=(i("a9e3"),i("a4d3"),i("e01a"),i("99af"),i("b0c0"),i("ac1f"),i("1276"),i("3020")),r=i("0c94"),l={name:"CoverRow",components:{Cover:n["a"],ExplicitSymbol:r["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},playButtonSize:{type:Number,default:22}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var i=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(i,"?param=512y512")}}},c=l,o=(i("3ab0"),i("2877")),u=Object(o["a"])(c,a,s,!1,null,"bae17e30",null);e["a"]=u.exports},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||n(t)||Object(r["a"])(t)||l()}},3020:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[i("div",{staticClass:"cover-container"},[i("div",{staticClass:"shade"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[i("svg-icon",{attrs:{"icon-class":"play"}})],1)]),i("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},s=[],n=(i("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),r=n,l=(i("458d"),i("2877")),c=Object(l["a"])(r,a,s,!1,null,"02559854",null);e["a"]=c.exports},"3ab0":function(t,e,i){"use strict";i("6090")},"440b":function(t,e,i){"use strict";i("994d")},"458d":function(t,e,i){"use strict";i("e3a5")},"5e1e":function(t,e,i){"use strict";i("97a5")},"5e45":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?i("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},s=[],n=(i("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),r=n,l=(i("440b"),i("2877")),c=Object(l["a"])(r,a,s,!1,null,"3794cec8",null);e["a"]=c.exports},6090:function(t,e,i){},"97a5":function(t,e,i){},"994d":function(t,e,i){},a1a1:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track-list"},[i("ContextMenu",{ref:"menu"},[i("div",{staticClass:"item-info"},[i("img",{attrs:{src:t._f("resizeImage")(t.rightClickedTrack.al.picUrl,224)}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(t.rightClickedTrack.name))]),i("div",{staticClass:"subtitle"},[t._v(t._s(t.rightClickedTrack.ar[0].name))])])]),i("hr"),i("div",{staticClass:"item",on:{click:t.play}},[t._v(t._s(t.$t("contextMenu.play")))]),i("div",{staticClass:"item",on:{click:t.playNext}},[t._v(t._s(t.$t("contextMenu.playNext")))]),i("hr"),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked,expression:"!isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.saveToMyLikedSongs"))+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked,expression:"isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" "+t._s(t.$t("contextMenu.removeFromMyLikedSongs"))+" ")]),t.extraContextMenuItem.includes("removeTrackFromPlaylist")?i("div",{staticClass:"item",on:{click:t.removeTrackFromPlaylist}},[t._v("从歌单中删除")]):t._e(),i("div",{staticClass:"item",on:{click:t.addTrackToPlaylist}},[t._v("添加到歌单")])]),i("div",{style:t.listStyles},t._l(t.tracks,(function(e,a){return i("TrackListItem",{key:"id"===t.itemKey?e.id:""+e.id+a,attrs:{track:e,highlightPlayingTrack:t.highlightPlayingTrack},nativeOn:{dblclick:function(i){return t.playThisList(e.id)},contextmenu:function(i){return t.openMenu(i,e)}}})})),1)],1)},s=[],n=i("5530"),r=(i("a9e3"),i("caad"),i("2532"),i("d81d"),i("4de4"),i("b0c0"),i("2f62")),l=i("fefb"),c=i("1e9a"),o=i("5f87"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.showUnavailableSongInGreyStyle?t.track.reason:""},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.isAlbum?t._e():i("img",{class:{hover:t.focus},attrs:{src:t.imgUrl},on:{click:t.goToAlbum}}),t.isAlbum?i("div",{staticClass:"no"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[i("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),i("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[i("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),i("div",{staticClass:"title-and-artist"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum?i("span",{staticClass:"featured"},[i("ArtistsInLine",{attrs:{artists:t.track.ar,exclude:this.$parent.albumObject.artist.name,prefix:"-"}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?i("span",{staticClass:"explicit-symbol"},[i("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():i("div",{staticClass:"artist"},[1318912===t.track.mark?i("span",{staticClass:"explicit-symbol before-artist"},[i("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),i("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),i("div")]),t.isTracklist||t.isAlbum?t._e():i("div",{staticClass:"album"},[i("router-link",{attrs:{to:"/album/"+t.album.id}},[t._v(t._s(t.album.name))]),i("div")],1),t.isTracklist?t._e():i("div",{staticClass:"actions"},[i("button",{on:{click:t.likeThisSong}},[i("svg-icon",{style:{visibility:t.focus&&!t.isLiked?"visible":"hidden"},attrs:{"icon-class":"heart"}}),i("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1)]),t.isTracklist?t._e():i("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},d=[],p=i("186d"),h=i("0c94"),m={name:"TrackListItem",components:{ArtistsInLine:p["a"],ExplicitSymbol:h["a"]},props:{track:Object,highlightPlayingTrack:{type:Boolean,default:!0}},data:function(){return{hover:!1,trackStyle:{}}},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["settings"])),{},{imgUrl:function(){var t,e,i,a,s,n,r=null!==(t=null!==(e=null===(i=this.track)||void 0===i||null===(a=i.al)||void 0===a?void 0:a.picUrl)&&void 0!==e?e:null===(s=this.track)||void 0===s||null===(n=s.album)||void 0===n?void 0:n.picUrl)&&void 0!==t?t:"https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg";return r+"?param=224y224"},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},album:function(){return this.track.album||this.track.al},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return!this.track.playable&&this.settings.showUnavailableSongInGreyStyle&&t.push("disable"),this.isPlaying&&this.highlightPlayingTrack&&t.push("playing"),this.focus&&t.push("focus"),t},isMenuOpened:function(){return this.$parent.rightClickedTrack.id===this.track.id},focus:function(){return this.hover&&0===this.$parent.rightClickedTrack.id||this.isMenuOpened},showUnavailableSongInGreyStyle:function(){return this.$store.state.settings.showUnavailableSongInGreyStyle}}),methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeASong(this.track.id)}}},y=m,f=(i("a23f"),i("2877")),b=Object(f["a"])(y,u,d,!1,null,"0fd62688",null),v=b.exports,k=i("6825"),g={name:"TrackList",components:{TrackListItem:v,ContextMenu:k["a"]},props:{tracks:Array,type:String,id:Number,dbclickTrackFunc:{type:String,default:"default"},albumObject:{type:Object,default:function(){return{artist:{name:""}}}},extraContextMenuItem:{type:Array,default:function(){return[]}},columnNumber:{type:Number,default:4},highlightPlayingTrack:{type:Boolean,default:!0},itemKey:{type:String,default:"id"}},data:function(){return{rightClickedTrack:{id:0,name:"",ar:[{name:""}],al:{picUrl:""}},listStyles:{}}},created:function(){"tracklist"===this.type&&(this.listStyles={display:"grid",gap:"4px",gridTemplateColumns:"repeat(".concat(this.columnNumber,", 1fr)")})},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["c"])(["updateLikedSongs","updateModal"])),Object(r["b"])(["nextTrack","showToast"])),{},{openMenu:function(t,e){this.rightClickedTrack=e,this.$refs.menu.openMenu(t)},closeMenu:function(){this.rightClickedTrack={id:0,name:"",ar:[{name:""}],al:{picUrl:""}}},playThisList:function(t){if("default"===this.dbclickTrackFunc)this.playThisListDefault(t);else if("none"===this.dbclickTrackFunc);else if("playTrackOnListByID"===this.dbclickTrackFunc)this.$store.state.player.playTrackOnListByID(t);else if("playPlaylistByID"===this.dbclickTrackFunc)this.$store.state.player.playPlaylistByID(this.id,t);else if("playAList"===this.dbclickTrackFunc){var e=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.id,"artist",t)}else if("dailyTracks"===this.dbclickTrackFunc){var i=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(i,"/daily/songs","url",t)}},playThisListDefault:function(t){if("playlist"===this.type)this.$store.state.player.playPlaylistByID(this.id,t);else if("album"===this.type)this.$store.state.player.playAlbumByID(this.id,t);else if("tracklist"===this.type){var e=this.tracks.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.id,"artist",t)}},play:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id,!0)},playNext:function(){this.$store.state.player.addTrackToPlayNext(this.rightClickedTrack.id)},like:function(){this.likeASong(this.rightClickedTrack.id)},likeASong:function(t){var e=this;if(Object(o["b"])()){var i=!0,a=this.liked.songs;a.includes(t)&&(i=!1),Object(l["d"])({id:t,like:i}).then((function(s){200===s.code&&(!1===i?(e.showToast(e.$t("toast.removedFromMyLikedSongs")),e.updateLikedSongs(a.filter((function(e){return e!==t})))):(e.showToast(e.$t("toast.savedToMyLikedSongs")),a.push(t),e.updateLikedSongs(a)))}))}else this.showToast("此操作需要登录网易云账号")},addTrackToPlaylist:function(){Object(o["b"])()?(this.updateModal({modalName:"addTrackToPlaylistModal",key:"show",value:!0}),this.updateModal({modalName:"addTrackToPlaylistModal",key:"selectedTrackID",value:this.rightClickedTrack.id})):this.showToast("此操作需要登录网易云账号")},removeTrackFromPlaylist:function(){var t=this;if(Object(o["b"])()){if(confirm("确定要从歌单删除 ".concat(this.rightClickedTrack.name,"？"))){var e=this.rightClickedTrack.id;Object(c["a"])({op:"del",pid:this.id,tracks:e}).then((function(i){t.showToast(200===i.body.code?"已从歌单中删除":i.body.message),t.$parent.removeTrack(e)}))}}else this.showToast("此操作需要登录网易云账号")}})},T=g,C=Object(f["a"])(T,a,s,!1,null,"0574ba73",null);e["a"]=C.exports},a23f:function(t,e,i){"use strict";i("0226")},e3a5:function(t,e,i){}}]);
//# sourceMappingURL=chunk-570c23bc.722100e2.js.map