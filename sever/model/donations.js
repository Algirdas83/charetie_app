import { DataTypes } from 'sequelize'


const Donations = (sequelize) => {
    const Schema = {
        donator_name: {
            type: DataTypes.STRING, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        donator_last_name: {
            type: DataTypes.BIGINT, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        donated_sum: {
            type: DataTypes.BIGINT, //= TEXT
            allowNull: false
        }
       
    }

    return sequelize.define('donations', Schema)
}

export default Donations