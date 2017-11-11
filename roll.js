function roll(){
    let R = Math.random()
    let sides = 6
    let rolled = R *6
    rolled = Math.round(rolled)
    console.log(rolled)
}

setinterval(roll,delay)