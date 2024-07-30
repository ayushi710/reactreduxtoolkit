import Chance from "chance";

const chance = new Chance();
const fakeUserData = () => {
   
    return chance.name()
}

export default fakeUserData;