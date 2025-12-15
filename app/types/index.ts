export type COLORS_MAP_KEYS =
  | "default"
  | "eerieBlack"
  | "cadetGray"
  | "oxfordBlue"
  | "azure"
  | "columbiaBlue"
  | "raspberry"
  | "chartreuse";

export interface VisualLayer {
  id: string;
  type: "image" | "shape";
  src?: string;
  bgColor?: string;
  mask?: string;
  blendMode?: string;
  zIndex: number;
  cssClass?: string;
  animation?: {
    initial: any;
    animate: any;
    transition: any;
  };
}

export interface CommonSectionProps<SectionName = string> {
  name: SectionName;

  bgColor: String;
  bgImage?: String;

  color: String;
  dataColor: COLORS_MAP_KEYS;

  title: String;
  titleColor: String;
  description: String;
  HeroImage?: String;
  visualLayers?: VisualLayer[];

  alignCenter?: Boolean;
  justifyContent?: Boolean;
  reverseDirection?: Boolean;

  justifyEndImage?: Boolean;

  buttonLink?: String;
  buttonText?: String;
  buttonType?: String;

  //? With form
  showForm?: Boolean;
  formButtonText?: String;
  formFieldBorder?: String;
  placeHolderColor?: String;

  //? With tabs
  showTabs?: Boolean;
  navButtonBack?: Boolean;
  navButton?: String;
  targetSection?: SectionName;

  serviceImage?: String;
  serviceIcon?: String;

  list?: Array<{
    text: String;
    targetSection: String;
    icon: String;
  }>;
  listColor?: String;

  tabColor?: String;
  tabColorActive?: String;
  tabs?: Array<{
    label: String;
    content: String;
  }>;

  //? ?
  HideOn3xs?: Boolean;
}

export interface CommonViewerProps<SectionName = string> {
  alignCenter: Boolean;
  arrowClass: String;
  bgColor: String;
  bgImage?: String;
  dataColor: COLORS_MAP_KEYS;
  buttonClass: String;
  color: String;
  dateColor: String;
  justifyContent: Boolean;
  name: SectionName;
  oneImageViewer: Boolean;
  sectionTitle: String;
  titleColor: String;
}

export interface GalleryProps<SectionName = string> {
  alignCenter: Boolean;
  bgColor: String;
  bgImage?: String;
  color?: String;
  dataColor: COLORS_MAP_KEYS;
  description?: String;
  justifyContent?: Boolean;
  name: SectionName;
  title?: String;
  titleColor: String;
}
