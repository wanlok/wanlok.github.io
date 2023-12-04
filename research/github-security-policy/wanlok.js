leftWidth = 240;

prepareUI = function() {
    div = document.getElementById(elementId);
    div.style.display = 'table';
    div.style.width = '100%';
    leftDiv = div.children[0];
    leftDiv.style.display = 'table-cell';
    leftDiv.style.verticalAlign = 'top';
    leftDiv.style.width = leftWidth + 'px';
    leftDiv.children[0].style.overflowY = 'scroll';
    for (i = 0; i < leftDiv.children[0].children.length; i++) {
        leftA = leftDiv.children[0].children[i];
        leftA.style.display = 'block';
    }
    rightDiv = div.children[1];
    rightDiv.style.display = 'table-cell';
    rightDiv.style.verticalAlign = 'top';
    rightDiv.children[0].style.overflowX = 'auto';
    rightDiv.children[0].style.overflowY = 'scroll';
}

updateUI = function() {
    height = window.innerHeight;
    div = document.getElementById(elementId);
    div.style.height = height;
    div.children[0].children[0].style.height = height;
    div.children[1].children[0].style.width = window.innerWidth - leftWidth;
    div.children[1].children[0].style.height = height;
}

prepareAndUpdateUI = function() {
    prepareUI();
    updateUI();
}

getContentDiv = function() {
    return document.getElementById(elementId).children[1].children[0];
}

write = function(title, text) {
    const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
    lines = text.replace('\r', '').split('\n');
    header = lines[0].split(',');
    rows = []
    for (var i = 1; i < lines.length; i++) {
        line = lines[i];
        if (line.length > 0) {
            rows.push(line.split(regex));
        }
    }
    callback(title, header, rows);
}

get = function(title, path) {
    getContentDiv().innerHTML = '<img class="loading" src="loading.gif" />';
    fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }).then(text => {
        write(title, text);
    }).catch(error => {
        console.error('There was a problem fetching the CSV file:', error);
    });
}

