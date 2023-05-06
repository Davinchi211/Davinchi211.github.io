let input = document.getElementById('input');
let textarea = document.getElementById('textarea');
let lines, archivo, i, resultado;


//Arreglo con tokens a validar

    //const regex = /[a-zA-Z]\>/; // ER para validar el final de una cadena
    //const regex2 = /^[a-zA-Z][a-zA-Z0-9]+(\"\>)+$/; //validar cadena de texto intermedia
    //let generar = [];

    //cod100: tipo_Dato, cod43:operadores, cod55:reservadas, cod82:acceso, cod11:declaraciones
    //cod21: sentencias
    const palabras =[
        {name: 'DATO ENTERO ->', value: 'QUETZAL', cod: 100},
        {name: 'DATO STRING ->', value: 'PISTO', cod: 100},
        {name: 'DATO BOOLEANO ->', value: 'LEN', cod: 100},
        {name: 'DATO FLOTANTE ->', value: 'CHOCA', cod: 100},
        {name: 'DATO DECIMAL ->', value: 'CENTAVO', cod: 100},
        {name: 'RESTA', value: 'Q#', cod: 43},
        {name: 'SUMA', value: 'Q?', cod: 43},
        {name: 'MULT', value: 'Q@', cod: 43},
        {name: 'DIV', value: 'Q-', cod: 43},
        {name: 'ASIG', value: '>>', cod: 43},
        {name: 'NO IGUAL', value: 'QNEL', cod: 43},
        {name: 'IGUAL A', value: 'Q>>', cod: 43},
        {name: 'PORCENTAJE', value: '%%', cod: 43},
        {name: 'AND', value: 'Qmas', cod: 55},
        {name: 'OR', value: 'Qopc', cod: 55},
        {name: 'MENOR QUE', value: 'Q<', cod: 55},
        {name: 'MAYOR QUE', value: 'Q>', cod: 55},
        {name: 'MENOR QUE IGUAL A', value: 'Q#<', cod: 55},
        {name: 'MAYOR QUE IGUAL A', value: 'Q#>', cod: 55},
        {name: 'CONCATENACION', value: 'Q+', cod: 55},
        {name: 'PUBLICO', value: 'Regalado', cod: 82},
        {name: 'PRIVADO', value: 'Reservado', cod: 82},
        {name: 'PROTEGIDO', value: 'Tapado', cod: 82},
        {name: 'EN SI MISMO', value: 'Quieto', cod: 82},
        {name: 'NO MODIFICA', value: 'Acabado', cod: 82},
        {name: 'CIERRE', value: '>', cod:1},
        {name: 'DECLARACION', value: '<QC-Declaraciones:', cod: 104},
        {name: 'COMILLA', value: '"', cod: 23},
        {name: 'VAR QUETZAL', value:'Qpistudo',cod:99},
        {name: 'VAR LEN TRUE', value:'tieneCasaca',cod:99},
        {name: 'VAR PISTO', value:'vosPlatica',cod:99},
        {name: 'VAR CHOCA|CENTAVO', value:'coperachaMucha',cod:99},
        {name: 'VAR LEN', value:'queChilero',cod:99},
        {name: 'FINALIZA', value:'Reintegro',cod:49},
        {name: 'IDENTIFICADOR', value:'edad', cod: 88}
       ];

input.addEventListener("change", () => {
    
    let archivos = input.files;
    if(archivos.length == 0) return;

    let archivo = archivos[0];
    let contenido = new FileReader();
    contenido.onload = (e) => {
        archivo = e.target.result;
        
        lines = archivo.split(/\r\n|\n/)
        textarea.value = lines.join("\n"); 
        
        
        for(var i=0; i<lines.length;i++){
            let newNew = [];
            let anlyzeLine = lines[i].split(/\s|(\>*\>+)|(\")/);
            for(let j=anlyzeLine.length -1; j>=0; j--){
                if(anlyzeLine[j] === undefined){
                    anlyzeLine.splice(j,1);
                    if(anlyzeLine[j] === ''){
                        anlyzeLine.splice(j,1);
                    }
                }
            }
            for(let t=0; t<anlyzeLine.length;t++){
                if(anlyzeLine[t] !== ''){
                        newNew.push(anlyzeLine[t]);
                }                        
            } 
            var s=i;            
            for(let b=0;b<newNew.length;b++){
                console.log("\t\t\t\t"+"---LINE---"+(s+1));
            } 
            console.table(newNew);
            let nueArray = [];
            nueArray.push(newNew);            
            const nAr = nueArray;

            for(const posicion of nAr){
                console.log("\t\t"+"%cELEMENTOS VÁLIDOS","color:#000;font-size: 10px;background:orange;font-weight: bold;");
                for(const elemento of posicion){
                    for(const propiedad of palabras){
                        if (propiedad.value === elemento) {
                            console.info(`\t\t|Elemento|  ${elemento}  |Propiedad|  ${propiedad.name}  |Código|  ${propiedad.cod}`);              
                        }
                }
            }              
        }
        console.log("\t________________________________________________________")
        console.log("\n");
        }
    }
    contenido.onerror = (e) => alert(e.target.error.name);
    contenido.readAsText(archivo);
});
