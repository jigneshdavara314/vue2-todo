import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hello from "../pages/hello.vue";

describe("hello.vue", () => {
  it("Hello", () => {
    const wrapper = mount(Hello);
    expect(wrapper.vm).toBeTruthy();
  });
});
