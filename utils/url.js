function getUrlParam (key) {
    const href = location.href || '';
    const paramReg = new RegExp(`${key}=([^&]*)`, 'g');
    const matchArr = paramReg.exec(href);
    let result = ''
    if (matchArr && matchArr[1]) {
        result = matchArr[1];
    }
    return result;
}