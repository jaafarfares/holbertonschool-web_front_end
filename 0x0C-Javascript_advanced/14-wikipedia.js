function createElement(data){
    var myp = document.createElement("p");
    myp.innerText = data;
    document.body.appendChild(myp);

}
function queryWikipedia(callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      callback(res.query.pages[Object.keys(res.query.pages)[0]].extract);
    }
  };
    xhr.send();
}



queryWikipedia(createElement);
