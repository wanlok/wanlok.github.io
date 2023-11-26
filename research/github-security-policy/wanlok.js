function prepareUI() {
    div = document.getElementById(elementId);
    div.style.display = 'table';
    div.style.width = '100%';
    leftDiv = div.children[0];
    leftDiv.style.display = 'table-cell';
    leftDiv.style.verticalAlign = 'top';
    leftDiv.style.width = '240px';
    leftDiv.children[0].style.overflowY = 'scroll';
    for (i = 0; i < leftDiv.children[0].children.length; i++) {
        leftA = leftDiv.children[0].children[i];
        leftA.style.display = 'block';
    }
    rightDiv = div.children[1];
    rightDiv.style.display = 'table-cell';
    rightDiv.style.verticalAlign = 'top';
    rightDiv.children[0].style.overflowY = 'scroll';
    // rightDiv.children[0].style.padding = '16px';
}

function updateUI() {
    height = window.innerHeight;
    div = document.getElementById(elementId);
    div.style.height = height;
    div.children[0].children[0].style.height = height;
    div.children[1].children[0].style.height = height;
}

function prepareAndUpdateUI() {
    prepareUI();
    updateUI();
}

function getContentDiv() {
    return document.getElementById(elementId).children[1].children[0];
}
        
function getCSV(csvText) {
    rows = [];
    lines = csvText.replace('\r', '').split('\n');
    columnNames = lines[0].split(',');
    for (i = 1; i < lines.length; i++) {
        row = {};
        line = lines[i].split(',');
        if (columnNames.length == line.length) {
            for (j = 0; j < columnNames.length; j++) {
                row[columnNames[j]] = line[j];
            }
            rows.push(row);
        }
    }
    return [columnNames, rows];
}

function get(title, path) {
    fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }).then(responseText => {
        tuple = getCSV(responseText);
        callback(title, tuple[0], tuple[1]);
    }).catch(error => {
        console.error('There was a problem fetching the CSV file:', error);
    });
}

