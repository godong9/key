(function main() {
    'use strict';

    function addUserItemClickEvent() {
        $('.user-item').click(function() {
           $('#profile_modal').modal('show');
        });
    }

    function init() {
        addUserItemClickEvent();
    }

    init();
}());

