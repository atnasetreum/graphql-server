module.exports = `
    #Esto es un curso del sistema
    type Curso {
        id: ID!
        titulo: String!
        #Esta es la descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float @deprecated(reason: "No tendra este campo proximamente")
        comentarios: [Comentario]
    }

    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }

    input NuevoCurso {
        titulo: String!
        descripcion: String!
    }

    input CursoEditable {
        titulo: String
        descripcion: String
    }
`