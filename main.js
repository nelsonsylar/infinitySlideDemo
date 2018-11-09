let n=1
initial()
setInterval(()=>{
    
    makeLeave(getImage(n)).one('transitionend',(e)=>{
        //$(e.currentTarget).removeClass('leave').addClass('enter') 这里还可以用e事件的currentTarget
        makeEnter(getImage(n+2))
    })
    
    makeCurrent(getImage(n+1))
    
    n++
},2000)






//以下是封装函数
function getImage(n){//来一个n得到一个jquery节点
    return  $('.image>img:nth-child('+switchNumber(n)+')')
}

//三个状态
function makeLeave($node){//给一个jquery节点传回一个jquery节点,同时对这个节点进行class操作
    return $node.addClass('leave').removeClass('enter current')//.siblings('img').removeClass('leave')
}
function makeCurrent($node){
    return $node.addClass('current').removeClass('enter leave')//.siblings('img').removeClass('current')
}
function makeEnter($node){
    return $node.addClass('enter').removeClass('leave current')//.siblings('img').removeClass('enter')
}

function initial(){//初始化
$('.image>img:nth-child(1)').addClass('current').siblings().addClass('enter')
}

function switchNumber(x){//为了得到 123 231 312的循环
    if(x>3){
        if(x%3===0){
            x=3
        }else{
            x=x%3
        }
    }
    return x
}