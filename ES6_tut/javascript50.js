const createCharacter = (name,powers) => {
    return {
        name,
        powers,
        getFriends(){
            return 'Lius lane'
        },
        getEnemies(){
            return 'Skeletor'
        }
    }
}

const characterObj = createCharacter('superman','Fly');

console.log(characterObj)
console.log(characterObj.getFriends)