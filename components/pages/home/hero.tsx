import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link";

export default function HomeHero()
{
	return (
		<main className="grid place-items-center h-screen">
			<section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
				<div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
					<div className="space-y-4">
						<h1 className="text-4xl font-bold lg:text-6xl">
							QrPay
						</h1>
						<h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
							Fullstack contactless payment system
						</h2>
					</div>

					<div className="flex space-x-5">
						<Link
							href="./login"
							className={`w-auto ${cn(buttonVariants({ size: "lg" }))}`}
						>
							Login
						</Link>
						<Link
							href="./register"
							className={`w-auto ${cn(buttonVariants({ size: "lg", variant: "outline" }))}`}
						>
							Sign up
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}