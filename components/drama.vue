<template>
    <div class="container mx-auto p-5">
        <h1 class="font-semibold text-xl mb-4">电视剧</h1>
        <div class="border-l-2 border-indigo-500 pl-2">包含我看过的美剧、韩剧、日剧</div>
        <div class="py-4">当然有可能也会有国产剧,如果它不辣眼睛的话</div>

        <div class="mt-4">
            <div class="indicator">
                <span class="indicator-item badge badge-primary">new</span> 
                <div class="grid mr-4 w-44 h-auto bg-base-300 place-items-center">
                    <img src="../public/img/Quiet.jpg" alt="">
                    <Rating class="my-4" />
                    <a class="text-primary font-semibold mb-4">Tulsa King</a>
                    <div class="flex space-between">
                        <div>Trailer</div>
                        <div>SOS</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>