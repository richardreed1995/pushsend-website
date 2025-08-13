import { Button } from "./ui/button";
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-zinc-900 text-white">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Ready to Accelerate Your Growth?</h2>
                    <p className="mt-4 text-zinc-300">Transform your business with expert HubSpot guidance. Whether you're just getting started or looking to optimise your existing setup, we're here to help you succeed.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-300 text-white hover:bg-blue-400">
                            <Link href="/contact">
                                <span>Get started</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
