// require(['jquery', 'jquery/jquery.cookie'], function ($) {
//     $(document).ready(function () {
//         var date = new Date();
//         var minutes = 60;
//         date.setTime(date.getTime() + (minutes * 60 * 1000));
//         $.cookie('foo', '', {path: '/', expires: -1});
//         $.cookie('foo', 'bar', {expires: date});
//         $.cookie('foo', 'setvalue');

//         var check_cookie = $.cookie('foo');

//         var check_cookie = $.cookie('foo');
//         if($.cookie('check_cookie')) {
//             console.log('Cookies Set');
//         }
//         else{
//             console.log('Cookies not Set');
//         }
//     });
// });