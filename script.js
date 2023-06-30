def firstChar(string):
    for char in string:
        if char != ' ':
            return char
    return ''

# Test cases
print(firstChar(' Rosa Parks '))   # Output: 'R'
print(firstChar('  Hello World ')) # Output: 'H'
print(firstChar('   '))            # Output: ''
print(firstChar(''))                # Output: ''
