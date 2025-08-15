import { Button } from "./ui/button";
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-zinc-900 text-white">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Ready to grow?</h2>
                    <p className="mt-4 text-zinc-300">PushSend makes generating sales conversations predictable and profitable. Book a call with our team to learn more.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-orange-500 text-white hover:bg-orange-600">
                            <Link href="/get-started">
                                <span>Get Started</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
