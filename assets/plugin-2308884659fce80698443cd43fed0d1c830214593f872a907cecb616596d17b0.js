!function(t,e){function l(t){t.toggleClass("open")}var o=function(t){var e,l=t.createElement("details");if(!("open"in l))return!1;var o=t.body||function(){var l=t.documentElement;return e=!0,l.insertBefore(t.createElement("body"),l.firstElementChild||l.firstChild)}();l.innerHTML="<summary>a</summary>b",l.style.display="block",o.appendChild(l);var i=l.offsetHeight;return l.open=!0,i=i!==l.offsetHeight,o.removeChild(l),e&&o.parentNode.removeChild(o),i}(t);e.fn.details=function(){return o?this:this.each(function(){var t=e(this),o=e("summary",t).first();o.prop("tabIndex",0),o.on("keydown",function(e){if(32===e.keyCode||13===e.keyCode)return l(t),!1}),o.on("click",function(){o.focus(),l(t)})})}}(document,jQuery),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],function(t){"use strict";function e(t){t.whiteList(["summary","summary[title]","details","details[open]","details.elided"]),t.registerPlugin(function(t){t.block.bbcode.ruler.push("details",l)})}Object.defineProperty(t,"__esModule",{value:!0}),t.setup=e;var l={tag:"details",before:function(t,e){var l=e.attrs;t.push("bbcode_open","details",1),t.push("bbcode_open","summary",1),t.push("text","",0).content=l._default||"",t.push("bbcode_close","summary",-1)},after:function(t){t.push("bbcode_close","details",-1)}}}),define("discourse/plugins/discourse-details/initializers/apply-details",["exports","discourse/lib/plugin-api"],function(t,e){"use strict";function l(t){t.decorateCooked(function(t){return $("details",t).details()}),t.addToolbarPopupMenuOptionsCallback(function(){return{action:"insertDetails",icon:"caret-right",label:"details.title"}}),t.modifyClass("controller:composer",{actions:{insertDetails:function(){this.get("toolbarEvent").applySurround('\n[details="'+I18n.t("composer.details_title")+'"]\n',"\n[/details]\n","details_text",{multiline:!1}),this.set("optionsVisible",!1)}}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"apply-details",initialize:function(){(0,e.withPluginApi)("0.8.7",l)}}}),function(t){"use strict";function e(t,e){var l,o,i,n=t.data("width"),s=t.data("height"),a=t.data("ratio")?t.data("ratio"):e.default_ratio,r=t.data("youtube-id"),u=t.data("youtube-title"),p=[],c=t.data("parameters")||"";a=a.split(":"),"number"==typeof n&&"number"==typeof s?(t.width(n),l=s+"px"):"number"==typeof n?(t.width(n),l=n*a[1]/a[0]+"px"):(n=t.width(),0===n&&(n=t.parent().width()),l=a[1]/a[0]*100+"%"),p.push('<div class="ytp-thumbnail">'),p.push('<div class="ytp-large-play-button"'),n<=640&&p.push(' style="transform: scale(0.563888888888889);"'),p.push(">"),p.push("<svg>"),p.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>'),p.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>'),p.push("</svg>"),p.push("</div>"),p.push("</div>"),p.push('<div class="html5-info-bar">'),p.push('<div class="html5-title">'),p.push('<div class="html5-title-text-wrapper">'),p.push('<a class="html5-title-text" target="_blank" tabindex="3100" href="https://www.youtube.com/watch?v=',r,'">'),void 0===u||null===u||""===u?p.push("youtube.com/watch?v="+r):p.push(u),p.push("</a>"),p.push("</div>"),p.push("</div>"),p.push("</div>"),t.css({"padding-bottom":l}).html(p.join("")),i=n>640?"maxresdefault.jpg":n>480?"sddefault.jpg":n>320?"hqdefault.jpg":n>120?"mqdefault.jpg":0===n?"hqdefault.jpg":"default.jpg",o=t.find(".ytp-thumbnail").css({"background-image":["url(//img.youtube.com/vi/",r,"/",i,")"].join("")}).addClass("lazyYT-image-loaded").on("click",function(l){l.preventDefault(),!t.hasClass("lazyYT-video-loaded")&&o.hasClass("lazyYT-image-loaded")&&t.html('<iframe src="//www.youtube.com/embed/'+r+"?autoplay=1&"+c+'" frameborder="0" allowfullscreen></iframe>').addClass("lazyYT-video-loaded"),e.onPlay&&e.onPlay(l,t)})}t.fn.lazyYT=function(l){var o={default_ratio:"16:9",callback:null,container_class:"lazyYT-container"},i=t.extend(o,l);return this.each(function(){e(t(this).addClass(i.container_class),i)})}}(jQuery),define("discourse/plugins/lazyYT/initializers/lazyYT",["exports","discourse/lib/plugin-api"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"apply-lazyYT",initialize:function(){(0,e.withPluginApi)("0.1",function(t){t.decorateCooked(function(e){0!==$(".lazyYT",e).length&&$(".lazyYT",e).lazyYT({onPlay:function(e,l){var o=parseInt(l.closest("article").data("post-id"));o&&t.preventCloak(o)}})})})}}}),define("discourse/plugins/poll/widgets/discourse-poll",["exports","discourse/widgets/widget","virtual-dom","discourse-common/lib/icon-library","discourse/widgets/raw-html","discourse/lib/ajax","discourse/lib/ajax-error","discourse/plugins/poll/lib/even-round","discourse/widgets/post","discourse/lib/round"],function(t,e,l,o,i,n,s,a,r,u){"use strict";function p(t){return new i.default({html:"<span>"+t.html+"</span>"})}function c(t){return(0,n.ajax)("/polls/voters.json",{type:"get",data:t}).catch(function(t){t?(0,s.popupAjaxError)(t):bootbox.alert(I18n.t("poll.error_while_fetching_voters"))})}Object.defineProperty(t,"__esModule",{value:!0}),(0,e.createWidget)("discourse-poll-option",{tagName:"li",buildAttributes:function(t){return{"data-poll-option-id":t.option.id}},html:function(t){var e=[],l=t.option,i=t.vote,n=-1!==i.indexOf(l.id);return t.isMultiple?e.push((0,o.iconNode)(n?"check-square-o":"square-o")):e.push((0,o.iconNode)(n?"dot-circle-o":"circle-o")),e.push(" "),e.push(p(l)),e},click:function(t){0===$(t.target).closest("a").length&&this.sendWidgetAction("toggleOption",this.attrs.option)}}),(0,e.createWidget)("discourse-poll-load-more",{tagName:"div.poll-voters-toggle-expand",buildKey:function(t){return t.id+"-load-more"},defaultState:function(){return{loading:!1}},html:function(t,e){return e.loading?(0,l.h)("div.spinner.small"):(0,l.h)("a",(0,o.iconNode)("chevron-down"))},click:function(){var t=this.state;if(!t.loading)return t.loading=!0,this.sendWidgetAction("loadMore").finally(function(){return t.loading=!1})}}),(0,e.createWidget)("discourse-poll-voters",{tagName:"ul.poll-voters-list",buildKey:function(t){return t.id()},defaultState:function(){return{loaded:"new",pollVoters:[],offset:1}},fetchVoters:function(){var t=this,e=this.attrs,l=this.state;if("loading"!==l.loaded)return l.loaded="loading",c({post_id:e.postId,poll_name:e.pollName,option_id:e.optionId,offset:l.offset}).then(function(o){l.loaded="loaded",l.offset+=1;var i=o[e.pollName],n="number"===e.pollType?i:i[e.optionId];l.pollVoters=l.pollVoters.concat(n),t.scheduleRerender()})},loadMore:function(){return this.fetchVoters()},html:function(t,e){t.pollVoters&&"new"===e.loaded&&(e.pollVoters=t.pollVoters);var o=e.pollVoters.map(function(t){return(0,l.h)("li",[(0,r.avatarFor)("tiny",{username:t.username,template:t.avatar_template})," "])});return e.pollVoters.length<t.totalVotes&&o.push(this.attach("discourse-poll-load-more",{id:t.id()})),(0,l.h)("div.poll-voters",o)}}),(0,e.createWidget)("discourse-poll-standard-results",{tagName:"ul.results",buildKey:function(t){return t.id+"-standard-results"},defaultState:function(){return{loaded:"new"}},fetchVoters:function(){var t=this,e=this.attrs,l=this.state;"new"===l.loaded&&c({post_id:e.post.id,poll_name:e.poll.get("name")}).then(function(o){l.voters=o[e.poll.get("name")],l.loaded="loaded",t.scheduleRerender()})},html:function(t,e){var o=this,i=t.poll,n=i.get("options");if(n){var s=i.get("voters"),r=i.get("public"),u=_.clone(n).sort(function(t,e){return t.votes<e.votes?1:t.votes===e.votes?t.html<e.html?-1:1:-1}),c=0===s?Array(u.length).fill(0):u.map(function(t){return 100*t.votes/s}),d=t.isMultiple?c.map(Math.floor):(0,a.default)(c);return r&&this.fetchVoters(),u.map(function(n,s){var a=[],u=d[s].toString(),c=(t.vote||[]).includes(n.id);return a.push((0,l.h)("div.option",(0,l.h)("p",[(0,l.h)("span.percentage",u+"%"),p(n)]))),a.push((0,l.h)("div.bar-back",(0,l.h)("div.bar",{attributes:{style:"width:"+u+"%"}}))),r&&a.push(o.attach("discourse-poll-voters",{id:function(){return"poll-voters-"+n.id},postId:t.post.id,optionId:n.id,pollName:i.get("name"),totalVotes:n.votes,pollVoters:e.voters&&e.voters[n.id]||[]})),(0,l.h)("li",{className:c?"chosen":""},a)})}}}),(0,e.createWidget)("discourse-poll-number-results",{buildKey:function(t){return t.id+"-number-results"},defaultState:function(){return{loaded:"new"}},fetchVoters:function(){var t=this,e=this.attrs,l=this.state;"new"===l.loaded&&c({post_id:e.post.id,poll_name:e.poll.get("name")}).then(function(o){l.voters=o[e.poll.get("name")],l.loaded="loaded",t.scheduleRerender()})},html:function(t,e){var o=t.poll,n=o.get("public"),s=o.get("options").reduce(function(t,e){return t+parseInt(e.html,10)*parseInt(e.votes,10)},0),a=o.voters,r=0===a?0:(0,u.default)(s/a,-2),p=I18n.t("poll.average_rating",{average:r}),c=[(0,l.h)("div.poll-results-number-rating",new i.default({html:"<span>"+p+"</span>"}))];return n&&(this.fetchVoters(),c.push(this.attach("discourse-poll-voters",{id:function(){return"poll-voters-"+o.get("name")},totalVotes:o.get("voters"),pollVoters:e.voters||[],postId:t.post.id,pollName:o.get("name"),pollType:o.get("type")}))),c}}),(0,e.createWidget)("discourse-poll-container",{tagName:"div.poll-container",html:function(t){var e=this,o=t.poll;if(t.showResults){var i="number"===o.get("type")?"number":"standard";return this.attach("discourse-poll-"+i+"-results",t)}var n=o.get("options");if(n)return(0,l.h)("ul",n.map(function(l){return e.attach("discourse-poll-option",{option:l,isMultiple:t.isMultiple,vote:t.vote})}))}}),(0,e.createWidget)("discourse-poll-info",{tagName:"div.poll-info",multipleHelpText:function(t,e,l){if(e>0)if(t===e){if(t>1)return I18n.t("poll.multiple.help.x_options",{count:t})}else{if(t>1)return e<l?I18n.t("poll.multiple.help.between_min_and_max_options",{min:t,max:e}):I18n.t("poll.multiple.help.at_least_min_options",{count:t});if(e<=l)return I18n.t("poll.multiple.help.up_to_max_options",{count:e})}},html:function(t){var e=t.poll,o=e.get("voters"),n=[(0,l.h)("p",[(0,l.h)("span.info-number",o.toString()),(0,l.h)("span.info-text",I18n.t("poll.voters",{count:o}))])];if(t.isMultiple)if(t.showResults){var s=e.get("options").reduce(function(t,e){return t+parseInt(e.votes,10)},0);n.push((0,l.h)("p",[(0,l.h)("span.info-number",s.toString()),(0,l.h)("span.info-text",I18n.t("poll.total_votes",{count:s}))]))}else{var a=this.multipleHelpText(t.min,t.max,e.get("options.length"));a&&n.push(new i.default({html:"<span>"+a+"</span>"}))}return!t.showResults&&t.poll.get("public")&&n.push((0,l.h)("p",I18n.t("poll.public.title"))),n}}),(0,e.createWidget)("discourse-poll-buttons",{tagName:"div.poll-buttons",html:function(t){var e=[],l=t.poll,o=t.post,i=o.get("topic.archived"),n="closed"===l.get("status"),s=n||i;if(t.isMultiple&&!s){var a=!t.canCastVotes;e.push(this.attach("button",{className:"btn cast-votes "+(a?"":"btn-primary"),label:"poll.cast-votes.label",title:"poll.cast-votes.title",disabled:a,action:"castVotes"})),e.push(" ")}return t.showResults?e.push(this.attach("button",{className:"btn toggle-results",label:"poll.hide-results.label",title:"poll.hide-results.title",icon:"eye-slash",disabled:s,action:"toggleResults"})):e.push(this.attach("button",{className:"btn toggle-results",label:"poll.show-results.label",title:"poll.show-results.title",icon:"eye",disabled:0===l.get("voters"),action:"toggleResults"})),!this.currentUser||this.currentUser.get("id")!==o.get("user_id")&&!this.currentUser.get("staff")||i||(n?e.push(this.attach("button",{className:"btn toggle-status",label:"poll.open.label",title:"poll.open.title",icon:"unlock-alt",action:"toggleStatus"})):e.push(this.attach("button",{className:"btn toggle-status btn-danger",label:"poll.close.label",title:"poll.close.title",icon:"lock",action:"toggleStatus"}))),e}}),t.default=(0,e.createWidget)("discourse-poll",{tagName:"div.poll",buildKey:function(t){return t.id},buildAttributes:function(t){var e=t.poll;return{"data-poll-type":e.get("type"),"data-poll-name":e.get("name"),"data-poll-status":e.get("status"),"data-poll-public":e.get("public")}},defaultState:function(t){var e=t.poll,l=t.post;return{loading:!1,showResults:e.get("isClosed")||l.get("topic.archived")}},html:function(t,e){var o=e.showResults,i=jQuery.extend({},t,{showResults:o,canCastVotes:this.canCastVotes(),min:this.min(),max:this.max()});return(0,l.h)("div",[this.attach("discourse-poll-container",i),this.attach("discourse-poll-info",i),this.attach("discourse-poll-buttons",i)])},isClosed:function(){return"closed"===this.attrs.poll.get("status")},min:function(){var t=parseInt(this.attrs.poll.min,10);return(isNaN(t)||t<1)&&(t=1),t},max:function(){var t=parseInt(this.attrs.poll.max,10),e=this.attrs.poll.options.length;return(isNaN(t)||t>e)&&(t=e),t},canCastVotes:function(){var t=this.state,e=this.attrs;if(this.isClosed()||t.showResults||t.loading)return!1;var l=e.vote.length;return e.isMultiple?l>=this.min()&&l<=this.max():l>0},toggleStatus:function(){var t=this,e=this.state,l=this.attrs,o=l.poll,i="closed"===o.get("status");bootbox.confirm(I18n.t(i?"poll.open.confirm":"poll.close.confirm"),I18n.t("no_value"),I18n.t("yes_value"),function(a){if(a){e.loading=!0;var r=i?"open":"closed";(0,n.ajax)("/polls/toggle_status",{type:"PUT",data:{post_id:l.post.get("id"),poll_name:o.get("name"),status:r}}).then(function(){o.set("status",r),t.scheduleRerender()}).catch(function(t){t?(0,s.popupAjaxError)(t):bootbox.alert(I18n.t("poll.error_while_toggling_status"))}).finally(function(){e.loading=!1})}})},toggleResults:function(){this.state.showResults=!this.state.showResults},showLogin:function(){this.register.lookup("route:application").send("showLogin")},toggleOption:function(t){if(!this.isClosed()){this.currentUser||this.showLogin();var e=this.attrs,l=e.vote,o=l.indexOf(t.id);return e.isMultiple||(l.length=0),-1!==o?l.splice(o,1):l.push(t.id),e.isMultiple?void 0:this.castVotes()}},castVotes:function(){if(this.canCastVotes()){if(!this.currentUser)return this.showLogin();var t=this.attrs,e=this.state;return e.loading=!0,(0,n.ajax)("/polls/vote",{type:"PUT",data:{post_id:t.post.id,poll_name:t.poll.name,options:t.vote}}).then(function(){e.showResults=!0}).catch(function(t){t?(0,s.popupAjaxError)(t):bootbox.alert(I18n.t("poll.error_while_casting_votes"))}).finally(function(){e.loading=!1})}}})}),define("discourse/plugins/poll/lib/discourse-markdown/poll",["exports"],function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,l=Array(t.length);e<t.length;e++)l[e]=t[e];return l}return Array.from(t)}function l(t,e,l){(isNaN(e)||e<1)&&(e=1),(isNaN(l)||l>t)&&(l=t);var o=void 0;return l>0&&(e===l?e>1&&(o=I18n.t("poll.multiple.help.x_options",{count:e})):e>1?o=l<t?I18n.t("poll.multiple.help.between_min_and_max_options",{min:e,max:l}):I18n.t("poll.multiple.help.at_least_min_options",{count:e}):l<=t&&(o=I18n.t("poll.multiple.help.up_to_max_options",{count:l}))),o}function o(t,l,o){var i=t.indexOf(l),n=t[i].level;for(t.splice.apply(t,[i,1].concat(e(o))),o[0].map=l.map;i<t.length;i++){var s=t[i].nesting;s<0&&n--,t[i].level=n,s>0&&n++}}function i(t,e){for(var l=t.length-1,o=[],i=[];t[l]!==e;l--){if(0===l)return;var n=t[l];if(0===n.level&&"ol"!==n.tag&&"ul"!==n.tag)return;if(1===n.level&&1===n.nesting){if("li"!==n.tag)return;o.push([n,i.reverse().join(" ")])}1===n.level&&1===n.nesting&&"li"===n.tag?i=[]:"text"!==n.type&&"inline"!==n.type||i.push(n.content)}return o.reverse()}function n(t,e){t.push("text","",0).content="[/"+e+"]"}function s(t){t.registerOptions(function(t,e){t.features.poll=!!e.poll_enabled,t.pollMaximumOptions=e.poll_maximum_options}),t.registerPlugin(function(t){t.block.bbcode.ruler.push("poll",x)})}function a(t){t.whiteList(["div.poll","div.poll-info","div.poll-container","div.poll-buttons","div[data-*]","span.info-number","span.info-text","a.button.cast-votes","a.button.toggle-results","li[data-*]"]),s(t)}function r(t,e){var l=t[0],o=t[1],i=t[2],n=t[3];l=p(l,o,i,n,e[0],7,-680876936),n=p(n,l,o,i,e[1],12,-389564586),i=p(i,n,l,o,e[2],17,606105819),o=p(o,i,n,l,e[3],22,-1044525330),l=p(l,o,i,n,e[4],7,-176418897),n=p(n,l,o,i,e[5],12,1200080426),i=p(i,n,l,o,e[6],17,-1473231341),o=p(o,i,n,l,e[7],22,-45705983),l=p(l,o,i,n,e[8],7,1770035416),n=p(n,l,o,i,e[9],12,-1958414417),i=p(i,n,l,o,e[10],17,-42063),o=p(o,i,n,l,e[11],22,-1990404162),l=p(l,o,i,n,e[12],7,1804603682),n=p(n,l,o,i,e[13],12,-40341101),i=p(i,n,l,o,e[14],17,-1502002290),o=p(o,i,n,l,e[15],22,1236535329),l=c(l,o,i,n,e[1],5,-165796510),n=c(n,l,o,i,e[6],9,-1069501632),i=c(i,n,l,o,e[11],14,643717713),o=c(o,i,n,l,e[0],20,-373897302),l=c(l,o,i,n,e[5],5,-701558691),n=c(n,l,o,i,e[10],9,38016083),i=c(i,n,l,o,e[15],14,-660478335),o=c(o,i,n,l,e[4],20,-405537848),l=c(l,o,i,n,e[9],5,568446438),n=c(n,l,o,i,e[14],9,-1019803690),i=c(i,n,l,o,e[3],14,-187363961),o=c(o,i,n,l,e[8],20,1163531501),l=c(l,o,i,n,e[13],5,-1444681467),n=c(n,l,o,i,e[2],9,-51403784),i=c(i,n,l,o,e[7],14,1735328473),o=c(o,i,n,l,e[12],20,-1926607734),l=d(l,o,i,n,e[5],4,-378558),n=d(n,l,o,i,e[8],11,-2022574463),i=d(i,n,l,o,e[11],16,1839030562),o=d(o,i,n,l,e[14],23,-35309556),l=d(l,o,i,n,e[1],4,-1530992060),n=d(n,l,o,i,e[4],11,1272893353),i=d(i,n,l,o,e[7],16,-155497632),o=d(o,i,n,l,e[10],23,-1094730640),l=d(l,o,i,n,e[13],4,681279174),n=d(n,l,o,i,e[0],11,-358537222),i=d(i,n,l,o,e[3],16,-722521979),o=d(o,i,n,l,e[6],23,76029189),l=d(l,o,i,n,e[9],4,-640364487),n=d(n,l,o,i,e[12],11,-421815835),i=d(i,n,l,o,e[15],16,530742520),o=d(o,i,n,l,e[2],23,-995338651),l=f(l,o,i,n,e[0],6,-198630844),n=f(n,l,o,i,e[7],10,1126891415),i=f(i,n,l,o,e[14],15,-1416354905),o=f(o,i,n,l,e[5],21,-57434055),l=f(l,o,i,n,e[12],6,1700485571),n=f(n,l,o,i,e[3],10,-1894986606),i=f(i,n,l,o,e[10],15,-1051523),o=f(o,i,n,l,e[1],21,-2054922799),l=f(l,o,i,n,e[8],6,1873313359),n=f(n,l,o,i,e[15],10,-30611744),i=f(i,n,l,o,e[6],15,-1560198380),o=f(o,i,n,l,e[13],21,1309151649),l=f(l,o,i,n,e[4],6,-145523070),n=f(n,l,o,i,e[11],10,-1120210379),i=f(i,n,l,o,e[2],15,718787259),o=f(o,i,n,l,e[9],21,-343485551),t[0]=v(l,t[0]),t[1]=v(o,t[1]),t[2]=v(i,t[2]),t[3]=v(n,t[3])}function u(t,e,l,o,i,n){return e=v(v(e,t),v(o,n)),v(e<<i|e>>>32-i,l)}function p(t,e,l,o,i,n,s){return u(e&l|~e&o,t,e,i,n,s)}function c(t,e,l,o,i,n,s){return u(e&o|l&~o,t,e,i,n,s)}function d(t,e,l,o,i,n,s){return u(e^l^o,t,e,i,n,s)}function f(t,e,l,o,i,n,s){return u(l^(e|~o),t,e,i,n,s)}function h(t){/[\x80-\xFF]/.test(t)&&(t=unescape(encodeURI(t)));var e,l=t.length,o=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=t.length;e+=64)r(o,m(t.substring(e-64,e)));t=t.substring(e-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(r(o,i),e=0;e<16;e++)i[e]=0;return i[14]=8*l,r(o,i),o}function m(t){var e,l=[];for(e=0;e<64;e+=4)l[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return l}function b(t){for(var e="",l=0;l<4;l++)e+=w[t>>8*l+4&15]+w[t>>8*l&15];return e}function g(t){for(var e=0;e<t.length;e++)t[e]=b(t[e]);return t.join("")}function v(t,e){return t+e&4294967295}function _(t){return g(h(t))}Object.defineProperty(t,"__esModule",{value:!0}),t.setup=a;var y=["type","name","min","max","step","order","status","public"],x={tag:"poll",before:function(t,e,l){var o=t.push("text","",0);o.content=l,o.bbcode_attrs=e.attrs,o.bbcode_type="poll_open"},after:function(t,e,s){var a=i(t.tokens,e);if(!a)return n(t,s);var r=e.bbcode_attrs,u=[["class","poll"]];r.status||u.push(["data-poll-status","open"]),y.forEach(function(t){r[t]&&u.push(["data-poll-"+t,r[t]])}),r.name||u.push(["data-poll-name","poll"]);var p=parseInt(r.min,10),c=parseInt(r.max,10),d=parseInt(r.step,10);d<1&&(d=1);var f=[],h=new t.Token("poll_open","div",1);if(h.block=!0,h.attrs=u,f.push(h),h=new t.Token("poll_open","div",1),h.block=!0,f.push(h),h=new t.Token("poll_open","div",1),h.attrs=[["class","poll-container"]],f.push(h),"number"===r.type){if(isNaN(p)&&(p=1),isNaN(c)&&(c=t.md.options.discourse.pollMaximumOptions),isNaN(d)&&(d=1),a.length>0)return n(t,s);h=new t.Token("bullet_list_open","ul",1),f.push(h);for(var m=p;m<=c;m+=d)h=new t.Token("list_item_open","li",1),a.push([h,String(m)]),f.push(h),h=new t.Token("text","",0),h.content=String(m),f.push(h),h=new t.Token("list_item_close","li",-1),f.push(h);h=new t.Token("bullet_item_close","",-1),f.push(h)}for(var b=0;b<a.length;b++){h=a[b][0];var g=a[b][1];h.attrs=h.attrs||[];var v=_(JSON.stringify([g]));h.attrs.push(["data-poll-option-id",v])}if(o(t.tokens,e,f),t.level=t.tokens[t.tokens.length-1].level,t.push("poll_close","div",-1),h=t.push("poll_open","div",1),h.attrs=[["class","poll-info"]],t.push("paragraph_open","p",1),h=t.push("span_open","span",1),h.block=!1,h.attrs=[["class","info-number"]],h=t.push("text","",0),h.content="0",t.push("span_close","span",-1),h=t.push("span_open","span",1),h.block=!1,h.attrs=[["class","info-text"]],h=t.push("text","",0),h.content=I18n.t("poll.voters",{count:0}),t.push("span_close","span",-1),t.push("paragraph_close","p",-1),"multiple"===u["data-poll-type"]){var x=l(a.length,p,c);x&&(t.push("paragraph_open","p",1),h=t.push("html_inline","",0),h.content=x,t.push("paragraph_close","p",-1))}"true"===u["data-poll-public"]&&(t.push("paragraph_open","p",1),h=t.push("text","",0),h.content=I18n.t("poll.public.title"),t.push("paragraph_close","p",-1)),t.push("poll_close","div",-1),t.push("poll_close","div",-1),h=t.push("poll_open","div",1),h.attrs=[["class","poll-buttons"]],"multiple"===u["data-poll-type"]&&(h=t.push("link_open","a",1),h.block=!1,h.attrs=[["class","button cast-votes"],["title",I18n.t("poll.cast-votes.title")]],h=t.push("text","",0),h.content=I18n.t("poll.cast-votes.label"),t.push("link_close","a",-1)),h=t.push("link_open","a",1),h.block=!1,h.attrs=[["class","button toggle-results"],["title",I18n.t("poll.show-results.title")]],h=t.push("text","",0),h.content=I18n.t("poll.show-results.label"),t.push("link_close","a",-1),t.push("poll_close","div",-1),t.push("poll_close","div",-1)}},w="0123456789abcdef".split("")}),define("discourse/plugins/poll/lib/even-round",["exports"],function(t){"use strict";function e(t){return 100===t.map(function(t){return Math.floor(t)}).reduce(function(t,e){return t+e})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){for(var l=t.map(function(t){return t%1}),o=Math.ceil(l.reduce(function(t,e){return t+e})),i=0,n=l.length;i<o&&i<n;i++){for(var s=0,a=0,r=0;r<l.length;r++)l[r]>s&&(a=r,s=l[r]);if(++t[a],l[a]=0,e(t))break}return t.map(function(t){return Math.floor(t)})}}),define("discourse/plugins/poll/controllers/poll-ui-builder",["exports","ember-addons/ember-computed-decorators","discourse/models/input-validation"],function(t,e,l){"use strict";function o(t,e,l,o,i){var n={};return Object.keys(o).forEach(function(t){n[t]=o[t]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=l.slice().reverse().reduce(function(l,o){return o(t,e,l)||l},n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}Object.defineProperty(t,"__esModule",{value:!0});var i,n,s,a,r,u,p,c,d,f,h,m,b,g,v,y;t.default=Ember.Controller.extend((i=(0,e.default)("regularPollType","numberPollType","multiplePollType"),n=(0,e.default)("pollType","regularPollType"),s=(0,e.default)("pollType","pollOptionsCount","multiplePollType"),a=(0,e.default)("pollType","numberPollType"),r=(0,e.default)("isRegular"),u=(0,e.default)("pollOptions"),p=(0,e.observes)("isMultiple","isNumber","pollOptionsCount"),c=(0,e.default)("isRegular","isMultiple","isNumber","pollOptionsCount"),d=(0,e.default)("isRegular","isMultiple","isNumber","pollOptionsCount","pollMin","pollStep"),f=(0,e.default)("isNumber","pollMax"),h=(0,e.default)("isNumber","showMinMax","pollType","publicPoll","pollOptions","pollMin","pollMax","pollStep"),m=(0,e.default)("pollOptionsCount","isRegular","isMultiple","isNumber","pollMin","pollMax"),b=(0,e.default)("pollMin","pollMax"),g=(0,e.default)("pollStep"),v=(0,e.default)("disableInsert"),y={regularPollType:"regular",numberPollType:"number",multiplePollType:"multiple",init:function(){this._super(),this._setupPoll()},pollTypes:function(t,e,l){var o=[];return o.push({name:I18n.t("poll.ui_builder.poll_type.regular"),value:t}),o.push({name:I18n.t("poll.ui_builder.poll_type.number"),value:e}),o.push({name:I18n.t("poll.ui_builder.poll_type.multiple"),value:l}),o},isRegular:function(t,e){return t===e},isMultiple:function(t,e,l){return t===l&&e>0},isNumber:function(t,e){return t===e},showMinMax:function(t){return!t},pollOptionsCount:function(t){if(0===t.length)return 0;var e=0;return t.split("\n").forEach(function(t){0!==t.length&&(e+=1)}),e},_setPollMax:function(){var t=this.get("isMultiple"),e=this.get("isNumber");(t||e)&&(t?this.set("pollMax",this.get("pollOptionsCount")):e&&this.set("pollMax",this.siteSettings.poll_maximum_options))},pollMinOptions:function(t,e,l,o){if(!t)return e?this._comboboxOptions(1,o+1):l?this._comboboxOptions(1,this.siteSettings.poll_maximum_options+1):void 0},pollMaxOptions:function(t,e,l,o,i,n){if(!t){var s=parseInt(i)||1;if(e)return this._comboboxOptions(s+1,o+1);if(l){var a=parseInt(n,10);return a<1&&(a=1),this._comboboxOptions(s+1,s+this.siteSettings.poll_maximum_options*a)}}},pollStepOptions:function(t,e){if(t)return this._comboboxOptions(1,(parseInt(e)||1)+1)},pollOutput:function(t,e,l,o,i,n,s,a){var r="[poll",u="",p=this.get("toolbarEvent").getText().match(/\[poll(\s+name=[^\s\]]+)*.*\]/gim);p&&(r+=" name=poll"+(p.length+1));var c=a;return c<1&&(c=1),l&&(r+=" type="+l),n&&e&&(r+=" min="+n),s&&(r+=" max="+s),t&&(r+=" step="+c),o&&(r+=" public=true"),r+="]",u+=r+"\n",i.length>0&&!t&&i.split("\n").forEach(function(t){0!==t.length&&(u+="* "+t+"\n")}),u+="[/poll]"},disableInsert:function(t,e,l,o,i,n){return e&&t<2||l&&t<i&&i>=n||!o&&t<2},minMaxValueValidation:function(t,e){var o={ok:!0};return t>=e&&(o={failed:!0,reason:I18n.t("poll.ui_builder.help.invalid_values")}),l.default.create(o)},minStepValueValidation:function(t){var e={ok:!0};return t<1&&(e={failed:!0,reason:I18n.t("poll.ui_builder.help.min_step_value")}),l.default.create(e)},minNumOfOptionsValidation:function(t){var e={ok:!0};return t&&(e={failed:!0,reason:I18n.t("poll.ui_builder.help.options_count")}),l.default.create(e)},_comboboxOptions:function(t,e){return _.range(t,e).map(function(t){return{value:t,name:t}})},_setupPoll:function(){this.setProperties({pollType:null,publicPoll:!1,pollOptions:"",pollMin:1,pollMax:null,pollStep:1})},actions:{insertPoll:function(){this.get("toolbarEvent").addText(this.get("pollOutput")),this.send("closeModal"),this._setupPoll()}}},o(y,"pollTypes",[i],Object.getOwnPropertyDescriptor(y,"pollTypes"),y),o(y,"isRegular",[n],Object.getOwnPropertyDescriptor(y,"isRegular"),y),o(y,"isMultiple",[s],Object.getOwnPropertyDescriptor(y,"isMultiple"),y),o(y,"isNumber",[a],Object.getOwnPropertyDescriptor(y,"isNumber"),y),o(y,"showMinMax",[r],Object.getOwnPropertyDescriptor(y,"showMinMax"),y),o(y,"pollOptionsCount",[u],Object.getOwnPropertyDescriptor(y,"pollOptionsCount"),y),o(y,"_setPollMax",[p],Object.getOwnPropertyDescriptor(y,"_setPollMax"),y),o(y,"pollMinOptions",[c],Object.getOwnPropertyDescriptor(y,"pollMinOptions"),y),o(y,"pollMaxOptions",[d],Object.getOwnPropertyDescriptor(y,"pollMaxOptions"),y),o(y,"pollStepOptions",[f],Object.getOwnPropertyDescriptor(y,"pollStepOptions"),y),o(y,"pollOutput",[h],Object.getOwnPropertyDescriptor(y,"pollOutput"),y),o(y,"disableInsert",[m],Object.getOwnPropertyDescriptor(y,"disableInsert"),y),o(y,"minMaxValueValidation",[b],Object.getOwnPropertyDescriptor(y,"minMaxValueValidation"),y),o(y,"minStepValueValidation",[g],Object.getOwnPropertyDescriptor(y,"minStepValueValidation"),y),o(y,"minNumOfOptionsValidation",[v],Object.getOwnPropertyDescriptor(y,"minNumOfOptionsValidation"),y),y))}),Ember.TEMPLATES["javascripts/modal/poll-ui-builder"]=Ember.HTMLBars.template({id:null,
block:'{"statements":[[6,["d-modal-body"],null,[["title","class"],["poll.ui_builder.title","poll-ui-builder"]],{"statements":[[0,"  "],[11,"form",[]],[15,"class","poll-ui-builder-form form-horizontal"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n      "],[11,"label",[]],[15,"class","input-group-label"],[13],[1,[33,["i18n"],["poll.ui_builder.poll_type.label"],null],false],[14],[0,"\\n      "],[1,[33,["combo-box"],null,[["content","value","valueAttribute"],[[28,["pollTypes"]],[28,["pollType"]],"value"]]],false],[0,"\\n    "],[14],[0,"\\n\\n"],[6,["if"],[[28,["showMinMax"]]],null,{"statements":[[0,"      "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n        "],[11,"label",[]],[15,"class","input-group-label"],[13],[1,[33,["i18n"],["poll.ui_builder.poll_config.min"],null],false],[14],[0,"\\n        "],[1,[33,["input"],null,[["type","value","valueAttribute","class"],["number",[28,["pollMin"]],"value","poll-options-min"]]],false],[0,"\\n        "],[1,[33,["input-tip"],null,[["validation"],[[28,["minMaxValueValidation"]]]]],false],[0,"\\n      "],[14],[0,"\\n\\n\\n      "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n        "],[11,"label",[]],[15,"class","input-group-label"],[13],[1,[33,["i18n"],["poll.ui_builder.poll_config.max"],null],false],[14],[0,"\\n        "],[1,[33,["input"],null,[["type","value","valueAttribute","class"],["number",[28,["pollMax"]],"value","poll-options-max"]]],false],[0,"\\n      "],[14],[0,"\\n\\n"],[6,["if"],[[28,["isNumber"]]],null,{"statements":[[0,"        "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n          "],[11,"label",[]],[15,"class","input-group-label"],[13],[1,[33,["i18n"],["poll.ui_builder.poll_config.step"],null],false],[14],[0,"\\n          "],[1,[33,["input"],null,[["type","value","valueAttribute","min","class"],["number",[28,["pollStep"]],"value","1","poll-options-step"]]],false],[0,"\\n          "],[1,[33,["input-tip"],null,[["validation"],[[28,["minStepValueValidation"]]]]],false],[0,"\\n        "],[14],[0,"\\n"]],"locals":[]},null]],"locals":[]},null],[0,"\\n    "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n      "],[11,"label",[]],[13],[0,"\\n        "],[1,[33,["input"],null,[["type","checked"],["checkbox",[28,["publicPoll"]]]]],false],[0,"\\n        "],[1,[33,["i18n"],["poll.ui_builder.poll_public.label"],null],false],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n\\n"],[6,["unless"],[[28,["isNumber"]]],null,{"statements":[[0,"      "],[11,"div",[]],[15,"class","input-group"],[13],[0,"\\n        "],[11,"label",[]],[13],[1,[33,["i18n"],["poll.ui_builder.poll_options.label"],null],false],[14],[0,"\\n        "],[1,[33,["input-tip"],null,[["validation"],[[28,["minNumOfOptionsValidation"]]]]],false],[0,"\\n        "],[1,[33,["textarea"],null,[["value"],[[28,["pollOptions"]]]]],false],[0,"\\n      "],[14],[0,"\\n"]],"locals":[]},null],[0,"  "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n"],[11,"div",[]],[15,"class","modal-footer"],[13],[0,"\\n  "],[1,[33,["d-button"],null,[["action","icon","class","label","disabled"],["insertPoll","bar-chart-o","btn-primary","poll.ui_builder.insert",[28,["disableInsert"]]]]],false],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/modal/poll-ui-builder"}}),define("discourse/plugins/poll/initializers/extend-for-poll",["exports","discourse/lib/plugin-api","ember-addons/ember-computed-decorators","discourse-common/lib/get-owner","discourse/widgets/glue"],function(t,e,l,o,i){"use strict";function n(t,e,l,o,i){var n={};return Object.keys(o).forEach(function(t){n[t]=o[t]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=l.slice().reverse().reduce(function(l,o){return o(t,e,l)||l},n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}function s(t){function e(e,l){var o=$(".poll",e);if(o.length){var n=l.getModel();t.preventCloak(n.id);var s=n.get("polls_votes")||{};n.pollsChanged();var a=n.get("pollsObject");a&&o.each(function(t,e){var l=$(e),o=l.data("poll-name"),r=a[o];if(r){var c="multiple"===r.get("type"),d=new i.default("discourse-poll",u,{id:o+"-"+n.id,post:n,poll:r,vote:s[o]||[],isMultiple:c});d.appendTo(e),p.push(d)}})}}function s(){p.forEach(function(t){return t.cleanUp()})}var a,r,u=(0,o.getRegister)(t);t.modifyClass("controller:topic",{subscribe:function(){var t=this;this._super(),this.messageBus.subscribe("/polls/"+this.get("model.id"),function(e){var l=t.get("model.postStream").findLoadedPost(e.post_id);l&&l.set("polls",e.polls)})},unsubscribe:function(){this.messageBus.unsubscribe("/polls/*"),this._super()}}),t.modifyClass("model:post",(a=(0,l.observes)("polls"),r={_polls:null,pollsObject:null,pollsChanged:function(){var t=this,e=this.get("polls");e&&(this._polls=this._polls||{},_.map(e,function(e,l){t._polls[l]?t._polls[l].setProperties(e):t._polls[l]=Em.Object.create(e)}),this.set("pollsObject",this._polls),p.forEach(function(t){return t.queueRerender()}))}},n(r,"pollsChanged",[a],Object.getOwnPropertyDescriptor(r,"pollsChanged"),r),r));var p=[];t.includePostAttributes("polls","polls_votes"),t.decorateCooked(e,{onlyStream:!0}),t.cleanupStream(s)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"extend-for-poll",initialize:function(){(0,e.withPluginApi)("0.8.7",s)}}}),define("discourse/plugins/poll/initializers/add-poll-ui-builder",["exports","discourse/lib/plugin-api","ember-addons/ember-computed-decorators","discourse/lib/show-modal"],function(t,e,l,o){"use strict";function i(t,e,l,o,i){var n={};return Object.keys(o).forEach(function(t){n[t]=o[t]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=l.slice().reverse().reduce(function(l,o){return o(t,e,l)||l},n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}function n(t){var e,n;t.modifyClass("controller:composer",(e=(0,l.default)("siteSettings.poll_enabled","siteSettings.poll_minimum_trust_level_to_create","siteSettings.poll_allow_staff_to_create"),n={canBuildPoll:function(t,e,l){return t&&this.currentUser&&(this.currentUser.admin||this.currentUser.staff&&l||this.currentUser.trust_level>=e)},actions:{showPollBuilder:function(){(0,o.default)("poll-ui-builder").set("toolbarEvent",this.get("toolbarEvent"))}}},i(n,"canBuildPoll",[e],Object.getOwnPropertyDescriptor(n,"canBuildPoll"),n),n)),t.addToolbarPopupMenuOptionsCallback(function(){return{action:"showPollBuilder",icon:"bar-chart-o",label:"poll.ui_builder.title",condition:"canBuildPoll"}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"add-poll-ui-builder",initialize:function(){(0,e.withPluginApi)("0.8.7",n)}}});
//# sourceMappingURL=/assets/plugin-2308884659fce80698443cd43fed0d1c830214593f872a907cecb616596d17b0.js.map