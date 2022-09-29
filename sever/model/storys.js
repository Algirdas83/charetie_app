import { DataTypes } from 'sequelize'


const Storys = (sequelize) => {
    const Schema = {
        story: {
            type: DataTypes.STRING(1000), //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        photo: {
            type: DataTypes.STRING, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        amount_donation: {
            type: DataTypes.BIGINT, //= TEXT
            allowNull: false
        }
       
    }

    return sequelize.define('storys', Schema)
}

export default Storys