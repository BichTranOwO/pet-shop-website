function loadComponent(id, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.log("Loi load component:", error);
        });
}

// load header
loadComponent("header", "./components/header.html");

// load footer
loadComponent("footer", "./components/footer.html");