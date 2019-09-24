module.exports = function check(str, bracketsConfig) {
    let stack = [];
    const n = str.length;
    
    if(n % 2 == 1) {
        return false;
    }

    for(let i = 0; i < n; i++) {
        bracketsConfig.forEach(element => {
            if (str[i] === element[0]) {
                if(stack[stack.length - 1] === element[1]) {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            } else if (stack[stack.length - 1] === element[0] && str[i] === element[1]) {
                stack.pop();
            }
        });
    }

    return stack.length == 0 ? true : false;
}
