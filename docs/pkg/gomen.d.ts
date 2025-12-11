declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	
	export class Queue {
	  free(): void;
	  [Symbol.dispose](): void;
	  constructor();
	  add_bag(shapes: string, count: number): void;
	  add_shape(shape: string): void;
	}
	
	export class Solver {
	  free(): void;
	  [Symbol.dispose](): void;
	  constructor(legal_boards?: Uint8Array | null);
	  solve(queue: Queue, garbage: bigint, can_hold: boolean, physics: string): string;
	  is_fast(garbage: bigint): boolean;
	}
	
	export function decode_fumen(encoded: string): string;
	
	export function solution_info(encoded: string): string;
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_queue_free: (a: number, b: number) => void;
  readonly __wbg_solver_free: (a: number, b: number) => void;
  readonly decode_fumen: (a: number, b: number) => [number, number];
  readonly queue_add_bag: (a: number, b: number, c: number, d: number) => void;
  readonly queue_add_shape: (a: number, b: number) => void;
  readonly queue_new: () => number;
  readonly solution_info: (a: number, b: number) => [number, number];
  readonly solver_init: (a: number) => number;
  readonly solver_is_fast: (a: number, b: bigint) => number;
  readonly solver_solve: (a: number, b: number, c: bigint, d: number, e: number, f: number) => [number, number];
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
