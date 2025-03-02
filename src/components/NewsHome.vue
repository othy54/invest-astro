<template>
    <section class="section-news mt-24 relative overflow-clip">
        <div class="row">
            <div class="container">
                <div class="text-center text-invest-500 uppercase surtitle-section font-bold">
                    Actualités
                </div>
                <div class="text-center text-dark-blue-950 title-section-news font-medium mt-[8px]">
                    Des acteurs engagés
                </div>
            </div>
        </div>

        <div class="row mt-[40px] lg:mt-[80px]">
            <div class="container">
                <div class="section-news__glide rotate-[-2deg]">
                    <div class="glide__track" data-glide-el="track">
                        <div class="glide__slides flex">
                            <div class="glide__slide" v-for="article in content.edges" :key="article">
                                <div class="relative">
                                    <div class="relative section-news__image-slide">
                                        <img class="absolute w-full h-full object-cover pointer-events-none"
                                            :src="article.node.featuredImage.node.sourceUrl" alt="slide" width="576"
                                            height="408" loading="lazy" />
                                    </div>
                                    <div
                                        class="section-news__article bg-grayscale-50 py-[25px] px-[28px] w-[95%] lg:w-[80%] flex flex-col justify-between absolute left-1/2 bottom-[-30%] lg:bottom-[-20%] -translate-x-1/2">
                                        <a href="">
                                            <div class="section-news__title-article">
                                                {{ trim(article.node.title) }}
                                            </div>
                                        </a>
                                        <div class="section-news__time-article uppercase text-grayscale-600">
                                            {{ formatDate(article.node.date) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button class="mx-auto mt-40" label="Voir tout" variant="tertiary" />
            </div>
        </div>
        <img class="absolute left-0 bottom-0 w-full pointer-events-none" src="/images/separator-bottom-blue.svg" alt=""
            width="1920" height="64" loading="lazy" />
    </section>
</template>
<script setup>
import Button from './Button.vue';
import Glide, { Breakpoints, Swipe } from '@glidejs/glide/dist/glide.modular.esm.js';
import { onMounted } from 'vue';

const { content } = defineProps(['content']);

onMounted(() => {
    initGlide();
})

const initGlide = () => {
    new Glide('.section-news__glide', {
        type: 'carousel',
        perView: 2.8,
        gap: 50,
        breakpoints: {
            768: {
                type: 'carousel',
                perView: 1,
                gap: 20,
            },
            1024: {
                type: 'carousel',
                perView: 2,
                gap: 20,
            }
        }
    }).mount({ Breakpoints, Swipe });
}

const trim = (text, numWords = 8, more = '...') => {
    const words = text.split(/\s+/);
    if (words.length > numWords) {
        return words.slice(0, numWords).join(' ') + more;
    }
    return text;
}

const formatDate = (date) => {
    const newDate = new Date(date.split('T').shift());
    return newDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
}

</script>
<style lang="scss">
/* SECTION ACTUALITES */

.section-news {
    padding-bottom: calc(80px + 80 * ((100vw - 390px) / 704));

    @media screen and (min-width: 768px) {
        padding-bottom: calc(160px + 160 * ((100vw - 1024px) / 896));
    }

    &__image-slide {
        height: calc(316px + 316 * ((100vw - 390px) / 634));

        @media screen and (min-width: 768px) {
            height: calc(316px + 316 * ((100vw - 768px) / 256));
        }

        @media screen and (min-width: 1024px) {
            height: calc(204px + 204 * ((100vw - 961px) / 961));
        }
    }

    &__article {
        height: calc(142px + 142 * ((100vw - 390px) / 704));
        padding-block: calc(12.5px + 12.5 * ((100vw - 390px) / 704));
        padding-inline: calc(14px + 14 * ((100vw - 390px) / 704));

        @media screen and (min-width: 1024px) {
            height: calc(92px + 92 * ((100vw - 961px) / 961));
            padding-block: calc(12.5px + 12.5 * ((100vw - 961px) / 961));
            padding-inline: calc(14px + 14 * ((100vw - 961px) / 961));
        }
    }

    &__title-article {
        font-size: calc(20px + 20 * ((100vw - 390px) / 704));
        line-height: calc(20px + 20 * ((100vw - 390px) / 704));

        @media screen and (min-width: 768px) {
            font-size: calc(20px + 20 * ((100vw - 768px) / 256));
            line-height: calc(24px + 24 * ((100vw - 768px) / 256));
        }

        @media screen and (min-width: 1024px) {
            font-size: calc(11px + 11 * ((100vw - 961px) / 961));
            line-height: calc(14px + 14 * ((100vw - 961px) / 961));
        }
    }

    &__time-article {
        opacity: 0.8;
    }

    & .glide__track {
        overflow: visible;
    }

    & .glide__slides {
        overflow: visible;
    }
}

.surtitle-section {
    font-size: calc(16px + 16 * ((100vw - 390px) / 704));
    line-height: calc(19px + 19 * ((100vw - 390px) / 704));

    @media screen and (min-width: 1024px) {
        font-size: calc(12px + 12 * ((100vw - 961px) / 961));
        line-height: calc(14px + 14 * ((100vw - 961px) / 961));
    }
}

.title-section-news {
    letter-spacing: calc(-24em / 1000);
    font-size: calc(32px + 32 * ((100vw - 390px) / 704));
    line-height: calc(32px + 32 * ((100vw - 390px) / 704));

    @media screen and (min-width: 1024px) {
        font-size: calc(32px + 32 * ((100vw - 961px) / 961));
        line-height: calc(33px + 33 * ((100vw - 961px) / 961));
    }
}
</style>