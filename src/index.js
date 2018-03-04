module.exports = function longestConsecutiveLength(array) {

    let compareFunction = (a, b) => a - b;
    let sortArray = array.sort(compareFunction);
    let count = 1;
    let length = 1;

    if (sortArray.length <= 1) {
        return sortArray.length;
    }

    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] + 1 === sortArray[i + 1]) {
            count++;

            if (count > length) {
                length = count;
            }

        } else if (sortArray[i] !== sortArray[i + 1]) {
            count = 1;
        }
    }

    return length;
};

