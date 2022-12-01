function addScore(players) {
    return players.map((player) => {
        (player.score += 10);
        return player;
    });
}

module.exports = addScore;