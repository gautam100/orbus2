function getData() {
  return new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => {
        let data = response.json();
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getData()
  .then(function (serverResult) {
    let html = "";
    for (let result of serverResult) {
      html += "<tr>";
      html += "<td>" + result.id + "</td>";
      html += "<td>" + result.title + "</td>";
      html += "<td>" + result.completed + "</td>";
      html += "</tr>";
    }
    document.getElementById("table_body").innerHTML = html
  })
  .catch(function (serverError) {
    document.getElementById("table_body").innerHTML =
      "<tr><td colspan='3'>Error:" + serverError + "</td></tr>"
  });
