<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="drawer indexAll">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <!-- Page content here -->
                <label for="my-drawer" class="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        /></svg
                    >
                </label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay" />
                <ul
                    class="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
                >
                    <!-- Sidebar content here -->
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="navbar-center">
        <img src="/ezpage.svg" class="w-12" alt="" />
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
            >
        </button>
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    /></svg
                >
                <span class="badge badge-xs badge-ezpage indicator-item" />
            </div>
        </button>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar"
            ><div class="w-10 rounded-full">
                <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div></label
        >
    </div>
</div>

<style>
    .indexAll {
        z-index: 999;
    }
</style>
