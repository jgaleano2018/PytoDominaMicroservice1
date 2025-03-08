module.exports = (sequelize, Sequelize) => {
    const UserRol = sequelize.define("userRol", {
      id_user: {
        type: Sequelize.id
      },
      id_rol: {
        type: Sequelize.id
      }
    });
  
    return UserRol;
  };