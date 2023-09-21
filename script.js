const gameBoard=(()=>{
    const gameBoardArray=['x','x','x','x','x','x','o','x','o','x',];
    const gameBoardHtml=document.querySelectorAll('.box');
    gameBoardHtml.forEach((element,index) => {
        element.innerHTML=gameBoardArray[index];
    });
})();
