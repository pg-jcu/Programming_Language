export {};

// 2822 - Split
type Split<
  S extends string,
  SEP extends string,
  Results extends string[] = []
> = string extends S
  ? string[]
  : S extends SEP
  ? Results
  : S extends `${infer Prefix}${SEP}${infer Suffix}`
  ? Split<Suffix, SEP, [...Results, Prefix]>
  : [...Results, S];
