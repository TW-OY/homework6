//时间格式优化 如1971.1.2 显示为1971.01.02
function Timeformatadd0(timenumber){
    return timenumber < 10 ? '0' + timenumber : timenumber;
}


function Unixtime2Localtime(unixtimestamp){
    var unixtime = new Date(unixtimestamp * 1000);
    var localtimeYear = unixtime.getFullYear();
    var localtimeMonth = unixtime.getMonth()+1;
    var localtimeDay = unixtime.getDate();
    var localtimeHour = unixtime.getHours();
    var localtimeMin = unixtime.getMinutes();
    var localtimeSecond = unixtime.getSeconds();
    var localtime = localtimeYear + '-' + Timeformatadd0(localtimeMonth) + '-' + Timeformatadd0(localtimeDay) + ' ' + Timeformatadd0(localtimeHour) + ':' + Timeformatadd0(localtimeMin) + ':' + Timeformatadd0(localtimeSecond);
    return localtime;
}


function GenerateHTMLbookmark(bookmarknames, bookmarkgeneratetime){
    var bookmarkhtml = "";
    bookmarkhtml += "<li class='bookmark'>";
    bookmarkhtml += "<p class='bookmarkname'>" + bookmarknames + "</p>";
    bookmarkhtml += "<p class='bookmarkgeneratetime'>" + "Created @ " + bookmarkgeneratetime + "</p>";
    bookmarkhtml += "</li>";
    bookmarkhtml += "<hr class='bookmarkhr'>";
    return bookmarkhtml;
}

function HighlightKeyword(keyword, htmldom){
    var resultHtml = "";
    var keywordindex = htmldom.toLowerCase().indexOf(keyword);
    resultHtml += htmldom.substring(0,keywordindex);
    resultHtml += "<mark>" + htmldom.substring(keywordindex, keywordindex + keyword.length) + "</mark>";
    resultHtml += htmldom.substring(keywordindex + keyword.length);
    return resultHtml;
}

function Filterbookmarks(keyword){
    $.getJSON('data/bookmarks.json', function(data){
        $.each(data, function(infoIndex, info){
            if(info["title"].toLowerCase().indexOf(keyword.toLowerCase()) != -1){
                var bookmarkhtml = GenerateHTMLbookmark(info["title"], Unixtime2Localtime(info["created"]));
                var resulthtml = HighlightKeyword(keyword, bookmarkhtml);
                $('#Jscreatedcontent').append(resulthtml);
            }
        });
    });
}


function Init(){
    $.getJSON('data/bookmarks.json', function(data){
        $.each(data, function(infoIndex, info){
                var bookmarkhtml = GenerateHTMLbookmark(info["title"], Unixtime2Localtime(info["created"]));
                $('#Jscreatedcontent').append(bookmarkhtml);
            });
    });
}

function InputResponse(){
    $('#SearchKeywordinput').on('input', function(){
        $('#Jscreatedcontent').empty();
        keyword = $(this).val();
        Filterbookmarks(keyword);
        return keyword;
    });
}

$(document).ready(function(){
    Init();
    InputResponse();
});

