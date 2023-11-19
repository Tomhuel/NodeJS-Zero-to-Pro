const { getAge, generateUUID } = require('../plugins');

interface IbuildMakePerson {
    generateUUID: Function;
    getAge: Function;
}

interface Iperson {
    name: string;
    birthday: string;
}

interface ImakePerson {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

const buildMakePerson = ({ generateUUID, getAge }: IbuildMakePerson): Function => {
    return ({ name, birthday }: Iperson): ImakePerson => {
        return {
            id: generateUUID(),
            name: name,
            birthdate: birthday,
            age: getAge(birthday)
        }
    }
}

module.exports = {
    buildMakePerson,
}