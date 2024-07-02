/*
 * @Author: chenyx
 * @Date: 2024-06-28 11:34:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-30 17:35:58
 * @FilePath: /threegold-ui/packages/hooks/use-namespace/index.ts
 */
//  BEM规范
//  block--代码块 elemen--元素 modifier--修饰符 state--状态
//  例如：button--按钮 button__element--按钮元素 button--modifier--按钮修饰符 button--state--按钮状态

const defaultNamespace = "tg";
const statePrefix = "is-";

const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};

export const useNamespace = (block: string) => {
    const namespace = defaultNamespace;
    const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");
    const e = (element?: string) =>
        element ? _bem(namespace, block, "", element, "") : "";
    const m = (modifier?: string) =>
        modifier ? _bem(namespace, block, "", "", modifier) : "";
    const be = (blockSuffix?: string, element?: string) =>
        blockSuffix && element
            ? _bem(namespace, block, blockSuffix, element, "")
            : "";
    const em = (element?: string, modifier?: string) =>
        element && modifier
            ? _bem(namespace, block, "", element, modifier)
            : "";
    const bm = (blockSuffix?: string, modifier?: string) =>
        blockSuffix && modifier
            ? _bem(namespace, block, blockSuffix, "", modifier)
            : "";
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
        blockSuffix && element && modifier
            ? _bem(namespace, block, blockSuffix, element, modifier)
            : "";
    const is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        return name && state ? `${statePrefix}${name}` : "";
    };

    // for css var
    // --el-xxx: value;
    const cssVar = (object: Record<string, string>) => {
        const styles: Record<string, string> = {};
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace}-${key}`] = object[key];
            }
        }
        return styles;
    };
    // with block
    const cssVarBlock = (object: Record<string, string>) => {
        const styles: Record<string, string> = {};
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace}-${block}-${key}`] = object[key];
            }
        }
        return styles;
    };

    const cssVarName = (name: string) => `--${namespace}-${name}`;
    const cssVarBlockName = (name: string) => `--${namespace}-${block}-${name}`;

    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
        // css
        cssVar,
        cssVarName,
        cssVarBlock,
        cssVarBlockName,
    };
};
