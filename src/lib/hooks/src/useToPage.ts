import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
import type { Router } from "vue-router";
let instance: ComponentInternalInstance;

export function useToPage() {
  const yunTo = (path: string) => {
    const router = instance.appContext.config?.globalProperties.$router as Router;
    if (!path) return;
    if (path && path.startsWith("http")) {
      window.open(path);
    } else {
      router.push(path);
    }
    return;
  };
  onMounted(() => {
    instance = getCurrentInstance() as ComponentInternalInstance;
  });
  return yunTo;
}
