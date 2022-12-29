namespace Project {
  interface Inicio {
    principal: string;
    secundarion: string;
  }

  interface Home {
    data: {
      attributes: {
        principal: string;
        contacto: {
          prefix: string;
          icono: string;
          descripcion: string;
        };
      };
    };
  }

  interface Image {
    data: {
      attributes: {
        id?: string;
        url: string;
        alternativeText: string;
      };
    };
  }

  interface Speciality {
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
  }

  interface Services {
    id: string;
    titulo: string;
    descripcion?: string;
    link: string;
    imagen: Image;
    especialidad: Speciality[];
  }

  interface Service {
    data: {
      attributes: {
        servicios: Services[];
      };
    };
  }

  interface HomeResponse {
    data: {
      inicio: Home;
    };
  }

  interface ServiceResponse {
    data: {
      servicio: Service;
    };
  }

  interface Content {
    titulo: string;
    descripcion: string;
  }

  interface AboutUs {
    data: {
      attributes: {
        principal: Content;
        proposito: Content;
        objetivo: Content;
        trabajo: Content;
      };
    };
  }

  interface AboutUsResponse {
    data: {
      nosotro: AboutUs;
    };
  }

  interface ServicesResponse {
    data: {
      servicio: {
        descripcion: string;
        servicios: Services[];
      };
    };
  }

  interface PortfolioResponse {
    data: {
      portafolio: {
        descripcion: string;
      };
    };
  }

  interface Category {
    id: string;
    icono: string;
    nombre: string;
    slug: string;
    descripcion?: string;
  }

  interface CategoryResponse {
    data: {
      categorias: Category[];
    };
  }

  interface Project {
    id: string;
    Ano: string;
    ciudad: string;
    titulo: string;
    slug: string;
    miniatura: Image;
    imagenes: Image[];
    categorias: {
      nombre: string;
    };
  }

  interface ProjectResponse {
    data: {
      proyectos: Project[];
    };
  }

  interface Categories extends Category {
    proyectos: Project[];
  }

  interface CategoriesResponse {
    data: {
      categorias: Categories[];
    };
  }

  interface BlogResponse {
    data: {
      blog: {
        descripcion: string;
      };
    };
  }

  interface Article {
    id: string;
    titulo: string;
    descripcion: string;
    tag: string;
    slug;
    fecha: string;
    imagen: Image;
  }

  interface ArticlesResponse {
    data: {
      articulos: Article[];
    };
  }

  interface Content {
    titulo: string;
    descripcion: string;
  }

  interface ArticleResponse {
    data: {
      articulo: Article;
    };
  }

  interface ContactResponse {
    data: {
      contacto: {
        principal: Content;
        formulario: Content;
        latitud: string;
        longitud: string;
      };
    };
  }
}
