const links = [
    {
        lable: "Week 1",
        url: "Week 01/index.html"
    }
]

array.forEach(links => {
    document.getElementById("table-of-contents").innerHTML.concat(
        `<li><a href=${url}>${lable}</a></li>`)   
});