const links = [
    {
        lable: "Week 1",
        url: "Week 01/index.html"
    }
];

links.forEach( function addPageLink(item){
    var element = document.createElement("li");
    element.innerHTML = `<li><a href=${item.url}>${item.lable}</a></li>`;
    document.getElementById("table-of-contents").appendChild(element);   
});
