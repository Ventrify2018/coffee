$(document).ready(function () {
    $('#sidebarCollapse').on('click', function toggler() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});