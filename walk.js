function walk(node) {
    if(!node.next) return node;

    return walk(node.next);
}

module.exports = walk;