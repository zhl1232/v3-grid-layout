import { describe, expect, it } from 'vitest';
import { defineComponent, h, provide, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { useInheritedBoolean } from './inherit-boolean';

const testKey = Symbol('test-inherited-boolean');

const Child = defineComponent({
  props: {
    propValue: {
      type: Boolean,
      default: null,
    },
  },
  setup(props) {
    const inherited = useInheritedBoolean(props.propValue, testKey, true);
    return () => h('span', inherited.value ? 'yes' : 'no');
  },
});

function mountWithParent(parentValue: boolean, propValue: boolean | null) {
  return mount({
    setup() {
      provide(testKey, ref(parentValue));
      return () => h(Child, { propValue });
    },
  });
}

describe('useInheritedBoolean', () => {
  it('inherits parent value when prop is null', () => {
    const wrapper = mountWithParent(false, null);
    expect(wrapper.text()).toBe('no');
  });

  it('uses explicit false to override parent true', () => {
    const wrapper = mountWithParent(true, false);
    expect(wrapper.text()).toBe('no');
  });

  it('uses explicit true to override parent false', () => {
    const wrapper = mountWithParent(false, true);
    expect(wrapper.text()).toBe('yes');
  });
});
