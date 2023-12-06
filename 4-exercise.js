function istUser(a, b) {
    let i = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval (i);
    }, 1000)
}
istUser(5, 15);