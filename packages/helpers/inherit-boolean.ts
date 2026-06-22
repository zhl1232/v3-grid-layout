import { computed, inject, InjectionKey, Ref, ref } from 'vue'

/**
 * Inherit a boolean prop from parent when the item-level value is not explicitly set.
 */
export function useInheritedBoolean(propValue: boolean | null, key: InjectionKey<Ref<boolean>>, fallback = true) {
  const fromParent = inject(key, ref(fallback))
  return computed(() => (propValue !== null ? propValue : fromParent.value))
}
