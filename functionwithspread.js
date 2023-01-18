function add(x, y, z, a, b) {
    return x + y + z + a + b;
}
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var data = "got sum of numbers=" + add.apply(void 0, numbers);
this.document.getElementById("data").innerHTML = "<pre> numbers are " + numbers;
this.document.getElementById("data").innerHTML += data + '</pre>';
