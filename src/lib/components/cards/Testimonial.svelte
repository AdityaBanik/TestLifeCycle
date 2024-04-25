<script lang="ts">
	import { client } from '$lib';
	import { graphql } from '$lib/gql';
	import { onDestroy, onMount } from 'svelte';
	import type { GetTestimonialsQuery } from '$lib/gql/graphql';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	let data: GetTestimonialsQuery;

	export let lang: string;
	let intervalId: string | number | NodeJS.Timeout | undefined;
	let activeIndex: number = 0;
	onMount(async () => {
		const query = graphql(`
			# Write your query or mutation here

			query getTestimonials($lang: I18NLocaleCode) {
				titanTestimonials(locale: $lang) {
					data {
						attributes {
							name
							content
							designation
							avatar {
								data {
									attributes {
										url
										alternativeText
									}
								}
							}
							companyLogo {
								data {
									attributes {
										url
										alternativeText
									}
								}
							}
						}
					}
				}
			}
		`);

		const variables = { lang: lang };

		data = await client.request(query, variables);
		intervalId = setInterval(() => {
			const dataLength = data?.titanTestimonials?.data.length || 1;
			if (dataLength - 1 === activeIndex) {
				activeIndex = 0;
			} else {
				activeIndex += 1;
			}
		}, 6000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<section
	class="md:min-w-[500px] mr-12 h-[400px] flex flex-col justify-center md:mr-24 mb-10 md:mb-24 text-white relative max-w-xl 2xl:max-w-2xl p-6 md:p-12 bg-gradient-to-br rounded-2xl from-sky-500 to-indigo-500"
>
	{#key activeIndex}
		<p
			class="mb-5 fluid-font md:text-sm 2xl:text-base font-light"
			in:fade={{ duration: 1000, easing: cubicInOut }}
		>
			{data?.titanTestimonials?.data[activeIndex].attributes?.content || ''}
		</p>

		<div
			class="flex items-center mr-8 md:mr-16 mb-5"
			in:fade={{ duration: 1000, easing: cubicInOut }}
		>
			<p
				class="not-italic font-medium whitespace-nowrap text-xs md:text-lg border-r-2 pr-3 md:pr-10 py-2 mr-3"
			>
				{data?.titanTestimonials?.data[activeIndex].attributes?.name || ''}
			</p>
			<p class="italic fluid-font md:text-sm">
				{data?.titanTestimonials?.data[activeIndex].attributes?.designation || ''}
			</p>
		</div>
		<img
			in:fade={{ duration: 1000, easing: cubicInOut }}
			class="w-20 text-white"
			src={data?.titanTestimonials?.data[activeIndex].attributes?.companyLogo?.data?.attributes
				?.url}
			alt={data?.titanTestimonials?.data[activeIndex].attributes?.companyLogo?.data?.attributes
				?.alternativeText}
		/>

		<div
			class="w-28 md:w-48 bg-slate-300 aspect-square absolute bottom-0 translate-y-1/2 translate-x-1/2 right-0 rounded-2xl shadow-lg"
		>
			<img
				in:fade={{ duration: 1000, easing: cubicInOut }}
				src={data?.titanTestimonials?.data[activeIndex].attributes?.avatar?.data?.attributes?.url ||
					''}
				class=" h-full w-full rounded-2xl object-cover"
				alt=""
			/>
		</div>
	{/key}
</section>
