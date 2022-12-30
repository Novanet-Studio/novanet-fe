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

  interface ImageRaw {
    id: string;
    attributes: {
      url: string;
      alternativeText: string;
    };
  }

  interface Image {
    data: ImageRaw;
  }

  interface Images {
    data: ImageRaw[];
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

  interface Portfolio {
    data: {
      attributes: {
        descripcion: string;
      };
    };
  }

  interface PortfolioResponse {
    data: {
      portafolio: Portfolio;
    };
  }

  interface Category {
    id: string;
    attributes: {
      icono: string;
      nombre: string;
      slug: string;
      descripcion?: string;
      proyecto: {
        data: Project[];
      };
    };
  }

  interface CategoryBody {
    data: Category[];
  }

  interface CategoryResponse {
    data: {
      categorias: CategoryBody;
    };
  }

  interface Project {
    id: string;
    attributes: {
      ano: string;
      ciudad: string;
      titulo: string;
      descripcion: string;
      slug: string;
      miniatura: Image;
      fecha?: string;
      imagenes: {
        data: {
          id: string;
          attributes: {
            url: string;
            alternativeText: string;
          };
        }[];
      };
      categorias: {
        nombre: string;
      };
    };
  }

  interface ProjectsResponse {
    data: {
      proyectos: Project[];
    };
  }

  interface ProjectResponse {
    data: {
      proyecto: {
        data: Project;
      };
    };
  }

  interface Categories {
    data: Category[];
  }

  interface CategoriesResponse {
    data: {
      categorias: Categories;
    };
  }

  interface Blog {
    data: {
      attributes: {
        descripcion: string;
      };
    };
  }

  interface BlogResponse {
    data: {
      blog: Blog;
    };
  }

  interface Article {
    id: string;
    attributes: {
      titulo: string;
      descripcion: string;
      tag: string;
      slug;
      fecha: string;
      imagen: Images;
    };
  }

  interface ArticlesData {
    data: Article | Article[];
  }

  interface ArticlesResponse {
    data: {
      articulos: ArticlesData;
    };
  }

  interface Content {
    titulo: string;
    descripcion: string;
  }

  interface ArticleResponse {
    data: {
      articulo: ArticlesData;
    };
  }

  interface Contact {
    data: {
      attributes: {
        principal: Content;
        formulario: Content;
        latitud: string;
        longitud: string;
      };
    };
  }

  interface ContactResponse {
    data: {
      contacto: Contact;
    };
  }
}
