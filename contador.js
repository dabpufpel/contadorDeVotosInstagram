// precisa ser executado no navegador com os comentários abertos na postagem e no modo mobile

async function loadAllComments(){
    let loadElement = document.getElementsByClassName('x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x14vqqas xod5an3 x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1')[0]

    while(loadElement){
        loadElement.scrollIntoView();
        await new Promise(r => setTimeout(r, 1000));
    }
}

function countValidVotes(){
    let elements = document.getElementsByClassName('x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
    let banList = []
    let totalVotes = 0;
    let votes = {0:0,1:0,2:0};
    
    for(i = 0; i < elements.length; i++){
        let userData = getUserData(elements[i]);
        let commentNumber = parseInt(userData[1]);
        
        if(commentNumber >= 1 && commentNumber <= 3 && !banList.includes(userData[0])){
            totalVotes++;
            votes[commentNumber-1]++;
            banList.push(userData[0]);
        }
    }
    
    keys = rank(votes);
    
    console.log(`Total de votos validos: ${totalVotes}\n`);
    for(i = keys.length-1; i >= 0; i--){
        console.log(`Camiseta ${parseInt(keys[i])+1}: ${votes[keys[i]]} (${((votes[keys[i]]*100)/totalVotes).toFixed(2)}%)`)
    }
}

function getUserData(element){
    return element.innerText.split('\n');
}

function rank(votes){
    var items = Object.keys(votes).map(
      (key) => { return [key, votes[key]] });
    
    items.sort(
      (first, second) => { return first[1] - second[1] }
    );
    
    var keys = items.map(
      (e) => { return e[0] });
    
    return keys;
}

loadAllComments().then(result => {
    // se não mostrar o rank depois de carregar todos os comentários é só executar essa função direto no console
    countValidVotes();
});