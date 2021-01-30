let sum = 0;
const menu = document.querySelectorAll('input[type="checkbox"]');
const total = document.getElementById('total');
total.innerText = `${sum}원`;

for(var i=0; i<menu.length; i++) {
    menu[i].onclick = function(){
        if(this.checked){
            sum += Number(this.value);
        }
        else {
            sum -= Number(this.value);
        }
        total.innerText = `${sum}원`;
    }
}