<script>
    import icon1 from '$lib/assets/Home/icon 1.png';
    import icon2 from '$lib/assets/Home/icon 2.png';
    import icon3 from '$lib/assets/Home/icon 3.png';
    import icon4 from '$lib/assets/Home/icon 4.png';
    import icon5 from '$lib/assets/Home/icon 5.png';
    import icon6 from '$lib/assets/Home/icon 6.png';
    import img1 from '$lib/assets/Home/pc.png';
</script>

<section class="px-4 py-8 flex items-center flex-wrap ml-10">
    <div class="w-full md:w-1/2 lg:w-1/2 mb-6">
        <h2 class=" border-color1 text-3xl text-gray-600 border-l-4 pl-5 font-bold mb-2"><span class="color1">TITAN</span> is accelerating digital transformation</h2>
        <p class="text-gray-600 font-bold pt-3 pl-6">It's all about creating engaging experiences, fostering collaboration, and building a happier workplace</p>
        
        <img src={img1} alt="img1" class="w-full md:hidden lg:hidden mb-6">

        <div class="grid grid-cols-3  md:grid-cols-2  gap-4 pt-5">
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon1} alt="Icon">
                <p class="Description text-black md:-ml-5 ">
                    <span class=" pcolor font-bold text-3xl mb-4">25%</span><br>Turnaround time reduced.
            
                </p>
            </article>
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon2} alt="Icon">
                <p class=" Description text-black md:-ml-5">
                    <span class="pcolor font-bold text-2xl">70%</span> <br>Increase in collaboration productivity
                </p>
            </article>
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon6} alt="Icon">
                <p class="Description text-black md:-ml-5">
                    <span class="pcolor font-bold text-3xl">50%</span> <br>Time saved to search & reuse information
                </p>
            </article>
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon4} alt="Icon">
                <p class="Description text-black md:-ml-5">
                    <span class="pcolor font-bold text-3xl">30%</span> <br>Decrease in quality issues
                </p>
            </article>
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon5} alt="Icon">
                <p class="Description text-black md:-ml-5">
                    <span class="pcolor font-bold text-3xl">20%</span> <br>Increase in operational efficiency
                </p>
            </article>
            <article class="mb-4 flex items-center">
                <img class="iconimg mr-1" src={icon3} alt="Icon">
                <p class="Description text-black md:-ml-5">
                    <span class=" pcolor font-bold text-3xl">40%</span> <br> Reduction in error rate
                </p>
            </article>
        </div>
    </div>

    
        <img src={img1} alt="dimg" class="w-700 h-400 hidden md:block lg:block w-full mt-10 md:w-1/2 lg:w-1/2 justify-end">

</section>

<style>
    .iconimg{
        width: 90px;
        height: 90px;
    }
    .pcolor{
        color: #fa854f;
        font-size: clamp(0.5rem, 3vw, 1.5rem);
    }
    .color1{
        color: #fa854f; 
    }
    .border-color1{
        border-left-color: #fa854f;
    }
    .Description{
        font-size: clamp(0.4rem, 2vw, 1.0rem);
    }
   
    @media only screen and (max-width: 600px)  {
        .iconimg {
            width: 50px; 
            height: 50px;
        }
        .Description{
            margin-left: -4;
        }
       
    }
   
</style>