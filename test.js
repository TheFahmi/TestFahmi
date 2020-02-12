function test(input) {
    var output = ''

    for (i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            output += '@ '
            for (k = 1; k < 14; k++) {
                output += '  '
            }
            output += '@ '
        }
        else {
            for (j = 1; j <= 15; j++) {
                if (i == ((4 * j) - 3)) {
                    output += '@ '
                    output += '  '
                    for (k = 0; k < 13; k++) {
                        output += '@ '
                    }
                }
                else if (i == (4 * j) - 1) {
                    for (z = 0; z < 13; z++) {
                        output += '@ '
                    }
                    output += '  '
                    output += '@ '
                }
            }
        }


        output += '\n'
    }

    return output

}
console.log(test(29))
