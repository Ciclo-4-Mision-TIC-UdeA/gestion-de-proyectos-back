const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = [
        {
          nombre: 'Daniel',
        },
        {
          nombre: 'Juan',
        },
        {
          nombre: 'Pedro',
        },
      ];

      return usuarios;
    },
  },
};

export { resolvers };
