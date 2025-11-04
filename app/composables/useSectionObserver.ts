import { onUnmounted, nextTick } from "vue";
import { useRoute } from "vue-router";

let observer: IntersectionObserver | null = null;

export function useSectionObserver() {
  const currentColor = useState<string>("currentColor", () => "default");
  const currentEmblemColor = useState<string>(
    "currentEmblemColor",
    () => "default"
  );
  const visibleSectionIds = useState<Set<string>>(
    "visibleSectionIds",
    () => new Set()
  );
  const animatedSectionIds = useState<Set<string>>(
    "animatedSectionIds",
    () => new Set()
  );

  const route = useRoute();

  const initObserver = () => {
    if (!import.meta.client) {
      return;
    }

    if (observer) {
      observer.disconnect();
    }

    visibleSectionIds.value.clear();

    const options = {
      threshold: 0.5,
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLElement;
        const targetId = targetElement.id;
        const targetColor = targetElement.dataset.color || "default";
        const targetEmblemColor =
          targetElement.dataset.emblemColor || targetColor;

        if (!targetId) return;

        if (entry.isIntersecting) {
          currentColor.value = targetColor;
          currentEmblemColor.value = targetEmblemColor;

          if (!visibleSectionIds.value.has(targetId)) {
            visibleSectionIds.value.add(targetId);
          }
          if (!animatedSectionIds.value.has(targetId)) {
            animatedSectionIds.value.add(targetId);
          }
        } else {
          visibleSectionIds.value.delete(targetId);
        }
      });
    }, options);

    nextTick(() => {
      document
        .querySelectorAll<HTMLElement>("section[data-color][id]")
        .forEach((section) => {
          observer!.observe(section);
        });
    });
  };

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  const hasBeenAnimated = (id: string) => {
    return animatedSectionIds.value.has(id);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return {
    currentColor,
    currentEmblemColor,
    hasBeenAnimated,
    initObserver,
    scrollToSection,
  };
}
