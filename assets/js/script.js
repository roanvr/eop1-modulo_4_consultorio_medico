function Consultorio(nombre, paciente) {
    let _nombre = nombre;
    let _paciente = paciente;
Object.defineProperty(this, "_getNombre", {
    get: function () {
        return _nombre
    },
    set: function (nombre) {
        _nombre = nombre
    }
});
Object.defineProperty(this, "_getPaciente", {
    get: function () {
        return _paciente 
    },
    set: function (paciente) {
        _paciente = paciente
    },
});
/* Consultorio.prototype.buscarNombre=function(nombre) {
    return this.paciente.filter(Paciente._nombre)
}; */

function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre 
        },
        set: function (nombre) {
            _nombre = nombre
        },
    });
}
Object.defineProperty(this, "_getEdad", {
    get: function () {
        return _edad 
    },
    set: function (edad) {
        _edad = edad
    },
});
Object.defineProperty(this, "_getRut", {
    get: function () {
        return _rut 
    },
    set: function (rut) {
        _rut = rut
    },
});
Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
        return _diagnostico 
    },
    set: function (diagnostico) {
        _diagnostico = diagnostico
    },
});
}

Paciente.prototype.buscarNombre = function (nombre) {
    return pacientes.filter(paciente => paciente.nombre === nombre)
};
Paciente.prototype.todosPacientes = function () {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Rut: ${rut}, Diagnostico: ${diagnostico}`)
}

let paciente1 = new Paciente ('Rosa',42,'11111111-1','Pertusis')
let paciente2 = new Paciente ('Miguel',26,'22222222-2','Sarampión')
let paciente3 = new Paciente ('Katherine',18,'33333333-3','COVID')
console.log(paciente1)
console.log(paciente2)
console.log(paciente3)