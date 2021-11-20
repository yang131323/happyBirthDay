var defDate = '1997/10/11 00:00:00';
var defName = 'Q';
var defPhoto = '//i.loli.net/2021/10/23/W4ZJKeQDPLjI3ub.png';

/** test: name=JUU1JUI3JUE3JUU1JUI3JUE3&date=MjAyMSUyRjEwJTJGMjIlMjAxMCUzQTAwJTNBMDA=&img=aHR0cHMlM0ElMkYlMkZzMy5qcGcuY20lMkYyMDIxJTJGMTAlMkYyMyUyRklnU21FZS5qcGc= */
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

function getNameDateAndPhoto () {
    var date = getUrlParam('date');
    var photo = getUrlParam('img');
    var name = getUrlParam('name');
    var legalCharReg = /[a-zA-Z0-9=+\/]/;
    var urlReg = /^(((?:(ht|f)tps?):)?\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/;
    var urlDate = date && legalCharReg.test(date) ? decodeURIComponent(window.atob(date)) : defDate;
    var urlPhoto = photo && legalCharReg.test(photo) ? decodeURIComponent(window.atob(photo)) : defPhoto;
    var urlName = name && legalCharReg.test(name) ? decodeURIComponent(window.atob(name)) : defName;
    var showDate = new Date(urlDate);
    var showPhoto = urlReg.test(urlPhoto) ? urlPhoto.replace(/^https?:/, '') : '';
    return {
        name: urlName,
        photo: showPhoto,
        date: showDate
    }
}