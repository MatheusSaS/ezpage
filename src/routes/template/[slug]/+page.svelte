<script>
    import { page } from "$app/stores";

    $: console.log({ slug: $page.params.slug });
</script>

<section class="pb-20 pt-8 border-t border-brand-section-dashboard">
    <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-3">
            <div class="order-1 lg:order-0 w-full lg:w-3/4 px-3">
                <div class="bg-ezpage-dark rounded-xl">
                    <div
                        class="relative max-w-full overflow-hidden px-6 mx-auto preview-iframe-wrapper pt-6 pb-6"
                        style="width: 1366px;"
                    >
                        <iframe
                            src="https://shuffle.dev/preview/aafb76d95e4388616f9ec2de201a1316b0fe0788?page=services.html&extension=template"
                            style="height: 900px;"
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
            <div
                class="order-0 lg:order-1 w-full lg:w-1/4 px-3 mt-8 mb-10 lg:mt-0 lg:mb-0"
            >
                <a
                    href="/templates/lawyer"
                    class="inline-block mb-1 text-sm text-ezpage font-medium"
                    >Law Firm Website</a
                >
                <h2 class="mb-2 text-2xl font-semibold">
                    Justice Reliance Website Template for Law Firm
                </h2>
                <p class="mb-4 text-sm text-opacity-90">
                    Justice reliance will help you build an image as a
                    professional, trustworthy company. Law firm website template
                    allows you to showcase the experience that your company has
                    accumulated and expose how this will translate into success
                    for future clients.
                </p>
                <div
                    class="flex items-center justify-between flex-wrap py-3 border-t border-brand-section-dashboard"
                >
                    <span class="text-sm text-secondary font-medium"
                        >Preview</span
                    >
                    <div
                        class="inline-flex flex-wrap items-center justify-center w-auto p-3px bg-white border border-dashboard-input rounded shadow-randomizer-menu"
                    >
                        <button
                            data-change-preview-mode="desktop"
                            class="w-8 h-8 rounded flex items-center justify-center focus:outline-none hover:bg-brand-section-dashboard bg-brand-section-dashboard text-brand-blue"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.6667 2H3.33334C2.20001 2 1.33334 2.86667 1.33334 4V9.33333C1.33334 10.4667 2.20001 11.3333 3.33334 11.3333H7.33334V12.6667H4.66668C4.26668 12.6667 4.00001 12.9333 4.00001 13.3333C4.00001 13.7333 4.26668 14 4.66668 14H11.3333C11.7333 14 12 13.7333 12 13.3333C12 12.9333 11.7333 12.6667 11.3333 12.6667H8.66668V11.3333H12.6667C13.8 11.3333 14.6667 10.4667 14.6667 9.33333V4C14.6667 2.86667 13.8 2 12.6667 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <button
                            data-change-preview-mode="tablet"
                            class="w-8 h-8 ml-3px rounded flex items-center justify-center focus:outline-none hover:bg-brand-section-dashboard text-randomizer-gray-icon"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33334 4.66683L1.33334 11.3335C1.33334 12.4668 2.20001 13.3335 3.33334 13.3335L12.6667 13.3335C13.8 13.3335 14.6667 12.4668 14.6667 11.3335L14.6667 4.66683C14.6667 3.5335 13.8 2.66683 12.6667 2.66683L3.33334 2.66683C2.20001 2.66683 1.33334 3.5335 1.33334 4.66683ZM12 8.00016C12 8.40016 11.7333 8.66683 11.3333 8.66683C10.9333 8.66683 10.6667 8.40016 10.6667 8.00016C10.6667 7.60016 10.9333 7.3335 11.3333 7.3335C11.7333 7.3335 12 7.60016 12 8.00016Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <button
                            data-change-preview-mode="mobile"
                            class="w-8 h-8 ml-3px rounded flex items-center justify-center focus:outline-none hover:bg-brand-section-dashboard text-randomizer-gray-icon"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6666 1.3335H5.33331C4.19998 1.3335 3.33331 2.20016 3.33331 3.3335V12.6668C3.33331 13.8002 4.19998 14.6668 5.33331 14.6668H10.6666C11.8 14.6668 12.6666 13.8002 12.6666 12.6668V3.3335C12.6666 2.20016 11.8 1.3335 10.6666 1.3335ZM7.99998 12.0002C7.59998 12.0002 7.33331 11.7335 7.33331 11.3335C7.33331 10.9335 7.59998 10.6668 7.99998 10.6668C8.39998 10.6668 8.66665 10.9335 8.66665 11.3335C8.66665 11.7335 8.39998 12.0002 7.99998 12.0002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    class="flex justify-between flex-wrap py-4 border-t border-brand-section-dashboard"
                >
                    <span class="text-sm text-secondary font-medium"
                        >Framework</span
                    >
                    <div
                        class="flex items-center text-sm text-body font-semibold"
                    >
                        <img
                            class="h-3 mr-1"
                            src="/vendor/shuffle/img/logos/tailwind-css.svg"
                            alt="Tailwind CSS"
                        />
                        <span>Tailwind CSS</span>
                    </div>
                </div>
                <div
                    class="flex justify-between flex-wrap py-4 mb-3 border-t border-brand-section-dashboard"
                >
                    <span class="text-sm text-secondary font-medium"
                        >Base library</span
                    >
                    <div class="flex items-center text-sm font-semibold">
                        <img
                            src="https://static.shuffle.dev/files/1640967070/zeus.svg"
                            alt="Zeus"
                            class="h-4"
                        />
                        <span class="ml-2">Zeus</span>
                    </div>
                </div>
                <a
                    class="flex justify-center items-center mb-2 py-3 px-6 bg-brand-blue hover:bg-blue-600 text-sm text-white text-center font-medium leading-tight rounded transition duration-100"
                    href="/preset/aafb76d95e4388616f9ec2de201a1316b0fe0788"
                    target="_blank"
                    rel="noopener"
                >
                    <svg
                        class="text-brand-text inline mr-2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M6.6665 3.99996H3.99984C3.64622 3.99996 3.30708 4.14044 3.05703 4.39048C2.80698 4.64053 2.6665 4.97967 2.6665 5.33329V12C2.6665 12.3536 2.80698 12.6927 3.05703 12.9428C3.30708 13.1928 3.64622 13.3333 3.99984 13.3333H10.6665C11.0201 13.3333 11.3593 13.1928 11.6093 12.9428C11.8594 12.6927 11.9998 12.3536 11.9998 12V9.33329M9.33317 2.66663H13.3332M13.3332 2.66663V6.66663M13.3332 2.66663L6.6665 9.33329"
                                stroke="white"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </svg>
                    Open in Editor
                </a>
                <a
                    class="flex justify-center items-center py-3 px-6 bg-white hover:bg-gray-100 text-sm text-brand-text text-center font-medium leading-tight border rounded transition duration-100"
                    href="/components/tailwind/zeus"
                    target="_blank"
                    rel="noopener"
                >
                    <svg
                        class="text-brand-text inline mr-2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4">
                            <path
                                d="M6.66675 3.99999H4.00008C3.64646 3.99999 3.30732 4.14047 3.05727 4.39051C2.80722 4.64056 2.66675 4.9797 2.66675 5.33332V12C2.66675 12.3536 2.80722 12.6928 3.05727 12.9428C3.30732 13.1928 3.64646 13.3333 4.00008 13.3333H10.6667C11.0204 13.3333 11.3595 13.1928 11.6096 12.9428C11.8596 12.6928 12.0001 12.3536 12.0001 12V9.33332M9.33341 2.66666H13.3334M13.3334 2.66666V6.66666M13.3334 2.66666L6.66675 9.33332"
                                stroke="currentColor"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </svg>
                    View Components
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .border-0 {
        border-width: 0;
    }
</style>
