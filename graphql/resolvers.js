const Seonu = {
  id: 1,
  name: 'seonu',
  userName: 'seonueo',
};

const resolvers = {
  Query: {
    person: () => Seonu,
  },
};

export default resolvers;
