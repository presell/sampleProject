// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fZDBpiWqU61ZjNvhThHuFB
// Component: EqEvCI_4Rn
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import Signup from "../../Signup"; // plasmic-import: 9g7i6FSBWB/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: fZDBpiWqU61ZjNvhThHuFB/projectcss
import sty from "./PlasmicSign.module.css"; // plasmic-import: EqEvCI_4Rn/css

export type PlasmicSign__VariantMembers = {};
export type PlasmicSign__VariantsArgs = {};
type VariantPropType = keyof PlasmicSign__VariantsArgs;
export const PlasmicSign__VariantProps = new Array<VariantPropType>();

export type PlasmicSign__ArgsType = {};
type ArgPropType = keyof PlasmicSign__ArgsType;
export const PlasmicSign__ArgProps = new Array<ArgPropType>();

export type PlasmicSign__OverridesType = {
  root?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  form?: p.Flex<"form">;
  signup?: p.Flex<typeof Signup>;
  text?: p.Flex<"div">;
};

export interface DefaultSignProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSign__RenderFunc(props: {
  variants: PlasmicSign__VariantsArgs;
  args: PlasmicSign__ArgsType;
  overrides: PlasmicSign__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <DataFetcher
            data-plasmic-name={"httpApiFetcher"}
            data-plasmic-override={overrides.httpApiFetcher}
            className={classNames("__wab_instance", sty.httpApiFetcher)}
            dataName={"fetchedData" as const}
            errorDisplay={
              <ph.DataCtxReader>
                {$ctx => "Error fetching data"}
              </ph.DataCtxReader>
            }
            headers={{
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer keyVDvhyVSx5Ntbl3"
            }}
            loadingDisplay={
              <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
            }
            method={"GET" as const}
            noLayout={false}
            url={
              "https://api.airtable.com/v0/appmM1mMqcDvugXhY/Requests?id" as const
            }
          >
            <ph.DataCtxReader>
              {$ctx => (
                <form
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  action={
                    "https://hook.us1.make.com/o91gaw2kgt1xmrf7ae6iw24ou6uvuw1b" as const
                  }
                  className={classNames(projectcss.all, sty.form)}
                  method={"post" as const}
                >
                  <Signup
                    data-plasmic-name={"signup"}
                    data-plasmic-override={overrides.signup}
                    className={classNames("__wab_instance", sty.signup)}
                  />
                </form>
              )}
            </ph.DataCtxReader>
          </DataFetcher>

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Sign UP Form"}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpApiFetcher", "form", "signup", "text"],
  httpApiFetcher: ["httpApiFetcher", "form", "signup"],
  form: ["form", "signup"],
  signup: ["signup"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpApiFetcher: typeof DataFetcher;
  form: "form";
  signup: typeof Signup;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSign__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSign__VariantsArgs;
    args?: PlasmicSign__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSign__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSign__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSign__ArgProps,
          internalVariantPropNames: PlasmicSign__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSign";
  } else {
    func.displayName = `PlasmicSign.${nodeName}`;
  }
  return func;
}

export const PlasmicSign = Object.assign(
  // Top-level PlasmicSign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    form: makeNodeComponent("form"),
    signup: makeNodeComponent("signup"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSign
    internalVariantProps: PlasmicSign__VariantProps,
    internalArgProps: PlasmicSign__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSign;
/* prettier-ignore-end */
