import { DataTypes } from 'sequelize'


const Storys = (sequelize) => {
    const Schema = {
        story_name: {
            type: DataTypes.STRING, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
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
        },
        raised_donation: {
            type: DataTypes.BIGINT, //= TEXT
            
        },
    }

    return sequelize.define('storys', Schema)
}

export default Storys