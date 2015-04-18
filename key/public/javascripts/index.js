
(function main() {
    'use strict';

    function openKey() {
        $('.logo-key').show();
        document.getElementById("open_key_sound").play();
        setTimeout(function(){
            location.href = "/find";
        }, 2000);
    }

    function addLoginEvent() {
        $('#login_btn').click(function() {
            openKey();
        });
        $('#kakao_login_btn').click(function() {
            openKey();
        });
        $('#facebook_login_btn').click(function() {
            openKey();
        });
        $('#linked_login_btn').click(function() {
            openKey();
        });
    }

    function addJoinEvent() {
        $('#signup_btn').click(function() {
            location.href = "/signup";
        });
    }

    function init() {
        addLoginEvent();
        addJoinEvent();
    }

    init();
}());

