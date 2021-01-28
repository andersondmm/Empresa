
export interface Producto {
    nombre: string;
    precioNormal: number;
    precioReducido: number;
    foto: string;
    id: string;
    fecha: Date;
}

export interface Cliente {
    uid: string;
    email: string;
    nombre: string,
    celular: string;
    foto: string;
    referencia: string;
    ubicacion: any;
}