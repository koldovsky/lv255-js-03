$(function() {
    $('#tab1').hide();
    $('#tab2').hide();
    
    $('#btn-tab1').click(function(){
        hideAllTabs();
        showTab('#tab1');
    });
    $('#btn-tab2').click(function(){
        hideAllTabs();
        showTab('#tab2');
    });
    $('#btn-tab3').click(function(){
        hideAllTabs();
        showTab('#tab3');
    });
    
    
    setInterval(function(){
        $('#clock').html( (new Date()).toLocaleTimeString() );
    }, 1000);
    
});


function hideAllTabs() {
    $('.tab').hide();
}

function showTab(tabId) {
    $(tabId).show();
}
