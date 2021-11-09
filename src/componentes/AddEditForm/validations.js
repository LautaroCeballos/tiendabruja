export default function validations(dataForm){
    let errors = {}
    if (!dataForm.nombre) {
        errors.nombre = "Error en nombre"
    }

    if (!dataForm.bultoCant) {
        errors.bultoCant = "Error en cantidad x bulto"
    }

    if (!dataForm.costoMayorista) {
        errors.costoMayorista = "Error en costo x cantidad"
    }

    if (!dataForm.costoUnitario) {
        errors.costoUnitario = "Error en costo x unidad"
    }

    if (!dataForm.ganancia) {
        errors.ganancia = "Error en ganancia"
    }

    if (!dataForm.precioVenta) {
        errors.precioVenta = "Error en precio al publico"
    }

    if (!dataForm.proveedor) {
        errors.proveedor = "Error en proveedor"
    }

    if (!dataForm.stock) {
        errors.stock = "Error en stock"
    }

    return errors
}