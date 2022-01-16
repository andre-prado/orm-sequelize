
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
    {
      nome: 'Andre Prado',
      ativo: true,
      email: 'andre@email.com',
      role: 'aluno',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Allan Prado',
      ativo: false,
      email: 'allan@email.com',
      role: 'aluno',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Fabio Silva',
      ativo: true,
      email: 'fabio@email.com',
      role: 'professor',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
