$('.nav ul li').click(function(){
    $(this).addclass("active").siblings().removeclass('active');
})

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.dispaly = 'none';
    });
    tabs[panelIndex].style.dispaly = 'block';
}
tabs(0);