class Consestant{
    constructor(){}

    getCount(){
        var consestantCountref = database.ref('consestantCount');
        consestantCountref.on('value',function(data){
            consestantCount = data.val();
        })
    }
        updateCount(Count){
            database.ref('/').update({
                consestantCount: Count 
            
        })
    }
        update(name){
            var consestantIndex = 'consestant'+consestantCount;
            database.ref(consestantIndex).set({
                   name: name  
            })


        }

}