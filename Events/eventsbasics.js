// document.getElementById('zebra').onclick = function(){
//     alert("owl click");
// }

// document.getElementById('zebra').addEventListener('click' , function(){
//     console.log("owl click li")
// },false)

// type , timestamp , defaultPrevented
//target, toElement , srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey , ctlkry , shiftkey , keyCode

// document.getElementById('images').addEventListener('click' , function(e){
//     console.log("owl click ul")
//     e.stopPropagation()
// },false)


// document.getElementById('Google').addEventListener('click' , function(e){
//     console.log("google click")
//     e.preventDefault();
//     e.stopPropagation();
// },false)

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target == 'IMG') {
        console.log(e.target.id)
        let remove = e.target.parentNode
        // remove.remove();
        remove.parentNode.removeChild(remove)
    }

})