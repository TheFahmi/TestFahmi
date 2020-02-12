function test(input) {
    var output = ''

    for (i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            output += '@ '
            for (k = 1; k < input-1; k++) {
                output += '  '
            }
            output += '@ '
        }
        else {
            for (j = 1; j <= input; j++) {
                if (i == ((4 * j) - 3)) {
                    output += '@ '
                    output += '  '
                    for (k = 0; k < input-2; k++) {
                        output += '@ '
                    }
                }
                else if (i == (4 * j) - 1) {
                    for (z = 0; z < input-2; z++) {
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
console.log(test(15))