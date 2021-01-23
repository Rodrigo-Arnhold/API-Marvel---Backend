class UserController {
  // GET /users
  index(request, response) {
    const users = [
      {
        name: 'Rod',
        age: 34,
      },
      {
        name: 'Fulano',
        age: 20,
      },
    ];

    return response.json(users);
  }
}

export default new UserController();
