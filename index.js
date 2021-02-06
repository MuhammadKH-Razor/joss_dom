// agar langsung membuat nya tag style ketika pertama kali browser tampil

if (document.querySelector('body')) {
    let css = document.createElement('style');
    css.type = 'text/css';

    let styles = ` 
        body { 
            padding: 0;
            margin: 0;
        }`;


    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}


// pengkondisian

if (document.querySelector('body').classList.contains('background-color')) {

    var js = './property/backgroundColor.js'

    script = document.createElement('script');
    body = document.getElementsByTagName('body')[0];
    let tmp = "";

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}