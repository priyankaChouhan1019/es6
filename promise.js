function func1() {
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log('function : your promise has been resolve')
                resolve();
            }
            else{
                console.log('function : your promise has not been resolved')
                reject('sorry not fulfilled');
            }
        },2000);
    })
}

func1().then(function(){
    console.log('priya: thanks for resolve')

}).catch(function(){
    console.log('priya:very bad sis')
})