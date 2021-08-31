function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function emptyHead(){
        console.log('Head Empty, No thoughts')
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('OH NO ITS MY LAST BRAIN CELL')
    }
}