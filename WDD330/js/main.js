const links = [
    {
        lable: "Week 1",
        url: "Week 01/index.html"
    }
]

links.forEach(addPageLink)
    
function addPageLink(item)
{
    document.getElementById("table-of-contents").innerHTML.concat(
        `<li><a href=${item.url}>${item.lable}</a></li>`)   
}
