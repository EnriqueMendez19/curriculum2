//SE LLAMO EL JSON "REMUME.JS" DESDE EL REPOSITORIO DE GITHUB
let jsonUrl = 'https://raw.githubusercontent.com/EnriqueMendez19/Proyectos-Git/master/Curriculum.json';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea optener.
    .then(informacion => mostrarDato(informacion))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();

curriculum = `
<body>
    <h1>Curriculum Vitae</h1>
    <div class="intro"><img src="/images/Myself.jpg" width="150px" height="150px">
        
    </div>
    <div class="diseño">
    <div class="Personal"> 
        <h2>Datos Personales</h2>
        <p><span>Nombre:</span> {Nombre}</p>
        <p><span>Fecha de nacimiento:</span>{fechanacimiento}</p>
        <p>Resumen:{Resumen}</p>
        <p>Telefono:{numTel}</p>
        <p><span>Puesto solicitado: </span>{puestoSolicitado}</p>
        <p>Lneguages:{lenguages}</p>
        <p>Base de datos: {baseDeDatos}</p>
    </div>
    <div class="Laboral">
        <h2>Experiencia Laboral</h2>
        <p>Empresa:{empresa}</p>
        <p>Puesto: {puesto}</p>
        <p>Fecha de ingreso: {fechaIngreso} </p>
        <p>Fecha de termino: {fechaTermino}</p>
        <ul>Responsabilidades:
            <li>{encargado}</li>
        </ul>
    </div>
</div>
<div class="diseño2">
<div class="Educacion">
    <h2>Educacion</h2>
    <p>Escuela: {escuela}</p>
    <p>Grado de Estudio: {gradoEstudio}</p>
    <p>Fecha de ingreso:{fechaIng}</p>
    <p>Fecha de finalizacion: {fechaTerm}</p>
</div>
</div>
</body>
`
function mostrarDato (informacion){
        let html = curriculum;
        let Resumen=informacion.datosPersonales[0].Resumen;
        let personal=informacion.datosPersonales;
        let Nombre = informacion.datosPersonales[0].nombre;
        let NumTel = informacion.datosPersonales[0].telefono;
        let fechaNacimiento=informacion.datosPersonales[0].fechaNacimiento;
        let puestoSolicitado=informacion.datosPersonales[0].puestoSolicitado;
        let lenguages=informacion.lenguages;
        let baseDeDatos=informacion.baseDeDatos;
        let empresa=informacion.experienciaLaboral[0].empresa;
        let puesto=informacion.experienciaLaboral[0].Puesto;
        let fechaIngreso=informacion.experienciaLaboral[0].fechaIngreso;
        let fechaTermino=informacion.experienciaLaboral[0].fechaTermino;
        let encargado=informacion.experienciaLaboral[0].responsabilidades;
        let escuela=informacion.educacion[0].escuela;
        let gradoEstudio=informacion.educacion[0].gradoEstudio;
        let fechaIng=informacion.educacion[0].fechaIngreso;
        let fechaTer=informacion.educacion[0].fechaTermino;
        

        html=html.replace("{Resumen}",Resumen);
        html=html.replace("{personal}",personal);
        html=html.replace("{Nombre}", Nombre);
        html=html.replace("{numTel}", NumTel);
        html=html.replace("{fechanacimiento}",fechaNacimiento);
        html=html.replace("{puestoSolicitado}",puestoSolicitado);
        html=html.replace("{lenguages}",lenguages);
        html=html.replace("{baseDeDatos}",baseDeDatos);
        html=html.replace("{empresa}",empresa);
        html=html.replace("{puesto}",puesto);
        html=html.replace("{fechaIngreso}",fechaIngreso);
        html=html.replace("{fechaTermino}",fechaTermino);
        html=html.replace("{encargado}",encargado);
        html=html.replace("{escuela}",escuela);
        html=html.replace("{gradoEstudio}",gradoEstudio);
        html=html.replace("{fechaIng}",fechaIng);
        html=html.replace("{fechaTerm}",fechaTer);
        document.getElementById('curriculum').innerHTML +=html;
    
};



































//mostrar el json en la consola.
// const mostrarDato = (informacion)=>{
//     console.log(informacion);
// };



//funcion para recorrer los array
// function recorrerDB(informacion){
//     informacion.baseDeDatos.forEach(element => {
//         console.log(element)
//     });
// }

// recorrerDB();




