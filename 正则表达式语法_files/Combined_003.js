epx=window.epx||{};epx.printExportButton=function(){function init(){epx.utilities&&epx.utilities.supportsHtml5()&&($pabLink=$("#isd_printABook"),$toolbar=$("#exportToolBar"),$pabLink.click(pabLinkClicked),$toolbar.length>0&&$toolbar.is(":visible")&&($pabLink.addClass("exportToolBarShown"),$pabLink.css("cursor","text")),refreshExportCount(),$pabLink.show())}function pabLinkClicked(event){if($toolbar.length>0&&$toolbar.is(":visible")){event.preventDefault();return}getTopicCount()>0&&(window.epx.utilities.setCookie("ShowPrintToolBar","true",365,"/"),location.reload(!0),event.preventDefault())}function getTopicCount(){var topicsCount=0,book,c,t;if(typeof localStorage.book!="undefined"){book=JSON.parse(localStorage.book);for(c in book.Chapters)for(t in book.Chapters[c].Topics)if(topicsCount=topicsCount+book.Chapters[c].Topics[t].Count,book.Chapters[c].Topics[t].Count<=0||book.Chapters[c].Topics[t].Type==="node"&&book.Chapters[c].Topics[t].Count===1||book.Chapters[c].Topics[t].Type==="topic"&&book.Chapters[c].Topics[t].Count!==1||book.Chapters[c].Topics[t].Type!=="topic"&&book.Chapters[c].Topics[t].Type!=="node")return 0}return topicsCount}function refreshExportCount(count){localStorage.book&&(count||(count=getTopicCount()),$pabLink.find(".count").text(count))}function removeExportBorder(){$pabLink.removeClass("exportToolBarShown");$pabLink.css("cursor","pointer")}var $pabLink,$toolbar;return{init:init,refreshExportCount:refreshExportCount,removeExportBorder:removeExportBorder}}();$(document).ready(function(){epx.printExportButton.init()});;
epx=window.epx||{};epx.library=window.epx.library||{};epx.library.toc=function(){function init(){setPadding();$("#tocnav > div").each(function(){initNode($(this))});updateIfHighContrastMode();$("#tocnav a.toc_collapsed").live("click",function(){function addNodesAfter($predecessor,nodes,startIndex,endIndex,$startingDiv){var existingLinks={},startExpandingLevel=getLevel($startingDiv),$dNextAll=$div.nextAll(),searchIndex,$dNext,dLevel,dhref,i,nodeHasChildren,childCountId,$node;if($dNextAll&&$dNextAll.length>0)for(searchIndex=0;searchIndex<$dNextAll.length;searchIndex++)$dNext=$($dNextAll[searchIndex]),dLevel=getLevel($dNext),dLevel===startExpandingLevel+1&&(dhref=$dNext.children("a").last().attr("href").toLowerCase(),existingLinks[dhref]=1);for(i=startIndex;i>=endIndex;i--)(nodeHasChildren=!1,childCountId=null,existingLinks.hasOwnProperty(nodes[i].Href.toLowerCase()))||(nodes[i].ExtendedAttributes&&(nodes[i].ExtendedAttributes[hasSubTreeAttr]&&(nodeHasChildren=nodes[i].ExtendedAttributes[hasSubTreeAttr]==="true"),nodes[i].ExtendedAttributes["data-childCountId"]&&(childCountId=nodes[i].ExtendedAttributes["data-childCountId"],window.MTPS&&window.MTPS.TopicNodes&&(window.MTPS.TopicNodes[childCountId]=nodes[i].ExtendedAttributes["data-childCount"]))),$node=$(buildNode(nodes[i].Href,nodes[i].Title,level+1,!1,nodeHasChildren,childCountId)),nodes[i].Href===currentHref&&$node.addClass("current"),$predecessor.after($node),window.MTPS&&window.MTPS.Export&&window.MTPS.Export.initViaLink&&window.MTPS.Export.initViaLink($predecessor.next().find("a")));updateIfHighContrastMode();epx.library.tocFixed!=undefined&&epx.library.tocFixed!=null&&epx.library.tocFixed.setPosition()}var $chevron=$(this),$div=$chevron.parent(),level=getLevel($div),href;return $div.attr(childrenLoadedAttr)==="true"?(window.epx.utilities.log("Child nodes already loaded"),$div.nextUntil("div["+levelAttr+'="'+level+'"]').filter("div["+levelAttr+'="'+(level+1)+'"]').show(),epx.library.tocFixed!=undefined&&epx.library.tocFixed!=null&&epx.library.tocFixed.setPosition(),$chevron.attr("class","toc_expanded"),!1):(window.epx.utilities.log("Loading TOC nodes"),href=buildTocHref($chevron.siblings().first().attr("href")),href==undefined||href==null)?!1:($.ajax({type:"GET",async:!0,url:href,dataType:"json",success:function(r){var nodesInserted,$next,$nextLink,nextHref,i,newLevel,$lastSibling;if(!r||r.length<1){window.epx.utilities.log("TOC web service returned 0 nodes.");return}if(window.epx.utilities.log("TOC web service returned "+r.length+" node(s), processing..."),nodesInserted=!1,$next=$div.next(),$next&&($nextLink=$next.children().last(),$nextLink))for(nextHref=$nextLink.attr("href"),i=r.length-1;i>=0;i--)if(window.epx.utilities.endsWith(nextHref,r[i].Href)||window.epx.utilities.endsWith(r[i].Href,nextHref)){for(var paddedAncestors=0,startLevel=parseInt($next.attr(levelAttr)),nextLevel=null;;){if(nextLevel===null){if(nextLevel=startLevel,nextLevel===level+1)break}else if(nextLevel=getLevel($next),nextLevel!==0&&nextLevel<=startLevel)break;if(nextLevel===0&&paddedAncestors++,newLevel=nextLevel+1*paddedAncestors,$next.attr(levelAttr,newLevel),$next.css("padding-"+paddingSide,newLevel*paddingPerLevel+"px"),$next=$next.next(),!$next||!$next.attr(levelAttr))break}addNodesAfter($div,r,i-1,0,$div);$lastSibling=$div.nextUntil("div["+levelAttr+'="'+level+'"]').last();$lastSibling||($lastSibling=$div.siblings().last());addNodesAfter($lastSibling,r,r.length-1,i+1,$div);nodesInserted=!0;break}nodesInserted===!1&&addNodesAfter($div,r,r.length-1,0,$div)}}),$div.attr(childrenLoadedAttr,"true"),$chevron.attr("class","toc_expanded"),!1)});$("#tocnav a.toc_expanded").live("click",function(){return expandClick($(this))})}function initNode($div){var $link=$div.children().last(),level=getLevel($div),current=isCurrent($div),children=hasChildren($div),expanded=children&&current,chevron;expanded===!0&&$div.attr(childrenLoadedAttr,"true");$div.css("padding-"+paddingSide,level*paddingPerLevel+"px");current===!0&&(currentHref=$div.children("a").last().attr("href"));chevron=buildChevron(expanded,children);$link.before(chevron);current===!0&&children===!1&&updateParentChevronForLeafNode($div,level)}function updateParentChevronForLeafNode($div,level){var $parent=$div.parent().children("div["+levelAttr+'="'+(level-1)+'"]').last(),parentChevron=buildChevron(!0,!0);$parent.children().length>0&&($parent.children().first().replaceWith(parentChevron),$parent.attr(childrenLoadedAttr,"true"))}function updateIfHighContrastMode(){function updateForHighContrastMode($element,html){$element.html(html).css({width:"auto",height:"auto","margin-top":"0px"})}var $firstChevron=$("a.toc_expanded:first"),$banner;if($firstChevron){switch($firstChevron.css("background-image")){case"":case"none":break;default:return}$("a.toc_expanded").each(function(){updateForHighContrastMode($(this),"-")});$("a.toc_collapsed").each(function(){updateForHighContrastMode($(this),"+")});$("span.toc_empty").each(function(){updateForHighContrastMode($(this),"●")});$banner=$("#tn_header > div.upperBand > a:first");$banner&&$banner.html($banner.attr("title"))}}function expandClick($chevron){var $div=$chevron.parent(),expandingLevel=getLevel($div),$nextAll=$div.nextAll(),i,$next,level;if($nextAll&&$nextAll.length>0)for(i=0;i<$nextAll.length;i++)if($next=$($nextAll[i]),level=getLevel($next),level===expandingLevel+1)$next.hide().removeAttr(childrenLoadedAttr).children("a.toc_expanded").attr("class","toc_collapsed");else if(level>expandingLevel+1)$next.remove();else break;return $chevron.attr("class","toc_collapsed"),!1}function buildTocHref(baseHref){return baseHref==undefined||baseHref==null?null:baseHref.indexOf("?")===-1?baseHref+"?toc=1":baseHref+"&toc=1"}function buildChevron(expanded,children){var cssClass="toc_empty";return children===!0?(cssClass=expanded===!0?"toc_expanded":"toc_collapsed",chevronFormat.replace("{class}",cssClass)):emptyFormat.replace("{class}",cssClass)}function buildNode(href,title,level,expanded,children,childCountId){var isHrefEmpty=href==null||href==undefined,chevron=buildChevron(expanded,isHrefEmpty?!1:children),nodeTagString;return isHrefEmpty?nodeTagString=nodeSpanTagFormat:(nodeTagString=nodeATagFormat.replace("{href}",href),nodeTagString=nodeTagString.replace("{childCountIdAttribute}",childCountId!=null?'id="'+childCountId+'" ':"")),nodeFormat.replace("{level}",level).replace("{paddingSide}",paddingSide).replace("{padding}",level*paddingPerLevel).replace("{chevron}",chevron).replace("{nodeTag}",nodeTagString.replace(/{text}/gi,window.epx.utilities.htmlEncode(title)))}function getChevron($div){return $div.children().first()}function getLevel($div){return parseInt($div.attr(levelAttr))}function isCurrent($div){return $div.hasClass("current")}function hasChildren($div){return getChevron($div).attr(hasSubTreeAttr)==="true"}function setPadding(){paddingSide=$("html").attr("dir")==="rtl"?"right":"left";var padding=$("#tocPaddingPerLevel").val();padding&&(paddingPerLevel=padding)}var levelAttr="data-toclevel",childrenLoadedAttr="data-childrenloaded",hasSubTreeAttr="data-tochassubtree",chevronFormat='<a class="{class}" href="#" />',emptyFormat='<span class="{class}" />',nodeFormat="<div "+levelAttr+'="{level}" style="padding-{paddingSide}: {padding}px;">{chevron}{nodeTag}<\/div>',nodeATagFormat='<a {childCountIdAttribute}href="{href}" title="{text}">{text}<\/a>',nodeSpanTagFormat='<span class="emptyHref">{text}<\/span>',paddingSide="left",paddingPerLevel=13,currentHref="";return{init:init,initNode:initNode,expandClick:expandClick,buildTocHref:buildTocHref,buildChevron:buildChevron,buildNode:buildNode,getChevron:getChevron,getLevel:getLevel,isCurrent:isCurrent,hasChildren:hasChildren}}();$(document).ready(function(){epx.library.toc.init()});;
epx=window.epx||{};epx.library=window.epx.library||{};epx.library.navigationResizeModule=function(){function init(){epx.topic&&epx.topic.isPrintExperience()===!0||($leftNav=$("#leftNav"),$link=$("#NavigationResize"),$increase=$("#NavigationResize > img.cl_nav_resize_open"),$reset=$("#NavigationResize > img.cl_nav_resize_close"),$content=$("#content"),epx.utilities&&(position=epx.utilities.getCookie("TocPosition",position),normalizedPostion()),setPosition(),$link.keydown(function(e){checkForTPressed(e)}),$link.click(function(){resize()}),$("html").attr("dir")=="rtl"&&$("#toc-resizable-ew").addClass("rtl"),$leftNav.css("max-width",leftNavWidths[maxPosition]+"px"),$("#toc-resizable-ew").css("height",$("#content").height()+"px"),$(".toc-resizable-ew").mousedown(function(e){mouseDown(e)}))}function checkForTPressed(evt){if(evt=evt?evt:event?event:null,evt&&evt.keyCode===84){var target=evt.srcElement!=null?evt.srcElement:evt.target;if(target.tagName.toLowerCase()=="input"||target.tagName.toLowerCase()=="textarea"||evt.ctrlKey||evt.altKey)return;resize()}}function resize(){gotoLeftPredefinedPostion();position++;position>maxPosition&&(position=0,$content.css("width",$("#body").css("width")));setPosition()}function setPosition(width){width?($leftNav.css("width",width+"px"),position=width>=leftNavWidths[maxPosition]?maxPosition:width<=maxPosition?0:width):position<=maxPosition?$leftNav.css("width",leftNavWidths[position]+"px"):$leftNav.css("width",position+"px");epx.utilities&&epx.utilities.setCookie("TocPosition",position,365,"/",".microsoft.com",null);$("html").attr("dir")=="rtl"?($content.css("margin-right",$leftNav.css("width")),$.browser.msie?$link.css("left","-"+(parseInt($link.css("width").replace("px",""))+1)+"px"):$link.css("left","-"+$link.css("width")),applyRtlSrc($increase),applyRtlSrc($reset)):($content.css("margin-left",$leftNav.css("width")),$link.css("left",$leftNav.css("width")));$link.css("display","inline-block");$increase.css("display","none");$reset.css("display","none");$content.css("width","auto");window.setTimeout(epx.library.navigationResize.resizeComplete,0)}function applyRtlSrc($element){var src=$element.attr("src"),dotIndex;src.indexOf("_Rtl")==-1&&(dotIndex=src.lastIndexOf("."),$element.attr("src",src.substr(0,dotIndex)+"_Rtl."+src.substr(dotIndex+1,src.length-dotIndex-1)))}function resizeComplete(){$increase.css("display",position==maxPosition?"none":"");$reset.css("display",position!=maxPosition?"none":"")}function mouseMove(e){resizing&&(mouseDelayMet||(mouseDelayTimer=setTimeout(function(){mouseDelayMet=!0},MinMouseDelay)),epx.library.tocFixed&&epx.library.tocFixed.setPosition(),mouseDistanceMet(e)&&mouseDelayMet&&(prevPageX=e.pageX,prevPageY=e.pageY,$("html").attr("dir")=="rtl"?setPosition($leftNav.offset().left+$leftNav.width()-e.pageX):setPosition(e.pageX-$leftNav.offset().left)),e.preventDefault())}function selectStart(e){return!1}function mouseDown(e){$(document).one("mouseup",mouseUp);$(document).on("mousemove",mouseMove);$(document).on("selectstart",selectStart);prevPageX=e.pageX;prevPageY=e.pageY;resizing=!0;e.preventDefault()}function mouseUp(){resizing&&($(document).off("mousemove",mouseMove),$(document).off("selectstart",selectStart),resizing=!1,mouseDelayMet=!1)}function mouseDistanceMet(e){return Math.abs(prevPageX-e.pageX)>=MinMouseDist}function gotoLeftPredefinedPostion(){var currWidth,i;if(!(position<=maxPosition))for(currWidth=position,position=maxPosition,i=1;i<leftNavWidths.length;i++)if(currWidth<=leftNavWidths[i]){position=i-1;break}}function normalizedPostion(){position>=leftNavWidths[maxPosition]&&(position=maxPosition)}var position=1,resizing=!1,leftNavWidths=[0,280,380,480],maxPosition=leftNavWidths.length-1,prevPageX=0,prevPageY=0,mouseDelayMet=!1,mouseDelayTimer,MinMouseDist=15,MinMouseDelay=1,$leftNav,$link,$increase,$reset,$content;return{init:init,resize:resize,resizeComplete:resizeComplete,setPosition:setPosition}};epx.library.navigationResize=epx.library.navigationResizeModule();$(document).ready(function(){epx.library.navigationResize.init()});;
function positionFeedbackCounter(){var counter=document.getElementById("ratingCounter"),versionSelector,ratingCounterSeperator,h1,mainSec,title,i;if(counter){if(document.getElementById("TopicTitle")){counter.style.display="block";return}if(versionSelector=document.getElementById("curversion"),versionSelector){ratingCounterSeperator=document.getElementById("ratingCounterSeperator");ratingCounterSeperator&&(versionSelector.parentNode.appendChild(ratingCounterSeperator),ratingCounterSeperator.style.display="block");counter.style.margin="0px 0px 0px 13px";versionSelector.parentNode.appendChild(counter);counter.style.display="block";return}if(h1=document.getElementsByTagName("h1"),h1&&h1[0]){h1[0].parentNode.insertBefore(counter,h1[0].nextSibling);counter.style.display="block";return}if(document.getElementsByClassName){if(title=document.getElementsByClassName("title"),title&&title.length>0)for(i=0;i<title.length;i++)if(title[i].tagName.toLowerCase()==="span"){title[i].parentNode.insertBefore(counter,title[i].nextSibling);counter.style.display="block";return}}else if(mainSec=document.getElementById("mainSection"),mainSec!=undefined&&mainSec.length>0&&(title=mainSec.getElementsByTagName("span"),title!=undefined&title.length>0))for(i=0;i<title.length;i++)if(title[i].className.toLowerCase()==="title"){title[i].parentNode.insertBefore(counter,title[i].nextSibling);counter.style.display="block";return}counter.style.display="none"}}function toggleRateThisTopic(){var questions=document.getElementById("contentFeedbackQAContainer"),rateThis,prefix;questions||(document.getElementsByClassName?questions=document.getElementsByClassName("feedbackContainer"):document.querySelectorAll&&(questions=document.querySelectorAll(".feedbackContainer")),questions&&questions.length>0)||(rateThis=document.getElementById("rateThisTopic"),rateThis&&(rateThis.style.display="none"),prefix=document.getElementById("rateThisPrefix"),prefix&&(prefix.style.display="none"))}typeof MTPS!="undefined"&&MTPS&&typeof MTPS.Utility!="undefined"&&MTPS.Utility?MTPS.Utility.addOnloadEvent(function(){toggleRateThisTopic();positionFeedbackCounter()}):typeof jQuery!="undefined"&&jQuery&&$(document).ready(function(){toggleRateThisTopic();positionFeedbackCounter()});;
function toggleContentFeedback(yesOrNo){document.getElementById("contentFeedbackQAContainer").style.display="block";var yesContainer=document.getElementById("feedbackListYesContainer"),noContainer=document.getElementById("feedbackListNoContainer");yesOrNo==="Yes"?(document.getElementById("rdIsUsefulYes").checked="checked",yesContainer&&(yesContainer.style.display="block"),noContainer&&(noContainer.style.display="none")):(document.getElementById("rdIsUsefulNo").checked="checked",yesContainer&&(yesContainer.style.display="none"),noContainer&&(noContainer.style.display="block"))}function WatermarkFocus(control,defaultValue,cssValue){control.value==defaultValue&&(control.value="",control.className=cssValue);document.onkeydown=""}function WatermarkBlur(control,defaultValue,cssValue){control.value==""&&(control.value=defaultValue,control.className=cssValue);document.onkeydown=Presskey}function WatermarkOnSubmit(control,defaultValue,cssValue){control.value==defaultValue&&(control.value="",control.className=cssValue)}function Presskey(evt){if(evt=evt?evt:event?event:null,evt&&evt.keyCode==84){var target=evt.srcElement!=null?evt.srcElement:evt.target;if(target.tagName.toLowerCase()=="input"||target.tagName.toLowerCase()=="textarea"||evt.ctrlKey||evt.altKey)return}}function TextBoxCharactersCounter(control,counter,max){control.value.length>max?control.value=control.value.substring(0,max):counter.innerHTML=(max-control.value.length).toString()};
