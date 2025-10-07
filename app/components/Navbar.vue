<template>
    <nav class="sticky top-0 z-50">
        <div class="container mx-auto px-8 bg-nav/95 backdrop-blur-sm shadow-lg rounded-lg">
            <div class="flex flex-col justify-center">
                <div class="flex items-center justify-between h-16">
                    <div>
                        <h1 class="text-gradient-primary text-2xl">Dublin Computer Science Club</h1>
                    </div>
                    <div>
                        <div class="hidden md:flex items-center gap-1">
                            <NavbarLink to="/">Home</NavbarLink>
                            <NavbarLink to="/about">About</NavbarLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>