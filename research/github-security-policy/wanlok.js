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
        
getCSV = function(csvText) {
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


dummy2 = function(line) {
    slices = line.split(',');
    // if (columnNames.length == slices.length) {
        // for (j = 0; j < slices.length; j++) {
        //     row[columnNames[j]] = line[j];
        // }
        // rows.push(row);
    // }

}

CSVtoArray = function(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
}

write = function(title, text) {
    lines = text.replace('\r', '').split('\n');
    header = lines[0].split(',');
    rows = []
    for (var i = 1; i < lines.length; i++) {
        if (lines[i].length > 0) {
            row = CSVtoArray(lines[i]);
            if (row == null) {
                row = lines[i].replace('\r', '').split(',');
            }
            console.log(row);
            rows.push(row);
        }
    }
    console.log('done');
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

