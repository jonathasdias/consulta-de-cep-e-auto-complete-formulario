export default async function consumptionApi(cep) {
    try {
        let res = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        return res;
    }catch(error) {
        console.log("System error " + error);
    }
}