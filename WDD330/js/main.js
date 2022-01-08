const links = [
    {
        lable: "Week 1",
        url: "Week 01/index.html"
    }
];

document.getElementById("table-of-contents").appendChild("<p> lskdjfllkdsfjlkdsjflskdfjlskdfjls</p>");

links.forEach( function addPageLink(item){
    document.getElementById("table-of-contents").innerHTML.concat(`<li><a href=${item.url}>${item.lable}</a></li>`);   
});
