import { ref, nextTick, onMounted } from "vue";

export function useSectionObserver(content: any) {
  const activeSections = ref<number[]>([]);
  const animatedSections = ref<number[]>([]);

  const isAnimated = (index: number) => animatedSections.value.includes(index);

  onMounted(() => {
    nextTick(() => {
      content.forEach((_: any, idx: number) => {
        const section = document.querySelector(`[data-section-index="${idx}"]`);
        if (section) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry?.isIntersecting) {
                if (!activeSections.value.includes(idx))
                  activeSections.value.push(idx);
                if (!animatedSections.value.includes(idx))
                  animatedSections.value.push(idx);
              } else {
                activeSections.value = activeSections.value.filter(
                  (i) => i !== idx
                );
              }
            },
            { threshold: 0.5 }
          );
          observer.observe(section);
        }
      });
    });
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return {
    activeSections,
    animatedSections,
    isAnimated,
    scrollToSection,
  };
}