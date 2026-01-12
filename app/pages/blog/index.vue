<script lang="ts" setup>
import type {
  CommonSectionProps,
  CommonViewerProps,
  GalleryProps,
} from "~/types";

const BLOG_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Blog",
  description:
    "Hablamos de diseño gráfico, te damos tips de desarrollo web y te asesoramos personalmente para que alcances tus metas digitales.",
  image: "images/novanet-studio-og-blog.webp",
};

const { watchUrlHash } = useSectionObserver();

onMounted(() => {
  watchUrlHash();
});

useHead(() => {
  return {
    title: BLOG_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: BLOG_MAIN_INFO.description,
      },
      { property: "og:title", content: BLOG_MAIN_INFO.title },
      { property: "og:description", content: BLOG_MAIN_INFO.description },
      { property: "og:image", content: BLOG_MAIN_INFO.image },
      { name: "twitter:card", content: BLOG_MAIN_INFO.image },
      { name: "twitter:title", content: BLOG_MAIN_INFO.title },
      { name: "twitter:description", content: BLOG_MAIN_INFO.description },
      { name: "twitter:image", content: BLOG_MAIN_INFO.image },
    ],
  };
});

type BLOG_SECTIONS_IDS = "Blog" | "Blog-Recientes" | "Blog-Articulos";

const blog: CommonSectionProps<BLOG_SECTIONS_IDS>[] = [
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-blog",
    targetSection: "Blog-Articulos",
    buttonText: "Ver artículos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description: BLOG_MAIN_INFO.description,

    visualLayers: {
      cssClass: "grid max-w-[60%] lg:max-w-[80%] place-self-center lg:mt-24",
      images: [
        {
          id: "shape-bg",
          type: "image",
          zIndex: 10,
          src: "images/hero-images/novanet-studio-blog-elemento.webp",
          animation: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
        {
          id: "hero-woman",
          type: "image",
          src: "images/hero-images/novanet-studio-blog-persona.webp",
          zIndex: 20,
          animation: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
      ],
    },

    justifyContent: true,
    name: "Blog",
    title: "Creatividad, innovación y colaboración para tus metas digitales",
    titleColor: "text-oxfordBlue",
  },
];

const recentArticles: CommonViewerProps<BLOG_SECTIONS_IDS> = {
  alignCenter: true,
  justifyContent: true,
  arrowClass: "border-oxfordBlue text-oxfordBlue",
  bgColor: "bg-white",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-raspberry hover:text-oxfordBlue transition-colors",
  color: "text-oxfordBlue",
  dateColor: "text-gray-500",
  dataColor: "oxfordBlue",
  name: "Blog-Recientes",
  oneImageViewer: false,
  sectionTitle: "Lo más reciente",
  titleColor: "text-azure",
};

const blogGallery: GalleryProps<BLOG_SECTIONS_IDS> = {
  alignCenter: true,
  bgColor: "bg-columbiaBlue",
  bgImage: "background-emblem-galeria-blog",
  dataColor: "oxfordBlue",
  name: "Blog-Articulos",
  titleColor: "text-azure",
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="blog" />

    <BlogRecentArticles :content="recentArticles" />

    <BlogGallery :content="blogGallery" />
  </div>
</template>
