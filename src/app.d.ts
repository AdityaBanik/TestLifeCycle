// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string;
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				cache: KVNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			 };
			 caches: CacheStorage & { default: Cache };
		  
		}
	}
}

export {};
