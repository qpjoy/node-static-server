alert('in login script');
$(function () {
    function onLoginClick() {
        alert('execute onLoginClick');
        userLogin(123123, 0);
    }

    function userLogin(a, b) {
        alert('execute userLogin');
        return {
            name: a,
            type: b
        }
    }

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    function isIOS() {
        alert('execute isIOS');
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return true;
        } else {
            return false;
        }
    }

    function isAndroid() {
        alert('execute isAndroid');
        return (/android/i.test(userAgent));
    }


    console.log(isIOS(), ' - - - is ios', isAndroid(), ' - - - - is Android ... ');
});
