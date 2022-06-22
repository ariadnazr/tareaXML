//leyendo el xml con el api XMLHttpRequest
let xhr = new XMLHttpRequest ();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        listarMuseos(this);

    }

};

xhr.open("GET", "../../museos.xml", true);
xhr.send();


//funcion listarMuseos
function listarMuseos (objXML){
    //leer respuesta de peticion
    let respXML = objXML.responseXML;

    //console.log(respXML);

    let lista = respXML.getElementsByTagName('museo');


    //acordion

    let tabla = document.querySelector('#tabla tbody');

    //console.log (lista);
    if (lista.length < 1){
        let fila = document.createElement('tr');
        let celda = document.createElement('td');

        celda.setAttribute('colspan','3');
        celda.textContent = 'No information available';

        fila.appendChild(celda);

        tabla.appendChild(fila);
    }

    //ciclo for

    for (let i=0; i<lista.length; i++){

        let fila = document.createElement('tr');
        let nombreMuseo = document.createElement('td');
        let webMuseo = document.createElement('td');
        let paisMuseo = document.createElement('td');
        let yearMuseo = document.createElement('td');
        let infoMuseo = document.createElement('td');

        
        console.log(lista[i].getElementsByTagName('nombre')[0].textContent);

        nombreMuseo.textContent = lista[i].getElementsByTagName('nombre')[0].textContent;

        webMuseo.textContent = lista[i].getElementsByTagName('website')[0].textContent;

        paisMuseo.textContent = lista[i].getElementsByTagName('pais')[0].textContent;

        //foto !!

        yearMuseo.textContent = lista[i].getElementsByTagName('year')[0].textContent;

        infoMuseo.textContent = lista[i].getElementsByTagName('info')[0].textContent;

        fila.appendChild(nombreMuseo);
        fila.appendChild(webMuseo);
        fila.appendChild(paisMuseo);
        fila.appendChild(yearMuseo);
        fila.appendChild(infoMuseo);

        tabla.appendChild(fila);

        
    }
}

