function integer(a, b) {

    var isInteger = Number.isInteger(a) && Number.isInteger(b);

    if (isInteger && a == b)
        alert("Both numbers are equal!");

    else if (isInteger)
        alert("The larger number is " + Math.max(a, b));

    else
        alert("Please add an integer!");

}

integer(2, 1);