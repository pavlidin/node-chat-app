const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!',
        };
    }

    if (room.length > 14) {
        return {
            error: 'Room name limit exceeded! (max 14 characters)'
        }
    }

    if (username.length > 14) {
        return {
            error: 'Username limit exceeded! (max 14 characters)'
        }
    }
    // Check for existing user
    const existingUser = users.find((user) => {
        return user.username === username;
    });

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!',
        };
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => {
    return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
};

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom,
};
