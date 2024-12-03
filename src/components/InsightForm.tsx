"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const InsightForm = () => {

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		console.log("Submitted data:", data);
		try {
			const res = await fetch("/api/insight", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),

			});
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Error triggering function:", error);
		}
	};

	return (
		<Form.Root className="max-w-4xl" onSubmit={handleSubmit}>
			<Form.Field className="mb-2.5" name="insight">
				<div className="flex items-baseline justify-between">
					<Form.Message
						match="valueMissing"
					>
						<Text size="xs">
							Please enter an insight
						</Text>
					</Form.Message>
				</div>
				<Form.Control asChild>
					<textarea
						className="w-full resize-none appearance-none rounded border border-black p-2.5 outline-none focus:border-black focus:ring-1 focus:ring-black"
						required
						placeholder="Enter your insight..."
						rows={5}
					/>
				</Form.Control>
			</Form.Field>
			<Form.Field className="mb-2.5" name="quote">
				<Form.Control asChild>
					<textarea
						className="w-full resize-none appearance-none rounded border border-black p-2.5 outline-none focus:border-black focus:ring-1 focus:ring-black"
						placeholder="Enter an optional quote, that is related to the insight..."
						rows={5}
					/>
				</Form.Control>
			</Form.Field>
			<Form.Field className="mb-2.5" name="source">
				<div className="relative">
					<select
						name="source"
						id="source"
						className="w-full resize-none appearance-none rounded border border-black bg-white p-2.5 outline-none focus:border-black focus:ring-1 focus:ring-black"
					>
						<option value="" disabled>Select one of your Sources</option>
						<option value="ThinkingFastAndSlow">Thinking, Fast and Slow - Daniel Kahneman</option>
						<option value="Sapiens">Sapiens: A Brief History of Humankind - Yuval Noah Harari</option>
						<option value="AtomicHabits">Atomic Habits - James Clear</option>
					</select>
					<ChevronDownIcon
						className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform" />
				</div>
			</Form.Field>
			<Form.Field className="mb-2.5" name="tag">
				<div className="relative">
					<select
						name="tag"
						id="tag"
						className="w-full resize-none appearance-none rounded border border-black bg-white p-2.5 outline-none focus:border-black focus:ring-1 focus:ring-black"
					>
						<option value="" disabled>Select one of your Tags</option>
						<option value="PersonalGrowth">Personal Growth</option>
						<option value="Finance">Finance</option>
						<option value="Productivity">Productivity</option>
						<option value="Philosophy">Philosophy</option>
					</select>
					<ChevronDownIcon
						className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform" />
				</div>
			</Form.Field>

			<Form.Submit asChild>
				<Button
					className="inline-flex w-full items-center justify-center">
					Add Insight
				</Button>
			</Form.Submit>
		</Form.Root>
	);
};


export default InsightForm;
