const links = [
    {
        lable: "Week 1",
        url: "Week 01/index.html"
    }
]

links.forEach( function addPageLink(item){
    document.getElementById("table-of-contents").appendChild(`<li><a href=${item.url}>${item.lable}</a></li>`)   
})
