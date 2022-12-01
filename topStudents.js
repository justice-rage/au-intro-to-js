function topStudents(array) {
    return array.filter((index) => {
        return index.grade >= 90;
    });
}

module.exports = topStudents;