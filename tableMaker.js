function tableMaker(text) {
    let table = tablificar(text);
    let widths = getWidths(table);
    let out = output(table, widths);
    if (out[0] == ' ') {out = '\u3164'+out.substring(1)}
    return out
}

function tablificar(text) {
    let table = [];
    let lines = text.split('\n');
    let k = 0;
    lines.forEach(line => {
        table[k] =  line.split(',');
        k += 1;
    });
    return table;
}

function getWidths(table) {
    let m = table.length;
    let n = table[1].length;
    let widths = [];
    for (let j = 0; j < n; j++) {
        let maxwidth = 0;
        for (let i = 0; i < m; i++) {
            w = table[i][j].length 
            if (w > maxwidth) {
                maxwidth = w;
            }
        }
        widths[j] = maxwidth;
    }
    return widths;
}

function output(table, widths) {
    let m = table.length;
    let n = table[1].length;
    let s = '' 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n-1; j++) {
            let w = table[i][j].length
            s += table[i][j] + ' '.repeat(widths[j] - w + 3);
        }
        let w = table[i][n-1].length
        s += table[i][n-1] + ' '.repeat(widths[n-1] - w);
        s += '\n';
    }
    return s.substring(0,s.length-1)
}