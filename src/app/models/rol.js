module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
      id: {
        type: Sequelize.id
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Rol;
  };