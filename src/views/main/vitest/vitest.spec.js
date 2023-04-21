import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import { describe, it } from "vitest";
import VitestPage from "./vitest.vue";
describe("测试vitest", () => {
  const wrapper = mount(VitestPage);
  it("vites组件", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
