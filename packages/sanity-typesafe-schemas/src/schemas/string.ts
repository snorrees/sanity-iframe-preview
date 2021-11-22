import { EnumListProps, SanitySchemaBase } from "./util-types/common";
import { Rule, Validation } from "./util-types/validation";
import { InitialValueProperty } from "@sanity/types/src/schema/types";

/**
 * [Text docs](https://www.sanity.io/docs/text-type)
 */
export interface StringSchema extends SanitySchemaBase {
  type: "text";
  options?: TextOptions;

  /**
   * Controls the number of rows/lines in the rendered textarea. Default number of rows: 10.
   */
  rows?: number;

  /** [Validation docs](https://www.sanity.io/docs/validation) */
  validation?: (rule: StringRule) => Validation<StringRule>;

  /** [Initial value docs](https://www.sanity.io/docs/initial-value-templates) */
  initialValue?: InitialValueProperty<string>;
}

export type TextOptions = EnumListProps<string>;

/** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
export interface StringRule extends Rule<StringRule> {
  /** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
  min: (length: number) => StringRule;
  /** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
  max: (length: number) => StringRule;
  /** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
  length: (length: number) => StringRule;
  /** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
  uppercase: () => StringRule;
  /** [Text validation docs]{@link https://www.sanity.io/docs/text-type#required()-35a8cd8fa2cd} */
  lowercase: () => StringRule;
  /** [Text validation docs]{https://www.sanity.io/docs/text-type#regex(pattern[,%20options])-22cedae7b25f} */
  regex: (
    pattern: string | RegExp,
    options?: {
      /**
       * Providing a name will make the message more understandable to the user '
       * ("Does not match the <name>-pattern").
       */
      name?: string;
      invert?: boolean;
    }
  ) => StringRule;
}
