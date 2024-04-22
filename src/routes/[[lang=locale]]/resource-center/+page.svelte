<script>
  import about from '$lib/assets/Resource-center.png';
</script>

<style>
  .title {
        font-size: clamp(0.2rem, 4.5vw, 2rem);
  }

  .btitle {
      font-size: clamp(0.2rem, 4vw, 1.5rem);
    }

    .bparagraph {
      font-size: clamp(0.2rem, 3vw, 0.9rem);
    }
</style>

<div class="text-3xl ml-10 font-bold mb-16 mt-10 title">
  <h1>Resource Center</h1>
</div>

<div class="flex flex-col md:flex-row p-10 mb-10 ml-10 mr-10">
  <!-- box 1 -->
  <div class="flex-item flex-1 md:max-h-500px md:w-1/2">
    <div class="flex justify-center items-center h-full">
      <img src={about} alt="Description">
    </div>
  </div>
  <!-- box 2 -->
  <div class="flex-item p-4 flex-1 bg-white md:mt-10 md:mb-10 md:-ml-40 md:relative shadow-lg md:w-1/2 border">
    <h2 class="text-lg mb-2 ml-5 text-blue-600 mt-5 btitle ">Case Study</h2>
    <h3 class="text-md ml-5 text-black font-bold mb-2 ">Transforming Test Lifecycle Management: Real-World Success Stories with Titan</h3>
    <p class="text-black  ml-5 mb-4 bparagraph">Facing the automotive industry's need for speed and safety, the Titan Test Lifecycle Management Solution automates and streamlines test processes, enabling teams to innovate efficiently. By integrating planning, execution, analysis, and reporting, Titan significantly boosts efficiency and accuracy. This case study showcases Titan's impact in a crash test scenario, highlighting its role in enhancing quality and accelerating the introduction of new automotive technologies.</p>
    <div> 
      <button class="bg-black ml-5 mt-2 hover:bg-gray-700 text-white py-2 px-16 rounded-3xl">Download</button>
    </div>
  </div>
</div>
