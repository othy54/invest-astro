<template>
    <div class="row section-geographical-position__row-strategy relative pt-[200px] pb-[380px]">
        <div class="container relative">
            <img class="section-geographical-position__asset-t-l absolute blur-[4px]" src="/images/asset-left-top.svg"
                alt="" width="134" height="150" loading="lazy">
            <img class="section-geographical-position__asset-t-r absolute" src="/images/asset-right-top.svg" alt=""
                width="85" height="81" loading="lazy">
            <img class="section-geographical-position__asset-b-l absolute" src="/images/asset-left-bottom.svg" alt=""
                width="195" height="130" loading="lazy">
            <img class="section-geographical-position__asset-b-r absolute blur-[4px]"
                src="/images/asset-right-bottom.svg" alt="" width="412" height="248" loading="lazy">
            <div>
                <div
                    class="surtitle-section text-invest-400 uppercase font-bold text-center max-w-[23.6rem] mx-auto text-balance">
                    {{ title }}
                </div>
                <div
                    class="section-geographical-position__strategy-text text-grayscale-0 text-center mx-auto font-medium mt-[56px] lg:mt-20">
                    {{ text }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import SplitType from 'split-type';
import { animate, scroll } from 'motion';

const { title, text } = defineProps(['title', 'text']);

onMounted(() => {
    const position = new SplitType('.section-geographical-position__strategy-text', { types: 'chars, lines' });

    position.chars.forEach((char, i) => {
        scroll(animate(char, { '--opacity': [1, 0] }), { target: char, offset: [i * 0.05 + ' 0.8', i * 0.05 + ' 0.9'] })
    })
})

</script>
<style lang="scss">
/* SECTION POSITION GEOGRPAHIQUE  */

.section-geographical-position {
    &__strategy-text {

        font-size: calc(28px + 28*((100vw - 390px) / 704));
        line-height: calc(36.5px + 36.5*((100vw - 390px) / 704));
        letter-spacing: calc(-16em / 1000);
        -webkit-text-stroke: 1px var(--color-grayscale-0);
        -webkit-text-fill-color: transparent;

        @media screen and (min-width: 1024px) {
            font-size: calc(28px + 28*((100vw - 961px) / 961));
            line-height: calc(33.5px + 33.5*((100vw - 961px) / 961));
            max-width: calc(566px + 566*((100vw - 961px) / 961));
        }

        & .char {
            --opacity: 0;
            background-color: rgba(255, 255, 255, var(--opacity));
            -webkit-background-clip: text;
        }
    }



    &__row-strategy {

        padding-top: calc(100px + 100*((100vw - 961px) / 961));
        padding-bottom: calc(190px + 190*((100vw - 961px) / 961));

        &::before {
            content: '';
            width: calc(740px + 740*((100vw - 961px) / 961));
            aspect-ratio: 1;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(245, 176, 124, 1) 0%, rgba(245, 176, 124, 0) 50%);
            background-repeat: no-repeat;
            background-position: 50%;
            mix-blend-mode: color-dodge;
        }
    }

    &__asset-t-l {
        left: calc(200px + 200*((100vw - 961px) / 961));
        top: calc(-50px + -50*((100vw - 961px) / 961));
        max-width: calc(66px + 66*((100vw - 961px) / 961));
        transform: translateY(90%);
        animation: move-t-l forwards;
        animation-timeline: view();
    }

    &__asset-t-r {
        right: calc(200px + 200*((100vw - 961px) / 961));
        top: calc(-20px + -20*((100vw - 961px) / 961));
        max-width: calc(42.5px + 42.5*((100vw - 961px) / 961));
        transform: translateY(70%);
        animation: move-t-r forwards;
        animation-timeline: view();
    }

    &__asset-b-l {
        left: calc(140px + 140*((100vw - 961px) / 961));
        bottom: calc(-20px + -20*((100vw - 961px) / 961));
        max-width: calc(97.5px + 97.5*((100vw - 961px) / 961));
        transform: translateY(20%);
        animation: move-b-l forwards;
        animation-timeline: view();
    }

    &__asset-b-r {
        right: calc(90px + 90*((100vw - 961px) / 961));
        bottom: calc(-140px + -140*((100vw - 961px) / 961));
        max-width: calc(206px + 206*((100vw - 961px) / 961));
        transform: translateY(20%);
        animation: move-b-l forwards;
        animation-timeline: view();
    }
}

@keyframes move-t-l {
    to {
        transform: translateY(0%);
    }
}

@keyframes move-t-r {
    to {
        transform: translateY(90%);
    }
}

@keyframes move-b-l {
    to {
        transform: translateY(-20%);
    }
}
</style>