const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdown = document.querySelectorAll(".dropdown select");


for(let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "Form" && currCode === "USD") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }
    

}
