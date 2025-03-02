<template>
    <a class="w-fit block" :href="link" :target="target">
        <button class="button" :class="[variants[variant], sizes[size]]">
            <div class="button__arrow">
                <svg :class="target ? 'rotate-[-45deg]' : ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                    <g id="arrow-right" transform="translate(-684 -1703)">
                        <rect id="Rectangle_13" data-name="Rectangle 13" width="21" height="21"
                            transform="translate(684 1703)" opacity="0">
                        </rect>
                        <path id="Tracé_24" data-name="Tracé 24"
                            d="M118.282,138.268l-4.017-4.017-1.323,1.323,3.081,3.081h-9.356v1.871h9.356l-3.081,3.081,1.323,1.323,4.017-4.017a1.859,1.859,0,0,0,.031-2.636.029.029,0,0,0-.031-.01"
                            transform="translate(581.314 1573.91)">
                        </path>
                    </g>
                </svg>
            </div>
            <span>
                {{ label }}
            </span>
        </button>
    </a>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    link: {
        type: String,
    },
    target: {
        type: String,
        default: null
    },
    label: {
        type: String,
        default: 'Bouton'
    }
});

const variants = ref({
    secondary:
        "bg-dark-blue-950 hover:bg-dark-blue-950/88 text-grayscale-0 fill-grayscale-0",
    tertiary:
        "bg-grayscale-0 hover:bg-grayscale-300 text-dark-blue-950 border-[1px] border-dark-blue-950/24",
    link: "text-dark-blue-950 bg-transparent hover:text-dark-blue-950/80 fill-invest-400 p-0",
    "link-dark":
        "text-grayscale-0 bg-transparent hover:text-grayscale-0/80 fill-invest-400 p-0",
    default:
        "bg-invest-500 hover:bg-invest-400 text-dark-blue-950 fill-dark-blue-950",
});

const sizes = ref({
    big: "button-big",
    small: "text-yellow-50 bg-yellow-400",
    link: "button-link",
    default: "button-default",
});
</script>
<style lang="scss">
@use '../styles/button.scss';
</style>