

export const presence = function (){
    console.log('baixou', document.body)
//pega a lista de participantes
    let peopleHTML = document.getElementsByClassName("ZjFb7c");

//cria um arquivo com os nomes
    let csvContent = "data:text/txt;charset=utf-8,";

    for (let i = 0; i < peopleHTML.length; i++) {
        csvContent += peopleHTML[i].innerHTML + "\r\n";
    }

//pega a data do dia

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;

//escreve o arquivo e faz download

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);

//caso queira trocar o nome do arquivo, é só mudar aqui
    link.setAttribute("download", `Presença - ${today}`);
    document.body.appendChild(link); // Required for FF
    link.click();
}
