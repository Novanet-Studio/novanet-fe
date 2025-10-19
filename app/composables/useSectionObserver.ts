import { onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";

let observer: IntersectionObserver | null = null;

export function useSectionObserver() {
  const currentColor = useState<string>("currentColor", () => "default");
  const visibleSectionIds = useState<Set<string>>(
    "visibleSectionIds",
    () => new Set()
  );

  const route = useRoute();

  const initObserver = () => {
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

        if (!targetId) return;

        if (entry.isIntersecting) {
          currentColor.value = targetColor;
          if (!visibleSectionIds.value.has(targetId)) {
            visibleSectionIds.value.add(targetId);
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

  watch(
    () => route.fullPath,
    () => {
      setTimeout(initObserver, 100);
    },
    { immediate: true }
  );

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  const isSectionVisible = (id: string) => visibleSectionIds.value.has(id);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return {
    currentColor,
    isSectionVisible,
    initObserver,
    scrollToSection,
  };
}
