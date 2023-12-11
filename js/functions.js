function generarCodigo() {
    var tipoCodigo = document.getElementById("codes").value;
    var resultadoDiv = document.getElementById("resultado");
    var contenidoCodigo = document.getElementById('codigo').value;
    if(contenidoCodigo !== ''){
    switch (tipoCodigo) {
        case 'qr':
            resultadoDiv.innerHTML = '<img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + contenidoCodigo + '"</img>';
            break;
        case 'ean':
            resultadoDiv.innerHTML = '<img src="https://barcode.tec-it.com/barcode.ashx?data=' + contenidoCodigo + '&code=EAN13"</img>';
            break;
        case 'datamatrix':
            resultadoDiv.innerHTML = " <img src='https://barcode.tec-it.com/barcode.ashx?data=" + contenidoCodigo + "&code=DataMatrix&translate-esc=on&eclevel=L&dmsize=Default'/> ";
            break;
        case 'code_128':
            resultadoDiv.innerHTML = '<img src="https://barcode.tec-it.com/barcode.ashx?data=' + contenidoCodigo + '=Code128&translate-esc=on"</img>';
            break;
    }
    resultadoDiv.innerHTML = codigoGenerado;
} else{
    alert('INTRODUZA EL CONTENIDO DEL CODIGO')
}
}