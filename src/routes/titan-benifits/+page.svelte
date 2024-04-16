<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/buttons/Button.svelte';

	export let data: PageData;
</script>

<section class="container flex flex-col py-3  lg:gap-8 lg:py-3">
	<h1 class="fluid-title font-bold">
		Have a product in development and you need to maintain <span class="text-blue-500 font-bold">
			your reputation, quality and stay on top of test process</span
		> with moving parts?
	</h1>
 
	<div class="prose py-5  lg:py-9">
		<Button text="Request Demo" className='no-underline'/>
		<p class="text-justify">
			<strong class="text-blue-500">TITAN</strong>
			<span class="text-blue-500">Test Lifecycle Management</span> is the only tool you need to manage
			the entire end-to-end Test Process. No more having to use dozens of different spreadsheets and
			incident tracking tools, TITAN replaces them all, keeping everything in sync in one secure environment.
			Every input made by each user is tracked and adds to the full story of the test from its initial
			concept to final completion and remains readily available as historical records. All this valuable
			information is right there in the same place and easily accessed.
		</p>
	</div>
</section>

<section class="container py-4">
	<h2 class="font-bold fluid-subtitle">
		<span class="text-blue-500">01 |</span> Process Standardization
	</h2>
	<article class="p-2 flex justify-between flex-col lg:gap-4 items-center lg:flex-row lg:p-0">
		<div class="discription lg:w-[50%]">
			<p class="text-justify flex flex-col">
				<span
					>There are several ways in which TITAN can help you to standardize processes, eliminate
					inefficiency, increase quality, reduce reliance on tribal knowledge.</span
				><br />
				<span> ​Four key ways TITAN help you standardize your testing activities are:</span><br />
				<span>
					​<span class="font-medium">Test Catalog:</span> With TITAN, you can easily create test procedures and define the process
					as checklists. The checklists can be structured for instructing users on how to run a test
					or for data collection and specifying mandatory photographs to be taken before, during and
					after the test execution.</span
				><br />
				<span>
					<span class="font-medium">Report Automation:</span> With TITAN, you can with the click of a button generate a report
					reusing the information and uploaded data files in your enterprise’s report format. Reports
					can be automated to include information like test plan details, test article details, test
					images, observations, counter measures and incidents.</span
				>
				<span
					><br />
					<span class="font-medium">Workflow Automation:</span> With TITAN, you can easily the define the steps that a test, work
					orders, issues must follow. This ensures that work is being done consistently and predictably.</span
				>
			</p>
		</div>
		<div class="img lg:w-[50%]">
			<img
				src="https://static.wixstatic.com/media/454d4b_692f9b8edbfd481894428abd9deb2b33~mv2.png/v1/crop/x_442,y_138,w_2662,h_1626/fill/w_898,h_548,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/454d4b_692f9b8edbfd481894428abd9deb2b33~mv2.png"
				alt="sheetImg1"
			/>
		</div>
	</article>

	<article class="p-2 flex justify-between flex-col lg:flex-row-reverse lg:gap-7 items-center">
		<div class="discription lg:w-[50%]">
			<h2 class="font-bold fluid-subtitle">
			<span class="text-blue-500">02 |</span> Resource Optimization
			</h2>
			<p class="text-justify flex flex-col py-1">
				<span>
					<b>TITAN</b> provides user friendly and powerful scheduling features for optimizing resource
					utilization of test facilities, prototype vehicles, test articles, equipment, and
					personnel.</span
				><br />
				<span>
					​TITAN displays the lists of available test facility, Users, Vehicle, and equipment
					availability this helps you to have a glance at the available resources in hand during
					test creation.</span
				><br />
				<span>
					Should you have a sudden change in test facility, technicians or equipment, TITAN can
					handle such unplanned changes and send out updates to all its associated teammates.
					Additionally, you may also Add/ Remove the number of days from a test. TITAN can also help
					you split the test between multiple facilities, provide downtime notification, view
					scheduled maintenance, view upcoming calibrations, and view any conflict notification
					between tests.</span
				><br />
				<span>
					See how TITAN makes can assist you in Resource planning activity <a href="#"
						>Request Demo</a
					></span
				>
			</p>
		</div>
		<div class="img lg:w-[50%]">
			<img
				src="https://static.wixstatic.com/media/454d4b_1a1ac33febe44380b8375c19f90acc67~mv2.png/v1/fill/w_773,h_562,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/454d4b_1a1ac33febe44380b8375c19f90acc67~mv2.png"
			alt="sheetImg2"/>
		</div>
	</article>
</section>

<style>
	.fluid-title {
		font-size: clamp(0.65rem, 2.5vw, 3.5rem) !important;
	}

	.fluid-subtitle {
		font-size: clamp(0.63rem, 2.5vw, 2rem);
	}
	p {
		font-size: clamp(0.7rem, 2.2vw, 1.3rem) !important;
	}

</style>
