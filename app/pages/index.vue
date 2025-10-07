<script setup lang="ts">
import { Code2, Cpu, Trophy, Users, Sparkles, Rocket } from "lucide-vue-next";
</script>

<template>
    <div class="container px-0 flex flex-col gap-4">
        <section class="relative overflow-hidden">
            <div style="background-image: url('hero.jpeg')" class="absolute inset-0 bg-cover bg-center opacity-30" />
            <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="inline-block mb-6 px-4 py-2 bg-hackclub-red/10 rounded-full">
                        <span class="text-primary font-bold text-sm uppercase tracking-wide">Official Hack Club Chapter</span>
                    </div>
                    <h1 class="mb-6 text-gradient-primary text-5xl bg-clip-text text-transparent">Dublin Computer Science Club</h1>
                    <p class="text-xl md:text-2xl text-muted mb-8 leading-relaxed">
                        The largest CS club on 4 campuses. We host hackathons, teach coding, build cool projects with electronics, and give out
                        free food.<span class="font-bold text-primary"> No prior experience needed!</span>
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/about">
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-elevated [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-primary text-white shadow-md h-14 rounded-full px-8 text-lg">
                                Learn More
                            </button>
                        </a>
                        <a href="/divisions">
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-elevated [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary/5 h-14 rounded-full px-8 text-lg">
                                Explore Divisions
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20 rounded-lg">
            <div class="container mx-auto px-10">
                <h2 class="text-center text-5xl mb-12">What We Do</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card title="Learn to Code" color="red" text="Workshops on AI developments, web development, and software engineering. Build skills that matter in the real world.">
                        <Code2></Code2>
                    </Card>
                    <Card title="Hardware Projects" color="orange" text="Build PCBs, work with breadboards, and learn Arduino. Get hands-on with electronics and IoT devices.">
                        <Cpu></Cpu>
                    </Card>
                    <Card title="Compete &amp; Win" color="yellow" text="Join our competitive programming team and participate in competitions. Test your skills against the best.">
                        <Trophy></Trophy>
                    </Card>
                    <Card title="Host Hackathons" color="green" text="Our event planning team organizes amazing hackathons where students build projects in 24 hours.">
                        <Sparkles></Sparkles>
                    </Card>
                    <Card title="Build Projects" color="cyan" text="Work on resume-worthy projects in our afterschool meetings. Create real applications and solutions.">
                        <Rocket></Rocket>
                    </Card>
                    <Card title="Middle School Program" color="purple" text="We teach middle schoolers Arduino and electronics. Inspiring the next generation of engineers.">
                        <Users></Users>
                    </Card>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center bg-gradient-primary p-12 rounded-3xl text-white shadow-elevated">
                    <h2 class="mb-4 text-5xl font-bold text-white">Ready to Join?</h2>
                    <p class="text-lg mb-8 opacity-95 text-white">Whether you're a complete beginner or an experienced programmer, there's a place for you in Dublin CS Club. Come
                        to our next
                        meeting!</p>
                    <div class="flex flex-wrap gap-4 justify-center"><a href="/divisions"><button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-elevated [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-md h-14 rounded-full px-8 text-lg bg-white text-primary hover:bg-white/90">View
                                Divisions</button></a><a href="/officers"><button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-elevated [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-2 bg-transparent h-14 rounded-full px-8 text-lg border-white text-white hover:bg-white/10">Meet
                                the Team</button></a></div>
                </div>
            </div>
        </section>
    </div>
</template>