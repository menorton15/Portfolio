const links = [
    {
        lable: "Week 1",
        url: "Week01/index.html"
    },
    {
        lable: "Week 2",
        url: "Week02/index.html"
    }
];

links.forEach( function addPageLink(item){
    var element = document.createElement("li");
    element.innerHTML = `<a href=${item.url}>${item.lable}</a>`;
    document.getElementById("table-of-contents").appendChild(element);   
});
