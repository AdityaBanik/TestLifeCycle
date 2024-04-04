<script lang="ts">
	import Accordian from "$lib/components/accordian/Accordian.svelte";
    import AccordianItem from "$lib/components/accordian/AccordianItem.svelte";
    
</script>


    <section class="container ">
        <div class="text-center py-12">
            <div class="sub-section bg-cover bg-center" style="background-image: url('/assets/about-us-image.png');">
                <h1 class="About-cover-title mb-20 font-bold leading-tight capitalize text-black text-center">WE ARE HERE TO HELP YOU WITH YOUR <br>DIGITAL TRANSFORMATION</h1>
                <article class="shadow-sm border bg-white pt-5 md:pt-5 mx-4 md:mx-auto lg:max-w-4xl rounded-lg">
                    <div class="flex items-center justify-center">
                        <div class="border-b-2 border-purple-500 w-1/4 md:w-1/6 mr-4"></div>
                        <h2 class="box-title text-purple-500 font-bold text-lg md:text-xl">About Us</h2>
                        <div class="border-b-2 border-purple-500 w-1/4 md:w-1/6 ml-4"></div>
                    </div>
                    <p class="box-text text-justify py-5 px-6 md:px-10 text-gray-800 text-sm md:text-base">Our mission is to provide technology solutions to help our customers innovate, grow, and succeed. <br><br>
                        Established in 2012, 12th Wonder has been developing cutting edge applications and driving innovation. We have a proven track record of delivering successful software solutions that meet or exceed customer’s expectations. 
                        We specialize in product engineering, designing, and developing custom applications using both open source and proprietary technologies. We have successfully transformed many manual processes to flexible automated workflows. 
                        <br><br>Our products are engineered for simplicity, intuitive to use, and to add value to our clients. Our team consists of engineers, data scientists, and polyglots who work smart and play hard</p>
                </article>  
            </div>
        </div> 
    </section>     
    
    
    <section>
        <Accordian>
            <AccordianItem>
                <svelte:fragment slot="title">hello</svelte:fragment>
                <article>I am aditya</article>
            </AccordianItem>
            <AccordianItem>
                <svelte:fragment slot="title">hello</svelte:fragment>
                <article>I am dumb</article>
            </AccordianItem>
        </Accordian>
    </section>

<style>
    .About-cover-title {
        font-size: clamp(0.2rem, 4.5vw, 2rem);
    }
    .box-title {
        font-size: clamp(0.2rem, 3.5vw, 1.5rem);
    }
    .container{
        background-image: linear-gradient(#a1a9e9, #c283e5, #fff);
    }
</style>
