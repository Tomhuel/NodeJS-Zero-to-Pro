const users = [
    {
        id: 1,
        name: "Luka"
    },
    {
        id: 2,
        name: "Crosso"
    },
    {
        id: 3,
        name: "David"
    }
];

const findUser = (id, callback) => {
    const user = users.find((user) => user.id === id);

    (user) ? callback(null, user) : callback(`User not found with id: ${id}`);;
}

module.exports = {
    findUser: findUser
}

